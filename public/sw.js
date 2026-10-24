/* Warga Kasuari · service worker
   - Halaman & aset aplikasi: ambil dari jaringan dulu (selalu versi terbaru), simpan cadangan untuk dibuka saat offline.
   - Data (Supabase) dan pustaka dari CDN tidak disentuh: selalu langsung ke internet. */
const VERSI = 'warga-kasuari-v3';
const SHELL = ['./', './index.html', './app.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSI).then(c => c.addAll(SHELL)).catch(() => {}));
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSI) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('message', e => { if (e.data === 'pakai-versi-baru') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  const halaman = req.mode === 'navigate';
  e.respondWith((async () => {
    try {
      const res = await fetch(req, halaman ? {cache: 'no-store'} : undefined);
      if (res.ok && res.type === 'basic') {
        const c = await caches.open(VERSI);
        c.put(halaman ? './index.html' : req, res.clone());
      }
      return res;
    } catch (err) {
      const c = await caches.open(VERSI);
      const hit = halaman ? (await c.match('./index.html')) || (await c.match('./')) : await c.match(req);
      if (hit) return hit;
      throw err;
    }
  })());
});

/* Notifikasi (Web Push): SOS ke satpam/pengurus, kabar SOS ditangani ke warga */
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = {isi: e.data ? e.data.text() : ''}; }
  const penting = !!d.penting;
  e.waitUntil(self.registration.showNotification(d.judul || 'Warga Kasuari', {
    body: d.isi || '', icon: './icons/icon-192.png', badge: './icons/favicon-32.png', tag: d.tag || undefined, renotify: !!d.tag,
    requireInteraction: penting, vibrate: penting ? [500, 200, 500, 200, 900, 300, 500] : [200, 100, 200],
    data: {url: d.url || './'}, lang: 'id'
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || './', self.registration.scope).href;
  e.waitUntil((async () => {
    const list = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
    for (const c of list) {
      if (new URL(c.url).origin === self.location.origin) { await c.focus(); c.postMessage({buka: new URL(url).hash}); return; }
    }
    await self.clients.openWindow(url);
  })());
});
