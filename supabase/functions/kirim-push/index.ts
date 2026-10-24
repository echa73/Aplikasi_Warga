// Warga Kasuari: kirim Web Push (SOS ke satpam/pengurus, status ditangani ke warga, tes)
// Enkripsi RFC 8291 (aes128gcm) + VAPID (RFC 8292) memakai WebCrypto bawaan, tanpa library.
// Autentikasi sendiri: header x-kunci (pemicu database) atau JWT pengguna (mode tes).
// Deploy dengan verify_jwt = false. Kunci VAPID & x-kunci disimpan di Supabase Vault (push_vapid_public, push_vapid_private, push_kunci).
import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const SUBJ = "https://aplikasi-warga.kasuari.workers.dev";
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { ...cors, "Content-Type": "application/json" } });
const te = new TextEncoder();
const b64u = (b: Uint8Array) => btoa(String.fromCharCode(...b)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const unb64u = (s: string) => { const p = "=".repeat((4 - s.length % 4) % 4); return Uint8Array.from(atob((s + p).replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0)); };
const gabung = (...a: Uint8Array[]) => { const o = new Uint8Array(a.reduce((n, x) => n + x.length, 0)); let i = 0; for (const x of a) { o.set(x, i); i += x.length; } return o; };

let rahasia: { publik: string; privat: string; kunci: string } | null = null;
let vapidKey: CryptoKey | null = null;
const tesTerakhir = new Map<string, number>();

async function hkdf(salt: Uint8Array, ikm: Uint8Array, info: Uint8Array, len: number) {
  const k = await crypto.subtle.importKey("raw", ikm, "HKDF", false, ["deriveBits"]);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt, info }, k, len * 8));
}
async function vapidJwt(aud: string) {
  const h = b64u(te.encode(JSON.stringify({ typ: "JWT", alg: "ES256" })));
  const p = b64u(te.encode(JSON.stringify({ aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: SUBJ })));
  const sig = new Uint8Array(await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, vapidKey!, te.encode(h + "." + p)));
  return h + "." + p + "." + b64u(sig);
}
async function enkripsi(p256dh: string, auth: string, teks: string) {
  const uaPub = unb64u(p256dh), authS = unb64u(auth);
  const uaKey = await crypto.subtle.importKey("raw", uaPub, { name: "ECDH", namedCurve: "P-256" }, false, []);
  const eph = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]) as CryptoKeyPair;
  const asPub = new Uint8Array(await crypto.subtle.exportKey("raw", eph.publicKey));
  const shared = new Uint8Array(await crypto.subtle.deriveBits({ name: "ECDH", public: uaKey }, eph.privateKey, 256));
  const ikm = await hkdf(authS, shared, gabung(te.encode("WebPush: info\0"), uaPub, asPub), 32);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const cek = await hkdf(salt, ikm, te.encode("Content-Encoding: aes128gcm\0"), 16);
  const nonce = await hkdf(salt, ikm, te.encode("Content-Encoding: nonce\0"), 12);
  const k = await crypto.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, k, gabung(te.encode(teks), new Uint8Array([2]))));
  const rs = new Uint8Array([0, 0, 16, 0]);
  return gabung(salt, rs, new Uint8Array([asPub.length]), asPub, ct);
}
async function kirim(t: { endpoint: string; p256dh: string; auth: string }, payload: unknown, ttl: number, urgensi: string) {
  const body = await enkripsi(t.p256dh, t.auth, JSON.stringify(payload));
  const jwt = await vapidJwt(new URL(t.endpoint).origin);
  const res = await fetch(t.endpoint, {
    method: "POST", body,
    headers: { TTL: String(ttl), Urgency: urgensi, "Content-Encoding": "aes128gcm", "Content-Type": "application/octet-stream", Authorization: `vapid t=${jwt}, k=${rahasia!.publik}` },
  });
  await res.body?.cancel();
  return res.status;
}
function samaAman(a: string, b: string) {
  if (!a || !b || a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
const jam = (dt: string) => (dt || "").slice(11, 16).replace(":", ".");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Metode tidak didukung" }, 405);
  if (!rahasia) {
    const { data, error } = await sb.rpc("push_rahasia");
    if (error || !data?.privat) return json({ error: "Kunci notifikasi belum siap" }, 500);
    rahasia = data;
    const pub = unb64u(rahasia!.publik);
    vapidKey = await crypto.subtle.importKey("jwk", { kty: "EC", crv: "P-256", x: b64u(pub.slice(1, 33)), y: b64u(pub.slice(33, 65)), d: rahasia!.privat, ext: true },
      { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  }
  const body = await req.json().catch(() => ({}));
  let jenis: string = body.jenis;
  let ref: Record<string, unknown> = {};
  const kunci = req.headers.get("x-kunci");
  if (kunci) {
    if (!samaAman(kunci, rahasia!.kunci)) return json({ error: "Tidak diizinkan" }, 401);
  } else {
    const tok = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
    const { data: u } = await sb.auth.getUser(tok);
    if (!u?.user) return json({ error: "Tidak diizinkan" }, 401);
    jenis = "tes";
    ref = { userId: u.user.id };
    const akhir = tesTerakhir.get(u.user.id) || 0;
    if (Date.now() - akhir < 30000) return json({ error: "Tunggu 30 detik sebelum mengirim tes lagi" }, 429);
    tesTerakhir.set(u.user.id, Date.now());
  }

  let payload: Record<string, unknown>;
  const d = body.data || {};
  if (jenis === "darurat") {
    let blok = "", nama = "";
    if (d.wargaId) {
      const { data: w } = await sb.from("dokumen").select("data").eq("koleksi", "warga").eq("id", d.wargaId).maybeSingle();
      blok = w?.data?.blok || ""; nama = w?.data?.nama || "";
    }
    payload = {
      judul: `🚨 DARURAT: ${d.jenis || "Panggilan darurat"}`,
      isi: `${blok ? "Blok " + blok + " · " : ""}${nama}${d.waktu ? " · " + jam(d.waktu) : ""}${d.pesan ? ' – "' + d.pesan + '"' : ""}. Ketuk untuk menangani.`,
      tag: "darurat-" + body.id, url: "./#keamanan", penting: true,
    };
  } else if (jenis === "ditangani") {
    ref = { wargaId: d.wargaId };
    const t = d.ditangani || {};
    payload = {
      judul: "✅ Panggilan darurat sedang ditangani",
      isi: `${t.oleh ? t.oleh + " " : "Petugas "}sedang menangani panggilan ${d.jenis || "darurat"} Anda.${t.catatan ? " " + t.catatan : ""}`,
      tag: "darurat-" + body.id, url: "./#aman",
    };
  } else if (jenis === "tes") {
    payload = { judul: "🔔 Tes notifikasi Warga Kasuari", isi: "Notifikasi di perangkat ini sudah aktif. Panggilan darurat (SOS) akan muncul seperti ini.", tag: "tes", url: "./" };
  } else return json({ error: "Jenis tidak dikenal" }, 400);

  const { data: target, error } = await sb.rpc("push_penerima", { jenis, ref });
  if (error) return json({ error: error.message }, 500);
  let terkirim = 0, gagal = 0, dihapus = 0;
  await Promise.all((target || []).map(async (t: { endpoint: string; p256dh: string; auth: string }) => {
    try {
      const st = await kirim(t, payload, jenis === "darurat" ? 900 : 3600, jenis === "darurat" ? "high" : "normal");
      if (st >= 200 && st < 300) terkirim++;
      else {
        gagal++;
        if (st === 404 || st === 410) { await sb.from("push_langganan").delete().eq("endpoint", t.endpoint); dihapus++; }
        else console.error("push ditolak layanan", st, new URL(t.endpoint).host);
      }
    } catch (e) {
      gagal++;
      console.error("push gagal", (e as Error).message);
    }
  }));
  return json({ jenis, penerima: (target || []).length, terkirim, gagal, dihapus });
});
