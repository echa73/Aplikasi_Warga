/* ---------- tema ---------- */
const HOST_THEME = document.documentElement.getAttribute('data-theme');
const temaGet = () => { try { return localStorage.getItem('warga-tema') || 'otomatis'; } catch (e) { return 'otomatis'; } };
function terapkanTema(t) {
  const r = document.documentElement;
  if (t === 'terang') r.setAttribute('data-theme', 'light');
  else if (t === 'gelap') r.setAttribute('data-theme', 'dark');
  else if (HOST_THEME) r.setAttribute('data-theme', HOST_THEME); else r.removeAttribute('data-theme');
}
function setTema(t) { try { localStorage.setItem('warga-tema', t); } catch (e) {} terapkanTema(t); }
const temaGelapAktif = () => { const a = document.documentElement.getAttribute('data-theme'); return a ? a === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; };
terapkanTema(temaGet());
/* ---------- util ---------- */
const LOGO = 'data:image/webp;base64,UklGRuIVAABXRUJQVlA4INYVAABwUgCdASqJAKAAPkkejEOioaGX2o5sKASEtQBnzBNCf+O80Wsv3z+ufpT+0e6Ts16o8p/mr/X/dZ8xP+J6k/MC/WjpleYX9y/Vz/4Hqj/rH+0/Jn5AP2C///tOf8n2T/QW/dj04v3V+G7+9f9L9vPa7zF3t+/yHh7+OfUv4L8vucn1P5k/yP7Z/hv6n+3v925jeAR+Ufzn/Dfmd/ZeOemk9QXuT/g/7b+6n9u9Nb/F9GPsh/yvyZ+gD+Tf0D/Vfmz8M/7TxOvUP7X7gv9O/vH/H/y/5AfTL/S/9z/Pf5391/dt+ff5T/qf5z/Kfst9hX8z/qX/D/uX+Y/8P+e///1v9UP+2rgkej2l8VUQFLAEBdfW+Xapzch/QJrUFZdsavbGow+BhAajn+gvYSnqOHreIH7Xcnm7zBzz32IlyMFWJh6m1uGDZwkcQl3d9WCn8rrVMvhmq6OnaYBgziAKsrdp1076Hd1NWq4wiJPTmRtYqGiMxgYK6ybPeLyFN6gxTua6Al86JGVCleH0TaS2MQmsoLOyw5gp8ugG4CavUOAC8c6gFLbhfTJ7hOlVW4R25P9xfZcPdlidcy8w8wpHQAEGcafnD2SDiljZYVIdG19GpcZQkddAMNN2ttMmo52UFlDNi6hxKslz758gfY8Gkisk0bDM66n80cypl1F1hbgPl4kVdsxXg0Civ+OHLxpgrX8ITgrkU9BDKoq4N6SshojAAv31fcTEg7svwWRq5L0VeJzksLHVemqcVuXeHP5en+CkGw+NhnomQ19/Y+9UCVh/qCBou24VNT6oH0rzPm5woc0iNoemDpVDlHsRpyca+55+zU1NMKtFfJ2hr2qzUAKEY33SDfn0TvQjP9Fio0ydc+psXNej34l7U4WV0AD+//ShCD3w1ALGfos4rleSEHEHyLT1YxUpL55fSHcewE8+L3vN80234jZBMKtdYUZTIDZxJNsnDoBgSqOzOhy9DeXCt5mq+K13g9gqyoNTkOfLkbwCcIr6KJlvxF/emifUmh2lX+LCcfeyI/EmuzIY/tM/rvHm9IF0O7MGSj0wCteY+Xf6r3IMivBce1ZYlh6hOq+MfmJi2PW6HCyd3akwa/FQU1y09s+jVtXeSwEHOEpJi74kqtwQEbNeIAAS5ifJDA1PyPoRwPCVg1ZIKNYTcBlMoI/TZAyTbJUU5AYoqIYoFzTQFX3Q6/mMwa6q8rwKzCFSPQuDZKt2+/n+OEjOwIcq0WegCQ2IssY6I4dU3rBVldxcskYFJb4j4bvFj/3i5Xpqk7nLb28iRc7HrKaJ9QuGiF2jOhweRQjC3/Tyxd3fMRHJXVVRKrxSn8ULEXILRUKgVyYEnWE6JdPN3JcgXPH8TfwXlPuQhnzfKJ81xs4AfD7bOHg6wDOp2vy3/HVs/0Od2sbCXst+Y2fsnHzrE6Jr3CSpo2FJYH653RcBnyiB8GXPa7qlsFKoil5VxVxbHaY8jDSOJymzqbs9zY1tjrldBddKrVMoJ1epVxKFoWioyhkut3OGAL40zQF4KbNEisqVTKeIsWVPB9jN3Ii+xQDBIAGwenSDNor99T7L/awMMOwnPORnjUzds40Sd9394NTmdS1CEb0K2hCF5BhmDzN+ox7dEPcyDz4W8HquNxazTbCW95ffovmwxKE9lzcRiKgaKakKsxQ4/8oTayH21Ti2563RwIxmKuFy3+0UWA/qkH03y2G0WkbRKuZpx4vvfQOB/HHgZDhGVTrTcymUceot1Ny707GOfNBjG8bD2Dd6GPm6PX+EK+1pzr5XOQSCsATpoZXj21YMCgzClWCQ9zp8o9huwU+z1N8NRq75uZdjIsFyuoSMDYbVv/u55BE9D8cIFjBpBqCQuHQxz5V8XIzkKyydWhRNPuz72WCpAmm9Vz/5b8QZm3KgDYsrUYd+0V9qjquPHi0hz7Wq7DtkxT8aPZA5jwWOcbp2uQkV3gj38tVgTz5SN3A7CZ4GjX6V+L8+g8TSXFED+M5oqygNJgyRY3LLqibzMGi6OsxJQYq8Itn0OTVd1STl6+77R8JnBy2nha6eDwCA14SwyF5XpqnvX0nng62nrlJTYcb3iGQVFKyjWrzR6ZCZ7/tXL5tAKPDpAk13L7EDefRteIOWMena153pQnrVLH9JihOFF/Xh/59VQPiCwXyBRdhupB0xIUXqnQDy8XP0C3DrsF+Sl0ICdZ7sbzECN2dVmGGBrIhZiU6koM0iUMkGZt6ty5ByrLBb1bdGxzvtAwl7VFqiiDbySS3l6CPWDMsaHOizgZsyTRhO6ADJ7kJtX6afo0Ne76hp0DxyEupd3AF+ltON6GR2qIPVP1TId6wQm8fbbeQ5y9D42yxZsTM2FAnLkOXdYNS6grv01a22H6P92BC4eihR40R9AC57yrw3h7O1eINiBMFxpopLiTIgEB8CxrWibD+gLm1CX22cOMu/2GnpbolGlnp0DceDaylVzODWTkdBHixUK/4//SLc1QCGn0MI3y7uGg/Mr/plH/hCAZo+iGfs+q39cscU31zI0hBxN3yDTqE7j3wqQ3HBv3Yc9H7UDIgWeR/2SkFKNWwQ34hNXMfT4KstiztZz2F/EjOUNjzea+Wy3M1D53QqzzIYzHX16ZrzIZC2jZkVNKHbWZwXX+Tr6+cEqS/1PrUzphCub/bMnOCqOvvga7wN0ISpRcs8FBHuH0tDdX3bfbbZNXl+bu22M8rsd76P1lQLwCPoWKkQTN63syHUXidTR9qK/VZfklKZi+flT0pqop/Pk4rQ56ohx/BOUx7a0k2BA5fMkbbU23VMxyiwEliJ9AOHMOJ6O0MAlqzVuih04OI9exExLA0pst/fJyK2nxeJ2LER2UQ+h0eYUf0Ll6XDLQFcxmd+0PiOmanegaQMPk99iumCGqB+ekSac7tfmIVoaAKY7FoJ0sNbOQg9x/PZQr00yImHEhwxltKFjW7Q6N06Plf81ubRMBv7mdkocBdaI8Rnyp4dVnd/29QfpoQU0lP1g7FRUE6CDdGVXhLBXwloQZY8LTMd78nwNlGpM4nLYD70gZO664D8PKSYZp2bG+iD4foPpK4e2XbKfU4RX50KRYNzeG5H/ywAihRkrRGpK6CePat9HAtahNvDi7ObdhWuWk9fA+JDBxwRvMR9ZiW+KULvsDgZ5MNJwSBIQ5OWMJnMdRPu0eLu8ApI0dAr4vV9iKTdcCktZC8/EU59HkBCbFIOrTl5Ns7Piv5F3rsK5xA8jn4lm6Q6fOyl7Yj6doiR8ss6CdVHTPhud1UanmiIgVLcrcMx0JSOMJ2eXlioHguQy8Rk3/hiWiZ/MRfySnzqiOw2jmhgC9xBOlmFMs7/hZKrKS941g5tht9UEvJ5g7XZ3g7eYUzluufed6DM9EmMf4iEt1AarCpBgriUJchPo8jmdi5iPCrw20J3V3y/sFwdLYpFjYeKW/5DI+0Elc+ZoQh0rK4sS6EH7M8F6YMa0TMRpo/akaBidcKuxFT7FAVlfAEb6KbZcd5rxB4cPJ5hQxzZMz9K9uTHGWdM/s8Sbt+kHc79kaDQ5J4nBFb0KIqMwZMpyyvnIo7Pq9PLomBAfngAC5BzwSnieRUbVS2cDRIcXeBUPRmnxXYnMXAFuHSMfs/fl2JZyVne9Iaz6ez9FjUldHDnHeeeRHweHBcIKZ9glfob9h4wtm4Qv1AY+xRaL/HebgUyOzYQ0UIYwb9La5bcnBmIBSblsIfIsKrlo9hf+EfT8KVoiu4mZgZ3Rb+9rydxabeftAnXTBr4tTKJ0Wu5/PoOmJtji8cOmYxTxb0vTRsWOsQqb77TIgEsLOtc0cd3yJ+cwI35Q4xHLOIP7spJqNsHOeTSLp7AF5Mi6U0bLgjAwMDqP8Ppe+IMGQcwCSsMmjLbbmBaOZ9LU4bwS97HhmlK4qbEZSixZAvUuSnLP4/Nt+sWuhtK1Wo4h7I+FrfV2Ed7UoZvVVklPhMlks913hKbvIavKot3B/QR/A8NmjpQCoJdHDVXXkUQxHN/7R7vCXaBgp6RU2GWmpP/JWjnAtZf9y+TFj8ZIHp2EXco5ynlX7APG2ZJDn/ax75vvf+wWef/mbRpoJcGYSiAiL8bWU+pbcZYi0pzL3FYDLJ4o9fU5H/MX+QKHAeZ6R62jMt2SGIWd++7ru7/QO/biHgmsCvI3BlpOLp3hFOaSSM2dFVUX8FGS18QxdODfl/lNFzTRMOLLtjGzoq7I1tkKCjfXYEgA9D4r2c/pbUcgqUH5q1DbVDACYwMjy8CgM+z/OsQjqNHfoSYAeZ4elnx1REXBdf82wuntqnJjm6GHLPiNjNfqADudBKd/Wi6RAldKJU8vlmkP1cllXggzfnzqUGi1CUy5QPHr+/n1I2nVyK9MOrTQujnx9Bcvwh2C/Rqc8d5rkU5MmpA27GxAiAEDyBZUAzVBB3uSGxBwpOpYg1tBVvxrtrY5h24QyTF9uOoWiaSlV7U3D6tA1YhIyDzg6+07ZUVK5DUDNgrksbW5+7N/aPaCxmxJ1jiA+xyz59jyNP3K/jztm24VOrA0j07muqU2EoKdMKdIQvMvJwG7eaQLu3xw7koILe0Ce1bQb6H0P8+ZVNqLmt0RwmvQNEVEsr4WS1I1O7BWxDjCNxfyH7/PMTvJkRXRV2c+Kp900+BUKZ/ZKXiAKFBUiPEfqotwFog1zktmTSiJyOC8e0sLvWlaP0zIb0kf/BmIkAKbVf7pxNOWA98C7sCvlr7lVxMuEg7b+k/wBvGmiRxUHQ2WDa0DQRZoMjdPmI95C39tkXZOM8pmxC8JlnSjtRqi3/wvESGj4rbrg2ltBmAULH5MFeS+lKPZV1RZcnN7e1OkpAtOrbhKoZ+NhxJgF/7KLiRLVGK02vYCM8GnzSY5D/TZkQ+XYOyrQ4u+AAhixq9/kZnJwe8WoCenNIt2rcxd/5rtahJLImZWI+oDzarqLZf3l1k1yuLbtZDH/eY4otKA0xnEk7pTxINbQ4amuSoIUi6qTWm485dlpqKOGdGVY4SWh1qfp5jkcT7zGXcU9QOs1mCn4m3GYPDVj01ta3EA6aE0cMwMv7s/WRkDS2EdxiDmFeL+Q92/nV088wlDM/jqaJDdVi/y1UDjNycMcYR109KFmKNZQIOj2sQrLzmHyVAATBvhLjjYYq2P7iAoSUX2YQ4cI3id58feG5WHer/noWe2l5EDseGHWkFx6w/EU0ZIpCYx9ANjeAKGOTmzvJyxZEP3U0b0rc8hj9FWKqTaqGSZs/P19cCLfZrIf/kvC5wIwvZtYDwZ1+/sXjntchi0c9HRE3FfgXz7QGqFo7iSsDHjV8Rx1fuyn/Fr9jmLKo72Osyfu9dpnJe7cGV1dBa3erMyTaz5YAEIQv8a4E1k5pTNmce/ikpwS8AAjPf0r6vIF9e0f+1Sj6nKxxAbGfhst9DIh4tulNuhVOBgh9EguwEevkr2r03qXk1F4p1jOyYCfCfdNvtD7ca4slAWjRKBpko01mBUZHJLxdlTd/Fb6E9P1dOHKcHdxXkN/sct5UfjOEXdsDMQ/RW5wdadt4rGWHhJXW4QXxVnctgbCjrcqqBadmsYaKjXMw7SgbaMIIL3I5wPqhXYzp/5yD1jsC2J3r7eHr+/1a6Asom5wWMnNRdEWOdP3hL3lP64PzdqgaJwUyqcE5eg1G5WI6Q4mpg8bFaN7n/0QFHBWnul9nkS4EEuEkk6DK+1T8R0do6Y9UateK9FgIs9+6JQT/bF8XnDFMHpLiQJULsdP1L+IIp/8SD2wRi+pjE9FTIWC2t29L+RYIbq50PnZF/l7isVYD0J3GwIKrKdpPS6VU3Ab8/G5iySaKZQI6GIaLFWj2bWQL+r8GaXYXlDhT1e1RBukHL2ZT3TWPh1xLMiY/AU5SPTTaEhFL46vZyFYfLZNA6MGgZ5rMbOCR0aHo7D1+iufWxjbgyqOdsRJDL+VK2q87HWcUsBqmDhJKHY3rYHYKHgs7+XjsS6atZFmLYsqC4/X9xM0MUOwsdABlFT/4F/FNAgPNWYtf+Vza6dVuIIv8vw+/S8Gt2klGvsn/lRmzUqC/4d7FFaCsTr+oDu7CaaP7X1k2MBnlB7TPy9JhoabswZCbCf5/iZH8S5/lyC1LcpAcF00TAYJMmy9ESZk+ZyqCpPno3Kor9b1V5xmgDtBRdxlCaOmThlX1YR1bU9NeSIQ5mPogNPK9F9B8Cp73NSPIsRJnSYDOCn7Eh8evnmtRDaW8ooMNT/trLE5sBZoM1JCdAhZ4ZuwJlZVjkukmqGac/x+1IPSIa7mwBS8REQ9zL9uiA6BetvnoiV+CML+1rGzKgVvkv0rT+NFMLCqf/q4WNfzw00aXJghZNDnAKIm2F70ethRhAEcnPJVkMhRQxMfu3roHYYBmLf9JXwbvMss+g60JFgCr8nJNuOV/SUjyt9idG4D4Z+pPLoXpIMNFRegE7+3FLLvjhBWye1G/Q5vZAkGcl15z7JjscrOPlLQDlOtLwDK+vv+r8baSQRBTE3EPIlw5iG5b+l19KBkA7V5dXBd/GNO7sQ9gKB32pM3CaFWQCpvBBbyPMnxPURW/GdJzbhPrkvDPaCqKU5UjW/SQmue8CElPo1CibtvNIoH82c6HuoAp8oIKHRjZ/uAvx9AIRqh0YkkwUCK3sswu9jBkq2qGYwJ3tmWDyW+yeQrxR1SMxBXW8uP7kA86yBfciB2FAmiG7/vWAX38QDxPQQid5i5TRE+f8cDJ39/4UmY1k4mQtmITfNo3jKOKCtBupzCBL7fu/GOIsCxXMKvK38op8zF0lLfqjD41uP+ltZoHx5DGBUmICfp0YsepGgG8APqpMVobpemtNTqQPX1MfP7L7ai1TMz1A/d8Smey2F6/ZbH25myqc4j0E20dcr1gQQ6DV7wENHARNB4Tm5xEuNOHBvQNhH+H76k9BZ+R98RQc35OO9d33qHOL7Ui2dU21I8503pRbxjXGYyeYfVu9Jjzo1P662Yzu4LbolvMu6ueMzHgPDqnHfhcjnRLuIWSC/1tbkfKIx4HIUiW//AiW+bi/0JBKWzAjhwYRQtY7H5cTpLjNZopXc9g+PO8ihhMJfBoRROCMrka5Nr5aW3Dva7aVHzF43XDejffnqZIRTR9+N3bDeV2KOvyrnzT2hOJKN8wCHGn06kK5Yraig+PnqqdWHS/DtP3yIBEzxQRjtbl98znUIS8pma/uxEq0hqinKNos8A5ymiyluAOxIg1iaFfSzn2cajSuJMB7AaoxTqXnDZgoUv8o+n4O0won53mKXM1Bm+3QbfwvlPYBNMXlLyaS+5lHitbe2Jt2WYwlkGh9ZCmIR7qvAtmPqVmi/PBzW52kxC+6cmj7OuNQPbgn9UsXxeTPmv1flserf2RI8/V//tjmydG7f265bkkeVXQjKezdDOhWREf1rcxxVwsPy9S9Xr01/xPzQ3xnl0i7huNC9BQglOPIZcTqbgAAAAAA';
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nf = new Intl.NumberFormat('id-ID');
const rp = n => 'Rp ' + nf.format(Math.round(Number(n) || 0));
const BLN = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
const BLN_L = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const pad = n => String(n).padStart(2, '0');
const nowPer = () => { const d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1); };
const todayISO = () => { const d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
const addM = (p, n) => { let [y, m] = p.split('-').map(Number); let t = y * 12 + (m - 1) + n; return Math.floor(t / 12) + '-' + pad(t % 12 + 1); };
const perLbl = (p, long) => { if (!p) return '—'; const [y, m] = p.split('-').map(Number); return (long ? BLN_L : BLN)[m - 1] + ' ' + y; };
const tgl = iso => { if (!iso) return '—'; const [y, m, d] = iso.slice(0, 10).split('-').map(Number); return d + ' ' + BLN[m - 1] + ' ' + y; };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const sortHouse = (a, b) => String(a.blok || '').localeCompare(String(b.blok || ''), 'id', {numeric: true});

const KATEGORI = ['Kebersihan & sampah','Keamanan','Jalan & saluran air','Penerangan jalan','Air & listrik','Fasilitas umum','Ketertiban & tetangga','Lainnya'];
const PRIORITAS = ['Rendah','Sedang','Tinggi'];
const STATUS_K = ['Baru','Diproses','Selesai'];
const METODE = ['Tunai','Transfer bank','QRIS / e-wallet'];
const HUNI = ['Pemilik','Kontrak / sewa','Keluarga pemilik'];

/* ---------- state ---------- */
const S = {
  infoPub: null, warga: [], iuran: [], keluhan: [], kas: [], keuangan: [], pengajuan: [], pjFilter: 'menunggu', sumbangan: [], donasi: [], salur: [], struktur: null, pekerja: [], gaji: [], gjTab: 'gaji', gjPer: nowPer(), gjTh: new Date().getFullYear(), lapak: [], lpTab: 'semua', lpKat: '', lpQ: '', lpSort: 'baru', rohani: [], qurban: [], bersih: [], blok: [], brTab: 'beranda', brTgl: todayISO(), brKgF: 'datang', rhTab: 'beranda', rhAgF: 'datang', rhAgama: '', qbTh: new Date().getFullYear() + (new Date().getMonth() >= 6 ? 1 : 0), sbSel: null, sbTab: 'penyumbang', sbFilter: 'aktif', sbQ: '', sbPub: null, sbMz: null, pengumuman: [], surat: [], notulen: [], ntQ: '',
  set: {nama: 'Villani 5', iuranBulanan: 50000, rt: '', rw: '', kelurahan: '', kecamatan: '', kota: '', ketua: '', ketuaRw: '', saldoAwal: 0, saldoTgl: ''},
  kasPer: nowPer(), infoFilter: 'semua', suratQ: '', kmTab: 'pos', kmQ: '', tamuF: 'dalam', paketF: 'pos', kmMinggu: (() => { const d = new Date(); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); })(), tamu: [], paket: [], titip: [], kejadian: [], jaga: [], darurat: [], nomorDarurat: [], lapMode: 'bulan', lapPer: nowPer(), lapTh: new Date().getFullYear(), lapQ: Math.floor(new Date().getMonth() / 3) + 1, lapDari: '', lapSampai: '', pgMode: 'bulan', pgPer: nowPer(), pgTh: new Date().getFullYear(), pgQ: '', pgKat: '', akunWarga: [], loginMode: 'pengurus', wUserDraft: '', nikBuka: new Set(),
  tab: 'ringkasan', mode: 'memuat', readOnly: false,
  per: nowPer(), q: '', fBlok: '', iurFilter: 'semua', iurMode: 'daftar', mz: null, kelFilter: 'terbuka', kelQ: '',
  loaded: false,
  me: null, owner: false, admin: false, akses: [], minta: [], masuk: false, names: {}, hasil: [], qUser: '',
  pengurus: [], peran: [], admTab: 'pengurus',
  sesi: null, pilih: null, keamanan: {}, pinGagal: 0, pinKunci: 0
};
let U = null;
const MENU_IZIN = [['ringkasan', 'Beranda / ringkasan'], ['portal', 'Rumah saya (data diri)'], ['warga', 'Data warga'], ['iuran', 'Iuran'], ['kas', 'Kas RT'], ['pengeluaran', 'Pengeluaran kas'], ['laporan', 'Laporan keuangan'], ['sumbangan', 'Sumbangan'], ['gaji', 'Pekerja & gaji'], ['keamanan', 'Keamanan (satpam)'], ['jaga', 'Jadwal jaga satpam'], ['kebersihan', 'Kebersihan lingkungan'], ['keluhan', 'Keluhan'], ['info', 'Pengumuman'], ['rohani', 'Kerohanian'], ['lapak', 'Lapak Warga'], ['surat', 'Surat'], ['pengaturan', 'Pengaturan']];
const LVL = {tidak: 0, lihat: 1, kelola: 2};
const LVL_LBL = {tidak: 'Tidak bisa buka', lihat: 'Lihat saja', kelola: 'Lihat & ubah'};
const MENU_IZIN_UI = MENU_IZIN.filter(([m]) => m !== 'portal'); // Rumah saya khusus tampilan warga
const semua = v => Object.fromEntries(MENU_IZIN.map(([k]) => [k, v]));
const DEFAULT_ROLES = [
  {id: 'ketua', nama: 'Ketua RT', ket: 'Semua menu, termasuk pengaturan', izin: semua('kelola')},
  {id: 'pengurus', nama: 'Pengurus', ket: 'Semua menu kecuali mengubah pengaturan', izin: {...semua('kelola'), pengaturan: 'lihat'}},
  {id: 'bendahara', nama: 'Bendahara', ket: 'Iuran dan buku kas', izin: {keamanan: 'tidak', portal: 'tidak', ringkasan: 'lihat', warga: 'lihat', iuran: 'kelola', kas: 'kelola', sumbangan: 'kelola', gaji: 'kelola', keluhan: 'tidak', info: 'lihat', surat: 'tidak', pengaturan: 'tidak'}},
  {id: 'sekretaris', nama: 'Sekretaris', ket: 'Data warga, keluhan, pengumuman, surat, notulensi rapat (buat & kirim)', izin: {keamanan: 'tidak', portal: 'tidak', ringkasan: 'lihat', warga: 'kelola', iuran: 'lihat', kas: 'tidak', keluhan: 'kelola', info: 'kelola', surat: 'kelola', pengaturan: 'tidak'}},
  {id: 'lihat', nama: 'Lihat saja', ket: 'Hanya melihat, tanpa pengaturan', izin: {...semua('lihat'), pengaturan: 'tidak', portal: 'tidak'}},
  {id: 'satpam', nama: 'Satpam', ket: 'Pos jaga: tamu, paket, titip rumah, kejadian, jadwal jaga', izin: {...semua('tidak'), keamanan: 'kelola', jaga: 'lihat', warga: 'lihat', info: 'lihat'}},
  {id: 'koord_keamanan', nama: 'Koordinator Keamanan', ket: 'Mengelola keamanan & satpam, pengumuman; melihat data warga dan keluhan', izin: {...semua('tidak'), ringkasan: 'lihat', portal: 'lihat', warga: 'lihat', keamanan: 'kelola', keluhan: 'lihat', info: 'kelola'}},
  {id: 'koord_kebersihan', nama: 'Koordinator Kebersihan', ket: 'Menangani keluhan kebersihan & lingkungan, pengumuman kerja bakti; melihat data warga', izin: {...semua('tidak'), ringkasan: 'lihat', portal: 'lihat', warga: 'lihat', keluhan: 'kelola', kebersihan: 'kelola', info: 'kelola'}},
  {id: 'koord_kerohanian', nama: 'Koordinator Kerohanian', ket: 'Kegiatan keagamaan (pengajian, Ramadhan, qurban, santunan), pengumuman kegiatan; melihat data warga dan program sumbangan', izin: {...semua('tidak'), ringkasan: 'lihat', portal: 'lihat', warga: 'lihat', info: 'kelola', rohani: 'kelola', sumbangan: 'lihat'}}
];
const LEGACY = {'Ketua RT': 'ketua', 'Pengurus': 'pengurus', 'Bendahara': 'bendahara', 'Sekretaris': 'sekretaris', 'Lihat saja': 'lihat'};
const rolesAll = () => S.peran.length ? [...S.peran].sort((a, b) => (a.urut ?? 99) - (b.urut ?? 99) || String(a.nama).localeCompare(String(b.nama))) : DEFAULT_ROLES;
const roleById = id => rolesAll().find(r => r.id === id);
const AREA = {notulen: 'surat', blok: 'admin', bersih: 'kebersihan', pekerja: 'gaji', gaji: 'gaji', qurban: 'rohani', lapak: 'lapak', donasi: 'sumbangan', salur: 'sumbangan', keuangan: 'kas', pengajuan: 'pengeluaran', pengumuman: 'info', pengurus: 'admin', peran: 'admin', akunWarga: 'admin', tamu: 'keamanan', paket: 'keamanan', titip: 'keamanan', kejadian: 'keamanan', jaga: 'jaga', darurat: 'keamanan', nomorDarurat: 'keamanan'};
const areaOf = c => AREA[c] || c;
const bolehPemilik = () => !!S.owner;
const bisaKelola = () => S.sesi === 'pemilik' && bolehPemilik();
const pengurusAktif = () => S.pengurus.filter(p => p.aktif !== false).sort((a, b) => JABATAN.indexOf(a.jabatan) - JABATAN.indexOf(b.jabatan) || String(a.nama).localeCompare(String(b.nama)));
function pengurusSaya() { return S.profil && S.profil.peran === 'pengurus' ? S.pengurus.find(p => p.id === S.profil.pengurus_id && p.aktif !== false) || null : null; }
function pengurusSesi() { return S.sesi && S.sesi !== 'pemilik' && S.sesi !== 'akses' && !S.sesi.startsWith('w:') ? S.pengurus.find(p => p.id === S.sesi && p.aktif !== false) || null : null; }
function aksesLama() { return null; }
const isSatpam = () => { const r = roleSaya(); return !!r && r.id === 'satpam'; };
function roleSaya() {
  if (!S.sesi) return null;
  if (S.sesi === 'pemilik') return bolehPemilik() ? {id: 'pemilik', nama: 'Pemilik', izin: semua('kelola')} : null;
  if (S.sesi === 'akses') { const a = aksesLama(); return a ? roleById(LEGACY[a.peran]) : null; }
  if (S.sesi.startsWith('w:')) return akunSesi() && wargaSaya() ? ROLE_WARGA : null;
  const p = pengurusSesi(); if (!p) return null;
  return roleById(p.peranId) || {id: 'x', nama: 'Tanpa role', izin: semua('tidak')};
}
function namaSesi() {
  if (S.sesi === 'pemilik') return (S.me && S.me.name) || 'Pemilik';
  if (isWarga()) { const w = wargaSaya(); return w ? w.nama : 'Warga'; }
  const p = pengurusSesi(); return p ? p.nama : (S.me && S.me.name) || 'Anda';
}
const peranSaya = () => { const r = roleSaya(); return r ? r.nama : null; };
function izin(area) {
  if (area === 'admin') return bisaKelola() ? 'kelola' : 'tidak';
  const r = roleSaya(); if (!r || !r.izin) return 'tidak';
  const v = izinRole(r, area);
  return LVL[v] !== undefined ? v : 'tidak';
}
function izinRole(r, m) { const iz = (r && r.izin) || {}; return iz[m] !== undefined ? iz[m] : (m === 'pengeluaran' || m === 'laporan' || m === 'sumbangan' || m === 'gaji') ? iz.kas : (m === 'rohani' || m === 'lapak') ? iz.info : m === 'kebersihan' ? iz.keluhan : m === 'jaga' ? iz.keamanan : undefined; }
const lihat = area => LVL[izin(area)] >= 1;
function bisa(area) { if (S.readOnly) return false; return izin(area) === 'kelola'; }
const hanyaLihat = () => !['admin', ...MENU_IZIN.map(m => m[0])].some(bisa);
const dis = area => bisa(area) ? '' : 'disabled';
const nama = id => (S.names[id] && S.names[id].name) || (S.me && id === S.me.id && S.me.name) || 'Pengguna tanpa nama';
const avatar = id => (S.names[id] && S.names[id].avatarUrl) || '';
const sesiKey = () => 'warga-sesi:' + ((S.me && S.me.id) || 'lokal');
function sesiGet() { try { return sessionStorage.getItem(sesiKey()) || null; } catch (e) { return null; } }
function sesiSet(v) { try { v ? sessionStorage.setItem(sesiKey(), v) : sessionStorage.removeItem(sesiKey()); } catch (e) {} }
async function hashPin(pin, salt) {
  const txt = salt + ':' + pin;
  try { const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt)); return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join(''); }
  catch (e) { let h = 2166136261; for (let i = 0; i < txt.length; i++) { h ^= txt.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return 'f' + h.toString(16); }
}
async function buatPin(pin) { const salt = Math.random().toString(36).slice(2, 12); return {pinSalt: salt, pinHash: await hashPin(pin, salt)}; }
let DB = null;

/* ---------- Supabase ---------- */
const SUPA_URL = 'https://newvddbfrcyoxxblmmby.supabase.co';
const SUPA_KEY = 'sb_publishable_K6jRKltMlpE7-IMRJQGkkw_2eZtxPvs';
const WARGA_DOMAIN = 'warga.kasuari.app';
const KOLEKSI_SB = ['warga', 'iuran', 'keluhan', 'kas', 'keuangan', 'pengajuan', 'sumbangan', 'donasi', 'salur', 'rohani', 'qurban', 'bersih', 'lapak', 'pekerja', 'gaji', 'blok', 'pengumuman', 'surat', 'notulen', 'tamu', 'paket', 'titip', 'kejadian', 'jaga', 'darurat', 'nomorDarurat', 'pengurus', 'peran', 'akunWarga'];
let SB = null, SB_CH = null, SET0 = null;
const CACHE = {};
let sbTmr = null;
const sbSched = () => { if (!sbTmr) sbTmr = requestAnimationFrame(() => { sbTmr = null; render(); }); };
function taruh(kol, id, data) { (CACHE[kol] || (CACHE[kol] = new Map())).set(id, data || {}); }
function buang(kol, id) { if (CACHE[kol]) CACHE[kol].delete(id); }
function sinkron(kol) {
  if (kol === 'pengaturan') { const u = CACHE.pengaturan && CACHE.pengaturan.get('umum'); S.set = {...SET0, ...(u || {})}; return; }
  if (!KOLEKSI_SB.includes(kol)) return;
  S[kol] = CACHE[kol] ? [...CACHE[kol]].map(([id, d]) => ({...d, id})) : [];
}
function sbErr(error) {
  const e = new Error((error && error.message) || 'Gagal');
  const msg = String((error && error.message) || '');
  e.code = error && (error.code === '42501' || /row-level|permission|denied/i.test(msg)) ? 'ditolak' : 'jaringan';
  return e;
}
async function sbSet(kol, id, data) {
  const ada = CACHE[kol] && CACHE[kol].has(id);
  const tbl = () => SB.from('dokumen');
  let res = ada ? await tbl().update({data}).eq('koleksi', kol).eq('id', id).select('id')
                : await tbl().insert({koleksi: kol, id, data}).select('id');
  if (res.error && res.error.code === '23505') res = await tbl().update({data}).eq('koleksi', kol).eq('id', id).select('id');
  if (res.error) throw sbErr(res.error);
  if (!res.data || !res.data.length) throw sbErr({code: '42501', message: 'denied'});
  taruh(kol, id, data); sinkron(kol); sbSched();
}
async function sbDel(kol, id) {
  const {error} = await SB.from('dokumen').delete().eq('koleksi', kol).eq('id', id);
  if (error) throw sbErr(error);
  buang(kol, id); sinkron(kol); sbSched();
}
const docRef = (kol, id) => ({
  set: data => sbSet(kol, id, JSON.parse(JSON.stringify(data))),
  update: part => sbSet(kol, id, {...((CACHE[kol] && CACHE[kol].get(id)) || {}), ...JSON.parse(JSON.stringify(part))}),
  delete: () => sbDel(kol, id)
});
const DBShim = {
  collection: kol => ({doc: id => docRef(kol, id)}),
  doc: path => { const [kol, id] = String(path).split('/'); return docRef(kol, id); }
};
/* Satpam: data warga ringkas (rumah, kepala keluarga, No. HP) lewat RPC; tabel warga tertutup untuk satpam */
async function muatWargaSatpam() {
  try { const {data, error} = await SB.rpc('warga_satpam'); if (error) throw error;
    const baru = new Set((data || []).map(r => r.id));
    S.warga.filter(w => !baru.has(w.id)).forEach(w => buang('warga', w.id));
    (data || []).forEach(r => taruh('warga', r.id, {blok: r.blok || '', nama: r.nama || '', noHp: r.noHp || '', status: r.status || 'Aktif', ringkas: true}));
    sinkron('warga');
  } catch (e) {}
}
setInterval(() => { if (SB && S.authUser && isSatpam() && document.visibilityState === 'visible') muatWargaSatpam().then(() => { if (S.tab === 'warga' && !dlg.open) render(); }); }, 3 * 60 * 1000);
async function muatSemua() {
  for (const k of Object.keys(CACHE)) delete CACHE[k];
  const n = 1000;
  for (let dari = 0; ; dari += n) {
    const {data, error} = await SB.from('dokumen').select('koleksi,id,data').order('koleksi').order('id').range(dari, dari + n - 1);
    if (error) throw sbErr(error);
    for (const r of data) taruh(r.koleksi, r.id, r.data);
    if (data.length < n) break;
  }
  KOLEKSI_SB.forEach(sinkron); sinkron('pengaturan');
}
function langganan() {
  if (SB_CH) { try { SB.removeChannel(SB_CH); } catch (e) {} }
  SB_CH = SB.channel('dokumen-' + Date.now())
    .on('postgres_changes', {event: '*', schema: 'public', table: 'dokumen'}, p => {
      const r = p.eventType === 'DELETE' ? p.old : p.new; if (!r || !r.koleksi) return;
      if (p.eventType === 'DELETE') buang(r.koleksi, r.id); else taruh(r.koleksi, r.id, r.data);
      sinkron(r.koleksi); sbSched();
    })
    .subscribe();
}
async function muatProfil() {
  if (!S.owner) return;
  const {data} = await SB.from('profil').select('user_id,nama,peran,pengurus_id,warga_id');
  S.profilList = data || [];
  for (const p of S.profilList) S.names[p.user_id] = {name: p.nama || ''};
  sbSched();
}
const IDLE_MS = 15 * 60 * 1000, IDLE_WARN = 60 * 1000, KUNCI_MS = 5 * 60 * 1000;
let idleAkhir = Date.now(), idleTmr = null;
['pointerdown', 'keydown', 'touchstart', 'scroll', 'wheel'].forEach(ev => addEventListener(ev, e => { if (e.target && e.target.closest && e.target.closest('.idle-box')) return; idleAkhir = Date.now(); idleWarn(0); }, {passive: true}));
// peringatan 60 detik terakhir sebelum logout otomatis (aktivitas apa pun membatalkan)
function idleWarn(sisa) {
  let el = document.getElementById('idleWarn');
  if (!sisa) { if (el) el.hidden = true; return; }
  if (!el) {
    el = document.createElement('div'); el.id = 'idleWarn'; el.className = 'idle-warn'; el.setAttribute('role', 'alertdialog'); el.setAttribute('aria-live', 'assertive'); el.setAttribute('aria-labelledby', 'idleWarnT');
    el.innerHTML = '<div class="idle-box"><div class="idle-ico" aria-hidden="true">⏳</div><b id="idleWarnT">Anda akan keluar otomatis</b><p>Tidak ada aktivitas selama 14 menit. Demi keamanan, aplikasi akan keluar dalam <b class="mono" id="idleWarnS">60</b> detik.</p><div class="idle-acts"><button type="button" class="btn" data-act="idle-keluar">Keluar sekarang</button><button type="button" class="btn pri" data-act="idle-tetap">Tetap masuk</button></div></div>';
    document.body.appendChild(el);
  }
  const induk = typeof dlg !== 'undefined' && dlg.open ? dlg : document.body; if (el.parentNode !== induk) induk.appendChild(el); // di atas dialog form yang sedang terbuka
  const s = el.querySelector('#idleWarnS'); if (s) s.textContent = String(Math.ceil(sisa / 1000));
  if (el.hidden !== false) { el.hidden = false; const b = el.querySelector('[data-act="idle-tetap"]'); if (b) b.focus({preventScroll: true}); }
}
async function idleLogout(manual) {
  clearInterval(idleTmr); idleWarn(0);
  try { await onlineKeluar(); } catch (e) {}
  try { await SB.auth.signOut(); } catch (e) {}
  resetSesi(); S.loginPesan = manual ? '' : 'Anda keluar otomatis karena tidak aktif 15 menit.'; render(); muatInfoPublik();
}
function mulaiIdle() {
  clearInterval(idleTmr);
  idleTmr = setInterval(async () => {
    if (S.authUser && !S.terkunci && sudahMasuk() && kunciAda() && Date.now() - idleAkhir >= KUNCI_MS) { idleWarn(0); kunciSekarang(); return; }
    if (!S.authUser || kunciAda()) { idleWarn(0); return; }
    const diam = Date.now() - idleAkhir;
    if (diam >= IDLE_MS) { await idleLogout(); return; }
    idleWarn(diam >= IDLE_MS - IDLE_WARN ? IDLE_MS - diam : 0);
  }, 1000);
}
function resetSesi() {
  if (SB_CH) { try { SB.removeChannel(SB_CH); } catch (e) {} SB_CH = null; }
  for (const k of Object.keys(CACHE)) delete CACHE[k];
  KOLEKSI_SB.forEach(sinkron); sinkron('pengaturan');
  S.sesi = null; S.profil = null; S.authUser = null; S.me = null; S.owner = false; S.profilList = []; S.mfaPerlu = null; S.mfaInfo = null; S.mfaErr = ''; S.struktur = null; S.terkunci = false; S.modeWarga = false; S.sesiAsli = null;
  S.pilih = null; S.nikBuka && S.nikBuka.clear(); S.loaded = true; S.logAkt = null; clearInterval(idleTmr);
  const t = document.getElementById('toasts'); if (t) t.innerHTML = '';
}
/* 1 akun 1 perangkat: sesi baru ditolak selama akun masih login di perangkat lain */
async function tolakSesi(k, user) {
  try { await SB.auth.signOut({scope: 'local'}); } catch (e) {}
  resetSesi();
  S.lEmailDraft = (user && (hpDariEmail(user.email || '') || user.email)) || S.lEmailDraft || '';
  S.loginPesan = k && k.alasan === 'dipakai'
    ? `Akun ini sedang dipakai di perangkat lain${k.perangkat ? ' (' + k.perangkat.split(' · ')[0] + ')' : ''}. Keluar dulu dari perangkat itu, lalu coba lagi. HP hilang? Hubungi Pemilik aplikasi.`
    : 'Sesi berakhir. Silakan masuk lagi.';
  S.loaded = true; render(); window.scrollTo(0, 0); muatInfoPublik();
}
async function masukSesi(user) {
  S.loaded = false; render();
  try { const {data: k, error: ke} = await SB.rpc('klaim_sesi'); if (!ke && k && k.ok === false) { await tolakSesi(k, user); return; } } catch (e) {}
  S.authUser = user; S.loginPesan = '';
  const {data: prof, error} = await SB.from('profil').select('*').eq('user_id', user.id).maybeSingle();
  if (error) { S.loaded = true; S.loginError = 'Gagal membaca profil: ' + error.message; render(); return; }
  S.profil = prof || null;
  if (!prof) { S.loaded = true; render(); return; }
  if (prof.peran === 'pemilik') {
    try {
      const {data: a} = await SB.auth.mfa.getAuthenticatorAssuranceLevel();
      if (a && a.nextLevel === 'aal2' && a.currentLevel !== 'aal2') {
        const {data: lf} = await SB.auth.mfa.listFactors();
        const f = ((lf && lf.totp) || []).find(x => x.status === 'verified');
        if (f) { S.mfaPerlu = {factorId: f.id, user}; S.mfaErr = ''; S.loaded = true; render(); setTimeout(() => { const k = $('#mfaKode'); if (k) k.focus(); }, 50); return; }
      }
    } catch (e) {}
  }
  S.owner = prof.peran === 'pemilik';
  S.me = {id: user.id, name: prof.nama || (user.email || '').split('@')[0], email: user.email};
  S.names[user.id] = {name: S.me.name};
  try { await muatSemua(); } catch (e) { S.loaded = true; toast('Gagal memuat data. Periksa koneksi lalu muat ulang.', 'bad'); render(); return; }
  langganan(); muatProfil();
  idleAkhir = Date.now(); mulaiIdle();
  S.sesi = prof.peran === 'pemilik' ? 'pemilik' : prof.peran === 'pengurus' ? (prof.pengurus_id || '') : 'w:' + user.id;
  S.tab = prof.peran === 'warga' ? 'portal' : 'ringkasan';
  S.sesiAsli = S.sesi; S.modeWarga = false;
  if (bisaModeWarga() && modeTersimpan()) { S.modeWarga = true; S.sesi = 'w:' + user.id; S.tab = 'portal'; }
  if (isSatpam()) await muatWargaSatpam();
  S.terkunci = !!(S.dariPulih && sudahMasuk() && kunciAda()); S.dariPulih = false;
  S.loaded = true; render(); window.scrollTo(0, 0);
  if (S.terkunci) setTimeout(kunciAutoBio, 300);
  else if (sudahMasuk()) toast('Selamat datang, ' + namaSesi().split(' ')[0] + '.');
  pushCek = false; pushSub = null; pushSegarkan(); mfaMuat(); ON.last = 0; setTimeout(() => onlineDetak(true), 800);
}
const pesanAuth = e => {
  const m = String((e && e.message) || e || '');
  if (/invalid login credentials/i.test(m)) return 'Email/username atau password salah.';
  if (/already registered|already been registered|exists|sudah dipakai/i.test(m)) return 'Email atau username ini sudah dipakai akun lain.';
  if (/captcha/i.test(m)) return 'Verifikasi anti-bot gagal atau kedaluwarsa. Tunggu kotak verifikasi selesai lalu coba lagi.';
  if (/Tidak diizinkan/i.test(m)) return 'Hanya Pemilik yang bisa melakukan ini.';
  if (/password should be at least|weak|minimal 8/i.test(m)) return 'Password terlalu pendek (minimal 8 karakter).';
  if (/invalid.*email|email.*invalid/i.test(m)) return 'Format email tidak valid.';
  if (/email rate limit|over_email_send/i.test(m)) return 'Batas kirim email tercapai (layanan email gratis hanya beberapa email per jam). Coba lagi sekitar 1 jam lagi, atau minta Pemilik mereset password dari menu Admin.';
  if (/rate limit|too many/i.test(m)) return 'Terlalu banyak percobaan. Tunggu sebentar lalu coba lagi.';
  if (/email not confirmed/i.test(m)) return 'Akun ini belum aktif (email belum dikonfirmasi). Minta Pemilik membuka Admin lalu menyimpan ulang data Anda.';
  if (/fetch|network/i.test(m)) return 'Tidak bisa terhubung ke server. Periksa koneksi internet.';
  return m || 'Terjadi kesalahan.';
};
async function buatAkunAuth(email, password) {
  const {data, error} = await SB.rpc('admin_buat_user', {email_baru: email, pw: password});
  if (error) throw error;
  if (!data) throw new Error('Akun tidak terbuat');
  return data;
}
async function ubahEmail(userId, email) { const {error} = await SB.rpc('admin_ubah_email', {target: userId, email_baru: email}); if (error) throw error; }
async function resetPassword(userId, pw) { const {error} = await SB.rpc('admin_reset_password', {target: userId, pw}); if (error) throw error; }
async function simpanProfil(row) { const {error} = await SB.from('profil').upsert(row); if (error) throw error; await muatProfil(); }
async function hapusProfil(userId) { if (!userId) return; const {error} = await SB.from('profil').delete().eq('user_id', userId); if (error) throw error; await muatProfil(); }
const punyaProfil = uid => !!(S.profilList || []).find(p => p.user_id === uid);
const emailWarga = u => normUser(u) + '@' + WARGA_DOMAIN;
const HP_DOMAIN = 'hp.kasuari.app';
const normHp = hp => { let d = String(hp || '').replace(/\D/g, ''); if (!d) return ''; if (d.startsWith('0')) d = '62' + d.slice(1); else if (d.startsWith('8')) d = '62' + d; return d; };
const hpEmail = hp => normHp(hp) + '@' + HP_DOMAIN;
const hpTampil = hp => { const d = normHp(hp); return d ? '0' + d.slice(2) : ''; };
const hpDariEmail = e => String(e || '').endsWith('@' + HP_DOMAIN) ? hpTampil(String(e).split('@')[0]) : '';
const hpValid = hp => normHp(hp).length >= 11;  // 62 + minimal 9 digit = 10 digit lokal (08…)
const loginTerpakai = (hp, kecuali) => { const n = normHp(hp); if (!n) return null;
  const p = S.pengurus.find(x => x.userId && x.id !== kecuali && normHp(x.noHp) === n); if (p) return 'pengurus ' + p.nama;
  const a = S.akunWarga.find(x => x.userId && x.id !== kecuali && normHp(x.hp || (wById(x.wargaId) || {}).noHp) === n); if (a) return 'warga ' + ((wById(a.wargaId) || {}).nama || '');
  return null; };


/* ---------- store ---------- */
function clean(o) { const c = {...o}; delete c.id; return c; }
async function put(col, id, data) {
  const milikSendiri = isWarga() && wargaSaya() && ((col === 'warga' && id === wargaSaya().id) || ((col === 'darurat' || col === 'titip' || col === 'donasi') && data && data.wargaId === wargaSaya().id));
  const lapakSendiri = col === 'lapak' && !!S.sesi && data && data.penjualId === (S.me && S.me.id);
  const ajuanSendiri = col === 'pengajuan' && bolehAjukan() && (!data.status || data.status === 'Menunggu' || data.status === 'Dibatalkan') && (!data.pemohonId || data.pemohonId === (S.me && S.me.id));
  if (!milikSendiri && !ajuanSendiri && !lapakSendiri && !bisa(areaOf(col)) && !(col === 'kas' && data && data.jenis !== 'masuk' && bisa('pengeluaran'))) { toast('Peran Anda tidak bisa mengubah bagian ini.', 'bad'); return false; }
  if (S.me && S.me.id) data = {...data, oleh: S.me.id};
  if (S.sesi) data = {...data, olehSesi: S.sesi};
  if (!DB) {
    const arr = S[col], i = arr.findIndex(x => x.id === id), row = {...clean(data), id};
    if (i < 0) arr.push(row); else arr[i] = row;
    render(); return true;
  }
  try { await DB.collection(col).doc(id).set(clean(data)); return true; }
  catch (e) { return fail(e); }
}
async function del(col, id) {
  if (!(col === 'lapak' && (S.lapak.find(x => x.id === id) || {}).penjualId === (S.me && S.me.id)) && !bisa(areaOf(col)) && !(col === 'kas' && bisa('pengeluaran') && (S.kas.find(x => x.id === id) || {}).jenis !== 'masuk')) { toast('Peran Anda tidak bisa mengubah bagian ini.', 'bad'); return false; }
  if (!DB) { S[col] = S[col].filter(x => x.id !== id); render(); return true; }
  try { await DB.collection(col).doc(id).delete(); return true; }
  catch (e) { return fail(e); }
}
async function putSetting(data) {
  if (!bisa('pengaturan')) { toast('Hanya Ketua RT yang bisa mengubah pengaturan.', 'bad'); return false; }
  const next = {...S.set, ...data};
  if (!DB) { S.set = next; render(); return true; }
  try { await DB.doc('pengaturan/umum').set(next); return true; }
  catch (e) { return fail(e); }
}
function fail(e) {
  const c = e && e.code;
  const pesanServer = String((e && e.message) || '');
  if (/Terlalu banyak|tidak valid|Belum mendapat izin|tidak diperbolehkan|maksimal|Program sumbangan tidak/i.test(pesanServer)) { toast(pesanServer.replace(/^.*?ERROR:\s*/, ''), 'bad'); return false; }
  if (e && /No HP/i.test(String(e.message))) { toast(String(e.message).replace(/^.*?(No HP)/, 'No. HP').replace('No HP', 'No. HP'), 'bad'); return false; }
  if (c === 'ditolak') toast('Server menolak perubahan ini: role Anda tidak punya izin mengubah data tersebut.', 'bad');
  else if (c === 'quota_exceeded') toast('Penyimpanan penuh. Hapus data lama, lalu coba lagi.', 'bad');
  else if (c === 'resource_exhausted') toast('Terlalu banyak perubahan sekaligus. Tunggu sebentar lalu coba lagi.', 'bad');
  else toast('Gagal menyimpan. Periksa koneksi internet lalu coba lagi.', 'bad');
  return false;
}

/* ---------- derived ---------- */
const wargaAktif = () => S.warga.filter(w => w.status !== 'Pindah').sort(sortHouse);
const wById = id => S.warga.find(w => w.id === id);
const nominal = () => Number(S.set.iuranBulanan) || 0;
function paidMap(per) { const m = new Map(); for (const p of S.iuran) if (p.periode === per) m.set(p.wargaId, p); return m; }
const mulaiTgl = w => { const v = String(w.mulaiIuran || ''); return v.length === 7 ? v + '-01' : v; };
const mulaiPer = w => mulaiTgl(w).slice(0, 7);
function wajib(w, per) { return w.status !== 'Pindah' && (mulaiPer(w) || '0000-00') <= per; }
/* Jatuh tempo iuran: tanggal 1–28 tiap bulan (0 = belum diatur → dihitung sejak awal bulan) */
const jtHari = () => { const n = Math.floor(Number(S.set.jatuhTempo) || 0); return n >= 1 && n <= 28 ? n : 0; };
const tglTempo = per => per + '-' + pad(jtHari() || 1);
const lewatTempo = per => jtHari() ? todayISO() > tglTempo(per) : per <= nowPer();
const sisaHariTempo = per => Math.round((new Date(tglTempo(per) + 'T00:00:00') - new Date(todayISO() + 'T00:00:00')) / 864e5);
function tempoTeks(per, pendek) {
  if (!jtHari()) return '';
  const d = sisaHariTempo(per), t = pendek ? tglTempo(per).slice(8) + ' ' + BLN[Number(per.slice(5, 7)) - 1] : tgl(tglTempo(per));
  return d > 0 ? `jatuh tempo ${t} · ${d} hari lagi` : d === 0 ? `jatuh tempo hari ini (${t})` : `lewat jatuh tempo ${-d} hari (${t})`;
}
function tunggakanList(w) {
  if (w.status === 'Pindah') return [];
  const end = nowPer(), out = []; let p = mulaiPer(w) || end, g = 0;
  const paid = new Set(S.iuran.filter(x => x.wargaId === w.id).map(x => x.periode));
  while (p <= end && g++ < 240) { if (!paid.has(p) && lewatTempo(p)) out.push(p); p = addM(p, 1); }
  return out;
}
const tunggakan = w => tunggakanList(w).length;
function rekapBulan(per) {
  const pm = paidMap(per), list = S.warga.filter(w => wajib(w, per));
  const lunas = list.filter(w => pm.has(w.id));
  const terkumpul = S.iuran.filter(p => p.periode === per).reduce((s, p) => s + (Number(p.jumlah) || 0), 0);
  return {total: list.length, lunas: lunas.length, terkumpul, target: list.length * nominal(), pm, list};
}
let lebarLama = window.innerWidth < 640;
window.addEventListener('resize', () => { const n = window.innerWidth < 640; if (n !== lebarLama) { lebarLama = n; if (S.tab === 'ringkasan') render(); } });
const kelTerbuka = () => S.keluhan.filter(k => k.status !== 'Selesai');

/* ---------- render ---------- */
const TABS = [['ringkasan','Ringkasan','Beranda'],['portal','Rumah saya','Rumah'],['struktur','Struktur Kepengurusan','Struktur'],['warga','Data warga','Warga'],['iuran','Iuran','Iuran'],['kas','Kas RT','Kas'],['pengajuan','Pengajuan dana','Ajuan'],['sumbangan','Sumbangan','Sumbang'],['gaji','Pekerja & gaji','Gaji'],['pengeluaran','Pengeluaran','Biaya'],['laporan','Laporan keuangan','Laporan'],['keluhan','Keluhan','Keluhan'],['keamanan','Keamanan','Aman'],['bersih','Kebersihan','Bersih'],['info','Pengumuman','Info'],['rohani','Kerohanian','Rohani'],['lapak','Lapak Warga','Lapak'],['surat','Surat','Surat'],['notulen','Notulensi rapat','Notulen'],['pengaturan','Pengaturan','Atur'],['admin','Admin','Admin'],['lapor','Keluhan saya','Lapor'],['aman','Keamanan','Aman']];
const tabBoleh = k => k === 'struktur' ? !!S.sesi : k === 'notulen' ? bolehRapatC() : k === 'bersih' ? (isWarga() || lihat('kebersihan')) : k === 'pengajuan' ? bolehAjukan() : k === 'sumbangan' ? (isWarga() || lihat('sumbangan')) : k === 'gaji' ? (!isWarga() && (lihat('gaji') || S.gaji.some(x => x.akunId === (S.me && S.me.id)))) : k === 'rohani' ? (isWarga() || lihat('rohani')) : k === 'lapak' ? (isWarga() || !!roleSaya()) : (k === 'lapor' || k === 'aman') ? isWarga() : k === 'portal' ? isWarga() : k === 'admin' ? bisaKelola() : lihat(k);
const GRUP = [['Utama', ['ringkasan', 'portal', 'struktur']], ['Warga', ['warga', 'iuran', 'keluhan', 'info', 'rohani', 'surat', 'notulen']], ['Keuangan', ['kas', 'sumbangan', 'gaji', 'pengajuan', 'pengeluaran', 'laporan']], ['Lingkungan', ['keamanan', 'bersih', 'lapak']], ['Sistem', ['pengaturan', 'admin']]];
const GRUP_IDX = {}; GRUP.forEach(([, ks], gi) => ks.forEach((k, i) => { GRUP_IDX[k] = gi * 20 + i; }));
const grupOf = k => (GRUP.find(([, ks]) => ks.includes(k)) || [])[0];
const PRIMER_P = ['ringkasan', 'warga', 'iuran', 'keluhan', 'keamanan', 'info', 'kas', 'surat'], PRIMER_W = ['portal', 'aman', 'lapor', 'info'];
const URUT_W = ['struktur', 'portal', 'aman', 'lapor', 'info', 'sumbangan', 'bersih', 'rohani', 'lapak'];
let PRIMER = PRIMER_P;
const ICON = {
  bersih: '<path d="M14.5 3.5 10 12"/><path d="M6.5 12.5h7l1.5 3-1 5H6l-1-5z"/><path d="M8.5 16v4.5M11 16v4.5"/><path d="M17.5 7.5l1-1M19.5 10.5h1.5M17 4V2.5"/>',
  struktur: '<rect x="9" y="2.5" width="6" height="5" rx="1.2"/><rect x="2.5" y="16.5" width="6" height="5" rx="1.2"/><rect x="15.5" y="16.5" width="6" height="5" rx="1.2"/><path d="M12 7.5v4.5M5.5 16.5V12h13v4.5"/>',
  gaji: '<rect x="2.5" y="5.5" width="19" height="14" rx="2"/><circle cx="9" cy="11" r="2.3"/><path d="M5.5 16.5c.6-1.7 1.9-2.6 3.5-2.6s2.9.9 3.5 2.6M14.5 10h4M14.5 13.5h4"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.6"/>',
  lapak: '<path d="M4 9.5 5.5 4h13L20 9.5"/><path d="M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M5.5 12v8.5h13V12"/><path d="M10 20.5v-5h4v5"/>',
  hati: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.3a4.2 4.2 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/>',
  rohani: '<path d="M3.5 21h17"/><path d="M5.5 21v-8.5h13V21"/><path d="M7 12.5a5 5 0 0 1 10 0"/><path d="M12 7.5V3.5M10.6 4.8h2.8"/><path d="M10.5 21v-3.5a1.5 1.5 0 0 1 3 0V21"/>',
  sumbangan: '<path d="M12 20.5s-7.5-4.6-7.5-10.4A4.1 4.1 0 0 1 12 7.6a4.1 4.1 0 0 1 7.5 2.5c0 5.8-7.5 10.4-7.5 10.4z"/><path d="M12 10.6v5.2M9.4 13.2h5.2"/>',
  bell: '<path d="M6 9.5a6 6 0 1 1 12 0c0 4.5 1.8 6 1.8 6H4.2S6 14 6 9.5z"/><path d="M10 19a2 2 0 0 0 4 0"/>',
  pengajuan: '<path d="M6 2.5h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1z"/><path d="M14 2.5v4h4"/><path d="M12 10v7M9.5 12.2c0-.9.9-1.5 2.5-1.5s2.5.6 2.5 1.5-1 1.3-2.5 1.6-2.5.7-2.5 1.6.9 1.5 2.5 1.5 2.5-.6 2.5-1.5"/>',
  kunci: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1.3"/>',
  ringkasan: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  warga: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.3-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c2 .7 3.2 2.5 3.5 5.2"/>',
  iuran: '<rect x="2.5" y="6" width="19" height="13" rx="2"/><path d="M2.5 10h19M16 15h2.5"/>',
  keluhan: '<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4v-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/><path d="M12 8.5v3.5M12 14.5v.01"/>',
  pengaturan: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 14H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 2.9-1.2V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0 1.2 2.9H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  admin: '<path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  keamanan: '<path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z"/><circle cx="12" cy="11" r="2.5"/><path d="M12 13.5V16"/>',
  aman: '<path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z"/><circle cx="12" cy="11" r="2.5"/><path d="M12 13.5V16"/>',
  paket: '<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9M7.8 5.3l8.5 4.5"/>',
  laporan: '<path d="M6 2.5h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1z"/><path d="M14 2.5v4h4"/><path d="M8.5 17v-3M12 17v-6M15.5 17v-4.5"/>',
  pengeluaran: '<rect x="2.5" y="6" width="19" height="13" rx="2"/><path d="M12 9.5v6M9.5 13l2.5 2.5 2.5-2.5"/>',
  naik: '<path d="M4 16l5-5 4 4 7-7"/><path d="M15 8h5v5"/>',
  turun: '<path d="M4 8l5 5 4-4 7 7"/><path d="M15 16h5v-5"/>',
  kas: '<path d="M5 3.5h11a3 3 0 0 1 3 3v14H8a3 3 0 0 1-3-3z"/><path d="M5 17.5a3 3 0 0 1 3-3h11M9 8h6M9 11h4"/>',
  info: '<path d="M3 10v4a1 1 0 0 0 1 1h3l6 4V5L7 9H4a1 1 0 0 0-1 1z"/><path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12"/>',
  notulen: '<rect x="5" y="3.5" width="14" height="18" rx="2"/><path d="M9 3.5V2h6v1.5M8.5 9h7M8.5 12.5h7M8.5 16h4.5"/>',
  surat: '<path d="M6 2.5h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1z"/><path d="M14 2.5v4h4M8.5 12h7M8.5 15.5h7M8.5 8.5h3"/>',
  portal: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/><circle cx="12" cy="10.5" r="1.3"/>',
  lapor: '<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4v-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/><path d="M8 10h8M8 13h5"/>',
  alert: '<path d="M12 3.5 2.8 19.5h18.4z"/><path d="M12 10v4.5M12 17v.01"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  auto: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17a8.5 8.5 0 0 0 0-17z" fill="currentColor"/>',
  lainnya: '<circle cx="6" cy="6" r="1.6"/><circle cx="12" cy="6" r="1.6"/><circle cx="18" cy="6" r="1.6"/><circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/><circle cx="6" cy="18" r="1.6"/><circle cx="12" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/>'
};
const ico = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;
function renderTabs() {
  PRIMER = isWarga() ? PRIMER_W : PRIMER_P.filter(tabBoleh).slice(0, 4);
  const open = kelTerbuka().length;
  if (!sudahMasuk() || S.terkunci) { $('#tabs').innerHTML = ''; return; }
  const tabsVis = TABS.filter(([k]) => tabBoleh(k));
  if (isWarga()) { const u = k => { const i = URUT_W.indexOf(k); return i < 0 ? 99 : i; }; tabsVis.sort((a, b) => u(a[0]) - u(b[0])); }
  if (!tabBoleh(S.tab)) S.tab = !tabBoleh('ringkasan') && tabBoleh('keamanan') ? 'keamanan' : tabsVis.length ? tabsVis[0][0] : 'ringkasan';
  const secOpen = !PRIMER.includes(S.tab), infoBaru = S.pengumuman.filter(a => a.sematkan).length;
  if (!isWarga()) tabsVis.sort((a, b) => (GRUP_IDX[a[0]] ?? 99) - (GRUP_IDX[b[0]] ?? 99));
  let grpLast = null;
  $('#tabs').innerHTML = tabsVis.map(([k, l, ls]) => {
    let ct = '', gh = '';
    const g = isWarga() ? null : grupOf(k);
    if (g && g !== grpLast) { gh = `<div class="nav-grp">${g}</div>`; grpLast = g; }
    if (k === 'warga' && S.warga.length) ct = `<span class="ct">${wargaAktif().length}</span>`;
    if (k === 'lapak' && bolehIzinLapak()) { const n = lpMinta().length; if (n) ct = `<span class="ct" style="background:var(--sun);color:#3a2a00">${n}</span>`; }
    if (k === 'sumbangan') { const n = S.donasi.filter(x => x.status === 'Menunggu').length; if (n && bisa('sumbangan')) ct = `<span class="ct" style="background:var(--sun);color:#3a2a00">${n}</span>`; }
    if (k === 'pengajuan') { const n = S.pengajuan.filter(x => x.status === 'Menunggu').length; if (n && bisa('pengeluaran')) ct = `<span class="ct" style="background:var(--sun);color:#3a2a00">${n}</span>`; }
    if (k === 'lapor') { const w = wargaSaya(), n = w ? S.keluhan.filter(x => x.wargaId === w.id && x.status !== 'Selesai').length : 0; if (n) ct = `<span class="ct">${n}</span>`; }
    if (k === 'keluhan' && open) ct = `<span class="ct hot">${open}</span>`;
    if (k === 'admin' && S.minta.length) ct = `<span class="ct hot">${S.minta.length}</span>`;
    return gh + `<button class="tab${PRIMER.includes(k) ? '' : ' sec'}" role="tab" aria-selected="${S.tab === k}" data-act="tab" data-k="${k}" aria-label="${l}">${ico(k)}<span class="ll">${l}</span><span class="ls">${ls}</span>${ct}</button>`;
  }).join('') + (tabsVis.some(([k]) => !PRIMER.includes(k)) ? `<button class="tab mob" aria-selected="${secOpen}" data-act="lainnya" aria-label="Menu lainnya">${ico('lainnya')}<span class="ls">${secOpen ? esc((TABS.find(t => t[0] === S.tab) || [])[2] || 'Lainnya') : 'Lainnya'}</span>${S.minta.length && bisaKelola() ? `<span class="ct hot">${S.minta.length}</span>` : ''}</button>` : '');
}
function renderMode() {
  const m = $('#mode');
  if (S.mode === 'memuat') { m.className = 'mode'; m.textContent = 'Memuat…'; }
  else if (S.mode === 'lokal') { m.className = 'mode warn'; m.textContent = 'Mode coba · tidak tersimpan'; m.title = 'Penyimpanan bersama tidak tersedia di tampilan ini. Perubahan hilang saat halaman ditutup.'; }
  else if (S.readOnly || hanyaLihat()) { m.className = 'mode'; m.textContent = 'Hanya lihat'; }
  else { m.className = 'mode on'; m.textContent = 'Tersimpan · dibagikan'; m.title = 'Data tersimpan dan terlihat oleh semua pengurus yang membuka halaman ini.'; }
  $('#brandName').textContent = 'Warga Kasuari';
  const who = $('#who');
  who.parentElement.classList.toggle('masuk', sudahMasuk());
  document.body.classList.toggle('in', sudahMasuk());
  if (sudahMasuk()) {
    who.hidden = false; m.hidden = S.mode === 'online';
    const p = pengurusSesi(), img = S.sesi === 'pemilik' && S.me && S.me.avatarUrl ? `<img src="${esc(S.me.avatarUrl)}" alt="">` : avatarHtml(p && p.userId, namaSesi());
    who.innerHTML = `${img}<div><div class="nm">${esc(namaSesi())}</div><div class="rl">${esc(isWarga() ? 'Warga · ' + ((wargaSaya() || {}).blok || '') + (S.modeWarga ? ' (tampilan warga)' : '') : peranSaya())}</div></div>
      ${isWarga() ? bhsTombol(true) : ''}<button class="btn sm ghost tema-btn" data-act="tema-tukar" title="${temaGelapAktif() ? 'Ganti ke tampilan terang' : 'Ganti ke tampilan gelap'}" aria-label="${temaGelapAktif() ? 'Ganti ke tampilan terang' : 'Ganti ke tampilan gelap'}">${ico(temaGelapAktif() ? 'sun' : 'moon')}</button>
      <button class="btn sm ghost tema-btn" data-act="ganti-pass" title="Keamanan akun" aria-label="Keamanan akun: password, sidik jari, PIN">${ico('kunci')}</button>
      <button class="btn sm" data-act="keluar" title="Keluar">Keluar</button>`;
  } else { who.hidden = true; m.hidden = S.mode === 'online'; }
}
const wajibGanti = () => !!(S.profil && S.profil.wajib_ganti);
function sudahMasuk() { return !!roleSaya() && !wajibGanti(); }

function render() {
  setTimeout(() => { if (S.tab === 'iuran' && S.iurMode === 'massal') mzUpdBar(); }, 0);
  const ae = document.activeElement, aid = ae && ae.id, sel = ae && 'selectionStart' in ae ? [ae.selectionStart, ae.selectionEnd] : null;
  renderMode(); renderTabs();
  const main = $('#main');
  if (!S.loaded) { main.innerHTML = '<div class="skel">Memuat data…</div>'; return; }
  if (!sudahMasuk()) { main.innerHTML = vLogin(); tsPasang(); return; }
  if (S.terkunci) { main.innerHTML = vKunci(); return; }
  if (render.lastTab !== S.tab) { main.classList.remove('enter'); void main.offsetWidth; main.classList.add('enter'); render.lastTab = S.tab; clearTimeout(render.tEnter); render.tEnter = setTimeout(() => main.classList.remove('enter'), 450); }
  document.documentElement.lang = bhsAktif() ? 'en' : 'id';
  document.title = (sudahMasuk() && lihat('keamanan') && daruratAktif().length ? '🚨 DARURAT · ' : '') + 'Warga Kasuari';
  main.innerHTML = daruratBanner() + modeBar() + kunciTawaran() + ({ringkasan: () => (S.sesi === 'pemilik' && S.mfaInfo && !S.mfaInfo.aktif ? '<div class="notice" style="display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap"><span>🔐 Amankan akun Pemilik dengan verifikasi dua langkah.</span><button class="btn sm" data-act="mfa-on">Aktifkan sekarang</button></div>' : '') + vRingkasan() + panelLokasi(), aman: () => vAman() + panelNotif('warga') + panelLokasi({blok: (wargaSaya() || {}).blok || '', judul: 'Alamat untuk petugas darurat', ringkas: true, labelBagi: 'Kirim alamat darurat via WhatsApp', teksBagi: `*DARURAT – mohon bantuan ke alamat:*\nBlok ${(wargaSaya() || {}).blok || ''}, ${lokasiRT().alamat}\n\nPeta: ${petaUrl(lokasiRT())}`}), warga: vWarga, iuran: vIuran, kas: vKas, keluhan: vKeluhan, info: vInfo, surat: vSurat, notulen: vNotulen, pengaturan: vPengaturan, admin: vAdmin, pengeluaran: vPengeluaran, pengajuan: vPengajuan, sumbangan: vSumbangan, gaji: vGaji, struktur: vStruktur, rohani: vRohani, bersih: vBersih, lapak: vLapak, laporan: vLaporan, portal: vPortal, lapor: vLapor, keamanan: vKeamanan})[S.tab]();
  if (aid && !$('#dlg').open) { const el = document.getElementById(aid); if (el) { el.focus(); try { if (sel) el.setSelectionRange(sel[0], sel[1]); } catch (e) {} } }
}

function emptyWarga() {
  return `<div class="empty">
    <h3>Belum ada data warga</h3>
    <p style="margin:0;max-width:52ch">Mulai dengan mencatat kepala keluarga per rumah. Setelah itu iuran dan keluhan bisa dicatat per rumah.</p>
    <div class="toolbar">
      <button class="btn pri" data-act="warga-new" ${dis('warga')}>+ Tambah warga</button>
      ${bisa('pengaturan') ? `<button class="btn" data-act="sample-load">Isi data contoh</button>` : ''}
    </div>
    <p class="muted" style="margin:0;font-size:.8rem">Data contoh ditandai dan bisa dihapus sekaligus dari tab Pengaturan.</p>
  </div>`;
}

/* --- Ringkasan --- */
function vRingkasan() {
  const per = nowPer(), r = rekapBulan(per), aktif = wargaAktif();
  const jiwa = aktif.reduce((s, w) => s + (Number(w.jumlahJiwa) || 0), 0);
  const nunggak = aktif.map(w => [w, tunggakan(w)]).filter(x => x[1] > 0);
  const nunggakRp = nunggak.reduce((s, x) => s + x[1], 0) * nominal();
  const open = kelTerbuka(), baru = open.filter(k => k.status === 'Baru').length;
  const pct = r.total ? Math.round(r.lunas / r.total * 100) : 0;
  const jam = new Date().getHours(), salam = jam < 11 ? 'Selamat pagi' : jam < 15 ? 'Selamat siang' : jam < 18 ? 'Selamat sore' : 'Selamat malam';
  const qa = [bisa('iuran') && ['tab', 'iuran', 'iuran', 'Catat iuran'], bisa('warga') && ['warga-new', '', 'warga', 'Tambah warga'], bisa('pengeluaran') && ['pg-new', '', 'pengeluaran', 'Catat pengeluaran'],
    bisa('info') && ['info-new', '', 'info', 'Pengumuman'], bisa('surat') && ['surat-new', '', 'surat', 'Buat surat']].filter(Boolean);
  const head = `<section class="hero"><p class="hi">${salam},</p><h2>${esc(namaSesi().split(' ').slice(0, 2).join(' '))}</h2>
    <p class="dt">${esc(tglPanjang(todayISO()))} · ${esc(lingk())}</p>
    ${qa.length ? `<div class="qa">${qa.map(([act, k, ic, l]) => `<button type="button" data-act="${act}" ${k ? `data-k="${k}"` : ''}>${ico(ic)}${l}</button>`).join('')}</div>` : ''}</section>`;
  if (!S.warga.length) return head + (lihat('warga') ? emptyWarga() : '<div class="empty">Belum ada data warga.</div>');

  const belum = r.list.filter(w => !r.pm.has(w.id)).sort(sortHouse);
  const kelTerbaru = [...S.keluhan].sort((a, b) => String(b.dibuat).localeCompare(String(a.dibuat))).slice(0, 5);

  return head + `
  <div class="tiles">
    ${lihat('warga') ? '' : '<!--'}<div class="tile"><span class="ti g">${ico('warga')}</span><span class="lbl">Kepala keluarga</span><span class="val">${aktif.length}</span><span class="sub">${jiwa} jiwa tercatat</span></div>${lihat('warga') ? '' : '-->'}
    ${lihat('iuran') ? '' : '<!--'}
    <div class="tile"><span class="ti s">${ico('iuran')}</span><span class="lbl">Iuran ${esc(perLbl(per))}</span><span class="val">${esc(rp(r.terkumpul))}</span><span class="sub">${r.lunas} dari ${r.total} KK lunas · ${pct}%</span><div class="meter"><i style="width:${pct}%"></i></div></div>
    <div class="tile"><span class="ti r">${ico('alert')}</span><span class="lbl">Tunggakan</span><span class="val">${nunggak.length} KK</span><span class="sub">± ${esc(rp(nunggakRp))} belum masuk</span></div>${lihat('iuran') ? '' : '-->'}
    ${lihat('keluhan') ? '' : '<!--'}
    <div class="tile"><span class="ti b">${ico('keluhan')}</span><span class="lbl">Keluhan terbuka</span><span class="val">${open.length}</span><span class="sub">${baru} baru, ${open.length - baru} sedang diproses</span></div>${lihat('keluhan') ? '' : '-->'}
    ${lihat('kas') ? '' : '<!--'}<div class="tile"><span class="ti g">${ico('kas')}</span><span class="lbl">Saldo kas</span><span class="val">${esc(rp(saldoKini()))}</span><span class="sub">per ${esc(tgl(todayISO()))} · <a href="#kas" data-act="tab" data-k="kas" style="color:var(--accent)">buku kas</a></span></div>${lihat('kas') ? '' : '-->'}
  </div>
  ${lihat('info') ? infoRingkas() : ''}
  ${lihat('iuran') ? '' : '<!--'}<div class="panel chart"><h3>Kepatuhan iuran 6 bulan terakhir <small>% KK yang sudah bayar</small></h3>${chart6()}</div>${lihat('iuran') ? '' : '-->'}
  <div class="cols">
    ${lihat('iuran') ? '' : '<!--'}<div class="panel"><h3>Belum bayar ${esc(perLbl(per))} <small>${belum.length} KK</small></h3>
      <div class="rows">${belum.length ? belum.slice(0, 8).map(w => `
        <div class="row"><span class="house">${esc(w.blok)}</span><div class="grow"><div class="t">${esc(w.nama)}</div><div class="s">${tunggakan(w)} bulan tertunggak</div></div>
        <div class="racts">${btnIngatkan(w)}${bisa('iuran') ? `<button class="btn sm" data-act="bayar" data-id="${esc(w.id)}" data-per="${per}">Catat</button>` : ''}</div></div>`).join('') : '<p class="muted" style="margin:0">Semua KK sudah membayar bulan ini.</p>'}
      ${belum.length > 8 ? `<div class="row"><button class="btn ghost sm" data-act="tab" data-k="iuran">Lihat ${belum.length - 8} lainnya →</button></div>` : ''}</div>
    </div>
    ${lihat('iuran') ? '' : '-->'}
    ${lihat('keluhan') ? '' : '<!--'}<div class="panel"><h3>Keluhan terbaru <small>${S.keluhan.length} total</small></h3>
      <div class="rows">${kelTerbaru.length ? kelTerbaru.map(k => `
        <div class="row"><div class="grow"><div class="t">${esc(k.judul)}</div><div class="s">${esc(k.kategori)} · ${esc(tgl(k.dibuat))}</div></div>${chipK(k.status)}</div>`).join('') : '<p class="muted" style="margin:0">Belum ada keluhan masuk.</p>'}
      </div>
    </div>${lihat('keluhan') ? '' : '-->'}
  </div>`;
}
function chart6() {
  const cur = nowPer(), months = [-5, -4, -3, -2, -1, 0].map(n => addM(cur, n));
  const data = months.map(p => { const r = rekapBulan(p); return {p, v: r.total ? r.lunas / r.total * 100 : 0, has: r.total > 0}; });
  const sm = window.innerWidth < 640;
  const W = sm ? 360 : 600, H = sm ? 190 : 210, L = 40, R = 10, T = 22, B = 30, ih = H - T - B, bw = (W - L - R) / 6;
  const y = v => T + ih - v / 100 * ih;
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Persentase KK lunas per bulan">`;
  for (const g of [0, 50, 100]) s += `<line x1="${L}" x2="${W - R}" y1="${y(g)}" y2="${y(g)}" stroke="var(--line)" stroke-dasharray="${g ? '3 4' : ''}"/><text x="${L - 8}" y="${y(g) + 4}" text-anchor="end">${g}%</text>`;
  data.forEach((d, i) => {
    const x = L + i * bw + bw * .22, w = bw * .56, h = d.v / 100 * ih, last = i === 5;
    s += `<rect x="${x}" y="${y(d.v)}" width="${w}" height="${Math.max(h, d.has ? 2 : 0)}" rx="4" fill="${last ? 'var(--sun-strong)' : 'var(--accent)'}" fill-opacity="${last ? 1 : .55}"/>`;
    s += `<text class="vlbl" x="${x + w / 2}" y="${y(d.v) - 6}" text-anchor="middle">${d.has ? Math.round(d.v) + '%' : '–'}</text>`;
    s += `<text x="${x + w / 2}" y="${H - 8}" text-anchor="middle"${last ? ' style="fill:var(--ink);font-weight:600"' : ''}>${sm ? BLN[Number(d.p.slice(5)) - 1] : perLbl(d.p)}</text>`;
  });
  return s + '</svg>';
}

/* --- Warga --- */
/* ---------- Impor data warga dari Excel (.xlsx) tanpa pustaka ---------- */
async function bacaXlsx(file) {
  const buf = new Uint8Array(await file.arrayBuffer()), dv = new DataView(buf.buffer);
  let eocd = -1; for (let i = buf.length - 22; i >= Math.max(0, buf.length - 66000); i--) if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw new Error('Bukan file Excel .xlsx yang valid.');
  const n = dv.getUint16(eocd + 10, true); let p = dv.getUint32(eocd + 16, true);
  const dec = new TextDecoder(), files = {};
  for (let k = 0; k < n; k++) {
    if (dv.getUint32(p, true) !== 0x02014b50) break;
    const metode = dv.getUint16(p + 10, true), csize = dv.getUint32(p + 20, true), nl = dv.getUint16(p + 28, true), xl = dv.getUint16(p + 30, true), cl = dv.getUint16(p + 32, true), off = dv.getUint32(p + 42, true);
    files[dec.decode(buf.subarray(p + 46, p + 46 + nl))] = {metode, csize, off};
    p += 46 + nl + xl + cl;
  }
  const ambil = async nama => {
    const f = files[nama]; if (!f) return null;
    const lnl = dv.getUint16(f.off + 26, true), lxl = dv.getUint16(f.off + 28, true), data = buf.subarray(f.off + 30 + lnl + lxl, f.off + 30 + lnl + lxl + f.csize);
    if (f.metode === 0) return dec.decode(data);
    if (typeof DecompressionStream === 'undefined') throw new Error('Browser ini belum mendukung impor Excel. Pakai Chrome, Edge, atau Safari terbaru.');
    const st = new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
    return dec.decode(await new Response(st).arrayBuffer());
  };
  const xml = t => new DOMParser().parseFromString(t, 'application/xml');
  const ss = [], sst = await ambil('xl/sharedStrings.xml');
  if (sst) for (const si of xml(sst).getElementsByTagName('si')) ss.push([...si.getElementsByTagName('t')].map(t => t.textContent).join(''));
  const wbx = xml(await ambil('xl/workbook.xml')), rels = xml(await ambil('xl/_rels/workbook.xml.rels') || '<r/>');
  const relMap = {}; for (const r of rels.getElementsByTagName('Relationship')) relMap[r.getAttribute('Id')] = r.getAttribute('Target');
  const hasil = {};
  for (const sh of wbx.getElementsByTagName('sheet')) {
    const rid = sh.getAttribute('r:id') || sh.getAttributeNS('http://schemas.openxmlformats.org/officeDocument/2006/relationships', 'id');
    let target = relMap[rid] || ''; target = target.replace(/^\/?xl\//, '').replace(/^\//, '');
    const t = await ambil('xl/' + target); if (!t) continue;
    const rows = [];
    for (const row of xml(t).getElementsByTagName('row')) {
      const arr = [];
      for (const c of row.getElementsByTagName('c')) {
        const ref = c.getAttribute('r') || '', col = ref.replace(/\d+/g, '').split('').reduce((a, ch) => a * 26 + ch.charCodeAt(0) - 64, 0) - 1;
        const tp = c.getAttribute('t'), v = c.getElementsByTagName('v')[0];
        let val = '';
        if (tp === 's') val = ss[Number(v && v.textContent)] ?? '';
        else if (tp === 'inlineStr') val = [...c.getElementsByTagName('t')].map(x => x.textContent).join('');
        else if (v) val = tp === 'str' || tp === 'b' ? v.textContent : (isNaN(Number(v.textContent)) ? v.textContent : Number(v.textContent));
        arr[col >= 0 ? col : arr.length] = val;
      }
      rows[Number(row.getAttribute('r')) - 1] = arr;
    }
    hasil[sh.getAttribute('name')] = rows;
  }
  return hasil;
}
const kunciKolom = h => String(h || '').toLowerCase().replace(/\*/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const KOL_WARGA = {'no rumah': 'blok', 'blok': 'blok', 'nama kepala keluarga': 'nama', 'nama': 'nama', 'no hp': 'noHp', 'hp': 'noHp', 'nik kk': 'nik', 'nik': 'nik', 'jenis kelamin': 'jk', 'agama': 'agama', 'tanggal lahir': 'lahir', 'status huni': 'statusHuni', 'wajib iuran mulai': 'mulaiIuran', 'status': 'status', 'catatan': 'catatan'};
const KOL_AG = {'no rumah': 'blok', 'nama': 'nama', 'hubungan': 'hubungan', 'jenis kelamin': 'jk', 'agama': 'agama', 'tanggal lahir': 'lahir', 'nik': 'nik'};
function tglExcel(v) {
  if (v === '' || v == null) return '';
  if (typeof v === 'number') { if (v < 1 || v > 80000) return null; const d = new Date(Math.round((v - 25569) * 864e5)); return d.toISOString().slice(0, 10); }
  const t = String(v).trim(); let m;
  if ((m = t.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/))) return `${m[1]}-${pad(+m[2])}-${pad(+m[3])}`;
  if ((m = t.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/))) return `${m[3]}-${pad(+m[2])}-${pad(+m[1])}`;
  return null;
}
const teksNum = v => typeof v === 'number' ? (Number.isInteger(v) ? String(v) : v.toFixed(0)) : String(v ?? '').trim();
function petaBaris(rows, peta) {
  const hi = rows.findIndex(r => r && r.some(x => peta[kunciKolom(x)])); if (hi < 0) return {err: 'Judul kolom tidak ditemukan.', data: []};
  const idx = {}; rows[hi].forEach((h, i) => { const k = peta[kunciKolom(h)]; if (k && idx[k] === undefined) idx[k] = i; });
  const data = [];
  for (let r = hi + 1; r < rows.length; r++) {
    const row = rows[r]; if (!row || !row.some(x => String(x ?? '').trim() !== '')) continue;
    const o = {_baris: r + 1}; for (const [k, i] of Object.entries(idx)) o[k] = row[i] ?? ''; data.push(o);
  }
  return {data, idx};
}
function siapkanImpor(book) {
  const nama = Object.keys(book), shW = nama.find(n => /data\s*warga/i.test(n)) || nama.find(n => !/panduan|pilihan|anggota/i.test(n));
  const shA = nama.find(n => /anggota/i.test(n));
  if (!shW) throw new Error('Sheet "Data Warga" tidak ditemukan. Pakai template dari aplikasi.');
  const W = petaBaris(book[shW], KOL_WARGA); if (W.err) throw new Error('Sheet "' + shW + '": ' + W.err);
  if (W.idx.blok === undefined || W.idx.nama === undefined || W.idx.noHp === undefined) throw new Error('Kolom wajib No. Rumah, Nama Kepala Keluarga, dan No. HP harus ada.');
  const A = shA ? petaBaris(book[shA], KOL_AG) : {data: []};
  const normJk = v => { const t = String(v || '').trim().toLowerCase(); return !t ? '' : t[0] === 'p' || t === 'w' || t.startsWith('wan') ? 'P' : t[0] === 'l' || t.startsWith('pri') ? 'L' : null; };
  const normHuni = v => { const t = String(v || '').trim().toLowerCase(); if (!t) return 'Pemilik'; if (t.startsWith('kontrak') || t.startsWith('sewa')) return 'Kontrak / sewa'; if (t.startsWith('keluarga')) return 'Keluarga pemilik'; if (t.startsWith('pemilik')) return 'Pemilik'; return null; };
  const normAgama = v => { const t = String(v || '').trim().toLowerCase().replace(/\s+/g, ' '); if (!t) return ''; if (t.startsWith('islam') || t === 'muslim') return 'Islam'; if (t.startsWith('kristen') || t.startsWith('protestan')) return 'Kristen'; if (t.startsWith('katol') || t.startsWith('katholik')) return 'Katolik'; if (t.startsWith('hindu')) return 'Hindu'; if (t.startsWith('budd') || t.startsWith('budha')) return 'Buddha'; if (t.startsWith('kong') || t.startsWith('khong')) return 'Konghucu'; if (t.startsWith('keperc') || t.startsWith('penghayat')) return 'Kepercayaan'; return null; };
  const normHub = v => { const t = String(v || '').trim().toLowerCase(); if (!t) return 'Lainnya'; return HUBUNGAN.find(h => h.toLowerCase() === t) || HUBUNGAN.find(h => t.startsWith(h.toLowerCase().slice(0, 4))) || 'Lainnya'; };
  const agPer = {}, agErr = [];
  for (const g of A.data) {
    const blok = String(g.blok || '').trim().toUpperCase(), e = [];
    const nik = teksNum(g.nik).replace(/\D/g, ''), lahir = tglExcel(g.lahir), jk = normJk(g.jk), agama = normAgama(g.agama);
    if (!blok) e.push('No. Rumah kosong'); if (!String(g.nama || '').trim()) e.push('Nama kosong');
    if (nik && nik.length !== 16) e.push(`NIK ${nik.length} digit`); if (lahir === null) e.push('Tanggal lahir tidak dikenali'); if (jk === null) e.push('Jenis kelamin harus L/P'); if (agama === null) e.push('Agama tidak dikenali');
    if (e.length) { agErr.push({baris: g._baris, blok, nama: g.nama, err: e}); continue; }
    (agPer[blok] = agPer[blok] || []).push({nama: String(g.nama).trim(), hubungan: normHub(g.hubungan), jk: jk || 'L', agama: agama || '', lahir: lahir || '', nik});
  }
  const lihatBlok = new Map(), lihatHp = new Map(), hasil = [];
  for (const x of W.data) {
    const e = [], blok = String(x.blok || '').trim().toUpperCase(), nama = String(x.nama || '').trim();
    const hpAsli = teksNum(x.noHp), hpD = hpAsli.replace(/\D/g, ''), nik = teksNum(x.nik).replace(/\D/g, '');
    const lahir = tglExcel(x.lahir), mulai = tglExcel(x.mulaiIuran), jk = normJk(x.jk), huni = normHuni(x.statusHuni), agama = normAgama(x.agama);
    const st = String(x.status || '').trim().toLowerCase(), status = !st || st === 'aktif' ? 'Aktif' : st === 'pindah' ? 'Pindah' : null;
    if (!blok) e.push('No. Rumah kosong'); if (!nama) e.push('Nama kosong');
    if (!hpD) e.push('No. HP kosong'); else if (hpD.length < 10) e.push(`No. HP ${hpD.length} digit`);
    if (nik && nik.length !== 16) e.push(`NIK ${nik.length} digit`);
    if (jk === null) e.push('Jenis kelamin harus L/P'); if (agama === null) e.push('Agama tidak dikenali'); if (huni === null) e.push('Status huni tidak dikenali');
    if (status === null) e.push('Status harus Aktif/Pindah'); if (lahir === null) e.push('Tanggal lahir tidak dikenali'); if (mulai === null) e.push('Tanggal wajib iuran tidak dikenali');
    if (blok && lihatBlok.has(blok)) e.push(`No. Rumah sama dengan baris ${lihatBlok.get(blok)}`);
    const peringatan = [];
    if (hpD && lihatHp.has(normHp(hpD))) peringatan.push(`No. HP sama dengan baris ${lihatHp.get(normHp(hpD))}`);
    if (blok) lihatBlok.set(blok, x._baris); if (hpD) lihatHp.set(normHp(hpD), x._baris);
    const ada = S.warga.find(w => String(w.blok).toUpperCase() === blok && w.status !== 'Pindah');
    const anggota = agPer[blok] || [];
    hasil.push({baris: x._baris, blok, nama, err: e, peringatan, ada, row: {blok, nama, noHp: hpAsli, nik, jk: jk || 'L', agama: agama || '', lahir: lahir || '', statusHuni: huni || 'Pemilik', mulaiIuran: mulai || todayISO(), status: status || 'Aktif', catatan: String(x.catatan || '').trim(), anggota, jumlahJiwa: 1 + anggota.length}});
  }
  const blokFile = new Set(hasil.map(h => h.blok));
  for (const [b, list] of Object.entries(agPer)) if (!blokFile.has(b) && !S.warga.some(w => String(w.blok).toUpperCase() === b)) agErr.push({baris: '-', blok: b, nama: list.map(x => x.nama).join(', '), err: ['No. Rumah tidak ada di sheet Data Warga']});
  return {hasil, agErr, shW, shA};
}
function openImporWarga() {
  if (!bisa('warga')) return;
  openDlg({title: 'Impor data warga dari Excel', area: 'warga', submitLabel: 'Baca file',
    body: `<ol style="margin:0;padding-left:18px;display:grid;gap:6px;font-size:.9rem">
        <li><a class="btn sm" href="template/Template-Impor-Warga.xlsx" download>⬇ Unduh template Excel</a> (berisi panduan pengisian).</li>
        <li>Isi sheet <b>Data Warga</b> (satu baris per rumah) dan bila perlu <b>Anggota Keluarga</b>.</li>
        <li>Pilih file yang sudah diisi di bawah, lalu periksa pratinjaunya sebelum disimpan.</li></ol>
      <div class="fld"><label for="imp_f">File Excel (.xlsx) <span class="req">*</span></label><input type="file" id="imp_f" name="file" accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" required></div>
      <label class="ck" style="font-weight:500"><input type="checkbox" name="timpa"> Perbarui data rumah yang sudah ada di aplikasi (bila No. Rumah sama)</label>`,
    onSubmit: async d => {
      const f = ($('#imp_f') || {}).files && $('#imp_f').files[0];
      if (!f) { pesanDlg('Pilih file Excel dulu.', 'imp_f'); return false; }
      if (!/\.xlsx$/i.test(f.name)) { pesanDlg('File harus berformat .xlsx (Excel). Bila memakai Google Sheets: File → Download → Microsoft Excel (.xlsx).', 'imp_f'); return false; }
      let siap;
      try { siap = siapkanImpor(await bacaXlsx(f)); } catch (e) { pesanDlg(e.message || 'File tidak bisa dibaca.', 'imp_f'); return false; }
      if (!siap.hasil.length) { pesanDlg('Belum ada data di sheet Data Warga.', 'imp_f'); return false; }
      setTimeout(() => pratinjauImpor(siap, !!d.timpa, f.name), 30);
      return true;
    }});
}
function pratinjauImpor(siap, timpa, namaFile) {
  const H = siap.hasil;
  const status = h => h.err.length ? 'gagal' : h.ada && !timpa ? 'lewati' : h.ada ? 'perbarui' : 'baru';
  const c = {baru: 0, perbarui: 0, lewati: 0, gagal: 0}; H.forEach(h => c[status(h)]++);
  const jalan = H.filter(h => ['baru', 'perbarui'].includes(status(h)));
  const lbl = {baru: ['Baru', 'ok'], perbarui: ['Perbarui', 'info'], lewati: ['Lewati · sudah ada', 'mute'], gagal: ['Perlu diperbaiki', 'bad']};
  const rows = H.map(h => { const [t, k] = lbl[status(h)]; return `<tr><td class="muted">${h.baris}</td><td><span class="house">${esc(h.blok || '—')}</span></td><td>${esc(h.nama || '—')}${h.row.anggota.length ? `<div class="muted" style="font-size:.76rem">+${h.row.anggota.length} anggota</div>` : ''}</td>
      <td style="white-space:normal;min-width:200px"><span class="chip ${k} plain">${t}</span>${h.err.length ? `<div style="color:var(--bad);font-size:.78rem">${esc(h.err.join(' · '))}</div>` : ''}${h.peringatan.length ? `<div style="color:var(--warn);font-size:.78rem">⚠ ${esc(h.peringatan.join(' · '))}</div>` : ''}</td></tr>`; }).join('');
  openDlg({title: 'Pratinjau impor', area: 'warga', submitLabel: jalan.length ? `Impor ${jalan.length} data` : 'Tutup',
    body: `<p class="muted" style="margin:0;font-size:.86rem">${esc(namaFile)} · sheet ${esc(siap.shW)}${siap.shA ? ' + ' + esc(siap.shA) : ''}</p>
      <div class="papan-st" style="grid-template-columns:repeat(4,1fr)"><div><b style="color:var(--ok)">${c.baru}</b><span>Baru</span></div><div><b style="color:var(--info)">${c.perbarui}</b><span>Diperbarui</span></div><div><b>${c.lewati}</b><span>Dilewati</span></div><div><b style="color:var(--bad)">${c.gagal}</b><span>Perlu diperbaiki</span></div></div>
      ${siap.agErr.length ? `<div class="notice" style="font-size:.82rem">Anggota keluarga dilewati: ${siap.agErr.map(a => `baris ${a.baris} (${esc(a.blok || '?')}: ${esc(a.err.join(', '))})`).join('; ')}</div>` : ''}
      <div class="tbl-wrap" style="max-height:46vh;overflow:auto"><table><thead><tr><th>Baris</th><th>Rumah</th><th>Kepala keluarga</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>
      ${c.gagal ? '<p class="muted" style="margin:0;font-size:.82rem">Baris "Perlu diperbaiki" tidak ikut diimpor. Perbaiki di Excel lalu impor ulang file yang sama; data yang sudah masuk akan dilewati.</p>' : ''}`,
    onSubmit: async () => {
      if (!jalan.length) return true;
      const docs = jalan.map(h => {
        const lama = h.ada, row = {...(lama || {}), ...h.row, diperbarui: todayISO()};
        if (lama && !h.row.agama && lama.agama) row.agama = lama.agama;
        if (lama && !h.row.anggota.length) { row.anggota = lama.anggota || []; row.jumlahJiwa = Math.max(Number(lama.jumlahJiwa) || 1, 1 + row.anggota.length); }
        if (!lama) row.dibuat = todayISO();
        delete row.id; row.sumber = 'impor';
        return {koleksi: 'warga', id: lama ? lama.id : uid() + Math.random().toString(36).slice(2, 5), data: row};
      });
      let n = 0;
      for (let i = 0; i < docs.length; i += 100) {
        const {data, error} = await SB.from('dokumen').upsert(docs.slice(i, i + 100)).select('id,data');
        if (error) { pesanDlg(`Gagal menyimpan${n ? ` (${n} data sudah tersimpan)` : ''}: ${/No HP/.test(error.message) ? error.message.replace('No HP', 'No. HP') : sbErr(error).code === 'ditolak' ? 'role Anda tidak punya izin mengubah data warga.' : error.message}`); return false; }
        for (const r of data || []) taruh('warga', r.id, r.data);
        n += (data || []).length;
      }
      sinkron('warga'); sbSched();
      toast(`${n} data warga berhasil diimpor${c.gagal ? `, ${c.gagal} baris perlu diperbaiki` : ''}.`);
      return true;
    }});
}
function vWargaSatpam() {
  const q = S.q.trim().toLowerCase();
  const list = wargaAktif().filter(w => !q || [w.nama, w.blok, w.noHp].some(v => String(v || '').toLowerCase().includes(q)));
  const hp = w => w.noHp ? `<a class="mono" style="color:var(--accent);text-decoration:none" href="tel:${esc(String(w.noHp).replace(/[^\d+]/g, ''))}">📞 ${esc(w.noHp)}</a>` : '<span class="muted">—</span>';
  return `<div class="sec-head"><div><h2>Data warga</h2><p>Cari rumah, nama kepala keluarga, atau No. HP.</p></div></div>
  <div class="toolbar"><input class="search" type="search" id="qWarga" value="${esc(S.q)}" placeholder="Cari nomor rumah, nama, atau No. HP…" aria-label="Cari warga" style="flex:1;min-width:220px"></div>
  ${list.length ? `<div class="tbl-wrap hide-m"><table><thead><tr><th>Rumah</th><th>Kepala keluarga</th><th>No. HP</th></tr></thead><tbody>
    ${list.map(w => `<tr><td><span class="house">${esc(w.blok)}</span></td><td style="font-weight:600">${esc(w.nama)}</td><td>${hp(w)}</td></tr>`).join('')}</tbody></table></div>
    <div class="list-mobile">${list.map(w => `<div class="row"><span class="house">${esc(w.blok)}</span><div class="grow"><div class="t">${esc(w.nama)}</div><div class="s">${hp(w)}</div></div></div>`).join('')}</div>
    <p class="muted" style="margin:8px 0 0;font-size:.82rem">${list.length} rumah${q ? ' cocok dengan pencarian' : ''}.</p>`
    : `<div class="empty">${q ? 'Tidak ada rumah yang cocok dengan pencarian.' : 'Belum ada data warga.'}</div>`}`;
}
function vWarga() {
  if (isSatpam()) return vWargaSatpam();
  const head = `<div class="sec-head"><div><h2>Data warga</h2><p>Satu baris per rumah / kepala keluarga.</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">${bisa('warga') ? '<button class="btn" data-act="impor-warga">Impor Excel</button>' : ''}<button class="btn pri" data-act="warga-new" ${dis('warga')}>+ Tambah warga</button></div></div>`;
  if (!S.warga.length) return head + emptyWarga();
  const nMinta = bolehIzinLapak() ? lpMinta().length : 0;
  const headX = head + (nMinta ? `<div class="notice" style="display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap"><span>${nMinta} warga mengajukan izin berjualan di Lapak Warga.</span><button class="btn sm" data-act="lp-izin-buka">Tinjau permintaan</button></div>` : '');
  const q = S.q.trim().toLowerCase();
  const list = [...S.warga].sort(sortHouse).filter(w =>
    (!S.fBlok || (S.fBlok === '-' ? !blokById(w.blokId) : w.blokId === S.fBlok)) &&
    (!q || [w.nama, w.nik, w.blok, w.noHp, ...(w.anggota || []).flatMap(a => [a.nama, a.nik])].some(v => String(v || '').toLowerCase().includes(q))));
  const pindah = S.warga.filter(w => w.status === 'Pindah').length;
  const rowsT = list.map(w => { const t = tunggakan(w); return `<tr>
      <td><span class="house">${esc(w.blok)}</span>${blokById(w.blokId) ? `<div class="muted" style="font-size:.76rem;margin-top:3px">${esc(blokById(w.blokId).nama)}</div>` : ''}</td>
      <td><div style="font-weight:600">${esc(w.nama)}</div><div class="mono muted">${esc(w.nik || 'NIK belum diisi')}</div>${w.diubahWarga ? `<span class="chip info plain" style="margin-top:3px">Diperbarui warga ${esc(tgl(w.diubahWarga))}</span>` : ''}${w.izinLapak ? '<span class="chip ok plain" style="margin-top:3px">Penjual lapak</span>' : w.mintaLapak && w.mintaLapak.status === "Menunggu" ? '<span class="chip warn plain" style="margin-top:3px">Minta izin lapak</span>' : ''}</td>
      <td class="r num">${esc(w.jumlahJiwa || '–')}</td>
      <td>${esc(w.statusHuni || '–')}${w.status === 'Pindah' ? ` <span class="chip mute" title="${w.tglPindah ? 'Pindah ' + esc(tgl(w.tglPindah)) : 'Pindah'}">Pindah${w.tglPindah ? ' · ' + esc(tgl(w.tglPindah)) : ''}</span>` : ''}</td>
      <td class="mono">${esc(w.noHp || '–')}</td>
      <td>${w.status === 'Pindah' ? '<span class="muted">–</span>' : t ? `<span class="chip ${t >= 3 ? 'bad' : 'warn'}">${t} bulan</span>` : '<span class="chip ok">Lancar</span>'}</td>
      <td class="r"><button class="btn sm" data-act="warga-edit" data-id="${esc(w.id)}">${bisa('warga') ? 'Ubah' : 'Lihat'}</button></td></tr>`; }).join('');
  const rowsM = list.map(w => { const t = tunggakan(w); return `<div class="row"><span class="house">${esc(w.blok)}</span>
      <div class="grow"><div class="t">${esc(w.nama)}</div><div class="s">${blokById(w.blokId) ? esc(blokById(w.blokId).nama) + ' · ' : ''}${esc(w.jumlahJiwa || '–')} jiwa · ${esc(w.statusHuni || '–')}${w.status === 'Pindah' ? ' · pindah' : t ? ` · <span style="color:var(--bad)">nunggak ${t} bln</span>` : ''}</div></div>
      <button class="btn sm" data-act="warga-edit" data-id="${esc(w.id)}">${bisa('warga') ? 'Ubah' : 'Lihat'}</button></div>`; }).join('');
  return headX + `
  <div class="toolbar">
    <input class="search" type="search" id="qWarga" placeholder="Cari nama, NIK, nomor rumah, HP…" value="${esc(S.q)}" aria-label="Cari warga">
    <select id="fBlok" aria-label="Filter blok" style="width:auto"><option value="">Semua blok</option>${blokList().map(b => `<option value="${esc(b.id)}" ${S.fBlok === b.id ? 'selected' : ''}>${esc(b.nama)}</option>`).join('')}${blokList().length ? `<option value="-" ${S.fBlok === '-' ? 'selected' : ''}>Belum ada blok</option>` : ''}</select>
  </div>
  <p class="muted" style="margin:-10px 0 0;font-size:.84rem">${list.length} dari ${S.warga.length} rumah${pindah ? ` · ${pindah} sudah pindah` : ''}</p>
  ${list.length ? `<div class="tbl-wrap hide-m"><table><thead><tr><th>Rumah</th><th>Kepala keluarga</th><th class="r">Jiwa</th><th>Status huni</th><th>No. HP</th><th>Iuran</th><th></th></tr></thead><tbody>${rowsT}</tbody></table></div>
  <div class="list-mobile">${rowsM}</div>` : '<div class="empty">Tidak ada warga yang cocok dengan pencarian.</div>'}`;
}
function formWarga(w, self = false) {
  w = w || {status: 'Aktif', statusHuni: 'Pemilik', mulaiIuran: todayISO(), jumlahJiwa: 1};
  const ro = self ? '' : dis('warga');
  return `
  ${self ? `<div class="panel" style="padding:10px 14px;background:var(--sunk);border:0;box-shadow:none"><span class="house">${esc(w.blok)}</span> <span class="muted" style="font-size:.84rem">Nomor rumah, status huni dan wajib iuran hanya bisa diubah pengurus RT.</span></div>` : ''}
  <div class="grid2">
    ${self ? '' : `<div class="fld"><label for="f_blok">Blok / No. rumah <span class="req">*</span></label><input type="text" id="f_blok" name="blok" required value="${esc(w.blok)}" placeholder="mis. A-12" ${ro}></div>`}
    <div class="fld"><label for="f_jiwa">Jumlah jiwa</label><select id="f_jiwa" name="jumlahJiwa" ${ro}>${Array.from({length: Math.max(20, Number(w.jumlahJiwa) || 0)}, (_, i) => i + 1).map(n => `<option value="${n}" ${Number(w.jumlahJiwa) === n ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
  </div>
  <div class="fld"><label for="f_nama">Nama kepala keluarga <span class="req">*</span></label><input type="text" id="f_nama" name="nama" required value="${esc(w.nama)}" ${ro}></div>
  <div class="grid2">
    <div class="fld"><label for="f_nik">NIK</label><input type="text" id="f_nik" name="nik" inputmode="numeric" maxlength="16" value="${esc(w.nik)}" placeholder="16 digit" autocomplete="off" ${ro}><span class="hint nik-info" id="nikInfo">${nikInfo(w.nik)}</span></div>
    <div class="fld"><label for="f_hp">No. HP / WhatsApp <span class="req">*</span></label><input type="tel" id="f_hp" name="noHp" inputmode="tel" value="${esc(w.noHp)}" placeholder="08…" autocomplete="off" required ${ro}><span class="hint nik-info" id="hpInfo">${hpInfo(w.noHp)}</span></div>
  </div>
  <div class="grid2">
    <div class="fld"><label for="f_jk">Jenis kelamin</label><select id="f_jk" name="jk" ${ro}><option value="L" ${w.jk !== 'P' ? 'selected' : ''}>Laki-laki</option><option value="P" ${w.jk === 'P' ? 'selected' : ''}>Perempuan</option></select></div>
    <div class="fld"><label for="f_agama">Agama</label><select id="f_agama" name="agama" ${ro}>${agamaOpts(w.agama)}</select></div>
  </div>
  <div class="fld"><label for="f_lahir">Tanggal lahir</label><input type="date" id="f_lahir" name="lahir" value="${esc(w.lahir)}" ${ro}><span class="hint">Dipakai di surat pengantar</span></div>
  ${self ? '' : `<div class="grid2">
    <div class="fld"><label for="f_huni">Status huni</label><select id="f_huni" name="statusHuni" ${ro}>${HUNI.map(h => `<option ${w.statusHuni === h ? 'selected' : ''}>${h}</option>`).join('')}</select></div>
    <div class="fld"><label for="f_status">Status warga</label><select id="f_status" name="status" ${ro}>${['Aktif', 'Pindah'].map(h => `<option ${w.status === h ? 'selected' : ''}>${h}</option>`).join('')}</select></div>
  </div>
  <div class="fld" id="f_pindahBox" ${w.status === 'Pindah' ? '' : 'hidden'}><label for="f_tp">Tanggal pindah</label><input type="date" id="f_tp" name="tglPindah" value="${esc(w.tglPindah || '')}" max="${todayISO()}" ${ro}>
    <span class="hint">${w.status === 'Pindah' ? 'Rumah ini tidak lagi ditagih iuran dan akun login warganya nonaktif.' : 'Menyimpan status <b>Pindah</b> otomatis menonaktifkan akun login warga rumah ini dan memutus sesinya. Data tetap tersimpan sebagai arsip.'}</span></div>
  <div class="fld"><label for="f_bk">Nama blok</label><select id="f_bk" name="blokId" ${ro}><option value="">— belum ditentukan —</option>${blokList().map(b => `<option value="${esc(b.id)}" ${w.blokId === b.id ? 'selected' : ''}>${esc(b.nama)} (${esc(b.kode)})</option>`).join('')}</select><span class="hint">${blokList().length ? 'Menentukan koordinator blok rumah ini.' : 'Belum ada blok. Buat dulu di Admin → Koordinator blok.'}</span></div>
  <div class="fld"><label for="f_mulai">Wajib iuran mulai <span class="req">*</span></label><input type="date" id="f_mulai" name="mulaiIuran" required value="${esc(mulaiTgl(w))}" ${ro}><span class="hint" id="mulaiInfo">${esc(mulaiInfo(mulaiTgl(w)))}</span></div>`}
  <div class="ag-sec">
    <div class="ag-head"><div><b>Anggota keluarga</b><div class="hint muted" id="agCount" style="font-size:.78rem"></div></div>
      ${ro ? '' : '<button type="button" class="btn sm" data-act="ag-add">+ Tambah anggota</button>'}</div>
    <p class="ag-empty" id="agEmpty">Belum ada anggota keluarga selain kepala keluarga.</p>
    <div class="ag-list" id="agList">${(w.anggota || []).map(a => agRow(a, ro)).join('')}</div>
  </div>
  ${self ? '' : `<div class="panel" style="padding:10px 14px;background:var(--sunk);border:0;box-shadow:none;display:grid;gap:4px">
    <label class="ck" style="font-weight:600;align-items:flex-start"><input type="checkbox" name="izinLapak" ${w.izinLapak ? 'checked' : ''} ${bolehIzinLapak() ? '' : 'disabled'}> <span>Boleh berjualan di Lapak Warga</span></label>
    <span class="muted" style="font-size:.8rem">${w.izinLapak && w.izinLapakOleh ? `Disetujui ${esc(w.izinLapakOleh)}${w.izinLapakTgl ? ' · ' + esc(tgl(w.izinLapakTgl)) : ''}. ` : ''}${w.mintaLapak && w.mintaLapak.status === 'Menunggu' && !w.izinLapak ? `<b style="color:var(--warn)">Mengajukan izin ${esc(tgl(String(w.mintaLapak.waktu || '').slice(0, 10)))}${w.mintaLapak.usaha ? ': ' + esc(w.mintaLapak.usaha) : ''}.</b> ` : ''}${bolehIzinLapak() ? 'Centang agar warga ini bisa memasang barang jualan.' : 'Hanya Pemilik (admin) atau Ketua RT yang bisa mengubah izin ini.'}</span></div>
  <div class="fld"><label for="f_cat">Catatan</label><textarea id="f_cat" name="catatan" rows="2" ${ro}>${esc(w.catatan)}</textarea></div>
  ${w.id ? riwayatBayar(w) : ''}`}`;
}
function mulaiInfo(v) {
  if (!v) return 'Isi tanggal, bulan dan tahun mulai wajib iuran';
  return `${tgl(v)} · iuran dihitung mulai bulan ${perLbl(v.slice(0, 7), true)}`;
}
function hpInfo(v) {
  const n = String(v || '').replace(/\D/g, '').length;
  if (!n) return 'Opsional, minimal 10 digit';
  if (n < 10) return `⚠ Baru ${n} digit, minimal 10 digit`;
  return `✓ ${n} digit`;
}
function cekHp(el, info0) {
  const bersih = el.value.replace(/[^\d+\-\s]/g, '');
  if (bersih !== el.value) el.value = bersih;
  if (bersih.replace(/\D/g, '').length > 15) el.value = bersih.slice(0, -1);
  const n = el.value.replace(/\D/g, '').length, info = info0 || $('#hpInfo');
  if (info) { info.textContent = hpInfo(el.value); info.className = 'hint nik-info' + (n && n < 10 ? ' kurang' : n >= 10 ? ' pas' : ''); }
  if (n && n < 10) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
  el.classList.toggle('nik-ok', n >= 10);
}
function nikInfo(v) {
  const n = String(v || '').replace(/\D/g, '').length;
  if (!n) return 'Opsional, 16 digit sesuai KTP';
  if (n < 16) return `⚠ Baru ${n} dari 16 digit, kurang ${16 - n} digit`;
  return '✓ 16 digit, NIK lengkap';
}
const AGAMA_W = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Kepercayaan'];
const agamaLbl = a => a === 'Kepercayaan' ? 'Kepercayaan terhadap Tuhan YME' : a || '';
const agamaOpts = (v, kosong = '— Pilih agama —') => `<option value="">${kosong}</option>` + AGAMA_W.map(a => `<option value="${a}" ${v === a ? 'selected' : ''}>${agamaLbl(a)}</option>`).join('');
const HUBUNGAN = ['Istri', 'Suami', 'Anak', 'Orang tua', 'Mertua', 'Menantu', 'Cucu', 'Saudara', 'Lainnya'];
function umur(tglLahir) {
  if (!tglLahir) return '';
  const [y, m, d] = tglLahir.split('-').map(Number), t = new Date();
  let u = t.getFullYear() - y; if (t.getMonth() + 1 < m || (t.getMonth() + 1 === m && t.getDate() < d)) u--;
  return u >= 0 ? u + ' tahun' : '';
}
let agSeq = 0;
function agRow(a, ro) {
  a = a || {hubungan: 'Anak', jk: 'L'}; ro = ro || ''; const k = 'ag' + (agSeq++);
  return `<div class="ag-row" data-k="${k}">
    <div class="ag-top"><span class="ag-no"></span>${ro ? '' : `<button type="button" class="btn ghost sm" data-act="ag-del" style="color:var(--bad)">Hapus</button>`}</div>
    <div class="fld"><label for="${k}_nama">Nama lengkap <span class="req">*</span></label><input type="text" id="${k}_nama" class="ag-nama" value="${esc(a.nama)}" ${ro}></div>
    <div class="ag-grid">
      <div class="fld"><label for="${k}_hub">Hubungan</label><select id="${k}_hub" class="ag-hub" ${ro}>${HUBUNGAN.map(h => `<option ${a.hubungan === h ? 'selected' : ''}>${h}</option>`).join('')}</select></div>
      <div class="fld"><label for="${k}_jk">Jenis kelamin</label><select id="${k}_jk" class="ag-jk" ${ro}><option value="L" ${a.jk === 'L' ? 'selected' : ''}>Laki-laki</option><option value="P" ${a.jk === 'P' ? 'selected' : ''}>Perempuan</option></select></div>
    </div>
    <div class="ag-grid">
      <div class="fld"><label for="${k}_lahir">Tanggal lahir</label><input type="date" id="${k}_lahir" class="ag-lahir" value="${esc(a.lahir)}" ${ro}><span class="hint ag-umur">${esc(umur(a.lahir))}</span></div>
      <div class="fld"><label for="${k}_nik">NIK</label><input type="text" id="${k}_nik" class="ag-nik" inputmode="numeric" maxlength="16" value="${esc(a.nik)}" placeholder="16 digit" autocomplete="off" ${ro}><span class="hint nik-info">${nikInfo(a.nik)}</span></div>
    </div>
    <div class="fld"><label for="${k}_agama">Agama</label><select id="${k}_agama" class="ag-agama" ${ro}>${agamaOpts(a.agama, 'Sama dengan kepala keluarga')}</select></div>
  </div>`;
}
function agRefresh(tambah) {
  const rows = [...document.querySelectorAll('#agList .ag-row')];
  rows.forEach((r, i) => { r.querySelector('.ag-no').textContent = 'Anggota ' + (i + 1); });
  const c = $('#agCount'); if (c) c.textContent = rows.length ? `${rows.length} orang selain kepala keluarga` : '';
  const e = $('#agEmpty'); if (e) e.hidden = rows.length > 0;
  const jiwa = $('#f_jiwa');
  if (jiwa && tambah !== undefined) { const v = Math.min(Math.max(1 + rows.length, 1), jiwa.options.length); jiwa.value = String(v); }
}
function agAmbil() {
  return [...document.querySelectorAll('#agList .ag-row')].map(r => ({
    nama: r.querySelector('.ag-nama').value.trim(), hubungan: r.querySelector('.ag-hub').value, jk: r.querySelector('.ag-jk').value,
    lahir: r.querySelector('.ag-lahir').value, agama: (r.querySelector('.ag-agama') || {}).value || '', nik: r.querySelector('.ag-nik').value.replace(/\D/g, ''), _nikId: r.querySelector('.ag-nik').id, _namaId: r.querySelector('.ag-nama').id
  }));
}
function cekNik(el, info = $('#nikInfo')) {
  const bersih = el.value.replace(/\D/g, '').slice(0, 16);
  if (bersih !== el.value) el.value = bersih;
  const n = bersih.length;
  if (info) { info.textContent = nikInfo(bersih); info.className = 'hint nik-info' + (n && n < 16 ? ' kurang' : n === 16 ? ' pas' : ''); }
  if (n && n < 16) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
  el.classList.toggle('nik-ok', n === 16);
}
function riwayatBayar(w) {
  const ps = S.iuran.filter(p => p.wargaId === w.id).sort((a, b) => b.periode.localeCompare(a.periode));
  const t = tunggakan(w);
  return `<div class="fld"><label>Riwayat iuran</label>
    <div class="s muted" style="font-size:.84rem">Wajib sejak ${esc(tgl(mulaiTgl(w)))} · ${ps.length} bulan dibayar, total ${esc(rp(ps.reduce((s, p) => s + (Number(p.jumlah) || 0), 0)))}${t ? ` · <span style="color:var(--bad)">${t} bulan tertunggak</span>` : ''}</div>
    <div style="display:flex;gap:5px;flex-wrap:wrap">${ps.slice(0, 12).map(p => `<span class="chip ok plain" title="Dibayar ${esc(tgl(p.tanggal))}">${esc(perLbl(p.periode))}</span>`).join('') || '<span class="muted">Belum ada pembayaran.</span>'}</div></div>`;
}

/* --- Iuran --- */
function vIuran() {
  const head = `<div class="sec-head"><div><h2>Iuran warga</h2><p>Iuran bulanan ${esc(rp(nominal()))} per KK · ${jtHari() ? `jatuh tempo tanggal <b>${jtHari()}</b> setiap bulan` : 'jatuh tempo belum diatur'}.${bisa('iuran') ? ' <button type="button" class="linkbtn" data-act="jt-atur">Atur jatuh tempo</button>' : ''}</p></div>
    <div class="monthnav"><button class="btn sm" data-act="per" data-n="-1" aria-label="Bulan sebelumnya">‹</button><strong>${esc(perLbl(S.per))}</strong><button class="btn sm" data-act="per" data-n="1" aria-label="Bulan berikutnya">›</button>
    ${S.per !== nowPer() ? '<button class="btn ghost sm" data-act="per" data-n="0">Bulan ini</button>' : ''}</div></div>`;
  if (!S.warga.length) return head + emptyWarga();
  const modeSeg = bisa('iuran') ? `<div class="toolbar" style="margin-bottom:-4px"><div class="seg" role="group" aria-label="Tampilan iuran"><button type="button" data-act="iurmode" data-k="daftar" aria-pressed="${S.iurMode !== 'massal'}">Daftar</button><button type="button" data-act="iurmode" data-k="massal" aria-pressed="${S.iurMode === 'massal'}">Entry massal</button></div></div>` : '';
  if (S.iurMode === 'massal' && bisa('iuran')) return head + modeSeg + vIuranMassal();
  const r = rekapBulan(S.per), pct = r.total ? Math.round(r.lunas / r.total * 100) : 0;
  let list = r.list.sort(sortHouse);
  if (S.iurFilter === 'belum') list = list.filter(w => !r.pm.has(w.id));
  if (S.iurFilter === 'lunas') list = list.filter(w => r.pm.has(w.id));
  const seg = [['semua', `Semua ${r.total}`], ['belum', `Belum bayar ${r.total - r.lunas}`], ['lunas', `Lunas ${r.lunas}`]]
    .map(([k, l]) => `<button type="button" data-act="iurf" data-k="${k}" aria-pressed="${S.iurFilter === k}">${l}</button>`).join('');
  const rowsT = list.map(w => { const p = r.pm.get(w.id), t = tunggakan(w); return `<tr>
      <td><span class="house">${esc(w.blok)}</span></td><td style="font-weight:600">${esc(w.nama)}</td>
      <td>${p ? `<span class="chip ok">Lunas</span>` : lewatTempo(S.per) ? `<span class="chip bad">Belum</span>${jtHari() ? `<div class="muted" style="font-size:.76rem;margin-top:2px">lewat tempo</div>` : ''}` : `<span class="chip mute">Belum jatuh tempo</span><div class="muted" style="font-size:.76rem;margin-top:2px">s.d. ${esc(tgl(tglTempo(S.per)))}</div>`}</td>
      <td class="num">${p ? `${esc(rp(p.jumlah))}<div class="muted" style="font-size:.78rem">${esc(tgl(p.tanggal))} · ${esc(p.metode || '')}</div>` : '<span class="muted">–</span>'}</td>
      <td>${t ? `<span class="chip ${t >= 3 ? 'bad' : 'warn'} plain">${t} bln</span>` : '<span class="muted">–</span>'}</td>
      <td class="r"><div class="racts">${p ? `<button class="btn sm" data-act="kwitansi" data-id="${esc(p.id)}">Kwitansi</button>${bisa('iuran') ? `<button class="btn sm ghost" data-act="iur-koreksi" data-id="${esc(p.id)}" title="Koreksi: kembalikan ke status Belum">Koreksi</button>` : ''}` : `${btnIngatkan(w)}${bisa('iuran') ? `<button class="btn sm pri" data-act="bayar" data-id="${esc(w.id)}" data-per="${S.per}">Catat bayar</button>` : ''}`}</div></td></tr>`; }).join('');
  const rowsM = list.map(w => { const p = r.pm.get(w.id), t = tunggakan(w); return `<div class="row"><span class="house">${esc(w.blok)}</span>
      <div class="grow"><div class="t">${esc(w.nama)}</div><div class="s">${p ? `Lunas ${esc(tgl(p.tanggal))} · ${esc(rp(p.jumlah))}` : `${lewatTempo(S.per) ? 'Belum bayar' + (jtHari() ? ' · lewat tempo' : '') : 'Belum jatuh tempo · s.d. ' + esc(tgl(tglTempo(S.per)))}${t ? ` · tunggakan ${t} bln` : ''}`}</div></div>
      <div class="racts">${p ? `<button class="btn sm" data-act="kwitansi" data-id="${esc(p.id)}">Kwitansi</button>${bisa('iuran') ? `<button class="btn sm ghost" data-act="iur-koreksi" data-id="${esc(p.id)}" aria-label="Koreksi pembayaran">Koreksi</button>` : ''}` : `${btnIngatkan(w, true)}${bisa('iuran') ? `<button class="btn sm pri" data-act="bayar" data-id="${esc(w.id)}" data-per="${S.per}">Catat</button>` : ''}`}</div></div>`; }).join('');
  const jtInfo = jtHari() ? (() => { const d = sisaHariTempo(S.per), belum = r.total - r.lunas;
    const cls = d < 0 ? 'bad' : d <= 3 ? 'warn' : 'info';
    return `<div class="jt-bar ${cls}"><span class="jt-ico" aria-hidden="true">📅</span><div class="grow"><b>Jatuh tempo ${esc(perLbl(S.per, true))}: ${esc(tgl(tglTempo(S.per)))}</b>
      <div class="muted" style="font-size:.84rem">${d > 0 ? `${d} hari lagi` : d === 0 ? 'Hari ini batas pembayaran' : `Sudah lewat ${-d} hari`}${belum ? ` · ${belum} KK belum bayar${d < 0 ? ' (masuk tunggakan, tombol Ingatkan aktif)' : ' (belum dihitung tunggakan)'}` : ' · semua KK sudah lunas'}</div></div>
      ${bisa('iuran') ? '<button type="button" class="btn sm" data-act="jt-atur">Ubah</button>' : ''}</div>`; })()
    : bisa('iuran') ? `<div class="jt-bar info"><span class="jt-ico" aria-hidden="true">📅</span><div class="grow"><b>Jatuh tempo iuran belum diatur</b><div class="muted" style="font-size:.84rem">Saat ini iuran bulan berjalan langsung dihitung tunggakan sejak tanggal 1. Atur tanggal jatuh tempo agar warga punya waktu membayar.</div></div><button type="button" class="btn sm pri" data-act="jt-atur">Atur</button></div>` : '';
  return head + modeSeg + jtInfo + `
  <div class="tiles">
    <div class="tile"><span class="lbl">Terkumpul</span><span class="val">${esc(rp(r.terkumpul))}</span><span class="sub">dari target ${esc(rp(r.target))}</span><div class="meter"><i style="width:${r.target ? Math.min(100, r.terkumpul / r.target * 100) : 0}%"></i></div></div>
    <div class="tile"><span class="lbl">KK lunas</span><span class="val">${r.lunas} / ${r.total}</span><span class="sub">${pct}% sudah membayar</span></div>
    <div class="tile"><span class="lbl">Kekurangan</span><span class="val">${esc(rp(Math.max(0, r.target - r.terkumpul)))}</span><span class="sub">${r.total - r.lunas} KK belum bayar</span></div>
  </div>
  <div class="toolbar"><div class="seg" role="group" aria-label="Saring status">${seg}</div><span style="flex:1"></span><button class="btn" data-act="iur-pdf" ${list.length ? '' : 'disabled'} title="Cetak daftar iuran ${esc(perLbl(S.per, true))} sesuai saringan">Cetak PDF</button></div>
  ${list.length ? `<div class="tbl-wrap hide-m"><table><thead><tr><th>Rumah</th><th>Kepala keluarga</th><th>Status</th><th>Pembayaran</th><th>Total tunggakan</th><th></th></tr></thead><tbody>${rowsT}</tbody></table></div>
  <div class="list-mobile">${rowsM}</div>` : `<div class="empty">${r.total ? 'Tidak ada KK pada saringan ini.' : 'Belum ada KK yang wajib iuran pada bulan ini.'}</div>`}`;
}
/* --- Atur jatuh tempo (pengurus keuangan: kelola iuran) --- */
function openJatuhTempo() {
  if (!bisa('iuran')) return;
  const kini = jtHari(), contoh = n => n ? tgl(nowPer() + '-' + pad(n)) : '';
  openDlg({title: 'Jatuh tempo iuran', area: 'iuran', submitLabel: 'Simpan',
    body: `<p style="margin:0">Tentukan batas tanggal pembayaran iuran setiap bulan. Sebelum tanggal ini, warga yang belum bayar berstatus <b>Belum jatuh tempo</b> (belum dihitung tunggakan dan tombol Ingatkan belum muncul). Lewat tanggal ini baru masuk <b>tunggakan</b>.</p>
      <div class="fld"><label for="jt_h">Jatuh tempo setiap tanggal</label><select id="jt_h" name="hari"><option value="0" ${kini ? '' : 'selected'}>— belum diatur (tunggakan dihitung sejak tanggal 1) —</option>${Array.from({length: 28}, (_, i) => i + 1).map(n => `<option value="${n}" ${n === kini ? 'selected' : ''}>Tanggal ${n}</option>`).join('')}</select>
      <span class="hint" id="jt_c">${kini ? `Contoh: iuran ${esc(perLbl(nowPer(), true))} jatuh tempo ${esc(contoh(kini))}.` : 'Maksimal tanggal 28 agar berlaku di semua bulan, termasuk Februari.'}</span></div>`,
    onSubmit: async d => {
      const n = Math.max(0, Math.min(28, Number(d.hari) || 0));
      try { const {error} = await SB.rpc('atur_jatuh_tempo', {p_hari: n}); if (error) throw error; }
      catch (e) { pesanDlg('Gagal menyimpan: ' + pesanAuth(e)); return false; }
      S.set = {...S.set}; if (n) S.set.jatuhTempo = n; else delete S.set.jatuhTempo;
      setTimeout(render, 0);
      toast(n ? `Jatuh tempo iuran diatur: tanggal ${n} setiap bulan.` : 'Jatuh tempo iuran dikosongkan.'); return true;
    }});
  const sel = $('#jt_h'); if (sel) sel.addEventListener('change', () => { const n = Number(sel.value) || 0, h = $('#jt_c'); if (h) h.textContent = n ? `Contoh: iuran ${perLbl(nowPer(), true)} jatuh tempo ${contoh(n)}.` : 'Maksimal tanggal 28 agar berlaku di semua bulan, termasuk Februari.'; });
}
/* --- Entry iuran massal (bendahara) --- */
function mzState() {
  if (!S.mz || S.mz.per !== S.per) S.mz = {per: S.per, sel: new Set(), jml: {}, bln: {}, met: {}, tgl: todayISO(), metode: METODE[0], q: ''};
  return S.mz;
}
function mzPeriode(w, mulai, n) {
  const paid = new Set(S.iuran.filter(p => p.wargaId === w.id).map(p => p.periode)), out = [];
  for (let i = 0, p = mulai; out.length < n && i < 36; i++, p = addM(p, 1)) if (!paid.has(p) && (mulaiPer(w) || '0000-00') <= p) out.push(p);
  return out;
}
function mzRingkas() {
  const z = mzState(); let kk = 0, bulan = 0, total = 0;
  for (const id of z.sel) { const w = wById(id); if (!w) continue; const n = mzPeriode(w, z.per, Number(z.bln[id]) || 1).length; if (!n) continue; kk++; bulan += n; total += n * (Number(z.jml[id] ?? nominal()) || 0); }
  return {kk, bulan, total};
}
function mzUpdBar() {
  const r = mzRingkas(), el = $('#mzSum'), b = $('#mzSave');
  if (el) el.innerHTML = r.kk ? `<b>${r.kk} KK</b> · ${r.bulan} bulan · <b>${esc(rp(r.total))}</b>` : '<span class="muted">Belum ada KK yang dipilih</span>';
  if (b) { b.disabled = !r.kk; b.textContent = r.kk ? `Simpan ${r.kk} pembayaran` : 'Simpan pembayaran'; }
}
// KK yang membayar bulan lalu, wajib iuran & belum membayar bulan ini
function mzDariLalu() {
  const lalu = paidMap(addM(S.per, -1)), kini = paidMap(S.per);
  return S.warga.filter(w => wajib(w, S.per) && lalu.has(w.id) && !kini.has(w.id)).map(w => ({w, p: lalu.get(w.id)}));
}
function mzAmbilLalu() {
  const z = mzState(), daftar = mzDariLalu();
  if (!daftar.length) { toast(`Tidak ada KK dari ${perLbl(addM(S.per, -1), true)} yang bisa diambil.`, 'bad'); return; }
  z.dariLalu = new Set();
  for (const {w, p} of daftar) { z.sel.add(w.id); z.jml[w.id] = nominal(); z.bln[w.id] = 1; if (p.metode) z.met[w.id] = p.metode; z.dariLalu.add(w.id); }
  render(); mzUpdBar();
  toast(`${daftar.length} KK dari ${perLbl(addM(S.per, -1), true)} dipilih dengan nominal ${rp(nominal())}. Status ${perLbl(S.per, true)} masih Belum bayar sampai Anda klik Simpan.`);
}
function vIuranMassal() {
  const z = mzState(), pm = paidMap(S.per), q = z.q.trim().toLowerCase();
  let list = S.warga.filter(w => wajib(w, S.per)).sort(sortHouse);
  const belum = list.filter(w => !pm.has(w.id));
  if (q) list = list.filter(w => (w.blok + ' ' + w.nama).toLowerCase().includes(q));
  const semuaDipilih = belum.length && belum.every(w => z.sel.has(w.id));
  const metOpt = (v, attrs) => `<select ${attrs}>${METODE.map(m => `<option ${m === v ? 'selected' : ''}>${esc(m)}</option>`).join('')}</select>`;
  const blnOpt = (v, attrs) => `<select ${attrs}>${[1, 2, 3, 6, 12].map(n => `<option value="${n}" ${Number(v) === n ? 'selected' : ''}>${n} bln</option>`).join('')}</select>`;
  const rowsT = list.map(w => {
    const p = pm.get(w.id), on = z.sel.has(w.id), t = tunggakan(w);
    if (p) return `<tr class="off"><td></td><td><span class="house">${esc(w.blok)}</span></td><td style="font-weight:600">${esc(w.nama)}</td><td colspan="3"><span class="chip ok">Lunas</span> <span class="muted" style="font-size:.84rem">${esc(rp(p.jumlah))} · ${esc(tgl(p.tanggal))} · ${esc(p.metode || '')}</span></td><td></td></tr>`;
    return `<tr class="${on ? 'pick' : ''}" data-row="${esc(w.id)}"><td><input type="checkbox" class="mz-ck" data-mz="sel" data-id="${esc(w.id)}" ${on ? 'checked' : ''} aria-label="Pilih ${esc(w.nama)}"></td>
      <td><span class="house">${esc(w.blok)}</span></td><td style="font-weight:600">${esc(w.nama)}${z.dariLalu && z.dariLalu.has(w.id) ? ' <span class="chip info plain" style="font-size:.7rem">dari bulan lalu</span>' : ''}</td>
      <td><input type="number" min="0" step="1000" data-mz="jml" data-id="${esc(w.id)}" value="${esc(z.jml[w.id] ?? nominal())}" aria-label="Nominal per bulan"></td>
      <td>${blnOpt(z.bln[w.id] || 1, `data-mz="bln" data-id="${esc(w.id)}" aria-label="Jumlah bulan"`)}</td>
      <td>${metOpt(z.met[w.id] || z.metode, `data-mz="met" data-id="${esc(w.id)}" aria-label="Metode"`)}</td>
      <td>${t ? `<span class="chip ${t >= 3 ? 'bad' : 'warn'} plain">${t} bln</span>` : '<span class="muted">–</span>'}</td></tr>`;
  }).join('');
  const rowsM = list.map(w => {
    const p = pm.get(w.id), on = z.sel.has(w.id);
    if (p) return `<div class="mz-card" style="opacity:.6"><div class="row" style="padding:0;border:0"><span class="house">${esc(w.blok)}</span><div class="grow"><div class="t">${esc(w.nama)}</div><div class="s">Lunas · ${esc(rp(p.jumlah))}</div></div></div></div>`;
    return `<div class="mz-card ${on ? 'pick' : ''}" data-row="${esc(w.id)}"><label class="row" style="padding:0;border:0;cursor:pointer"><input type="checkbox" class="mz-ck" data-mz="sel" data-id="${esc(w.id)}" ${on ? 'checked' : ''}><span class="house">${esc(w.blok)}</span><span class="grow"><span class="t">${esc(w.nama)}${z.dariLalu && z.dariLalu.has(w.id) ? ' <span class="chip info plain" style="font-size:.7rem">dari bulan lalu</span>' : ''}</span><span class="s">${tunggakan(w) ? `Tunggakan ${tunggakan(w)} bln` : 'Tidak ada tunggakan'}</span></span></label>
      <div class="g"><input type="number" min="0" step="1000" inputmode="numeric" data-mz="jml" data-id="${esc(w.id)}" value="${esc(z.jml[w.id] ?? nominal())}" aria-label="Nominal per bulan">${blnOpt(z.bln[w.id] || 1, `data-mz="bln" data-id="${esc(w.id)}" aria-label="Jumlah bulan"`)}</div>
      ${metOpt(z.met[w.id] || z.metode, `data-mz="met" data-id="${esc(w.id)}" aria-label="Metode"`)}</div>`;
  }).join('');
  return `<div class="panel" style="display:grid;gap:12px">
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end">
        <div class="fld" style="margin:0"><label for="mzTgl">Tanggal bayar</label><input type="date" id="mzTgl" data-mz="tgl" value="${esc(z.tgl)}"></div>
        <div class="fld" style="margin:0"><label for="mzMet">Metode (semua baris)</label>${metOpt(z.metode, 'id="mzMet" data-mz="metode"')}</div>
        <div class="fld" style="margin:0;flex:1;min-width:180px"><label for="mzQ">Cari rumah / nama</label><input type="search" id="mzQ" data-mz="q" value="${esc(z.q)}" placeholder="mis. B-12"></div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
        <button type="button" class="btn sm" data-act="mz-semua" ${belum.length ? '' : 'disabled'}>${semuaDipilih ? 'Batal pilih semua' : `Pilih semua belum bayar (${belum.length})`}</button>
        <button type="button" class="btn sm pri" data-act="mz-lalu" ${mzDariLalu().length ? '' : 'disabled'} title="Pilih KK yang membayar di ${esc(perLbl(addM(S.per, -1), true))}, nominal sesuai Pengaturan">↻ Ambil data bulan lalu (${mzDariLalu().length})</button>
        <span class="muted" style="font-size:.84rem">Bulan ${esc(perLbl(S.per, true))} · ${list.length - list.filter(w => !pm.has(w.id)).length} lunas, ${belum.length} belum bayar. Pilih "2 bln" dst. untuk bayar beberapa bulan sekaligus (bulan yang sudah lunas dilewati).</span>
      </div></div>
    ${list.length ? `<div class="tbl-wrap hide-m"><table class="mz-tbl"><thead><tr><th style="width:36px"></th><th>Rumah</th><th>Kepala keluarga</th><th>Nominal/bln (Rp)</th><th>Bulan</th><th>Metode</th><th>Tunggakan</th></tr></thead><tbody>${rowsT}</tbody></table></div>
    <div class="list-mobile"><div style="display:grid;gap:8px">${rowsM}</div></div>` : '<div class="empty">Tidak ada KK yang cocok.</div>'}
    <div class="mz-bar"><span class="grow" id="mzSum"></span><button type="button" class="btn ghost" data-act="mz-reset">Kosongkan</button><button type="button" class="btn pri" id="mzSave" data-act="mz-simpan" disabled>Simpan pembayaran</button></div>`;
}
async function mzSimpan() {
  const z = mzState(), rows = [], ringkas = [];
  for (const id of z.sel) {
    const w = wById(id); if (!w) continue;
    const jumlah = Number(z.jml[id] ?? nominal()) || 0, pers = mzPeriode(w, z.per, Number(z.bln[id]) || 1);
    for (const p of pers) rows.push({id: `${w.id}_${p}`, data: {wargaId: w.id, periode: p, jumlah, tanggal: z.tgl, metode: z.met[id] || z.metode, catatan: 'Entry massal', dicatat: todayISO(), oleh: (S.me && S.me.id) || '', olehSesi: S.sesi || ''}});
    if (pers.length) ringkas.push(`${w.blok} · ${w.nama}: ${pers.length} bln × ${rp(jumlah)}`);
  }
  if (!rows.length) { toast('Tidak ada pembayaran baru untuk disimpan.', 'bad'); return; }
  const total = rows.reduce((s, r) => s + r.data.jumlah, 0);
  openDlg({
    title: 'Simpan pembayaran massal?', submitLabel: `Simpan ${rows.length} catatan`, area: 'iuran',
    body: `<p style="margin:0">Tanggal bayar <b>${esc(tgl(z.tgl))}</b>, total <b>${esc(rp(total))}</b> untuk ${ringkas.length} KK.</p>
      <div class="panel" style="max-height:240px;overflow:auto;padding:10px 12px;background:var(--sunk);border:0;font-size:.86rem">${ringkas.map(t => `<div>${esc(t)}</div>`).join('')}</div>`,
    onSubmit: async () => {
      if (!bisa('iuran')) { pesanDlg('Peran Anda tidak bisa mengubah iuran.'); return false; }
      if (!z.tgl) { pesanDlg('Isi tanggal bayar.'); return false; }
      let simpan = 0;
      for (let i = 0; i < rows.length; i += 200) {
        const chunk = rows.slice(i, i + 200);
        const {data, error} = await SB.from('dokumen').upsert(chunk.map(r => ({koleksi: 'iuran', id: r.id, data: r.data})), {onConflict: 'koleksi,id', ignoreDuplicates: true}).select('id,data');
        if (error) { pesanDlg(`Gagal menyimpan${simpan ? ` (${simpan} catatan sudah tersimpan)` : ''}: ${sbErr(error).code === 'ditolak' ? 'role Anda tidak punya izin mengubah iuran.' : error.message}`); return false; }
        for (const r of data || []) taruh('iuran', r.id, r.data);
        simpan += (data || []).length;
      }
      sinkron('iuran'); S.mz = null; sbSched();
      toast(`${simpan} pembayaran iuran tersimpan${simpan < rows.length ? ` (${rows.length - simpan} sudah tercatat sebelumnya)` : ''}.`);
      return true;
    }
  });
}
function formBayar(w, per) {
  return `
  <div class="panel" style="padding:10px 14px;background:var(--sunk);border:0"><span class="house" style="background:var(--surface)">${esc(w.blok)}</span> <b>${esc(w.nama)}</b>
    <div class="muted" style="font-size:.82rem">Tunggakan saat ini: ${tunggakan(w)} bulan</div></div>
  <input type="hidden" name="wargaId" value="${esc(w.id)}">
  <div class="grid2">
    <div class="fld"><label for="b_per">Mulai bulan</label><input type="month" id="b_per" name="periode" value="${esc(per)}" required></div>
    <div class="fld"><label for="b_n">Jumlah bulan dibayar</label><select id="b_n" name="bulan">${[1, 2, 3, 4, 5, 6, 12].map(n => `<option value="${n}">${n} bulan</option>`).join('')}</select><span class="hint">Bulan yang sudah lunas dilewati</span></div>
  </div>
  <div class="grid2">
    <div class="fld"><label for="b_jml">Nominal per bulan (Rp)</label><input type="number" id="b_jml" name="jumlah" min="0" step="1000" value="${nominal()}" required></div>
    <div class="fld"><label for="b_tgl">Tanggal bayar</label><input type="date" id="b_tgl" name="tanggal" value="${todayISO()}" required></div>
  </div>
  <div class="fld"><label for="b_met">Metode</label><select id="b_met" name="metode">${METODE.map(m => `<option>${m}</option>`).join('')}</select></div>
  <div class="fld"><label for="b_cat">Catatan</label><input type="text" id="b_cat" name="catatan" placeholder="mis. dititipkan ke bendahara"></div>`;
}

/* --- Keluhan --- */
function chipK(s) { return `<span class="chip ${s === 'Selesai' ? 'ok' : s === 'Diproses' ? 'info' : 'warn'}">${esc(s)}</span>`; }
function vKeluhan() {
  const head = `<div class="sec-head"><div><h2>Keluhan warga</h2><p>Catat laporan warga, lalu ikuti sampai selesai.</p></div>
    <button class="btn pri" data-act="kel-new" ${isSatpam() ? 'disabled aria-disabled="true" title="Satpam tidak dapat mencatat keluhan baru"' : dis('keluhan')}>+ Catat keluhan</button></div>`;
  const open = kelTerbuka().length, done = S.keluhan.length - open;
  const seg = [['terbuka', `Terbuka ${open}`], ['selesai', `Selesai ${done}`], ['semua', `Semua ${S.keluhan.length}`]]
    .map(([k, l]) => `<button type="button" data-act="kelf" data-k="${k}" aria-pressed="${S.kelFilter === k}">${l}</button>`).join('');
  const pr = {Tinggi: 0, Sedang: 1, Rendah: 2}, st = {Baru: 0, Diproses: 1, Selesai: 2};
  const q = S.kelQ.trim().toLowerCase();
  let list = [...S.keluhan].filter(k => S.kelFilter === 'semua' || (S.kelFilter === 'selesai' ? k.status === 'Selesai' : k.status !== 'Selesai'))
    .filter(k => !q || [k.judul, k.isi, k.kategori, k.pelaporNama, k.lokasi].some(v => String(v || '').toLowerCase().includes(q)))
    .sort((a, b) => (st[a.status] - st[b.status]) || (pr[a.prioritas] - pr[b.prioritas]) || String(b.dibuat).localeCompare(String(a.dibuat)));
  if (!S.keluhan.length) return head + `<div class="empty"><h3>Belum ada keluhan</h3><p style="margin:0">Catat keluhan pertama, misalnya lampu jalan mati atau sampah belum diangkut.</p>
    <button class="btn pri" data-act="kel-new" ${isSatpam() ? 'disabled aria-disabled="true" title="Satpam tidak dapat mencatat keluhan baru"' : dis('keluhan')}>+ Catat keluhan</button></div>`;
  return head + `
  <div class="toolbar"><div class="seg" role="group" aria-label="Saring status">${seg}</div>
    <input class="search" type="search" id="qKel" placeholder="Cari judul, lokasi, pelapor…" value="${esc(S.kelQ)}" aria-label="Cari keluhan"></div>
  <div class="kel-list">${list.length ? list.map(k => {
    const w = k.wargaId && wById(k.wargaId);
    const pel = w ? `${w.blok} · ${w.nama}` : (k.pelaporNama || 'Tanpa nama');
    return `<article class="kel p-${esc(k.prioritas)}">
      <div class="meta">${chipK(k.status)}<span class="chip mute plain">${esc(k.kategori)}</span><span>Prioritas ${esc(k.prioritas)}</span><span>·</span><span>${esc(tgl(k.dibuat))}</span></div>
      <h4>${esc(k.judul)}</h4>
      ${k.isi ? `<p>${esc(k.isi)}</p>` : ''}
      <div class="meta"><span>Pelapor: ${esc(pel)}</span>${k.lokasi ? `<span>· Lokasi: ${esc(k.lokasi)}</span>` : ''}${Array.isArray(k.foto) && k.foto.length ? `<span>· 📷 ${k.foto.length} foto</span>` : ''}</div>${kelFoto(k)}
      ${k.tanggapan ? `<div class="resp"><b>Tanggapan pengurus${k.diperbarui ? ' · ' + esc(tgl(k.diperbarui)) : ''}</b>${esc(k.tanggapan)}</div>` : ''}
      ${!bisa('keluhan') ? '' : `<div class="acts">
        ${k.status === 'Baru' ? `<button class="btn sm" data-act="kel-st" data-id="${esc(k.id)}" data-s="Diproses">Mulai proses</button>` : ''}
        ${k.status !== 'Selesai' ? `<button class="btn sm pri" data-act="kel-st" data-id="${esc(k.id)}" data-s="Selesai">Tandai selesai</button>` : `<button class="btn sm" data-act="kel-st" data-id="${esc(k.id)}" data-s="Diproses">Buka lagi</button>`}
        <button class="btn sm ghost" data-act="kel-edit" data-id="${esc(k.id)}">Ubah & tanggapi</button></div>`}
    </article>`; }).join('') : '<div class="empty">Tidak ada keluhan pada saringan ini.</div>'}</div>`;
}
function formKel(k) {
  k = k || {kategori: KATEGORI[0], prioritas: 'Sedang', status: 'Baru'};
  const opts = wargaAktif().map(w => `<option value="${esc(w.id)}" ${k.wargaId === w.id ? 'selected' : ''}>${esc(w.blok)} · ${esc(w.nama)}</option>`).join('');
  return `${k ? kelFoto(k, true) : ''}
  <div class="fld"><label for="k_j">Judul keluhan <span class="req">*</span></label><input type="text" id="k_j" name="judul" required value="${esc(k.judul)}" placeholder="mis. Lampu jalan depan Blok B mati"></div>
  <div class="grid2">
    <div class="fld"><label for="k_kat">Kategori</label><select id="k_kat" name="kategori">${KATEGORI.map(x => `<option ${k.kategori === x ? 'selected' : ''}>${x}</option>`).join('')}</select></div>
    <div class="fld"><label for="k_pr">Prioritas</label><select id="k_pr" name="prioritas">${PRIORITAS.map(x => `<option ${k.prioritas === x ? 'selected' : ''}>${x}</option>`).join('')}</select></div>
  </div>
  <div class="fld"><label for="k_isi">Uraian</label><textarea id="k_isi" name="isi" rows="3" placeholder="Apa yang terjadi, sejak kapan">${esc(k.isi)}</textarea></div>
  <div class="grid2">
    <div class="fld"><label for="k_w">Pelapor (warga)</label><select id="k_w" name="wargaId"><option value="">— bukan dari daftar —</option>${opts}</select></div>
    <div class="fld"><label for="k_pn">Nama pelapor lain</label><input type="text" id="k_pn" name="pelaporNama" value="${esc(k.pelaporNama)}" placeholder="Jika tidak ada di daftar"></div>
  </div>
  <div class="fld"><label for="k_lok">Lokasi</label><input type="text" id="k_lok" name="lokasi" value="${esc(k.lokasi)}" placeholder="mis. Jalan Blok C, dekat pos ronda"></div>
  ${k.id ? `<div class="fld"><label for="k_st">Status</label><select id="k_st" name="status">${STATUS_K.map(x => `<option ${k.status === x ? 'selected' : ''}>${x}</option>`).join('')}</select></div>
  <div class="fld"><label for="k_tg">Tanggapan pengurus</label><textarea id="k_tg" name="tanggapan" rows="3" placeholder="Tindakan yang sudah atau akan dilakukan">${esc(k.tanggapan)}</textarea></div>` : ''}`;
}

/* --- Pengaturan --- */
function vPengaturan() {
  const contoh = KOLEKSI.reduce((s, c) => s + S[c].filter(x => x.contoh).length, 0);
  const ro = dis('pengaturan');
  const tm = temaGet();
  return `<div class="sec-head"><div><h2>Pengaturan</h2><p>Pengaturan lingkungan berlaku untuk semua pengurus. Tampilan hanya untuk perangkat ini.</p></div></div>
  <div class="panel" style="display:grid;gap:12px;max-width:560px">
    <h3>Tampilan <small>perangkat ini saja</small></h3>
    <div class="tema-pil" role="radiogroup" aria-label="Pilih tampilan">
      ${[['otomatis', 'auto', 'Otomatis', 'Ikuti pengaturan HP / komputer'], ['terang', 'sun', 'Terang', 'Latar putih'], ['gelap', 'moon', 'Gelap', 'Latar gelap, nyaman malam hari']]
        .map(([k, ic, l, d]) => `<button type="button" role="radio" aria-checked="${tm === k}" data-act="tema" data-k="${k}"><span class="tp-ico">${ico(ic)}</span><b>${l}</b><span>${d}</span></button>`).join('')}
    </div>
  </div>
  ${S.mode === 'lokal' ? '<div class="notice">Mode coba: penyimpanan bersama tidak tersedia di tampilan ini, jadi perubahan hilang saat halaman ditutup. Buka halaman ini dari tautan artefak di Claude agar data tersimpan.</div>' : ''}
  <form class="panel" id="setForm" style="display:grid;gap:12px;max-width:560px">
    <h3>Lingkungan & iuran</h3>
    <div class="fld"><label for="s_nama">Nama lingkungan</label><input type="text" id="s_nama" name="nama" value="${esc(S.set.nama)}" ${ro}><span class="hint">Tampil di judul, mis. "Villani 5" atau "RT 05 / RW 12"</span></div>
    <div class="fld"><label for="s_namaL">Nama lengkap lingkungan</label><input type="text" id="s_namaL" name="namaLengkap" value="${esc(S.set.namaLengkap || '')}" maxlength="100" placeholder="mis. Villa Nusa Indah 5 Kluster Kasuari" ${ro}><span class="hint">Dipakai di judul Struktur Kepengurusan. Kosongkan untuk memakai nama lingkungan di atas.</span></div>
    <div class="fld"><label for="s_iur">Iuran bulanan per KK (Rp)</label><input type="number" id="s_iur" name="iuranBulanan" min="0" step="1000" value="${esc(S.set.iuranBulanan)}" ${ro}><span class="hint">Nominal bawaan saat mencatat pembayaran baru. Pembayaran lama tidak berubah.</span></div>
    <h3 style="margin-top:6px">Kop surat</h3>
    <div class="grid2">
      <div class="fld"><label for="s_rt">Nomor RT</label><input type="text" id="s_rt" name="rt" value="${esc(S.set.rt)}" placeholder="mis. 005" ${ro}></div>
      <div class="fld"><label for="s_rw">Nomor RW</label><input type="text" id="s_rw" name="rw" value="${esc(S.set.rw)}" placeholder="mis. 012" ${ro}></div>
    </div>
    <div class="grid2">
      <div class="fld"><label for="s_kel">Kelurahan / desa</label><input type="text" id="s_kel" name="kelurahan" value="${esc(S.set.kelurahan)}" ${ro}></div>
      <div class="fld"><label for="s_kec">Kecamatan</label><input type="text" id="s_kec" name="kecamatan" value="${esc(S.set.kecamatan)}" ${ro}></div>
    </div>
    <div class="fld"><label for="s_kota">Kota / kabupaten</label><input type="text" id="s_kota" name="kota" value="${esc(S.set.kota)}" ${ro}></div>
    <div class="grid2">
      <div class="fld"><label for="s_ketua">Nama Ketua RT</label><input type="text" id="s_ketua" name="ketua" value="${esc(S.set.ketua)}" ${ro}><span class="hint">${namaKetua() && pengurusAktif().some(p => p.nama === namaKetua()) ? 'Tanda tangan memakai pengurus berjabatan Ketua RT: ' + esc(namaKetua()) : 'Dipakai bila belum ada pengurus berjabatan Ketua RT'}</span></div>
      <div class="fld"><label for="s_ketuarw">Nama Ketua RW</label><input type="text" id="s_ketuarw" name="ketuaRw" value="${esc(S.set.ketuaRw)}" ${ro}><span class="hint">Kolom "Mengetahui"</span></div>
    </div>
    <div class="fld"><label for="s_bayar">Info pembayaran untuk warga</label><textarea id="s_bayar" name="infoBayar" rows="3" placeholder="mis. Transfer ke BCA 1234567890 a.n. Bendahara RT 05, atau tunai ke Ibu Sri (B-02)" ${ro}>${esc(S.set.infoBayar || '')}</textarea><span class="hint">Tampil di halaman Rumah saya milik warga</span></div>
    <label class="ck" style="font-weight:500;align-items:flex-start"><input type="checkbox" name="papanPublik" ${S.set.papanPublik === false ? '' : 'checked'} ${ro}> <span>Tampilkan papan info di halaman login (pengumuman terbaru & status keluhan, tanpa nama pelapor atau nomor rumah). Bisa dilihat tanpa login.</span></label>
    <label class="ck" style="font-weight:500;align-items:flex-start"><input type="checkbox" name="pilihanBahasa" ${S.set.pilihanBahasa === false ? '' : 'checked'} ${S.sesi === 'pemilik' ? '' : 'disabled'}> <span>Tampilkan pilihan bahasa <b>ID / EN</b> di halaman login dan menu warga<br><span class="muted" style="font-size:.82rem">Matikan untuk kembali selalu Bahasa Indonesia. Hanya Pemilik yang bisa mengubah.</span></span></label>
    <h3 style="margin-top:6px">Keamanan login</h3>
    <div class="fld"><label for="s_ts">Site key Cloudflare Turnstile (CAPTCHA)</label><input type="text" id="s_ts" name="turnstileKey" value="${esc(S.set.turnstileKey || '')}" maxlength="80" autocomplete="off" placeholder="0x4AAAAAAA…" ${S.sesi === 'pemilik' ? '' : 'disabled'}><span class="hint">Isi site key (bukan secret key) agar halaman login memakai verifikasi anti-bot. Secret key dipasang di dashboard Supabase → Authentication → Bot and Abuse Protection. Hanya Pemilik yang dapat mengubah.</span></div>
    <h3 style="margin-top:6px">Lokasi lingkungan</h3>
    <div class="fld"><label for="s_alamat">Alamat lengkap</label><textarea id="s_alamat" name="alamat" rows="2" ${ro}>${esc(lokasiRT().alamat)}</textarea><span class="hint">Tampil di peta Beranda, Rumah saya, dan untuk dikirim ke tamu/kurir</span></div>
    <div class="grid2">
      <div class="fld"><label for="s_lat">Lintang (latitude)</label><input type="number" id="s_lat" name="lat" step="0.0000001" min="-11" max="6" value="${esc(lokasiRT().lat)}" ${ro}></div>
      <div class="fld"><label for="s_lng">Bujur (longitude)</label><input type="number" id="s_lng" name="lng" step="0.0000001" min="95" max="141" value="${esc(lokasiRT().lng)}" ${ro}></div>
    </div>
    <span class="hint" style="margin-top:-6px">Koordinat bisa disalin dari Google Maps (tekan lama titik lokasi). <a href="${esc(petaUrl(lokasiRT()))}" target="_blank" rel="noopener" style="color:var(--accent)">Cek di Google Maps</a></span>
    <h3 style="margin-top:6px">Saldo awal kas</h3>
    <p class="muted" style="margin:0">${(c => c.tanggal || c.jumlah ? `${esc(rp(c.jumlah))}${c.tanggal ? ' per ' + esc(tglSurat(c.tanggal)) : ''}. ` : 'Belum diatur. ')(saldoCutoff())}Saldo awal (cut-off) diatur Bendahara di menu <a href="#laporan" data-act="tab" data-k="laporan" style="color:var(--accent);font-weight:600">Laporan keuangan</a>.</p>
    <div><button class="btn pri" type="submit" ${ro}>Simpan pengaturan</button></div>
  </form>
  <div class="panel" style="display:grid;gap:10px;max-width:560px">
    <h3>Unduh data (Excel / CSV)</h3>
    <p style="margin:0" class="muted">File CSV bisa dibuka di Excel atau Google Sheets.</p>
    <div class="dl-grid">
      <button class="btn" data-act="ekspor" data-k="warga">Data warga (KK)</button>
      <button class="btn" data-act="ekspor" data-k="anggota">Anggota keluarga</button>
      <button class="btn" data-act="ekspor" data-k="iuran">Riwayat iuran</button>
      <button class="btn" data-act="ekspor" data-k="tunggakan">Daftar tunggakan</button>
      <button class="btn" data-act="ekspor" data-k="kas">Buku kas</button>
      <button class="btn" data-act="ekspor" data-k="keluhan">Keluhan</button>
      <button class="btn" data-act="ekspor" data-k="surat">Buku agenda surat</button>
    </div>
  </div>
  <div class="panel" style="display:grid;gap:10px;max-width:560px">
    <h3>Data contoh</h3>
    <p style="margin:0" class="muted">${contoh ? `Ada ${contoh} catatan contoh (warga, iuran, keluhan). Hapus sebelum memakai aplikasi untuk data sungguhan.` : 'Tidak ada data contoh. Anda bisa mengisinya untuk mencoba fitur.'}</p>
    <div class="toolbar">${contoh ? `<button class="btn danger" data-act="sample-del" ${ro}>Hapus semua data contoh</button>` : `<button class="btn" data-act="sample-load" ${ro}>Isi data contoh</button>`}</div>
  </div>
  <div class="panel" style="display:grid;gap:6px;max-width:560px">
    <h3>Aplikasi di HP</h3>
    <p style="margin:0" class="muted">${PWA.standalone ? 'Anda sedang memakai aplikasi yang terpasang.' : 'Pasang Warga Kasuari di layar utama HP agar terbuka seperti aplikasi.'}</p>
    ${PWA.standalone ? '' : '<div class="toolbar"><button class="btn" data-act="pwa-pasang">📲 Pasang aplikasi</button></div>'}
  </div>
  <div class="panel" style="display:grid;gap:6px;max-width:560px">
    <h3>Akses pengurus & warga</h3>
    <p style="margin:0" class="muted">Bagikan alamat aplikasi ini. Pengurus dan warga masuk dengan No. HP & password yang dibuat Pemilik di menu Admin. Data tersimpan di Supabase.</p>
  </div>`;
}

/* --- Login --- */
function pilihanLogin() {
  const me = S.me || {}, list = [];
  if (bolehPemilik()) {
    const pin = !!S.keamanan.pinHash;
    list.push({id: 'pemilik', nama: S.mode === 'online' ? (me.name || 'Pemilik aplikasi') : 'Pemilik', sub: 'Pemilik · semua menu dan Admin', uid: me.id, img: me.avatarUrl, pin, boleh: true});
  }
  for (const p of pengurusAktif()) {
    const r = roleById(p.peranId), milikSaya = !!(me.id && p.userId === me.id);
    const pin = !!p.pinHash && !milikSaya;
    list.push({id: p.id, nama: p.nama, sub: `${p.jabatan || 'Pengurus'} · role ${r ? r.nama : '(belum ada)'}`, uid: p.userId, pin, milikSaya,
      boleh: pin || milikSaya || S.mode !== 'online'});
  }
  const a = aksesLama();
  if (a && !pengurusSaya()) list.push({id: 'akses', nama: me.name || 'Akun Anda', sub: roleById(LEGACY[a.peran]).nama, uid: me.id, img: me.avatarUrl, pin: false, boleh: true});
  return list;
}
/* ---------- Tema panel login: berganti tiap bulan + hari raya (otomatis) ---------- */
function acakSeed(n) { let x = n >>> 0 || 1; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; }
function hijriah(d) {
  try { const p = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', {day: 'numeric', month: 'numeric'}).formatToParts(d);
    return {m: Number((p.find(x => x.type === 'month') || {}).value), d: Number((p.find(x => x.type === 'day') || {}).value)}; } catch (e) { return null; }
}
const TH = {
  bintang(n, seed, x0 = 0, x1 = 600, y0 = 10, y1 = 200, warna = '#FFFFFF') { const r = acakSeed(seed); let o = ''; for (let i = 0; i < n; i++) { const x = x0 + r() * (x1 - x0), y = y0 + r() * (y1 - y0), s = .6 + r() * 1.6; o += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${s.toFixed(2)}" fill="${warna}" opacity="${(.35 + r() * .6).toFixed(2)}"/>`; } return o; },
  kembangApi(x, y, r, c) { let o = ''; for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2, x1 = x + Math.cos(a) * r * .35, y1 = y + Math.sin(a) * r * .35, x2 = x + Math.cos(a) * r, y2 = y + Math.sin(a) * r; o += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${c}" stroke-width="2" stroke-linecap="round"/><circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="1.8" fill="${c}"/>`; } return `<g opacity=".9">${o}</g>`; },
  awan(x, y, k, c = '#FFFFFF', op = .85) { return `<g transform="translate(${x} ${y}) scale(${k})" fill="${c}" opacity="${op}"><ellipse cx="0" cy="0" rx="34" ry="16"/><ellipse cx="26" cy="-10" rx="24" ry="18"/><ellipse cx="52" cy="2" rx="28" ry="14"/><ellipse cx="-24" cy="4" rx="20" ry="11"/></g>`; },
  hujan(seed, x0, x1) { const r = acakSeed(seed); let o = ''; for (let i = 0; i < 60; i++) { const x = x0 + r() * (x1 - x0), y = 40 + r() * 190; o += `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x - 5).toFixed(1)}" y2="${(y + 14).toFixed(1)}" stroke="#DCEFF5" stroke-width="1.6" stroke-linecap="round" opacity=".55"/>`; } return o; },
  pelangi(cx, cy, r) { return ['#E74C3C', '#F39C12', '#F1C40F', '#2ECC71', '#3498DB', '#8E44AD'].map((c, i) => `<path d="M${cx - r + i * 7} ${cy} A${r - i * 7} ${r - i * 7} 0 0 1 ${cx + r - i * 7} ${cy}" fill="none" stroke="${c}" stroke-width="7" opacity=".38"/>`).join(''); },
  tetes(x, y, k, c = '#BFE8F2') { return `<path transform="translate(${x} ${y}) scale(${k})" d="M0 -14 C6 -4 10 2 10 7 A10 10 0 0 1 -10 7 C-10 2 -6 -4 0 -14Z" fill="${c}" opacity=".75"/>`; },
  ombak(y, c, op) { return `<path d="M0 ${y} q25 -10 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" opacity="${op}"/>`; },
  bunga(x, y, k, c, tengah = '#FFE08A') { let o = ''; for (let i = 0; i < 5; i++) o += `<ellipse cx="0" cy="-9" rx="5.5" ry="9" fill="${c}" transform="rotate(${i * 72})"/>`; return `<g transform="translate(${x} ${y}) scale(${k})" opacity=".9">${o}<circle r="4" fill="${tengah}"/></g>`; },
  burung(x, y, k, c = '#FFFFFF') { return `<path transform="translate(${x} ${y}) scale(${k})" d="M-10 0 Q-5 -6 0 0 Q5 -6 10 0" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".85"/>`; },
  daun(x, y, k, rot, c) { return `<path transform="translate(${x} ${y}) rotate(${rot}) scale(${k})" d="M0 -12 C8 -6 8 6 0 12 C-8 6 -8 -6 0 -12Z M0 -12 V12" fill="${c}" stroke="#0F4A2C" stroke-width=".8" opacity=".8"/>`; },
  layangan(x, y, k, c1, c2, rot = 0) { return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${k})" opacity=".95"><path d="M0 -22 L15 0 L0 26 L-15 0Z" fill="${c1}"/><path d="M0 -22 L15 0 L0 26Z" fill="${c2}"/><path d="M0 26 q-8 12 0 22 t0 22 t-6 18" fill="none" stroke="#FFFFFF" stroke-width="1.2" opacity=".8"/><path d="M-3 46 l6 4 M-3 64 l6 4" stroke="${c1}" stroke-width="3"/></g>`; },
  bendera(seed) { let o = '<path d="M20 14 Q300 70 580 14" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity=".7"/>'; for (let i = 0; i < 20; i++) { const t = (i + .5) / 20, x = 20 + t * 560, y = 14 + 4 * 28 * t * (1 - t); o += `<path d="M${(x - 9).toFixed(1)} ${y.toFixed(1)} L${(x + 9).toFixed(1)} ${y.toFixed(1)} L${x.toFixed(1)} ${(y + 20).toFixed(1)}Z" fill="${i % 2 ? '#FFFFFF' : '#E70011'}" stroke="rgba(0,0,0,.15)" stroke-width=".5"/>`; } return o; },
  umbul(x, y, h) { return `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + h}" stroke="#F3E6D0" stroke-width="2.5"/><path d="M${x} ${y + 4} q22 18 6 40 q-12 20 4 44 L${x} ${y + 88}Z" fill="#E70011"/><path d="M${x} ${y + 4} q12 18 3 40 q-7 20 2 44 L${x} ${y + 88}Z" fill="#FFFFFF" opacity=".95"/>`; },
  kawung(seed) { let o = ''; for (let y = 22; y < 236; y += 44) for (let x = 30; x < 600; x += 44) { o += `<g transform="translate(${x} ${y})" fill="none" stroke="#E7C08A" stroke-width="1.6" opacity=".35"><ellipse cx="0" cy="-10" rx="7" ry="10"/><ellipse cx="0" cy="10" rx="7" ry="10"/><ellipse cx="-10" cy="0" rx="10" ry="7"/><ellipse cx="10" cy="0" rx="10" ry="7"/><circle r="2" fill="#E7C08A"/></g>`; } return o; },
  lampu(seed) { const r = acakSeed(seed), c = ['#FFD45A', '#FF7A7A', '#7CE0FF', '#9CFF8A', '#FFB0F0']; let o = '<path d="M20 14 Q160 64 300 24 T580 30" fill="none" stroke="#0B132B" stroke-width="1.5" opacity=".6"/>'; for (let i = 0; i < 16; i++) { const t = (i + .5) / 16, x = 20 + t * 560, y = t < .5 ? 14 + 4 * 25 * (t * 2) * (1 - t * 2) + 10 * t * 2 : 24 + 8 * Math.sin((t - .5) * 2 * Math.PI) + 6 * (t - .5) * 2; const k = c[i % c.length]; o += `<circle cx="${x.toFixed(1)}" cy="${(y + 8).toFixed(1)}" r="5" fill="${k}"/><circle cx="${x.toFixed(1)}" cy="${(y + 8).toFixed(1)}" r="11" fill="${k}" opacity=".18"/>`; } return o; },
 lentera(x, y, tali, k, c) { return `<line x1="${x}" y1="${tali}" x2="${x}" y2="${y}" stroke="#F3D98B" stroke-width="1.2" opacity=".8"/><g transform="translate(${x} ${y}) scale(${k})"><path d="M-6 0 H6 L9 6 H-9Z" fill="#C9A23A"/><path d="M-10 6 H10 L13 30 L0 40 L-13 30Z" fill="${c}"/><path d="M-10 6 H10 L13 30 L0 40 L-13 30Z" fill="none" stroke="#C9A23A" stroke-width="1.5"/><ellipse cx="0" cy="22" rx="5" ry="8" fill="#FFF3B0" opacity=".9"/><circle cy="22" r="18" fill="#FFD45A" opacity=".15"/></g>`; },
  ketupat(x, y, tali, k) { return `<line x1="${x}" y1="${tali}" x2="${x}" y2="${y - 16 * k}" stroke="#E8D9A8" stroke-width="1.2" opacity=".85"/><g transform="translate(${x} ${y}) scale(${k})"><path d="M0 -16 L16 0 L0 16 L-16 0Z" fill="#8BC34A"/><path d="M0 -16 L16 0 L0 16 L-16 0Z M-8 -8 L8 8 M8 -8 L-8 8 M-4 -12 L12 4 M4 -12 L-12 4 M-12 -4 L4 12 M12 -4 L-4 12" fill="none" stroke="#3E6B1F" stroke-width="1.3"/><path d="M0 16 q-4 8 -2 14 M0 16 q4 8 2 14" stroke="#D9C27A" stroke-width="1.5" fill="none"/></g>`; },
  pohonNatal(x, y, k) { return `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 -40 L18 -12 H9 L24 10 H12 L28 32 H-28 L-12 10 H-24 L-9 -12 H-18Z" fill="#2E8B57"/><rect x="-4" y="32" width="8" height="10" fill="#6B4226"/><path d="M0 -50 l3 7 h7 l-6 4 l2 7 l-6 -4 l-6 4 l2 -7 l-6 -4 h7Z" fill="#FFD45A"/><circle cx="-8" cy="0" r="2.5" fill="#E74C3C"/><circle cx="9" cy="16" r="2.5" fill="#F1C40F"/><circle cx="-12" cy="22" r="2.5" fill="#3498DB"/><circle cx="5" cy="-14" r="2.5" fill="#E74C3C"/></g>`; },
  benderaTiang(x, y, k) { return `<g transform="translate(${x} ${y}) scale(${k})"><line x1="0" y1="0" x2="0" y2="70" stroke="#E8DCC8" stroke-width="2.5"/><circle cy="-2" r="3" fill="#F5C842"/><rect x="1" y="2" width="34" height="11" fill="#E70011"/><rect x="1" y="13" width="34" height="11" fill="#FFFFFF"/></g>`; },
  masjid(x, y, k) { return `<g transform="translate(${x} ${y}) scale(${k})" fill="#163018" opacity=".55"><rect x="-40" y="-20" width="80" height="30"/><path d="M-26 -20 A26 26 0 0 1 26 -20Z"/><rect x="-2" y="-58" width="4" height="12"/><rect x="50" y="-60" width="10" height="70"/><path d="M48 -60 L55 -74 L62 -60Z"/><rect x="-60" y="-60" width="10" height="70"/><path d="M-62 -60 L-55 -74 L-48 -60Z"/></g>`; },
  pita(x, y) { return `<g transform="translate(${x} ${y})"><path d="M-14 0 C-14 -10 0 -10 0 0 C0 -10 14 -10 14 0 C14 8 0 18 0 26 C0 18 -14 8 -14 0Z" fill="#E70011"/><path d="M0 26 L-8 44 M0 26 L8 44" stroke="#FFFFFF" stroke-width="4"/></g>`; },
};
// langit: [atas, tengah, bawah], glow; benda: matahari | bulan | sabit | -
const TEMA_LOGIN = {
  1: {nama: 'Tahun Baru', langit: ['#0E1B3D', '#1B2E66', '#2A3F7E'], glow: 'rgb(255 200 120 / .12)', benda: 'bulan', sapa: 'Selamat Tahun Baru! Semoga lingkungan kita makin rukun.',
    hias: () => TH.bintang(70, 11, 20, 580, 5, 220) + TH.kembangApi(150, 70, 46, '#FFD45A') + TH.kembangApi(300, 50, 34, '#FF8FB1') + TH.kembangApi(250, 150, 28, '#7CE0FF') + TH.kembangApi(560, 60, 26, '#9CFF8A')},
  2: {nama: 'Musim hujan', langit: ['#2F4F5F', '#3E6F7A', '#4F8A86'], glow: 'rgb(220 240 255 / .10)', benda: '-', sapa: 'Musim hujan — yuk cek saluran air di depan rumah.',
    hias: () => TH.pelangi(230, 250, 160) + TH.awan(120, 60, 1.1, '#E6F0F2') + TH.awan(360, 40, .9, '#D5E3E6') + TH.awan(520, 70, .8, '#E6F0F2') + TH.hujan(7, 40, 580)},
  3: {nama: 'Hari Air Sedunia', langit: ['#0F4C6B', '#1D7A8C', '#2B9C97'], glow: 'rgb(190 240 255 / .14)', benda: 'matahari', mWarna: '#FFE9A6', sapa: 'Hari Air Sedunia (22 Maret) — hemat air, jaga sumbernya.',
    hias: () => TH.tetes(120, 70, 1.4) + TH.tetes(220, 130, 1) + TH.tetes(330, 60, 1.2) + TH.tetes(80, 170, .8) + TH.tetes(560, 60, .9) + TH.ombak(226, '#BFE8F2', .45) + TH.ombak(212, '#E0F6FA', .28)},
  4: {nama: 'Hari Kartini', langit: ['#5E2A47', '#8A4462', '#B0627C'], glow: 'rgb(255 210 220 / .16)', benda: 'matahari', mWarna: '#FFD9A0', sapa: 'Selamat Hari Kartini (21 April) — perempuan hebat, keluarga kuat.',
    hias: () => TH.bunga(110, 70, 1.4, '#FFFFFF') + TH.bunga(230, 140, 1, '#FFE3EC') + TH.bunga(330, 60, 1.1, '#FFD1DC') + TH.bunga(80, 190, .8, '#FFFFFF') + TH.bunga(570, 50, .9, '#FFFFFF') + TH.bunga(300, 200, .7, '#FFFFFF')},
  5: {nama: 'Hari Kebangkitan Nasional', langit: ['#1F5F7A', '#2E86A8', '#58A7C2'], glow: 'rgb(255 230 150 / .2)', benda: 'matahari', mWarna: '#FFD45A', sapa: 'Hari Kebangkitan Nasional (20 Mei) — bangkit dan maju bersama.',
    hias: () => TH.burung(150, 80, 1.3) + TH.burung(190, 62, 1) + TH.burung(220, 96, 1.1) + TH.burung(320, 50, .8) + TH.burung(560, 50, .8) + TH.awan(90, 160, .8, '#FFFFFF', .6) + TH.awan(300, 190, .6, '#FFFFFF', .5)},
  6: {nama: 'Hari Lingkungan Hidup', langit: ['#145233', '#1F7A4D', '#2B8C57'], glow: 'rgb(245 200 66 / .18)', benda: 'matahari', mWarna: '#F5C842', sapa: 'Hari Lingkungan Hidup (5 Juni) — jaga kebersihan kluster kita.',
    hias: () => TH.daun(110, 70, 1.4, 30, '#8FD19E') + TH.daun(220, 150, 1, -20, '#B6E3A8') + TH.daun(330, 70, 1.2, 60, '#8FD19E') + TH.daun(70, 200, .9, -50, '#CDEBB0') + TH.daun(570, 50, .9, 10, '#B6E3A8') + TH.daun(300, 205, .8, 80, '#8FD19E')},
  7: {nama: 'Hari Anak Nasional', langit: ['#1E6FB0', '#3E92D1', '#7DBBE8'], glow: 'rgb(255 255 255 / .18)', benda: 'matahari', mWarna: '#FFD45A', sapa: 'Hari Anak Nasional (23 Juli) — lingkungan aman untuk anak bermain.',
    hias: () => TH.awan(100, 190, .8, '#FFFFFF', .7) + TH.awan(330, 40, .7, '#FFFFFF', .6) + TH.layangan(150, 70, 1.2, '#E74C3C', '#F1C40F', -12) + TH.layangan(300, 120, 1, '#2ECC71', '#FFFFFF', 10) + TH.layangan(220, 40, .7, '#9B59B6', '#F39C12', -6)},
  8: {nama: 'HUT Republik Indonesia', langit: ['#7E1616', '#A82323', '#C23A3A'], glow: 'rgb(255 255 255 / .14)', benda: '-', sapa: () => `Dirgahayu Republik Indonesia ke-${new Date().getFullYear() - 1945} — 17 Agustus.`,
    hias: () => TH.bendera(3) + TH.umbul(90, 46, 160) + TH.umbul(340, 56, 150) + TH.umbul(570, 46, 160) + TH.bintang(16, 5, 40, 560, 70, 220)},
  9: {nama: 'Senja kemarau', langit: ['#6B3219', '#B5582A', '#E08B43'], glow: 'rgb(255 190 110 / .25)', benda: 'matahari', mWarna: '#FFB347', sapa: 'Musim kemarau — hemat air dan waspada kebakaran.',
    hias: () => TH.burung(150, 90, 1.2, '#3B1A0C') + TH.burung(185, 74, .9, '#3B1A0C') + TH.burung(215, 100, 1, '#3B1A0C') + TH.burung(330, 60, .8, '#3B1A0C')},
  10: {nama: 'Hari Batik & Sumpah Pemuda', langit: ['#3B2414', '#5E3A22', '#80532F'], glow: 'rgb(231 192 138 / .18)', benda: 'matahari', mWarna: '#E9B872', sapa: 'Hari Batik (2 Okt) & Sumpah Pemuda (28 Okt) — bersatu dalam keberagaman.',
    hias: () => TH.kawung(1)},
  11: {nama: 'Hari Pahlawan', langit: ['#4A1212', '#6E1D1D', '#4A3426'], glow: 'rgb(255 120 100 / .14)', benda: 'bulan', sapa: 'Hari Pahlawan (10 November) — mengenang jasa para pahlawan.',
    hias: () => TH.bintang(45, 21, 20, 580, 5, 200, '#FFE7C2') + TH.benderaTiang(120, 110, 1.3) + TH.benderaTiang(320, 130, 1)},
  12: {nama: 'Akhir tahun & Hari Ibu', langit: ['#1B2448', '#2B3A6B', '#3D4F86'], glow: 'rgb(255 210 140 / .14)', benda: 'bulan', sapa: 'Hari Ibu (22 Desember) — terima kasih para ibu. Sampai jumpa di tahun baru!',
    hias: () => TH.lampu(9) + TH.bintang(50, 31, 20, 580, 60, 225)},
  ramadan: {nama: 'Ramadan', langit: ['#0B2A2A', '#114040', '#1A5A50'], glow: 'rgb(243 217 139 / .14)', benda: 'sabit', sapa: 'Marhaban ya Ramadan — selamat menunaikan ibadah puasa.',
    hias: () => TH.bintang(55, 41, 20, 580, 5, 225) + TH.lentera(110, 70, 8, 1.1, '#C0392B') + TH.lentera(200, 110, 8, .9, '#16A085') + TH.lentera(320, 60, 8, 1, '#8E44AD') + TH.lentera(570, 40, 8, .8, '#D68910')},
  fitri: {nama: 'Idul Fitri', langit: ['#0F4A2C', '#1F7A4D', '#3A9A5E'], glow: 'rgb(245 220 120 / .2)', benda: 'sabit', sapa: 'Selamat Hari Raya Idul Fitri — mohon maaf lahir dan batin.',
    hias: () => TH.bintang(35, 51, 20, 580, 5, 220, '#FFF3B0') + TH.ketupat(110, 80, 8, 1.2) + TH.ketupat(200, 120, 8, .9) + TH.ketupat(320, 70, 8, 1.1) + TH.ketupat(570, 50, 8, .8)},
  adha: {nama: 'Idul Adha', langit: ['#243A17', '#3F5F24', '#5E8233'], glow: 'rgb(245 220 120 / .18)', benda: 'sabit', sapa: 'Selamat Hari Raya Idul Adha.',
    hias: () => TH.bintang(45, 61, 20, 580, 5, 160, '#FFF3B0') + TH.masjid(180, 205, 1.1)},
  natal: {nama: 'Natal', langit: ['#0F3B2A', '#164F38', '#5A1C24'], glow: 'rgb(255 220 150 / .16)', benda: 'bulan', sapa: 'Selamat Natal bagi warga yang merayakan — damai di lingkungan kita.',
    hias: () => TH.bintang(55, 71, 20, 580, 5, 225) + TH.pohonNatal(150, 170, 1.3) + TH.pohonNatal(330, 182, .95)},
};
function temaLoginKini(d = new Date()) {
  try { const q = new URLSearchParams(location.search).get('tema'); if (q && TEMA_LOGIN[q]) return {kode: q, ...TEMA_LOGIN[q]}; } catch (e) {}
  const h = hijriah(d), bln = d.getMonth() + 1, tgl = d.getDate();
  let kode = String(bln);
  if (h && h.m === 9) kode = 'ramadan';
  else if (h && h.m === 10 && h.d <= 7) kode = 'fitri';
  else if (h && h.m === 12 && h.d >= 9 && h.d <= 13) kode = 'adha';
  else if (bln === 12 && tgl >= 20 && tgl <= 26) kode = 'natal';
  return {kode, ...TEMA_LOGIN[kode]};
}
function bendaLangit(t, mobile) {
  if (t.benda === 'matahari') { const c = t.mWarna || '#F5C842'; return `<defs><radialGradient id="sunG" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#FFF6CC"/><stop offset=".55" stop-color="${c}"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient></defs><circle cx="470" cy="150" r="150" fill="url(#sunG)" opacity=".35"/><circle cx="470" cy="150" r="62" fill="${c}"/>`; }
  if (t.benda === 'bulan') return `<circle cx="470" cy="130" r="110" fill="#F4F1DE" opacity=".08"/><circle cx="470" cy="130" r="44" fill="#F4F1DE"/><circle cx="455" cy="120" r="8" fill="#DCD6BC" opacity=".6"/><circle cx="484" cy="142" r="5" fill="#DCD6BC" opacity=".6"/>`;
  if (t.benda === 'sabit') return `<circle cx="470" cy="130" r="110" fill="#F3D98B" opacity=".08"/><path d="M490 84 A50 50 0 1 0 490 176 A40 40 0 1 1 490 84Z" fill="#F3D98B"/>`;
  return '';
}
/* ---------- Pilihan bahasa ID / EN (halaman login + menu warga) ----------
   Diterjemahkan saat tampil (teks antarmuka saja). Isi buatan pengguna, dokumen resmi (kwitansi, surat, notulen, PDF)
   dan pesan WhatsApp tetap Bahasa Indonesia. Pengurus (tampilan pengurus) selalu Bahasa Indonesia. */
const BHS_KEY = 'bahasa';
// default selalu ID setiap aplikasi dibuka; pilihan EN hanya berlaku selama aplikasi/tab masih terbuka
try { localStorage.removeItem(BHS_KEY); } catch (e) {}
let BHS = (() => { try { return sessionStorage.getItem(BHS_KEY) === 'en' ? 'en' : 'id'; } catch (e) { return 'id'; } })();
const bhsBoleh = () => S.set.pilihanBahasa !== false;
const bhsAktif = () => BHS === 'en' && bhsBoleh() && (!S.authUser || isWarga());
const FLAG_ID = '<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="10" fill="#E70011"/><rect y="10" width="30" height="10" fill="#fff"/></svg>';
const FLAG_EN = '<svg viewBox="0 0 60 30" aria-hidden="true"><clipPath id="ukA"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="ukB"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><g clip-path="url(#ukA)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#ukB)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>';
function bhsTombol(kecil) {
  if (!bhsBoleh()) return kecil ? '' : benderaId();
  return `<div class="lang-seg${kecil ? ' kecil' : ''}" role="group" aria-label="Bahasa / Language" data-noi18n>
    <button type="button" data-act="bhs" data-k="id" aria-pressed="${BHS !== 'en'}" title="Bahasa Indonesia">${FLAG_ID}<span>ID</span></button><button type="button" data-act="bhs" data-k="en" aria-pressed="${BHS === 'en'}" title="English">${FLAG_EN}<span>EN</span></button></div>`;
}
function gantiBahasa(k) {
  BHS = k === 'en' ? 'en' : 'id'; try { sessionStorage.setItem(BHS_KEY, BHS); } catch (e) {}
  document.documentElement.lang = bhsAktif() ? 'en' : 'id';
  if (dlg.open) dlg.close();
  render();
}
const BLN_ID = {Januari: 'January', Februari: 'February', Maret: 'March', April: 'April', Mei: 'May', Juni: 'June', Juli: 'July', Agustus: 'August', September: 'September', Oktober: 'October', November: 'November', Desember: 'December',
  Jan: 'Jan', Feb: 'Feb', Mar: 'Mar', Apr: 'Apr', Jun: 'Jun', Jul: 'Jul', Agu: 'Aug', Agt: 'Aug', Sep: 'Sep', Okt: 'Oct', Nov: 'Nov', Des: 'Dec'};
const HARI_ID = {Senin: 'Monday', Selasa: 'Tuesday', Rabu: 'Wednesday', Kamis: 'Thursday', Jumat: 'Friday', "Jum'at": 'Friday', Sabtu: 'Saturday', Minggu: 'Sunday'};
const RE_BLN = 'Januari|Februari|Maret|April|Mei|Juni|Juli|Agustus|September|Oktober|November|Desember|Jan|Feb|Mar|Apr|Jun|Jul|Agu|Agt|Sep|Okt|Nov|Des';
const tglEN = t => t.replace(new RegExp(`(\\d{1,2}\\s)?\\b(${RE_BLN})\\b(?=\\s\\d{4}|\\s*$|\\))`, 'g'), (m, d, b) => (d || '') + (BLN_ID[b] || b))
  .replace(/\b(Senin|Selasa|Rabu|Kamis|Jumat|Sabtu|Minggu)\b(?=,)/g, h => HARI_ID[h]).replace(/(\d+) tahun\b/g, '$1 years').replace(/\bpukul\b/g, 'at').replace(/(\d+) jam (\d+) menit lagi/, '$1 h $2 min left');
const I18N = {
  // login & papan
  'Lingkungan yang tertata,': 'A well-organized', 'warga yang terhubung.': 'neighborhood, a connected community.',
  'Iuran dan kas RT yang transparan': 'Transparent dues and community funds', 'Keamanan dan pos jaga terpantau': 'Monitored security and guard post', 'Layanan warga dalam satu aplikasi': 'All resident services in one app',
  'Selamat datang': 'Welcome', 'Masuk dengan No. HP dan password.': 'Sign in with your phone number and password.', 'No. HP': 'Phone number', 'Lihat': 'Show', 'Sembunyikan': 'Hide', 'Masuk': 'Sign in', 'Lupa password?': 'Forgot password?',
  'Info warga': 'Resident info', 'Ilustrasi perumahan': 'Housing illustration', 'Tampilkan password': 'Show password', 'Tutup': 'Close', 'Bendera Indonesia': 'Indonesian flag',
  '📲 Pasang aplikasi di HP': '📲 Install the app on your phone', 'Memeriksa…': 'Checking…', 'Hubungi': 'Contact', 'Pemilik aplikasi': 'the app owner', 'atau': 'or', 'pengurus RT': 'the RT committee',
  '. Password Anda akan direset dari menu Admin, lalu password sementara dikirim lewat WhatsApp ke No. HP Anda.': '. Your password will be reset from the Admin menu and a temporary password will be sent to your phone via WhatsApp.',
  'Kembali ke login': 'Back to sign in', 'Akun dengan email? Reset lewat email': 'Email account? Reset by email',
  '📢 Pengumuman': '📢 Announcements', '🛠️ Keluhan warga': '🛠️ Resident complaints', 'diperbarui otomatis': 'updated automatically', 'Akan datang': 'Upcoming', 'Sudah lewat': 'Past',
  'Ditindaklanjuti': 'In progress', 'Selesai bulan ini': 'Resolved this month', 'Masuk untuk melapor keluhan dan melihat detail.': 'Sign in to report complaints and see details.', 'Menunggu ditinjau pengurus': 'Waiting for committee review',
  'Isi No. HP dan password.': 'Enter your phone number and password.', 'No. HP minimal 10 digit, mis. 081234567890.': 'Phone number must be at least 10 digits, e.g. 081234567890.',
  'No. HP atau password salah.': 'Incorrect phone number or password.', 'Email atau password salah.': 'Incorrect email or password.',
  'Silakan coba lagi. Pastikan No. HP dan password benar.': 'Please try again. Make sure your phone number and password are correct.',
  'Sesi berakhir. Silakan masuk lagi.': 'Session ended. Please sign in again.', 'Sesi Anda diakhiri oleh Pemilik aplikasi. Silakan masuk lagi.': 'Your session was ended by the app owner. Please sign in again.',
  'Anda keluar otomatis karena tidak aktif 15 menit.': 'You were signed out automatically after 15 minutes of inactivity.',
  'Verifikasi anti-bot gagal atau kedaluwarsa. Tunggu kotak verifikasi selesai lalu coba lagi.': 'Anti-bot verification failed or expired. Wait for the verification box to finish, then try again.',
  // header & menu
  'Keluar': 'Sign out', 'Struktur Kepengurusan': 'Committee Structure', 'Struktur': 'Committee', 'Rumah saya': 'My home', 'Rumah': 'Home', 'Keamanan': 'Security', 'Aman': 'Security', 'Keluhan saya': 'My complaints', 'Lapor': 'Report',
  'Pengumuman': 'Announcements', 'Info': 'News', 'Sumbangan': 'Donations', 'Sumbang': 'Donate', 'Kebersihan': 'Cleanliness', 'Bersih': 'Clean', 'Kerohanian': 'Religious', 'Rohani': 'Religious', 'Lapak Warga': 'Resident Market', 'Lapak': 'Market', 'Lainnya': 'More',
  'Menu lainnya': 'More menu', 'Ganti ke tampilan gelap': 'Switch to dark mode', 'Ganti ke tampilan terang': 'Switch to light mode', 'Keamanan akun': 'Account security', 'Keamanan akun: password, sidik jari, PIN': 'Account security: password, fingerprint, PIN',
  // rumah saya
  'Lunas': 'Paid', 'Belum': 'Unpaid', 'Belum bayar': 'Not paid yet', 'Belum jatuh tempo': 'Not yet due', 'Tunggakan': 'Arrears', 'Tidak ada tunggakan': 'No arrears', 'Cara pembayaran': 'How to pay', 'Data rumah': 'House details', 'Ubah data': 'Edit details',
  'Nomor rumah': 'House number', 'Kepala keluarga': 'Head of household', 'Jenis kelamin': 'Gender', 'Laki-laki': 'Male', 'Perempuan': 'Female', 'Agama': 'Religion', 'Tanggal lahir': 'Date of birth', 'No. HP / WhatsApp': 'Phone / WhatsApp',
  'Status huni': 'Residency status', 'Pemilik': 'Owner', 'Penyewa / kontrak': 'Tenant', 'Kontrak': 'Tenant', 'Sewa': 'Tenant', 'Jumlah jiwa': 'Household members', 'Wajib iuran sejak': 'Dues required since', 'Data keluarga': 'Family members', 'Ubah data keluarga': 'Edit family members',
  'No': 'No', 'Nama lengkap': 'Full name', 'Hubungan': 'Relationship', 'Umur': 'Age', 'Istri': 'Wife', 'Suami': 'Husband', 'Anak': 'Child', 'Orang tua': 'Parent', 'Mertua': 'Parent-in-law', 'Menantu': 'Child-in-law', 'Cucu': 'Grandchild', 'Saudara': 'Relative',
  'Tambah, ubah atau hapus anggota keluarga lewat tombol Ubah data keluarga.': 'Add, edit or remove family members with the Edit family members button.',
  'Riwayat iuran': 'Dues history', 'Tahun': 'Year', 'Semua tahun': 'All years', 'Bulan lunas': 'Months paid', 'Total dibayar': 'Total paid', 'Bulan': 'Month', 'Status': 'Status', 'Tanggal bayar': 'Payment date', 'Tgl': 'Date', 'Metode': 'Method', 'Jumlah': 'Amount',
  'Tunai': 'Cash', 'Transfer': 'Transfer', 'Kwitansi': 'Receipt', 'Jumlah dibayar': 'Total paid', 'Belum ada tagihan pada tahun ini.': 'No bills this year.', 'seluruh periode': 'all periods',
  'Alamat & peta rumah': 'Address & map', 'Tampilkan peta': 'Show map', 'Ketuk untuk memuat peta Google Maps': 'Tap to load Google Maps', 'Petunjuk arah': 'Directions', 'Buka di Google Maps': 'Open in Google Maps', 'Kirim alamat ke tamu / kurir': 'Send address to guest / courier', 'Salin alamat': 'Copy address',
  '🧹 Kebersihan lingkungan': '🧹 Neighborhood cleanliness', 'Lihat jadwal': 'See schedule', 'Kegiatan berikutnya': 'Next activity', 'Lapor masalah kebersihan': 'Report a cleanliness problem', 'Baru di Lapak Warga': 'New in Resident Market', 'Lihat semua': 'See all',
  'Bisa antar': 'Delivery available', 'Pre-order': 'Pre-order', 'Simpan ke favorit': 'Save to favorites', 'Pilih tahun riwayat iuran': 'Choose dues history year', 'WhatsApp': 'WhatsApp',
  // struktur
  'Pelindung': 'Patron', 'Ketua': 'Chair', 'Wakil ketua': 'Vice chair', 'Sekretaris & bendahara': 'Secretary & treasurer', 'Koordinator & seksi': 'Coordinators & sections', 'Koordinator blok': 'Block coordinators', 'Petugas keamanan': 'Security staff', 'Petugas kebersihan': 'Cleaning staff', 'Petugas lainnya': 'Other staff',
  'Ketua RT': 'RT Chair', 'Wakil Ketua RT': 'RT Vice Chair', 'Sekretaris': 'Secretary', 'Bendahara': 'Treasurer', 'Satpam': 'Security guard', 'Seksi Keamanan': 'Security Section', 'Seksi Kebersihan': 'Cleanliness Section', 'Seksi Kerohanian': 'Religious Affairs Section', 'Seksi Sosial': 'Social Section', 'Seksi Pembangunan': 'Development Section', 'Humas': 'Public Relations',
  'Koordinator Keamanan': 'Security Coordinator', 'Koordinator Kebersihan': 'Cleanliness Coordinator', 'Koordinator Kerohanian': 'Religious Affairs Coordinator', 'Anggota pengurus': 'Committee member',
  'Bagikan ke WhatsApp': 'Share to WhatsApp', 'Unduh PDF': 'Download PDF', 'Memuat struktur kepengurusan…': 'Loading committee structure…',
  // keamanan
  'Panggil satpam saat darurat, titip rumah, dan cek paket Anda.': 'Call security in an emergency, register your house while away, and check your parcels.', 'Tombol darurat': 'Emergency button',
  'Tekan bila ada kebakaran, pencurian, atau darurat medis. Panggilan langsung tampil di layar pos satpam dan pengurus.': 'Press for fire, theft or a medical emergency. The alert appears instantly at the guard post and on committee screens.',
  'Paket untuk saya': 'My parcels', 'Ambil di pos': 'Pick up at the post', 'Sudah diambil': 'Picked up', 'Diambil': 'Picked up', 'Di pos': 'At the post', 'Titip rumah': 'House watch', '+ Titip rumah': '+ House watch',
  'Akan bepergian? Titipkan rumah supaya satpam memeriksa saat patroli.': 'Going away? Register your house so security checks it on patrol.', 'Tamu ke rumah saya': 'Visitors to my house', 'Belum ada tamu tercatat di pos.': 'No visitors recorded at the post yet.',
  'Belum ada paket.': 'No parcels yet.', 'Nomor darurat': 'Emergency numbers', 'Polisi': 'Police', 'Salin': 'Copy', 'Ambulans': 'Ambulance', 'Pemadam kebakaran': 'Fire brigade', 'PLN (gangguan listrik)': 'PLN (power outage)', 'Alamat untuk petugas darurat': 'Address for emergency services',
  'Kirim alamat darurat via WhatsApp': 'Send emergency address via WhatsApp', 'Panggilan darurat terkirim': 'Emergency alert sent', 'Batalkan, situasi sudah aman': 'Cancel, the situation is safe', 'Aktif': 'Active', 'Selesai': 'Done', 'Lewat jadwal pulang': 'Past return date',
  'Catatan patroli': 'Patrol notes', 'Belum ada catatan patroli.': 'No patrol notes yet.', 'Kirim panggilan darurat': 'Send emergency alert', 'Jenis darurat': 'Emergency type', 'Kebakaran': 'Fire', 'Pencurian / perampokan': 'Theft / robbery', 'Darurat medis': 'Medical emergency', 'Orang mencurigakan': 'Suspicious person', 'Lainnya ': 'Other',
  'Pesan singkat (opsional)': 'Short message (optional)', 'Panggilan ini tampil di layar pos satpam dan pengurus yang sedang membuka aplikasi. Untuk keadaan sangat genting, hubungi juga nomor darurat di halaman ini.': 'This alert appears at the guard post and for committee members who have the app open. In a critical situation, also call the emergency numbers on this page.',
  'Kirim sekarang': 'Send now', 'mis. asap dari dapur, butuh bantuan': 'e.g. smoke from the kitchen, need help', 'akan dipantau satpam saat patroli selama Anda pergi.': 'will be checked by security on patrol while you are away.', 'Pergi tanggal': 'Leaving on', 'Pulang tanggal': 'Returning on',
  'Kontak yang bisa dihubungi': 'Contact person', 'Catatan untuk satpam': 'Notes for security', 'Titipkan': 'Register', 'mis. lampu teras dinyalakan, kunci dititip ke rumah B-02': 'e.g. porch light left on, key left at house B-02',
  'Panggilan darurat terkirim ke pos satpam.': 'Emergency alert sent to the guard post.', 'Panggilan darurat dibatalkan.': 'Emergency alert cancelled.', 'Rumah dititipkan. Satpam akan memantau saat patroli.': 'House registered. Security will check it on patrol.',
  // keluhan
  'Laporkan masalah di lingkungan dan pantau tanggapan pengurus.': 'Report neighborhood problems and follow the committee response.', '+ Laporkan keluhan': '+ Report a complaint', 'Laporkan keluhan': 'Report a complaint', 'Anda belum pernah mengirim keluhan.': 'You have not sent any complaints yet.',
  'Menunggu ditinjau pengurus.': 'Waiting for committee review.', 'Sedang ditangani.': 'Being handled.', 'Baru': 'New', 'Diproses': 'In progress', 'Judul': 'Title', 'Kategori': 'Category', 'Uraian': 'Description', 'Lokasi': 'Location',
  'Kebersihan & sampah': 'Cleanliness & waste', 'Jalan & saluran air': 'Roads & drainage', 'Penerangan jalan': 'Street lighting', 'Air & listrik': 'Water & electricity', 'Fasilitas umum': 'Public facilities', 'Ketertiban & tetangga': 'Order & neighbors',
  'Foto kejadian': 'Incident photos', '(opsional, maks. 2)': '(optional, max. 2)', 'Tambah foto': 'Add photo', 'Batal': 'Cancel', 'Kirim laporan': 'Send report', 'Mengunggah foto…': 'Uploading photos…',
  'Hanya foto (JPG/PNG/WebP), bukan video. Maksimal 2 foto; foto besar otomatis dikecilkan di bawah 1 MB.': 'Photos only (JPG/PNG/WebP), no videos. Max. 2 photos; large photos are resized below 1 MB automatically.',
  'Maksimal 2 foto per laporan.': 'Max. 2 photos per report.', 'Menyiapkan foto…': 'Preparing photo…', 'Video atau file selain foto tidak bisa diunggah. Pilih foto (JPG/PNG/WebP).': 'Videos or non-photo files cannot be uploaded. Choose a photo (JPG/PNG/WebP).',
  'mis. Lampu jalan depan rumah mati': 'e.g. Street light in front of my house is out', 'Apa yang terjadi, sejak kapan': 'What happened, since when', 'Isi notulen masih kosong.': 'Content is empty.',
  'Laporan terkirim. Pengurus akan menindaklanjuti.': 'Report sent. The committee will follow up.', 'Laporan terkirim.': 'Report sent.', 'Foto tidak bisa dimuat': 'Photo could not be loaded',
  // pengumuman
  'Kabar untuk warga. Bagikan ke grup WhatsApp dengan satu tombol.': 'News for residents.', 'Disematkan': 'Pinned', 'Waktu:': 'Time:', 'Tempat:': 'Place:', 'Saring pengumuman': 'Filter announcements', 'Belum ada pengumuman.': 'No announcements yet.',
  'Informasi': 'Information', 'Kegiatan': 'Activity', 'Kerja bakti': 'Community clean-up', 'Rapat warga': 'Residents meeting', 'Keagamaan': 'Religious', 'Berita duka': 'Condolences', 'Kesehatan': 'Health', 'Rapat': 'Meeting', 'Penting': 'Important',
  // sumbangan
  'Sumbangan warga': 'Resident donations', 'Program penggalangan dana di lingkungan kita, lengkap dengan perkembangan dan penyalurannya.': 'Fundraising programs in our neighborhood, with progress and distribution.', 'Sedang berjalan': 'Ongoing', 'Tanpa batas waktu': 'No deadline',
  'Sumbangan Anda diterima': 'Your donation was received', 'Kirim sumbangan lagi': 'Donate again', 'Cara menyumbang': 'How to donate', 'Lanjut menyumbang': 'Continue to donate',
  'Tekan "Lanjut menyumbang", lalu isi jumlah dan cara menyumbang agar bendahara bisa memverifikasi.': 'Press "Continue to donate", then fill in the amount and payment method so the treasurer can verify it.', 'Terima kasih! Konfirmasi terkirim ke bendahara.': 'Thank you! Your confirmation was sent to the treasurer.',
  'Menunggu verifikasi': 'Awaiting verification', 'Diterima': 'Received', 'Ditolak': 'Rejected',
  // kebersihan
  'Kebersihan lingkungan': 'Neighborhood cleanliness', 'Jadwal angkut sampah, kerja bakti & fogging, pengecekan harian petugas, dan laporan kebersihan dari warga.': 'Waste collection schedule, clean-ups & fogging, daily staff checks, and cleanliness reports from residents.',
  '+ Lapor masalah kebersihan': '+ Report a cleanliness problem', 'Beranda': 'Overview', 'Jadwal sampah': 'Waste schedule', 'Laporan saya': 'My reports', 'laporan kebersihan sedang diproses': 'cleanliness reports in progress', 'Jadwal angkut minggu ini': 'Collection schedule this week',
  'Sen': 'Mon', 'Sel': 'Tue', 'Rab': 'Wed', 'Kam': 'Thu', 'Jum': 'Fri', 'Sab': 'Sat', 'Min': 'Sun', 'Sampah rumah tangga': 'Household waste', 'Sampah organik': 'Organic waste', 'Sampah anorganik / daur ulang': 'Inorganic / recyclable waste', 'Sampah besar / puing / ranting': 'Bulky waste / rubble / branches',
  'Pengangkut:': 'Collector:', 'Aturan & tips kebersihan': 'Cleanliness rules & tips', 'Pilah sampah organik dan anorganik sebelum dibuang.': 'Separate organic and inorganic waste before throwing it away.',
  'Keluarkan sampah sesuai jadwal angkut, dalam kantong tertutup.': 'Put waste out on collection days, in closed bags.', 'Dilarang membakar sampah di lingkungan perumahan.': 'Burning waste in the housing area is prohibited.',
  'Jangan membuang sampah, minyak, atau puing ke saluran air.': 'Do not dump waste, oil or rubble into drains.', 'Lakukan 3M Plus seminggu sekali: menguras, menutup, mendaur ulang, dan cegah gigitan nyamuk.': 'Do 3M Plus once a week: drain, cover, recycle, and prevent mosquito bites.',
  'Sampah besar (kasur, puing, ranting) dikumpulkan saat jadwal angkut sampah besar.': 'Bulky waste (mattresses, rubble, branches) is collected on bulky-waste days.', 'Lapor sampah menumpuk / saluran mampet': 'Report piled-up waste / blocked drains', 'Bagian kebersihan': 'Cleanliness section',
  // kerohanian
  'Agenda': 'Agenda', 'Kabar duka': 'Condolences', 'Qurban': 'Qurban', 'Imsak': 'Imsak', 'Subuh': 'Fajr', 'Terbit': 'Sunrise', 'Dzuhur': 'Dhuhr', 'Ashar': 'Asr', 'Maghrib': 'Maghrib', 'Isya': 'Isha', 'Berikutnya:': 'Next:', 'Bagikan': 'Share', 'Bagian kerohanian': 'Religious section', 'Jadwal sholat hari ini': "Today's prayer times",
  'Pengajian rutin': 'Regular religious study', 'Kajian': 'Religious study', 'Ibadah': 'Worship', 'Santunan': 'Charity',
  // lapak
  '+ Jual sesuatu': '+ Sell something', 'Jual sesuatu': 'Sell something', 'Terbaru': 'Newest', 'Harga terendah': 'Lowest price', 'Harga tertinggi': 'Highest price', 'Semua': 'All',
  '🍱 Makanan & minuman': '🍱 Food & drinks', '🧁 Kue & camilan': '🧁 Cakes & snacks', '🧺 Kebutuhan rumah': '🧺 Household needs', '👕 Fashion': '👕 Fashion', '📱 Elektronik & gadget': '📱 Electronics & gadgets', '♻️ Barang bekas (preloved)': '♻️ Preloved items', '🛠️ Jasa': '🛠️ Services', '📚 Les & kursus': '📚 Tutoring & courses', '🏠 Sewa / properti': '🏠 Rent / property', '🪴 Tanaman & hewan': '🪴 Plants & pets', '🛍️ Lainnya': '🛍️ Others',
  'Lapak tampil 60 hari dan bisa diperpanjang penjual. Pengurus RT tidak ikut dalam transaksi; periksa barang sebelum membayar.': 'Listings stay up for 60 days and can be extended by the seller. The RT committee is not part of any transaction; check items before paying.',
  'Tampilan lapak': 'Market view', 'Cari produk, jasa, atau nomor rumah…': 'Search products, services or house number…', 'Cari di lapak': 'Search the market', 'Urutkan': 'Sort', 'Foto produk': 'Product photos', '(maks. 5)': '(max. 5)', 'Foto pertama jadi sampul. Otomatis diperkecil agar hemat kuota.': 'The first photo is the cover. Photos are resized automatically to save data.',
  'Nama produk / jasa': 'Product / service name', 'Kondisi': 'Condition', 'Bekas': 'Used', 'Jenis harga': 'Price type', 'Harga pas': 'Fixed price', 'Bisa nego': 'Negotiable', 'Mulai dari': 'Starting from', 'Gratis': 'Free', 'Harga (Rp)': 'Price (Rp)', 'Satuan': 'Unit', '(opsional)': '(optional)', 'Deskripsi': 'Description', 'Ambil di rumah': 'Pick up at home', 'Pasang lapak': 'Post listing',
  'Hubungi penjual': 'Contact seller', 'Favorit': 'Favorites',
  // form rumah
  'Ubah data rumah saya': 'Edit my house details', 'Nomor rumah, status huni dan wajib iuran hanya bisa diubah pengurus RT.': 'House number, residency status and dues can only be changed by the RT committee.', 'Nama kepala keluarga': 'Head of household name',
  '— Pilih agama —': '— Choose religion —', 'Kristen': 'Christian', 'Katolik': 'Catholic', 'Hindu': 'Hindu', 'Buddha': 'Buddhist', 'Konghucu': 'Confucian', 'Kepercayaan terhadap Tuhan YME': 'Traditional belief', 'Islam': 'Islam', 'Dipakai di surat pengantar': 'Used in cover letters',
  'Anggota keluarga': 'Family members', '+ Tambah anggota': '+ Add member', 'Belum ada anggota keluarga selain kepala keluarga.': 'No family members other than the head of household yet.', 'Hapus': 'Delete', 'Sama dengan kepala keluarga': 'Same as head of household', 'Simpan perubahan': 'Save changes', 'Simpan': 'Save',
  'Data rumah Anda tersimpan. Pengurus RT bisa melihat perubahannya.': 'Your house details were saved. The RT committee can see the changes.',
  // keamanan akun & idle
  'Dipakai saat masuk dengan No. HP.': 'Used when signing in with your phone number.', 'Ganti password': 'Change password', 'Sidik jari / wajah': 'Fingerprint / face', 'Perangkat / browser ini tidak mendukung.': 'This device / browser is not supported.', 'PIN aplikasi': 'App PIN',
  '4–6 angka untuk membuka aplikasi, cadangan bila sidik jari gagal.': '4–6 digits to unlock the app, a backup if fingerprint fails.', 'Atur PIN': 'Set PIN', 'Ubah PIN': 'Change PIN', 'Aktifkan': 'Enable', 'Matikan': 'Turn off', 'terkunci otomatis': 'locks automatically',
  'Anda akan keluar otomatis': 'You will be signed out automatically', 'detik.': 'seconds.', 'Keluar sekarang': 'Sign out now', 'Tetap masuk': 'Stay signed in', 'Teks disalin. Tempel di WhatsApp atau aplikasi lain.': 'Text copied. Paste it in WhatsApp or another app.',
  'Password lama': 'Current password', 'Password baru': 'New password', 'Ulangi password baru': 'Repeat new password', 'Password berhasil diganti.': 'Password changed successfully.',
  'Masukkan PIN': 'Enter PIN', 'Aplikasi terkunci': 'App locked', 'Buka dengan sidik jari': 'Unlock with fingerprint', 'Masuk dengan No. HP & password': 'Sign in with phone & password',
  'Hari ini batas pembayaran.': 'Today is the payment deadline.',
  // sapaan tema login
  'Selamat Tahun Baru! Semoga lingkungan kita makin rukun.': 'Happy New Year! May our neighborhood grow ever closer.',
  'Musim hujan — yuk cek saluran air di depan rumah.': 'Rainy season — please check the drain in front of your house.',
  'Hari Air Sedunia (22 Maret) — hemat air, jaga sumbernya.': 'World Water Day (March 22) — save water, protect its sources.',
  'Selamat Hari Kartini (21 April) — perempuan hebat, keluarga kuat.': 'Happy Kartini Day (April 21) — strong women, strong families.',
  'Hari Kebangkitan Nasional (20 Mei) — bangkit dan maju bersama.': 'National Awakening Day (May 20) — rise and move forward together.',
  'Hari Lingkungan Hidup (5 Juni) — jaga kebersihan kluster kita.': 'World Environment Day (June 5) — keep our cluster clean.',
  'Hari Anak Nasional (23 Juli) — lingkungan aman untuk anak bermain.': 'National Children\'s Day (July 23) — a safe place for kids to play.',
  'Musim kemarau — hemat air dan waspada kebakaran.': 'Dry season — save water and watch out for fires.',
  'Hari Batik (2 Okt) & Sumpah Pemuda (28 Okt) — bersatu dalam keberagaman.': 'Batik Day (Oct 2) & Youth Pledge Day (Oct 28) — united in diversity.',
  'Hari Pahlawan (10 November) — mengenang jasa para pahlawan.': 'Heroes\' Day (November 10) — honoring our national heroes.',
  'Hari Ibu (22 Desember) — terima kasih para ibu. Sampai jumpa di tahun baru!': 'Mother\'s Day (December 22) — thank you, mothers. See you in the new year!',
  'Marhaban ya Ramadan — selamat menunaikan ibadah puasa.': 'Marhaban ya Ramadan — wishing you a blessed fast.',
  'Selamat Hari Raya Idul Fitri — mohon maaf lahir dan batin.': 'Happy Eid al-Fitr — please forgive us for any wrongdoing.',
  'Selamat Hari Raya Idul Adha.': 'Happy Eid al-Adha.', 'Selamat Natal bagi warga yang merayakan — damai di lingkungan kita.': 'Merry Christmas to all who celebrate — peace in our neighborhood.',
  'Tahun Baru': 'New Year', 'Musim hujan': 'Rainy season', 'Hari Air Sedunia': 'World Water Day', 'Hari Kartini': 'Kartini Day', 'Hari Kebangkitan Nasional': 'National Awakening Day', 'Hari Lingkungan Hidup': 'World Environment Day', 'Hari Anak Nasional': 'National Children\'s Day',
  'HUT Republik Indonesia': 'Indonesian Independence Day', 'Senja kemarau': 'Dry-season sunset', 'Hari Batik & Sumpah Pemuda': 'Batik Day & Youth Pledge', 'Hari Pahlawan': 'Heroes\' Day', 'Akhir tahun & Hari Ibu': 'Year end & Mother\'s Day', 'Ramadan': 'Ramadan', 'Idul Fitri': 'Eid al-Fitr', 'Idul Adha': 'Eid al-Adha', 'Natal': 'Christmas',
  'Data warga, iuran, kas, keluhan dan surat': 'Residents, dues, funds, complaints and letters', 'Hanya lihat': 'View only',
};
const I18N_RE = [
  [/^Iuran (\S+ \d{4})$/, m => 'Dues ' + tglEN(m[1])],
  [/^(\d+) bulan$/, m => m[1] + (m[1] === '1' ? ' month' : ' months')], [/^(\d+) orang$/, m => m[1] + ' people'], [/^(\d+) tahun$/, m => m[1] + ' years'], [/^(\d+) th$/, m => m[1] + ' y'], [/^(\d+) info$/, m => m[1] + ' items'],
  [/^(\d+) di pos$/, m => m[1] + ' at the post'], [/^(\d+) terakhir$/, m => 'last ' + m[1]], [/^(\d+) hari lalu$/, m => m[1] + ' days ago'], [/^(\d+) kegiatan$/, m => m[1] + ' activities'],
  [/^Rp ([\d.]+) per bulan( · jatuh tempo tgl (\d+))?$/, m => `Rp ${m[1]} per month${m[2] ? ' · due on day ' + m[3] : ''}`],
  [/^(.+) bulan belum dibayar$/, m => m[1] + ' months unpaid'], [/^tahun (\d{4})$/, m => 'year ' + m[1]],
  [/^Warga · (.+)$/, m => 'Resident · ' + m[1]], [/^Selamat datang, (.+)\.$/, m => `Welcome, ${m[1]}.`],
  [/^Diumumkan (.+)$/, m => 'Posted ' + tglEN(m[1])], [/^Tanggapan pengurus · (.+)$/, m => 'Committee response · ' + tglEN(m[1])], [/^Tanggapan pengurus$/, () => 'Committee response'], [/^Lokasi: (.+)$/, m => 'Location: ' + m[1]],
  [/^· dilaporkan (.+)$/, m => '· reported ' + tglEN(m[1])], [/^Sedang ditindaklanjuti pengurus sejak (.+)$/, m => 'Being handled by the committee since ' + tglEN(m[1])],
  [/^Diterima satpam (.+)$/, m => 'Received by security ' + tglEN(m[1])], [/^Semua (\d+)$/, m => 'All ' + m[1]], [/^Acara mendatang (\d+)$/, m => 'Upcoming events ' + m[1]], [/^Favorit (\d+)$/, m => 'Favorites ' + m[1]], [/^Lapak saya (\d+)$/, m => 'My listings ' + m[1]],
  [/^Daftar penyumbang \((\d+)\)$/, m => `Donors (${m[1]})`], [/^(\d+) penyumbang dari target (.+)$/, m => `${m[1]} donors of a ${m[2]} target`], [/^Saran (Rp [\d.]+) per rumah$/, m => `Suggested ${m[1]} per house`], [/^(\d+) penyumbang$/, m => m[1] + ' donors'],
  [/^(Rp [\d.]+) · (.+)$/, m => m[1] + ' · ' + tglEN(m[2])], [/^Agenda (\d+) hari ke depan$/, m => `Agenda for the next ${m[1]} days`], [/^Jadwal sholat (.+) · metode Kemenag RI$/, m => `Prayer times ${m[1]} · Ministry of Religious Affairs method`],
  [/^(Subuh|Dzuhur|Ashar|Maghrib|Isya|Imsak)( besok)? (\d\d:\d\d) · (.+)$/, m => `${I18N[m[1]]}${m[2] ? ' tomorrow' : ''} ${m[3]} · ${tglEN(m[4])}`], [/^↻ Setiap (\S+)$/, m => '↻ Every ' + (HARI_ID[m[1]] || m[1])],
  [/^Telepon (.+)$/, m => 'Call ' + m[1]], [/^Chat (.+) di WhatsApp$/, m => `Chat with ${m[1]} on WhatsApp`], [/^Lihat NIK (.+)$/, m => `Show NIK of ${m[1]}`], [/^Kwitansi (.+)$/, m => 'Receipt ' + tglEN(m[1])], [/^Info warga \((\d+) baru\)$/, m => `Resident info (${m[1]} new)`],
  [/^Petugas di bawah (.+)$/, m => 'Staff under ' + m[1]], [/^Periode (.+)$/, m => 'Term ' + tglEN(m[1])], [/^Tema (.+)$/, m => 'Theme ' + (I18N[m[1]] || m[1])],
  [/^Dirgahayu Republik Indonesia ke-(\d+) — 17 Agustus\.$/, m => `Happy ${m[1]}th Independence Day of the Republic of Indonesia — August 17.`],
  [/^(Sampah rumah tangga|Sampah organik|Sampah anorganik \/ daur ulang|Sampah besar \/ puing \/ ranting) · (\d\d:\d\d)$/, m => `${I18N[m[1]]} · ${m[2]}`],
  [/^Susunan pengurus dan petugas lingkungan (.+)\. Hubungi pengurus langsung lewat WhatsApp\.$/, m => `Committee and staff of ${m[1]}. Contact them directly on WhatsApp.`],
  [/^(\d+) pengurus aktif\..*$/, m => `${m[1]} active committee members. The structure follows the positions set by the committee.`],
  [/^Jadwal ibadah, agenda kegiatan keagamaan, kabar duka, dan qurban warga (.+)\.$/, m => `Worship schedule, religious events, condolences and qurban for ${m[1]} residents.`],
  [/^Belanja dan tawarkan produk atau jasa antar tetangga (.+)\. Transaksi langsung dengan penjual lewat WhatsApp\.$/, m => `Buy and offer products or services between neighbors in ${m[1]}. Deal directly with sellers on WhatsApp.`],
  [/^Lokasi TPS \/ bak sampah: (.+)$/, m => 'Waste collection point: ' + m[1]], [/^mis\. Depan (.+)$/, m => 'e.g. In front of ' + m[1]], [/^(\d+) tahun$/, m => m[1] + ' years'],
  [/^Coba lagi dalam (\d+:\d\d)$/, m => 'Try again in ' + m[1]], [/^Terlalu banyak percobaan masuk yang gagal\. Demi keamanan, coba lagi dalam (\d+:\d\d)\.$/, m => `Too many failed sign-in attempts. For security, try again in ${m[1]}.`],
  [/^Password salah (\d+) kali\. Demi keamanan, login dikunci sementara (\d+) menit\.$/, m => `Wrong password ${m[1]} times. For security, sign-in is locked for ${m[2]} minute${m[2] === '1' ? '' : 's'}.`],
  [/^(No\. HP|Email) atau password salah\. Sisa (\d) percobaan sebelum dikunci sementara (\d+) menit\.$/, m => `Incorrect ${m[1] === 'Email' ? 'email' : 'phone number'} or password. ${m[2]} attempt${m[2] === '1' ? '' : 's'} left before a ${m[3]}-minute lock.`],
  [/^Akun ini sedang dipakai di perangkat lain( \((.+)\))?\. Keluar dulu dari perangkat itu, lalu coba lagi\. HP hilang\? Hubungi Pemilik aplikasi\.$/, m => `This account is in use on another device${m[1] ? ' (' + m[2] + ')' : ''}. Sign out on that device first, then try again. Lost your phone? Contact the app owner.`],
  [/^Tidak ada aktivitas selama 14 menit\. Demi keamanan, aplikasi akan keluar dalam$/, () => 'No activity for 14 minutes. For security, the app will sign out in'],
  [/^Iuran (.+) jatuh tempo (.+)$/, m => `Dues for ${tglEN(m[1])} are due ${tglEN(m[2])}`], [/^Iuran (.+) sudah lunas$/, m => `Dues for ${tglEN(m[1])} are paid`],
  [/^Iuran berikutnya \((.+)\) jatuh tempo (.+)\. Jatuh tempo pembayaran setiap tanggal (\d+)\.$/, () => null],
  [/^Belum terbayar: (.+)\.(.*)$/, m => `Unpaid: ${tglEN(m[1])}.${m[2] ? ' Please contact the RT treasurer to pay.' : ''}`],
  [/^(\d+) hari lagi\. Besarnya (Rp [\d.]+)\. Jatuh tempo pembayaran setiap tanggal (\d+)\.$/, m => `${m[1]} days left. Amount ${m[2]}. Payment is due on day ${m[3]} each month.`],
  [/^Hari ini batas pembayaran\. Besarnya (Rp [\d.]+)\. Jatuh tempo pembayaran setiap tanggal (\d+)\.$/, m => `Today is the payment deadline. Amount ${m[1]}. Payment is due on day ${m[2]} each month.`],
  [/^Sudah lewat (\d+) hari dan tercatat sebagai tunggakan\. Besarnya (Rp [\d.]+)\. Jatuh tempo pembayaran setiap tanggal (\d+)\.$/, m => `${m[1]} days overdue and recorded as arrears. Amount ${m[2]}. Payment is due on day ${m[3]} each month.`],
  [/^Koordinator (.+)$/, m => /^(Keamanan|Kebersihan|Kerohanian)$/.test(m[1]) ? null : 'Coordinator ' + m[1]], [/^Wakil: (.+)$/, m => 'Deputy: ' + m[1]],
  [/^Foto siap \((\d+) KB\)\. (.+)$/, m => `Photo ready (${m[1]} KB). ${/lagi/.test(m[2]) ? 'You can add 1 more photo.' : 'That is 2 photos (maximum).'}`],
];
I18N_RE.push([/^Iuran berikutnya \((.+)\) jatuh tempo (.+)\. Jatuh tempo pembayaran setiap tanggal (\d+)\.$/, m => `Next dues (${tglEN(m[1])}) are due ${tglEN(m[2])}. Payment is due on day ${m[3]} each month.`]);
const RE_TGL_SAJA = new RegExp(`^[📅🕒\\s]*((Senin|Selasa|Rabu|Kamis|Jumat|Sabtu|Minggu),\\s)?\\d{1,2}\\s(${RE_BLN})\\s\\d{4}`);
const RE_BLNTHN = new RegExp(`^(${RE_BLN})( \\d{4})?$`);
function terjemahStr(t) {
  const k = t.replace(/\s+/g, ' ').trim(); if (!k) return null;
  if (Object.prototype.hasOwnProperty.call(I18N, k)) return t.replace(k, I18N[k]);
  for (const [re, fn] of I18N_RE) { const m = k.match(re); if (m) { const r = fn(m); if (r) return t.replace(k, r); } }
  if (RE_TGL_SAJA.test(k) || RE_BLNTHN.test(k) || /^\d{1,2} (\S+) \d{4}( · .+)?$/.test(k)) { const r = tglEN(k); if (r !== k) return t.replace(k, r); }
  return null;
}
const I18N_LEWAT = 'script,style,textarea,input,[contenteditable],.kw,.surat,.rt,[data-noi18n],.kel-foto,.house,.mono';
function terjemahNode(root) {
  if (!bhsAktif() || !root) return;
  if (root.nodeType === 3) { root = root.parentNode; if (!root) return; }
  if (root.nodeType !== 1 || (root.closest && root.closest(I18N_LEWAT))) return;
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode: n => n.parentElement && n.parentElement.closest(I18N_LEWAT) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT});
  const ns = []; while (w.nextNode()) ns.push(w.currentNode);
  for (const n of ns) {
    const r = terjemahStr(n.nodeValue); if (r == null || r === n.nodeValue) continue;
    const op = n.parentElement; if (op && op.tagName === 'OPTION' && !op.hasAttribute('value')) op.setAttribute('value', op.textContent.trim());
    n.nodeValue = r;
  }
  const el = [root, ...root.querySelectorAll('[placeholder],[title],[aria-label]')];
  for (const e of el) { if (!e.getAttribute || (e.closest && e.closest('[data-noi18n],.kw,.surat'))) continue;
    for (const a of ['placeholder', 'title', 'aria-label']) { const v = e.getAttribute(a); if (!v) continue; const r = terjemahStr(v); if (r != null && r !== v) e.setAttribute(a, r); } }
}
const I18N_OBS = new MutationObserver(ms => { if (!bhsAktif()) return; for (const m of ms) for (const n of m.addedNodes) terjemahNode(n); });
I18N_OBS.observe(document.body, {childList: true, subtree: true});

const MATA_BUKA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const MATA_TUTUP = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 5.1A10.9 10.9 0 0 1 12 5c6.4 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.2M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a10.6 10.6 0 0 0 5.4-1.4"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';
function authArt() {
  const rumah = [[118, 262, 1], [168, 268, .85], [212, 258, 1.1], [268, 266, .9], [318, 260, 1]].map(([x, y, k]) => {
    const w = 34 * k, h = 24 * k, r = 18 * k;
    return `<g transform="translate(${x} ${y})"><polygon points="${-4 * k},0 ${w / 2},${-r} ${w + 4 * k},0" fill="#FFFFFF" opacity=".95"/><rect x="0" y="0" width="${w}" height="${h}" fill="#F6FBF7"/>
      <rect x="${w * .18}" y="${h * .3}" width="${w * .22}" height="${h * .3}" fill="#F5C842"/><rect x="${w * .58}" y="${h * .38}" width="${w * .22}" height="${h * .62}" fill="#1F7A4D" opacity=".75"/></g>`;
  }).join('');
  const pohon = [[92, 284, 14], [372, 282, 16], [420, 292, 11], [250, 294, 10]].map(([x, y, r]) => `<rect x="${x - 1.5}" y="${y - 2}" width="3" height="${r}" fill="#0F3F27"/><circle cx="${x}" cy="${y - r * .55}" r="${r}" fill="#3FA06A"/><circle cx="${x + r * .45}" cy="${y - r * .9}" r="${r * .6}" fill="#58B47F"/>`).join('');
  const t = temaLoginKini(), sapa = typeof t.sapa === 'function' ? t.sapa() : t.sapa;
  const mob = t.benda === 'matahari' ? `--m-bg:${t.mWarna || '#F5C842'};--m-sh:0 0 0 10px rgb(245 200 66 / .18),0 0 0 22px rgb(245 200 66 / .08)` : t.benda === 'bulan' ? '--m-bg:#F4F1DE;--m-sh:0 0 0 10px rgb(244 241 222 / .12)' : t.benda === 'sabit' ? '--m-bg:transparent;--m-sh:inset -11px 4px 0 0 #F3D98B' : '--m-bg:transparent;--m-sh:none';
  return `<aside class="auth-art" data-tema="${esc(t.kode)}" style="--art-bg:radial-gradient(700px 400px at 85% 15%,${t.glow},transparent 60%),linear-gradient(160deg,${t.langit[0]} 0%,${t.langit[1]} 60%,${t.langit[2]} 100%);${mob}" aria-hidden="false">
    <div class="auth-brand"><img src="${LOGO}" alt="Logo Vila Nusa Indah 5"><div><b>Warga Kasuari</b><span class="ab-sub"><span class="nw">Vila Nusa Indah 5</span><span class="ab-dot"> · </span><span class="nw">Kluster Kasuari</span></span></div></div>
    <div class="auth-copy"><h1>Lingkungan yang tertata,<br>warga yang terhubung.</h1>
      <ul><li>Iuran dan kas RT yang transparan</li><li>Keamanan dan pos jaga terpantau</li><li>Layanan warga dalam satu aplikasi</li></ul>
      ${sapa ? `<p class="tema-sapa" title="Tema ${esc(t.nama)}">${esc(sapa)}</p>` : ''}</div>
    <svg class="scene" viewBox="0 0 600 400" preserveAspectRatio="xMidYMax slice" role="img" aria-label="Ilustrasi perumahan">
      <g class="benda-langit">${bendaLangit(t)}</g><g class="tema-hias" transform="translate(0 18)">${t.hias ? t.hias() : ''}</g>
      <path d="M0 290 C110 240 220 262 330 276 C440 290 520 238 600 248 V400 H0Z" fill="#2E8F5B"/>
      ${rumah}${pohon}
      <path d="M0 322 C150 288 270 318 380 328 C480 338 540 310 600 318 V400 H0Z" fill="#17603C"/>
      <path d="M0 360 C160 334 300 356 420 362 C510 366 560 350 600 354 V400 H0Z" fill="#0F4A2C"/>
    </svg>
  </aside>`;
}
const benderaId = () => `<span class="bendera-id" role="img" aria-label="Bendera Indonesia" title="Indonesia"><svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="10" fill="#E70011"/><rect y="10" width="30" height="10" fill="#FFFFFF"/><rect x=".5" y=".5" width="29" height="19" rx="2" fill="none" stroke="rgba(0,0,0,.18)"/></svg></span>`;
function vLogin() { return `<div class="auth">${!S.authUser && !S.pulih ? `<div class="auth-top">${bhsTombol()}${papanBell()}</div>` : ''}${authArt()}<div class="auth-main">${S.mfaPerlu ? vMfaKartu() : vLoginKartu()}</div></div>`; }
function vLoginKartu() {
  const brand = sub => `<div class="login-head"><img class="logo-login" src="${LOGO}" alt="Logo Vila Nusa Indah 5"><h2>Selamat datang</h2>
    <p class="muted" style="margin:4px 0 0">${sub}</p></div>`;
  if (S.sbGagal) return `<div class="login">${brand('Aplikasi warga Kluster Kasuari')}<div class="notice">Tidak bisa memuat koneksi ke server. Periksa internet Anda, lalu muat ulang halaman.</div></div>`;
  if (S.pulih) return `<div class="login">${brand('Buat password baru untuk akun Anda.')}
    <form id="pulihForm" class="login-pin" style="border-top:0;padding-top:0">
      <div class="fld"><label for="pBaru">Password baru</label><div style="display:flex;gap:6px"><input type="password" id="pBaru" autocomplete="new-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem"><button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="pBaru" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div></div>
      <div class="fld"><label for="pUlang">Ulangi password baru</label><div style="display:flex;gap:6px"><input type="password" id="pUlang" autocomplete="new-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem"><button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="pUlang" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div>
        <span class="hint" id="pPesan" style="color:var(--bad)"></span></div>
      <button type="submit" class="btn pri">Simpan password</button>
      <button type="button" class="btn ghost" data-act="pulih-batal">Batal</button></form></div>`;
  if (S.lupa) return `<div class="login">${brand('Kami kirim tautan untuk membuat password baru ke email Anda.')}
    ${S.lupaTerkirim ? `<div class="notice" style="background:var(--ok-soft);color:var(--ok)">Email reset dikirim ke <b>${esc(S.lupaTerkirim)}</b> (cek juga folder spam). Klik tautan di email <b>paling baru</b>, atau ketik kode dari email di bawah ini.</div>
      <form id="kodeForm" class="login-pin" style="border-top:0;padding-top:0">
        <div class="fld"><label for="kKode">Kode dari email</label><input type="text" id="kKode" inputmode="numeric" autocomplete="one-time-code" maxlength="10" placeholder="6 angka" style="letter-spacing:.2em;text-align:center;font-size:1.1rem"></div>
        <div class="fld"><label for="kBaru">Password baru</label><div style="display:flex;gap:6px"><input type="password" id="kBaru" autocomplete="new-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem"><button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="kBaru" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div></div>
        <div class="fld"><label for="kUlang">Ulangi password baru</label><div style="display:flex;gap:6px"><input type="password" id="kUlang" autocomplete="new-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem"><button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="kUlang" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div>
          <span class="hint" id="kPesan" style="color:var(--bad)"></span></div>
        ${tsSlot()}<button type="submit" class="btn pri">Simpan password baru</button>
        <button type="button" class="btn ghost" data-act="lupa-tutup">Kembali ke login</button>
        <p class="muted" style="margin:0;font-size:.82rem">Setiap kali meminta reset, tautan dan kode sebelumnya tidak berlaku lagi. Selalu pakai email yang terakhir masuk.</p></form>`
    : `${S.lupaInfo ? `<div class="notice">${esc(S.lupaInfo)}</div>` : ''}<form id="lupaForm" class="login-pin" style="border-top:0;padding-top:0">
      <div class="fld"><label for="lupaEmail">Email akun</label><input type="email" id="lupaEmail" autocomplete="username" autocapitalize="none" value="${esc(S.lEmailDraft || '')}">
        <span class="hint" id="lupaPesan" style="color:var(--bad)"></span></div>
      ${tsSlot()}<button type="submit" class="btn pri">Kirim tautan reset</button>
      <button type="button" class="btn ghost" data-act="lupa-tutup">Kembali ke login</button>
      <p class="muted" style="margin:0;font-size:.82rem">Hanya untuk akun yang masuk dengan email. Akun No. HP minta direset ke Pemilik atau pengurus RT.</p></form>`}</div>`;
  if (S.authUser && wajibGanti() && roleSaya()) return `<div class="login">${brand('Halo ' + esc(namaSesi().split(' ')[0]) + ', demi keamanan buat password baru dulu.')}
    <div class="notice" style="background:var(--info-soft);color:var(--info)">Password Anda dibuat atau direset oleh Pemilik. Ganti dengan password pribadi sebelum memakai aplikasi.</div>
    <form id="wajibForm" class="login-pin" style="border-top:0;padding-top:0">
      <div class="fld"><label for="wgLama">Password saat ini</label><div style="display:flex;gap:6px"><input type="password" id="wgLama" name="lama" autocomplete="current-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem"><button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="wgLama" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div></div>
        <div class="fld"><label for="wgBaru">Password baru</label><div style="display:flex;gap:6px"><input type="password" id="wgBaru" name="baru" autocomplete="new-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem"><button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="wgBaru" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div><span class="hint">Minimal 8 karakter. Gunakan campuran huruf dan angka.</span></div>
        <div class="fld"><label for="wgUlang">Ulangi password baru</label><div style="display:flex;gap:6px"><input type="password" id="wgUlang" name="ulang" autocomplete="new-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem"><button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="wgUlang" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div></div>
      <span class="hint" id="wgPesan" style="color:var(--bad)"></span>
      <button type="submit" class="btn pri">Simpan password baru</button>
      <button type="button" class="btn ghost" data-act="keluar">Keluar</button></form></div>`;
  if (S.authUser) {
    const em = S.authUser.email || '', wargaAkun = em.endsWith('@' + WARGA_DOMAIN);
    const why = !S.profil ? 'Akun ini belum diberi akses ke aplikasi. Hubungi Pemilik atau pengurus RT.'
      : S.profil.peran === 'pengurus' ? 'Data pengurus untuk akun ini sudah dinonaktifkan atau dihapus. Hubungi Pemilik aplikasi.'
      : S.profil.peran === 'warga' ? 'Data rumah untuk akun ini tidak ditemukan. Hubungi pengurus RT.' : 'Akun ini belum bisa masuk.';
    return `<div class="login">${brand('Masuk sebagai ' + esc(hpDariEmail(em) || (wargaAkun ? em.split('@')[0] : em)))}<div class="notice">${esc(S.loginError || why)}</div>
      <button class="btn pri" data-act="keluar">Keluar & ganti akun</button></div>`;
  }
  if (S.lupaInfoHp) return `<div class="login">${brand('Lupa password?')}
    <div class="notice" style="background:var(--info-soft);color:var(--info)">Hubungi <b>Pemilik aplikasi</b> atau <b>pengurus RT</b>. Password Anda akan direset dari menu Admin, lalu password sementara dikirim lewat WhatsApp ke No. HP Anda.</div>
    <button type="button" class="btn pri" data-act="lupa-hp-tutup">Kembali ke login</button>
    <button type="button" class="linkbtn" data-act="lupa-pass">Akun dengan email? Reset lewat email</button></div>`;
  return `<div class="login">${brand('Masuk dengan No. HP dan password.')}
    <form id="loginForm" class="login-pin" style="border-top:0;padding-top:0">
      <div class="fld"><label for="lEmail">No. HP</label><input type="text" id="lEmail" inputmode="tel" autocomplete="username" autocapitalize="none" placeholder="08xxxxxxxxxx" value="${esc(S.lEmailDraft || '')}"></div>
      <div class="fld"><label for="lPass">Password</label><div style="display:flex;gap:6px"><input type="password" id="lPass" autocomplete="current-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem">
        <button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="lPass" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div>
        <span class="hint" id="lPesan" style="color:var(--bad)">${esc(S.loginPesan || '')}</span></div>
      ${tsSlot()}${lgSisa() > 0 ? `<button type="submit" class="btn pri" data-lg="1" disabled>Coba lagi dalam ${lgFmt(lgSisa())}</button>` : '<button type="submit" class="btn pri">Masuk</button>'}
      <button type="button" class="linkbtn" data-act="lupa-hp">Lupa password?</button></form>
    ${!PWA.standalone && (PWA.prompt || PWA.ios) ? '<button type="button" class="btn ghost" data-act="pwa-pasang" style="width:100%;margin-top:4px">📲 Pasang aplikasi di HP</button>' : ''}</div>`;
}
async function muatInfoPublik() {
  if (!SB) return;
  try { const {data, error} = await SB.rpc('info_publik'); if (!error && data) { S.infoPub = data; if (!sudahMasuk()) render(); } } catch (e) {}
}
setInterval(() => { if (SB && !S.authUser && document.visibilityState === 'visible') muatInfoPublik(); }, 5 * 60 * 1000);
const papanAktif = d => (d.pengumuman || []).filter(a => !a.tanggalAcara || a.tanggalAcara >= todayISO());
const papanKunci = d => [...papanAktif(d).map(a => 'p:' + a.judul + '|' + a.dibuat + '|' + (a.tanggalAcara || '')), ...(d.keluhan || []).map(k => 'k:' + k.judul + '|' + k.dibuat + '|' + k.status)];
function papanSudahLihat() { try { return new Set(JSON.parse(localStorage.getItem('papan-dilihat') || '[]')); } catch (e) { return new Set(); } }
function papanBell() {
  const d = S.infoPub; if (!d || d.aktif === false) return '';
  const semua = papanKunci(d); if (!semua.length && !(d.ringkas && d.ringkas.selesaiBulanIni)) return '';
  const lihat = papanSudahLihat(), baru = semua.filter(k => !lihat.has(k)).length;
  return `<button type="button" class="papan-bell${baru ? ' ada' : ''}" data-act="papan-buka" aria-label="Info warga${baru ? ` (${baru} baru)` : ''}">${ico('bell')}<span class="lb">Info warga</span>${baru ? `<span class="bd">${baru > 9 ? '9+' : baru}</span>` : ''}</button>`;
}
function bukaPapan() {
  const d = S.infoPub; if (!d) return;
  openDlg({title: 'Info warga', body: papanInfo()});
  try { localStorage.setItem('papan-dilihat', JSON.stringify(papanKunci(d).slice(0, 50))); } catch (e) {}
  const b = document.querySelector('.papan-bell'); if (b) { b.classList.remove('ada'); const bd = b.querySelector('.bd'); if (bd) bd.remove(); }
}
function papanInfo() {
  const d = S.infoPub; if (!d || d.aktif === false) return '';
  const P = papanAktif(d), K = d.keluhan || [], R = d.ringkas || {};
  if (!P.length && !K.length && !(R.selesaiBulanIni)) return '';
  const hari = todayISO();
  const acara = a => a.tanggalAcara ? `${a.tanggalAcara === hari ? '<span class="papan-tag">Hari ini</span>' : a.tanggalAcara > hari ? '<span class="papan-tag">Akan datang</span>' : ''} 📅 ${esc(tglPanjang(a.tanggalAcara))}${a.jam ? ' · ' + esc(a.jam) : ''}${a.tempat ? ' · ' + esc(a.tempat) : ''}` : '';
  const pg = P.map(a => `<div class="papan-i"><div class="m">${a.sematkan ? '<span>📌</span>' : ''}<span class="chip mute plain">${esc(a.kategori || 'Info')}</span><span>${esc(tgl(a.dibuat))}</span></div>
      <b>${esc(a.judul)}</b>${a.isi ? `<p>${esc(a.isi)}</p>` : ''}${a.tanggalAcara ? `<div class="m">${acara(a)}</div>` : ''}</div>`).join('');
  const kl = K.map(k => `<div class="papan-i"><div class="m">${chipK(k.status || 'Baru')}<span>${esc(k.kategori || '')}</span><span>· dilaporkan ${esc(tgl(k.dibuat))}</span></div><b>${esc(k.judul)}</b>
      ${k.status === 'Diproses' ? `<div class="m">Sedang ditindaklanjuti pengurus${k.diperbarui && k.diperbarui !== k.dibuat ? ' sejak ' + esc(tgl(k.diperbarui)) : ''}</div>` : '<div class="m">Menunggu ditinjau pengurus</div>'}</div>`).join('');
  return `<section class="papan" aria-label="Info warga">
    ${pg ? `<div class="papan-k"><h3><span>📢 Pengumuman</span><small>${P.length} info</small></h3>${pg}</div>` : ''}
    <div class="papan-k"><h3><span>🛠️ Keluhan warga</span><small>diperbarui otomatis</small></h3>
      <div class="papan-st"><div><b>${R.baru || 0}</b><span>Baru</span></div><div><b>${R.proses || 0}</b><span>Ditindaklanjuti</span></div><div><b>${R.selesaiBulanIni || 0}</b><span>Selesai bulan ini</span></div></div>
      ${kl || '<p class="muted" style="margin:0;font-size:.84rem">Tidak ada keluhan yang sedang menunggu. 👍</p>'}</div>
    <p class="muted" style="margin:0;font-size:.76rem;text-align:center">Masuk untuk melapor keluhan dan melihat detail.</p></section>`;
}
async function prosesLupa() {
  const email = String(($('#lupaEmail') || {}).value || '').trim().toLowerCase();
  const msg = t => { const m = $('#lupaPesan'); if (m) m.textContent = t; };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg('Isi email pengurus yang valid.'); return; }
  if (email.endsWith('@' + WARGA_DOMAIN)) { msg('Akun warga tidak memakai email. Minta pengurus RT mereset password.'); return; }
  const btn = $('#lupaForm button[type=submit]'); if (btn) { btn.disabled = true; btn.textContent = 'Mengirim…'; }
  const cap = tsAmbil(msg); if (cap === false) { if (btn) { btn.disabled = false; btn.textContent = 'Kirim tautan reset'; } return; }
  const {error} = await SB.auth.resetPasswordForEmail(email, {redirectTo: location.origin + location.pathname, ...(cap ? {captchaToken: cap} : {})}); tsReset();
  if (error) { if (btn) { btn.disabled = false; btn.textContent = 'Kirim tautan reset'; } msg(pesanAuth(error)); return; }
  S.lupaTerkirim = email; S.lupaInfo = ''; render(); const k = $('#kKode'); if (k) k.focus();
}
const PESAN_GANTI = {salah: 'Password saat ini salah.', kunci: 'Terlalu banyak percobaan salah. Coba lagi 15 menit lagi.', pendek: 'Password baru minimal 8 karakter.', sama: 'Password baru harus berbeda dari password saat ini.', belum_login: 'Sesi Anda berakhir. Silakan masuk lagi.'};
async function gantiPassword(lama, baru, ulang) {
  if (!lama) return 'Isi password saat ini.';
  if (String(baru).length < 8) return PESAN_GANTI.pendek;
  if (baru !== ulang) return 'Kedua password baru tidak sama.';
  if (baru === lama) return PESAN_GANTI.sama;
  const {data, error} = await SB.rpc('ganti_password_saya', {lama, baru});
  if (error) return pesanAuth(error);
  if (data !== 'ok') return PESAN_GANTI[data] || 'Gagal mengganti password.';
  try { await SB.auth.signOut({scope: 'others'}); } catch (e) {}
  if (S.profil) S.profil.wajib_ganti = false;
  return '';
}
function openGantiPass() {
  openDlg({
    title: 'Ganti password', submitLabel: 'Simpan password',
    body: `<div class="fld"><label for="gpLama">Password saat ini</label><div style="display:flex;gap:6px"><input type="password" id="gpLama" name="lama" autocomplete="current-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem"><button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="gpLama" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div></div>
        <div class="fld"><label for="gpBaru">Password baru</label><div style="display:flex;gap:6px"><input type="password" id="gpBaru" name="baru" autocomplete="new-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem"><button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="gpBaru" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div><span class="hint">Minimal 8 karakter. Gunakan campuran huruf dan angka.</span></div>
        <div class="fld"><label for="gpUlang">Ulangi password baru</label><div style="display:flex;gap:6px"><input type="password" id="gpUlang" name="ulang" autocomplete="new-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem"><button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="gpUlang" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div></div>
      <p class="muted" style="margin:0;font-size:.84rem">Setelah diganti, login Anda di perangkat lain otomatis keluar.</p>`,
    onSubmit: async d => {
      const err = await gantiPassword(d.lama || '', d.baru || '', d.ulang || '');
      if (err) { pesanDlg(err, /saat ini|percobaan/.test(err) ? 'gpLama' : 'gpBaru'); return false; }
      toast('Password berhasil diganti.'); return true;
    }
  });
}
async function prosesWajib() {
  const v = id => ($('#' + id) || {}).value || '';
  const m = $('#wgPesan'), btn = $('#wajibForm button[type=submit]');
  if (btn) { btn.disabled = true; btn.textContent = 'Menyimpan…'; }
  const err = await gantiPassword(v('wgLama'), v('wgBaru'), v('wgUlang'));
  if (err) { if (btn) { btn.disabled = false; btn.textContent = 'Simpan password baru'; } if (m) m.textContent = err; return; }
  render(); window.scrollTo(0, 0); toast('Password baru tersimpan. Selamat datang, ' + namaSesi().split(' ')[0] + '.');
}
async function prosesKode() {
  const kode = String(($('#kKode') || {}).value || '').replace(/\s/g, ''), a = ($('#kBaru') || {}).value || '', b = ($('#kUlang') || {}).value || '';
  const msg = t => { const m = $('#kPesan'); if (m) m.textContent = t; };
  if (!/^\d{6,10}$/.test(kode)) { msg('Masukkan kode angka dari email.'); return; }
  if (a.length < 8) { msg('Password minimal 8 karakter.'); return; }
  if (a !== b) { msg('Kedua password tidak sama.'); return; }
  const btn = $('#kodeForm button[type=submit]'); if (btn) { btn.disabled = true; btn.textContent = 'Memeriksa…'; }
  const cap = tsAmbil(msg); if (cap === false) { if (btn) { btn.disabled = false; btn.textContent = 'Simpan password baru'; } return; }
  const v = await SB.auth.verifyOtp({email: S.lupaTerkirim, token: kode, type: 'recovery', ...(cap ? {options: {captchaToken: cap}} : {})}); tsReset();
  if (v.error) { if (btn) { btn.disabled = false; btn.textContent = 'Simpan password baru'; } msg(/expired|invalid|not found/i.test(v.error.message) ? 'Kode salah atau sudah tidak berlaku. Pakai kode dari email paling baru.' : pesanAuth(v.error)); return; }
  const {data, error} = await SB.auth.updateUser({password: a});
  if (error) { if (btn) { btn.disabled = false; btn.textContent = 'Simpan password baru'; } msg(pesanAuth(error)); return; }
  S.lupa = false; S.lupaTerkirim = ''; S.lupaInfo = '';
  toast('Password baru tersimpan.');
  await masukSesi(data.user);
}
async function prosesPulih() {
  const a = ($('#pBaru') || {}).value || '', b = ($('#pUlang') || {}).value || '';
  const msg = t => { const m = $('#pPesan'); if (m) m.textContent = t; };
  if (a.length < 8) { msg('Password minimal 8 karakter.'); return; }
  if (a !== b) { msg('Kedua password tidak sama.'); return; }
  const btn = $('#pulihForm button[type=submit]'); if (btn) { btn.disabled = true; btn.textContent = 'Menyimpan…'; }
  const {data, error} = await SB.auth.updateUser({password: a});
  if (error) { if (btn) { btn.disabled = false; btn.textContent = 'Simpan password'; } msg(/expired|invalid|session/i.test(error.message) ? 'Tautan reset sudah kedaluwarsa. Minta tautan baru dari layar login.' : pesanAuth(error)); return; }
  S.pulih = false; S.lupa = false; S.lupaTerkirim = '';
  toast('Password baru tersimpan.');
  await masukSesi(data.user);
}
/* ---------- Batas percobaan login (per perangkat) ----------
   5 gagal → tunggu 1 menit, 10 → 5 menit, 15 dst → 15 menit. Hitungan direset saat berhasil masuk
   atau setelah 1 jam tanpa percobaan gagal. Lapisan server: Turnstile + rate limit Supabase Auth. */
const LG_KEY = 'login-gagal', LG_RESET = 3600e3;
let LG_MEM = {n: 0, sampai: 0, t: 0};
function lgBaca() {
  let o = LG_MEM; try { const r = localStorage.getItem(LG_KEY); if (r) o = JSON.parse(r) || o; } catch (e) {}
  o = {n: Number(o.n) || 0, sampai: Number(o.sampai) || 0, t: Number(o.t) || 0};
  return o.t && Date.now() - o.t > LG_RESET && Date.now() > o.sampai ? {n: 0, sampai: 0, t: 0} : o;
}
function lgTulis(o) { LG_MEM = o; try { if (o.n) localStorage.setItem(LG_KEY, JSON.stringify(o)); else localStorage.removeItem(LG_KEY); } catch (e) {} }
const lgDurasi = n => n >= 15 ? 900 : n >= 10 ? 300 : 60;
const lgSisa = () => Math.max(0, lgBaca().sampai - Date.now());
const lgFmt = ms => { const d = Math.ceil(ms / 1000); return Math.floor(d / 60) + ':' + String(d % 60).padStart(2, '0'); };
const lgMenit = n => { const d = lgDurasi(n) / 60; return d + ' menit'; };
function lgCatat() {
  const o = lgBaca(); o.n++; o.t = Date.now();
  if (o.n % 5 === 0) o.sampai = Date.now() + lgDurasi(o.n) * 1000;
  lgTulis(o); return o;
}
const lgBersih = () => lgTulis({n: 0, sampai: 0, t: 0});
const lgPesanKunci = () => `Terlalu banyak percobaan masuk yang gagal. Demi keamanan, coba lagi dalam ${lgFmt(lgSisa())}.`;
function lgDetak() {
  const f = $('#loginForm'); if (!f) return;
  const btn = f.querySelector('button[type=submit]'), sisa = lgSisa();
  if (sisa > 0) {
    if (btn) { btn.disabled = true; btn.textContent = 'Coba lagi dalam ' + lgFmt(sisa); }
    const m = $('#lPesan'); if (m && !m.textContent) m.textContent = lgPesanKunci();
  } else if (btn && btn.disabled && btn.dataset.lg) {
    btn.disabled = false; btn.textContent = 'Masuk'; delete btn.dataset.lg;
    const m = $('#lPesan'); if (m) m.textContent = 'Silakan coba lagi. Pastikan No. HP dan password benar.';
  }
}
setInterval(lgDetak, 1000);

async function prosesLogin() {
  const isian = String(($('#lEmail') || {}).value || '').trim(), pw = ($('#lPass') || {}).value || '';
  const msg = t => { const m = $('#lPesan'); if (m) m.textContent = t; };
  S.loginPesan = '';
  if (lgSisa() > 0) { msg(lgPesanKunci()); lgDetak(); return; }
  if (!isian || !pw) { msg('Isi No. HP dan password.'); return; }
  const pakaiEmail = isian.includes('@');
  if (!pakaiEmail && !hpValid(isian)) { msg('No. HP minimal 10 digit, mis. 081234567890.'); return; }
  const email = pakaiEmail ? isian.toLowerCase() : hpEmail(isian);
  const cap = tsAmbil(msg); if (cap === false) return;
  const btn = $('#loginForm button[type=submit]'); if (btn) { btn.disabled = true; btn.textContent = 'Memeriksa…'; }
  const {data, error} = await SB.auth.signInWithPassword({email, password: pw, ...(cap ? {options: {captchaToken: cap}} : {})}); tsReset();
  if (error) {
    S.lEmailDraft = isian;
    const salah = /invalid login/i.test(error.message), o = salah ? lgCatat() : lgBaca(), sisaCoba = 5 - (o.n % 5);
    render();
    if (salah && lgSisa() > 0) { msg(`Password salah ${o.n} kali. Demi keamanan, login dikunci sementara ${lgMenit(o.n)}.`); lgDetak(); return; }
    msg(salah ? (pakaiEmail ? 'Email atau password salah.' : 'No. HP atau password salah.') + (sisaCoba <= 2 ? ` Sisa ${sisaCoba} percobaan sebelum dikunci sementara ${lgMenit(o.n + sisaCoba)}.` : '') : pesanAuth(error));
    const p = $('#lPass'); if (p) p.focus(); return;
  }
  lgBersih(); S.lEmailDraft = ''; S.loginError = '';
  await masukSesi(data.user);
}

/* --- Akun warga & portal warga --- */
const akunSesi = () => S.sesi && S.sesi.startsWith('w:') && S.profil && (S.profil.peran === 'warga' || S.modeWarga) && S.profil.warga_id ? {id: S.profil.user_id, wargaId: S.profil.warga_id} : null;
const isWarga = () => !!akunSesi();
const wargaSaya = () => { const a = akunSesi(); if (a) return wById(a.wargaId); const p = pengurusSesi(); return p && p.wargaId ? wById(p.wargaId) : null; };
const ROLE_WARGA = {id: 'warga', nama: 'Warga', izin: {...semua('tidak'), info: 'lihat', portal: 'lihat'}};
const normUser = u => String(u || '').trim().toLowerCase();
function sarankanUser(w) { let base = String(w.blok || w.nama || 'warga').toLowerCase().replace(/[^a-z0-9]/g, '') || 'warga', u = base, i = 2; while (S.akunWarga.some(a => a.username === u)) u = base + i++; return u; }
function passAcak() { const c = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let s = ''; const r = new Uint32Array(10); crypto.getRandomValues(r); for (let i = 0; i < 10; i++) s += c[r[i] % c.length]; return s; }
const maskNik = n => n ? '•••• •••• ' + String(n).slice(-4) : '—';
const fmtNik = n => n ? String(n).replace(/(\d{4})(?=\d)/g, '$1 ') : '—';
function vAdminAkun() {
  const list = [...S.akunWarga].sort((a, b) => sortHouse(wById(a.wargaId) || {}, wById(b.wargaId) || {}));
  const tanpa = wargaAktif().filter(w => !S.akunWarga.some(a => a.wargaId === w.id)).length;
  const rows = list.map(a => { const w = wById(a.wargaId); return `<div class="row" style="flex-wrap:wrap">
    ${w ? `<span class="house">${esc(w.blok)}</span>` : '<span class="house">?</span>'}
    <div class="grow"><div class="t">${esc(w ? w.nama : 'Data warga sudah dihapus')}</div><div class="s">Login No. HP: <span class="mono">${esc(hpTampil(a.hp || (w || {}).noHp) || '—')}</span>${a.userId ? '' : ' · <span style="color:var(--warn)">akun lama, buat ulang</span>'}</div></div>
    <div class="racts">${a.aktif === false ? `<span class="chip mute">Nonaktif${a.nonaktifKarena === 'Pindah' ? ' · pindah' : ''}</span>` : w && w.status === 'Pindah' ? `<span class="chip bad">Rumah sudah pindah</span><button class="btn sm bad-o" data-act="akun-pindah-off" data-id="${esc(a.id)}">Nonaktifkan</button>` : '<span class="chip ok plain">Aktif</span>'}<button class="btn sm" data-act="akun-edit" data-id="${esc(a.id)}">Ubah</button></div></div>`; }).join('');
  const salah = list.filter(a => a.aktif !== false && (wById(a.wargaId) || {}).status === 'Pindah');
  return `${salah.length ? `<div class="notice" style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><span style="flex:1;min-width:200px"><b>${salah.length} akun</b> milik warga yang sudah <b>pindah</b> masih aktif dan masih bisa login.</span><button class="btn sm pri" data-act="akun-pindah-off" data-id="${esc(salah.map(a => a.id).join(','))}">Nonaktifkan ${salah.length > 1 ? 'semua' : ''}</button></div>` : ''}
  <div class="panel"><h3>Akun login warga <small>${list.length} akun · ${tanpa} KK belum punya akun</small></h3>
    ${list.length ? `<div class="rows">${rows}</div>` : '<p class="muted" style="margin:0">Belum ada akun warga. Buat akun supaya warga bisa melihat status iurannya sendiri dan melaporkan keluhan.</p>'}</div>
    <div class="panel" style="display:grid;gap:6px"><h3>Yang bisa dilakukan warga</h3>
    <p class="muted" style="margin:0">Setelah masuk dengan No. HP dan password, warga hanya melihat menu <b>Rumah saya</b> (data keluarga, status dan riwayat iuran, kwitansi), <b>Keluhan saya</b> (melapor dan memantau tanggapan), dan <b>Pengumuman</b>. Warga tidak melihat data warga lain, buku kas, surat, atau menu pengurus.</p>
    <p class="muted" style="margin:0">Login warga memakai No. HP kepala keluarga di Data warga. Bila No. HP diubah, login otomatis ikut berubah. Warga lupa password? Buka Ubah pada akunnya lalu isi Reset password.</p></div>`;
}
function openAkun(id) {
  const a = id ? S.akunWarga.find(x => x.id === id) : null;
  const sudah = new Set(S.akunWarga.filter(x => !a || x.id !== a.id).map(x => x.wargaId));
  const opsi = wargaAktif().filter(w => !sudah.has(w.id) || (a && a.wargaId === w.id));
  if (!a && !opsi.length) { toast(S.warga.length ? 'Semua KK sudah punya akun.' : 'Tambahkan data warga dulu.', 'bad'); return; }
  const w0 = a ? wById(a.wargaId) : opsi[0];
  const pass0 = a ? '' : passAcak();
  openDlg({
    title: a ? 'Ubah akun warga' : 'Buat akun warga', area: 'admin', submitLabel: a ? 'Simpan' : 'Buat akun',
    body: `<div class="fld"><label for="ak_w">Warga (kepala keluarga) <span class="req">*</span></label><select id="ak_w" name="wargaId" required ${a ? 'disabled' : ''}>${opsi.map(w => `<option value="${esc(w.id)}" ${w0 && w0.id === w.id ? 'selected' : ''}>${esc(w.blok)} · ${esc(w.nama)}${w.noHp ? ' · ' + esc(hpTampil(w.noHp)) : ' · (No. HP kosong)'}</option>`).join('')}</select>
      ${a ? `<input type="hidden" name="wargaId" value="${esc(a.wargaId)}">` : ''}
      <span class="hint">Login memakai <b>No. HP warga</b> di Data warga${a ? ': <span class="mono">' + esc(hpTampil(a.hp || (w0 || {}).noHp)) + '</span>' : ''}.</span></div>
    ${a ? `<div class="fld"><label for="ak_s">Status</label><select id="ak_s" name="aktif"><option value="1" ${a.aktif !== false ? 'selected' : ''}>Aktif</option><option value="0" ${a.aktif === false ? 'selected' : ''}>Nonaktif (tidak bisa masuk)</option></select></div>
      ${a.userId ? `<div class="fld"><label for="ak_pr">Reset password</label><div style="display:flex;gap:6px"><input type="text" id="ak_pr" name="passwordBaru" autocomplete="off" autocapitalize="none" placeholder="Kosongkan bila tidak diganti" style="flex:1"><button type="button" class="btn sm" data-act="akun-acak">Acak</button></div>
        <span class="hint">Isi untuk mengganti password warga yang lupa. Password baru ditampilkan sekali untuk dikirim ke warga.</span></div>` : ''}`
    : `<div class="fld"><label for="ak_p">Password awal <span class="req">*</span></label>
      <div style="display:flex;gap:6px"><input type="text" id="ak_p" name="password" autocomplete="off" autocapitalize="none" value="${esc(pass0)}" placeholder="Minimal 8 karakter" style="flex:1">
      <button type="button" class="btn sm" data-act="akun-acak">Acak</button></div>
      <span class="hint">Catat atau kirim password ini ke warga. Saat pertama masuk, warga diminta membuat password pribadi.</span></div>`}`,
    onSubmit: async d => {
      const pw = String(d.password || '');
      const w = wById(d.wargaId); if (!w) { pesanDlg('Pilih warga.', 'ak_w'); return false; }
      if (a) {
        const aktif = d.aktif !== '0', pb = String(d.passwordBaru || '');
        if (pb && pb.length < 8) { pesanDlg('Password baru minimal 8 karakter.', 'ak_pr'); return false; }
        if (pb) { try { await resetPassword(a.userId, pb); } catch (e) { pesanDlg('Gagal mereset password: ' + pesanAuth(e)); return false; } }
        try {
          if (a.userId) { if (aktif) await simpanProfil({user_id: a.userId, nama: w.nama, peran: 'warga', warga_id: w.id, pengurus_id: null}); else await hapusProfil(a.userId); }
        } catch (e) { pesanDlg('Gagal mengubah akses login: ' + pesanAuth(e)); return false; }
        const ok = await put('akunWarga', a.id, {...a, hp: normHp(w.noHp), aktif, diperbarui: todayISO()});
        if (ok && pb) setTimeout(() => tampilKredensial(w, hpTampil(w.noHp), pb), 50);
        else if (ok) toast(aktif ? 'Akun warga aktif.' : 'Akun warga dinonaktifkan.');
        return ok;
      }
      if (!hpValid(w.noHp)) { pesanDlg(`No. HP ${w.nama} belum diisi atau kurang dari 10 digit. Lengkapi dulu di menu Data warga.`, 'ak_w'); return false; }
      const dipakai = loginTerpakai(w.noHp); if (dipakai) { pesanDlg(`No. HP ${hpTampil(w.noHp)} sudah dipakai login ${dipakai}. Satu No. HP hanya untuk satu akun.`, 'ak_w'); return false; }
      if (pw.length < 8) { pesanDlg('Password minimal 8 karakter.', 'ak_p'); return false; }
      let userId;
      try { userId = await buatAkunAuth(hpEmail(w.noHp), pw); } catch (e) { pesanDlg(/sudah dipakai|registered/i.test(String(e && e.message)) ? 'No. HP ini sudah dipakai akun login lain.' : pesanAuth(e), 'ak_w'); return false; }
      try { await simpanProfil({user_id: userId, nama: w.nama, peran: 'warga', warga_id: w.id, pengurus_id: null, wajib_ganti: true}); }
      catch (e) { pesanDlg('Akun login terbuat, tetapi gagal memberi akses: ' + pesanAuth(e)); return false; }
      const ok = await put('akunWarga', uid(), {hp: normHp(w.noHp), wargaId: w.id, userId, aktif: true, dibuat: todayISO(), diperbarui: todayISO()});
      if (ok) setTimeout(() => tampilKredensial(w, hpTampil(w.noHp), pw), 50);
      return ok;
    },
    onDelete: a ? async () => {
      try { await hapusProfil(a.userId); } catch (e) { pesanDlg('Gagal mencabut akses: ' + pesanAuth(e)); return false; }
      const ok = await del('akunWarga', a.id); if (ok) toast('Akun warga dihapus.'); return ok;
    } : null,
    deleteLabel: 'Hapus akun'
  });
}
function tampilKredensial(w, u, pw) {
  const teks = `Yth. Bapak/Ibu ${w.nama} (${w.blok}),\n\nBerikut akun aplikasi Warga ${lingk()} untuk melihat status iuran dan melaporkan keluhan:\n\nNo. HP: ${u}\nPassword: ${pw}\n\nBuka ${location.origin}${location.pathname.replace(/index\.html$/, '')}, lalu masuk dengan No. HP dan password di atas. Saat pertama masuk Anda akan diminta membuat password pribadi. Jangan berikan password ini kepada orang lain.\n\n${pengirim()}`;
  const bisaWa = w.noHp && waNomor(w.noHp).length >= 10;
  openDlg({
    title: 'Akun warga siap',
    body: `<div class="kw"><div class="kw-h"><div><b>${esc(w.nama)}</b><span class="l">${esc(w.blok)}</span></div><span class="chip ok">Aktif</span></div>
      <dl class="kw-d"><dt>No. HP</dt><dd class="mono">${esc(u)}</dd><dt>Password</dt><dd class="mono">${esc(pw)}</dd></dl></div>
      <p class="muted" style="margin:0;font-size:.84rem">Password ini hanya ditampilkan sekarang. Kirim ke warga sebelum menutup jendela ini.</p>`,
    foot: `${bisaWa ? `<a class="btn wa" href="${esc(waLink(w.noHp, teks))}" target="_blank" rel="noopener">Kirim ke WhatsApp</a>` : ''}<button type="button" class="btn" data-act="salin" data-teks="${esc(teks)}">Salin</button>`
  });
}
async function prosesLoginWarga() {
  const u = normUser(($('#wUser') || {}).value), pw = ($('#wPass') || {}).value || '';
  const msg = t => { const m = $('#wPesan'); if (m) m.textContent = t; };
  if (!u || !pw) { msg('Isi username dan password.'); return; }
  const btn = $('#loginWargaForm button[type=submit]'); if (btn) { btn.disabled = true; btn.textContent = 'Memeriksa…'; }
  const cap = tsAmbil(t => { const m = $('#wPesan'); if (m) m.textContent = t; }); if (cap === false) { if (btn) { btn.disabled = false; btn.textContent = 'Masuk'; } return; } const {data, error} = await SB.auth.signInWithPassword({email: emailWarga(u), password: pw, ...(cap ? {options: {captchaToken: cap}} : {})}); tsReset();
  if (error) { S.wUserDraft = u; render(); msg(/invalid login/i.test(error.message) ? 'Username atau password salah.' : pesanAuth(error)); const p = $('#wPass'); if (p) p.focus(); return; }
  S.wUserDraft = ''; S.loginError = '';
  await masukSesi(data.user);
}
function loginWargaHtml() {
  const kunci = false;
  return `<form id="loginWargaForm" class="login-pin" style="border-top:0;padding-top:0">
    <div class="fld"><label for="wUser">Username</label><input type="text" id="wUser" autocomplete="username" autocapitalize="none" value="${esc(S.wUserDraft || '')}" ${kunci ? 'disabled' : ''}></div>
    <div class="fld"><label for="wPass">Password</label><div style="display:flex;gap:6px"><input type="password" id="wPass" autocomplete="current-password" style="flex:1;letter-spacing:normal;text-align:left;font-size:1rem" ${kunci ? 'disabled' : ''}>
      <button type="button" class="btn sm mata-btn" data-act="lihat-pass" data-for="wPass" aria-label="Tampilkan password" aria-pressed="false" title="Tampilkan password">${MATA_BUKA}</button></div>
      <span class="hint" id="wPesan" style="color:var(--bad)">${kunci ? 'Terlalu banyak percobaan. Coba lagi sebentar.' : ''}</span></div>
    ${tsSlot()}<button type="submit" class="btn pri" ${kunci ? 'disabled' : ''}>Masuk</button>
    <p class="muted" style="margin:0;font-size:.82rem">Lupa password atau belum punya akun? Hubungi pengurus RT, password Anda bisa direset dari menu Admin.</p></form>`;
}
/* portal views */
/* riwayat iuran warga: tabel per tahun */
function riwayatIuran(w, pm) {
  const cur = nowPer(), awal = mulaiPer(w) || cur;
  const thSet = new Set(); for (let y = Number(awal.slice(0, 4)); y <= Number(cur.slice(0, 4)); y++) thSet.add(String(y));
  pm.forEach(p => p.periode && thSet.add(String(p.periode).slice(0, 4)));
  const thList = [...thSet].sort().reverse();
  if (!S.rwTh || (S.rwTh !== 'semua' && !thSet.has(S.rwTh))) S.rwTh = cur.slice(0, 4);
  const pilih = S.rwTh;
  const bulanTahun = y => { const out = []; for (let m = 1; m <= 12; m++) { const p = y + '-' + pad(m); if ((p >= awal && p <= cur) || pm.some(q => q.periode === p)) out.push(p); } return out; };
  const per = (pilih === 'semua' ? thList.slice().reverse().flatMap(bulanTahun) : bulanTahun(pilih)).reverse();
  const rows = per.map(p => ({p, x: pm.find(q => q.periode === p)}));
  const lunas = rows.filter(r => r.x), belum = rows.filter(r => !r.x && lewatTempo(r.p)), total = lunas.reduce((t, r) => t + (Number(r.x.jumlah) || 0), 0);
  const opsi = `<option value="semua" ${pilih === 'semua' ? 'selected' : ''}>Semua tahun</option>` + thList.map(y => `<option value="${y}" ${y === pilih ? 'selected' : ''}>${y}</option>`).join('');
  return `<div class="panel"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px"><h3 style="margin:0">Riwayat iuran</h3>
      <label style="display:flex;align-items:center;gap:8px;font-size:.88rem"><span class="muted">Tahun</span><select id="rwTh" data-rw="th" aria-label="Pilih tahun riwayat iuran" style="min-width:130px">${opsi}</select></label></div>
    <div class="tiles" style="margin-bottom:10px"><div class="tile"><span class="lbl">Bulan lunas</span><span class="val">${lunas.length} / ${rows.length}</span><span class="sub">${pilih === 'semua' ? 'seluruh periode' : 'tahun ' + esc(pilih)}</span></div>
      <div class="tile"><span class="lbl">Total dibayar</span><span class="val">${esc(rp(total))}</span><span class="sub">${belum.length ? belum.length + ' bulan belum dibayar' : 'Tidak ada tunggakan'}</span></div></div>
    ${rows.length ? `<div class="tbl-wrap"><table class="rw-tbl"><thead><tr><th class="r rw-x">No</th><th>Bulan</th><th>Status</th><th><span class="rw-l">Tanggal bayar</span><span class="rw-s">Tgl</span></th><th class="rw-x">Metode</th><th class="r">Jumlah</th><th></th></tr></thead><tbody>
      ${rows.map((r, i) => `<tr><td class="r num rw-x">${i + 1}</td><td style="font-weight:600;white-space:nowrap"><span class="rw-l">${esc(perLbl(r.p, true))}</span><span class="rw-s">${esc(perLbl(r.p))}</span></td>
        <td>${r.x ? '<span class="chip ok">Lunas</span>' : !lewatTempo(r.p) ? `<span class="chip mute" title="${jtHari() ? 'Jatuh tempo ' + esc(tgl(tglTempo(r.p))) : ''}">Belum jatuh tempo</span>` : '<span class="chip bad">Belum</span>'}</td>
        <td class="num" style="white-space:nowrap">${r.x ? `<span class="rw-l">${esc(tgl(r.x.tanggal))}</span><span class="rw-s">${esc(String(r.x.tanggal || '').slice(8, 10) + '/' + String(r.x.tanggal || '').slice(5, 7))}</span>` : '—'}</td><td class="rw-x">${r.x ? esc(r.x.metode || '—') : '—'}</td>
        <td class="r num" style="white-space:nowrap">${r.x ? esc(rp(r.x.jumlah)) : `<span class="muted">${esc(rp(nominal()))}</span>`}</td>
        <td class="r">${r.x ? `<button class="btn sm" data-act="kwitansi" data-id="${esc(r.x.id)}" aria-label="Kwitansi ${esc(perLbl(r.p, true))}"><span class="rw-l">Kwitansi</span><span class="rw-s">🧾</span></button>` : ''}</td></tr>`).join('')}
      </tbody><tfoot><tr><td class="rw-x"></td><td colspan="3" style="font-weight:700">Jumlah dibayar</td><td class="rw-x"></td><td class="r num" style="font-weight:700;white-space:nowrap">${esc(rp(total))}</td><td></td></tr></tfoot></table></div>`
      : '<p class="muted" style="margin:0">Belum ada tagihan pada tahun ini.</p>'}</div>`;
}
/* info jatuh tempo untuk warga (Rumah saya) */
function jtWarga(w, cur, lunasIni) {
  if (!jtHari() || !wajib(w, cur)) return '';
  if (lunasIni) { const nx = addM(cur, 1);
    return `<div class="jt-bar ok"><span class="jt-ico" aria-hidden="true">✅</span><div class="grow"><b>Iuran ${esc(perLbl(cur, true))} sudah lunas</b><div class="muted" style="font-size:.84rem">Iuran berikutnya (${esc(perLbl(nx, true))}) jatuh tempo <b>${esc(tgl(tglTempo(nx)))}</b>. Jatuh tempo pembayaran setiap tanggal ${jtHari()}.</div></div></div>`; }
  const d = sisaHariTempo(cur), cls = d < 0 ? 'bad' : d <= 3 ? 'warn' : 'info';
  return `<div class="jt-bar ${cls}" role="status"><span class="jt-ico" aria-hidden="true">📅</span><div class="grow"><b>Iuran ${esc(perLbl(cur, true))} jatuh tempo ${esc(tgl(tglTempo(cur)))}</b>
    <div class="muted" style="font-size:.84rem">${d > 0 ? `${d} hari lagi. ` : d === 0 ? 'Hari ini batas pembayaran. ' : `Sudah lewat ${-d} hari dan tercatat sebagai tunggakan. `}Besarnya ${esc(rp(nominal()))}. Jatuh tempo pembayaran setiap tanggal ${jtHari()}.</div></div></div>`;
}
function vPortal() {
  const w = wargaSaya(); if (!w) return '<div class="empty">Data rumah Anda tidak ditemukan. Hubungi pengurus RT.</div>';
  const cur = nowPer(), pm = S.iuran.filter(p => p.wargaId === w.id), lunasIni = pm.find(p => p.periode === cur);
  const tl = tunggakanList(w);
  const ang = (w.anggota || []);
  return `<div class="sec-head"><div><h2>Rumah saya</h2><p>${esc(w.blok)} · ${esc(lingk())}</p></div></div>
  <div class="tiles">
    <div class="tile"><span class="lbl">Iuran ${esc(perLbl(cur))}</span><span class="val" style="color:${lunasIni ? 'var(--ok)' : lewatTempo(cur) ? 'var(--bad)' : 'var(--warn)'}">${lunasIni ? 'Lunas' : lewatTempo(cur) ? 'Belum' : 'Belum bayar'}</span><span class="sub">${esc(rp(nominal()))} per bulan${jtHari() ? ` · jatuh tempo tgl ${jtHari()}` : ''}</span></div>
    <div class="tile"><span class="lbl">Tunggakan</span><span class="val">${tl.length} bulan</span><span class="sub">${tl.length ? esc(rp(tl.length * nominal())) + ' belum dibayar' : 'Tidak ada tunggakan'}</span></div>
  </div>
  ${jtWarga(w, cur, lunasIni)}
  ${tl.length ? `<div class="notice">Belum terbayar: ${esc(tl.map(p => perLbl(p)).join(', '))}.${S.set.infoBayar ? '' : ' Silakan hubungi bendahara RT untuk membayar.'}</div>` : ''}
  ${S.set.infoBayar ? `<div class="panel"><h3>Cara pembayaran</h3><p style="margin:0;white-space:pre-wrap">${esc(S.set.infoBayar)}</p></div>` : ''}
  ${kartuKoordBlok(w)}
  <div class="panel"><h3>Data rumah <small>${isWarga() ? '<button class="btn sm pri" data-act="rumah-ubah">Ubah data</button>' : ''}</small></h3>
    <dl class="data-rumah">
      <div><dt>Nomor rumah</dt><dd><span class="house">${esc(w.blok)}</span></dd></div>
      <div><dt>Kepala keluarga</dt><dd>${esc(w.nama)}</dd></div>
      <div><dt>NIK</dt><dd><span class="nik-cell"><span class="mono">${esc(S.nikBuka.has(0) ? fmtNik(w.nik) : maskNik(w.nik))}</span>${w.nik ? `<button type="button" class="btn sm ghost" data-act="nik-lihat" data-i="0">${S.nikBuka.has(0) ? 'Sembunyikan' : 'Lihat'}</button>` : ''}</span></dd></div>
      <div><dt>Jenis kelamin</dt><dd>${w.jk === 'P' ? 'Perempuan' : w.jk === 'L' ? 'Laki-laki' : '—'}</dd></div>
      <div><dt>Agama</dt><dd>${esc(agamaLbl(w.agama) || '—')}</dd></div>
      <div><dt>Tanggal lahir</dt><dd>${w.lahir ? esc(tgl(w.lahir)) + ' · ' + esc(umur(w.lahir)) : '—'}</dd></div>
      <div><dt>No. HP / WhatsApp</dt><dd class="mono">${esc(w.noHp || '—')}</dd></div>
      <div><dt>Status huni</dt><dd>${esc(w.statusHuni || '—')}</dd></div>
      <div><dt>Jumlah jiwa</dt><dd>${esc(w.jumlahJiwa || 1)} orang</dd></div>
      <div><dt>Wajib iuran sejak</dt><dd>${esc(tgl(mulaiTgl(w)))}</dd></div>
    </dl>
    ${w.diubahWarga ? `<p class="muted" style="margin:10px 0 0;font-size:.8rem">Terakhir Anda perbarui ${esc(tgl(w.diubahWarga))}.</p>` : ''}
  </div>
  <div class="panel"><h3>Data keluarga <small>${isWarga() ? '<button class="btn sm" data-act="rumah-ubah">Ubah data keluarga</button>' : `${1 + ang.length} orang`}</small></h3>
    <div class="tbl-wrap kel-tbl"><table><thead><tr><th class="r">No</th><th>Nama lengkap</th><th>Hubungan</th><th>Jenis kelamin</th><th>Agama</th><th>Tanggal lahir</th><th class="r">Umur</th><th>NIK</th></tr></thead><tbody>
    ${[{nama: w.nama, hubungan: 'Kepala keluarga', jk: w.jk, agama: w.agama, lahir: w.lahir, nik: w.nik}, ...ang].map((a, i) => `<tr>
      <td class="r num">${i + 1}</td><td style="font-weight:600">${esc(a.nama)}</td><td>${esc(a.hubungan || '—')}</td>
      <td>${a.jk === 'P' ? 'Perempuan' : a.jk === 'L' ? 'Laki-laki' : '—'}</td><td>${esc(agamaLbl(a.agama || w.agama) || '—')}</td><td class="num">${a.lahir ? esc(tgl(a.lahir)) : '—'}</td>
      <td class="r num">${a.lahir ? esc(umur(a.lahir).replace(' tahun', ' th')) : '—'}</td><td><span class="nik-cell"><span class="mono">${esc(S.nikBuka.has(i) ? fmtNik(a.nik) : maskNik(a.nik))}</span>${a.nik ? `<button type="button" class="btn sm ghost" data-act="nik-lihat" data-i="${i}" aria-pressed="${S.nikBuka.has(i)}" aria-label="${S.nikBuka.has(i) ? 'Sembunyikan' : 'Lihat'} NIK ${esc(a.nama)}">${S.nikBuka.has(i) ? 'Sembunyikan' : 'Lihat'}</button>` : ''}</span></td></tr>`).join('')}
    </tbody></table></div>
  <p class="muted" style="margin:10px 0 0;font-size:.82rem">${isWarga() ? 'Tambah, ubah atau hapus anggota keluarga lewat tombol Ubah data keluarga.' : bisa('warga') ? `Data ini diambil dari menu Data warga. <a href="#warga" data-act="warga-edit" data-id="${esc(w.id)}" style="color:var(--accent)">Ubah data rumah ini</a>` : 'Data ini diambil dari menu Data warga.'}</p></div>
  ${riwayatIuran(w, pm)}
  ${panelLokasi({blok: w.blok, judul: 'Alamat & peta rumah'})}
  ${vBersihRingkas()}
  ${vLapakBaru()}`;
}
function vLapor() {
  const w = wargaSaya(); if (!w) return '<div class="empty">Data rumah Anda tidak ditemukan.</div>';
  const list = S.keluhan.filter(k => k.wargaId === w.id).sort((a, b) => String(b.dibuat).localeCompare(String(a.dibuat)));
  return `<div class="sec-head"><div><h2>Keluhan saya</h2><p>Laporkan masalah di lingkungan dan pantau tanggapan pengurus.</p></div>
    <button class="btn pri" data-act="lapor-new">+ Laporkan keluhan</button></div>
  <div class="kel-list">${list.length ? list.map(k => `<article class="kel p-${esc(k.prioritas)}">
      <div class="meta">${chipK(k.status)}<span class="chip mute plain">${esc(k.kategori)}</span><span>${esc(tgl(k.dibuat))}</span></div>
      <h4>${esc(k.judul)}</h4>${k.isi ? `<p>${esc(k.isi)}</p>` : ''}${k.lokasi ? `<div class="meta"><span>Lokasi: ${esc(k.lokasi)}</span></div>` : ''}${kelFoto(k)}
      ${k.tanggapan ? `<div class="resp"><b>Tanggapan pengurus${k.diperbarui ? ' · ' + esc(tgl(k.diperbarui)) : ''}</b>${esc(k.tanggapan)}</div>` : `<div class="muted" style="font-size:.84rem">${k.status === 'Baru' ? 'Menunggu ditinjau pengurus.' : 'Sedang ditangani.'}</div>`}
    </article>`).join('') : '<div class="empty">Anda belum pernah mengirim keluhan.</div>'}</div>`;
}
/* ---------- Foto keluhan warga (maks 2, hanya gambar, < 1 MB; bucket privat "keluhan") ---------- */
const KF_MAKS = 2, KF_BATAS = 1000000, KF_URL = new Map();
async function kecilkanKeluhan(file) {
  for (const [max, q] of [[1280, .82], [1280, .7], [1080, .65], [960, .6], [800, .55]]) {
    const b = await kecilkanFoto(file, max, q); if (!b) throw new Error('baca');
    if (b.size < KF_BATAS * .95) return b;
  }
  throw new Error('besar');
}
const kfNama = () => Array.from(crypto.getRandomValues(new Uint8Array(12)), x => 'abcdefghijklmnopqrstuvwxyz0123456789'[x % 36]).join('');
function kelFoto(k, kecil) {
  const f = Array.isArray(k && k.foto) ? k.foto.filter(x => typeof x === 'string') : [];
  if (!f.length) return '';
  setTimeout(isiFotoKeluhan, 0);
  return `<div class="kel-foto${kecil ? ' kecil' : ''}">${f.map((p, i) => `<a class="kf-th" data-kf="${esc(p)}" target="_blank" rel="noopener" aria-label="Buka foto kejadian ${i + 1}"><img data-kf="${esc(p)}" alt="Foto kejadian ${i + 1}" loading="lazy"></a>`).join('')}</div>`;
}
async function isiFotoKeluhan() {
  if (!SB) return;
  const els = [...document.querySelectorAll('img[data-kf]:not([src])')]; if (!els.length) return;
  const now = Date.now(), perlu = [...new Set(els.map(e => e.dataset.kf))].filter(p => !(KF_URL.get(p) && KF_URL.get(p).exp > now + 60e3));
  if (perlu.length) {
    try { const {data, error} = await SB.storage.from('keluhan').createSignedUrls(perlu, 3600); if (error) throw error;
      (data || []).forEach(x => { if (x.signedUrl && x.path) KF_URL.set(x.path, {url: x.signedUrl, exp: now + 3500e3}); }); } catch (e) {}
  }
  document.querySelectorAll('[data-kf]').forEach(e => { const u = KF_URL.get(e.dataset.kf); if (!u) { if (e.tagName === 'IMG' && !e.src) e.closest('.kf-th') && e.closest('.kf-th').classList.add('gagal'); return; }
    if (e.tagName === 'IMG') { if (!e.src) e.src = u.url; } else e.href = u.url; });
}
function kfPicker(kf, gambar) {
  const box = $('#kfPick'), inp = $('#kf_in'); if (!box || !inp) return;
  const tulis = (t, bad) => { const h = $('#kfInfo'); if (h) { h.textContent = t; h.style.color = bad ? 'var(--bad)' : ''; } };
  const isi = () => { box.innerHTML = kf.map((x, i) => `<div class="kf-th"><img src="${x.url}" alt="Foto ${i + 1}"><button type="button" class="kf-x" data-kfx="${i}" aria-label="Hapus foto ${i + 1}">✕</button><span class="kf-sz">${(x.blob.size / 1024).toFixed(0)} KB</span></div>`).join('')
      + (kf.length < KF_MAKS ? `<label class="kf-add" for="kf_in"><span aria-hidden="true">📷</span>${kf.length ? 'Tambah foto' : 'Tambah foto'}<small>${kf.length}/${KF_MAKS}</small></label>` : ''); };
  isi();
  box.addEventListener('click', e => { const b = e.target.closest('[data-kfx]'); if (!b) return; const i = Number(b.dataset.kfx); URL.revokeObjectURL(kf[i].url); kf.splice(i, 1); isi(); tulis('Hanya foto (JPG/PNG/WebP), bukan video. Maksimal 2 foto; foto besar otomatis dikecilkan di bawah 1 MB.'); });
  inp.addEventListener('change', async () => {
    const files = [...inp.files]; inp.value = '';
    for (const f of files) {
      if (kf.length >= KF_MAKS) { tulis(`Maksimal ${KF_MAKS} foto per laporan.`, true); break; }
      if (/^video\//.test(f.type) || !/^image\//.test(f.type || 'image/')) { tulis('Video atau file selain foto tidak bisa diunggah. Pilih foto (JPG/PNG/WebP).', true); continue; }
      if (f.size > 25e6) { tulis('Foto terlalu besar (lebih dari 25 MB). Pilih foto lain.', true); continue; }
      tulis('Menyiapkan foto…');
      try { const blob = await kecilkanKeluhan(f); kf.push({blob, url: URL.createObjectURL(blob)}); isi(); tulis(`Foto siap (${(blob.size / 1024).toFixed(0)} KB). ${kf.length < KF_MAKS ? 'Bisa tambah 1 foto lagi.' : 'Sudah 2 foto (maksimal).'}`); }
      catch (e) { tulis(e && e.message === 'besar' ? 'Foto tidak bisa dikecilkan di bawah 1 MB. Pilih foto lain.' : 'Format foto tidak didukung. Pilih foto JPG/PNG (di iPhone: Pengaturan › Kamera › Format › Paling Kompatibel).', true); }
    }
  });
}
async function kfUnggah(wid, kf) {
  const paths = [];
  for (const x of kf) {
    const path = `${wid}/${kfNama()}.jpg`;
    const {error} = await SB.storage.from('keluhan').upload(path, x.blob, {contentType: 'image/jpeg', upsert: false});
    if (error) { if (paths.length) SB.storage.from('keluhan').remove(paths).catch(() => {}); throw error; }
    paths.push(path);
  }
  return paths;
}
function openLapor(katAwal) {
  const w = wargaSaya(); if (!w) return;
  const kf = [];
  openDlg({
    title: 'Laporkan keluhan', submitLabel: 'Kirim laporan',
    body: `<div class="fld"><label for="lp_j">Judul <span class="req">*</span></label><input type="text" id="lp_j" name="judul" required placeholder="mis. Lampu jalan depan rumah mati"></div>
    <div class="fld"><label for="lp_k">Kategori</label><select id="lp_k" name="kategori">${KATEGORI.map(k => `<option ${k === katAwal ? 'selected' : ''}>${k}</option>`).join('')}</select></div>
    <div class="fld"><label for="lp_i">Uraian</label><textarea id="lp_i" name="isi" rows="3" placeholder="Apa yang terjadi, sejak kapan"></textarea></div>
    <div class="fld"><label for="lp_l">Lokasi</label><input type="text" id="lp_l" name="lokasi" placeholder="mis. Depan ${esc(w.blok)}"></div>
    <div class="fld"><span class="lbl-f">Foto kejadian <span class="muted" style="font-weight:400">(opsional, maks. 2)</span></span>
      <div class="kf-pick" id="kfPick"></div><input type="file" id="kf_in" accept="image/jpeg,image/png,image/webp,image/heic,image/heif" multiple hidden>
      <span class="hint" id="kfInfo">Hanya foto (JPG/PNG/WebP), bukan video. Maksimal 2 foto; foto besar otomatis dikecilkan di bawah 1 MB.</span></div>`,
    onSubmit: async d => {
      const row = {judul: d.judul.trim(), kategori: d.kategori, isi: String(d.isi || '').trim(), lokasi: String(d.lokasi || '').trim(), prioritas: 'Sedang', status: 'Baru',
        wargaId: w.id, pelaporNama: '', tanggapan: '', sumber: 'warga', dibuat: todayISO(), diperbarui: todayISO(), olehSesi: S.sesi};
      if (!DB) { S.keluhan.push({...row, id: uid()}); render(); toast('Laporan terkirim.'); return true; }
      let foto = [];
      if (kf.length) { const b = $('#dlg button[type=submit]') || document.querySelector('dialog[open] button[type=submit]'); if (b) b.textContent = 'Mengunggah foto…';
        try { foto = await kfUnggah(w.id, kf); } catch (e) { if (b) b.textContent = 'Kirim laporan'; pesanDlg('Foto gagal diunggah: ' + (/limit|quota|exceed/i.test(e.message || '') ? 'batas unggah harian tercapai, coba lagi besok.' : pesanAuth(e)) + ' Hapus foto lalu kirim tanpa foto, atau coba lagi.'); return false; } }
      if (foto.length) row.foto = foto;
      try { await DB.collection('keluhan').doc(uid()).set(row); kf.forEach(x => URL.revokeObjectURL(x.url)); toast('Laporan terkirim. Pengurus akan menindaklanjuti.'); return true; }
      catch (e) { if (foto.length) SB.storage.from('keluhan').remove(foto).catch(() => {}); return fail(e); }
    }
  });
  kfPicker(kf);
}

/* --- Admin: pengurus & role --- */
const JABATAN = ['Ketua RT', 'Wakil Ketua RT', 'Sekretaris', 'Bendahara', 'Koordinator Keamanan', 'Koordinator Kebersihan', 'Koordinator Kerohanian', 'Seksi Keamanan', 'Satpam', 'Seksi Kebersihan', 'Seksi Kerohanian', 'Seksi Sosial', 'Seksi Pembangunan', 'Humas', 'Anggota pengurus'];
const inisial = n => String(n || '?').trim().split(/\s+/).slice(0, 2).map(x => x[0]).join('').toUpperCase();
function avatarHtml(userId, namaTeks) {
  const src = userId && avatar(userId);
  return src ? `<img class="av" src="${esc(src)}" alt="">` : `<span class="av av-i" aria-hidden="true">${esc(inisial(namaTeks))}</span>`;
}
function izinRingkas(r) {
  const k = MENU_IZIN_UI.filter(([m]) => izinRole(r, m) === 'kelola').map(m => m[1]);
  const l = MENU_IZIN_UI.filter(([m]) => izinRole(r, m) === 'lihat').map(m => m[1]);
  const t = MENU_IZIN_UI.filter(([m]) => !izinRole(r, m) || izinRole(r, m) === 'tidak').map(m => m[1]);
  return [k.length ? 'Ubah: ' + k.join(', ') : '', l.length ? 'Lihat: ' + l.join(', ') : '', t.length ? 'Tidak bisa buka: ' + t.join(', ') : ''].filter(Boolean).join(' · ') || 'Tidak bisa membuka menu apa pun';
}
const roleCocok = jab => { const j = String(jab || '').trim().toLowerCase(); if (!j) return null; return rolesAll().find(r => r.nama.toLowerCase() === j) || (/kerohanian|keagamaan|rohani/.test(j) ? roleById('koord_kerohanian') : null) || null; };
function roleInfoHtml(rid, jab) {
  const r = roleById(rid);
  if (!r) return 'Pilih role untuk menentukan menu yang boleh dibuka.';
  const c = roleCocok(jab);
  const warn = c && c.id !== r.id ? `<span style="color:var(--warn);font-weight:600;display:block">⚠ Jabatan "${esc(String(jab).trim())}" tetapi role yang dipilih "${esc(r.nama)}". Hak akses mengikuti role, bukan jabatan.</span>` : '';
  return warn + esc(izinRingkas(r));
}
function vAdmin() {
  const segs = [['pengurus', `Pengurus ${S.pengurus.length}`], ['role', `Role & hak akses ${rolesAll().length}`], ['akun', `Akun warga ${S.akunWarga.length}`], ['blok', `Koordinator blok ${blokList().length}`], ['online', 'Pengguna online'], ['log', 'Log aktivitas']]
    .map(([k, l]) => `<button type="button" data-act="admtab" data-k="${k}" aria-pressed="${S.admTab === k}">${l}</button>`).join('');
  const head = `<div class="sec-head"><div><h2>Admin</h2><p>Atur siapa pengurusnya, apa jabatannya, dan menu apa saja yang boleh mereka buka.</p></div>
    ${S.admTab === 'pengurus' ? '<button class="btn pri" data-act="pgr-new">+ Tambah pengurus</button>' : S.admTab === 'role' ? '<button class="btn pri" data-act="role-new">+ Tambah role</button>' : S.admTab === 'akun' ? '<button class="btn pri" data-act="akun-new">+ Buat akun warga</button>' : S.admTab === 'blok' ? '<button class="btn pri" data-act="blok-new">+ Tambah blok</button>' : ''}</div>
    <div class="toolbar"><div class="seg" role="group" aria-label="Bagian admin">${segs}</div></div>` + panelMfa();
  const legacy = '';
  if (S.admTab === 'role') return head + vAdminRole();
  if (S.admTab === 'akun') return head + vAdminAkun();
  if (S.admTab === 'log') return head + vAdminLog();
  if (S.admTab === 'online') return head + vAdminOnline();
  if (S.admTab === 'blok') return head + vAdminBlok();
  if (S.admTab === 'permintaan') return head + vAdminMinta();
  const list = [...S.pengurus].sort((a, b) => (a.aktif === false) - (b.aktif === false) || JABATAN.indexOf(a.jabatan) - JABATAN.indexOf(b.jabatan) || String(a.nama).localeCompare(String(b.nama)));
  const pemilik = S.owner && S.me ? `<div class="row">${avatarHtml(S.me.id, S.me.name)}<div class="grow"><div class="t">${esc(S.me.name || 'Anda')} <span class="muted">(Anda)</span></div><div class="s">Pemilik aplikasi · semua menu dan Admin</div><div class="s">${hpDariEmail(S.authUser && S.authUser.email) ? `Login No. HP: <span class="mono">${esc(hpDariEmail(S.authUser.email))}</span>` : '<span style="color:var(--warn)">Masih login dengan email. Atur No. HP login Anda.</span>'}</div></div><span class="chip ok plain">Pemilik</span><button class="btn sm" data-act="pemilik-rumah">${S.profil && S.profil.warga_id && wById(S.profil.warga_id) ? 'Rumah ' + esc(wById(S.profil.warga_id).blok) : 'Tautkan rumah'}</button><button class="btn sm" data-act="pemilik-hp">${hpDariEmail(S.authUser && S.authUser.email) ? 'Ubah No. HP' : 'Atur No. HP login'}</button></div>` : '';
  const rows = list.map(p => {
    const r = roleById(p.peranId), akun = p.userId ? nama(p.userId) : '';
    return `<div class="row" style="flex-wrap:wrap">${fotoAman(p.foto) ? `<img class="av" src="${esc(p.foto)}" alt="">` : avatarHtml(p.userId, p.nama)}
      <div class="grow"><div class="t">${esc(p.nama)}${p.userId && S.me && p.userId === S.me.id ? ' <span class="muted">(Anda)</span>' : ''}${p.dariPekerja ? ' <span class="chip mute plain" title="Akun dibuat dari menu Pekerja & gaji">Pekerja</span>' : ''}</div>
        <div class="s">${esc(p.jabatan || 'Tanpa jabatan')}${p.noHp ? ' · ' + esc(p.noHp) : ''}${p.wargaId && wById(p.wargaId) ? ' · Rumah ' + esc(wById(p.wargaId).blok) : ''}</div>
        ${r && roleCocok(p.jabatan) && roleCocok(p.jabatan).id !== r.id ? `<div class="s" style="color:var(--warn)">⚠ Jabatan ${esc(p.jabatan)}, tetapi role ${esc(r.nama)}</div>` : ''}
        <div class="s">${p.userId ? `Login No. HP: <span class="mono">${esc(hpTampil(p.noHp) || '—')}</span>${p.aktif !== false && !punyaProfil(p.userId) ? ' · <span style="color:var(--warn)">akses login belum aktif</span>' : ''}` : '<span style="color:var(--warn)">Belum punya login. Buka Ubah untuk membuatkan password.</span>'}</div></div>
      <div class="racts">${r ? `<span class="chip info plain">${esc(r.nama)}</span>` : '<span class="chip bad plain">Role dihapus</span>'}${p.aktif === false ? '<span class="chip mute">Nonaktif</span>' : ''}
        <button class="btn sm" data-act="pgr-edit" data-id="${esc(p.id)}">Ubah</button></div></div>`;
  }).join('');
  const pinP = '';
  return head + legacy + pinP + `<div class="panel"><h3>Daftar pengurus <small>${list.filter(p => p.aktif !== false).length} aktif</small></h3>
    <div class="rows">${pemilik}${rows || (pemilik ? '' : '')}</div>
    ${list.length ? '' : `<p class="muted" style="margin:${pemilik ? '10px' : '0'} 0 0">Belum ada pengurus. Tambahkan pengurus, pilih role-nya, lalu buatkan email & password supaya bisa masuk.</p>`}</div>
    <div class="panel" style="display:grid;gap:6px"><h3>Cara pengurus bisa masuk</h3>
    <p class="muted" style="margin:0">Setiap pengurus masuk dengan email dan password yang Anda buatkan di sini, dari HP atau laptop mana pun. Menu yang terlihat mengikuti role masing-masing. Pengurus yang dinonaktifkan langsung tidak bisa masuk. Pengurus yang lupa password bisa memakai "Lupa password?" di layar login, atau Anda reset dari tombol Ubah.</p></div>`;
}
const LOG_KOL = {notulen: 'Notulensi rapat', sesi: 'Sesi login', pekerja: 'Data pekerja', gaji: 'Slip gaji', lapak: 'Lapak warga', rohani: 'Kerohanian', qurban: 'Qurban', sumbangan: 'Program sumbangan', donasi: 'Sumbangan masuk', salur: 'Penyaluran sumbangan', akun: 'Akun login', warga: 'Data warga', iuran: 'Iuran', kas: 'Kas', keluhan: 'Keluhan', pengumuman: 'Pengumuman', surat: 'Surat', tamu: 'Buku tamu', paket: 'Paket', titip: 'Titip rumah', kejadian: 'Kejadian', jaga: 'Jadwal jaga', darurat: 'Darurat', nomorDarurat: 'Nomor darurat', pengurus: 'Pengurus', peran: 'Role', akunWarga: 'Akun warga', pengaturan: 'Pengaturan'};
const LOG_AKSI = {insert: ['Tambah', 'ok'], update: ['Ubah', 'info'], delete: ['Hapus', 'bad'], ganti_password: ['Ganti password', 'info'], reset_password: ['Reset password', 'warn'], keluarkan_sesi: ['Akhiri sesi', 'bad']};
/* ---------- Pengguna online (detak tiap 1 menit; dilihat Pemilik di Admin) ---------- */
const ON = {last: 0, menu: '', data: null, err: '', memuat: false, tmr: null};
function perangkatId() {
  try { let id = localStorage.getItem('perangkat-id'); if (!id || !/^[A-Za-z0-9_-]{8,40}$/.test(id)) { id = uid().replace(/[^A-Za-z0-9_-]/g, '').slice(0, 24).padEnd(12, '0'); localStorage.setItem('perangkat-id', id); } return id; }
  catch (e) { return ON.idMem || (ON.idMem = 'm' + Math.random().toString(36).slice(2, 14).padEnd(12, '0')); }
}
function labelPerangkat() {
  const u = navigator.userAgent || '';
  const os = /iPhone/.test(u) ? 'iPhone' : /iPad/.test(u) || (/Macintosh/.test(u) && navigator.maxTouchPoints > 1) ? 'iPad' : /Android/.test(u) ? 'Android' : /Windows/.test(u) ? 'Windows' : /Mac OS X|Macintosh/.test(u) ? 'Mac' : /CrOS/.test(u) ? 'Chromebook' : /Linux/.test(u) ? 'Linux' : 'Perangkat lain';
  const br = /SamsungBrowser/.test(u) ? 'Samsung Internet' : /EdgA?\//.test(u) ? 'Edge' : /OPR\//.test(u) ? 'Opera' : /Firefox|FxiOS/.test(u) ? 'Firefox' : /CriOS|Chrome\//.test(u) ? 'Chrome' : /Safari\//.test(u) ? 'Safari' : 'Browser';
  const app = (window.navigator.standalone || matchMedia('(display-mode: standalone)').matches) ? ' · aplikasi' : '';
  return `${os} · ${br}${app}`;
}
const tampilanSesi = () => S.modeWarga ? 'Pengurus (tampilan warga)' : S.sesi === 'pemilik' ? 'Pemilik' : isWarga() ? 'Warga' : 'Pengurus';
async function onlineDetak(paksa) {
  if (!SB || !sudahMasuk() || S.terkunci || document.visibilityState !== 'visible') return;
  const now = Date.now();
  if (!paksa && now - ON.last < 60e3 && ON.menu === S.tab) return;
  if (now - ON.last < 10e3 && !paksa) return;
  ON.last = now; ON.menu = S.tab;
  try { const {data, error} = await SB.rpc('detak_online', {p_perangkat_id: perangkatId(), p_perangkat: labelPerangkat(), p_tampilan: tampilanSesi(), p_menu: S.tab || ''}); if (!error && data === false) await sesiDiakhiri(); } catch (e) {}
}
async function sesiDiakhiri() {
  if (!S.authUser) return;
  try { await SB.auth.signOut({scope: 'local'}); } catch (e) {}
  ON.last = 0; ON.data = null; if (dlg.open) dlg.close();
  resetSesi(); S.loginError = ''; render(); window.scrollTo(0, 0); muatInfoPublik();
  S.loginPesan = 'Sesi Anda diakhiri oleh Pemilik aplikasi. Silakan masuk lagi.'; render();
}
async function onlineKeluar() { try { if (SB && S.authUser) await SB.rpc('keluar_online', {p_perangkat_id: perangkatId()}); } catch (e) {} ON.last = 0; ON.data = null; }
setInterval(() => onlineDetak(false), 15e3);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') onlineDetak(true); });
async function muatOnline(diam) {
  if (ON.memuat) return; ON.memuat = true; if (!diam) { ON.err = ''; }
  try { const {data, error} = await SB.rpc('pengguna_online'); if (error) throw error; ON.data = data || []; ON.err = ''; ON.waktu = Date.now(); }
  catch (e) { ON.err = pesanAuth(e); if (!ON.data) ON.data = []; }
  ON.memuat = false;
  if (S.tab === 'admin' && S.admTab === 'online' && !dlg.open) render();
}
setInterval(() => { if (S.tab === 'admin' && S.admTab === 'online' && bisaKelola() && document.visibilityState === 'visible') muatOnline(true); }, 30e3);
const onStatus = t => { const m = (Date.now() - new Date(t).getTime()) / 60e3; return m <= 2 ? 'on' : m <= 15 ? 'idle' : 'off'; };
function laluTeks(t) {
  const d = Math.max(0, (Date.now() - new Date(t).getTime()) / 1000);
  if (d < 60) return 'baru saja'; if (d < 3600) return Math.floor(d / 60) + ' menit lalu'; if (d < 86400) return Math.floor(d / 3600) + ' jam lalu';
  return new Date(t).toLocaleString('id-ID', {dateStyle: 'medium', timeStyle: 'short'});
}
function openKillSesi(uid0, pid, nama, dev) {
  if (!bisaKelola()) return;
  const semua = !pid;
  openDlg({title: semua ? 'Keluarkan dari semua perangkat' : 'Akhiri sesi perangkat', area: 'admin', submitLabel: semua ? 'Keluarkan' : 'Akhiri sesi',
    body: `<p style="margin:0">${semua ? `Semua sesi login <b>${esc(nama)}</b> di semua perangkat akan diakhiri.` : `Sesi login <b>${esc(nama)}</b> di <b>${esc(dev || 'perangkat ini')}</b> akan diakhiri.`}</p>
      <p class="muted" style="margin:0;font-size:.86rem">Akses data langsung ditolak dan aplikasinya kembali ke layar login. Akun tidak dihapus; pemiliknya bisa masuk lagi dengan password. Bila perangkat hilang atau password bocor, lanjutkan dengan reset password.</p>`,
    onSubmit: async () => {
      try { const {data, error} = await SB.rpc('admin_keluarkan', {p_user: uid0, p_perangkat_id: pid || null}); if (error) throw error;
        toast(semua ? `${nama} dikeluarkan dari ${data || 0} sesi.` : `Sesi ${nama} di ${dev || 'perangkat'} diakhiri.`); }
      catch (e) { pesanDlg('Gagal: ' + pesanAuth(e)); return false; }
      S.logAkt = null; setTimeout(() => muatOnline(true), 300); return true;
    }});
}
function vAdminOnline() {
  if (ON.data == null) { setTimeout(() => muatOnline(), 0); return '<div class="skel">Memuat pengguna online…</div>'; }
  const menuLbl = k => (TABS.find(t => t[0] === k) || [k, k])[1];
  const per = new Map();
  ON.data.forEach(r => { if (!per.has(r.user_id)) per.set(r.user_id, {...r, dev: []}); per.get(r.user_id).dev.push(r); });
  const U = [...per.values()].map(u => { const st = u.dev.map(d => onStatus(d.terakhir)); u.st = st.includes('on') ? 'on' : st.includes('idle') ? 'idle' : 'off'; return u; });
  const c = {on: U.filter(u => u.st === 'on').length, idle: U.filter(u => u.st === 'idle').length, all: U.length};
  const f = S.onFilter || 'aktif';
  const L = U.filter(u => f === 'semua' || u.st !== 'off');
  const peranChip = u => u.peran === 'pemilik' ? '<span class="chip ok plain">Pemilik</span>' : u.peran === 'warga' ? '<span class="chip mute plain">Warga</span>' : '<span class="chip info plain">Pengurus</span>';
  const stLbl = {on: ['Online', 'ok'], idle: ['Tidak aktif', 'warn'], off: ['Offline', 'mute']};
  const rows = L.map(u => `<div class="row on-row"><span class="on-dot ${u.st}" aria-hidden="true"></span><div class="grow">
      <div class="t">${esc(u.nama || '—')} ${peranChip(u)}${u.user_id === (S.authUser && S.authUser.id) ? ' <span class="muted" style="font-weight:400">(Anda)</span>' : ''}</div>
      <div class="s">${esc([u.jabatan && u.peran !== 'pemilik' ? u.jabatan : '', u.blok].filter(Boolean).join(' · ') || u.akun || '')}</div>
      ${u.dev.map(d => { const s2 = onStatus(d.terakhir); return `<div class="on-dev">${d.sesi_ini ? '<span class="chip ok plain" style="float:right;font-size:.72rem">Perangkat ini</span>' : u.dev.length < 2 ? '' : `<button type="button" class="btn sm on-kill" data-act="on-kill" data-u="${esc(u.user_id)}" data-p="${esc(d.perangkat_id || '')}" data-n="${esc(u.nama || '')}" data-d="${esc(d.perangkat || '')}" title="Akhiri sesi di perangkat ini">Akhiri</button>`}<span class="on-dot sm ${s2}" aria-hidden="true"></span>${esc(d.perangkat || 'Perangkat')} · <b>${esc(d.tampilan || '')}</b>${s2 !== 'off' && d.menu ? ' · buka ' + esc(menuLbl(d.menu)) : ''} · <span class="muted">${s2 === 'on' ? 'aktif ' + laluTeks(d.terakhir) : 'terakhir ' + laluTeks(d.terakhir)}${s2 !== 'off' ? ', sejak ' + esc(new Date(d.mulai).toLocaleTimeString('id-ID', {hour: '2-digit', minute: '2-digit'})) : ''}</span></div>`; }).join('')}
    </div><div class="on-aksi"><span class="chip ${stLbl[u.st][1]} plain">${stLbl[u.st][0]}</span>${u.dev.some(d => !d.sesi_ini) ? `<button type="button" class="btn sm bad-o" data-act="on-kill" data-u="${esc(u.user_id)}" data-p="" data-n="${esc(u.nama || '')}" title="Keluarkan akun ini dari semua perangkat">Keluarkan${u.dev.length > 1 ? ' semua' : ''}</button>` : ''}</div></div>`).join('');
  return `<div class="panel"><div class="papan-st on-stat"><div><b style="color:var(--ok)">${c.on}</b><span>Online sekarang</span></div><div><b style="color:var(--warn)">${c.idle}</b><span>Tidak aktif</span></div><div><b>${c.all}</b><span>Pengguna 24 jam</span></div></div></div>
    <div class="panel"><h3>Pengguna online <small>${ON.waktu ? 'diperbarui ' + new Date(ON.waktu).toLocaleTimeString('id-ID', {hour: '2-digit', minute: '2-digit', second: '2-digit'}) : ''}</small></h3>
      <div class="toolbar" style="margin:-4px 0 8px"><div class="seg"><button type="button" data-act="on-f" data-k="aktif" aria-pressed="${f === 'aktif'}">Sedang aktif (${c.on + c.idle})</button><button type="button" data-act="on-f" data-k="semua" aria-pressed="${f === 'semua'}">24 jam terakhir (${c.all})</button></div>
        <button class="btn sm" data-act="on-muat">${ON.memuat ? 'Memuat…' : 'Muat ulang'}</button></div>
      ${ON.err ? `<div class="notice">Daftar tidak bisa dimuat: ${esc(ON.err)}</div>` : ''}
      ${rows ? `<div class="rows">${rows}</div>` : `<p class="muted" style="margin:0">${f === 'aktif' ? 'Tidak ada pengguna lain yang sedang aktif.' : 'Belum ada pengguna dalam 24 jam terakhir.'}</p>`}</div>
    <p class="muted" style="margin:0;font-size:.84rem">Aplikasi yang sedang dibuka mengirim tanda aktif tiap 1 menit. Pengguna yang menutup aplikasi atau HP-nya terkunci akan berpindah ke "Tidak aktif" lalu "Offline". Daftar diperbarui otomatis tiap 30 detik dan hanya bisa dilihat Pemilik. Tombol <b>Akhiri</b> / <b>Keluarkan</b> langsung memutus sesi login: akses datanya ditolak seketika dan aplikasinya kembali ke layar login dalam ±1 menit. Akun tetap aktif dan bisa masuk lagi dengan password (untuk memblokir, nonaktifkan pengurus/akun warga atau reset passwordnya).</p>`;
}

async function muatLog() {
  S.logAkt = 'memuat'; render();
  const {data, error} = await SB.from('log_aktivitas').select('id,waktu,nama,aksi,koleksi,dok_id,data_lama').order('waktu', {ascending: false}).limit(200);
  S.logAkt = error ? {err: error.message} : data || []; render();
}
function vAdminLog() {
  if (S.logAkt == null) { setTimeout(muatLog, 0); return '<div class="skel">Memuat log…</div>'; }
  if (S.logAkt === 'memuat') return '<div class="skel">Memuat log…</div>';
  if (S.logAkt.err) return `<div class="notice">Log tidak bisa dimuat: ${esc(S.logAkt.err)}</div>`;
  const ringkas = d => d ? esc(d.nama || d.judul || d.uraian || d.username || d.blok || '') : '';
  const rows = S.logAkt.map(l => { const [lbl, cls] = LOG_AKSI[l.aksi] || [l.aksi, 'mute']; return `<div class="row"><div class="grow">
    <div class="t">${esc(l.nama || 'Sistem')} <span class="muted" style="font-weight:400">· ${esc(LOG_KOL[l.koleksi] || l.koleksi)}</span></div>
    <div class="s">${esc(new Date(l.waktu).toLocaleString('id-ID', {dateStyle: 'medium', timeStyle: 'short'}))}${l.aksi === 'delete' && l.data_lama ? (l.koleksi === 'iuran' && l.data_lama.koreksi ? ` · Koreksi iuran ${esc(perLbl(l.data_lama.periode || ''))} ${esc(rp(l.data_lama.jumlah))} (${esc((wById(l.data_lama.wargaId) || {}).blok || '')}) · ${esc(l.data_lama.koreksi.alasan)}${l.data_lama.koreksi.catatan ? ' — ' + esc(l.data_lama.koreksi.catatan) : ''}` : ' · ' + ringkas(l.data_lama)) : ''}${(l.aksi === 'reset_password' || l.aksi === 'keluarkan_sesi') && l.dok_id ? ' · untuk ' + esc(l.dok_id) : ''}${l.aksi === 'keluarkan_sesi' && l.data_lama ? (l.data_lama.perangkat === 'semua' ? ' · semua perangkat' : ' · 1 perangkat') : ''}</div></div>
    <span class="chip ${cls} plain">${esc(lbl)}</span></div>`; }).join('');
  return `<div class="panel"><h3>Log aktivitas <small>200 terakhir</small></h3>
    <div class="toolbar" style="margin:-4px 0 8px"><button class="btn sm" data-act="log-muat">Muat ulang</button></div>
    ${rows ? `<div class="rows">${rows}</div>` : '<p class="muted" style="margin:0">Belum ada aktivitas tercatat.</p>'}</div>
    <p class="muted" style="margin:0;font-size:.84rem">Setiap tambah, ubah, dan hapus data tercatat otomatis di server beserta pelakunya. Data yang dihapus ikut disimpan di log sehingga bisa dipulihkan bila perlu.</p>`;
}
function vAdminRole() {
  const cell = v => v === 'kelola' ? '<span class="chip ok plain">Ubah</span>' : v === 'lihat' ? '<span class="chip info plain">Lihat</span>' : '<span class="muted">—</span>';
  const pakai = id => S.pengurus.filter(p => p.peranId === id).length;
  const rowsT = rolesAll().map(r => `<tr><td><div style="font-weight:600">${esc(r.nama)}</div><div class="muted" style="font-size:.78rem">${pakai(r.id)} pengurus</div></td>
    ${MENU_IZIN_UI.map(([m]) => `<td>${cell(izinRole(r, m))}</td>`).join('')}<td class="r"><button class="btn sm" data-act="role-edit" data-id="${esc(r.id)}">Ubah</button></td></tr>`).join('');
  const rowsM = rolesAll().map(r => `<div class="row"><div class="grow"><div class="t">${esc(r.nama)} <span class="muted" style="font-weight:400">· ${pakai(r.id)} pengurus</span></div><div class="s">${esc(izinRingkas(r))}</div></div>
    <button class="btn sm" data-act="role-edit" data-id="${esc(r.id)}">Ubah</button></div>`).join('');
  return `${S.peran.length ? '' : '<p class="muted" style="margin:-8px 0 0;font-size:.84rem">Ini role bawaan. Ubah atau tambah role sesuai struktur pengurus Anda.</p>'}
    <div class="tbl-wrap hide-m"><table><thead><tr><th>Role</th>${MENU_IZIN_UI.map(([, l]) => `<th>${esc(l.replace(' / ringkasan', ''))}</th>`).join('')}<th></th></tr></thead>
    <tbody><tr><td><div style="font-weight:600">Pemilik</div><div class="muted" style="font-size:.78rem">tetap, + menu Admin</div></td>${MENU_IZIN_UI.map(() => `<td>${cell('kelola')}</td>`).join('')}<td></td></tr>${rowsT}</tbody></table></div>
    <div class="list-mobile"><div class="row"><div class="grow"><div class="t">Pemilik</div><div class="s">Semua menu, bisa diubah, ditambah menu Admin. Tidak bisa diubah.</div></div></div>${rowsM}</div>
    <p class="muted" style="margin:0;font-size:.84rem"><b>Ubah</b> = bisa membuka dan mengubah data · <b>Lihat</b> = hanya membuka · <b>—</b> = menu disembunyikan.</p>`;
}
function vAdminMinta() {
  if (!S.minta.length) return '<div class="empty">Tidak ada permintaan akses. Pengurus yang membuka aplikasi tanpa terdaftar bisa menekan "Minta akses", dan permintaannya muncul di sini.</div>';
  return `<div class="panel"><div class="rows">${S.minta.map(r => `<div class="row" style="flex-wrap:wrap">${avatarHtml(r.id, nama(r.id))}
    <div class="grow"><div class="t">${esc(nama(r.id))}</div><div class="s">${r.pesan ? esc(r.pesan) + ' · ' : ''}diminta ${esc(tgl(r.diminta))}</div></div>
    <div class="racts"><button class="btn sm pri" data-act="minta-proses" data-id="${esc(r.id)}">Jadikan pengurus</button><button class="btn sm ghost" data-act="tolak" data-id="${esc(r.id)}">Tolak</button></div></div>`).join('')}</div></div>`;
}
let pgCariTmr = null;
function akunBox(uid) {
  if (uid) return `<div class="row" style="padding:6px 0">${avatarHtml(uid, nama(uid))}<div class="grow"><div class="t">${esc(nama(uid))}</div><div class="s">Akun tertaut · bisa masuk ke aplikasi</div></div><button type="button" class="btn sm ghost" data-act="pg-lepas">Lepas</button></div>`;
  return `<input type="search" id="pgCari" placeholder="${U ? 'Ketik nama untuk mencari akun…' : 'Pencarian akun tersedia saat dibuka lewat Claude'}" ${U ? '' : 'disabled'} aria-label="Cari akun">
    <div id="pgHasil" class="rows"></div>`;
}
function openPengurus(id, prefill) {
  const p = id ? S.pengurus.find(x => x.id === id) : null;
  const x = p || {aktif: true, peranId: '', mulai: todayISO(), ...(prefill || {})};
  if (!x.peranId && x.jabatan) { const r = roleCocok(x.jabatan); if (r) x.peranId = r.id; }
  const pidAwal = p ? p.id : uid(), ker = pgFotoKerja = {awal: (p && p.foto) || '', url: (p && p.foto) || '', load: false, pid: pidAwal, baru: [], box: '#pgFoto', file: 'pg_file', del: 'pg-foto-del', namaSel: '#pg_nama'};
  openDlg({
    title: p ? 'Ubah data pengurus' : 'Tambah pengurus', area: 'admin',
    body: `${p && p.dariPekerja ? '<div class="notice" style="margin:0">Akun ini dibuat dari menu <b>Pekerja &amp; gaji</b>. Nama dan No. HP sebaiknya diubah di data pekerjanya agar tetap sinkron.</div>' : ''}<div class="fld"><label>Foto pengurus</label><div class="pg-foto" id="pgFoto"></div><input type="file" id="pg_file" accept="image/*" hidden>
      <span class="hint">Tampil di Struktur Kepengurusan. Foto wajah, dipotong persegi otomatis.</span></div>
    <div class="fld"><label for="pg_nama">Nama lengkap <span class="req">*</span></label><input type="text" id="pg_nama" name="nama" required value="${esc(x.nama)}"></div>
    <div class="grid2">
      <div class="fld"><label for="pg_jab">Jabatan</label><input type="text" id="pg_jab" name="jabatan" list="jabList" value="${esc(x.jabatan)}" placeholder="mis. Bendahara"><datalist id="jabList">${JABATAN.map(j => `<option value="${j}">`).join('')}</datalist></div>
      <div class="fld"><label for="f_hp">No. HP / WhatsApp <span class="req">*</span></label><input type="tel" id="f_hp" name="noHp" inputmode="tel" value="${esc(x.noHp)}" placeholder="08…" autocomplete="off" required><span class="hint">Dipakai juga untuk login.</span><span class="hint nik-info" id="hpInfo">${hpInfo(x.noHp)}</span></div>
    </div>
    <div class="fld"><label for="pg_rumah">Rumah / data warga</label><select id="pg_rumah" name="wargaId"><option value="">— tidak ditautkan —</option>${wargaAktif().map(w => `<option value="${esc(w.id)}" ${x.wargaId === w.id ? 'selected' : ''}>${esc(w.blok)} · ${esc(w.nama)}</option>`).join('')}</select>
      <span class="hint">Untuk menu Rumah saya: pengurus melihat iuran dan data keluarganya sendiri.</span></div>
    <div class="fld"><label for="pg_role">Role (hak akses menu) <span class="req">*</span></label><select id="pg_role" name="peranId" required>${x.peranId ? '' : '<option value="">— pilih role —</option>'}${rolesAll().map(r => `<option value="${esc(r.id)}" ${x.peranId === r.id ? 'selected' : ''}>${esc(r.nama)}</option>`).join('')}</select>
      <span class="hint" id="pgRoleInfo">${roleInfoHtml(x.peranId, x.jabatan)}</span></div>
    <div class="grid2">
      <div class="fld"><label for="pg_aktif">Status</label><select id="pg_aktif" name="aktif"><option value="1" ${x.aktif !== false ? 'selected' : ''}>Aktif</option><option value="0" ${x.aktif === false ? 'selected' : ''}>Nonaktif (tidak bisa masuk)</option></select></div>
      <div class="fld"><label for="pg_mulai">Menjabat sejak</label><input type="date" id="pg_mulai" name="mulai" value="${esc(x.mulai)}"></div>
    </div>
    ${x.userId ? `<div class="fld"><label>Login</label><div class="muted" style="font-size:.88rem">Masuk dengan <b>No. HP di atas</b>. Bila No. HP diubah, login otomatis ikut berubah.</div></div>
      <div class="fld"><label for="pg_reset">Reset password</label><div style="display:flex;gap:6px"><input type="text" id="pg_reset" name="passwordBaru" autocomplete="off" autocapitalize="none" placeholder="Kosongkan bila tidak diganti" style="flex:1"><button type="button" class="btn sm" data-act="pg-acak2">Acak</button></div></div>`
    : `<div class="grid2"><div class="fld"><label>Login</label><div class="muted" style="font-size:.88rem;padding-top:8px">Memakai <b>No. HP di atas</b></div></div>
      <div class="fld"><label for="pg_pass">Password awal</label><div style="display:flex;gap:6px"><input type="text" id="pg_pass" name="password" autocomplete="off" autocapitalize="none" placeholder="Minimal 8 karakter" style="flex:1"><button type="button" class="btn sm" data-act="pg-acak">Acak</button></div></div></div>
      <p class="muted" style="margin:-4px 0 0;font-size:.82rem">Isi password awal supaya pengurus ini bisa masuk dengan No. HP-nya. Boleh dikosongkan dan dibuat nanti.</p>`}`,
    onSubmit: async d => {
      const hp = String(d.noHp || '').replace(/\D/g, '').length;
      if (!hp) { pesanDlg('No. HP wajib diisi karena dipakai untuk login.', 'f_hp'); return false; }
      if (hp < 10) { pesanDlg(`No. HP minimal 10 digit (sekarang ${hp} digit).`, 'f_hp'); return false; }
      const dipakai = loginTerpakai(d.noHp, p && p.id); if (dipakai && (!p || normHp(p.noHp) !== normHp(d.noHp))) { pesanDlg(`No. HP ini sudah dipakai login ${dipakai}.`, 'f_hp'); return false; }
      if (!roleById(d.peranId)) { pesanDlg('Pilih role untuk pengurus ini.', 'pg_role'); return false; }
      const pw = String(d.password || ''), email = pw && !(p && p.userId) ? hpEmail(d.noHp) : '';
      if (pw && !(p && p.userId) && pw.length < 8) { pesanDlg('Password awal minimal 8 karakter.', 'pg_pass'); return false; }
      const pinData = {}, pb = String(d.passwordBaru || '');
      if (pb && pb.length < 8) { pesanDlg('Password baru minimal 8 karakter.', 'pg_reset'); return false; }
      if (ker.load) { pesanDlg('Tunggu, foto masih diunggah.'); return false; }
      const row = {...(p || {}), foto: ker.url || '', nama: d.nama.trim(), jabatan: String(d.jabatan || '').trim(), noHp: String(d.noHp || '').trim(), peranId: d.peranId, wargaId: d.wargaId || '', aktif: d.aktif !== '0', mulai: d.mulai || '', userId: (p && p.userId) || '', email: (p && p.email) || '', diperbarui: todayISO()};
      delete row.pinHash; delete row.pinSalt;
      if (!p) row.dibuat = todayISO();
      const pid = pidAwal;
      if (await seedRoles() === false) return false;
      let akunBaru = false;
      if (email && pw && !row.userId) {
        try { row.userId = await buatAkunAuth(email, pw); row.email = ''; akunBaru = true; } catch (e) { pesanDlg(/sudah dipakai|registered/i.test(String(e && e.message)) ? 'No. HP ini sudah dipakai akun login lain.' : pesanAuth(e), 'f_hp'); return false; }
      }
      const ok = await put('pengurus', pid, row);
      if (!ok) return false;
      pgFotoHapus([ker.awal, ...ker.baru].filter(u => u && u !== row.foto)); pgFotoKerja = null; S.struktur = null;
      if (row.userId) {
        try { await SB.rpc('admin_konfirmasi_user', {target: row.userId}); } catch (e) {}
        try { if (row.aktif) await simpanProfil({user_id: row.userId, nama: row.nama, peran: 'pengurus', pengurus_id: pid, warga_id: row.wargaId || null, ...(akunBaru ? {wajib_ganti: true} : {})}); else await hapusProfil(row.userId); }
        catch (e) { pesanDlg('Data tersimpan, tetapi akses login gagal diatur: ' + pesanAuth(e)); return false; }
      }
      if (pb && row.userId) { try { await resetPassword(row.userId, pb); } catch (e) { pesanDlg('Data tersimpan, tetapi reset password gagal: ' + pesanAuth(e)); return false; } }
      if (email && pw) setTimeout(() => tampilLoginPengurus(row, hpTampil(row.noHp), pw), 50);
      else if (pb && row.userId) setTimeout(() => tampilLoginPengurus(row, hpTampil(row.noHp), pb), 50);
      else toast(p ? 'Data pengurus diperbarui.' : `${row.nama} ditambahkan sebagai ${(roleById(row.peranId) || {}).nama || 'pengurus'}.`);
      return true;
    },
    onDelete: p ? async () => {
      try { await hapusProfil(p.userId); } catch (e) { pesanDlg('Gagal mencabut akses login: ' + pesanAuth(e)); return false; }
      const ok = await del('pengurus', p.id); if (ok) { pgFotoHapus([p.foto, ...ker.baru]); pgFotoKerja = null; S.struktur = null; toast(`${p.nama} dihapus dari daftar pengurus.`); } return ok;
    } : null,
    deleteLabel: 'Hapus pengurus'
  });
  pgRenderFoto(x.nama);
  pasangFoto(ker, () => pgFotoKerja);
}
let pgFotoKerja = null, pkFotoKerja = null;
const PG_FOTO_PREFIX = '/object/public/pengurus/';
function renderFoto(k, nm) {
  const box = k && $(k.box); if (!box) return;
  const n = nm || ($(k.namaSel) && $(k.namaSel).value) || '?', src = k.prev || k.url;
  box.innerHTML = `${src ? `<img class="pg-av${k.load ? ' load' : ''}" src="${esc(src)}" alt="Foto">` : `<span class="pg-av av-i" aria-hidden="true">${esc(orgInisial(n))}</span>`}
    ${k.ro ? '' : `<div class="pg-foto-b"><label class="btn sm" for="${k.file}">${k.url ? 'Ganti foto' : 'Unggah foto'}</label>${k.url && !k.load ? `<button type="button" class="btn sm ghost" data-act="${k.del}">Hapus foto</button>` : ''}${k.load ? '<span class="muted" style="font-size:.84rem">Mengunggah…</span>' : ''}</div>`}`;
}
function pasangFoto(k, aktif) {
  const f = $('#' + k.file); if (!f) return;
  f.addEventListener('change', async () => {
    const file = f.files[0]; f.value = ''; if (!file) return;
    if (!/^image\//.test(file.type)) { toast('Pilih file gambar.', 'bad'); return; }
    k.load = true; k.prev = URL.createObjectURL(file); renderFoto(k);
    try { const u = await pgUnggahFoto(file, k.pid); k.baru.push(u); k.url = u; }
    catch (e) { toast('Foto gagal diunggah' + (e && e.message ? ': ' + e.message : '') + '.', 'bad'); }
    k.load = false; URL.revokeObjectURL(k.prev); k.prev = null; if (aktif() === k) renderFoto(k);
  });
}
const pgRenderFoto = nm => renderFoto(pgFotoKerja, nm);
async function kecilkanPersegi(file, ukuran = 480, q = 0.85) {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
    const sisi = Math.min(img.naturalWidth, img.naturalHeight), sx = (img.naturalWidth - sisi) / 2, sy = Math.max(0, (img.naturalHeight - sisi) * 0.3);
    const u = Math.min(ukuran, sisi), c = document.createElement('canvas'); c.width = c.height = u;
    const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, u, u); g.drawImage(img, sx, sy, sisi, sisi, 0, 0, u, u);
    return await new Promise(res => c.toBlob(res, 'image/jpeg', q));
  } finally { URL.revokeObjectURL(url); }
}
async function pgUnggahFoto(file, pid) {
  if (!SB) throw new Error('Tidak terhubung');
  const blob = await kecilkanPersegi(file); if (!blob) throw new Error('Foto tidak bisa dibaca');
  if (blob.size > 500000) throw new Error('Foto terlalu besar');
  const path = `${String(pid).toLowerCase().replace(/[^a-z0-9_-]/g, '')}/${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}.jpg`;
  const {error} = await SB.storage.from('pengurus').upload(path, blob, {contentType: 'image/jpeg', cacheControl: '31536000', upsert: false});
  if (error) throw error;
  return SB.storage.from('pengurus').getPublicUrl(path).data.publicUrl;
}
function pgFotoHapus(urls) {
  const p = (urls || []).map(u => { const i = String(u || '').indexOf(PG_FOTO_PREFIX); return i < 0 ? null : decodeURIComponent(String(u).slice(i + PG_FOTO_PREFIX.length)); }).filter(Boolean);
  if (p.length && SB) SB.storage.from('pengurus').remove(p).catch(() => {});
}
const fotoAman = u => typeof u === 'string' && u.includes(PG_FOTO_PREFIX) && /^https:\/\//.test(u) ? u : (typeof u === 'string' && /^blob:/.test(u) ? u : '');
function tampilLoginPengurus(p, email, pw) {
  const teks = `Halo ${p.nama},\n\nBerikut akun pengurus aplikasi Warga ${lingk()}:\n\nAlamat: ${location.origin}${location.pathname.replace(/index\.html$/, '')}\nNo. HP: ${email}\nPassword: ${pw}\n\nMasuk dengan No. HP dan password di atas. Saat pertama masuk Anda akan diminta membuat password pribadi. Jangan berikan password ini kepada orang lain.`;
  const bisaWa = p.noHp && waNomor(p.noHp).length >= 10;
  openDlg({
    title: 'Login pengurus siap',
    body: `<div class="kw"><div class="kw-h"><div><b>${esc(p.nama)}</b><span class="l">${esc(p.jabatan || 'Pengurus')}</span></div><span class="chip ok">Aktif</span></div>
      <dl class="kw-d"><dt>No. HP</dt><dd class="mono">${esc(email)}</dd><dt>Password</dt><dd class="mono">${esc(pw)}</dd></dl></div>
      <p class="muted" style="margin:0;font-size:.84rem">Password ini hanya ditampilkan sekarang. Kirim ke pengurus sebelum menutup jendela ini.</p>`,
    foot: `${bisaWa ? `<a class="btn wa" href="${esc(waLink(p.noHp, teks))}" target="_blank" rel="noopener">Kirim ke WhatsApp</a>` : ''}<button type="button" class="btn" data-act="salin" data-teks="${esc(teks)}">Salin</button>`
  });
}
function openPemilikHp() {
  const kini = hpDariEmail(S.authUser && S.authUser.email);
  openDlg({title: 'No. HP login Pemilik', area: 'admin', submitLabel: 'Simpan',
    body: `<div class="fld"><label for="ph_hp">No. HP <span class="req">*</span></label><input type="tel" id="ph_hp" name="hp" inputmode="tel" required value="${esc(kini)}" placeholder="08xxxxxxxxxx"></div>
      <p class="muted" style="margin:0;font-size:.84rem">Setelah disimpan, Anda masuk dengan No. HP ini dan password yang sama. ${kini ? '' : 'Email lama tidak bisa dipakai login lagi.'}</p>`,
    onSubmit: async d => {
      if (!hpValid(d.hp)) { pesanDlg('No. HP minimal 10 digit.', 'ph_hp'); return false; }
      const dipakai = loginTerpakai(d.hp); if (dipakai) { pesanDlg(`No. HP ini sudah dipakai login ${dipakai}.`, 'ph_hp'); return false; }
      try { await ubahEmail(S.me.id, hpEmail(d.hp)); } catch (e) { pesanDlg(/sudah dipakai/i.test(String(e && e.message)) ? 'No. HP ini sudah dipakai akun login lain.' : pesanAuth(e), 'ph_hp'); return false; }
      S.authUser = {...S.authUser, email: hpEmail(d.hp)}; render();
      toast(`No. HP login diatur: ${hpTampil(d.hp)}. Masuk berikutnya pakai No. HP ini.`); return true;
    }});
}
function openPinPemilik() {
  const ada = !!S.keamanan.pinHash;
  openDlg({
    title: ada ? 'Ganti PIN Pemilik' : 'Atur PIN Pemilik', area: 'admin',
    body: `<div class="fld"><label for="pp_pin">PIN baru</label><input type="password" id="pp_pin" name="pin" inputmode="numeric" maxlength="6" autocomplete="new-password" placeholder="4–6 angka" ${ada ? '' : 'required'}></div>
    <div class="fld"><label for="pp_pin2">Ulangi PIN</label><input type="password" id="pp_pin2" name="pin2" inputmode="numeric" maxlength="6" autocomplete="new-password"></div>
    <p class="muted" style="margin:0;font-size:.84rem">Simpan PIN ini baik-baik. Jika lupa, buka aplikasi dari akun Anda dan atur ulang di menu Admin.</p>`,
    onSubmit: async d => {
      if (!/^\d{4,6}$/.test(d.pin || '')) { pesanDlg('PIN harus 4–6 angka.', 'pp_pin'); return false; }
      if (d.pin !== d.pin2) { pesanDlg('Kedua PIN tidak sama.', 'pp_pin2'); return false; }
      try { await DB.doc('keamanan/pemilik').set(await buatPin(d.pin)); toast('PIN Pemilik disimpan.'); return true; } catch (e) { return fail(e); }
    },
    onDelete: ada ? async () => { try { await DB.doc('keamanan/pemilik').set({pinHash: '', pinSalt: ''}); toast('PIN Pemilik dihapus.'); return true; } catch (e) { return fail(e); } } : null,
    deleteLabel: 'Hapus PIN'
  });
}
async function seedRoles(except) {
  if (S.peran.length) return true;
  for (let i = 0; i < DEFAULT_ROLES.length; i++) {
    const r = DEFAULT_ROLES[i]; if (r.id === except) continue;
    if (!await put('peran', r.id, {nama: r.nama, ket: r.ket, izin: r.izin, urut: i})) return false;
  }
  return true;
}
function openRole(id) {
  const r = id ? roleById(id) : null;
  const x = r || {nama: '', ket: '', izin: {...semua('tidak'), ringkasan: 'lihat'}};
  const dipakai = r ? S.pengurus.filter(p => p.peranId === r.id).length : 0;
  openDlg({
    title: r ? `Ubah role ${r.nama}` : 'Tambah role', area: 'admin',
    body: `<div class="fld"><label for="rl_nama">Nama role <span class="req">*</span></label><input type="text" id="rl_nama" name="nama" required value="${esc(x.nama)}" placeholder="mis. Seksi Keamanan"></div>
    <div class="fld"><label for="rl_ket">Keterangan</label><input type="text" id="rl_ket" name="ket" value="${esc(x.ket)}" placeholder="Tugas singkat role ini"></div>
    <div class="fld"><label>Hak akses per menu</label>
      <div class="izin-grid">${MENU_IZIN_UI.map(([m, l]) => `<label for="iz_${m}">${esc(l)}</label><select id="iz_${m}" name="iz_${m}">${(m === 'ringkasan' || m === 'portal' ? ['tidak', 'lihat'] : m === 'lapak' ? ['lihat', 'kelola'] : ['tidak', 'lihat', 'kelola']).map(v => `<option value="${v}" ${(izinRole(x, m) || (m === 'lapak' ? 'lihat' : 'tidak')) === v ? 'selected' : ''}>${m === 'lapak' ? (v === 'kelola' ? 'Lihat + moderasi' : 'Lihat saja') : LVL_LBL[v]}</option>`).join('')}</select>`).join('')}</div>
      <span class="hint">Menu yang "Tidak bisa buka" disembunyikan dari pengurus dengan role ini. Menu Admin hanya untuk Pemilik.</span></div>
    ${dipakai ? `<p class="muted" style="margin:0;font-size:.84rem">Dipakai oleh ${dipakai} pengurus. Perubahan langsung berlaku untuk mereka.</p>` : ''}`,
    onSubmit: async d => {
      const nm = d.nama.trim();
      if (rolesAll().some(q => q.id !== (r && r.id) && q.nama.toLowerCase() === nm.toLowerCase())) { pesanDlg(`Role "${nm}" sudah ada.`, 'rl_nama'); return false; }
      const iz = Object.fromEntries(MENU_IZIN.map(([m]) => [m, d['iz_' + m] || 'tidak']));
      const rid = r ? r.id : 'r_' + uid();
      if (await seedRoles(rid) === false) return false;
      const ok = await put('peran', rid, {nama: nm, ket: String(d.ket || '').trim(), izin: iz, urut: r && r.urut !== undefined ? r.urut : (r ? DEFAULT_ROLES.findIndex(q => q.id === r.id) : 50)});
      if (ok) toast(r ? `Role ${nm} diperbarui.` : `Role ${nm} ditambahkan.`);
      return ok;
    },
    onDelete: r ? async () => {
      if (dipakai) { pesanDlg(`Role ini masih dipakai ${dipakai} pengurus. Pindahkan mereka ke role lain dulu.`); return false; }
      if (rolesAll().length <= 1) { pesanDlg('Minimal harus ada satu role.'); return false; }
      if (await seedRoles(r.id) === false) return false;
      const ok = await del('peran', r.id); if (ok) toast(`Role ${r.nama} dihapus.`); return ok;
    } : null,
    deleteLabel: 'Hapus role'
  });
}
async function migrasiAkses() {
  if (!DB) return;
  if (await seedRoles() === false) return;
  let n = 0;
  for (const a of S.akses) {
    if (S.pengurus.some(p => p.userId === a.id)) { try { await DB.collection('akses').doc(a.id).delete(); } catch (e) {} continue; }
    const ok = await put('pengurus', uid(), {nama: nama(a.id), jabatan: a.peran || '', noHp: '', peranId: LEGACY[a.peran] || 'pengurus', aktif: true, mulai: a.disetujui || todayISO(), userId: a.id, dibuat: todayISO()});
    if (!ok) return;
    try { await DB.collection('akses').doc(a.id).delete(); } catch (e) {}
    n++;
  }
  toast(`${n} pengurus dipindahkan.`);
}

/* ---------- fitur tambahan: helper umum ---------- */
const KOLEKSI = ['warga', 'iuran', 'keluhan', 'kas', 'pengumuman', 'surat', 'tamu', 'paket', 'titip', 'kejadian'];
const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const ROMAWI = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
const tglPanjang = iso => { if (!iso) return '—'; const [y, m, d] = iso.slice(0, 10).split('-').map(Number); return `${HARI[new Date(y, m - 1, d).getDay()]}, ${d} ${BLN_L[m - 1]} ${y}`; };
const tglSurat = iso => { const [y, m, d] = iso.slice(0, 10).split('-').map(Number); return `${d} ${BLN_L[m - 1]} ${y}`; };
function terbilang(n) {
  n = Math.floor(Math.abs(Number(n) || 0));
  const s = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  const f = x => x < 12 ? s[x] : x < 20 ? f(x - 10) + ' belas' : x < 100 ? f(Math.floor(x / 10)) + ' puluh ' + f(x % 10)
    : x < 200 ? 'seratus ' + f(x - 100) : x < 1000 ? f(Math.floor(x / 100)) + ' ratus ' + f(x % 100)
    : x < 2000 ? 'seribu ' + f(x - 1000) : x < 1e6 ? f(Math.floor(x / 1000)) + ' ribu ' + f(x % 1000)
    : x < 1e9 ? f(Math.floor(x / 1e6)) + ' juta ' + f(x % 1e6) : f(Math.floor(x / 1e9)) + ' miliar ' + f(x % 1e9);
  const r = f(n).replace(/\s+/g, ' ').trim();
  return r ? r.charAt(0).toUpperCase() + r.slice(1) + ' rupiah' : 'Nol rupiah';
}
function waNomor(hp) { let d = String(hp || '').replace(/\D/g, ''); if (!d) return ''; if (d.startsWith('0')) d = '62' + d.slice(1); else if (d.startsWith('8')) d = '62' + d; return d; }
const waLink = (hp, text) => `https://wa.me/${waNomor(hp)}?text=${encodeURIComponent(text)}`;
const waShare = text => `https://wa.me/?text=${encodeURIComponent(text)}`;
const lingk = () => S.set.nama || 'Villani 5';
const pengirim = () => `Pengurus ${lingk()}`;
async function salin(text) {
  try { await navigator.clipboard.writeText(text); toast('Teks disalin. Tempel di WhatsApp atau aplikasi lain.'); }
  catch (e) {
    openDlg({title: 'Salin teks', body: `<p class="muted" style="margin:0">Tekan lama atau Ctrl+C untuk menyalin.</p><textarea id="salinTa" rows="12" readonly>${esc(text)}</textarea>`});
    const ta = $('#salinTa'); if (ta) { ta.focus(); ta.select(); }
  }
}
function btnIngatkan(w, ringkas) {
  if (!bisa('iuran')) return '';
  if (!w.noHp || waNomor(w.noHp).length < 10 || !tunggakan(w)) return '';
  return `<a class="btn sm wa" href="${esc(waLink(w.noHp, teksPengingat(w)))}" target="_blank" rel="noopener" title="Kirim pengingat lewat WhatsApp">${ringkas ? 'WA' : 'Ingatkan'}</a>`;
}
function teksPengingat(w) {
  const list = tunggakanList(w);
  return `Yth. Bapak/Ibu ${w.nama} (${w.blok}),\n\nKami mengingatkan iuran warga ${lingk()} sebesar ${rp(nominal())} per bulan.\n`
    + `Belum terbayar: ${list.length} bulan (${list.map(p => perLbl(p)).join(', ')}), total ${rp(list.length * nominal())}.\n\n`
    + (jtHari() ? `Jatuh tempo pembayaran setiap tanggal ${jtHari()}. Iuran ${perLbl(list[list.length - 1] || nowPer())} jatuh tempo ${tgl(tglTempo(list[list.length - 1] || nowPer()))}.\n\n` : '')
    + `Pembayaran bisa melalui bendahara. Mohon abaikan pesan ini bila sudah membayar.\nTerima kasih.\n\n${pengirim()}`;
}
const MIME = {csv: 'text/csv;charset=utf-8', pdf: 'application/pdf', html: 'text/html;charset=utf-8', txt: 'text/plain;charset=utf-8', json: 'application/json'};
async function unduh(filename, data) {
  try {
    const ext = String(filename).split('.').pop().toLowerCase();
    const blob = data instanceof Blob ? data : new Blob([typeof data === 'string' && ext === 'csv' ? '\ufeff' + data : data], {type: MIME[ext] || 'application/octet-stream'});
    const url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    toast('File diunduh: ' + filename);
  } catch (e) { toast('File tidak bisa diunduh di perangkat ini.', 'bad'); }
}
const fname = s => String(s).replace(/[\\/:*?"<>|]+/g, '-').replace(/\s+/g, ' ').trim();

/* ---------- kwitansi ---------- */
function kwNomor(p) { const w = wById(p.wargaId) || {}; return `KW/${p.periode.replace('-', '')}/${String(w.blok || '').replace(/[^A-Za-z0-9]/g, '')}`; }
function teksKwitansi(p) {
  const w = wById(p.wargaId) || {};
  return `KWITANSI IURAN WARGA\n${lingk()}\n\nNo: ${kwNomor(p)}\nTelah diterima dari: ${w.nama} (${w.blok})\nUntuk: Iuran bulan ${perLbl(p.periode, true)}\n`
    + `Sebesar: ${rp(p.jumlah)}\nTerbilang: ${terbilang(p.jumlah)}\nTanggal bayar: ${tgl(p.tanggal)} (${p.metode || 'Tunai'})\n\nTerima kasih.\n${pengirim()}`;
}
function openKwitansi(pid) {
  const p = S.iuran.find(x => x.id === pid); if (!p) return;
  if (isWarga() && (!wargaSaya() || p.wargaId !== wargaSaya().id)) return;
  const w = wById(p.wargaId) || {nama: '?', blok: ''}, teks = teksKwitansi(p);
  const bisaWa = w.noHp && waNomor(w.noHp).length >= 10;
  openDlg({
    title: 'Kwitansi iuran', area: 'iuran',
    body: `<div class="kw">
      <div class="kw-h"><div><b>KWITANSI IURAN WARGA</b><span class="l">${esc(lingk())}</span></div><span class="chip ok">Lunas</span></div>
      <dl class="kw-d">
        <dt>No.</dt><dd class="mono">${esc(kwNomor(p))}</dd>
        <dt>Diterima dari</dt><dd>${esc(w.nama)} · ${esc(w.blok)}</dd>
        <dt>Untuk</dt><dd>Iuran bulan ${esc(perLbl(p.periode, true))}</dd>
        <dt>Tanggal bayar</dt><dd>${esc(tgl(p.tanggal))}</dd>
        <dt>Metode</dt><dd>${esc(p.metode || 'Tunai')}</dd>
        ${p.catatan ? `<dt>Catatan</dt><dd>${esc(p.catatan)}</dd>` : ''}
      </dl>
      <div class="kw-amt"><span>${esc(rp(p.jumlah))}</span><em>${esc(terbilang(p.jumlah))}</em></div>
    </div>
    ${bisaWa || !bisa('iuran') ? '' : '<p class="muted" style="margin:0;font-size:.82rem">No. HP warga ini belum diisi, jadi kwitansi tidak bisa dikirim langsung ke WhatsApp-nya. Gunakan Salin teks.</p>'}`,
    foot: `${bisa('iuran') && !isWarga() ? `<button type="button" class="btn ghost" data-act="iur-koreksi" data-id="${esc(p.id)}" style="color:var(--bad);margin-right:auto">Koreksi pembayaran</button>` : ''}${bisaWa && bisa('iuran') ? `<a class="btn wa" href="${esc(waLink(w.noHp, teks))}" target="_blank" rel="noopener">Kirim ke WhatsApp</a>` : ''}${isWarga() ? '' : `<button type="button" class="btn" data-act="salin" data-teks="${esc(teks)}">Salin teks</button>`}`,
    onDelete: null
  });
}

/* ---------- menu lainnya (HP) ---------- */
function openLainnya() {
  const items = TABS.filter(([k]) => !PRIMER.includes(k) && tabBoleh(k));
  if (isWarga()) { const u = k => { const i = URUT_W.indexOf(k); return i < 0 ? 99 : i; }; items.sort((a, b) => u(a[0]) - u(b[0])); }
  openDlg({title: 'Menu lainnya', body: `<div class="menu-grid">${items.map(([k, l]) => `<button type="button" class="tab" data-act="tab" data-k="${k}" aria-selected="${S.tab === k}">${ico(k)}<span class="ll">${l}</span>${k === 'admin' && S.minta.length ? `<span class="chip bad plain">${S.minta.length} permintaan</span>` : ''}</button>`).join('')}</div>`});
}

/* ---------- kas ---------- */
const KAT_KELUAR = ['Kebersihan & sampah', 'Keamanan / satpam', 'Listrik & air fasum', 'Perbaikan fasilitas', 'Kegiatan warga', 'Sosial / duka / sakit', 'Administrasi & ATK', 'Lainnya'];
const KAT_MASUK = ['Donasi', 'Sewa fasilitas', 'Iuran khusus / kegiatan', 'Bantuan pemerintah', 'Lainnya'];
const katOpts = (jenis, val) => (jenis === 'masuk' ? KAT_MASUK : KAT_KELUAR).map(k => `<option ${k === val ? 'selected' : ''}>${k}</option>`).join('');
const saldoCutoff = () => { const d = S.keuangan.find(x => x.id === 'saldoAwal'); return d ? {jumlah: Number(d.jumlah) || 0, tanggal: d.tanggal || '', catatan: d.catatan || '', oleh: d.olehNama || '', diatur: d.diatur || ''} : {jumlah: Number(S.set.saldoAwal) || 0, tanggal: S.set.saldoTgl || '', catatan: '', oleh: '', diatur: ''}; };
function kasSemua() {
  const byTgl = new Map();
  for (const p of S.iuran) { if (!p.tanggal) continue; const g = byTgl.get(p.tanggal) || {n: 0, j: 0}; g.n++; g.j += Number(p.jumlah) || 0; byTgl.set(p.tanggal, g); }
  const auto = [...byTgl].map(([t, g]) => ({id: 'iur_' + t, jenis: 'masuk', tanggal: t, kategori: 'Iuran warga', uraian: `Iuran warga · ${g.n} pembayaran`, jumlah: g.j, auto: true}));
  const mulai = saldoCutoff().tanggal;
  const sb = sbKasRows();
  return [...auto, ...sb.masuk, ...sb.keluar, ...S.kas.filter(x => x.tanggal)].filter(x => !mulai || x.tanggal >= mulai);
}
const nilai = x => (x.jenis === 'masuk' ? 1 : -1) * (Number(x.jumlah) || 0);
const saldoSebelum = iso => saldoCutoff().jumlah + kasSemua().filter(x => x.tanggal < iso).reduce((s, x) => s + nilai(x), 0);
const saldoKini = () => saldoSebelum('9999-12-31');
function rekapKas(per) {
  const list = kasSemua().filter(x => x.tanggal.slice(0, 7) === per).sort((a, b) => a.tanggal.localeCompare(b.tanggal) || (a.auto ? -1 : 1));
  const masuk = list.filter(x => x.jenis === 'masuk').reduce((s, x) => s + (Number(x.jumlah) || 0), 0);
  const keluar = list.filter(x => x.jenis !== 'masuk').reduce((s, x) => s + (Number(x.jumlah) || 0), 0);
  const awal = saldoSebelum(per + '-01');
  const perKat = {}; for (const x of list) if (x.jenis !== 'masuk') perKat[x.kategori] = (perKat[x.kategori] || 0) + (Number(x.jumlah) || 0);
  const iur = list.filter(x => x.auto && x.kategori === 'Iuran warga').reduce((s, x) => s + x.jumlah, 0);
  return {list, masuk, keluar, awal, akhir: awal + masuk - keluar, perKat, iur};
}
function teksLaporanKas(per) {
  const r = rekapKas(per);
  const kat = Object.entries(r.perKat).sort((a, b) => b[1] - a[1]).map(([k, v]) => `  - ${k}: ${rp(v)}`).join('\n');
  return `*Laporan Kas ${lingk()}*\n${perLbl(per, true)}\n\nSaldo awal: ${rp(r.awal)}\nPemasukan: ${rp(r.masuk)}\n  - Iuran warga: ${rp(r.iur)}\n  - Lainnya: ${rp(r.masuk - r.iur)}\n`
    + `Pengeluaran: ${rp(r.keluar)}${kat ? '\n' + kat : ''}\n*Saldo akhir: ${rp(r.akhir)}*\n\n${pengirim()}`;
}
function vKas() {
  const r = rekapKas(S.kasPer);
  const head = `<div class="sec-head"><div><h2>Buku kas RT</h2><p>Pemasukan iuran tercatat otomatis. Catat pemasukan lain dan pengeluaran di sini.</p></div>
    <div class="monthnav"><button class="btn sm" data-act="kper" data-n="-1" aria-label="Bulan sebelumnya">‹</button><strong>${esc(perLbl(S.kasPer))}</strong><button class="btn sm" data-act="kper" data-n="1" aria-label="Bulan berikutnya">›</button>
    ${S.kasPer !== nowPer() ? '<button class="btn ghost sm" data-act="kper" data-n="0">Bulan ini</button>' : ''}</div></div>`;
  let run = r.awal;
  const rows = r.list.map(x => { run += nilai(x); return {...x, saldo: run}; });
  const maxKat = Math.max(1, ...Object.values(r.perKat));
  const rowsT = rows.map(x => `<tr>
      <td class="num">${esc(tgl(x.tanggal))}</td>
      <td><div style="font-weight:600">${esc(x.uraian)}</div><div class="muted" style="font-size:.78rem">${esc(x.kategori)}</div></td>
      <td class="r num in">${x.jenis === 'masuk' ? esc(rp(x.jumlah)) : ''}</td>
      <td class="r num out">${x.jenis !== 'masuk' ? esc(rp(x.jumlah)) : ''}</td>
      <td class="r num">${esc(rp(x.saldo))}</td>
      <td class="r">${x.auto ? x.src === 'sb' ? `<button class="btn ghost sm" data-act="sb-buka" data-id="${esc(x.programId)}">Lihat sumbangan</button>` : (lihat('iuran') ? `<button class="btn ghost sm" data-act="tab" data-k="iuran">Lihat iuran</button>` : '') : `<button class="btn sm" data-act="kas-edit" data-id="${esc(x.id)}">${bisa('kas') ? 'Ubah' : 'Lihat'}</button>`}</td></tr>`).join('');
  const rowsM = rows.map(x => `<div class="row"><div class="grow"><div class="t">${esc(x.uraian)}</div><div class="s">${esc(tgl(x.tanggal))} · ${esc(x.kategori)}</div></div>
      <span class="${x.jenis === 'masuk' ? 'amt-in' : 'amt-out'} num">${x.jenis === 'masuk' ? '+' : '−'}${esc(nf.format(x.jumlah))}</span>
      ${x.auto ? (x.src === 'sb' ? `<button class="btn ghost sm" data-act="sb-buka" data-id="${esc(x.programId)}" aria-label="Lihat sumbangan">›</button>` : '') : `<button class="btn ghost sm" data-act="kas-edit" data-id="${esc(x.id)}" aria-label="Ubah">›</button>`}</div>`).join('');
  return head + `
  <div class="tiles">
    <div class="tile"><span class="lbl">Saldo awal</span><span class="val">${esc(rp(r.awal))}</span><span class="sub">per 1 ${esc(perLbl(S.kasPer, true))}</span></div>
    <div class="tile"><span class="lbl">Pemasukan</span><span class="val" style="color:var(--ok)">${esc(rp(r.masuk))}</span><span class="sub">iuran ${esc(rp(r.iur))}</span></div>
    <div class="tile"><span class="lbl">Pengeluaran</span><span class="val" style="color:var(--bad)">${esc(rp(r.keluar))}</span><span class="sub">${r.list.filter(x => x.jenis !== 'masuk').length} transaksi</span></div>
    <div class="tile"><span class="lbl">Saldo akhir</span><span class="val">${esc(rp(r.akhir))}</span><span class="sub">${r.akhir >= r.awal ? 'naik' : 'turun'} ${esc(rp(Math.abs(r.akhir - r.awal)))}</span></div>
  </div>
  <div class="toolbar">
    <button class="btn pri" data-act="kas-new" ${dis('kas')}>+ Catat transaksi</button>
    <a class="btn wa" href="${esc(waShare(teksLaporanKas(S.kasPer)))}" target="_blank" rel="noopener">Bagikan laporan ke WhatsApp</a>
    <button class="btn" data-act="kas-csv">Unduh laporan (CSV)</button>
  </div>
  ${Object.keys(r.perKat).length ? `<div class="panel"><h3>Pengeluaran per kategori <small>${esc(perLbl(S.kasPer, true))}</small></h3><div class="cat-bars">
    ${Object.entries(r.perKat).sort((a, b) => b[1] - a[1]).map(([k, v]) => `<div class="cat-bar"><span>${esc(k)}</span><span class="num">${esc(rp(v))}</span><div class="tr"><i style="width:${v / maxKat * 100}%"></i></div></div>`).join('')}
  </div></div>` : ''}
  ${rows.length ? `<div class="tbl-wrap hide-m"><table><thead><tr><th>Tanggal</th><th>Uraian</th><th class="r">Masuk</th><th class="r">Keluar</th><th class="r">Saldo</th><th></th></tr></thead><tbody>${rowsT}</tbody></table></div>
  <div class="list-mobile">${rowsM}</div>` : `<div class="empty">Belum ada transaksi di ${esc(perLbl(S.kasPer, true))}.</div>`}`;
}
function openKas(id, area = 'kas') {
  const k = id ? S.kas.find(x => x.id === id) : null;
  const x = k || {jenis: 'keluar', tanggal: todayISO(), kategori: KAT_KELUAR[0], metode: 'Tunai'};
  const ro = dis(area), hanyaKeluar = area === 'pengeluaran';
  openDlg({
    title: hanyaKeluar ? (k ? (bisa(area) ? 'Ubah pengeluaran' : 'Pengeluaran') : 'Catat pengeluaran') : k ? (bisa('kas') ? 'Ubah transaksi kas' : 'Transaksi kas') : 'Catat transaksi kas', area,
    body: `<div class="grid2">
      ${hanyaKeluar ? '<input type="hidden" id="kas_jenis" name="jenis" value="keluar">' : `<div class="fld"><label for="kas_jenis">Jenis</label><select id="kas_jenis" name="jenis" ${ro}><option value="keluar" ${x.jenis !== 'masuk' ? 'selected' : ''}>Pengeluaran</option><option value="masuk" ${x.jenis === 'masuk' ? 'selected' : ''}>Pemasukan</option></select></div>`}
      <div class="fld"><label for="kas_tgl">Tanggal <span class="req">*</span></label><input type="date" id="kas_tgl" name="tanggal" required value="${esc(x.tanggal)}" ${ro}></div>
    </div>
    <div class="fld"><label for="kas_kat">Kategori</label><select id="kas_kat" name="kategori" ${ro}>${katOpts(x.jenis, x.kategori)}</select></div>
    <div class="fld"><label for="kas_ur">Uraian <span class="req">*</span></label><input type="text" id="kas_ur" name="uraian" required value="${esc(x.uraian)}" placeholder="mis. Angkut sampah bulan Oktober" ${ro}></div>
    <div class="grid2">
      <div class="fld"><label for="kas_jml">Jumlah (Rp) <span class="req">*</span></label><input type="number" id="kas_jml" name="jumlah" min="1" step="500" required value="${esc(x.jumlah)}" ${ro}></div>
      <div class="fld"><label for="kas_met">Metode</label><select id="kas_met" name="metode" ${ro}>${METODE.map(m => `<option ${x.metode === m ? 'selected' : ''}>${m}</option>`).join('')}</select></div>
    </div>
    <div class="grid2 kas-keluar"${x.jenis === 'masuk' ? ' hidden' : ''}>
      <div class="fld"><label for="kas_pen">Dibayar kepada</label><input type="text" id="kas_pen" name="penerima" value="${esc(x.penerima)}" placeholder="mis. Pak Darto (petugas sampah)" ${ro}></div>
      <div class="fld"><label for="kas_nota">No. nota / kuitansi</label><input type="text" id="kas_nota" name="noNota" value="${esc(x.noNota)}" placeholder="opsional" ${ro}></div>
    </div>
    <div class="fld"><label for="kas_cat">Catatan</label><input type="text" id="kas_cat" name="catatan" value="${esc(x.catatan)}" placeholder="mis. nota disimpan bendahara" ${ro}></div>`,
    onSubmit: async d => {
      const jumlah = Math.round(Number(d.jumlah) || 0);
      if (jumlah <= 0) { pesanDlg('Jumlah harus lebih dari 0.', 'kas_jml'); return false; }
      const row = {...(k || {}), ...d, uraian: d.uraian.trim(), jumlah, penerima: String(d.penerima || '').trim(), noNota: String(d.noNota || '').trim(), diperbarui: todayISO()};
      if (d.jenis === 'masuk') { row.penerima = ''; row.noNota = ''; }
      if (!k) row.dibuat = todayISO();
      const ok = await put('kas', k ? k.id : uid(), row);
      if (ok) { toast(`${d.jenis === 'masuk' ? 'Pemasukan' : 'Pengeluaran'} ${rp(jumlah)} tercatat.`); S.kasPer = d.tanggal.slice(0, 7); if (hanyaKeluar) { S.pgPer = d.tanggal.slice(0, 7); S.pgTh = Number(d.tanggal.slice(0, 4)); } }
      return ok;
    },
    onDelete: k ? async () => { const ok = await del('kas', k.id); if (ok) toast('Transaksi dihapus.'); return ok; } : null,
    deleteLabel: 'Hapus transaksi'
  });
}

/* ---------- pengeluaran ---------- */
const pgSemua = () => [...S.kas.filter(x => x.jenis !== 'masuk' && x.tanggal), ...sbKasRows().keluar];
function pgRentang() {
  if (S.pgMode === 'tahun') { const y = S.pgTh; return {awal: y + '-01-01', akhir: y + '-12-31', lbl: 'Tahun ' + y, prevAwal: (y - 1) + '-01-01', prevAkhir: (y - 1) + '-12-31', prevLbl: 'tahun ' + (y - 1)}; }
  const p = S.pgPer, pv = addM(p, -1);
  return {awal: p + '-01', akhir: p + '-31', lbl: perLbl(p, true), prevAwal: pv + '-01', prevAkhir: pv + '-31', prevLbl: perLbl(pv, true)};
}
const pgDalam = (a, b) => pgSemua().filter(x => x.tanggal >= a && x.tanggal <= b);
const pgTotal = l => l.reduce((s, x) => s + (Number(x.jumlah) || 0), 0);
function pgChart() {
  const pts = S.pgMode === 'tahun'
    ? Array.from({length: 12}, (_, i) => { const p = S.pgTh + '-' + pad(i + 1); return {lbl: BLN[i], v: pgTotal(pgDalam(p + '-01', p + '-31')), cur: p === nowPer()}; })
    : [-5, -4, -3, -2, -1, 0].map(n => { const p = addM(S.pgPer, n); return {lbl: BLN[Number(p.slice(5)) - 1], v: pgTotal(pgDalam(p + '-01', p + '-31')), cur: n === 0}; });
  const max = Math.max(1, ...pts.map(p => p.v)), sm = window.innerWidth < 640;
  const W = sm ? 360 : 440, H = 230, L = 6, R = 6, T = 24, B = 26, ih = H - T - B, bw = (W - L - R) / pts.length;
  const sing = v => v >= 1e6 ? (v / 1e6).toFixed(v >= 1e7 ? 0 : 1).replace('.', ',') + ' jt' : v >= 1e3 ? Math.round(v / 1e3) + ' rb' : v ? String(v) : '–';
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Pengeluaran per bulan"><line x1="${L}" x2="${W - R}" y1="${T + ih}" y2="${T + ih}" stroke="var(--line)"/>`;
  pts.forEach((p, i) => {
    const w = bw * (pts.length > 6 ? .62 : .5), x = L + i * bw + (bw - w) / 2, h = p.v / max * ih, y = T + ih - h;
    s += `<rect x="${x}" y="${y}" width="${w}" height="${Math.max(h, p.v ? 2 : 0)}" rx="5" fill="${p.cur ? 'var(--tulip)' : 'var(--bad)'}" fill-opacity="${p.cur ? .95 : .32}"/>`;
    if (!sm || pts.length <= 6) s += `<text class="vlbl" x="${x + w / 2}" y="${y - 6}" text-anchor="middle">${sing(p.v)}</text>`;
    s += `<text x="${x + w / 2}" y="${H - 8}" text-anchor="middle"${p.cur ? ' style="fill:var(--ink);font-weight:700"' : ''}>${p.lbl}</text>`;
  });
  return s + '</svg>';
}
/* ---------- CAPTCHA Cloudflare Turnstile di halaman login ---------- */
const TS = {key: null, muat: null, id: null, el: null, token: '', cfg: false};
async function tsKonfig() {
  if (TS.cfg || !SB) return; TS.cfg = true;
  try { const {data} = await SB.rpc('login_config'); TS.key = (data && data.turnstile) || null; } catch (e) { TS.key = null; }
  if (TS.key && !sudahMasuk()) render();
}
const tsSlot = () => TS.key ? '<div class="ts-box" id="tsBox" aria-label="Verifikasi anti-bot"></div><span class="hint" id="tsInfo" style="text-align:center"></span>' : '';
function tsSkrip() {
  if (TS.muat) return TS.muat;
  TS.muat = new Promise((ok, gagal) => {
    window.__tsSiap = () => ok();
    const sc = document.createElement('script'); sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=__tsSiap'; sc.async = true; sc.defer = true;
    sc.onerror = () => { TS.muat = null; gagal(new Error('Turnstile gagal dimuat')); }; document.head.appendChild(sc);
  });
  return TS.muat;
}
async function tsPasang() {
  if (!TS.cfg) { tsKonfig(); return; }
  const box = document.getElementById('tsBox'); if (!TS.key || !box) return;
  if (TS.el === box && TS.id !== null) return;
  try { await tsSkrip(); } catch (e) { const i = $('#tsInfo'); if (i) i.textContent = 'Verifikasi anti-bot tidak bisa dimuat. Periksa koneksi lalu muat ulang halaman.'; return; }
  const b2 = document.getElementById('tsBox'); if (!b2 || !window.turnstile) return;
  if (TS.id !== null) { try { window.turnstile.remove(TS.id); } catch (e) {} }
  TS.token = ''; TS.el = b2;
  TS.id = window.turnstile.render(b2, {sitekey: TS.key, language: 'id', theme: 'auto', appearance: 'interaction-only', action: 'login',
    callback: t => { TS.token = t; const i = $('#tsInfo'); if (i) i.textContent = ''; },
    'expired-callback': () => { TS.token = ''; }, 'error-callback': () => { TS.token = ''; const i = $('#tsInfo'); if (i) i.textContent = 'Verifikasi anti-bot gagal. Coba muat ulang halaman.'; }});
}
function tsAmbil(msg) {
  if (!TS.key) return null;
  if (!TS.token) { (msg || (() => {}))('Tunggu sebentar, verifikasi anti-bot sedang berjalan, lalu tekan lagi.'); tsPasang(); return false; }
  return TS.token;
}
function tsReset() { if (TS.key && window.turnstile && TS.id !== null) { TS.token = ''; try { window.turnstile.reset(TS.id); } catch (e) {} } }

/* ---------- Tampilan pengurus / warga (untuk pengurus & pemilik yang juga warga) ---------- */
const bisaModeWarga = () => !!(S.profil && S.profil.peran !== 'warga' && S.profil.warga_id && wById(S.profil.warga_id) && S.sesiAsli);
const modeKey = () => 'mode-warga:' + ((S.authUser && S.authUser.id) || '');
function modeTersimpan() { try { return localStorage.getItem(modeKey()) === '1'; } catch (e) { return false; } }
function gantiMode(keWarga) {
  if (!S.authUser || !S.sesiAsli) return;
  if (keWarga && !bisaModeWarga()) { toast('Akun ini belum tertaut ke rumah di Data warga.', 'bad'); return; }
  if (dlg.open) dlg.close();
  S.modeWarga = !!keWarga; S.sesi = keWarga ? 'w:' + S.authUser.id : S.sesiAsli; S.tab = keWarga ? 'portal' : 'ringkasan';
  try { localStorage.setItem(modeKey(), keWarga ? '1' : '0'); localStorage.setItem(modeKey() + ':kenal', '1'); } catch (e) {}
  render(); window.scrollTo(0, 0); onlineDetak(true);
  toast(keWarga ? `Tampilan warga · ${(wargaSaya() || {}).blok || ''}` : 'Tampilan pengurus');
}
function modeBar() {
  if (S.terkunci || !sudahMasuk() || !bisaModeWarga()) return '';
  let kenal = true; try { kenal = localStorage.getItem(modeKey() + ':kenal') === '1'; } catch (e) {}
  const w = wById(S.profil.warga_id) || {};
  return `<div class="mode-bar" role="group" aria-label="Pilih tampilan">
    <span class="mode-lbl">Tampilan</span>
    <div class="seg"><button type="button" data-act="mode-ke" data-k="pengurus" aria-pressed="${!S.modeWarga}">🛡️ ${S.sesiAsli === 'pemilik' ? 'Pemilik' : 'Pengurus'}</button><button type="button" data-act="mode-ke" data-k="warga" aria-pressed="${!!S.modeWarga}">🏠 Warga ${esc(w.blok || '')}</button></div>
    ${kenal ? '' : `<span class="mode-info">Anda juga tercatat sebagai warga rumah <b>${esc(w.blok || '')}</b>. Pilih “Warga” untuk melihat iuran rumah Anda, lapor keluhan, SOS, titip rumah, dan berjualan di Lapak (bila diizinkan). <button type="button" class="linkbtn" data-act="mode-kenal">Mengerti</button></span>`}
  </div>`;
}
function openPemilikRumah() {
  if (!bisaKelola() || !S.profil) return;
  const kini = S.profil.warga_id || '';
  openDlg({title: 'Rumah Pemilik', area: 'admin', submitLabel: 'Simpan',
    body: `<p style="margin:0">Tautkan akun Pemilik ke rumah Anda di Data warga agar bisa memakai <b>tampilan warga</b> (iuran rumah, lapor keluhan, SOS, titip rumah, Lapak).</p>
      <div class="fld"><label for="pr_w">Rumah / data warga</label><select id="pr_w" name="wargaId"><option value="">— tidak ditautkan —</option>${S.warga.filter(w => w.status !== 'Pindah').sort(sortHouse).map(w => `<option value="${esc(w.id)}" ${w.id === kini ? 'selected' : ''}>${esc(w.blok)} · ${esc(w.nama)}</option>`).join('')}</select></div>`,
    onSubmit: async d => {
      try { await simpanProfil({...S.profil, warga_id: d.wargaId || null}); } catch (e) { pesanDlg('Gagal menyimpan: ' + pesanAuth(e)); return false; }
      S.profil = {...S.profil, warga_id: d.wargaId || null};
      toast(d.wargaId ? 'Rumah Pemilik ditautkan. Tombol “Tampilan Warga” muncul di atas.' : 'Tautan rumah dilepas.'); return true;
    }});
}

/* ---------- Kunci aplikasi: sidik jari / wajah (WebAuthn perangkat) atau PIN ---------- */
const kunciKey = () => 'kunci-app:' + ((S.authUser && S.authUser.id) || '');
function kunciCfg() { try { return JSON.parse(localStorage.getItem(kunciKey()) || '{}') || {}; } catch (e) { return {}; } }
function kunciSimpan(c) { try { if (!c.bio && !c.pin) localStorage.removeItem(kunciKey()); else localStorage.setItem(kunciKey(), JSON.stringify(c)); } catch (e) {} }
const kunciAda = () => { const c = kunciCfg(); return !!(c.bio || c.pin); };
const kb64u = buf => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const kunb64u = s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)), c => c.charCodeAt(0));
async function bioTersedia() { try { return !!(window.PublicKeyCredential && await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()); } catch (e) { return false; } }
async function pinHash(pin, salt, iter) {
  const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(pin), 'PBKDF2', false, ['deriveBits']);
  return kb64u(await crypto.subtle.deriveBits({name: 'PBKDF2', hash: 'SHA-256', salt: kunb64u(salt), iterations: iter}, k, 256));
}
function kunciSekarang() { if (!kunciAda() || !sudahMasuk()) return; if (dlg.open) dlg.close(); S.terkunci = true; S.kunciPesan = ''; render(); window.scrollTo(0, 0); }
function kunciBuka() { setTimeout(() => onlineDetak(true), 300); S.terkunci = false; S.kunciPesan = ''; idleAkhir = Date.now(); try { localStorage.removeItem(kunciKey() + ':gagal'); } catch (e) {} render(); toast('Selamat datang, ' + namaSesi().split(' ')[0] + '.'); }
function vKunci() {
  const c = kunciCfg(), n = namaSesi();
  return `<div class="kunci"><span class="ava" aria-hidden="true">${esc(orgInisial(n))}</span><div><h2>Halo, ${esc(n.split(' ')[0])}</h2><p class="muted" style="margin:4px 0 0">Aplikasi terkunci. ${c.bio ? 'Gunakan sidik jari / wajah' : 'Masukkan PIN'}${c.bio && c.pin ? ' atau PIN' : ''} untuk membuka.</p></div>
    ${c.bio ? `<button class="btn pri bio" data-act="kunci-bio"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 11v3.5M8.5 11a3.5 3.5 0 0 1 7 0v2.5c0 2.2-.6 4.3-1.7 6"/><path d="M5.5 9.5a7 7 0 0 1 13 0M5 13.5c0 2.6.7 5 2 7M19 12.5c0 1.6-.2 3.2-.6 4.7"/><path d="M8 4.5a8.5 8.5 0 0 1 8 0"/></svg>Buka dengan sidik jari / wajah</button>` : ''}
    ${c.pin ? `<form id="kunciPinForm" autocomplete="off"><label for="kunciPin" class="muted" style="font-size:.86rem">PIN aplikasi</label><input type="password" id="kunciPin" class="pin" inputmode="numeric" pattern="[0-9]*" maxlength="${c.pin.len || 6}" autocomplete="off" ${c.bio ? '' : 'autofocus'} aria-label="PIN aplikasi"><button class="btn" type="submit">Buka</button></form>` : ''}
    ${S.kunciPesan ? `<p style="color:var(--bad);margin:0" role="alert">${esc(S.kunciPesan)}</p>` : ''}
    <button class="btn ghost sm" data-act="kunci-pw">Masuk dengan No. HP &amp; password</button></div>`;
}
async function kunciAutoBio() { if (S.terkunci && kunciCfg().bio && !/iPhone|iPad|iPod/.test(navigator.userAgent)) await bukaBio(true); else { const p = $('#kunciPin'); if (p) p.focus(); } }
async function bukaBio(diam) {
  const c = kunciCfg(); if (!c.bio) return;
  try {
    const cr = await navigator.credentials.get({publicKey: {challenge: crypto.getRandomValues(new Uint8Array(32)), rpId: location.hostname, timeout: 60000, userVerification: 'required', allowCredentials: [{type: 'public-key', id: kunb64u(c.bio), transports: ['internal', 'hybrid']}]}});
    const ad = cr && cr.response && new Uint8Array(cr.response.authenticatorData);
    if (!cr || kb64u(cr.rawId) !== c.bio || !ad || !(ad[32] & 0x04)) throw new Error('Verifikasi gagal');
    kunciBuka();
  } catch (e) { if (!diam) { S.kunciPesan = /NotAllowed|abort/i.test(String(e && e.name)) ? 'Verifikasi dibatalkan. Coba lagi' + (c.pin ? ' atau pakai PIN.' : '.') : 'Sidik jari / wajah tidak bisa dipakai di perangkat ini.' + (c.pin ? ' Pakai PIN.' : ''); render(); } }
}
async function cekPin(pin) {
  const c = kunciCfg(); if (!c.pin) return;
  let gagal = 0; try { gagal = Number(localStorage.getItem(kunciKey() + ':gagal')) || 0; } catch (e) {}
  if (await pinHash(pin, c.pin.s, c.pin.i) === c.pin.h) { kunciBuka(); return; }
  gagal++; try { localStorage.setItem(kunciKey() + ':gagal', String(gagal)); } catch (e) {}
  if (gagal >= 5) { kunciSimpan({}); try { localStorage.removeItem(kunciKey() + ':gagal'); } catch (e) {} try { await SB.auth.signOut(); } catch (e) {} resetSesi(); render(); muatInfoPublik(); toast('PIN salah 5 kali. Demi keamanan Anda dikeluarkan, silakan masuk dengan password.', 'bad'); return; }
  S.kunciPesan = `PIN salah. Sisa ${5 - gagal} percobaan.`; render(); const p = $('#kunciPin'); if (p) p.focus();
}
async function openKeamananAkun() {
  if (S.terkunci) { toast('Buka kunci aplikasi terlebih dahulu.', 'bad'); return; }
  const c = kunciCfg(), bio = await bioTersedia();
  openDlg({title: 'Keamanan akun',
    body: `<div class="ka-row"><div><div class="t">Password</div><div class="s">Dipakai saat masuk dengan No. HP.</div></div><button type="button" class="btn sm" data-act="ka-pass">Ganti password</button></div>
      <div class="ka-row"><div><div class="t">Sidik jari / wajah</div><div class="s">${bio ? (c.bio ? 'Aktif di perangkat ini.' : 'Buka aplikasi memakai sensor sidik jari, Face ID, atau kunci layar HP.') : 'Perangkat / browser ini tidak mendukung.'}</div></div>${bio ? (c.bio ? '<button type="button" class="btn sm ghost" data-act="ka-bio-off">Matikan</button>' : '<button type="button" class="btn sm pri" data-act="ka-bio-on">Aktifkan</button>') : ''}</div>
      <div class="ka-row"><div><div class="t">PIN aplikasi</div><div class="s">${c.pin ? `Aktif (${c.pin.len || 6} angka).` : '4–6 angka untuk membuka aplikasi, cadangan bila sidik jari gagal.'}</div></div><div style="display:flex;gap:6px">${c.pin ? '<button type="button" class="btn sm ghost" data-act="ka-pin-off">Hapus</button>' : ''}<button type="button" class="btn sm${c.pin ? '' : ' pri'}" data-act="ka-pin">${c.pin ? 'Ubah' : 'Atur PIN'}</button></div></div>
      ${c.bio || c.pin ? '<button type="button" class="btn" data-act="ka-kunci">🔒 Kunci aplikasi sekarang</button>' : ''}
      <p class="muted" style="margin:0;font-size:.82rem">Bila sidik jari atau PIN aktif, aplikasi tetap masuk di perangkat ini tetapi <b>terkunci otomatis</b> saat dibuka ulang atau setelah 5 menit tidak dipakai, tanpa perlu mengetik password lagi. Pengaturan ini hanya berlaku di perangkat ini. PIN salah 5 kali akan mengeluarkan akun.</p>`});
}
async function aktifkanBio() {
  if (!await bioTersedia()) { toast('Perangkat ini tidak mendukung sidik jari / wajah.', 'bad'); return; }
  try {
    const cr = await navigator.credentials.create({publicKey: {challenge: crypto.getRandomValues(new Uint8Array(32)), rp: {name: 'Warga Kasuari', id: location.hostname},
      user: {id: crypto.getRandomValues(new Uint8Array(16)), name: hpDariEmail(S.authUser && S.authUser.email) || (S.authUser && S.authUser.email) || 'pengguna', displayName: namaSesi()},
      pubKeyCredParams: [{type: 'public-key', alg: -7}, {type: 'public-key', alg: -257}], timeout: 60000, attestation: 'none',
      authenticatorSelection: {authenticatorAttachment: 'platform', userVerification: 'required', residentKey: 'discouraged'}}});
    if (!cr) throw new Error('Batal');
    kunciSimpan({...kunciCfg(), bio: kb64u(cr.rawId), bioDibuat: todayISO()});
    toast('Sidik jari / wajah aktif. Aplikasi akan terkunci saat dibuka ulang.'); openKeamananAkun();
  } catch (e) { toast(/NotAllowed|abort/i.test(String(e && e.name)) ? 'Pendaftaran sidik jari dibatalkan.' : 'Gagal mengaktifkan: ' + ((e && e.message) || e), 'bad'); openKeamananAkun(); }
}
function openAturPin() {
  if (S.terkunci) return;
  openDlg({title: 'Atur PIN aplikasi', submitLabel: 'Simpan PIN',
    body: `<div class="fld"><label for="ap_1">PIN baru (4–6 angka)</label><input type="password" id="ap_1" name="pin" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="new-password" required></div>
      <div class="fld"><label for="ap_2">Ulangi PIN</label><input type="password" id="ap_2" name="pin2" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="new-password" required></div>
      <p class="muted" style="margin:0;font-size:.82rem">Hindari PIN mudah ditebak seperti 123456, 000000, atau tanggal lahir.</p>`,
    onSubmit: async d => {
      const p = String(d.pin || '');
      if (!/^\d{4,6}$/.test(p)) { pesanDlg('PIN harus 4–6 angka.', 'ap_1'); return false; }
      if (/^(\d)\1+$/.test(p) || '0123456789'.includes(p) || '9876543210'.includes(p)) { pesanDlg('PIN terlalu mudah ditebak. Pilih kombinasi lain.', 'ap_1'); return false; }
      if (p !== d.pin2) { pesanDlg('Kedua PIN tidak sama.', 'ap_2'); return false; }
      const salt = kb64u(crypto.getRandomValues(new Uint8Array(16))), iter = 150000;
      kunciSimpan({...kunciCfg(), pin: {h: await pinHash(p, salt, iter), s: salt, i: iter, len: p.length}});
      toast('PIN aplikasi disimpan.'); setTimeout(openKeamananAkun, 50); return true;
    }});
}
function kunciTawaran() {
  if (S.terkunci || !sudahMasuk() || !['ringkasan', 'portal'].includes(S.tab) || kunciAda()) return '';
  try { if (localStorage.getItem(kunciKey() + ':tawar')) return ''; } catch (e) { return ''; }
  return `<div class="notice" style="display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap"><span>👆 Buka aplikasi lebih cepat dengan <b>sidik jari, wajah, atau PIN</b>, tanpa mengetik password.</span><span style="display:flex;gap:6px"><button class="btn sm pri" data-act="kunci-tawar">Atur sekarang</button><button class="btn sm ghost" data-act="kunci-tawar-x">Nanti</button></span></div>`;
}
function dlgTutupTawar() { try { localStorage.setItem(kunciKey() + ':tawar', '1'); } catch (e) {} }
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && S.authUser && !S.terkunci && sudahMasuk() && kunciAda() && Date.now() - idleAkhir >= KUNCI_MS) kunciSekarang(); });
document.addEventListener('submit', e => { if (e.target && e.target.id === 'kunciPinForm') { e.preventDefault(); const v = ($('#kunciPin') || {}).value || ''; if (v) cekPin(v); } });
document.addEventListener('input', e => { if (e.target && e.target.id === 'kunciPin') { const c = kunciCfg(); if (c.pin && e.target.value.length === (c.pin.len || 6)) cekPin(e.target.value); } });

/* ---------- Kebersihan lingkungan ---------- */
const JENIS_SAMPAH = [['Sampah rumah tangga (campur)', '#7a6a58'], ['Sampah organik', '#2f8f4e'], ['Sampah anorganik / daur ulang', '#2f6f9f'], ['Sampah besar / puing / ranting', '#b7791f'], ['Sampah B3 (baterai, lampu, obat)', '#b42318']];
const JENIS_KG_BERSIH = ['Kerja bakti', 'Fogging / PSN demam berdarah', 'Pembersihan saluran / got', 'Pemangkasan pohon & taman', 'Angkut sampah besar / puing', 'Penyemprotan disinfektan', 'Bank sampah / pilah sampah', 'Lainnya'];
const AREA_BERSIH = ['Jalan utama & gang', 'Saluran air / got', 'Taman & pohon', 'Fasum / balai warga', 'TPS / bak sampah', 'Pos jaga & gerbang'];
const ST_AREA = ['Bersih', 'Perlu perhatian', 'Belum dicek'];
const HARI_BR = [1, 2, 3, 4, 5, 6, 0];
const TIPS_BERSIH = ['Pilah sampah organik dan anorganik sebelum dibuang.', 'Keluarkan sampah sesuai jadwal angkut, dalam kantong tertutup.', 'Dilarang membakar sampah di lingkungan perumahan.', 'Jangan membuang sampah, minyak, atau puing ke saluran air.', 'Lakukan 3M Plus seminggu sekali: menguras, menutup, mendaur ulang, dan cegah gigitan nyamuk.', 'Sampah besar (kasur, puing, ranting) dikumpulkan saat jadwal angkut sampah besar.'];
const brSet = () => S.bersih.find(x => x.id === 'set') || {};
const brJadwal = () => (brSet().jadwal || []);
const brWarna = j => (JENIS_SAMPAH.find(x => x[0] === j) || [, '#7a6a58'])[1];
const brKegiatan = () => S.bersih.filter(x => x.tipe === 'kegiatan').sort((a, b) => String(a.tanggal).localeCompare(String(b.tanggal)) || String(a.jam || '').localeCompare(String(b.jam || '')));
const brCek = () => S.bersih.filter(x => x.tipe === 'cek').sort((a, b) => String(b.tanggal).localeCompare(String(a.tanggal)));
const brKeluhan = () => S.keluhan.filter(k => k.kategori === 'Kebersihan & sampah');
const isoHari = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
function brAngkutPada(iso) { const h = new Date(iso + 'T00:00').getDay(); return brJadwal().filter(j => (j.hari || []).map(Number).includes(h)).sort((a, b) => String(a.jam || '').localeCompare(String(b.jam || ''))); }
function brAngkutBerikut() {
  for (let i = 0; i < 8; i++) { const d = new Date(); d.setDate(d.getDate() + i); const iso = isoHari(d), l = brAngkutPada(iso);
    const sisa = i === 0 ? l.filter(j => !j.jam || j.jam >= new Date().toTimeString().slice(0, 5)) : l; if (sisa.length) return {iso, list: sisa, hari: i}; }
  return null;
}
const brKgBerikut = () => brKegiatan().find(k => k.tanggal >= todayISO() && k.status !== 'Batal');
const hariLbl = n => n === 0 ? 'Hari ini' : n === 1 ? 'Besok' : HARI[new Date(Date.now() + n * 864e5).getDay()];
let petugasBr = null;
async function muatPetugasBr() {
  if (petugasBr && Date.now() - petugasBr.t < 60000) return petugasBr.list;
  try { const {data, error} = await SB.rpc('petugas_kebersihan'); petugasBr = {t: Date.now(), list: !error && Array.isArray(data) ? data.filter(p => p.nama) : []}; }
  catch (e) { petugasBr = {t: Date.now(), list: []}; }
  return petugasBr.list;
}
function vBersih() {
  const w = isWarga(), kel = bisa('kebersihan');
  if (w && !['beranda', 'jadwal', 'kegiatan'].includes(S.brTab)) S.brTab = 'beranda';
  const lapBuka = brKeluhan().filter(k => k.status !== 'Selesai').length;
  const tabs = [['beranda', 'Beranda'], ['jadwal', 'Jadwal sampah'], ['kegiatan', 'Kegiatan'], ...(w ? [] : [['cek', 'Cek harian'], ['laporan', 'Laporan warga']])];
  const head = `<div class="sec-head"><div><h2>Kebersihan lingkungan</h2><p>Jadwal angkut sampah, kerja bakti & fogging, pengecekan harian petugas, dan laporan kebersihan dari warga.</p></div>
    ${w ? '<button class="btn pri" data-act="br-lapor">+ Lapor masalah kebersihan</button>' : ''}</div>
    <div class="toolbar"><div class="seg km-seg" role="group" aria-label="Bagian kebersihan">${tabs.map(([k, l]) => `<button type="button" data-act="brtab" data-k="${k}" aria-pressed="${S.brTab === k}">${l}${k === 'laporan' && lapBuka ? ` <span class="seg-ct">${lapBuka}</span>` : ''}</button>`).join('')}</div></div>`;
  return head + ({beranda: brBeranda, jadwal: brJadwalV, kegiatan: brKegiatanV, cek: brCekV, laporan: brLaporanV}[S.brTab] || brBeranda)();
}
function brAngkutTeks(b) { return b ? `${b.list.map(j => `<span class="br-dot" style="background:${brWarna(j.jenis)}"></span>${esc(j.jenis.replace(/ \(.*\)$/, ''))}${j.jam ? ' · ' + esc(j.jam) : ''}`).join('<br>')}` : '<span class="muted">Belum ada jadwal</span>'; }
function brBeranda() {
  const w = isWarga(), b = brAngkutBerikut(), kg = brKgBerikut(), st = brSet(), cek = brCek().find(c => c.tanggal === todayISO());
  const lap = brKeluhan(), lapBuka = lap.filter(k => k.status !== 'Selesai');
  const okArea = cek ? AREA_BERSIH.filter(a => (cek.area || {})[a] === 'Bersih').length : 0;
  const tips = String(st.aturan || '').trim() ? String(st.aturan).split('\n').map(x => x.trim()).filter(Boolean) : TIPS_BERSIH;
  return `<div class="tiles">
    <div class="tile"><span class="lbl">Angkut sampah ${b ? esc(hariLbl(b.hari).toLowerCase()) : ''}</span><span class="val" style="font-size:1rem;line-height:1.45;white-space:normal;overflow:visible">${brAngkutTeks(b)}</span><span class="sub">${b ? esc(tglPanjang(b.iso)) : 'Atur di tab Jadwal sampah'}</span></div>
    <div class="tile"><span class="lbl">Kegiatan berikutnya</span><span class="val" style="font-size:1rem;white-space:normal;overflow:visible">${kg ? esc(kg.judul || kg.jenis) : '<span class="muted">Belum ada</span>'}</span><span class="sub">${kg ? `${esc(tglPanjang(kg.tanggal))}${kg.jam ? ' · ' + esc(kg.jam) : ''}${kg.lokasi ? ' · ' + esc(kg.lokasi) : ''}` : 'Kerja bakti, fogging, dll.'}</span></div>
    ${w ? `<div class="tile"><span class="lbl">Laporan saya</span><span class="val">${lapBuka.length}</span><span class="sub">laporan kebersihan sedang diproses</span></div>`
      : `<div class="tile"><span class="lbl">Cek harian hari ini</span><span class="val">${cek ? okArea + ' / ' + AREA_BERSIH.length : '–'}</span><span class="sub">${cek ? 'area bersih' + (cek.petugas && cek.petugas.length ? ' · ' + esc(cek.petugas.join(', ')) : '') : 'Belum dicek petugas'}</span></div>
      <div class="tile"><span class="lbl">Laporan warga terbuka</span><span class="val">${lapBuka.length}</span><span class="sub">kategori Kebersihan & sampah</span></div>`}
  </div>
  <div class="br-grid">
    <div class="panel"><h3 style="margin:0 0 10px">Jadwal angkut minggu ini</h3>${brMinggu()}
      ${st.pengangkut || st.tps ? `<p class="muted" style="margin:10px 0 0;font-size:.86rem">${st.pengangkut ? 'Pengangkut: <b>' + esc(st.pengangkut) + '</b>' : ''}${st.hpPengangkut ? ` · <a href="${esc(waLink(st.hpPengangkut, 'Halo, dari ' + lingk() + '.'))}" target="_blank" rel="noopener">WhatsApp</a>` : ''}${st.tps ? `<br>Lokasi TPS / bak sampah: ${esc(st.tps)}` : ''}</p>` : ''}</div>
    <div class="panel"><h3 style="margin:0 0 10px">Aturan & tips kebersihan</h3><ul class="br-tips">${tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      ${w ? '<div class="toolbar" style="margin:12px 0 0"><button class="btn" data-act="br-lapor">Lapor sampah menumpuk / saluran mampet</button></div>' : ''}</div>
  </div>`;
}
function brMinggu() {
  const senin = new Date(); senin.setDate(senin.getDate() - ((senin.getDay() + 6) % 7));
  return `<div class="br-hari">${HARI_BR.map((h, i) => { const d = new Date(senin); d.setDate(senin.getDate() + i); const iso = isoHari(d), l = brAngkutPada(iso);
    return `<div class="d${iso === todayISO() ? ' ini' : ''}${l.length ? '' : ' kosong'}"><b>${HARI[h].slice(0, 3)}</b><span class="t">${d.getDate()}/${d.getMonth() + 1}</span>${l.length ? l.map(j => `<span class="j"><span class="br-dot" style="background:${brWarna(j.jenis)}"></span>${esc(j.jenis.replace(/ \(.*\)$/, ''))}</span>${j.jam ? `<span class="t">${esc(j.jam)}</span>` : ''}`).join('') : '<span class="j">–</span>'}</div>`; }).join('')}</div>`;
}
function brJadwalV() {
  const kel = bisa('kebersihan'), J = brJadwal(), st = brSet();
  return `<div class="panel"><div style="display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:10px"><h3 style="margin:0">Jadwal angkut sampah</h3>${kel ? '<button class="btn pri" data-act="br-jadwal">Atur jadwal</button>' : ''}</div>
    ${brMinggu()}
    ${J.length ? `<div class="tbl-wrap" style="margin-top:12px"><table><thead><tr><th>Jenis sampah</th><th>Hari</th><th>Jam</th><th>Keterangan</th></tr></thead><tbody>${J.map(j => `<tr><td><span class="br-dot" style="background:${brWarna(j.jenis)}"></span>${esc(j.jenis)}</td><td>${(j.hari || []).map(Number).sort((a, b) => ((a + 6) % 7) - ((b + 6) % 7)).map(h => HARI[h]).join(', ')}</td><td>${esc(j.jam || '–')}</td><td>${esc(j.ket || '')}</td></tr>`).join('')}</tbody></table></div>` : `<div class="empty">Jadwal angkut belum diatur.${kel ? '' : ' Hubungi koordinator kebersihan.'}</div>`}
    <dl class="kw-d" style="margin-top:12px"><dt>Pengangkut / petugas</dt><dd>${esc(st.pengangkut || '–')}${st.hpPengangkut ? ' · ' + esc(st.hpPengangkut) : ''}</dd><dt>Lokasi TPS / bak sampah</dt><dd>${esc(st.tps || '–')}</dd>${st.biaya ? `<dt>Iuran / biaya sampah</dt><dd>${esc(st.biaya)}</dd>` : ''}</dl></div>
    <div class="toolbar"><a class="btn wa" href="${esc(waShare(teksJadwalSampah()))}" target="_blank" rel="noopener">Bagikan jadwal ke WhatsApp</a></div>`;
}
function teksJadwalSampah() {
  const st = brSet();
  return `*Jadwal Angkut Sampah ${lingk()}*\n\n${brJadwal().map(j => `• ${j.jenis}: ${(j.hari || []).map(Number).sort((a, b) => ((a + 6) % 7) - ((b + 6) % 7)).map(h => HARI[h]).join(', ')}${j.jam ? ' jam ' + j.jam : ''}${j.ket ? ' (' + j.ket + ')' : ''}`).join('\n') || 'Belum diatur'}${st.tps ? `\n\nTPS / bak sampah: ${st.tps}` : ''}\n\nMohon pilah sampah dan keluarkan sesuai jadwal. Terima kasih.\n${pengirim()}`;
}
function openBrJadwal() {
  if (!bisa('kebersihan')) return;
  const st = brSet(), J = brJadwal().length ? brJadwal() : [{jenis: JENIS_SAMPAH[0][0], hari: [1, 3, 5], jam: '07:00', ket: ''}];
  const baris = (j, i) => `<div class="panel br-jrow" style="padding:10px;display:grid;gap:8px;background:var(--sunk)">
      <div class="grid2"><div class="fld" style="margin:0"><label>Jenis sampah</label><select name="jenis_${i}">${JENIS_SAMPAH.map(([n]) => `<option ${n === j.jenis ? 'selected' : ''}>${esc(n)}</option>`).join('')}</select></div>
        <div class="fld" style="margin:0"><label>Jam angkut</label><input type="time" name="jam_${i}" value="${esc(j.jam || '')}"></div></div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">${HARI_BR.map(h => `<label class="ck" style="font-weight:500;border:1px solid var(--line);border-radius:999px;padding:4px 10px"><input type="checkbox" name="hari_${i}_${h}" ${(j.hari || []).map(Number).includes(h) ? 'checked' : ''}> ${HARI[h].slice(0, 3)}</label>`).join('')}</div>
      <div style="display:flex;gap:8px"><input type="text" name="ket_${i}" value="${esc(j.ket || '')}" placeholder="Keterangan (opsional), mis. taruh di depan pagar" maxlength="80" style="flex:1"><button type="button" class="btn sm ghost" data-act="br-jrow-del" aria-label="Hapus baris">✕</button></div></div>`;
  openDlg({title: 'Atur jadwal angkut sampah', area: 'kebersihan', submitLabel: 'Simpan jadwal',
    body: `<div id="brJrows" style="display:grid;gap:8px">${J.map(baris).join('')}</div>
      <button type="button" class="btn sm" data-act="br-jrow-add">+ Tambah jenis / jadwal</button>
      <div class="grid2"><div class="fld"><label for="br_pg">Pengangkut / petugas sampah</label><input type="text" id="br_pg" name="pengangkut" value="${esc(st.pengangkut || '')}" maxlength="80" placeholder="mis. DLH Kab. Bogor / Pak Darto"></div>
        <div class="fld"><label for="br_hp">No. HP pengangkut</label><input type="tel" id="br_hp" name="hpPengangkut" value="${esc(st.hpPengangkut || '')}" maxlength="20"></div></div>
      <div class="grid2"><div class="fld"><label for="br_tps">Lokasi TPS / bak sampah</label><input type="text" id="br_tps" name="tps" value="${esc(st.tps || '')}" maxlength="100"></div>
        <div class="fld"><label for="br_by">Iuran / biaya sampah</label><input type="text" id="br_by" name="biaya" value="${esc(st.biaya || '')}" maxlength="80" placeholder="mis. termasuk iuran bulanan"></div></div>
      <div class="fld"><label for="br_at">Aturan & tips (satu baris satu poin)</label><textarea id="br_at" name="aturan" rows="4" maxlength="1500" placeholder="Kosongkan untuk memakai tips standar">${esc(st.aturan || '')}</textarea></div>`,
    onSubmit: async d => {
      const idx = [...new Set(Object.keys(d).filter(k => /^jenis_\d+$/.test(k)).map(k => k.split('_')[1]))];
      const jadwal = idx.map(i => ({jenis: d['jenis_' + i], jam: d['jam_' + i] || '', ket: String(d['ket_' + i] || '').trim(), hari: HARI_BR.filter(h => d[`hari_${i}_${h}`])})).filter(j => j.hari.length);
      if (idx.length && !jadwal.length) { pesanDlg('Centang minimal satu hari angkut.'); return false; }
      const ok = await put('bersih', 'set', {...st, tipe: 'set', jadwal, pengangkut: String(d.pengangkut || '').trim(), hpPengangkut: String(d.hpPengangkut || '').trim(), tps: String(d.tps || '').trim(), biaya: String(d.biaya || '').trim(), aturan: String(d.aturan || '').trim()});
      if (ok) toast('Jadwal kebersihan disimpan.'); return ok;
    }});
  window.__brBaris = baris;
}
function brKegiatanV() {
  const kel = bisa('kebersihan'), semua = brKegiatan(), f = S.brKgF;
  const list = f === 'lalu' ? semua.filter(k => k.tanggal < todayISO()).reverse() : semua.filter(k => k.tanggal >= todayISO());
  const tot = S.warga.filter(w => w.status !== 'Pindah').length;
  return `<div class="toolbar" style="justify-content:space-between"><div class="seg" role="group" aria-label="Saring kegiatan"><button type="button" data-act="br-kgf" data-k="datang" aria-pressed="${f !== 'lalu'}">Akan datang</button><button type="button" data-act="br-kgf" data-k="lalu" aria-pressed="${f === 'lalu'}">Sudah lewat</button></div>${kel ? '<button class="btn pri" data-act="br-kg-new">+ Kegiatan</button>' : ''}</div>
  ${list.length ? `<div class="kel-list">${list.map(k => `<article class="kel"><div class="meta"><span class="chip ${k.status === 'Selesai' ? 'ok' : k.status === 'Batal' ? 'bad' : 'info'} plain">${esc(k.status || 'Rencana')}</span><span class="chip mute plain">${esc(k.jenis)}</span><span>${esc(tglPanjang(k.tanggal))}${k.jam ? ' · ' + esc(k.jam) : ''}</span></div>
      <h4>${esc(k.judul || k.jenis)}</h4>${k.isi ? `<p>${esc(k.isi)}</p>` : ''}
      <div class="meta">${k.lokasi ? `<span>📍 ${esc(k.lokasi)}</span>` : ''}${k.perlengkapan ? `<span>🧰 Bawa: ${esc(k.perlengkapan)}</span>` : ''}${!isWarga() && (k.hadir || []).length ? `<span>👥 Hadir ${(k.hadir || []).length} dari ${tot} KK</span>` : ''}</div>
      ${k.hasil ? `<div class="resp"><b>Hasil</b>${esc(k.hasil)}</div>` : ''}
      ${kel ? `<div class="racts" style="margin-top:6px"><button class="btn sm" data-act="br-kg-edit" data-id="${esc(k.id)}">Ubah</button><button class="btn sm" data-act="br-hadir" data-id="${esc(k.id)}">Absensi warga</button>${bisa('info') ? `<button class="btn sm" data-act="br-umum" data-id="${esc(k.id)}">${S.pengumuman.some(p => p.sumberBersih === k.id) ? 'Perbarui pengumuman' : 'Umumkan'}</button>` : ''}<a class="btn sm wa" href="${esc(waShare(teksKgBersih(k)))}" target="_blank" rel="noopener">WhatsApp</a></div>` : `<div class="racts" style="margin-top:6px"><a class="btn sm wa" href="${esc(waShare(teksKgBersih(k)))}" target="_blank" rel="noopener">Bagikan</a></div>`}
    </article>`).join('')}</div>` : `<div class="empty">${f === 'lalu' ? 'Belum ada kegiatan yang lewat.' : 'Belum ada kegiatan terjadwal.'}${kel && f !== 'lalu' ? '<button class="btn pri" data-act="br-kg-new">+ Jadwalkan kerja bakti</button>' : ''}</div>`}`;
}
const teksKgBersih = k => `*${k.judul || k.jenis}*\n${tglPanjang(k.tanggal)}${k.jam ? ' · ' + k.jam : ''}${k.lokasi ? '\nTempat: ' + k.lokasi : ''}${k.isi ? '\n\n' + k.isi : ''}${k.perlengkapan ? '\n\nMohon membawa: ' + k.perlengkapan : ''}\n\n${pengirim()}`;
function openBrKegiatan(id) {
  const x = id ? S.bersih.find(k => k.id === id) : null, ro = dis('kebersihan');
  const v = x || {jenis: 'Kerja bakti', tanggal: (() => { const d = new Date(); d.setDate(d.getDate() + ((7 - d.getDay()) % 7 || 7)); return isoHari(d); })(), jam: '07:00', status: 'Rencana', perlengkapan: 'Sapu, cangkul, karung, sarung tangan'};
  openDlg({title: x ? 'Ubah kegiatan kebersihan' : 'Kegiatan kebersihan baru', area: 'kebersihan', submitLabel: x ? 'Simpan' : 'Simpan kegiatan',
    body: `<div class="grid2"><div class="fld"><label for="bk_j">Jenis kegiatan</label><select id="bk_j" name="jenis" ${ro}>${JENIS_KG_BERSIH.map(j => `<option ${j === v.jenis ? 'selected' : ''}>${esc(j)}</option>`).join('')}</select></div>
      <div class="fld"><label for="bk_s">Status</label><select id="bk_s" name="status" ${ro}>${['Rencana', 'Selesai', 'Batal'].map(j => `<option ${j === (v.status || 'Rencana') ? 'selected' : ''}>${j}</option>`).join('')}</select></div></div>
    <div class="fld"><label for="bk_n">Judul</label><input type="text" id="bk_n" name="judul" maxlength="100" value="${esc(v.judul || '')}" placeholder="mis. Kerja bakti bersih saluran blok SB" ${ro}></div>
    <div class="grid2"><div class="fld"><label for="bk_t">Tanggal <span class="req">*</span></label><input type="date" id="bk_t" name="tanggal" required value="${esc(v.tanggal || '')}" ${ro}></div>
      <div class="fld"><label for="bk_jm">Jam mulai</label><input type="time" id="bk_jm" name="jam" value="${esc(v.jam || '')}" ${ro}></div></div>
    <div class="fld"><label for="bk_l">Lokasi / titik kumpul</label><input type="text" id="bk_l" name="lokasi" maxlength="100" value="${esc(v.lokasi || '')}" placeholder="mis. Pos jaga depan" ${ro}></div>
    <div class="fld"><label for="bk_i">Keterangan</label><textarea id="bk_i" name="isi" rows="3" maxlength="1000" ${ro}>${esc(v.isi || '')}</textarea></div>
    <div class="fld"><label for="bk_p">Perlengkapan yang dibawa warga</label><input type="text" id="bk_p" name="perlengkapan" maxlength="150" value="${esc(v.perlengkapan || '')}" ${ro}></div>
    <div class="fld"><label for="bk_h">Hasil / catatan setelah kegiatan</label><textarea id="bk_h" name="hasil" rows="2" maxlength="800" placeholder="mis. 12 karung sampah terangkut, saluran blok SB lancar" ${ro}>${esc(v.hasil || '')}</textarea></div>`,
    onSubmit: async d => {
      const row = {...(x || {}), tipe: 'kegiatan', jenis: d.jenis, status: d.status, judul: String(d.judul || '').trim(), tanggal: d.tanggal, jam: d.jam || '', lokasi: String(d.lokasi || '').trim(), isi: String(d.isi || '').trim(), perlengkapan: String(d.perlengkapan || '').trim(), hasil: String(d.hasil || '').trim(), hadir: (x && x.hadir) || [], diperbarui: todayISO()};
      if (!x) row.dibuat = todayISO();
      const nid = x ? x.id : 'kg_' + uid(), ok = await put('bersih', nid, row);
      if (ok) { const pg = S.pengumuman.find(p => p.sumberBersih === nid); if (pg && bisa('info')) await brUmumkan({...row, id: nid}, true); toast(x ? 'Kegiatan diperbarui.' : 'Kegiatan dijadwalkan.' + (bisa('info') && !pg ? ' Klik "Umumkan" agar muncul di papan pengumuman warga.' : '')); }
      return ok;
    },
    onDelete: x ? async () => { const terkait = S.pengumuman.filter(p => p.sumberBersih === x.id); const ok = await del('bersih', x.id); if (ok) { let n = 0; if (bisa('info')) for (const p of terkait) if (await del('pengumuman', p.id)) n++; toast('Kegiatan dihapus' + (n ? ' beserta pengumumannya.' : '.')); } return ok; } : null, deleteLabel: 'Hapus kegiatan'});
}
async function brUmumkan(k, diam) {
  const ok = await put('pengumuman', 'pg-br-' + k.id, {sumberBersih: k.id, judul: k.judul || k.jenis, kategori: 'Kegiatan', isi: [k.isi, k.perlengkapan && 'Mohon membawa: ' + k.perlengkapan, k.status === 'Batal' && 'KEGIATAN DIBATALKAN'].filter(Boolean).join('\n'), tanggalAcara: k.tanggal, jam: k.jam || '', tempat: k.lokasi || '', sematkan: false, dibuat: todayISO(), diperbarui: todayISO()});
  if (ok && !diam) toast('Diumumkan di menu Pengumuman.'); return ok;
}
function openBrHadir(id) {
  const k = S.bersih.find(x => x.id === id); if (!k || !bisa('kebersihan')) return;
  const W = S.warga.filter(w => w.status !== 'Pindah').sort(sortHouse), h = new Set(k.hadir || []);
  openDlg({title: 'Absensi: ' + (k.judul || k.jenis), area: 'kebersihan', submitLabel: 'Simpan absensi',
    body: `<p class="muted" style="margin:0;font-size:.86rem">${esc(tglPanjang(k.tanggal))} · centang rumah yang mengirim perwakilan.</p>
      <div class="toolbar" style="margin:0"><button type="button" class="btn sm" data-act="br-hadir-semua">Pilih / hapus semua</button><span class="muted" id="brHadirN" style="font-size:.86rem">${h.size} dari ${W.length} KK</span></div>
      <div class="br-hadir">${W.map(w => `<label><input type="checkbox" name="h_${esc(w.id)}" ${h.has(w.id) ? 'checked' : ''}><span><b>${esc(w.blok)}</b> ${esc(w.nama)}</span></label>`).join('')}</div>`,
    onSubmit: async d => {
      const hadir = Object.keys(d).filter(x => x.startsWith('h_')).map(x => x.slice(2));
      const ok = await put('bersih', k.id, {...k, hadir, diperbarui: todayISO()}); if (ok) toast(`Absensi disimpan: ${hadir.length} KK hadir.`); return ok;
    }});
}
function brCekV() {
  const tg = S.brTgl, c = S.bersih.find(x => x.id === 'ck_' + tg), kel = bisa('kebersihan'), riw = brCek().slice(0, 14);
  return `<div class="toolbar" style="justify-content:space-between"><div class="monthnav"><button class="btn sm" data-act="br-tgl" data-n="-1" aria-label="Hari sebelumnya">‹</button><strong style="min-width:auto">${esc(tglPanjang(tg))}</strong><button class="btn sm" data-act="br-tgl" data-n="1" aria-label="Hari berikutnya">›</button>${tg !== todayISO() ? '<button class="btn ghost sm" data-act="br-tgl" data-n="0">Hari ini</button>' : ''}</div>${kel ? `<button class="btn pri" data-act="br-cek">${c ? 'Ubah cek' : '+ Isi cek harian'}</button>` : ''}</div>
  <div class="panel">${c ? `<div class="meta" style="margin-bottom:8px">Petugas: <b>${esc((c.petugas || []).join(', ') || '–')}</b> · Sampah diangkut: <b>${esc(c.diangkut || '–')}</b></div>
    <div class="br-area">${AREA_BERSIH.map(a => { const v = (c.area || {})[a] || 'Belum dicek'; return `<div class="r"><span>${esc(a)}</span><span class="chip ${v === 'Bersih' ? 'ok' : v === 'Perlu perhatian' ? 'warn' : 'mute'}">${esc(v)}</span></div>`; }).join('')}</div>
    ${c.catatan ? `<div class="resp" style="margin-top:10px"><b>Catatan</b>${esc(c.catatan)}</div>` : ''}` : `<div class="empty" style="margin:0">Belum ada pengecekan pada tanggal ini.</div>`}</div>
  ${riw.length ? `<h3 style="margin:18px 0 8px">Riwayat 14 cek terakhir</h3><div class="tbl-wrap"><table><thead><tr><th>Tanggal</th><th>Petugas</th><th>Area bersih</th><th>Diangkut</th><th>Catatan</th></tr></thead><tbody>${riw.map(r => { const ok = AREA_BERSIH.filter(a => (r.area || {})[a] === 'Bersih').length, pp = AREA_BERSIH.filter(a => (r.area || {})[a] === 'Perlu perhatian');
      return `<tr><td><button class="btn ghost sm" data-act="br-tgl-ke" data-k="${esc(r.tanggal)}">${esc(tgl(r.tanggal))}</button></td><td>${esc((r.petugas || []).join(', '))}</td><td>${ok}/${AREA_BERSIH.length}${pp.length ? `<div class="muted" style="font-size:.76rem">Perlu perhatian: ${esc(pp.join(', '))}</div>` : ''}</td><td>${esc(r.diangkut || '–')}</td><td>${esc(r.catatan || '')}</td></tr>`; }).join('')}</tbody></table></div>` : ''}`;
}
async function openBrCek() {
  if (!bisa('kebersihan')) return;
  const tg = S.brTgl, key = 'ck_' + tg, c = S.bersih.find(x => x.id === key) || {}, list = await muatPetugasBr();
  const kini = c.petugas || [], lain = kini.filter(n => !list.some(p => p.nama.toLowerCase() === n.toLowerCase()));
  openDlg({title: 'Cek kebersihan · ' + tglPanjang(tg), area: 'kebersihan', submitLabel: 'Simpan',
    body: `<div class="fld"><label>Petugas kebersihan</label>${list.length ? `<div class="jg-pilih">${list.map((p, i) => `<label class="jg-chip"><input type="checkbox" name="pk_${i}" value="${esc(p.nama)}" ${kini.some(k => k.toLowerCase() === p.nama.toLowerCase()) ? 'checked' : ''}><span><b>${esc(p.nama)}</b><small>${esc(p.jabatan || '')}</small></span></label>`).join('')}</div><span class="hint">Dari menu Pekerja &amp; gaji (petugas kebersihan aktif).</span>` : '<div class="notice" style="margin:0">Belum ada petugas kebersihan aktif di data Pekerja.</div>'}
      <input type="text" name="lain" value="${esc(lain.join(', '))}" placeholder="Petugas lain / pengganti (pisahkan dengan koma)" maxlength="120" style="margin-top:8px"></div>
    <div class="br-area">${AREA_BERSIH.map((a, i) => `<div class="r"><label for="ba_${i}">${esc(a)}</label><select id="ba_${i}" name="area_${i}">${ST_AREA.map(v => `<option ${v === ((c.area || {})[a] || 'Bersih') ? 'selected' : ''}>${v}</option>`).join('')}</select></div>`).join('')}</div>
    <div class="grid2"><div class="fld"><label for="bc_d">Sampah diangkut hari ini?</label><select id="bc_d" name="diangkut">${['', 'Ya', 'Tidak', 'Bukan jadwal angkut'].map(v => `<option value="${v}" ${v === (c.diangkut || '') ? 'selected' : ''}>${v || '— pilih —'}</option>`).join('')}</select></div></div>
    <div class="fld"><label for="bc_c">Catatan</label><textarea id="bc_c" name="catatan" rows="2" maxlength="500" placeholder="mis. got depan SB2 mampet, perlu dibersihkan">${esc(c.catatan || '')}</textarea></div>`,
    onSubmit: async d => {
      const petugas = [...new Set([...Object.keys(d).filter(k => /^pk_\d+$/.test(k)).map(k => d[k]), ...String(d.lain || '').split(',').map(x => x.trim()).filter(Boolean)])];
      const area = Object.fromEntries(AREA_BERSIH.map((a, i) => [a, d['area_' + i] || 'Belum dicek']));
      const ok = await put('bersih', key, {...c, tipe: 'cek', tanggal: tg, petugas, area, diangkut: d.diangkut || '', catatan: String(d.catatan || '').trim(), dicatatOleh: namaSesi()});
      if (ok) toast('Cek kebersihan disimpan.'); return ok;
    }});
}
function brLaporanV() {
  const L = brKeluhan().sort((a, b) => (a.status === 'Selesai') - (b.status === 'Selesai') || String(b.dibuat).localeCompare(String(a.dibuat)));
  const boleh = bisa('kebersihan') || bisa('keluhan');
  return `<p class="muted" style="margin:0 0 10px;font-size:.88rem">Laporan warga dengan kategori <b>Kebersihan & sampah</b>. Warga melapor lewat menu Keluhan saya atau tombol "Lapor masalah kebersihan".</p>
  ${L.length ? `<div class="kel-list">${L.map(k => { const w = S.warga.find(x => x.id === k.wargaId); return `<article class="kel p-${esc(k.prioritas)}"><div class="meta">${chipK(k.status)}<span>${esc(tgl(k.dibuat))}</span>${w ? `<span>${esc(w.blok)} · ${esc(w.nama)}</span>` : k.pelaporNama ? `<span>${esc(k.pelaporNama)}</span>` : ''}</div>
      <h4>${esc(k.judul)}</h4>${k.isi ? `<p>${esc(k.isi)}</p>` : ''}${k.lokasi ? `<div class="meta"><span>Lokasi: ${esc(k.lokasi)}</span></div>` : ''}${kelFoto(k)}
      ${k.tanggapan ? `<div class="resp"><b>Tanggapan</b>${esc(k.tanggapan)}</div>` : ''}
      ${boleh ? `<div class="racts" style="margin-top:6px"><button class="btn sm" data-act="br-tanggap" data-id="${esc(k.id)}">Tanggapi / ubah status</button></div>` : ''}</article>`; }).join('')}</div>` : '<div class="empty">Belum ada laporan kebersihan dari warga.</div>'}`;
}
function openBrTanggap(id) {
  const k = S.keluhan.find(x => x.id === id); if (!k) return;
  openDlg({title: 'Tanggapi laporan', area: bisa('keluhan') ? 'keluhan' : 'kebersihan', submitLabel: 'Simpan',
    body: `<p style="margin:0"><b>${esc(k.judul)}</b></p>
      <div class="fld"><label for="bt_s">Status</label><select id="bt_s" name="status">${['Baru', 'Diproses', 'Selesai'].map(v => `<option ${v === k.status ? 'selected' : ''}>${v}</option>`).join('')}</select></div>
      <div class="fld"><label for="bt_t">Tanggapan untuk warga</label><textarea id="bt_t" name="tanggapan" rows="3" maxlength="800" placeholder="mis. Sudah dibersihkan petugas pada Sabtu pagi">${esc(k.tanggapan || '')}</textarea></div>`,
    onSubmit: async d => { const ok = await put('keluhan', k.id, {...k, status: d.status, tanggapan: String(d.tanggapan || '').trim(), diperbarui: todayISO()}); if (ok) toast('Laporan diperbarui.'); return ok; }});
}
function vBersihRingkas() {
  const b = brAngkutBerikut(), kg = brKgBerikut();
  if (!b && !kg && !brJadwal().length) return '';
  return `<div class="panel"><div style="display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap"><h3 style="margin:0">🧹 Kebersihan lingkungan</h3><button class="btn sm" data-act="tab" data-k="bersih">Lihat jadwal</button></div>
    <div class="br-grid" style="margin-top:10px"><div><div class="muted" style="font-size:.8rem">Angkut sampah ${b ? esc(hariLbl(b.hari).toLowerCase()) : ''}</div><div style="margin-top:4px;line-height:1.5">${brAngkutTeks(b)}</div></div>
      <div><div class="muted" style="font-size:.8rem">Kegiatan berikutnya</div><div style="margin-top:4px">${kg ? `<b>${esc(kg.judul || kg.jenis)}</b><br><span class="muted" style="font-size:.86rem">${esc(tglPanjang(kg.tanggal))}${kg.jam ? ' · ' + esc(kg.jam) : ''}</span>` : '<span class="muted">Belum ada</span>'}</div></div></div>
    <div class="toolbar" style="margin:10px 0 0"><button class="btn sm" data-act="br-lapor">Lapor masalah kebersihan</button></div></div>`;
}

/* ---------- Koordinator blok (master blok) ---------- */
const blokList = () => [...S.blok].filter(b => b.nama).sort((a, b) => String(a.kode).localeCompare(String(b.kode), 'id', {numeric: true}));
const blokById = id => id ? S.blok.find(b => b.id === id) || null : null;
const rumahBlok = id => S.warga.filter(w => w.blokId === id && w.status !== 'Pindah');
function kodeBlokBaru() { const n = Math.max(0, ...S.blok.map(b => Number(String(b.kode || '').replace(/\D/g, '')) || 0)) + 1; return 'B' + String(n).padStart(2, '0'); }
const blokSaya = w => w ? blokById(w.blokId) : null;
function vAdminBlok() {
  const L = blokList(), per = nowPer(), pm = paidMap(per), tanpa = S.warga.filter(w => w.status !== 'Pindah' && !blokById(w.blokId)).length;
  const intro = `<p class="muted" style="margin:0 0 10px;font-size:.88rem">Buat daftar blok di sini (kode dibuat otomatis, nama blok diisi manual) lalu tunjuk koordinatornya. Setiap rumah dimasukkan ke bloknya lewat kolom <b>Nama blok</b> di <b>Data warga</b>. Koordinator tampil di Rumah saya milik warga di blok tersebut dan di Struktur Kepengurusan.</p>
    ${tanpa && L.length ? `<div class="notice" style="display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap"><span>${tanpa} rumah belum dimasukkan ke blok mana pun.</span><button class="btn sm" data-act="blok-tanpa">Lihat di Data warga</button></div>` : ''}`;
  if (!L.length) return intro + '<div class="empty">Belum ada blok.<button class="btn pri" data-act="blok-new">+ Tambah blok</button></div>';
  return intro + `<div class="tbl-wrap"><table><thead><tr><th>Kode</th><th>Nama blok</th><th class="r">Rumah</th><th>Iuran ${esc(perLbl(per))}</th><th>Koordinator</th><th>Wakil</th><th></th></tr></thead><tbody>
    ${L.map(b => { const R = rumahBlok(b.id), wjb = R.filter(w => wajib(w, per)), lunas = wjb.filter(w => pm.has(w.id)).length;
      return `<tr><td class="mono">${esc(b.kode)}</td><td><b>${esc(b.nama)}</b>${b.catatan ? `<div class="muted" style="font-size:.76rem">${esc(b.catatan)}</div>` : ''}</td><td class="r num">${R.length}</td>
      <td>${wjb.length ? `${lunas}/${wjb.length} lunas <div class="meter" style="margin-top:4px;max-width:120px"><i style="width:${Math.round(lunas / wjb.length * 100)}%"></i></div>` : '<span class="muted">–</span>'}</td>
      <td>${b.koordinatorNama ? `<b>${esc(b.koordinatorNama)}</b><div class="muted" style="font-size:.78rem">${esc(b.koordinatorBlok || '')}${b.koordinatorHp ? ' · ' + esc(b.koordinatorHp) : ''}</div>` : '<span class="chip warn plain">Belum ditunjuk</span>'}</td>
      <td>${b.wakilNama ? esc(b.wakilNama) : '<span class="muted">–</span>'}</td>
      <td class="r"><div class="racts">${b.koordinatorHp ? `<a class="btn sm wa" href="${esc(waLink(b.koordinatorHp, `Halo ${b.koordinatorNama}, dari pengurus ${lingk()}.`))}" target="_blank" rel="noopener">WA</a>` : ''}<button class="btn sm" data-act="blok-atur" data-id="${esc(b.id)}">Ubah</button></div></td></tr>`; }).join('')}
  </tbody></table></div>
  <div class="toolbar"><a class="btn wa" href="${esc(waShare(teksKoordBlok(L)))}" target="_blank" rel="noopener">Bagikan daftar koordinator ke WhatsApp</a></div>`;
}
const teksKoordBlok = L => `*Koordinator Blok ${lingk()}*\n\n${L.filter(b => b.koordinatorNama).map(b => `• ${b.nama}: ${b.koordinatorNama}${b.koordinatorHp && b.tampilkanHp !== false ? ' (' + b.koordinatorHp + ')' : ''}${b.wakilNama ? ' · wakil ' + b.wakilNama : ''}`).join('\n') || 'Belum ada koordinator.'}\n\n${pengirim()}`;
function openBlok(id) {
  if (!bisaKelola()) return;
  const b = id ? blokById(id) : null, kode = b ? b.kode : kodeBlokBaru(), R = b ? rumahBlok(b.id) : [];
  const urut = [...R.sort(sortHouse), ...S.warga.filter(w => w.status !== 'Pindah' && !(b && w.blokId === b.id)).sort(sortHouse)];
  const opsi = sel => '<option value="">— belum ditunjuk —</option>' + urut.map(w => `<option value="${esc(w.id)}" ${w.id === sel ? 'selected' : ''}>${esc(w.blok)} · ${esc(w.nama)}${b && w.blokId === b.id ? '' : blokById(w.blokId) ? ' (' + esc(blokById(w.blokId).nama) + ')' : ''}</option>`).join('');
  openDlg({title: b ? 'Ubah blok' : 'Tambah blok', area: 'admin', submitLabel: b ? 'Simpan' : 'Tambah blok',
    body: `<div class="grid2"><div class="fld"><label>Kode blok</label><input type="text" value="${esc(kode)}" disabled><span class="hint">Dibuat otomatis oleh sistem</span></div>
      <div class="fld"><label for="bk_nm">Nama blok <span class="req">*</span></label><input type="text" id="bk_nm" name="nama" required maxlength="40" value="${esc(b ? b.nama : '')}" placeholder="mis. Blok Kasuari 1"></div></div>
      <div class="fld"><label for="bk_k">Koordinator blok</label><select id="bk_k" name="koordinatorWargaId">${opsi(b && b.koordinatorWargaId)}</select><span class="hint">${b ? `${R.length} rumah di blok ini (tampil paling atas). ` : 'Isi setelah rumah-rumah dimasukkan ke blok ini lewat Data warga, atau pilih langsung. '}Nomor HP diambil dari Data warga.</span></div>
      <div class="fld"><label for="bk_w">Wakil koordinator (opsional)</label><select id="bk_w" name="wakilWargaId">${opsi(b && b.wakilWargaId)}</select></div>
      <label class="ck" style="font-weight:500"><input type="checkbox" name="tampilkanHp" ${b && b.tampilkanHp === false ? '' : 'checked'}> Tampilkan nomor WhatsApp koordinator ke warga</label>
      <div class="fld"><label for="bk_c">Keterangan</label><input type="text" id="bk_c" name="catatan" maxlength="120" value="${esc(b ? b.catatan || '' : '')}" placeholder="mis. Jalan Kasuari 1 sisi utara"></div>`,
    onSubmit: async d => {
      const nama = String(d.nama || '').trim(); if (!nama) { pesanDlg('Isi nama blok.', 'bk_nm'); return false; }
      if (S.blok.some(x => x.id !== (b && b.id) && String(x.nama || '').toLowerCase() === nama.toLowerCase())) { pesanDlg('Nama blok sudah dipakai blok lain.', 'bk_nm'); return false; }
      if (d.koordinatorWargaId && d.koordinatorWargaId === d.wakilWargaId) { pesanDlg('Koordinator dan wakil harus orang yang berbeda.', 'bk_w'); return false; }
      const k = wById(d.koordinatorWargaId), wk = wById(d.wakilWargaId);
      const row = {...(b || {}), kode, nama, koordinatorWargaId: k ? k.id : '', koordinatorNama: k ? k.nama : '', koordinatorBlok: k ? k.blok : '', koordinatorHp: k ? (k.noHp || '') : '',
        wakilWargaId: wk ? wk.id : '', wakilNama: wk ? wk.nama : '', wakilHp: wk ? (wk.noHp || '') : '', tampilkanHp: !!d.tampilkanHp, catatan: String(d.catatan || '').trim(), diperbarui: todayISO()};
      if (!b) row.dibuat = todayISO();
      const ok = await put('blok', b ? b.id : 'blk_' + uid(), row);
      if (ok) { S.struktur = null; toast(b ? 'Blok diperbarui.' : `${nama} (${kode}) ditambahkan. Masukkan rumah ke blok ini lewat Data warga.`); }
      return ok;
    },
    onDelete: b ? async () => { if (R.length) { pesanDlg(`Masih ada ${R.length} rumah di blok ini. Pindahkan dulu rumah-rumah itu ke blok lain di Data warga.`); return false; } const ok = await del('blok', b.id); if (ok) { S.struktur = null; toast('Blok dihapus.'); } return ok; } : null,
    deleteLabel: 'Hapus blok'});
}
function kartuKoordBlok(w) {
  const b = blokSaya(w); if (!b) return '';
  if (!b.koordinatorNama) return `<div class="panel" style="font-size:.9rem"><span class="muted">Blok rumah Anda:</span> <b>${esc(b.nama)}</b> · koordinator belum ditunjuk.</div>`;
  const hp = b.tampilkanHp !== false && b.koordinatorHp && waNomor(b.koordinatorHp).length >= 10, diri = b.koordinatorWargaId === w.id;
  return `<div class="panel" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><span class="av av-i" aria-hidden="true">${esc(orgInisial(b.koordinatorNama))}</span>
    <div style="flex:1;min-width:180px"><div class="muted" style="font-size:.8rem">Koordinator ${esc(b.nama)}</div><b>${esc(b.koordinatorNama)}${diri ? ' (Anda)' : ''}</b>${b.koordinatorBlok ? ` <span class="muted" style="font-size:.84rem">· ${esc(b.koordinatorBlok)}</span>` : ''}
    ${b.tampilkanHp !== false && b.koordinatorHp ? `<div style="font-size:.9rem;margin-top:2px">📞 <a href="tel:${esc(String(b.koordinatorHp).replace(/[^\d+]/g, ''))}" class="mono" style="color:var(--accent)">${esc(b.koordinatorHp)}</a></div>` : ''}
    ${b.wakilNama ? `<div class="muted" style="font-size:.8rem;margin-top:2px">Wakil: ${esc(b.wakilNama)}${b.tampilkanHp !== false && b.wakilHp ? ` · <a href="tel:${esc(String(b.wakilHp).replace(/[^\d+]/g, ''))}" class="mono" style="color:var(--accent)">${esc(b.wakilHp)}</a>` : ''}</div>` : ''}</div>
    ${hp && !diri ? `<a class="btn sm wa" href="${esc(waLink(b.koordinatorHp, `Halo ${b.koordinatorNama}, saya ${w.nama} (${w.blok}).`))}" target="_blank" rel="noopener">WhatsApp</a>` : ''}</div>`;
}

/* ---------- Struktur Kepengurusan pengurus ---------- */
const orgLevel = j => { const t = String(j || '').toLowerCase(); return /^ketua rt$|^ketua$/.test(t) ? 1 : /wakil/.test(t) ? 2 : /sekretaris|bendahara/.test(t) ? 3 : /^satpam$/.test(t) ? 5 : 4; };
const orgInisial = n => String(n || '?').trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
let strukturMuat = false;
async function muatStruktur(paksa) {
  if (strukturMuat || !SB) return;
  if (!paksa && S.struktur && Date.now() - S.struktur._t < 30000) return;
  strukturMuat = true;
  try { const {data, error} = await SB.rpc('struktur_organisasi'); S.struktur = !error && data ? {...data, _t: Date.now()} : {gagal: true, _t: Date.now(), pengurus: [], petugas: []}; }
  catch (e) { S.struktur = {gagal: true, _t: Date.now(), pengurus: [], petugas: []}; }
  strukturMuat = false; sbSched();
}
function strukturLevel(D) {
  const pkPg = (D.petugas || []).filter(p => p.nama && p.struktur === 'pengurus').map(p => ({nama: p.nama, jabatan: p.jabatanStruktur || p.jabatan, foto: p.foto}));
  const P = [...(D.pengurus || []).filter(p => p.nama), ...pkPg], urutJ = j => { const i = JABATAN.indexOf(j); return i < 0 ? 99 : i; };
  const by = l => P.filter(p => orgLevel(p.jabatan) === l).sort((a, b) => urutJ(a.jabatan) - urutJ(b.jabatan) || String(a.nama).localeCompare(String(b.nama)));
  const atas = [1, 2, 3, 4].flatMap(by), jabAtas = [...new Set(atas.map(p => String(p.jabatan || '').trim()))];
  const cariAtasan = kat => kat === 'petugas' ? '' : jabAtas.find(j => new RegExp('^koordinator ' + kat, 'i').test(j)) || jabAtas.find(j => new RegExp('^seksi ' + kat, 'i').test(j)) || jabAtas.find(j => new RegExp(kat, 'i').test(j)) || '';
  const petugasPg = by(5).map(p => ({nama: p.nama, jabatan: p.jabatan, hp: p.hp, foto: p.foto, kat: 'keamanan', atasan: cariAtasan('keamanan')}));
  const nm = new Set(petugasPg.map(p => p.nama.toLowerCase()));
  const pkPt = (D.petugas || []).filter(p => p.nama && p.struktur !== 'pengurus' && p.struktur !== 'tidak' && !nm.has(p.nama.toLowerCase()))
    .map(p => { const kat = PK_PETUGAS.includes(p.struktur) ? p.struktur : pkStrukturDefault(p.jabatan);
      return {...p, kat, atasan: p.atasan && jabAtas.includes(p.atasan) ? p.atasan : (!p.struktur || !p.atasan ? cariAtasan(kat) : '')}; });
  const anak = new Map(), lepas = new Map();
  [...petugasPg, ...pkPt].forEach(p => {
    if (p.atasan) { if (!anak.has(p.atasan)) anak.set(p.atasan, []); anak.get(p.atasan).push(p); }
    else { if (!lepas.has(p.kat)) lepas.set(p.kat, []); lepas.get(p.kat).push(p); }
  });
  const grupL = PK_PETUGAS.filter(k => lepas.has(k)).map(k => ({lbl: PK_GRUP_LBL[k], l: 5, isi: lepas.get(k)}));
  const L = [
    D.ketuaRw ? {lbl: 'Pelindung', l: 0, isi: [{nama: D.ketuaRw, jabatan: 'Ketua RW' + (D.rw ? ' ' + D.rw : '')}]} : null,
    {lbl: 'Ketua', l: 1, isi: by(1)}, {lbl: 'Wakil ketua', l: 2, isi: by(2)}, {lbl: 'Sekretaris & bendahara', l: 3, isi: by(3)},
    {lbl: 'Koordinator & seksi', l: 4, isi: by(4)}, ...grupL,
    {lbl: 'Koordinator blok', l: 6, isi: (D.koordinatorBlok || []).map(b => ({nama: b.koordinator, jabatan: 'Koordinator ' + (b.nama || 'Blok ' + b.kode) + (b.wakil ? ' · wakil: ' + b.wakil : ''), hp: b.hp}))}
  ].filter(x => x && x.isi.length);
  // petugas menempel pada pengurus pertama yang jabatannya cocok
  const sudah = new Set();
  L.forEach(x => x.isi.forEach(p => { const j = String(p.jabatan || '').trim(); if (x.l >= 1 && x.l <= 4 && anak.has(j) && !sudah.has(j)) { p.anak = anak.get(j); sudah.add(j); } }));
  return L;
}
const strukturNama = D => D.namaLengkap || (S.set && S.set.namaLengkap) || D.lingkungan || lingk();
const strukturRtRw = D => `RT ${D.rt || '…'} / RW ${D.rw || '…'}`;
function periodeTeks(D) { return D.periodeMulai ? `Periode ${tglSurat(D.periodeMulai)}${D.periodeSelesai ? ' – ' + tglSurat(D.periodeSelesai) : ''}` : ''; }
/* garis koordinator blok langsung ke Ketua RT (digambar setelah tata letak selesai) */
function strukturGaris() {
  const org = document.querySelector('.org.ada-langsung'); if (!org) return;
  let svg = org.querySelector(':scope > svg.org-svg');
  const ketua = org.querySelector('.org-node.l1'), row = org.querySelector('.org-lvl.langsung'), col = row && row.querySelector('.org-col');
  if (!ketua || !col || getComputedStyle(row).flexDirection === 'column') { if (svg) svg.remove(); return; }
  if (!svg) { svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'org-svg'); svg.setAttribute('aria-hidden', 'true'); org.appendChild(svg); }
  const o = org.getBoundingClientRect(), sx = org.scrollLeft, sy = org.scrollTop;
  const rel = r => ({l: r.left - o.left + sx, t: r.top - o.top + sy, w: r.width, h: r.height});
  const k = rel(ketua.getBoundingClientRect()), c = rel(col.getBoundingClientRect());
  const kiri = Math.min(...[...org.querySelectorAll('.org-node')].map(n => rel(n.getBoundingClientRect()).l));
  const rx = Math.max(4, kiri - 16), ky = k.t + k.h / 2, by = c.t - 13, cx = c.l + c.w / 2;
  svg.setAttribute('width', org.scrollWidth); svg.setAttribute('height', org.scrollHeight);
  svg.innerHTML = `<path d="M${k.l} ${ky}H${rx}V${by}H${cx}" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>`;
}
window.addEventListener('resize', () => { if (S.tab === 'struktur') strukturGaris(); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (S.tab === 'struktur') strukturGaris(); });

function vStruktur() {
  const D = S.struktur; muatStruktur();
  const head = `<div class="sec-head"><div><h2>Struktur Kepengurusan</h2><p>Susunan pengurus dan petugas lingkungan ${esc(lingk())}. Hubungi pengurus langsung lewat WhatsApp.</p></div>
    <div class="toolbar" style="margin:0">${bisa('pengaturan') ? '<button class="btn ghost" data-act="org-atur">Atur periode</button>' : ''}${bisaKelola() ? '<button class="btn" data-act="org-kelola">Kelola pengurus</button>' : ''}</div></div>`;
  if (!D) return head + '<div class="empty">Memuat struktur kepengurusan…</div>';
  if (D.gagal) return head + '<div class="notice">Struktur kepengurusan belum bisa dimuat. <button class="btn sm" data-act="org-muat">Coba lagi</button></div>';
  const L = strukturLevel(D);
  if (!L.length) return head + `<div class="empty">Belum ada data pengurus.${bisaKelola() ? '<button class="btn pri" data-act="org-kelola">Tambah pengurus</button>' : ''}</div>`;
  const av = p => fotoAman(p.foto) ? `<img class="org-av foto" src="${esc(p.foto)}" alt="Foto ${esc(p.nama)}" loading="lazy">` : `<span class="org-av" aria-hidden="true">${esc(orgInisial(p.nama))}</span>`;
  const node = (p, l) => { const wa = D.kontak && p.hp && waNomor(p.hp).length >= 10;
    return `<div class="org-node l${l}">${av(p)}<b>${esc(p.nama)}</b><span class="j">${esc(p.jabatan || '')}</span>${D.kontak && p.hp && hpTampil(p.hp) ? `<a class="org-hp mono" href="tel:${esc(hpTampil(p.hp))}" aria-label="Telepon ${esc(p.nama)}">📞 ${esc(hpTampil(p.hp))}</a>` : ''}${wa ? `<a class="btn sm wa" href="${esc(waLink(p.hp, `Halo ${p.nama}, saya ${namaSesi()}${wargaSaya() ? ' (' + wargaSaya().blok + ')' : ''} warga ${lingk()}.`))}" target="_blank" rel="noopener" aria-label="Chat ${esc(p.nama)} di WhatsApp">WhatsApp</a>` : ''}</div>`; };
  const kids = p => p.anak && p.anak.length ? `<div class="org-kids" aria-label="Petugas di bawah ${esc(p.jabatan || p.nama)}">${p.anak.map(k => `<div class="org-node l5 kid">${av(k)}<b>${esc(k.nama)}</b><span class="j">${esc(k.jabatan || '')}</span></div>`).join('')}</div>` : '';
  const tot = (D.pengurus || []).length;
  setTimeout(strukturGaris, 0);
  return head + `<div class="panel">
    <div class="org-kop"><b>STRUKTUR KEPENGURUSAN ${esc(strukturNama(D))} ${esc(strukturRtRw(D))}</b>${periodeTeks(D) ? `<span class="muted" style="font-size:.86rem">${esc(periodeTeks(D))}</span>` : ''}</div>
    <div class="org${L.some(z => z.l === 6) && L.some(z => z.l === 1) ? ' ada-langsung' : ''}">${L.map((x, i) => `${x.l >= 4 || x.l === 0 ? `<div class="org-lbl${i === 0 ? ' first' : ''}"><span>${esc(x.lbl)}</span></div>` : ''}<div class="org-lvl${i === 0 ? ' top' : ''}${x.isi.length > 1 ? ' multi' : ''}${x.l === 6 && L.some(z => z.l === 1) ? ' langsung' : ''}">${x.isi.map(p => `<div class="org-col">${node(p, x.l)}${kids(p)}</div>`).join('')}</div>`).join('')}</div></div>
  <div class="toolbar"><a class="btn wa" href="${esc(waShare(teksStruktur(D, L)))}" target="_blank" rel="noopener">Bagikan ke WhatsApp</a><button class="btn" data-act="org-pdf">Unduh PDF</button></div>
  <p class="muted" style="font-size:.8rem">${tot} pengurus aktif. Susunan diambil otomatis dari jabatan di menu Admin → Pengurus${(D.petugas || []).length ? ' dan data Pekerja (petugas tampil di bawah pengurus atasannya)' : ''}.${D.kontak ? '' : ' Nomor WhatsApp pengurus disembunyikan.'}</p>`;
}
function teksStruktur(D, L) {
  return `*STRUKTUR KEPENGURUSAN ${strukturNama(D)} ${strukturRtRw(D)}*${periodeTeks(D) ? '\n' + periodeTeks(D) : ''}\n\n`
    + L.map(x => `*${x.lbl}*\n${x.isi.map(p => `- ${p.jabatan ? p.jabatan + ': ' : ''}${p.nama}${D.kontak && p.hp && x.l > 0 && x.l < 5 ? ' (' + p.hp + ')' : ''}${(p.anak || []).map(k => `\n    • ${k.jabatan ? k.jabatan + ': ' : ''}${k.nama}`).join('')}`).join('\n')}`).join('\n\n') + `\n\n${pengirim()}`;
}
async function pdfStruktur() {
  const D = S.struktur; if (!D || D.gagal) return;
  const L = strukturLevel(D), P = new MiniPDF(), M = 16, CW = 178;
  try { P.img = await logoJpeg(); } catch (e) { P.img = null; }
  P.image(M, 11, 15.5, 18);
  const tx = P.img ? M + 20 : M;
  P.text(tx, 18, `PENGURUS RT ${D.rt || '...'} / RW ${D.rw || '...'}`, {size: 13, bold: true});
  P.text(tx, 23.5, [strukturNama(D), D.kelurahan && 'Kel. ' + D.kelurahan].filter(Boolean).join(' · '), {size: 9.5, color: [74, 59, 48]});
  P.line(M, 32, M + CW, 32, 1.4); P.line(M, 33.2, M + CW, 33.2, .5);
  { const jd = `STRUKTUR KEPENGURUSAN ${strukturNama(D)} ${strukturRtRw(D)}`, ln = pdfWrap(jd, CW, true, 13);
    ln.slice(0, 2).forEach((l, i) => P.text(105, (ln.length > 1 ? 41 : 44) + i * 6, l, {size: 13, bold: true, align: 'center'})); }
  if (periodeTeks(D)) P.text(105, 53, periodeTeks(D), {size: 9.5, align: 'center', color: [74, 59, 48]});
  const fotoIdx = new Map();
  for (const x of L) for (const p of [...x.isi, ...x.isi.flatMap(q => q.anak || [])]) { const u = fotoAman(p.foto); if (u && !fotoIdx.has(u)) { try { P.foto.push(await fotoJpeg(u)); fotoIdx.set(u, P.foto.length - 1); } catch (e) {} } }
  const rows = L.flatMap(x => { const r = []; for (let i = 0; i < x.isi.length; i += 4) r.push({lbl: i === 0 && (x.l === 0 || x.l >= 4), kid: Math.max(0, ...x.isi.slice(i, i + 4).map(p => (p.anak || []).length))}); return r; });
  const adaHp = !!D.kontak && L.some(x => x.isi.some(p => p.hp && hpTampil(p.hp))), HP_H = adaHp ? 3.6 : 0;
  const est = (bh, kh, kg, gap) => rows.reduce((t, r) => t + bh + HP_H + 3 + gap + (r.lbl ? 4 : 0) + (r.kid ? 4 + r.kid * (kh + kg) : 0), 0);
  const kompak = est(29, 12, 3, 7) > 228;
  const BW = 40, BH = (kompak ? 24 : 29) + HP_H, GAP = 5, PER = 4, KH = kompak ? 10.5 : 12, KG = kompak ? 2.2 : 3, RG = kompak ? 4 : 7, abu = [190, 180, 168], warna = {0: [107, 90, 76], 1: [31, 122, 77], 2: [31, 122, 77], 3: [47, 111, 159], 4: [183, 121, 31], 5: [122, 122, 122]};
  const tulis = (bx, w, ty, p, nmSize, jbSize, maxNm) => {
    pdfWrap(p.nama, w - 4, true, nmSize).slice(0, maxNm).forEach(l => { P.text(bx + w / 2, ty, l, {size: nmSize, bold: true, align: 'center'}); ty += nmSize * .42; });
    pdfWrap(p.jabatan || '', w - 4, false, jbSize).slice(0, 1).forEach(l => { P.text(bx + w / 2, ty, l, {size: jbSize, align: 'center', color: [90, 80, 70]}); });
    if (adaHp && p.hp && hpTampil(p.hp)) P.text(bx + w / 2, ty + jbSize * .45, hpTampil(p.hp), {size: 7, align: 'center', color: [31, 122, 77]});
  };
  let y = 59, prevBottom = null, hal = 0, ketuaBox = null, kiriMin = 999;
  const langsungPdf = L.some(z => z.l === 1);
  for (const x of L) {
    for (let i = 0; i < x.isi.length; i += PER) {
      const row = x.isi.slice(i, i + PER), n = row.length, wTot = n * BW + (n - 1) * GAP, x0 = 105 - wTot / 2;
      const maxKid = Math.max(0, ...row.map(p => (p.anak || []).length)), rowH = BH + (maxKid ? 4 + maxKid * (KH + KG) : 0);
      if (y + rowH + 7 > 282) { P.addPage(); y = 20; prevBottom = null; hal++; kiriMin = 999; }
      if (i === 0 && (x.l === 0 || x.l >= 4)) { P.text(105, y + 1, x.lbl.toUpperCase(), {size: 8, bold: true, align: 'center', color: [120, 110, 100]}); y += 4; }
      const top = y + 3;
      const jalurKetua = x.l === 6 && i === 0 && langsungPdf && ketuaBox && ketuaBox.hal === hal;
      if (jalurKetua) {
        const rx = Math.max(8, Math.min(kiriMin, x0) - 4);
        P.line(ketuaBox.x, ketuaBox.y, rx, ketuaBox.y, .8, abu); P.line(rx, ketuaBox.y, rx, top - 2, .8, abu); P.line(rx, top - 2, x0 + BW / 2, top - 2, .8, abu);
        if (n > 1) P.line(x0 + BW / 2, top - 2, x0 + wTot - BW / 2, top - 2, .8, abu);
        row.forEach((p, k) => { const cx = x0 + k * (BW + GAP) + BW / 2; P.line(cx, top - 2, cx, top, .8, abu); });
      } else if (prevBottom !== null) {
        P.line(105, prevBottom, 105, top - 2, .8, abu);
        if (n > 1) P.line(x0 + BW / 2, top - 2, x0 + wTot - BW / 2, top - 2, .8, abu);
      }
      row.forEach((p, k) => {
        const bx = x0 + k * (BW + GAP), c = warna[x.l] || warna[4], cx = bx + BW / 2;
        if (prevBottom !== null && n > 1) P.line(cx, top - 2, cx, top, .8, abu);
        if (x.l === 1 && k === 0 && !ketuaBox) ketuaBox = {x: bx, y: top + BH / 2, hal};
        if (ketuaBox) kiriMin = Math.min(kiriMin, bx);
        P.rect(bx, top, BW, BH, {fill: [250, 247, 242], stroke: c, lw: x.l === 1 ? 1.2 : .6});
        P.rect(bx, top, BW, 2.2, {fill: c});
        const cy = top + (kompak ? 7.6 : 9), rr = kompak ? 4.3 : 5.2, fi = fotoIdx.get(fotoAman(p.foto));
        if (fi !== undefined) { P.fotoBulat(fi, cx, cy, rr); P.bulat(cx, cy, rr, {stroke: c, lw: .8}); }
        else { P.bulat(cx, cy, rr, {fill: c}); P.text(cx, cy + 1.3, orgInisial(p.nama), {size: 8.5, bold: true, align: 'center', color: [255, 255, 255]}); }
        tulis(bx, BW, top + (kompak ? 15.6 : 18.6), p, 8.6, 7.4, kompak ? 1 : 2);
        (p.anak || []).forEach((a, ai) => {
          const ky = top + BH + 4 + ai * (KH + KG), kx = bx + 3, kw = BW - 6;
          P.line(cx, ky - (ai ? KG : 4), cx, ky, .7, abu);
          P.rect(kx, ky, kw, KH, {fill: [255, 255, 255], stroke: warna[5], lw: .5});
          const fa = fotoIdx.get(fotoAman(a.foto)), acx = kx + 5.5, acy = ky + KH / 2;
          if (fa !== undefined) P.fotoBulat(fa, acx, acy, 3.6); else { P.bulat(acx, acy, 3.6, {fill: warna[5]}); P.text(acx, acy + 1, orgInisial(a.nama), {size: 6.5, bold: true, align: 'center', color: [255, 255, 255]}); }
          const tw = kw - 11, tx2 = kx + 10.5;
          P.text(tx2 + tw / 2, ky + KH * .42, pdfWrap(a.nama, tw - 1, true, 7.4)[0] || '', {size: 7.4, bold: true, align: 'center'});
          P.text(tx2 + tw / 2, ky + KH * .74, pdfWrap(a.jabatan || '', tw - 1, false, 6.4)[0] || '', {size: 6.4, align: 'center', color: [90, 80, 70]});
        });
      });
      prevBottom = top + rowH; y = top + rowH + RG;
    }
  }
  P.text(105, 287, `Dicetak dari aplikasi Warga Kasuari · ${tglSurat(todayISO())}`, {size: 7.5, align: 'center', color: [120, 110, 100]});
  return P.bytes();
}
function openStrukturAtur() {
  if (!bisa('pengaturan')) return;
  openDlg({title: 'Periode kepengurusan', area: 'pengaturan',
    body: `<div class="grid2"><div class="fld"><label for="so_m">Mulai</label><input type="date" id="so_m" name="periodeMulai" value="${esc(S.set.periodeMulai || '')}"></div>
      <div class="fld"><label for="so_s">Selesai</label><input type="date" id="so_s" name="periodeSelesai" value="${esc(S.set.periodeSelesai || '')}"></div></div>
      <label class="ck" style="font-weight:500;align-items:flex-start"><input type="checkbox" name="strukturKontak" ${S.set.strukturKontak === false ? '' : 'checked'}> <span>Tampilkan tombol WhatsApp pengurus ke warga</span></label>
      <label class="ck" style="font-weight:500;align-items:flex-start"><input type="checkbox" name="strukturPetugas" ${S.set.strukturPetugas === false ? '' : 'checked'}> <span>Tampilkan petugas keamanan, kebersihan &amp; lainnya (pekerja) di bagan<br><span class="muted" style="font-size:.82rem">Atur per orang di Pekerja &amp; gaji → ubah data pekerja → Struktur Kepengurusan.</span></span></label>
      <p class="muted" style="margin:0;font-size:.84rem">Nama Ketua RW (pelindung) diambil dari Pengaturan → Kop surat. Jabatan pengurus diatur di Admin → Pengurus.</p>`,
    onSubmit: async d => {
      if (d.periodeMulai && d.periodeSelesai && d.periodeSelesai < d.periodeMulai) { pesanDlg('Tanggal selesai tidak boleh sebelum tanggal mulai.', 'so_s'); return false; }
      const ok = await putSetting({periodeMulai: d.periodeMulai || '', periodeSelesai: d.periodeSelesai || '', strukturKontak: !!d.strukturKontak, strukturPetugas: !!d.strukturPetugas});
      if (ok) { toast('Pengaturan struktur disimpan.'); setTimeout(() => muatStruktur(true), 400); } return ok;
    }});
}

/* ---------- Pekerja & gaji (payroll) ---------- */
const JABATAN_PK = ['Satpam', 'Komandan regu satpam', 'Petugas kebersihan', 'Petugas sampah', 'Tukang kebun / taman', 'Penjaga fasum', 'Teknisi / perawatan', 'Lainnya'];
const PK_PENDAPATAN = ['Uang makan', 'Transport', 'Lembur', 'Tunjangan jabatan', 'THR', 'Bonus', 'Insentif'];
const PK_POTONGAN = ['Kasbon', 'Absen / tidak masuk', 'BPJS', 'Keterlambatan', 'Lainnya'];
const pkKatKas = p => p.katKas || (/satpam|keamanan|komandan/i.test(p.jabatan || '') ? 'Keamanan / satpam' : /bersih|sampah|kebun|taman/i.test(p.jabatan || '') ? 'Kebersihan & sampah' : 'Lainnya');
const pkById = id => S.pekerja.find(p => p.id === id);
const pkAktif = () => S.pekerja.filter(p => p.status !== 'Berhenti').sort((a, b) => JABATAN_PK.indexOf(a.jabatan) - JABATAN_PK.indexOf(b.jabatan) || String(a.nama).localeCompare(String(b.nama)));
const jmlItem = l => (l || []).reduce((t, x) => t + (Number(x.jumlah) || 0), 0);
const gjHitung = g => { const pen = jmlItem(g.pendapatan), pot = jmlItem(g.potongan); return {pen, pot, net: pen - pot}; };
const gjBulan = per => S.gaji.filter(g => g.periode === per).sort((a, b) => String(a.noSlip || '').localeCompare(String(b.noSlip || '')));
const maskRek = r => r ? '•••• ' + String(r).slice(-4) : '—';
function vGaji() {
  if (!lihat('gaji')) return vGajiSaya();
  const kel = bisa('gaji');
  const tabs = [['gaji', 'Penggajian bulanan'], ['pekerja', `Data pekerja ${pkAktif().length}`], ['rekap', 'Rekap tahunan']];
  const head = `<div class="sec-head"><div><h2>Pekerja & gaji</h2><p>Data satpam, petugas kebersihan, dan pekerja lingkungan lainnya, lengkap dengan penggajian bulanan dan slip gaji.</p></div>
    ${kel ? (S.gjTab === 'pekerja' ? '<button class="btn pri" data-act="pk-new">+ Tambah pekerja</button>' : '') : ''}</div>
    <div class="toolbar"><div class="seg" role="group" aria-label="Bagian gaji">${tabs.map(([k, l]) => `<button type="button" data-act="gjtab" data-k="${k}" aria-pressed="${S.gjTab === k}">${esc(l)}</button>`).join('')}</div></div>`;
  return head + (S.gjTab === 'pekerja' ? vPekerja(kel) : S.gjTab === 'rekap' ? vGajiRekap() : vGajiBulan(kel));
}
function vGajiBulan(kel) {
  const per = S.gjPer, L = gjBulan(per), aktif = pkAktif();
  const tot = L.reduce((a, g) => { const h = gjHitung(g); a.net += h.net; if (g.status === 'Dibayar') { a.bayar += h.net; a.nb++; } return a; }, {net: 0, bayar: 0, nb: 0});
  const belumSlip = aktif.filter(p => !L.some(g => g.pekerjaId === p.id));
  const draf = L.filter(g => g.status !== 'Dibayar');
  const nav = `<div class="monthnav"><button class="btn sm" data-act="gjper" data-n="-1" aria-label="Bulan sebelumnya">‹</button><strong>${esc(perLbl(per))}</strong><button class="btn sm" data-act="gjper" data-n="1" aria-label="Bulan berikutnya">›</button>${per !== nowPer() ? '<button class="btn ghost sm" data-act="gjper" data-n="0">Bulan ini</button>' : ''}</div>`;
  const tiles = `<div class="tiles">
    <div class="tile"><span class="ti g">${ico('warga')}</span><span class="lbl">Pekerja aktif</span><span class="val">${aktif.length}</span><span class="sub">${L.length} slip di ${esc(perLbl(per, true))}</span></div>
    <div class="tile"><span class="ti b">${ico('gaji')}</span><span class="lbl">Total gaji bersih</span><span class="val">${esc(rp(tot.net))}</span><span class="sub">bulan ${esc(perLbl(per, true))}</span></div>
    <div class="tile"><span class="ti g">${ico('kas')}</span><span class="lbl">Sudah dibayar</span><span class="val" style="color:var(--ok)">${esc(rp(tot.bayar))}</span><span class="sub">${tot.nb} dari ${L.length} pekerja</span></div>
    <div class="tile"><span class="ti r">${ico('alert')}</span><span class="lbl">Belum dibayar</span><span class="val" style="color:${tot.net - tot.bayar ? 'var(--bad)' : 'inherit'}">${esc(rp(tot.net - tot.bayar))}</span><span class="sub">${draf.length} slip draf</span></div></div>`;
  const aksiAtas = kel ? `<div class="toolbar">${belumSlip.length ? `<button class="btn pri" data-act="gj-buat">${L.length ? `+ Buat slip untuk ${belumSlip.length} pekerja lagi` : `+ Buat slip gaji ${esc(perLbl(per, true))}`}</button>` : ''}
      ${draf.length ? `<button class="btn" data-act="gj-bayar-semua">Bayar semua draf (${draf.length})</button>` : ''}${L.length ? '<button class="btn ghost" data-act="gj-xlsx">Unduh rekap (Excel)</button>' : ''}</div>` : (L.length ? '<div class="toolbar"><button class="btn ghost" data-act="gj-xlsx">Unduh rekap (Excel)</button></div>' : '');
  const rows = L.map(g => { const h = gjHitung(g), p = pkById(g.pekerjaId) || {}, wa = p.noHp && waNomor(p.noHp).length >= 10 && g.status === 'Dibayar';
    return `<tr><td><div style="font-weight:600">${esc(g.nama)}</div><div class="muted" style="font-size:.78rem">${esc(g.jabatan || '')} · ${esc(g.noSlip || '')}</div></td>
      <td class="r num">${esc(rp(h.pen))}</td><td class="r num" style="color:var(--bad)">${h.pot ? '−' + esc(rp(h.pot)) : '—'}</td><td class="r num" style="font-weight:800">${esc(rp(h.net))}</td>
      <td>${g.status === 'Dibayar' ? `<span class="chip ok">Dibayar</span><div class="muted" style="font-size:.76rem">${esc(tgl(g.dibayar && g.dibayar.tanggal))} · ${esc((g.dibayar && g.dibayar.metode) || '')}</div>` : '<span class="chip warn">Draf</span>'}</td>
      <td class="r" style="white-space:nowrap">${kel && g.status !== 'Dibayar' ? `<button class="btn sm pri" data-act="gj-bayar" data-id="${esc(g.id)}">Bayar</button>` : ''}<button class="btn sm" data-act="gj-slip" data-id="${esc(g.id)}">${kel && g.status !== 'Dibayar' ? 'Ubah' : 'Lihat'}</button>
        <button class="btn sm ghost" data-act="gj-pdf" data-id="${esc(g.id)}" title="Unduh slip PDF">PDF</button>${wa ? `<a class="btn sm wa" href="${esc(waLink(p.noHp, teksSlip(g)))}" target="_blank" rel="noopener">WA</a>` : ''}</td></tr>`; }).join('');
  const rowsM = L.map(g => { const h = gjHitung(g);
    return `<div class="row"><div class="grow"><div class="t">${esc(g.nama)}</div><div class="s">${esc(g.jabatan || '')} · ${g.status === 'Dibayar' ? 'Dibayar ' + esc(tgl(g.dibayar && g.dibayar.tanggal)) : 'Draf'}</div></div><span class="num" style="font-weight:800">${esc(nf.format(h.net))}</span><button class="btn ghost sm" data-act="gj-slip" data-id="${esc(g.id)}" aria-label="Buka slip">›</button></div>`; }).join('');
  return `<div class="toolbar" style="justify-content:space-between">${nav}</div>${tiles}${aksiAtas}
    ${L.length ? `<div class="tbl-wrap hide-m"><table><thead><tr><th>Pekerja</th><th class="r">Pendapatan</th><th class="r">Potongan</th><th class="r">Gaji bersih</th><th>Status</th><th></th></tr></thead><tbody>${rows}
      <tr><td style="font-weight:700">Total ${L.length} pekerja</td><td class="r num" style="font-weight:700">${esc(rp(L.reduce((t, g) => t + gjHitung(g).pen, 0)))}</td><td class="r num" style="font-weight:700;color:var(--bad)">−${esc(rp(L.reduce((t, g) => t + gjHitung(g).pot, 0)))}</td><td class="r num" style="font-weight:800">${esc(rp(tot.net))}</td><td colspan="2"></td></tr></tbody></table></div>
      <div class="list-mobile">${rowsM}</div>`
    : `<div class="empty">${aktif.length ? `Belum ada slip gaji untuk ${esc(perLbl(per, true))}.` : 'Belum ada data pekerja. Tambahkan dulu di tab Data pekerja.'}${kel && !aktif.length ? '<button class="btn pri" data-act="pk-new">+ Tambah pekerja</button>' : ''}</div>`}
    <p class="muted" style="font-size:.8rem">Gaji yang ditandai dibayar otomatis tercatat sebagai pengeluaran di Buku kas (kategori sesuai jabatan) dan masuk Laporan keuangan.</p>`;
}
const pkAv = p => fotoAman(p.foto) ? `<img class="av" src="${esc(p.foto)}" alt="" loading="lazy">` : `<span class="av av-i" aria-hidden="true">${esc(orgInisial(p.nama))}</span>`;
function vPekerja(kel) {
  const L = [...S.pekerja].sort((a, b) => (a.status === 'Berhenti') - (b.status === 'Berhenti') || JABATAN_PK.indexOf(a.jabatan) - JABATAN_PK.indexOf(b.jabatan) || String(a.nama).localeCompare(String(b.nama)));
  if (!L.length) return `<div class="empty">Belum ada data pekerja.${kel ? '<button class="btn pri" data-act="pk-new">+ Tambah pekerja</button>' : ''}</div>`;
  return `<div class="tbl-wrap hide-m"><table><thead><tr><th>Nama</th><th>Jabatan</th><th>No. HP</th><th>Mulai bekerja</th><th class="r">Gaji pokok</th><th>Rekening</th><th>Status</th><th></th></tr></thead><tbody>${L.map(p => `<tr>
      <td style="font-weight:600"><span style="display:inline-flex;align-items:center;gap:8px">${pkAv(p)}${esc(p.nama)}</span>${p.akunId ? ' <span class="chip info plain" style="font-size:.7rem">punya akun</span>' : ''}</td><td>${esc(p.jabatan || '')}</td><td class="mono">${esc(p.noHp || '—')}</td><td>${esc(p.mulai ? tgl(p.mulai) : '—')}</td>
      <td class="r num">${esc(rp(p.gajiPokok))}</td><td>${p.bank ? esc(p.bank) + ' ' + esc(maskRek(p.noRek)) : 'Tunai'}</td><td><span class="chip ${p.status === 'Berhenti' ? 'mute' : 'ok'}">${esc(p.status || 'Aktif')}</span></td>
      <td class="r"><button class="btn sm" data-act="pk-edit" data-id="${esc(p.id)}">${kel ? 'Ubah' : 'Lihat'}</button></td></tr>`).join('')}</tbody></table></div>
    <div class="list-mobile">${L.map(p => `<div class="row">${pkAv(p)}<div class="grow"><div class="t">${esc(p.nama)}</div><div class="s">${esc(p.jabatan || '')} · ${esc(rp(p.gajiPokok))}${p.status === 'Berhenti' ? ' · Berhenti' : ''}</div></div><button class="btn ghost sm" data-act="pk-edit" data-id="${esc(p.id)}" aria-label="Buka">›</button></div>`).join('')}</div>`;
}
function vGajiRekap() {
  const th = S.gjTh, pers = Array.from({length: 12}, (_, i) => th + '-' + pad(i + 1));
  const ids = [...new Set(S.gaji.filter(g => String(g.periode).startsWith(th + '-')).map(g => g.pekerjaId))];
  const nav = `<div class="monthnav"><button class="btn sm" data-act="gjth" data-n="-1" aria-label="Tahun sebelumnya">‹</button><strong>${th}</strong><button class="btn sm" data-act="gjth" data-n="1" aria-label="Tahun berikutnya">›</button></div>`;
  if (!ids.length) return `<div class="toolbar">${nav}</div><div class="empty">Belum ada slip gaji di tahun ${th}.</div>`;
  const nilai = (id, per) => S.gaji.filter(g => g.pekerjaId === id && g.periode === per && g.status === 'Dibayar').reduce((t, g) => t + gjHitung(g).net, 0);
  const rows = ids.map(id => { const p = pkById(id) || (S.gaji.find(g => g.pekerjaId === id) || {}); const v = pers.map(per => nilai(id, per)); return {nama: p.nama, jabatan: p.jabatan, v, tot: v.reduce((a, b) => a + b, 0)}; }).sort((a, b) => b.tot - a.tot);
  const totBln = pers.map((_, i) => rows.reduce((t, r) => t + r.v[i], 0)), grand = totBln.reduce((a, b) => a + b, 0);
  const sing = v => v ? (v >= 1e6 ? (v / 1e6).toFixed(1).replace('.', ',') + ' jt' : Math.round(v / 1e3) + ' rb') : '–';
  return `<div class="toolbar" style="justify-content:space-between">${nav}<button class="btn ghost" data-act="gj-xlsx-th">Unduh rekap ${th} (Excel)</button></div>
    <div class="tiles"><div class="tile"><span class="ti b">${ico('gaji')}</span><span class="lbl">Total gaji dibayar ${th}</span><span class="val">${esc(rp(grand))}</span><span class="sub">${rows.length} pekerja</span></div></div>
    <div class="tbl-wrap"><table style="min-width:980px"><thead><tr><th>Pekerja</th>${BLN.map(b => `<th class="r">${b}</th>`).join('')}<th class="r">Total</th></tr></thead><tbody>
    ${rows.map(r => `<tr><td><div style="font-weight:600">${esc(r.nama || '')}</div><div class="muted" style="font-size:.76rem">${esc(r.jabatan || '')}</div></td>${r.v.map(v => `<td class="r num" title="${esc(rp(v))}">${sing(v)}</td>`).join('')}<td class="r num" style="font-weight:800">${esc(rp(r.tot))}</td></tr>`).join('')}
    <tr><td style="font-weight:700">Total</td>${totBln.map(v => `<td class="r num" style="font-weight:700">${sing(v)}</td>`).join('')}<td class="r num" style="font-weight:800">${esc(rp(grand))}</td></tr></tbody></table></div>
    <p class="muted" style="font-size:.8rem">Hanya slip berstatus Dibayar. Nilai dalam ribuan (rb) / jutaan (jt); arahkan kursor untuk nilai lengkap.</p>`;
}
function vGajiSaya() {
  const L = S.gaji.filter(g => g.akunId === (S.me && S.me.id) && g.status === 'Dibayar').sort((a, b) => String(b.periode).localeCompare(String(a.periode)));
  return `<div class="sec-head"><div><h2>Slip gaji saya</h2><p>Slip gaji yang sudah dibayarkan bendahara ${esc(lingk())}.</p></div></div>
    ${L.length ? `<div class="panel" style="padding:4px 16px">${L.map(g => `<div class="row"><div class="grow"><div class="t">Gaji ${esc(perLbl(g.periode, true))}</div><div class="s">Dibayar ${esc(tgl(g.dibayar && g.dibayar.tanggal))} · ${esc((g.dibayar && g.dibayar.metode) || '')}</div></div><span class="num" style="font-weight:800">${esc(rp(gjHitung(g).net))}</span><button class="btn sm" data-act="gj-slip" data-id="${esc(g.id)}">Lihat</button><button class="btn sm ghost" data-act="gj-pdf" data-id="${esc(g.id)}">PDF</button></div>`).join('')}</div>` : '<div class="empty">Belum ada slip gaji.</div>'}`;
}
function gjItemRow(it, jenis) {
  it = it || {};
  return `<div class="gj-row"><input type="text" class="gj-l" maxlength="40" value="${esc(it.nama || '')}" placeholder="${jenis === 'pot' ? 'mis. Kasbon' : 'mis. Uang makan'}" aria-label="Nama komponen"><input type="number" class="gj-j" min="0" step="1000" inputmode="numeric" value="${esc(it.jumlah || '')}" placeholder="Rp" aria-label="Jumlah (Rp)"><button type="button" class="btn ghost sm" data-act="gj-row-del" aria-label="Hapus baris" style="color:var(--bad);padding-inline:8px">✕</button></div>`;
}
function gjAmbil(sel) { return [...document.querySelectorAll(sel + ' .gj-row')].map(r => ({nama: r.querySelector('.gj-l').value.trim(), jumlah: Math.round(Number(r.querySelector('.gj-j').value) || 0)})).filter(x => x.nama || x.jumlah); }
function gjHitungForm() {
  const pen = jmlItem(gjAmbil('#gjPen')), pot = jmlItem(gjAmbil('#gjPot'));
  const set = (id, v) => { const el = $(id); if (el) el.textContent = rp(v); };
  set('#gjTPen', pen); set('#gjTPen2', pen); set('#gjTPot', pot); set('#gjTPot2', pot); set('#gjTNet', pen - pot);
}
function openPekerja(id) {
  const x = id ? pkById(id) : null, ro = dis('gaji');
  const v = x || {jabatan: JABATAN_PK[0], status: 'Aktif', mulai: todayISO(), tunjangan: [{nama: 'Uang makan', jumlah: ''}]};
  const akun = pengurusAktif().filter(p => p.userId);
  const pkId = x ? x.id : 'pk_' + uid(), ker = pkFotoKerja = {awal: (x && x.foto) || '', url: (x && x.foto) || '', load: false, pid: pkId, baru: [], box: '#pkFoto', file: 'pk_file', del: 'pk-foto-del', namaSel: '#pk_n', ro: !!ro};
  openDlg({title: x ? (bisa('gaji') ? 'Ubah data pekerja' : 'Data pekerja') : 'Tambah pekerja', area: 'gaji', submitLabel: x ? 'Simpan' : 'Tambah pekerja',
    body: `<div class="fld"><label>Foto pekerja</label><div class="pg-foto" id="pkFoto"></div>${ro ? '' : '<input type="file" id="pk_file" accept="image/*" hidden><span class="hint">Tampil di Struktur Kepengurusan. Dipotong persegi &amp; diperkecil otomatis.</span>'}</div>
    <div class="fld"><label for="pk_n">Nama lengkap <span class="req">*</span></label><input type="text" id="pk_n" name="nama" required maxlength="80" value="${esc(v.nama || '')}" ${ro}></div>
    <div class="grid2"><div class="fld"><label for="pk_j">Jabatan</label><select id="pk_j" name="jabatan" ${ro}>${JABATAN_PK.map(j => `<option ${j === v.jabatan ? 'selected' : ''}>${esc(j)}</option>`).join('')}</select></div>
      <div class="fld"><label for="pk_s">Status</label><select id="pk_s" name="status" ${ro}>${['Aktif', 'Berhenti'].map(k => `<option ${k === (v.status || 'Aktif') ? 'selected' : ''}>${k}</option>`).join('')}</select></div></div>
    <div class="grid2"><div class="fld"><label for="pk_hp">No. HP / WhatsApp</label><input type="tel" id="pk_hp" name="noHp" maxlength="20" value="${esc(v.noHp || '')}" placeholder="08…" ${ro}></div>
      <div class="fld"><label for="pk_m">Mulai bekerja</label><input type="date" id="pk_m" name="mulai" value="${esc(v.mulai || '')}" ${ro}></div></div>
    <div class="grid2"><div class="fld"><label for="pk_nik">NIK</label><input type="text" id="pk_nik" name="nik" inputmode="numeric" maxlength="16" value="${esc(v.nik || '')}" placeholder="opsional" autocomplete="off" ${ro}></div>
      <div class="fld"><label for="pk_g">Gaji pokok per bulan (Rp) <span class="req">*</span></label><input type="number" id="pk_g" name="gajiPokok" min="0" step="50000" inputmode="numeric" required value="${esc(v.gajiPokok || '')}" ${ro}></div></div>
    <div class="fld"><label for="pk_al">Alamat</label><input type="text" id="pk_al" name="alamat" maxlength="160" value="${esc(v.alamat || '')}" ${ro}></div>
    <div class="gj-sec"><h4>Tunjangan tetap bulanan <span class="muted" style="font-weight:500;font-size:.78rem">otomatis masuk slip baru</span></h4><div class="gj-rows" id="pkTun">${(v.tunjangan || []).map(t => gjItemRow(t, 'pen')).join('')}</div>${ro ? '' : '<button type="button" class="btn sm" data-act="gj-row-add" data-k="#pkTun" style="justify-self:start">+ Tunjangan</button>'}</div>
    <div class="gj-sec"><h4>Pembayaran gaji</h4>
      <div class="grid2"><div class="fld"><label for="pk_b">Bank / e-wallet</label><input type="text" id="pk_b" name="bank" maxlength="30" value="${esc(v.bank || '')}" placeholder="kosongkan bila tunai" ${ro}></div>
        <div class="fld"><label for="pk_r">No. rekening</label><input type="text" id="pk_r" name="noRek" maxlength="30" inputmode="numeric" value="${esc(v.noRek || '')}" autocomplete="off" ${ro}></div></div>
      <div class="fld"><label for="pk_an">Atas nama</label><input type="text" id="pk_an" name="anRek" maxlength="60" value="${esc(v.anRek || '')}" ${ro}></div></div>
    <div class="grid2"><div class="fld"><label for="pk_k">Kategori di buku kas</label><select id="pk_k" name="katKas" ${ro}><option value="">Otomatis sesuai jabatan</option>${KAT_KELUAR.map(k => `<option ${k === v.katKas ? 'selected' : ''}>${esc(k)}</option>`).join('')}</select></div>
      <div class="fld" ${x && pkPengurus(x) ? 'hidden' : ''}><label for="pk_ak">Tautkan akun yang sudah ada (opsional)</label><select id="pk_ak" name="akunId" ${ro}><option value="">— tidak ada —</option>${akun.map(p => `<option value="${esc(p.userId)}" ${p.userId === v.akunId ? 'selected' : ''}>${esc(p.nama)} · ${esc(p.jabatan || '')}</option>`).join('')}</select><span class="hint">Pekerja dengan akun (mis. satpam) bisa melihat slip gajinya sendiri.</span></div></div>
    <div class="gj-sec"><h4>Struktur Kepengurusan</h4>
      <div class="fld"><label for="pk_st">Tampil di struktur kepengurusan</label><select id="pk_st" name="struktur" ${ro}>${PK_STRUKTUR.map(([k, l]) => `<option value="${k}" ${k === (v.struktur || pkStrukturDefault(v.jabatan)) ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
      <div class="fld" id="pkAtasanW" ${PK_PETUGAS.includes(v.struktur || pkStrukturDefault(v.jabatan)) ? '' : 'hidden'}><label for="pk_at">Di bawah pengurus (atasan langsung)</label><select id="pk_at" name="atasan" ${ro}><option value="">— langsung di baris Petugas lingkungan —</option>${pkAtasanOpsi().map(([j, n]) => `<option value="${esc(j)}" ${j === (x && v.struktur ? v.atasan || '' : pkAtasanDefault(v.struktur || pkStrukturDefault(v.jabatan))) ? 'selected' : ''}>${esc(j)}${n ? ' – ' + esc(n) : ''}</option>`).join('')}</select><span class="hint">Pekerja tampil dikelompokkan di bawah jabatan pengurus ini.</span></div>
      <div class="fld" id="pkJabStW" ${v.struktur === 'pengurus' ? '' : 'hidden'}><label for="pk_js">Jabatan di struktur</label><select id="pk_js" name="jabatanStruktur" ${ro}>${JABATAN.map(j => `<option ${j === (v.jabatanStruktur || 'Seksi Keamanan') ? 'selected' : ''}>${esc(j)}</option>`).join('')}</select><span class="hint">Tampil sejajar dengan pengurus sesuai jabatan ini. Hak akses aplikasi tidak berubah.</span></div>
    </div>
    ${pkAkunHtml(x, v)}
    <div class="fld"><label for="pk_c">Catatan</label><input type="text" id="pk_c" name="catatan" maxlength="200" value="${esc(v.catatan || '')}" ${ro}></div>`,
    onSubmit: async d => {
      const nama = String(d.nama || '').trim(); if (!nama) { pesanDlg('Isi nama pekerja.', 'pk_n'); return false; }
      const gp = Math.round(Number(d.gajiPokok) || 0); if (gp <= 0) { pesanDlg('Isi gaji pokok.', 'pk_g'); return false; }
      const nik = String(d.nik || '').replace(/\D/g, ''); if (nik && nik.length !== 16) { pesanDlg('NIK harus 16 digit, atau kosongkan.', 'pk_nik'); return false; }
      if (ker.load) { pesanDlg('Tunggu, foto masih diunggah.'); return false; }
      const akunCek = pkAkunCek(x, d); if (akunCek === false) return false;
      const row = {...(x || {}), foto: ker.url || '', nama, jabatan: d.jabatan, status: d.status, noHp: String(d.noHp || '').trim(), mulai: d.mulai || '', nik, gajiPokok: gp, alamat: String(d.alamat || '').trim(),
        tunjangan: gjAmbil('#pkTun').filter(t => t.nama), bank: String(d.bank || '').trim(), noRek: String(d.noRek || '').replace(/[^\dA-Za-z-]/g, ''), anRek: String(d.anRek || '').trim(), katKas: d.katKas || '', akunId: d.akunId || '', catatan: String(d.catatan || '').trim(), diperbarui: todayISO(),
        struktur: PK_STRUKTUR.some(o => o[0] === d.struktur) ? d.struktur : pkStrukturDefault(d.jabatan), atasan: PK_PETUGAS.includes(d.struktur) ? (d.atasan || '') : '', jabatanStruktur: d.struktur === 'pengurus' ? (d.jabatanStruktur || '') : ''};
      if (!x) row.dibuat = todayISO();
      S.struktur = null;
      const akunHasil = await pkAkunProses(x, pkId, row, d); if (akunHasil === false) return false;
      const ok = await put('pekerja', pkId, row);
      if (ok && akunHasil && akunHasil.pw) setTimeout(() => tampilLoginPengurus(akunHasil.pg, hpTampil(akunHasil.pg.noHp), akunHasil.pw), 60);
      if (ok) { pgFotoHapus([ker.awal, ...ker.baru].filter(u => u && u !== row.foto)); pkFotoKerja = null; }
      if (ok) toast(x ? 'Data pekerja diperbarui.' : `${nama} ditambahkan.`); return ok;
    },
    onDelete: x ? async () => { if (S.gaji.some(g => g.pekerjaId === x.id)) { pesanDlg('Pekerja ini sudah punya slip gaji. Ubah statusnya menjadi "Berhenti" agar riwayat gaji tetap tersimpan.'); return false; } const lk = pkPengurus(x); if (lk && bisaKelola()) { try { if (lk.userId) await hapusProfil(lk.userId); await del('pengurus', lk.id); } catch (e) { pesanDlg('Gagal mencabut akun login: ' + pesanAuth(e)); return false; } } const ok = await del('pekerja', x.id); if (ok) { pgFotoHapus([x.foto, ...ker.baru]); pkFotoKerja = null; S.struktur = null; toast('Data pekerja dihapus.'); } return ok; } : null, deleteLabel: 'Hapus pekerja'});
  renderFoto(ker, v.nama); if (!ro) pasangFoto(ker, () => pkFotoKerja);
  const ab = $('#pk_akb'); if (ab) ab.addEventListener('change', () => { $('#pkAkunBaru').hidden = !ab.checked; if (ab.checked && !$('#pk_apw').value) $('#pk_apw').value = passAcak(); });
  const st = $('#pk_st'), pj = $('#pk_j');
  const setAtasan = () => { const a = $('#pk_at'), d = pkAtasanDefault(st.value); if (a && [...a.options].some(o => o.value === d)) a.value = d; };
  if (st) st.addEventListener('change', () => { $('#pkAtasanW').hidden = !PK_PETUGAS.includes(st.value); $('#pkJabStW').hidden = st.value !== 'pengurus'; setAtasan(); });
  if (pj && st && (!x || !x.struktur)) pj.addEventListener('change', () => { if (PK_PETUGAS.includes(st.value)) { st.value = pkStrukturDefault(pj.value); setAtasan(); } });
}
const PK_STRUKTUR = [['keamanan', 'Ya, sebagai petugas keamanan'], ['kebersihan', 'Ya, sebagai petugas kebersihan'], ['petugas', 'Ya, sebagai petugas lingkungan lainnya'], ['pengurus', 'Ya, sebagai pengurus (pilih jabatan)'], ['tidak', 'Tidak ditampilkan']];
const PK_PETUGAS = ['keamanan', 'kebersihan', 'petugas'];
const PK_GRUP_LBL = {keamanan: 'Petugas keamanan', kebersihan: 'Petugas kebersihan', petugas: 'Petugas lingkungan'};
const pkStrukturDefault = jab => { const t = String(jab || '').toLowerCase(); return /satpam|komandan|keamanan|hansip|linmas/.test(t) ? 'keamanan' : /bersih|sampah|kebun|taman/.test(t) ? 'kebersihan' : 'petugas'; };
/* akun login untuk pekerja (satpam dll.) — dibuat sebagai pengurus tersembunyi oleh Pemilik */
const pkPengurus = x => x ? S.pengurus.find(p => p.dariPekerja === x.id) : null;
function pkAkunRoleDefault(v) { const k = v.struktur && PK_PETUGAS.includes(v.struktur) ? v.struktur : pkStrukturDefault(v.jabatan); return k === 'keamanan' && roleById('satpam') ? 'satpam' : ''; }
function pkAkunHtml(x, v) {
  const lk = pkPengurus(x);
  if (!bisaKelola()) return lk ? `<div class="gj-sec"><h4>Akun login aplikasi</h4><p class="muted" style="margin:0;font-size:.86rem">${lk.aktif !== false && lk.userId ? `Aktif · login dengan No. HP ${esc(hpTampil(lk.noHp))} · role ${esc((roleById(lk.peranId) || {}).nama || '-')}` : 'Akses login dicabut'}. Akun dikelola oleh Pemilik.</p></div>` : '';
  const roleOpt = sel => rolesAll().map(r => `<option value="${esc(r.id)}" ${r.id === sel ? 'selected' : ''}>${esc(r.nama)}</option>`).join('');
  if (lk && lk.userId) return `<div class="gj-sec"><h4>Akun login aplikasi</h4>
    <p style="margin:0 0 8px;font-size:.88rem">${lk.aktif !== false ? '<span class="chip ok">Aktif</span>' : '<span class="chip bad">Dicabut</span>'} Login dengan <b>No. HP ${esc(hpTampil(lk.noHp))}</b> (ikut No. HP di atas).</p>
    <div class="grid2"><div class="fld"><label for="pk_arl">Role / hak akses</label><select id="pk_arl" name="akunPeran">${roleOpt(lk.peranId)}</select></div>
      <div class="fld"><label for="pk_arp">Reset password</label><div style="display:flex;gap:6px"><input type="text" id="pk_arp" name="akunReset" autocomplete="off" autocapitalize="none" placeholder="Kosongkan bila tidak diganti" style="flex:1"><button type="button" class="btn sm" data-act="pk-acak" data-k="pk_arp">Acak</button></div></div></div>
    <label class="ck" style="font-weight:500"><input type="checkbox" name="${lk.aktif !== false ? 'akunCabut' : 'akunAktif'}"> ${lk.aktif !== false ? 'Cabut akses login (mis. sudah tidak bertugas)' : 'Aktifkan lagi akses login'}</label></div>`;
  return `<div class="gj-sec"><h4>Akun login aplikasi</h4>
    <label class="ck" style="font-weight:500;align-items:flex-start"><input type="checkbox" id="pk_akb" name="akunBuat"> <span>Buatkan akun login untuk pekerja ini<br><span class="muted" style="font-size:.82rem">Login memakai No. HP di atas. Cocok untuk satpam agar bisa mencatat tamu, paket, kejadian, dan menerima SOS di pos jaga, serta melihat slip gajinya sendiri.</span></span></label>
    <div id="pkAkunBaru" hidden style="margin-top:8px"><div class="grid2"><div class="fld"><label for="pk_arl">Role / hak akses</label><select id="pk_arl" name="akunPeran">${pkAkunRoleDefault(v) ? '' : '<option value="">— pilih role —</option>'}${roleOpt(pkAkunRoleDefault(v))}</select><span class="hint">Satpam: hanya menu Keamanan, lihat data warga & pengumuman.</span></div>
      <div class="fld"><label for="pk_apw">Password awal</label><div style="display:flex;gap:6px"><input type="text" id="pk_apw" name="akunPw" autocomplete="off" autocapitalize="none" placeholder="Minimal 8 karakter" style="flex:1"><button type="button" class="btn sm" data-act="pk-acak" data-k="pk_apw">Acak</button></div></div></div>
      <p class="muted" style="margin:0;font-size:.82rem">Pekerja wajib mengganti password saat pertama masuk. Akun ini tidak tampil dobel di Struktur Kepengurusan.</p></div></div>`;
}
function pkAkunCek(x, d) {
  if (!bisaKelola()) return true;
  const lk = pkPengurus(x), buat = d.akunBuat && !lk;
  if (buat || (lk && lk.userId)) {
    const n = String(d.noHp || '').replace(/\D/g, '').length;
    if (n < 10) { pesanDlg('Isi No. HP minimal 10 digit karena dipakai untuk login.', 'pk_hp'); return false; }
    const dipakai = loginTerpakai(d.noHp, lk && lk.id); if (dipakai) { pesanDlg(`No. HP ini sudah dipakai login ${dipakai}.`, 'pk_hp'); return false; }
    if (!roleById(d.akunPeran)) { pesanDlg('Pilih role untuk akun login.', 'pk_arl'); return false; }
  }
  if (buat && String(d.akunPw || '').length < 8) { pesanDlg('Password awal minimal 8 karakter.', 'pk_apw'); return false; }
  if (d.akunReset && String(d.akunReset).length < 8) { pesanDlg('Password baru minimal 8 karakter.', 'pk_arp'); return false; }
  return true;
}
async function pkAkunProses(x, pkId, row, d) {
  if (!bisaKelola()) return null;
  const lk = pkPengurus(x), buat = d.akunBuat && !lk;
  if (!buat && !lk) return null;
  const aktif = row.status !== 'Berhenti' && (lk ? (lk.aktif !== false ? !d.akunCabut : !!d.akunAktif) : true);
  const pg = {...(lk || {}), nama: row.nama, jabatan: row.jabatan || 'Petugas', noHp: row.noHp, peranId: d.akunPeran || (lk && lk.peranId) || 'satpam', aktif, dariPekerja: pkId, wargaId: (lk && lk.wargaId) || '', mulai: (lk && lk.mulai) || row.mulai || todayISO(), diperbarui: todayISO()};
  const pid = lk ? lk.id : 'pgk_' + uid();
  if (!lk) pg.dibuat = todayISO();
  if (await seedRoles() === false) return false;
  let pw = '';
  try {
    if (buat) { pw = String(d.akunPw); pg.userId = await buatAkunAuth(hpEmail(row.noHp), pw); pg.email = ''; }
    if (!await put('pengurus', pid, pg)) return false;
    if (pg.userId) {
      if (buat) { try { await SB.rpc('admin_konfirmasi_user', {target: pg.userId}); } catch (e) {} }
      if (aktif) await simpanProfil({user_id: pg.userId, nama: pg.nama, peran: 'pengurus', pengurus_id: pid, warga_id: null, ...(buat ? {wajib_ganti: true} : {})});
      else await hapusProfil(pg.userId);
      if (d.akunReset) { await resetPassword(pg.userId, String(d.akunReset)); pw = String(d.akunReset); }
      row.akunId = pg.userId;
    }
  } catch (e) { pesanDlg((/sudah dipakai|registered/i.test(String(e && e.message)) ? 'No. HP ini sudah dipakai akun login lain.' : 'Akun login gagal diatur: ' + pesanAuth(e)), 'pk_hp'); return false; }
  return {pg: {...pg, id: pid}, pw};
}
function pkAtasanOpsi() {
  const peta = new Map();
  pengurusAktif().filter(p => p.jabatan && orgLevel(p.jabatan) < 5).forEach(p => { const j = p.jabatan.trim(); peta.set(j, peta.has(j) ? peta.get(j) + ', ' + p.nama : p.nama); });
  const urut = j => { const i = JABATAN.indexOf(j); return i < 0 ? 99 : i; };
  return [...peta.entries()].sort((a, b) => urut(a[0]) - urut(b[0]));
}
function pkAtasanDefault(kat) {
  const ada = pkAtasanOpsi().map(o => o[0]), cari = re => ada.find(j => re.test(j.toLowerCase())) || '';
  return kat === 'keamanan' ? cari(/koordinator keamanan/) || cari(/seksi keamanan/) : kat === 'kebersihan' ? cari(/koordinator kebersihan/) || cari(/seksi kebersihan/) : '';
}
async function gjBuatSlip() {
  const per = S.gjPer, ada = gjBulan(per), list = pkAktif().filter(p => !ada.some(g => g.pekerjaId === p.id));
  if (!list.length) return;
  openDlg({title: `Buat slip gaji ${perLbl(per, true)}`, area: 'gaji', submitLabel: `Buat ${list.length} slip`,
    body: `<p style="margin:0">Slip draf dibuat dari gaji pokok dan tunjangan tetap masing-masing pekerja. Lembur, bonus, kasbon, atau potongan bisa ditambahkan per slip sebelum dibayar.</p>
      <div class="panel" style="max-height:240px;overflow:auto;padding:8px 12px;background:var(--sunk);border:0;font-size:.86rem">${list.map(p => `<div>${esc(p.nama)} · ${esc(p.jabatan || '')} · ${esc(rp(p.gajiPokok + jmlItem(p.tunjangan)))}</div>`).join('')}</div>
      <div class="fld"><label for="gb_h">Hari kerja bulan ini</label><input type="number" id="gb_h" name="hariKerja" min="0" max="31" value="26"><span class="hint">Tampil di slip (jumlah hadir bisa diubah per pekerja)</span></div>`,
    onSubmit: async d => {
      const hk = Math.max(0, Math.min(31, Math.round(Number(d.hariKerja) || 0)));
      let urut = ada.length;
      const docs = list.map(p => { urut++; return {koleksi: 'gaji', id: 'gj_' + per.replace('-', '') + '_' + p.id, data: {periode: per, pekerjaId: p.id, akunId: p.akunId || '', nama: p.nama, jabatan: p.jabatan || '', noSlip: `SG/${per.replace('-', '')}/${String(urut).padStart(3, '0')}`,
        pendapatan: [{nama: 'Gaji pokok', jumlah: Number(p.gajiPokok) || 0}, ...(p.tunjangan || []).filter(t => t.nama && Number(t.jumlah))], potongan: [], hariKerja: hk, hadir: hk, status: 'Draf', dibuat: todayISO(), dibuatOleh: namaSesi(), oleh: (S.me && S.me.id) || '', olehSesi: S.sesi || ''}}; });
      const {data, error} = await SB.from('dokumen').upsert(docs, {onConflict: 'koleksi,id', ignoreDuplicates: true}).select('id,data');
      if (error) { pesanDlg('Gagal membuat slip: ' + (sbErr(error).code === 'ditolak' ? 'role Anda tidak punya izin mengelola gaji.' : error.message)); return false; }
      for (const r of data || []) taruh('gaji', r.id, r.data);
      sinkron('gaji'); sbSched(); toast(`${(data || []).length} slip gaji dibuat sebagai draf.`); return true;
    }});
}
function openSlip(id) {
  const g = S.gaji.find(x => x.id === id); if (!g) return;
  const boleh = bisa('gaji') && g.status !== 'Dibayar', ro = boleh ? '' : 'disabled', h = gjHitung(g), p = pkById(g.pekerjaId) || {};
  const quick = (list, k) => boleh ? `<div class="gj-quick">${list.map(n => `<button type="button" data-act="gj-row-add" data-k="${k}" data-n="${esc(n)}">+ ${esc(n)}</button>`).join('')}</div>` : '';
  openDlg({title: `Slip gaji ${perLbl(g.periode, true)}`, area: 'gaji', submitLabel: 'Simpan slip',
    body: `<div class="panel" style="padding:10px 14px;background:var(--sunk);border:0"><b>${esc(g.nama)}</b> · ${esc(g.jabatan || '')}<div class="muted" style="font-size:.84rem">${esc(g.noSlip || '')} · ${g.status === 'Dibayar' ? `Dibayar ${esc(tgl(g.dibayar && g.dibayar.tanggal))} (${esc((g.dibayar && g.dibayar.metode) || '')})` : 'Draf, belum dibayar'}${p.bank ? ` · ${esc(p.bank)} ${esc(maskRek(p.noRek))}` : ''}</div></div>
      <div class="grid2"><div class="fld"><label for="gs_hk">Hari kerja</label><input type="number" id="gs_hk" name="hariKerja" min="0" max="31" value="${esc(g.hariKerja ?? '')}" ${ro}></div>
        <div class="fld"><label for="gs_hd">Hadir</label><input type="number" id="gs_hd" name="hadir" min="0" max="31" value="${esc(g.hadir ?? '')}" ${ro}></div></div>
      <div class="gj-sec"><h4>Pendapatan <span id="gjTPen">${esc(rp(h.pen))}</span></h4><div class="gj-rows" id="gjPen">${(g.pendapatan || []).map(x => gjItemRow(x, 'pen')).join('')}</div>${quick(PK_PENDAPATAN, '#gjPen')}${boleh ? '<button type="button" class="btn sm" data-act="gj-row-add" data-k="#gjPen" style="justify-self:start">+ Baris pendapatan</button>' : ''}</div>
      <div class="gj-sec"><h4>Potongan <span id="gjTPot" style="color:var(--bad)">${esc(rp(h.pot))}</span></h4><div class="gj-rows" id="gjPot">${(g.potongan || []).map(x => gjItemRow(x, 'pot')).join('')}</div>${quick(PK_POTONGAN, '#gjPot')}${boleh ? '<button type="button" class="btn sm" data-act="gj-row-add" data-k="#gjPot" style="justify-self:start">+ Baris potongan</button>' : ''}</div>
      <div class="gj-sum"><div><span>Pendapatan</span><b id="gjTPen2">${esc(rp(h.pen))}</b></div><div><span>Potongan</span><b id="gjTPot2">${esc(rp(h.pot))}</b></div><div class="net"><span>Gaji bersih</span><b id="gjTNet">${esc(rp(h.net))}</b></div></div>
      <div class="fld"><label for="gs_c">Catatan di slip</label><input type="text" id="gs_c" name="catatan" maxlength="200" value="${esc(g.catatan || '')}" ${ro}></div>`,
    foot: `<button type="button" class="btn ghost" data-act="gj-pdf" data-id="${esc(g.id)}">Unduh PDF</button>${bisa('gaji') && g.status === 'Dibayar' ? `<button type="button" class="btn ghost" data-act="gj-batal-bayar" data-id="${esc(g.id)}" style="color:var(--bad)">Batalkan pembayaran</button>` : ''}`,
    onSubmit: boleh ? async d => {
      const pen = gjAmbil('#gjPen'), pot = gjAmbil('#gjPot');
      const salah = [...pen, ...pot].find(x => !x.nama || x.jumlah <= 0); if (salah) { pesanDlg('Setiap baris harus punya nama komponen dan jumlah lebih dari 0, atau hapus barisnya.'); return false; }
      if (jmlItem(pen) - jmlItem(pot) < 0) { pesanDlg('Potongan melebihi pendapatan.'); return false; }
      const ok = await put('gaji', g.id, {...g, pendapatan: pen, potongan: pot, hariKerja: d.hariKerja === '' ? '' : Number(d.hariKerja), hadir: d.hadir === '' ? '' : Number(d.hadir), catatan: String(d.catatan || '').trim(), diperbarui: todayISO()});
      if (ok) toast('Slip disimpan.'); return ok;
    } : null,
    onDelete: boleh ? async () => { const ok = await del('gaji', g.id); if (ok) toast('Slip draf dihapus.'); return ok; } : null, deleteLabel: 'Hapus slip'});
  // jaga total kedua tetap sinkron
  const sync = () => { const a = $('#gjTPen'), b = $('#gjTPen2'); if (a && b) b.textContent = a.textContent; };
  ['#gjPen', '#gjPot'].forEach(k => { const el = $(k); if (el) el.addEventListener('input', () => setTimeout(sync, 0)); });
}
function openBayarGaji(ids) {
  const L = ids.map(id => S.gaji.find(g => g.id === id)).filter(g => g && g.status !== 'Dibayar'); if (!L.length) return;
  const total = L.reduce((t, g) => t + gjHitung(g).net, 0), sisa = saldoKini();
  let konfirm = false;
  openDlg({title: L.length > 1 ? `Bayar ${L.length} slip gaji` : 'Bayar gaji', area: 'gaji', submitLabel: `Bayar ${rp(total)}`,
    body: `<div class="panel" style="max-height:200px;overflow:auto;padding:8px 12px;background:var(--sunk);border:0;font-size:.86rem">${L.map(g => { const p = pkById(g.pekerjaId) || {}; return `<div style="display:flex;justify-content:space-between;gap:8px"><span>${esc(g.nama)}${p.bank ? ` <span class="muted">· ${esc(p.bank)} ${esc(maskRek(p.noRek))}</span>` : ''}</span><b>${esc(rp(gjHitung(g).net))}</b></div>`; }).join('')}</div>
      <div class="grid2"><div class="fld"><label for="gp_t">Tanggal bayar <span class="req">*</span></label><input type="date" id="gp_t" name="tanggal" required value="${todayISO()}"></div>
        <div class="fld"><label for="gp_m">Metode</label><select id="gp_m" name="metode">${METODE.map(m => `<option ${L.length === 1 && (pkById(L[0].pekerjaId) || {}).bank && m === 'Transfer bank' ? 'selected' : ''}>${esc(m)}</option>`).join('')}</select></div></div>
      <p class="muted" style="margin:0;font-size:.84rem">Total ${esc(rp(total))} dicatat sebagai pengeluaran di Buku kas. Saldo kas saat ini ${esc(rp(sisa))}${total > sisa ? ' — <b style="color:var(--bad)">tidak mencukupi</b>' : ''}.</p>`,
    onSubmit: async d => {
      if (!d.tanggal) { pesanDlg('Isi tanggal bayar.', 'gp_t'); return false; }
      if (total > saldoKini() && !konfirm) { konfirm = true; pesanDlg(`Dana kas tidak mencukupi: saldo ${rp(saldoKini())}, kurang ${rp(total - saldoKini())}. Klik bayar sekali lagi bila tetap ingin mencatat.`); return false; }
      let n = 0;
      for (const g of L) {
        const p = pkById(g.pekerjaId) || {}, net = gjHitung(g).net;
        const okKas = await put('kas', 'gaji-' + g.id, {jenis: 'keluar', tanggal: d.tanggal, kategori: pkKatKas(p.id ? p : g), uraian: `Gaji ${perLbl(g.periode, true)} – ${g.nama} (${g.jabatan || 'pekerja'})`, jumlah: net, metode: d.metode,
          penerima: g.nama, noNota: g.noSlip || '', catatan: 'Pembayaran slip gaji', gajiId: g.id, dibuat: todayISO()});
        if (!okKas) break;
        const ok = await put('gaji', g.id, {...g, status: 'Dibayar', dibayar: {tanggal: d.tanggal, metode: d.metode, oleh: namaSesi(), waktu: nowDT()}, kasId: 'gaji-' + g.id});
        if (!ok) break; n++;
      }
      if (n) toast(`${n} slip gaji dibayar dan dicatat di kas.`);
      return n === L.length;
    }});
}
async function gjBatalBayar(b) {
  const g = S.gaji.find(x => x.id === b.dataset.id); if (!g || !bisa('gaji')) return;
  if (!b.dataset.confirm) { b.dataset.confirm = '1'; b.textContent = 'Klik lagi untuk membatalkan'; return; }
  b.disabled = true;
  if (S.kas.some(k => k.id === (g.kasId || 'gaji-' + g.id))) { const okd = await del('kas', g.kasId || 'gaji-' + g.id); if (!okd) return; }
  const ok = await put('gaji', g.id, {...g, status: 'Draf', dibayar: null, kasId: ''});
  if (ok) { toast('Pembayaran dibatalkan; catatan kas dihapus.'); dlg.close(); }
}
function teksSlip(g) {
  const h = gjHitung(g);
  return `*SLIP GAJI ${perLbl(g.periode, true).toUpperCase()}*\n${lingk()}\nNo: ${g.noSlip || '-'}\n\nNama: ${g.nama}\nJabatan: ${g.jabatan || '-'}${g.hariKerja ? `\nKehadiran: ${g.hadir ?? g.hariKerja}/${g.hariKerja} hari` : ''}\n\n*Pendapatan*\n${(g.pendapatan || []).map(x => `- ${x.nama}: ${rp(x.jumlah)}`).join('\n')}`
    + `${(g.potongan || []).length ? `\n\n*Potongan*\n${g.potongan.map(x => `- ${x.nama}: ${rp(x.jumlah)}`).join('\n')}` : ''}\n\n*Gaji bersih: ${rp(h.net)}*\n${g.dibayar ? `Dibayar ${tgl(g.dibayar.tanggal)} (${g.dibayar.metode})` : ''}\n\nTerima kasih atas kerja kerasnya.\n${pengirim()}`;
}
async function pdfSlip(g) {
  const P = new MiniPDF(), st = S.set, M = 16, CW = 178, p = pkById(g.pekerjaId) || {}, h = gjHitung(g);
  try { P.img = await logoJpeg(); } catch (e) { P.img = null; }
  P.image(M, 11, 15.5, 18);
  const tx = P.img ? M + 20 : M;
  P.text(tx, 18, `PENGURUS RT ${st.rt || '...'} / RW ${st.rw || '...'}`, {size: 13, bold: true});
  P.text(tx, 23.5, [lingk(), st.kelurahan && 'Kel. ' + st.kelurahan, st.kecamatan && 'Kec. ' + st.kecamatan, st.kota].filter(Boolean).join(' · '), {size: 9.5, color: [74, 59, 48]});
  P.line(M, 32, M + CW, 32, 1.4); P.line(M, 33.2, M + CW, 33.2, .5);
  P.text(105, 43, 'SLIP GAJI', {size: 15, bold: true, align: 'center'});
  P.text(105, 49, 'Periode ' + perLbl(g.periode, true), {size: 10, align: 'center', color: [74, 59, 48]});
  P.text(M + CW, 49, 'No. ' + (g.noSlip || '-'), {size: 9, align: 'right', color: [74, 59, 48]});
  // identitas
  const kv = (x, y, k, v) => { P.text(x, y, k, {size: 9.5, color: [74, 59, 48]}); P.text(x + 30, y, ': ' + (v || '-'), {size: 9.5}); };
  kv(M, 59, 'Nama', g.nama); kv(M, 64.5, 'Jabatan', g.jabatan); kv(M, 70, 'Mulai bekerja', p.mulai ? tglSurat(p.mulai) : '-');
  kv(110, 59, 'Kehadiran', g.hariKerja ? `${g.hadir ?? g.hariKerja} / ${g.hariKerja} hari` : '-');
  kv(110, 64.5, 'Pembayaran', g.dibayar ? `${g.dibayar.metode}, ${tglSurat(g.dibayar.tanggal)}` : 'Belum dibayar');
  kv(110, 70, 'Rekening', p.bank ? `${p.bank} ${p.noRek || ''}`.trim() : 'Tunai');
  // tabel pendapatan & potongan berdampingan
  const tabel = (x, y, judul, items, total, warna) => {
    const w = 86; P.rect(x, y, w, 7, {fill: [243, 236, 224]}); P.text(x + 2, y + 4.9, judul, {size: 10, bold: true});
    let yy = y + 7;
    (items.length ? items : [{nama: '—', jumlah: 0}]).forEach(it => { P.rect(x, yy, w, 6.5, {stroke: [205, 191, 174], lw: .4}); P.text(x + 2, yy + 4.5, it.nama, {size: 9.5}); if (it.jumlah) P.text(x + w - 2, yy + 4.5, rp(it.jumlah), {size: 9.5, align: 'right'}); yy += 6.5; });
    P.rect(x, yy, w, 7, {fill: [250, 246, 239], stroke: [205, 191, 174], lw: .4}); P.text(x + 2, yy + 4.9, 'Total ' + judul.toLowerCase(), {size: 9.5, bold: true}); P.text(x + w - 2, yy + 4.9, rp(total), {size: 9.5, bold: true, align: 'right', color: warna});
    return yy + 7;
  };
  const y1 = tabel(M, 78, 'Pendapatan', g.pendapatan || [], h.pen), y2 = tabel(M + 92, 78, 'Potongan', g.potongan || [], h.pot, [180, 45, 27]);
  let y = Math.max(y1, y2) + 6;
  P.rect(M, y, CW, 15, {fill: [31, 122, 77]});
  P.text(M + 4, y + 6.3, 'GAJI BERSIH (TAKE HOME PAY)', {size: 10, bold: true, color: [255, 255, 255]});
  P.text(M + CW - 4, y + 9.5, rp(h.net), {size: 15, bold: true, align: 'right', color: [255, 255, 255]});
  P.text(M + 4, y + 11.8, 'Terbilang: ' + terbilang(h.net), {size: 8.5, color: [230, 245, 236]});
  y += 22;
  if (g.catatan) { pdfWrap('Catatan: ' + g.catatan, CW, false, 9).forEach(l => { P.text(M, y, l, {size: 9, color: [74, 59, 48]}); y += 4.5; }); y += 2; }
  y += 4;
  P.text(M + 30, y, `${st.kota || lingk()}, ${tglSurat(g.dibayar ? g.dibayar.tanggal : todayISO())}`, {size: 9.5, align: 'center'});
  P.text(M + 30, y + 5, 'Bendahara', {size: 9.5, align: 'center'}); P.text(M + CW - 30, y + 5, 'Penerima', {size: 9.5, align: 'center'});
  P.text(M + 30, y + 26, namaBendahara() || '(..............................)', {size: 9.5, bold: true, align: 'center'});
  P.text(M + CW - 30, y + 26, g.nama, {size: 9.5, bold: true, align: 'center'});
  P.text(105, 287, 'Slip gaji ini dibuat dari aplikasi Warga Kasuari. Simpan sebagai bukti penerimaan gaji.', {size: 7.5, align: 'center', color: [120, 110, 100]});
  return P.bytes();
}
async function unduhSlip(id) {
  const g = S.gaji.find(x => x.id === id); if (!g) return;
  try { unduh(fname(`Slip Gaji ${g.nama} - ${perLbl(g.periode, true)}.pdf`), new Blob([await pdfSlip(g)], {type: 'application/pdf'})); } catch (e) { toast('Slip PDF gagal dibuat.', 'bad'); }
}
function xlsxGaji(per, tahun) {
  const L = tahun ? S.gaji.filter(g => String(g.periode).startsWith(tahun + '-')) : gjBulan(per);
  const W = MiniXlsx.sheet([6, 26, 20, 16, 15, 15, 15, 14, 18]), K = W.ST;
  W.put(0, `PENGURUS RT ${S.set.rt || '…'} / RW ${S.set.rw || '…'} · ${lingk()}`, K.kop, 9).next().skip();
  W.put(0, tahun ? 'REKAP GAJI PEKERJA TAHUN ' + tahun : 'REKAP GAJI PEKERJA', K.title, 9).next();
  if (!tahun) W.put(0, 'Periode ' + perLbl(per, true), K.sub, 9).next();
  W.skip();
  W.put(0, 'No', K.headC).put(1, 'Nama', K.head).put(2, 'Jabatan', K.head).put(3, tahun ? 'Periode' : 'No. slip', K.head).put(4, 'Pendapatan', K.headR).put(5, 'Potongan', K.headR).put(6, 'Gaji bersih', K.headR).put(7, 'Status', K.head).put(8, 'Tanggal bayar', K.head).next();
  const urut = [...L].sort((a, b) => String(a.periode).localeCompare(String(b.periode)) || String(a.nama).localeCompare(String(b.nama)));
  urut.forEach((g, i) => { const h = gjHitung(g); W.put(0, i + 1, K.center).put(1, g.nama, K.text).put(2, g.jabatan || '', K.text).put(3, tahun ? perLbl(g.periode, true) : g.noSlip || '', K.text).put(4, h.pen, K.num).put(5, h.pot, K.num).put(6, h.net, K.num).put(7, g.status || 'Draf', K.text).put(8, g.dibayar ? tgl(g.dibayar.tanggal) : '', K.text).next(); });
  const t = urut.reduce((a, g) => { const h = gjHitung(g); return {pen: a.pen + h.pen, pot: a.pot + h.pot, net: a.net + h.net}; }, {pen: 0, pot: 0, net: 0});
  W.put(0, '', K.totText).put(1, 'Jumlah', K.totText).put(2, '', K.totText).put(3, '', K.totText).put(4, t.pen, K.totNum).put(5, t.pot, K.totNum).put(6, t.net, K.totNum).put(7, '', K.totText).put(8, '', K.totText).next();
  W.skip().put(0, 'Dibuat oleh,', K.sign, 4).put(5, `${S.set.kota || lingk()}, ${tglSurat(todayISO())}`, K.sign, 4).next();
  W.put(0, 'Bendahara', K.sign, 4).put(5, `Mengetahui, Ketua RT ${S.set.rt || ''}`.trim(), K.sign, 4).next().skip(3);
  W.put(0, namaBendahara() || '(..............................)', K.signB, 4).put(5, namaKetua() || '(..............................)', K.signB, 4).next();
  return W.build('Gaji ' + (tahun || per));
}

/* ---------- Verifikasi dua langkah (MFA TOTP) untuk Pemilik ---------- */
async function mfaMuat() {
  if (!SB || !S.authUser || !S.profil || S.profil.peran !== 'pemilik') { S.mfaInfo = null; return; }
  try {
    const {data} = await SB.auth.mfa.listFactors();
    const v = ((data && data.totp) || []).filter(f => f.status === 'verified');
    S.mfaInfo = {aktif: v.length > 0, faktor: v};
  } catch (e) { S.mfaInfo = {aktif: false, faktor: [], gagal: true}; }
  sbSched();
}
function panelMfa() {
  if (S.sesi !== 'pemilik' || !S.mfaInfo) return '';
  const I = S.mfaInfo;
  return `<div class="panel" style="display:grid;gap:8px;${I.aktif ? '' : 'border-color:var(--sun);background:var(--sun-soft)'}">
    <h3 style="margin:0">Verifikasi dua langkah <small>akun Pemilik</small></h3>
    ${I.aktif ? `<p style="margin:0;font-size:.9rem"><span class="chip ok">Aktif</span> Setiap login Pemilik meminta kode 6 digit dari aplikasi authenticator di HP Anda.</p>
      <div class="muted" style="font-size:.82rem">${I.faktor.map(f => `${esc(f.friendly_name || 'Authenticator')} · didaftarkan ${esc(tgl(String(f.created_at || '').slice(0, 10)))}`).join('<br>')}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">${I.faktor.length < 2 ? '<button type="button" class="btn sm" data-act="mfa-on">+ Tambah HP cadangan</button>' : ''}<button type="button" class="btn sm ghost" data-act="mfa-off" style="color:var(--bad)">Matikan</button></div>`
    : `<p style="margin:0;font-size:.9rem">Lindungi akun Pemilik: selain password, login juga memerlukan kode dari aplikasi <b>Google Authenticator</b>, <b>Microsoft Authenticator</b>, atau sejenisnya. Password yang bocor saja tidak cukup untuk masuk.</p>
      <div><button type="button" class="btn sm pri" data-act="mfa-on">🔐 Aktifkan verifikasi dua langkah</button></div>`}</div>`;
}
async function openMfaDaftar() {
  try {
    const {data: lf} = await SB.auth.mfa.listFactors();
    for (const f of ((lf && lf.all) || []).filter(f => f.status !== 'verified')) await SB.auth.mfa.unenroll({factorId: f.id});
  } catch (e) {}
  const {data, error} = await SB.auth.mfa.enroll({factorType: 'totp', friendlyName: 'HP ' + new Date().toISOString().slice(0, 16).replace('T', ' '), issuer: 'Warga Kasuari'});
  if (error || !data) { toast('Tidak bisa memulai verifikasi dua langkah: ' + ((error && error.message) || 'coba lagi'), 'bad'); return; }
  const secret = data.totp.secret;
  openDlg({title: 'Aktifkan verifikasi dua langkah', submitLabel: 'Verifikasi & aktifkan',
    body: `<ol style="margin:0;padding-left:18px;display:grid;gap:8px;font-size:.9rem">
        <li>Pasang aplikasi <b>Google Authenticator</b> atau <b>Microsoft Authenticator</b> di HP (gratis di Play Store / App Store).</li>
        <li>Di aplikasi tersebut pilih <b>Tambah akun → Pindai kode QR</b>, lalu pindai kode di bawah.</li>
        <li>Masukkan kode 6 digit yang muncul di aplikasi.</li></ol>
      <div style="display:grid;place-items:center;gap:6px"><img src="${esc(data.totp.qr_code)}" alt="Kode QR verifikasi dua langkah" style="width:200px;height:200px;background:#fff;border-radius:12px;padding:8px">
        <span class="muted" style="font-size:.8rem">Tidak bisa memindai? Masukkan kunci ini secara manual:</span>
        <code style="font-size:.9rem;letter-spacing:.08em;word-break:break-all;text-align:center">${esc(secret)}</code>
        <button type="button" class="btn sm ghost" data-act="salin" data-teks="${esc(secret)}">Salin kunci</button></div>
      <div class="fld"><label for="mfa_k">Kode 6 digit <span class="req">*</span></label><input type="text" id="mfa_k" name="kode" inputmode="numeric" autocomplete="one-time-code" maxlength="6" required placeholder="123456" style="letter-spacing:.3em;font-size:1.2rem;text-align:center"></div>`,
    onSubmit: async d => {
      const kode = String(d.kode || '').replace(/\D/g, '');
      if (kode.length !== 6) { pesanDlg('Masukkan 6 digit kode dari aplikasi authenticator.', 'mfa_k'); return false; }
      const {error: e2} = await SB.auth.mfa.challengeAndVerify({factorId: data.id, code: kode});
      if (e2) { pesanDlg('Kode salah atau sudah kedaluwarsa. Coba kode terbaru dari aplikasi.', 'mfa_k'); return false; }
      toast('Verifikasi dua langkah aktif. Login berikutnya akan meminta kode dari aplikasi authenticator.');
      await mfaMuat(); return true;
    }});
}
function openMfaMatikan() {
  const f = S.mfaInfo && S.mfaInfo.faktor || []; if (!f.length) return;
  openDlg({title: 'Matikan verifikasi dua langkah?', submitLabel: 'Matikan',
    body: `<p style="margin:0">Akun Pemilik akan kembali hanya dilindungi password. Masukkan kode dari aplikasi authenticator untuk konfirmasi.</p>
      <div class="fld"><label for="mfa_o">Kode 6 digit <span class="req">*</span></label><input type="text" id="mfa_o" name="kode" inputmode="numeric" autocomplete="one-time-code" maxlength="6" required style="letter-spacing:.3em;font-size:1.2rem;text-align:center"></div>`,
    onSubmit: async d => {
      const kode = String(d.kode || '').replace(/\D/g, '');
      const {error} = await SB.auth.mfa.challengeAndVerify({factorId: f[0].id, code: kode});
      if (error) { pesanDlg('Kode salah atau sudah kedaluwarsa.', 'mfa_o'); return false; }
      for (const x of f) { const {error: e2} = await SB.auth.mfa.unenroll({factorId: x.id}); if (e2) { pesanDlg('Gagal mematikan: ' + e2.message); return false; } }
      toast('Verifikasi dua langkah dimatikan.'); await mfaMuat(); return true;
    }});
}
function vMfaKartu() {
  return `<div class="login"><div class="login-head"><img class="logo-login" src="${LOGO}" alt="Logo Vila Nusa Indah 5"><h2>Verifikasi dua langkah</h2>
      <p class="muted" style="margin:4px 0 0">Buka aplikasi authenticator di HP Anda, lalu masukkan kode 6 digit untuk akun Warga Kasuari.</p></div>
    <form id="mfaForm" class="login-pin" style="border-top:0;padding-top:0">
      <div class="fld"><label for="mfaKode">Kode verifikasi</label><input type="text" id="mfaKode" inputmode="numeric" autocomplete="one-time-code" maxlength="6" required autofocus placeholder="123456" style="letter-spacing:.35em;font-size:1.4rem;text-align:center"></div>
      ${S.mfaErr ? `<div class="notice" role="alert" style="font-size:.86rem">${esc(S.mfaErr)}</div>` : ''}
      <button type="submit" class="btn pri" style="width:100%">Verifikasi</button>
      <button type="button" class="btn ghost" data-act="mfa-batal" style="width:100%">Batal & keluar</button>
      <p class="muted" style="margin:0;font-size:.8rem">HP hilang? Hubungi pengelola teknis aplikasi untuk mengatur ulang verifikasi dua langkah.</p></form></div>`;
}
let mfaGagal = 0;
async function prosesMfa() {
  const el = $('#mfaKode'), kode = String((el && el.value) || '').replace(/\D/g, ''), M = S.mfaPerlu;
  if (!M) return;
  if (kode.length !== 6) { S.mfaErr = 'Masukkan 6 digit kode.'; render(); return; }
  const b = document.querySelector('#mfaForm button[type=submit]'); if (b) b.disabled = true;
  const {error} = await SB.auth.mfa.challengeAndVerify({factorId: M.factorId, code: kode});
  if (error) {
    mfaGagal++;
    S.mfaErr = mfaGagal >= 5 ? 'Terlalu banyak kode salah. Tunggu beberapa menit lalu coba lagi.' : 'Kode salah atau sudah kedaluwarsa. Gunakan kode terbaru di aplikasi.';
    render(); return;
  }
  mfaGagal = 0; S.mfaErr = ''; S.mfaPerlu = null;
  await masukSesi(M.user);
}

/* ---------- Notifikasi HP (Web Push) ---------- */
const pushDidukung = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
const iosBelumInstal = () => /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window.navigator.standalone || matchMedia('(display-mode: standalone)').matches);
let pushSub = null, pushCek = false;
function b64uKeArr(s) { const p = '='.repeat((4 - s.length % 4) % 4), b = atob((s + p).replace(/-/g, '+').replace(/_/g, '/')); return Uint8Array.from(b, c => c.charCodeAt(0)); }
function namaPerangkat() { const u = navigator.userAgent; return (/android/i.test(u) ? 'Android' : /iphone|ipad/i.test(u) ? 'iPhone/iPad' : /windows/i.test(u) ? 'Windows' : /mac/i.test(u) ? 'Mac' : 'Perangkat') + ' · ' + (/edg\//i.test(u) ? 'Edge' : /chrome/i.test(u) ? 'Chrome' : /firefox/i.test(u) ? 'Firefox' : /safari/i.test(u) ? 'Safari' : 'Browser'); }
async function pushSegarkan() {
  if (!pushDidukung() || !SB || !S.authUser) return;
  try {
    const reg = await navigator.serviceWorker.getRegistration(); pushSub = reg ? await reg.pushManager.getSubscription() : null;
    if (pushSub && Notification.permission === 'granted') { const j = pushSub.toJSON(); await SB.rpc('push_daftar', {p_endpoint: j.endpoint, p_p256dh: j.keys.p256dh, p_auth: j.keys.auth, p_perangkat: namaPerangkat()}); }
  } catch (e) {}
  pushCek = true; sbSched();
}
function pushStatus() {
  if (!pushDidukung()) return iosBelumInstal() ? 'ios' : 'tidak';
  if (Notification.permission === 'denied') return 'ditolak';
  return pushSub && Notification.permission === 'granted' ? 'aktif' : 'belum';
}
async function pushAktifkan(b) {
  if (b) b.disabled = true;
  try {
    const izin = await Notification.requestPermission();
    if (izin !== 'granted') { toast(izin === 'denied' ? 'Izin notifikasi ditolak. Aktifkan lewat pengaturan browser/HP.' : 'Izin notifikasi belum diberikan.', 'bad'); return; }
    const reg = await navigator.serviceWorker.ready;
    const {data: kunci, error} = await SB.rpc('push_kunci_publik'); if (error || !kunci) throw error || new Error('kunci');
    pushSub = await reg.pushManager.getSubscription() || await reg.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: b64uKeArr(kunci)});
    const j = pushSub.toJSON();
    const r = await SB.rpc('push_daftar', {p_endpoint: j.endpoint, p_p256dh: j.keys.p256dh, p_auth: j.keys.auth, p_perangkat: namaPerangkat()}); if (r.error) throw r.error;
    toast('Notifikasi aktif di perangkat ini. Coba tekan "Kirim tes".');
  } catch (e) { toast('Notifikasi gagal diaktifkan. Pastikan aplikasi dibuka lewat https dan coba lagi.', 'bad'); }
  finally { if (b) b.disabled = false; render(); }
}
async function pushMatikan(b) {
  if (b) b.disabled = true;
  try { if (pushSub) { const ep = pushSub.endpoint; await pushSub.unsubscribe(); await SB.rpc('push_lepas', {p_endpoint: ep}); } } catch (e) {}
  pushSub = null; toast('Notifikasi dimatikan di perangkat ini.'); render();
}
async function pushTes(b) {
  if (b) b.disabled = true;
  try {
    const {data, error} = await SB.functions.invoke('kirim-push', {body: {jenis: 'tes'}});
    if (error) throw error;
    toast(data && data.terkirim ? `Tes terkirim ke ${data.terkirim} perangkat Anda. Notifikasi muncul dalam beberapa detik.` : 'Tidak ada perangkat aktif yang menerima tes.', data && data.terkirim ? '' : 'bad');
  } catch (e) { toast('Tes gagal dikirim. Periksa koneksi internet.', 'bad'); }
  finally { if (b) b.disabled = false; }
}
function panelNotif(untuk) {
  if (!pushCek) return '';
  const st = pushStatus(), warga = untuk === 'warga';
  const judul = warga ? 'Kabar SOS di HP ini' : 'Alarm SOS di HP ini';
  const ket = warga ? 'Dapatkan notifikasi saat panggilan darurat Anda sedang ditangani petugas.' : 'HP berbunyi dan bergetar saat warga menekan SOS, walau aplikasi sedang ditutup.';
  const isi = st === 'aktif' ? `<span class="chip ok">Aktif</span><span class="muted" style="font-size:.84rem">${esc(namaPerangkat())}</span><button type="button" class="btn sm" data-act="push-tes">Kirim tes</button><button type="button" class="btn sm ghost" data-act="push-off">Matikan</button>`
    : st === 'belum' ? `<button type="button" class="btn sm pri" data-act="push-on">🔔 Aktifkan notifikasi</button>`
    : st === 'ditolak' ? '<span class="chip bad">Diblokir</span><span class="muted" style="font-size:.84rem">Izinkan notifikasi untuk situs ini di pengaturan browser/HP, lalu muat ulang.</span>'
    : st === 'ios' ? '<span class="muted" style="font-size:.84rem">Di iPhone: buka menu Bagikan → "Tambahkan ke Layar Utama", lalu buka aplikasi dari ikon tersebut untuk mengaktifkan notifikasi (iOS 16.4+).</span>'
    : '<span class="muted" style="font-size:.84rem">Browser ini belum mendukung notifikasi. Gunakan Chrome di Android atau aplikasi yang sudah diinstal.</span>';
  if (st === 'aktif' && !warga && S.kmTab !== 'pos') return '';
  return `<div class="panel" style="display:grid;gap:8px;${st === 'belum' && !warga ? 'border-color:var(--sun);background:var(--sun-soft)' : ''}"><h3 style="margin:0">${judul}</h3><p class="muted" style="margin:0;font-size:.86rem">${ket}</p><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">${isi}</div></div>`;
}

/* ---------- Lokasi lingkungan (peta) ---------- */
const LOKASI_DEF = {lat: -6.3403724, lng: 106.9677112, placeId: 'ChIJFUB5FACTaS4RjOJ6MsWYaWI', alamat: 'Jl. Vila Nusa Indah 5 Cluster Kasuari, Ciangsana, Kec. Gunung Putri, Kabupaten Bogor, Jawa Barat 16968'};
const lokasiRT = () => ({...LOKASI_DEF, ...((S.set && S.set.lokasi) || {})});
const petaUrl = L => `https://www.google.com/maps/search/?api=1&query=${L.lat},${L.lng}${L.placeId ? '&query_place_id=' + encodeURIComponent(L.placeId) : ''}`;
const petaArah = L => `https://www.google.com/maps/dir/?api=1&destination=${L.lat},${L.lng}`;
const petaEmbed = L => `https://maps.google.com/maps?q=${L.lat},${L.lng}&z=17&hl=id&output=embed`;
function petaAktif() { try { return localStorage.getItem('peta-muat') === '1'; } catch (e) { return false; } }
function panelLokasi({blok = '', judul = 'Lokasi lingkungan', teksBagi = '', ringkas = false, labelBagi = ''} = {}) {
  const L = lokasiRT(), alamat = (blok ? 'Blok ' + blok + ', ' : '') + L.alamat;
  const bagi = teksBagi || `*${blok ? 'Alamat rumah saya' : 'Lokasi ' + lingk()}*\n${alamat}\n\nPeta: ${petaUrl(L)}`;
  return `<div class="panel peta"><h3>${esc(judul)} <small>${esc(lingk())}</small></h3>
    <div class="peta-alamat">${ico('pin')}<span>${blok ? `<b>Blok ${esc(blok)}</b>, ` : ''}${esc(L.alamat)}</span></div>
    ${ringkas ? '' : `<div class="peta-frame">${petaAktif() ? `<iframe src="${esc(petaEmbed(L))}" title="Peta ${esc(lingk())}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>` : `<button type="button" class="muat" data-act="peta-muat">${ico('pin')}<b>Tampilkan peta</b><span class="muted" style="font-size:.82rem">Ketuk untuk memuat peta Google Maps</span></button>`}</div>`}
    <div class="peta-act"><a class="btn sm pri" href="${esc(petaArah(L))}" target="_blank" rel="noopener">Petunjuk arah</a><a class="btn sm" href="${esc(petaUrl(L))}" target="_blank" rel="noopener">Buka di Google Maps</a>
      <a class="btn sm wa" href="${esc(waShare(bagi))}" target="_blank" rel="noopener">${esc(labelBagi || (blok ? 'Kirim alamat ke tamu / kurir' : 'Bagikan lokasi'))}</a><button type="button" class="btn sm ghost" data-act="salin" data-teks="${esc(alamat + '\n' + petaUrl(L))}">Salin alamat</button></div></div>`;
}

/* ---------- Lapak warga (marketplace) ---------- */
const LP_KAT = [['Makanan & minuman', '🍱'], ['Kue & camilan', '🧁'], ['Kebutuhan rumah', '🧺'], ['Fashion', '👕'], ['Elektronik & gadget', '📱'], ['Barang bekas (preloved)', '♻️'], ['Jasa', '🛠️'], ['Les & kursus', '📚'], ['Sewa / properti', '🏠'], ['Tanaman & hewan', '🪴'], ['Lainnya', '🛍️']];
const lpEmoji = k => (LP_KAT.find(x => x[0] === k) || LP_KAT[LP_KAT.length - 1])[1];
const LP_HARGA = [['pas', 'Harga pas'], ['nego', 'Bisa nego'], ['mulai', 'Mulai dari'], ['gratis', 'Gratis']];
const LP_HARI = 60;
const lpSaya = () => (S.me && S.me.id) || '';
const lpModerator = () => bisa('lapak');
const bolehIzinLapak = () => !S.readOnly && (S.sesi === 'pemilik' ? bolehPemilik() : (pengurusSesi() || {}).peranId === 'ketua');
const lpMinta = () => S.warga.filter(w => w.status !== 'Pindah' && !w.izinLapak && w.mintaLapak && w.mintaLapak.status === 'Menunggu');
const lpBolehJual = () => isWarga() && !!(wargaSaya() || {}).izinLapak;
function lpFav() { try { return new Set(JSON.parse(localStorage.getItem('lapak-fav') || '[]')); } catch (e) { return new Set(); } }
function lpFavSet(set) { try { localStorage.setItem('lapak-fav', JSON.stringify([...set].slice(-200))); } catch (e) {} }
const lpHarga = x => x.hargaTipe === 'gratis' ? 'Gratis' : (x.hargaTipe === 'mulai' ? 'Mulai ' : '') + rp(x.harga) + (x.satuan ? ` <small>/${esc(x.satuan)}</small>` : '') + (x.hargaTipe === 'nego' ? ' <small>nego</small>' : '');
const lpHargaTeks = x => x.hargaTipe === 'gratis' ? 'Gratis' : (x.hargaTipe === 'mulai' ? 'Mulai ' : '') + rp(x.harga) + (x.satuan ? '/' + x.satuan : '') + (x.hargaTipe === 'nego' ? ' (nego)' : '');
const lpKedaluwarsa = x => !!x.berlaku && x.berlaku < todayISO();
function lamaLalu(iso) {
  if (!iso) return ''; const d = new Date(iso.length <= 10 ? iso + 'T00:00' : iso), m = Math.round((Date.now() - d) / 6e4);
  if (m < 2) return 'baru saja'; if (m < 60) return m + ' mnt lalu'; if (m < 1440) return Math.floor(m / 60) + ' jam lalu'; if (m < 10080) return Math.floor(m / 1440) + ' hari lalu'; return tgl(iso.slice(0, 10));
}
// tampil untuk umum: bukan disembunyikan, belum kedaluwarsa, terjual masih tampil 7 hari
function lpTampilUmum(x) {
  if (x.status === 'Disembunyikan' || lpKedaluwarsa(x)) return false;
  if (x.status === 'Terjual' && x.terjualPada && (Date.now() - new Date(x.terjualPada)) / 864e5 > 7) return false;
  return true;
}
function lpKartu(x) {
  const fav = lpFav().has(x.id), foto = (x.foto || [])[0], habis = x.status === 'Terjual' || x.status === 'Habis';
  return `<article class="lp-card" data-act="lp-buka" data-id="${esc(x.id)}" tabindex="0">
    <div class="lp-img">${foto ? `<img src="${esc(foto)}" alt="" loading="lazy" decoding="async">` : `<span aria-hidden="true">${lpEmoji(x.kategori)}</span>`}
      ${habis ? `<span class="st">${esc(x.status)}</span>` : x.status === 'Disembunyikan' ? '<span class="st">Disembunyikan</span>' : lpKedaluwarsa(x) ? '<span class="st">Kedaluwarsa</span>' : ''}
      ${(x.foto || []).length > 1 ? `<span class="n">${x.foto.length} foto</span>` : ''}</div>
    <button type="button" class="lp-fav${fav ? ' on' : ''}" data-act="lp-fav" data-id="${esc(x.id)}" aria-label="${fav ? 'Hapus dari favorit' : 'Simpan ke favorit'}" aria-pressed="${fav}">${ico('hati')}</button>
    <div class="lp-body"><div class="lp-harga">${lpHarga(x)}</div><div class="lp-judul">${esc(x.judul)}</div>
      <div class="lp-meta">${x.penjual && x.penjual.blok ? `<span>${esc(x.penjual.blok)}</span>·` : ''}<span>${esc(lamaLalu(x.dibuat))}</span></div>
      ${x.antar || x.po || x.kondisi === 'Bekas' ? `<div class="lp-meta">${x.antar ? '<span class="lp-tag">Bisa antar</span>' : ''}${x.po ? '<span class="lp-tag">Pre-order</span>' : ''}${x.kondisi === 'Bekas' ? '<span class="lp-tag">Bekas</span>' : ''}</div>` : ''}</div></article>`;
}
function vLapak() {
  const saya = lpSaya(), mod = lpModerator(), fav = lpFav();
  const umum = S.lapak.filter(lpTampilUmum), milik = S.lapak.filter(x => x.penjualId === saya), sembunyi = S.lapak.filter(x => x.status === 'Disembunyikan');
  const tabs = [['semua', `Semua ${umum.length}`], ['favorit', `Favorit ${S.lapak.filter(x => fav.has(x.id) && lpTampilUmum(x)).length}`], ...(isWarga() ? [['saya', `Lapak saya ${milik.length}`]] : []), ...(mod ? [['moderasi', `Disembunyikan ${sembunyi.length}`]] : []), ...(bolehIzinLapak() ? [['izin', `Izin penjual${lpMinta().length ? ' · ' + lpMinta().length + ' baru' : ''}`]] : [])];
  if (!tabs.some(t => t[0] === S.lpTab)) S.lpTab = 'semua';
  const headL = `<div class="sec-head"><div><h2>Lapak Warga</h2><p>Belanja dan tawarkan produk atau jasa antar tetangga ${esc(lingk())}. Transaksi langsung dengan penjual lewat WhatsApp.</p></div>
    ${isWarga() ? '<button class="btn pri" data-act="lp-new">+ Jual sesuatu</button>' : ''}</div>`;
  const izinBar = isWarga() && !lpBolehJual() ? (() => { const m = (wargaSaya() || {}).mintaLapak; return `<div class="notice" style="display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap"><span>${m && m.status === 'Menunggu' ? 'Permintaan izin berjualan Anda sedang menunggu persetujuan Ketua RT.' : m && m.status === 'Ditolak' ? 'Permintaan izin berjualan Anda belum disetujui' + (m.alasan ? ': ' + esc(m.alasan) : '') + '.' : 'Ingin berjualan? Ajukan izin ke Ketua RT terlebih dahulu.'}</span>${m && m.status === 'Menunggu' ? '' : '<button class="btn sm" data-act="lp-new">Ajukan izin</button>'}</div>`; })() : '';
  const tabBar = `<div class="toolbar"><div class="seg" role="group" aria-label="Tampilan lapak">${tabs.map(([k, l]) => `<button type="button" data-act="lp-tab" data-k="${k}" aria-pressed="${S.lpTab === k}">${esc(l)}</button>`).join('')}</div></div>`;
  if (S.lpTab === 'izin') return headL + tabBar + vLapakIzin();
  let L = S.lpTab === 'saya' ? milik : S.lpTab === 'moderasi' ? sembunyi : S.lpTab === 'favorit' ? S.lapak.filter(x => fav.has(x.id) && lpTampilUmum(x)) : umum;
  const q = S.lpQ.trim().toLowerCase();
  if (S.lpKat) L = L.filter(x => x.kategori === S.lpKat);
  if (q) L = L.filter(x => [x.judul, x.deskripsi, x.kategori, x.penjual && x.penjual.nama, x.penjual && x.penjual.blok].some(v => String(v || '').toLowerCase().includes(q)));
  const nilaiH = x => x.hargaTipe === 'gratis' ? 0 : Number(x.harga) || 0, tersedia = x => (x.status === 'Tersedia' ? 0 : 1);
  L = [...L].sort((a, b) => tersedia(a) - tersedia(b) || (S.lpSort === 'murah' ? nilaiH(a) - nilaiH(b) : S.lpSort === 'mahal' ? nilaiH(b) - nilaiH(a) : String(b.dibuat || '').localeCompare(String(a.dibuat || ''))));
  const kats = [['', 'Semua'], ...LP_KAT.map(([k, e]) => [k, e + ' ' + k])].map(([k, l]) => `<button type="button" data-act="lp-kat" data-k="${esc(k)}" aria-pressed="${S.lpKat === k}">${esc(l)}</button>`).join('');
  const kosong = S.lpTab === 'saya' ? `Anda belum memasang lapak.<button class="btn pri" data-act="lp-new">+ Jual sesuatu</button>` : S.lpTab === 'favorit' ? 'Belum ada favorit. Ketuk ♡ pada produk untuk menyimpannya.' : S.lpTab === 'moderasi' ? 'Tidak ada lapak yang disembunyikan.' : (q || S.lpKat ? 'Tidak ada yang cocok dengan pencarian.' : isWarga() ? 'Belum ada yang berjualan. Jadilah yang pertama!<button class="btn pri" data-act="lp-new">+ Jual sesuatu</button>' : 'Belum ada warga yang berjualan.');
  return headL + izinBar + tabBar + `
<div class="toolbar"><input class="search" type="search" id="qLapak" placeholder="Cari produk, jasa, atau nomor rumah…" value="${esc(S.lpQ)}" aria-label="Cari di lapak">
    <select id="fLpSort" aria-label="Urutkan" style="width:auto"><option value="baru" ${S.lpSort === 'baru' ? 'selected' : ''}>Terbaru</option><option value="murah" ${S.lpSort === 'murah' ? 'selected' : ''}>Harga terendah</option><option value="mahal" ${S.lpSort === 'mahal' ? 'selected' : ''}>Harga tertinggi</option></select></div>
  <div class="lp-cats" role="group" aria-label="Kategori">${kats}</div>
  ${L.length ? `<div class="lp-grid">${L.map(lpKartu).join('')}</div>` : `<div class="empty">${kosong}</div>`}
  <p class="muted" style="font-size:.78rem;margin-top:14px">Lapak tampil ${LP_HARI} hari dan bisa diperpanjang penjual. Pengurus RT tidak ikut dalam transaksi; periksa barang sebelum membayar.</p>`;
}
function openLapakDetail(id) {
  const x = S.lapak.find(l => l.id === id); if (!x) return;
  const milik = x.penjualId === lpSaya(), mod = lpModerator(), foto = x.foto || [], pj = x.penjual || {};
  const wa = pj.hp && waNomor(pj.hp).length >= 10, saya = wargaSaya();
  const pesan = `Halo ${pj.nama || ''}, saya ${namaSesi()}${saya ? ' (' + saya.blok + ')' : ''} tertarik dengan "${x.judul}" (${lpHargaTeks(x)}) di Lapak Warga ${lingk()}. Apakah masih tersedia?`;
  const bagi = `*${x.judul}*\n${lpHargaTeks(x)}\n${x.deskripsi ? x.deskripsi.slice(0, 300) + '\n' : ''}\nPenjual: ${pj.nama || ''}${pj.blok ? ' (' + pj.blok + ')' : ''}${pj.hp ? '\nWA: ' + pj.hp : ''}\n\nLapak Warga ${lingk()}`;
  const habis = x.status !== 'Tersedia';
  openDlg({title: x.judul,
    body: `<div class="lp-galeri"><div class="utama${foto.length ? '' : ' kosong'}" id="lpUtama">${foto[0] ? `<img src="${esc(foto[0])}" alt="${esc(x.judul)}">` : `<span aria-hidden="true">${lpEmoji(x.kategori)}</span>`}</div>
        ${foto.length > 1 ? `<div class="lp-thumbs">${foto.map((f, i) => `<button type="button" data-act="lp-foto" data-src="${esc(f)}" aria-pressed="${i === 0}" aria-label="Foto ${i + 1}"><img src="${esc(f)}" alt=""></button>`).join('')}</div>` : ''}</div>
      <div><div class="lp-harga" style="font-size:1.35rem">${lpHarga(x)}</div>
        <div class="lp-meta" style="margin-top:4px"><span class="chip mute plain">${lpEmoji(x.kategori)} ${esc(x.kategori || 'Lainnya')}</span>${x.kondisi && x.kategori !== 'Jasa' ? `<span class="chip mute plain">${esc(x.kondisi)}</span>` : ''}${x.antar ? '<span class="chip info plain">Bisa antar</span>' : ''}${x.ambil ? '<span class="chip info plain">Ambil di rumah</span>' : ''}${x.po ? '<span class="chip warn plain">Pre-order</span>' : ''}<span class="chip ${x.status === 'Tersedia' ? 'ok' : x.status === 'Disembunyikan' ? 'bad' : 'mute'}">${esc(x.status || 'Tersedia')}</span></div></div>
      ${x.deskripsi ? `<p style="margin:0;white-space:pre-line;font-size:.92rem">${esc(x.deskripsi)}</p>` : ''}
      <div class="lp-seller"><span class="av">${esc((pj.nama || '?').trim().charAt(0).toUpperCase())}</span><div style="flex:1;min-width:0"><b>${esc(pj.nama || 'Warga')}</b><div class="muted" style="font-size:.82rem">${pj.blok ? 'Rumah ' + esc(pj.blok) + ' · ' : ''}dipasang ${esc(lamaLalu(x.dibuat))}${x.berlaku ? ' · tayang s.d. ' + esc(tgl(x.berlaku)) : ''}</div></div></div>
      ${x.status === 'Disembunyikan' && x.moderasi ? `<div class="notice" style="font-size:.86rem">Disembunyikan pengurus${x.moderasi.oleh ? ' (' + esc(x.moderasi.oleh) + ')' : ''}: ${esc(x.moderasi.alasan || '-')}</div>` : ''}
      ${milik && lpKedaluwarsa(x) ? '<div class="notice" style="font-size:.86rem">Masa tayang lapak ini sudah habis. Tekan "Perpanjang" agar tampil lagi.</div>' : ''}
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${!milik && wa && !habis ? `<a class="btn wa" href="${esc(waLink(pj.hp, pesan))}" target="_blank" rel="noopener">Chat penjual di WhatsApp</a>` : ''}
        ${!milik && !wa ? '<span class="muted" style="font-size:.84rem">Penjual belum mengisi No. HP.</span>' : ''}
        <a class="btn" href="${esc(waShare(bagi))}" target="_blank" rel="noopener">Bagikan</a>
        ${milik && x.status !== 'Disembunyikan' ? `<button type="button" class="btn" data-act="lp-status" data-id="${esc(x.id)}" data-k="${x.status === 'Tersedia' ? 'Terjual' : 'Tersedia'}">${x.status === 'Tersedia' ? 'Tandai terjual' : 'Tandai tersedia lagi'}</button>` : ''}
        ${milik && x.status === 'Tersedia' ? `<button type="button" class="btn ghost" data-act="lp-status" data-id="${esc(x.id)}" data-k="Habis">Stok habis</button>` : ''}
        ${milik && (lpKedaluwarsa(x) || (x.berlaku && (dOf(x.berlaku) - dOf(todayISO())) / 864e5 < 14)) ? `<button type="button" class="btn ghost" data-act="lp-panjang" data-id="${esc(x.id)}">Perpanjang ${LP_HARI} hari</button>` : ''}
        ${mod && !milik ? (x.status === 'Disembunyikan' ? `<button type="button" class="btn ghost" data-act="lp-tampil" data-id="${esc(x.id)}">Tampilkan lagi</button>` : `<button type="button" class="btn ghost" data-act="lp-sembunyi" data-id="${esc(x.id)}" style="color:var(--bad)">Sembunyikan</button>`) : ''}
      </div>`,
    foot: milik ? `<button type="button" class="btn" data-act="lp-ubah" data-id="${esc(x.id)}">Ubah lapak</button>` : '',
    onDelete: milik || mod ? async () => { const ok = await del('lapak', x.id); if (ok) { lpHapusFoto(milik ? foto : []); toast('Lapak dihapus.'); } return ok; } : null, deleteLabel: 'Hapus lapak'});
}
async function kecilkanFoto(file, max = 1080, q = 0.8) {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
    const k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight)), c = document.createElement('canvas');
    c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k);
    const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height);
    return await new Promise(res => c.toBlob(res, 'image/jpeg', q));
  } finally { URL.revokeObjectURL(url); }
}
async function lpUnggah(file) {
  const blob = await kecilkanFoto(file); if (!blob) throw new Error('Foto tidak bisa dibaca');
  if (blob.size > 1000000) throw new Error('Foto terlalu besar');
  const path = `${lpSaya()}/${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}.jpg`;
  const {error} = await SB.storage.from('lapak').upload(path, blob, {contentType: 'image/jpeg', cacheControl: '31536000', upsert: false});
  if (error) throw error;
  return SB.storage.from('lapak').getPublicUrl(path).data.publicUrl;
}
function lpPathDariUrl(u) { const m = String(u || '').match(/\/object\/public\/lapak\/(.+)$/); return m ? decodeURIComponent(m[1]) : null; }
function lpHapusFoto(urls) { const p = (urls || []).map(lpPathDariUrl).filter(x => x && x.startsWith(lpSaya() + '/')); if (p.length && SB) SB.storage.from('lapak').remove(p).catch(() => {}); }
function lpPenjualSaya() {
  const w = wargaSaya(), p = pengurusSesi();
  let hp = (p && p.noHp) || (w && w.noHp) || '';
  if (!hp && S.me && /^62\d+@hp\./.test(S.me.email || '')) hp = '0' + S.me.email.split('@')[0].slice(2);
  return {nama: namaSesi(), blok: (w && w.blok) || '', hp};
}
let lpFotoKerja = null;
function lpRenderFoto() {
  const box = $('#lpFoto'); if (!box || !lpFotoKerja) return;
  box.innerHTML = lpFotoKerja.list.map((f, i) => `<div class="t${f.load ? ' load' : ''}">${f.url || f.prev ? `<img src="${esc(f.url || f.prev)}" alt="">` : ''}${f.load ? '' : `<button type="button" data-act="lp-foto-del" data-i="${i}" aria-label="Hapus foto">✕</button>`}</div>`).join('')
    + (lpFotoKerja.list.length < 5 ? `<label class="add" for="lp_file">＋ Foto<br>(maks. 5)</label>` : '');
}
function openLapak(id) {
  const x = id ? S.lapak.find(l => l.id === id) : null;
  if (x && x.penjualId !== lpSaya()) return;
  if (!x && !lpBolehJual()) { openLapakIzin(); return; }
  const v = x || {kategori: LP_KAT[0][0], hargaTipe: 'pas', kondisi: 'Baru', status: 'Tersedia', ambil: true};
  lpFotoKerja = {list: (v.foto || []).map(u => ({url: u})), awal: [...(v.foto || [])]};
  openDlg({title: x ? 'Ubah lapak' : 'Jual sesuatu', submitLabel: x ? 'Simpan' : 'Pasang lapak',
    body: `<div class="fld"><label>Foto produk</label><div class="lp-up" id="lpFoto"></div><input type="file" id="lp_file" accept="image/*" multiple hidden><span class="hint">Foto pertama jadi sampul. Otomatis diperkecil agar hemat kuota.</span></div>
    <div class="fld"><label for="lp_j">Nama produk / jasa <span class="req">*</span></label><input type="text" id="lp_j" name="judul" required maxlength="80" value="${esc(v.judul || '')}" placeholder="mis. Nasi uduk komplit / Servis AC / Sepeda anak bekas"></div>
    <div class="grid2"><div class="fld"><label for="lp_k">Kategori</label><select id="lp_k" name="kategori">${LP_KAT.map(([k, e]) => `<option value="${esc(k)}" ${k === v.kategori ? 'selected' : ''}>${e} ${esc(k)}</option>`).join('')}</select></div>
      <div class="fld" id="lpKondisi"${v.kategori === 'Jasa' || v.kategori === 'Les & kursus' ? ' hidden' : ''}><label for="lp_kd">Kondisi</label><select id="lp_kd" name="kondisi"><option ${v.kondisi !== 'Bekas' ? 'selected' : ''}>Baru</option><option ${v.kondisi === 'Bekas' ? 'selected' : ''}>Bekas</option></select></div></div>
    <div class="grid2"><div class="fld"><label for="lp_ht">Jenis harga</label><select id="lp_ht" name="hargaTipe">${LP_HARGA.map(([k, l]) => `<option value="${k}" ${k === v.hargaTipe ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
      <div class="fld" id="lpHargaW"${v.hargaTipe === 'gratis' ? ' hidden' : ''}><label for="lp_h">Harga (Rp) <span class="req">*</span></label><input type="number" id="lp_h" name="harga" min="0" step="500" inputmode="numeric" value="${esc(v.harga || '')}"></div></div>
    <div class="fld"><label for="lp_s">Satuan <span class="muted" style="font-weight:500">(opsional)</span></label><input type="text" id="lp_s" name="satuan" maxlength="20" value="${esc(v.satuan || '')}" placeholder="mis. porsi, kg, jam, bulan"></div>
    <div class="fld"><label for="lp_d">Deskripsi</label><textarea id="lp_d" name="deskripsi" rows="4" maxlength="1500" placeholder="Jelaskan produk, ukuran, rasa, jam buka, area layanan, cara pesan…">${esc(v.deskripsi || '')}</textarea></div>
    <div style="display:flex;gap:6px 18px;flex-wrap:wrap">
      <label class="ck" style="font-weight:500"><input type="checkbox" name="antar" ${v.antar ? 'checked' : ''}> Bisa antar</label>
      <label class="ck" style="font-weight:500"><input type="checkbox" name="ambil" ${v.ambil ? 'checked' : ''}> Ambil di rumah</label>
      <label class="ck" style="font-weight:500"><input type="checkbox" name="po" ${v.po ? 'checked' : ''}> Pre-order</label></div>
    ${x ? `<div class="fld"><label for="lp_st">Status</label><select id="lp_st" name="status" ${x.status === 'Disembunyikan' ? 'disabled' : ''}>${['Tersedia', 'Habis', 'Terjual'].map(k => `<option ${k === x.status ? 'selected' : ''}>${k}</option>`).join('')}${x.status === 'Disembunyikan' ? '<option selected>Disembunyikan</option>' : ''}</select></div>` : ''}
    <p class="muted" style="margin:0;font-size:.8rem">Pembeli menghubungi Anda lewat WhatsApp di No. HP yang terdaftar di aplikasi. Dengan memasang, Anda setuju: barang/jasa legal, deskripsi jujur, tidak menyinggung SARA. Transaksi menjadi tanggung jawab penjual dan pembeli.</p>`,
    onSubmit: async d => {
      if (lpFotoKerja.list.some(f => f.load)) { pesanDlg('Tunggu, foto masih diunggah.'); return false; }
      const judul = String(d.judul || '').trim(); if (!judul) { pesanDlg('Isi nama produk / jasa.', 'lp_j'); return false; }
      const harga = Math.round(Number(d.harga) || 0);
      if (d.hargaTipe !== 'gratis' && harga <= 0) { pesanDlg('Isi harga, atau pilih jenis harga "Gratis".', 'lp_h'); return false; }
      const foto = lpFotoKerja.list.map(f => f.url).filter(Boolean);
      const status = x ? (x.status === 'Disembunyikan' ? 'Disembunyikan' : d.status || x.status) : 'Tersedia';
      const row = {...(x || {}), judul, kategori: d.kategori, kondisi: d.kategori === 'Jasa' || d.kategori === 'Les & kursus' ? '' : d.kondisi, hargaTipe: d.hargaTipe, harga: d.hargaTipe === 'gratis' ? 0 : harga, satuan: String(d.satuan || '').trim(),
        deskripsi: String(d.deskripsi || '').trim(), antar: !!d.antar, ambil: !!d.ambil, po: !!d.po, foto, status, penjualId: lpSaya(), penjual: lpPenjualSaya(), diperbarui: new Date().toISOString()};
      if (status === 'Terjual' && (!x || x.status !== 'Terjual')) row.terjualPada = new Date().toISOString();
      if (!x) { row.dibuat = new Date().toISOString(); const b = new Date(); b.setDate(b.getDate() + LP_HARI); row.berlaku = isoD(b); }
      const ok = await put('lapak', x ? x.id : 'lp_' + uid(), row);
      if (ok) { lpHapusFoto(lpFotoKerja.awal.filter(u => !foto.includes(u))); lpFotoKerja = null; toast(x ? 'Lapak diperbarui.' : 'Lapak dipasang. Bagikan ke grup WhatsApp agar cepat laku!'); if (!x) S.lpTab = 'saya'; }
      return ok;
    }});
  lpRenderFoto();
  const f = $('#lp_file'), kat = $('#lp_k'), ht = $('#lp_ht');
  kat.addEventListener('change', () => { $('#lpKondisi').hidden = kat.value === 'Jasa' || kat.value === 'Les & kursus'; });
  ht.addEventListener('change', () => { $('#lpHargaW').hidden = ht.value === 'gratis'; });
  f.addEventListener('change', async () => {
    const files = [...f.files].slice(0, 5 - lpFotoKerja.list.length); f.value = '';
    const ker = lpFotoKerja;
    for (const file of files) {
      const item = {load: true, prev: URL.createObjectURL(file)}; ker.list.push(item); lpRenderFoto();
      try { item.url = await lpUnggah(file); } catch (e) { ker.list.splice(ker.list.indexOf(item), 1); toast('Foto gagal diunggah' + (e && e.message ? ': ' + e.message : '') + '.', 'bad'); }
      item.load = false; URL.revokeObjectURL(item.prev); delete item.prev; if (lpFotoKerja === ker) lpRenderFoto();
    }
  });
}
function openLapakSembunyi(id) {
  const x = S.lapak.find(l => l.id === id); if (!x || !lpModerator()) return;
  openDlg({title: 'Sembunyikan lapak', area: 'lapak', submitLabel: 'Sembunyikan',
    body: `<p style="margin:0"><b>${esc(x.judul)}</b> · ${esc((x.penjual || {}).nama || '')}${x.penjual && x.penjual.blok ? ' (' + esc(x.penjual.blok) + ')' : ''}</p>
      <div class="fld"><label for="ls_a">Alasan (terlihat oleh penjual) <span class="req">*</span></label><select id="ls_a" name="alasan">${['Barang/jasa terlarang', 'Penipuan / informasi menyesatkan', 'Konten tidak pantas / SARA', 'Bukan warga lingkungan', 'Duplikat / spam', 'Lainnya'].map(a => `<option>${a}</option>`).join('')}</select></div>
      <div class="fld"><label for="ls_c">Catatan</label><input type="text" id="ls_c" name="catatan" maxlength="200"></div>`,
    onSubmit: async d => { const ok = await put('lapak', x.id, {...x, status: 'Disembunyikan', statusSebelum: x.status, moderasi: {oleh: namaSesi(), alasan: d.alasan + (d.catatan ? ' – ' + String(d.catatan).trim() : ''), waktu: nowDT()}}); if (ok) toast('Lapak disembunyikan dari warga.'); return ok; }});
}
function vLapakIzin() {
  const minta = lpMinta().sort(sortHouse), penjual = S.warga.filter(w => w.izinLapak && w.status !== 'Pindah').sort(sortHouse);
  const nLapak = w => S.lapak.filter(x => x.penjual && x.penjual.blok === w.blok && lpTampilUmum(x)).length;
  return `<div class="panel"><h3>Permintaan izin berjualan <small>${minta.length} menunggu</small></h3>
    ${minta.length ? minta.map(w => `<div class="row"><span class="house">${esc(w.blok)}</span><div class="grow"><div class="t">${esc(w.nama)}</div><div class="s">${esc(w.mintaLapak.usaha || '-')} · diajukan ${esc(lamaLalu(w.mintaLapak.waktu))}</div></div>
      <button class="btn sm pri" data-act="lp-izin-ya" data-id="${esc(w.id)}">Setujui</button><button class="btn sm" data-act="lp-izin-tolak" data-id="${esc(w.id)}">Tolak</button></div>`).join('') : '<p class="muted" style="margin:0">Tidak ada permintaan baru.</p>'}</div>
  <div class="panel"><h3>Warga yang boleh berjualan <small>${penjual.length} rumah</small></h3>
    ${penjual.length ? penjual.map(w => `<div class="row"><span class="house">${esc(w.blok)}</span><div class="grow"><div class="t">${esc(w.nama)}</div><div class="s">${w.izinLapakOleh ? 'Disetujui ' + esc(w.izinLapakOleh) + (w.izinLapakTgl ? ' · ' + esc(tgl(w.izinLapakTgl)) : '') + ' · ' : ''}${nLapak(w)} lapak tayang</div></div>
      <button class="btn sm ghost" data-act="lp-izin-cabut" data-id="${esc(w.id)}" style="color:var(--bad)">Cabut izin</button></div>`).join('') : '<p class="muted" style="margin:0">Belum ada. Izin juga bisa diberikan lewat menu Data warga (centang "Boleh berjualan di Lapak Warga").</p>'}</div>
  <p class="muted" style="font-size:.8rem">Hanya warga yang sudah diizinkan yang bisa berjualan. Pengurus RT, Ketua RT, dan admin tidak berjualan di Lapak Warga. Izin hanya bisa diubah Pemilik (admin) atau Ketua RT.</p>`;
}
function openLapakIzin() {
  if (!isWarga()) return;
  const w = wargaSaya(); if (!w) return;
  const m = w.mintaLapak;
  if (m && m.status === 'Menunggu') { openDlg({title: 'Izin berjualan', body: `<p style="margin:0">Permintaan Anda dikirim ${esc(lamaLalu(m.waktu))} dan sedang menunggu persetujuan Ketua RT.</p>${m.usaha ? `<p class="muted" style="margin:0">Yang akan dijual: ${esc(m.usaha)}</p>` : ''}`}); return; }
  openDlg({title: 'Ajukan izin berjualan', submitLabel: 'Kirim ke Ketua RT',
    body: `<p style="margin:0;font-size:.9rem">Agar Lapak Warga aman dan tertib, warga perlu izin Ketua RT sebelum memasang barang jualan.</p>
      ${m && m.status === 'Ditolak' ? `<div class="notice" style="font-size:.86rem">Permintaan sebelumnya belum disetujui${m.alasan ? ': ' + esc(m.alasan) : ''}.</div>` : ''}
      <div class="fld"><label for="li_u">Apa yang akan Anda jual? <span class="req">*</span></label><textarea id="li_u" name="usaha" rows="3" required maxlength="300" placeholder="mis. Kue basah & nasi box pesanan, atau jasa servis AC">${esc((m && m.usaha) || '')}</textarea></div>`,
    onSubmit: async d => {
      const usaha = String(d.usaha || '').trim(); if (!usaha) { pesanDlg('Isi apa yang akan dijual.', 'li_u'); return false; }
      const ok = await put('warga', w.id, {...w, mintaLapak: {status: 'Menunggu', waktu: new Date().toISOString(), usaha}});
      if (ok) toast('Permintaan izin terkirim ke Ketua RT.'); return ok;
    }});
}
async function lpIzinSimpan(w, iz, alasan) {
  const m = w.mintaLapak || null;
  const row = {...w, izinLapak: iz, izinLapakOleh: namaSesi(), izinLapakTgl: todayISO()};
  if (m) row.mintaLapak = {...m, status: iz ? 'Disetujui' : (alasan !== undefined ? 'Ditolak' : m.status), alasan: alasan || '', diputus: namaSesi()};
  return put('warga', w.id, row);
}
function openLapakTolak(id) {
  const w = wById(id); if (!w || !bolehIzinLapak()) return;
  openDlg({title: 'Tolak izin berjualan', submitLabel: 'Tolak', body: `<p style="margin:0"><b>${esc(w.blok)} · ${esc(w.nama)}</b>: ${esc((w.mintaLapak || {}).usaha || '')}</p>
    <div class="fld"><label for="lt_a">Alasan (terlihat oleh warga) <span class="req">*</span></label><input type="text" id="lt_a" name="alasan" required maxlength="200" placeholder="mis. Mohon lengkapi data warga terlebih dahulu"></div>`,
    onSubmit: async d => { const a = String(d.alasan || '').trim(); if (!a) { pesanDlg('Isi alasan.', 'lt_a'); return false; } const ok = await lpIzinSimpan(w, false, a); if (ok) toast('Permintaan ditolak.'); return ok; }});
}
function vLapakBaru() {
  const L = S.lapak.filter(x => lpTampilUmum(x) && x.status === 'Tersedia').sort((a, b) => String(b.dibuat || '').localeCompare(String(a.dibuat || ''))).slice(0, 4);
  return L.length ? `<div class="panel"><h3>Baru di Lapak Warga <small><button class="btn sm" data-act="tab" data-k="lapak">Lihat semua</button></small></h3><div class="lp-grid">${L.map(lpKartu).join('')}</div></div>` : '';
}

/* ---------- Kerohanian ---------- */
const AGAMA = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Lintas agama'];
const JENIS_RH = ['Pengajian rutin', 'Kajian / majelis taklim', 'Peringatan hari besar', 'Ibadah / persekutuan doa', 'Santunan & bakti sosial', 'Ramadhan / buka bersama', 'Doa bersama', 'Lainnya'];
const ULANG_RH = [['tidak', 'Sekali saja'], ['mingguan', 'Setiap minggu'], ['2mingguan', 'Setiap 2 minggu'], ['bulanan', 'Setiap bulan (tanggal sama)'], ['bulanan_hari', 'Setiap bulan (hari & minggu ke- sama)']];
const KE = ['pertama', 'kedua', 'ketiga', 'keempat', 'kelima'];
const SHOLAT = [['imsak', 'Imsak'], ['subuh', 'Subuh'], ['terbit', 'Terbit'], ['dzuhur', 'Dzuhur'], ['ashar', 'Ashar'], ['maghrib', 'Maghrib'], ['isya', 'Isya']];
const rhSet = () => ({kota: 'Ciangsana, Gunung Putri', lat: lokasiRT().lat, lng: lokasiRT().lng, tampilSholat: true, ...((S.rohani.find(x => x.id === 'set')) || {})});
const rhAgenda = () => S.rohani.filter(x => x.tipe === 'agenda');
const rhDuka = () => S.rohani.filter(x => x.tipe === 'duka').sort((a, b) => String(b.tanggal || '').localeCompare(String(a.tanggal || '')));
const qbSet = th => ({tahun: th, hargaSapi: 0, hargaKambing: 0, hargaDomba: 0, tanggal: '', catatan: '', ...((S.rohani.find(x => x.id === 'qurban-' + th)) || {})});
const isoD = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const dOf = iso => new Date(iso + 'T00:00');
const hariTgl = iso => HARI[dOf(iso).getDay()] + ', ' + tgl(iso);
function tglHijri(iso) {
  try { return new Intl.DateTimeFormat('id-ID-u-ca-islamic-umalqura', {day: 'numeric', month: 'long', year: 'numeric'}).format(dOf(iso)).replace(/\s*(SH|H)$/, '') + ' H'; } catch (e) { return ''; }
}
// Jadwal sholat (metode Kemenag RI: Subuh 20°, Isya 18°, Ashar Syafi'i, ihtiyat 2 menit)
function jadwalSholat(iso, lat, lng, tz = 7) {
  const rad = x => x * Math.PI / 180, deg = x => x * 180 / Math.PI;
  let [Y, M, D] = iso.split('-').map(Number);
  if (M <= 2) { Y -= 1; M += 12; }
  const A = Math.floor(Y / 100), B = 2 - A + Math.floor(A / 4);
  const jd = Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + D + B - 1524.5 - lng / 360;
  const sun = t => {
    const d = jd + t - 2451545, g = rad((357.529 + 0.98560028 * d) % 360), q = (280.459 + 0.98564736 * d) % 360;
    const L = rad((q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) % 360), e = rad(23.439 - 0.00000036 * d);
    const ra = ((deg(Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L))) / 15) % 24 + 24) % 24;
    let eqt = q / 15 - ra; eqt = ((eqt + 12) % 24 + 24) % 24 - 12;
    return {decl: Math.asin(Math.sin(e) * Math.sin(L)), eqt};
  };
  const mid = t => 12 - sun(t).eqt, la = rad(lat);
  const T = (ang, t) => { const dc = sun(t).decl; return deg(Math.acos(Math.max(-1, Math.min(1, (-Math.sin(rad(ang)) - Math.sin(dc) * Math.sin(la)) / (Math.cos(dc) * Math.cos(la)))))) / 15; };
  const asrAng = t => -deg(Math.atan(1 / (1 + Math.tan(Math.abs(la - sun(t).decl)))));
  const adj = tz - lng / 15, mnt = (x, ih) => Math.ceil((x + adj) * 60 + ih - 1e-9);
  const m = {subuh: mnt(mid(5 / 24) - T(20, 5 / 24), 2), terbit: Math.floor((mid(6 / 24) - T(0.833, 6 / 24) + adj) * 60) - 2, dzuhur: mnt(mid(.5), 3),
    ashar: mnt(mid(13 / 24) + T(asrAng(13 / 24), 13 / 24), 2), maghrib: mnt(mid(18 / 24) + T(0.833, 18 / 24), 2), isya: mnt(mid(18 / 24) + T(18, 18 / 24), 2)};
  m.imsak = m.subuh - 10;
  return m; // menit sejak 00:00
}
const jamM = m => pad(Math.floor(m / 60)) + ':' + pad(m % 60);
function sholatBerikut() {
  const st = rhSet(), now = new Date(), menit = now.getHours() * 60 + now.getMinutes(), j = jadwalSholat(todayISO(), Number(st.lat), Number(st.lng));
  const urut = ['subuh', 'dzuhur', 'ashar', 'maghrib', 'isya'];
  let k = urut.find(x => j[x] > menit), besok = false, t;
  if (!k) { k = 'subuh'; besok = true; const d = new Date(); d.setDate(d.getDate() + 1); t = jadwalSholat(isoD(d), Number(st.lat), Number(st.lng)).subuh + 1440; } else t = j[k];
  const sisa = t - menit;
  return {j, k, nama: SHOLAT.find(x => x[0] === k)[1], sisa, besok, teks: `${SHOLAT.find(x => x[0] === k)[1]} ${besok ? 'besok ' : ''}${jamM(t % 1440)} · ${sisa >= 60 ? Math.floor(sisa / 60) + ' jam ' : ''}${sisa % 60} menit lagi`};
}
setInterval(() => { const el = document.getElementById('rhCd'); if (el && S.tab === 'rohani') { const b = sholatBerikut(); el.innerHTML = `Berikutnya: <b>${esc(b.teks)}</b>`; } }, 30000);
// kejadian agenda (termasuk yang berulang) dalam rentang tanggal
function rhKejadian(a, dari, sampai) {
  if (!a.tanggal) return [];
  if (!a.ulang || a.ulang === 'tidak') return a.tanggal >= dari && a.tanggal <= sampai ? [a.tanggal] : [];
  const out = [], akhir = a.sampai && a.sampai < sampai ? a.sampai : sampai, d0 = dOf(a.tanggal);
  if (a.ulang === 'bulanan_hari') {
    const wd = d0.getDay(), ke = Math.ceil(d0.getDate() / 7);
    for (let i = 0; i < 240; i++) {
      const b = new Date(d0.getFullYear(), d0.getMonth() + i, 1); if (isoD(b) > akhir) break;
      const off = (wd - b.getDay() + 7) % 7, tg = 1 + off + (ke - 1) * 7, x = new Date(b.getFullYear(), b.getMonth(), tg);
      if (x.getMonth() !== b.getMonth()) continue;
      const s = isoD(x); if (s >= a.tanggal && s >= dari && s <= akhir) out.push(s);
    }
    return out;
  }
  if (a.ulang === 'bulanan') {
    for (let i = 0; i < 240; i++) { const x = new Date(d0.getFullYear(), d0.getMonth() + i, d0.getDate()); if (x.getDate() !== d0.getDate()) continue; const s = isoD(x); if (s > akhir) break; if (s >= dari) out.push(s); }
    return out;
  }
  const step = a.ulang === '2mingguan' ? 14 : 7; let x = new Date(d0);
  if (isoD(x) < dari) { const n = Math.floor((dOf(dari) - x) / 864e5 / step); x.setDate(x.getDate() + n * step); }
  for (let i = 0; i < 400 && isoD(x) <= akhir; i++) { const s = isoD(x); if (s >= dari) out.push(s); x.setDate(x.getDate() + step); }
  return out;
}
function rhUlangTeks(a) {
  const d = a.tanggal ? dOf(a.tanggal) : null; if (!d || !a.ulang || a.ulang === 'tidak') return '';
  const s = a.ulang === 'mingguan' ? 'Setiap ' + HARI[d.getDay()] : a.ulang === '2mingguan' ? 'Setiap 2 minggu, hari ' + HARI[d.getDay()] : a.ulang === 'bulanan' ? 'Setiap tanggal ' + d.getDate() : `Setiap ${HARI[d.getDay()]} ${KE[Math.ceil(d.getDate() / 7) - 1]} tiap bulan`;
  return s + (a.sampai ? ' s.d. ' + tgl(a.sampai) : '');
}
function rhMendatang(hari = 60) {
  const dari = todayISO(), d = new Date(); d.setDate(d.getDate() + hari); const sampai = isoD(d);
  return rhAgenda().flatMap(a => rhKejadian(a, dari, sampai).map(t => ({a, t}))).sort((x, y) => x.t.localeCompare(y.t) || String(x.a.jam || '').localeCompare(String(y.a.jam || '')));
}
const rhJam = a => a.jam ? a.jam.replace(':', '.') + (a.jamSelesai ? '–' + a.jamSelesai.replace(':', '.') : '') + ' WIB' : '';
function teksRhAgenda(a, t) {
  return `*${a.judul}*\n${a.jenis || ''}${a.agama && a.agama !== 'Lintas agama' ? ' · ' + a.agama : ''}\n\n📅 ${hariTgl(t || a.tanggal)}${rhUlangTeks(a) ? ' (' + rhUlangTeks(a) + ')' : ''}${a.jam ? '\n🕒 ' + rhJam(a) : ''}${a.tempat ? '\n📍 ' + a.tempat : ''}${a.pemimpin ? '\n🎙️ ' + a.pemimpin : ''}${a.petugas ? '\n\n' + a.petugas : ''}${a.keterangan ? '\n\n' + a.keterangan : ''}\n\nMohon kehadiran Bapak/Ibu. Terima kasih.\n${pengirim()}`;
}
const SALAM_DUKA = {Islam: "Innalillahi wa inna ilaihi raji'un", Kristen: 'Telah dipanggil pulang ke rumah Bapa di Surga', Katolik: 'Telah dipanggil Tuhan', Hindu: 'Om Swargantu, Moksantu, Sunyantu, Murcantu', Buddha: 'Semoga terlahir di alam bahagia', Konghucu: 'Turut berduka cita yang sedalam-dalamnya'};
const salamDuka = a => SALAM_DUKA[a] || 'Turut berduka cita yang sedalam-dalamnya';
function teksRhDuka(x) {
  const doa = x.agama === 'Islam' ? 'Semoga almarhum/almarhumah husnul khotimah, diampuni segala dosanya, dan keluarga yang ditinggalkan diberi ketabahan.' : 'Semoga keluarga yang ditinggalkan diberi ketabahan dan penghiburan.';
  return `*BERITA DUKA*\n${salamDuka(x.agama)}\n\nTelah berpulang:\n*${x.nama}*${x.usia ? ` (${x.usia} th)` : ''}${x.hubungan ? '\n' + x.hubungan : ''}${x.blok ? '\nWarga ' + x.blok + ', ' + lingk() : ''}\n\nPada ${hariTgl(x.tanggal)}${x.jam ? ' pukul ' + x.jam.replace(':', '.') + ' WIB' : ''}${x.rumahDuka ? '\nDisemayamkan di ' + x.rumahDuka : ''}${x.makam ? '\nDimakamkan ' + (x.waktuMakam ? x.waktuMakam + ' ' : '') + 'di ' + x.makam : ''}${x.keterangan ? '\n\n' + x.keterangan : ''}\n\n${doa}\n\n${pengirim()}`;
}
function vRohani() {
  const kel = bisa('rohani'), w = isWarga();
  const qbBoleh = w || kel || lihat('kas');
  const tabs = [['beranda', 'Beranda'], ['agenda', 'Agenda'], ['duka', 'Kabar duka'], ...(qbBoleh ? [['qurban', 'Qurban']] : [])];
  if (!tabs.some(t => t[0] === S.rhTab)) S.rhTab = 'beranda';
  const seg = tabs.map(([k, l]) => `<button type="button" data-act="rht" data-k="${k}" aria-pressed="${S.rhTab === k}">${l}</button>`).join('');
  const head = `<div class="sec-head"><div><h2>Kerohanian</h2><p>Jadwal ibadah, agenda kegiatan keagamaan, kabar duka, dan qurban warga ${esc(lingk())}.</p></div>
    ${kel ? `<div class="toolbar" style="margin:0">${S.rhTab === 'duka' ? '<button class="btn pri" data-act="rh-duka">+ Kabar duka</button>' : S.rhTab === 'qurban' ? '<button class="btn pri" data-act="qb-new">+ Peserta qurban</button>' : '<button class="btn pri" data-act="rh-ag">+ Agenda kegiatan</button>'}${S.rhTab === 'beranda' ? '<button class="btn ghost" data-act="rh-set">Atur lokasi</button>' : ''}</div>` : ''}</div>
    <div class="toolbar"><div class="seg" role="group" aria-label="Bagian kerohanian">${seg}</div></div>`;
  const isi = S.rhTab === 'agenda' ? vRhAgenda(kel) : S.rhTab === 'duka' ? vRhDuka(kel) : S.rhTab === 'qurban' ? vQurban(kel, w) : vRhBeranda(kel);
  return head + isi;
}
function rhAgKartu(x, kel) {
  const a = x.a, t = x.t, d = dOf(t), hariIni = t === todayISO();
  return `<article class="rh-ag${hariIni ? ' today' : ''}"><div class="rh-dt"><span>${HARI[d.getDay()].slice(0, 3)}</span><b>${d.getDate()}</b><span>${BLN[d.getMonth()]}</span></div>
    <div><div class="m" style="margin-bottom:4px">${hariIni ? '<span class="chip ok">Hari ini</span>' : ''}<span class="chip mute plain">${esc(a.jenis || 'Kegiatan')}</span>${a.agama ? `<span class="chip info plain">${esc(a.agama)}</span>` : ''}${rhUlangTeks(a) ? `<span>↻ ${esc(rhUlangTeks(a))}</span>` : ''}</div>
      <h4>${esc(a.judul)}</h4>
      <div class="m">${a.jam ? `<span>🕒 ${esc(rhJam(a))}</span>` : ''}${a.tempat ? `<span>📍 ${esc(a.tempat)}</span>` : ''}${a.pemimpin ? `<span>🎙️ ${esc(a.pemimpin)}</span>` : ''}${a.pj ? `<span>PJ: ${esc(a.pj)}</span>` : ''}</div>
      ${a.petugas ? `<div class="m" style="margin-top:4px;white-space:pre-line;display:block">${esc(a.petugas)}</div>` : ''}
      ${a.keterangan ? `<p style="margin:6px 0 0;font-size:.86rem;white-space:pre-line">${esc(a.keterangan)}</p>` : ''}
      <div class="act"><a class="btn wa sm" href="${esc(waShare(teksRhAgenda(a, t)))}" target="_blank" rel="noopener">Bagikan</a>${kel ? `<button class="btn sm" data-act="rh-ag" data-id="${esc(a.id)}">Ubah</button>${bisa('info') ? (S.pengumuman.some(p => p.id === 'pg-' + a.id + '-' + t) ? '<span class="chip ok plain">Sudah diumumkan</span>' : `<button class="btn ghost sm" data-act="rh-umum" data-id="${esc(a.id)}" data-t="${esc(t)}">Umumkan</button>`) : ''}` : ''}</div></div></article>`;
}
function vRhBeranda(kel) {
  const st = rhSet(), hari = todayISO();
  let sh = '';
  if (st.tampilSholat !== false) {
    const b = sholatBerikut(), menit = new Date().getHours() * 60 + new Date().getMinutes();
    sh = `<div class="rh-sholat" role="list" aria-label="Jadwal sholat hari ini">${SHOLAT.map(([k, l]) => `<div role="listitem" class="${!b.besok && k === b.k ? 'on' : b.j[k] < menit && k !== b.k ? 'lw' : ''}"><span>${l}</span><b>${jamM(b.j[k])}</b></div>`).join('')}</div>
      <div class="rh-hero-cd cd" id="rhCd">Berikutnya: <b>${esc(b.teks)}</b></div>`;
  }
  const hij = tglHijri(hari);
  const hero = `<div class="panel rh-hero"><div><span class="tg">${esc(HARI[new Date().getDay()])}, ${esc(tglSurat(hari))}</span><div class="hj">${esc(hij || tgl(hari))}</div>
      <span class="muted" style="font-size:.82rem">${st.tampilSholat !== false ? `Jadwal sholat ${esc(st.kota)} · metode Kemenag RI` : 'Jadwal sholat disembunyikan'}</span></div><div>${sh || '<p class="muted" style="margin:0">Aktifkan jadwal sholat di "Atur lokasi".</p>'}</div></div>`;
  const ag = rhMendatang(30).slice(0, 5), duka = rhDuka().filter(x => x.tanggal && (dOf(hari) - dOf(x.tanggal)) / 864e5 <= 7);
  const qs = qbSet(S.qbTh), qn = S.qurban.filter(x => Number(x.tahun) === S.qbTh).length;
  const qbBanner = qs.tanggal && qs.tanggal >= hari && (dOf(qs.tanggal) - dOf(hari)) / 864e5 <= 75
    ? `<div class="notice" style="display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap"><span>🐄 Idul Adha ${esc(tglSurat(qs.tanggal))} · ${Math.round((dOf(qs.tanggal) - dOf(hari)) / 864e5)} hari lagi${isWarga() || !(bisa('rohani') || lihat('kas')) ? '' : ` · ${qn} peserta qurban terdaftar`}</span>${isWarga() || bisa('rohani') || lihat('kas') ? '<button class="btn sm" data-act="rht" data-k="qurban">Lihat qurban</button>' : ''}</div>` : '';
  const komp = isWarga() ? '' : (() => {
    const m = {}; let n = 0, kosong = 0;
    for (const w of wargaAktif()) for (const o of [w, ...(w.anggota || [])]) { const a = o === w ? w.agama : (o.agama || w.agama); n++; if (a) m[a] = (m[a] || 0) + 1; else kosong++; }
    const L = AGAMA_W.filter(a => m[a]).map(a => [a, m[a]]), max = Math.max(1, ...L.map(x => x[1]));
    return n ? `<div class="panel"><h3>Komposisi agama warga <small>${n} jiwa${kosong ? ` · ${kosong} belum diisi` : ''}</small></h3>${L.length ? `<div class="cat-bars">${L.map(([a, v]) => `<div class="cat-bar"><span>${esc(agamaLbl(a))}</span><span class="num">${v} jiwa · ${Math.round(v / n * 100)}%</span><div class="tr"><i style="width:${v / max * 100}%;background:var(--accent)"></i></div></div>`).join('')}</div>` : ''}${kosong ? `<p class="muted" style="margin:8px 0 0;font-size:.82rem">Lengkapi agama di menu Data warga agar data lebih akurat.</p>` : ''}</div>` : '';
  })();
  return hero + qbBanner + (duka.length ? `<div class="rh-list" style="margin-bottom:14px">${duka.map(x => rhDukaKartu(x, kel)).join('')}</div>` : '')
    + `<div class="panel"><h3>Agenda 30 hari ke depan <small>${ag.length ? ag.length + ' kegiatan' : ''}</small></h3>${ag.length ? `<div class="rh-list">${ag.map(x => rhAgKartu(x, kel)).join('')}</div>` : `<p class="muted" style="margin:0">Belum ada agenda kegiatan.${kel ? ' Tambahkan pengajian rutin, kajian, atau peringatan hari besar.' : ''}</p>`}</div>` + komp;
}
function vRhAgenda(kel) {
  const segF = [['datang', 'Akan datang'], ['semua', 'Semua agenda']].map(([k, l]) => `<button type="button" data-act="rhaf" data-k="${k}" aria-pressed="${S.rhAgF === k}">${l}</button>`).join('');
  const ag = S.rhAgama;
  const filt = a => !ag || a.agama === ag || a.agama === 'Lintas agama';
  const toolbar = `<div class="toolbar"><div class="seg" role="group" aria-label="Tampilan agenda">${segF}</div><select id="fRhAgama" aria-label="Saring agama" style="width:auto"><option value="">Semua agama</option>${AGAMA.filter(x => x !== 'Lintas agama').map(x => `<option ${ag === x ? 'selected' : ''}>${x}</option>`).join('')}</select></div>`;
  if (S.rhAgF === 'semua') {
    const L = rhAgenda().filter(filt).sort((a, b) => String(b.tanggal || '').localeCompare(String(a.tanggal || '')));
    return toolbar + (L.length ? `<div class="tbl-wrap"><table><thead><tr><th>Kegiatan</th><th>Jadwal</th><th>Tempat</th><th>Pemimpin / pengisi</th><th></th></tr></thead><tbody>${L.map(a => `<tr><td><div style="font-weight:600">${esc(a.judul)}</div><div class="muted" style="font-size:.78rem">${esc(a.jenis || '')}${a.agama ? ' · ' + esc(a.agama) : ''}</div></td>
      <td>${esc(rhUlangTeks(a) || hariTgl(a.tanggal))}${a.jam ? '<div class="muted" style="font-size:.78rem">' + esc(rhJam(a)) + '</div>' : ''}</td><td>${esc(a.tempat || '—')}</td><td>${esc(a.pemimpin || '—')}</td><td class="r"><button class="btn sm" data-act="rh-ag" data-id="${esc(a.id)}">${kel ? 'Ubah' : 'Lihat'}</button></td></tr>`).join('')}</tbody></table></div>` : '<div class="empty">Belum ada agenda.</div>');
  }
  const L = rhMendatang(90).filter(x => filt(x.a));
  let bln = '', out = '';
  for (const x of L) { const b = x.t.slice(0, 7); if (b !== bln) { out += `<h3 style="margin:14px 0 2px;font-size:.92rem">${esc(perLbl(b, true))}</h3>`; bln = b; } out += rhAgKartu(x, kel); }
  return toolbar + (L.length ? `<div class="rh-list">${out}</div><p class="muted" style="font-size:.8rem">Menampilkan 90 hari ke depan. Kegiatan berulang otomatis muncul di tiap jadwalnya.</p>` : `<div class="empty">Tidak ada kegiatan dalam 90 hari ke depan.${kel ? '<button class="btn pri" data-act="rh-ag">+ Agenda kegiatan</button>' : ''}</div>`);
}
function rhDukaKartu(x, kel) {
  return `<article class="rh-duka"><span class="sal">${esc(salamDuka(x.agama))}</span><h4>${esc(x.nama)}${x.usia ? ` <span class="muted" style="font-weight:500">(${esc(x.usia)} th)</span>` : ''}</h4>
    ${x.hubungan || x.blok ? `<div class="muted" style="font-size:.86rem">${esc([x.hubungan, x.blok && 'Rumah ' + x.blok].filter(Boolean).join(' · '))}</div>` : ''}
    <dl><dt>Wafat</dt><dd>${esc(hariTgl(x.tanggal))}${x.jam ? ', ' + esc(x.jam.replace(':', '.')) + ' WIB' : ''}</dd>${x.rumahDuka ? `<dt>Disemayamkan</dt><dd>${esc(x.rumahDuka)}</dd>` : ''}${x.makam ? `<dt>Pemakaman</dt><dd>${esc((x.waktuMakam ? x.waktuMakam + ' · ' : '') + x.makam)}</dd>` : ''}</dl>
    ${x.keterangan ? `<p style="margin:0;font-size:.86rem;white-space:pre-line">${esc(x.keterangan)}</p>` : ''}
    <div class="meta" style="gap:6px;display:flex;flex-wrap:wrap"><a class="btn wa sm" href="${esc(waShare(teksRhDuka(x)))}" target="_blank" rel="noopener">Bagikan berita duka</a>${kel ? `<button class="btn sm" data-act="rh-duka" data-id="${esc(x.id)}">Ubah</button>` : ''}${bisa('sumbangan') ? `<button class="btn ghost sm" data-act="rh-santun" data-id="${esc(x.id)}">Buat program santunan</button>` : ''}${kel && bisa('info') ? (rhPengumuman(x).length ? '<span class="chip ok plain">Sudah diumumkan</span>' : `<button class="btn ghost sm" data-act="rh-umum-duka" data-id="${esc(x.id)}">Umumkan</button>`) : ''}</div></article>`;
}
function vRhDuka(kel) {
  const L = rhDuka();
  return L.length ? `<div class="rh-list">${L.map(x => rhDukaKartu(x, kel)).join('')}</div>` : `<div class="empty">Belum ada kabar duka.${kel ? '<button class="btn pri" data-act="rh-duka">+ Kabar duka</button>' : ''}</div>`;
}
const HEWAN = ['Sapi', 'Kambing', 'Domba'];
function qbHarga(p, set) { if (Number(p.harga)) return Number(p.harga); const n = Number(p.jumlah) || 1; return p.hewan === 'Sapi' ? Math.round((Number(set.hargaSapi) || 0) / 7) * n : p.hewan === 'Domba' ? (Number(set.hargaDomba) || 0) * n : (Number(set.hargaKambing) || 0) * n; }
const qbStatus = (p, set) => { const t = qbHarga(p, set), b = Number(p.dibayar) || 0; return t && b >= t ? 'Lunas' : b > 0 ? 'Cicil' : 'Belum bayar'; };
const QB_CH = {Lunas: 'ok', Cicil: 'warn', 'Belum bayar': 'bad'};
function qbKelompok(L) {
  const g = []; let cur = null;
  for (const p of L.filter(x => x.hewan === 'Sapi').sort((a, b) => String(a.dibuat || '').localeCompare(String(b.dibuat || '')) || String(a.id).localeCompare(String(b.id)))) {
    let n = Math.max(1, Math.min(7, Number(p.jumlah) || 1));
    while (n > 0) { if (!cur || cur.isi >= 7) { cur = {no: g.length + 1, isi: 0, ang: []}; g.push(cur); } const ambil = Math.min(n, 7 - cur.isi); cur.ang.push({p, n: ambil}); cur.isi += ambil; n -= ambil; }
  }
  return g;
}
function vQurban(kel, w) {
  const th = S.qbTh, set = qbSet(th), L = S.qurban.filter(x => Number(x.tahun) === th);
  const nav = `<div class="monthnav"><button class="btn sm" data-act="qbth" data-n="-1" aria-label="Tahun sebelumnya">‹</button><strong>Qurban ${th}</strong><button class="btn sm" data-act="qbth" data-n="1" aria-label="Tahun berikutnya">›</button></div>`;
  const info = `<div class="panel" style="display:flex;gap:12px 24px;flex-wrap:wrap;align-items:center;justify-content:space-between">
    <div style="display:grid;gap:2px"><b>${set.tanggal ? 'Idul Adha ' + esc(tglSurat(set.tanggal)) : 'Tanggal Idul Adha belum diatur'}</b>
      <span class="muted" style="font-size:.86rem">Sapi ${esc(rp(set.hargaSapi))} per ekor (${esc(rp(Math.round((Number(set.hargaSapi) || 0) / 7)))} per 1/7 bagian) · Kambing ${esc(rp(set.hargaKambing))} · Domba ${esc(rp(set.hargaDomba))}</span>
      ${set.catatan ? `<span style="font-size:.86rem;white-space:pre-line">${esc(set.catatan)}</span>` : ''}</div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">${nav}${kel ? `<button class="btn sm" data-act="qb-set">Atur harga & tanggal</button>` : ''}</div></div>`;
  if (w) {
    const saya = L.filter(p => p.wargaId === (wargaSaya() || {}).id);
    return info + (saya.length ? `<div class="rh-list">${saya.map(p => `<div class="panel" style="display:grid;gap:4px"><div class="meta" style="display:flex;gap:6px"><span class="chip ${QB_CH[qbStatus(p, set)]}">${qbStatus(p, set)}</span><span class="chip mute plain">${esc(p.hewan)}${p.hewan === 'Sapi' ? ' · ' + (p.jumlah || 1) + '/7 bagian' : ' · ' + (p.jumlah || 1) + ' ekor'}</span></div>
        <b>Atas nama: ${esc(p.atasNama || p.nama)}</b><span class="muted" style="font-size:.86rem">Biaya ${esc(rp(qbHarga(p, set)))} · sudah dibayar ${esc(rp(p.dibayar || 0))}</span></div>`).join('')}</div>`
      : `<div class="empty">Anda belum terdaftar sebagai peserta qurban ${th}. Hubungi seksi kerohanian untuk mendaftar.${S.set.infoBayar ? `<div style="font-size:.86rem;margin-top:6px;white-space:pre-wrap">${esc(S.set.infoBayar)}</div>` : ''}</div>`);
  }
  const total = L.reduce((t, p) => t + qbHarga(p, set), 0), dibayar = L.reduce((t, p) => t + (Number(p.dibayar) || 0), 0);
  const bagSapi = L.filter(p => p.hewan === 'Sapi').reduce((t, p) => t + (Number(p.jumlah) || 1), 0), ekorSapi = Math.ceil(bagSapi / 7), kurang = ekorSapi * 7 - bagSapi;
  const kmb = L.filter(p => p.hewan === 'Kambing').reduce((t, p) => t + (Number(p.jumlah) || 1), 0), dmb = L.filter(p => p.hewan === 'Domba').reduce((t, p) => t + (Number(p.jumlah) || 1), 0);
  const G = qbKelompok(L);
  const rows = [...L].sort((a, b) => sortHouse(a, b) || String(a.nama).localeCompare(String(b.nama)));
  const aksi = p => { const wg = p.wargaId && wById(p.wargaId), st = qbStatus(p, set), wa = wg && wg.noHp && waNomor(wg.noHp).length >= 10 && st !== 'Lunas';
    return `${wa ? `<a class="btn ghost sm" href="${esc(waLink(wg.noHp, `Yth. Bapak/Ibu ${p.nama} (${p.blok}),\n\nTerima kasih telah mendaftar qurban ${th} (${p.hewan}${p.hewan === 'Sapi' ? ' ' + (p.jumlah || 1) + '/7 bagian' : ''}) atas nama ${p.atasNama || p.nama}.\nBiaya ${rp(qbHarga(p, set))}, sudah dibayar ${rp(p.dibayar || 0)}, sisa ${rp(qbHarga(p, set) - (Number(p.dibayar) || 0))}.\n${S.set.infoBayar ? '\n' + S.set.infoBayar + '\n' : ''}\nTerima kasih.\n${pengirim()}`))}" target="_blank" rel="noopener">Ingatkan</a>` : ''}<button class="btn sm" data-act="qb-edit" data-id="${esc(p.id)}">${kel ? 'Ubah' : 'Lihat'}</button>`; };
  return info + `<div class="tiles">
      <div class="tile"><span class="ti g">${ico('warga')}</span><span class="lbl">Shohibul qurban</span><span class="val">${L.length}</span><span class="sub">peserta terdaftar</span></div>
      <div class="tile"><span class="ti b">${ico('rohani')}</span><span class="lbl">Sapi</span><span class="val">${ekorSapi} ekor</span><span class="sub">${bagSapi} bagian${kurang ? ` · kurang ${kurang} untuk genap` : ''}</span></div>
      <div class="tile"><span class="ti s">${ico('rohani')}</span><span class="lbl">Kambing / domba</span><span class="val">${kmb + dmb} ekor</span><span class="sub">kambing ${kmb} · domba ${dmb}</span></div>
      <div class="tile"><span class="ti r">${ico('kas')}</span><span class="lbl">Pembayaran</span><span class="val">${esc(rp(dibayar))}</span><span class="sub">dari ${esc(rp(total))} · sisa ${esc(rp(total - dibayar))}</span></div></div>
    ${G.length ? `<div class="panel"><h3>Kelompok sapi <small>1 ekor = 7 bagian, diurutkan sesuai waktu daftar</small></h3><div class="qb-grp">${G.map(g => `<div><h4><span>Sapi ${g.no}</span><span class="chip ${g.isi >= 7 ? 'ok' : 'warn'} plain">${g.isi}/7${g.isi < 7 ? ' · kurang ' + (7 - g.isi) : ''}</span></h4><ol>${g.ang.map(a => `<li>${esc(a.p.atasNama || a.p.nama)}${a.n > 1 ? ` (${a.n} bagian)` : ''}</li>`).join('')}</ol></div>`).join('')}</div></div>` : ''}
    ${rows.length ? `<div class="tbl-wrap hide-m"><table><thead><tr><th>Rumah</th><th>Peserta</th><th>Hewan</th><th>Atas nama</th><th class="r">Biaya</th><th class="r">Dibayar</th><th>Status</th><th></th></tr></thead><tbody>${rows.map(p => `<tr>
      <td>${p.blok ? `<span class="house">${esc(p.blok)}</span>` : '<span class="muted">luar</span>'}</td><td style="font-weight:600">${esc(p.nama)}</td><td>${esc(p.hewan)} ${p.hewan === 'Sapi' ? (p.jumlah || 1) + '/7' : '× ' + (p.jumlah || 1)}</td><td>${esc(p.atasNama || '—')}</td>
      <td class="r num">${esc(rp(qbHarga(p, set)))}</td><td class="r num">${esc(rp(p.dibayar || 0))}</td><td><span class="chip ${QB_CH[qbStatus(p, set)]}">${qbStatus(p, set)}</span></td><td class="r" style="white-space:nowrap">${aksi(p)}</td></tr>`).join('')}
      <tr><td colspan="4" style="font-weight:700">Total ${rows.length} peserta</td><td class="r num" style="font-weight:800">${esc(rp(total))}</td><td class="r num" style="font-weight:800">${esc(rp(dibayar))}</td><td colspan="2"></td></tr></tbody></table></div>
      <div class="list-mobile">${rows.map(p => `<div class="row"><div class="grow"><div class="t">${esc(p.nama)}${p.blok ? ' · ' + esc(p.blok) : ''}</div><div class="s">${esc(p.hewan)} ${p.hewan === 'Sapi' ? (p.jumlah || 1) + '/7' : '× ' + (p.jumlah || 1)} · ${esc(rp(p.dibayar || 0))} / ${esc(rp(qbHarga(p, set)))}</div></div><span class="chip ${QB_CH[qbStatus(p, set)]}">${qbStatus(p, set)}</span><button class="btn ghost sm" data-act="qb-edit" data-id="${esc(p.id)}" aria-label="Buka">›</button></div>`).join('')}</div>`
      : `<div class="empty">Belum ada peserta qurban ${th}.${kel ? '<button class="btn pri" data-act="qb-new">+ Peserta qurban</button>' : ''}</div>`}
    ${rows.length ? `<div class="toolbar"><a class="btn wa" href="${esc(waShare(teksQurban(th, set, L, G)))}" target="_blank" rel="noopener">Bagikan daftar shohibul qurban</a><button class="btn" data-act="qb-xlsx">Unduh daftar (Excel)</button></div>` : ''}
    <p class="muted" style="font-size:.8rem">Dana qurban dicatat terpisah dari buku kas RT.</p>`;
}
function teksQurban(th, set, L, G) {
  const lain = L.filter(p => p.hewan !== 'Sapi');
  return `*Daftar Shohibul Qurban ${th}*\n${lingk()}${set.tanggal ? '\nIdul Adha ' + tglSurat(set.tanggal) : ''}\n\n${G.map(g => `*Sapi ${g.no}* (${g.isi}/7)\n${g.ang.map((a, i) => `${i + 1}. ${a.p.atasNama || a.p.nama}${a.n > 1 ? ' (' + a.n + ' bagian)' : ''}`).join('\n')}`).join('\n\n')}`
    + `${lain.length ? `${G.length ? '\n\n' : ''}*Kambing / domba*\n${lain.map((p, i) => `${i + 1}. ${p.atasNama || p.nama} – ${p.hewan}${Number(p.jumlah) > 1 ? ' ×' + p.jumlah : ''}`).join('\n')}` : ''}\n\nSemoga diterima Allah SWT. Aamiin.\n${pengirim()}`;
}
function xlsxQurban(th) {
  const set = qbSet(th), L = S.qurban.filter(x => Number(x.tahun) === th).sort(sortHouse), G = qbKelompok(L), W = MiniXlsx.sheet([6, 12, 26, 14, 28, 15, 15, 12]), K = W.ST;
  W.put(0, `PENGURUS RT ${S.set.rt || '…'} / RW ${S.set.rw || '…'} · ${lingk()}`, K.kop, 8).next().skip();
  W.put(0, 'DAFTAR PESERTA QURBAN ' + th, K.title, 8).next();
  W.put(0, set.tanggal ? 'Idul Adha ' + tglSurat(set.tanggal) : '', K.sub, 8).next().skip();
  W.put(0, 'No', K.headC).put(1, 'Rumah', K.head).put(2, 'Peserta', K.head).put(3, 'Hewan', K.head).put(4, 'Atas nama', K.head).put(5, 'Biaya', K.headR).put(6, 'Dibayar', K.headR).put(7, 'Status', K.head).next();
  L.forEach((p, i) => W.put(0, i + 1, K.center).put(1, p.blok || 'luar', K.text).put(2, p.nama || '', K.text).put(3, p.hewan + (p.hewan === 'Sapi' ? ' ' + (p.jumlah || 1) + '/7' : ' x' + (p.jumlah || 1)), K.text).put(4, p.atasNama || '', K.text).put(5, qbHarga(p, set), K.num).put(6, Number(p.dibayar) || 0, K.num).put(7, qbStatus(p, set), K.text).next());
  W.put(0, '', K.totText).put(1, '', K.totText).put(2, 'Jumlah', K.totText).put(3, '', K.totText).put(4, '', K.totText).put(5, L.reduce((t, p) => t + qbHarga(p, set), 0), K.totNum).put(6, L.reduce((t, p) => t + (Number(p.dibayar) || 0), 0), K.totNum).put(7, '', K.totText).next();
  if (G.length) { W.skip().put(0, 'KELOMPOK SAPI', K.bold, 8).next(); G.forEach(g => { W.put(0, 'Sapi ' + g.no + ` (${g.isi}/7)`, K.bold, 8).next(); g.ang.forEach((a, i) => W.put(1, i + 1, K.center).put(2, (a.p.atasNama || a.p.nama) + (a.n > 1 ? ` (${a.n} bagian)` : ''), K.text, 3).next()); }); }
  return W.build('Qurban ' + th);
}
function openRhAgenda(id) {
  const x = id ? S.rohani.find(a => a.id === id) : null, ro = dis('rohani');
  const v = x || {jenis: JENIS_RH[0], agama: 'Islam', tanggal: todayISO(), ulang: 'tidak'};
  openDlg({title: x ? (bisa('rohani') ? 'Ubah agenda' : 'Agenda kegiatan') : 'Agenda kegiatan baru', area: 'rohani', submitLabel: x ? 'Simpan' : 'Simpan agenda',
    body: `<div class="fld"><label for="ra_j">Nama kegiatan <span class="req">*</span></label><input type="text" id="ra_j" name="judul" required maxlength="120" value="${esc(v.judul || '')}" placeholder="mis. Pengajian rutin ibu-ibu" ${ro}></div>
    <div class="grid2"><div class="fld"><label for="ra_k">Jenis</label><select id="ra_k" name="jenis" ${ro}>${JENIS_RH.map(k => `<option ${k === v.jenis ? 'selected' : ''}>${k}</option>`).join('')}</select></div>
      <div class="fld"><label for="ra_a">Agama</label><select id="ra_a" name="agama" ${ro}>${AGAMA.map(k => `<option ${k === v.agama ? 'selected' : ''}>${k}</option>`).join('')}</select></div></div>
    <div class="grid2"><div class="fld"><label for="ra_t">Tanggal ${x && x.ulang !== 'tidak' ? 'mulai' : ''} <span class="req">*</span></label><input type="date" id="ra_t" name="tanggal" required value="${esc(v.tanggal)}" ${ro}></div>
      <div class="fld"><label for="ra_u">Berulang</label><select id="ra_u" name="ulang" ${ro}>${ULANG_RH.map(([k, l]) => `<option value="${k}" ${k === (v.ulang || 'tidak') ? 'selected' : ''}>${l}</option>`).join('')}</select><span class="hint" id="raUH"></span></div></div>
    <div class="fld" id="raSWrap"${!v.ulang || v.ulang === 'tidak' ? ' hidden' : ''}><label for="ra_s">Berulang sampai</label><input type="date" id="ra_s" name="sampai" value="${esc(v.sampai || '')}" ${ro}><span class="hint">Kosongkan bila terus berjalan</span></div>
    <div class="grid2"><div class="fld"><label for="ra_jm">Jam mulai</label><input type="time" id="ra_jm" name="jam" value="${esc(v.jam || '')}" ${ro}></div>
      <div class="fld"><label for="ra_js">Jam selesai</label><input type="time" id="ra_js" name="jamSelesai" value="${esc(v.jamSelesai || '')}" ${ro}></div></div>
    <div class="fld"><label for="ra_tp">Tempat</label><input type="text" id="ra_tp" name="tempat" maxlength="100" value="${esc(v.tempat || '')}" placeholder="mis. Musholla Al-Ikhlas / rumah Bpk. Hasan (B-03)" ${ro}></div>
    <div class="grid2"><div class="fld"><label for="ra_p">Pemimpin / penceramah</label><input type="text" id="ra_p" name="pemimpin" maxlength="80" value="${esc(v.pemimpin || '')}" placeholder="mis. Ust. Ahmad / Pdt. Yohanes" ${ro}></div>
      <div class="fld"><label for="ra_pj">Penanggung jawab</label><input type="text" id="ra_pj" name="pj" maxlength="80" value="${esc(v.pj || '')}" ${ro}></div></div>
    <div class="fld"><label for="ra_pt">Petugas</label><textarea id="ra_pt" name="petugas" rows="3" maxlength="500" placeholder="satu baris per tugas, mis.&#10;Imam: Bpk. Hasan&#10;Kultum: Bpk. Rudi&#10;Konsumsi: RT blok B" ${ro}>${esc(v.petugas || '')}</textarea></div>
    <div class="fld"><label for="ra_c">Keterangan</label><textarea id="ra_c" name="keterangan" rows="2" maxlength="500" ${ro}>${esc(v.keterangan || '')}</textarea></div>
    ${!x && bisa('info') ? '<label class="ck" style="font-weight:500"><input type="checkbox" name="umumkan"> <span>Sekaligus umumkan di Pengumuman (tampil di papan info & beranda warga)</span></label>' : ''}`,
    onSubmit: async d => {
      const judul = String(d.judul || '').trim(); if (!judul) { pesanDlg('Isi nama kegiatan.', 'ra_j'); return false; }
      if (d.sampai && d.sampai < d.tanggal) { pesanDlg('Tanggal "berulang sampai" tidak boleh sebelum tanggal mulai.', 'ra_s'); return false; }
      const row = {...(x || {}), tipe: 'agenda', judul, jenis: d.jenis, agama: d.agama, tanggal: d.tanggal, ulang: d.ulang, sampai: d.ulang === 'tidak' ? '' : d.sampai || '', jam: d.jam || '', jamSelesai: d.jamSelesai || '',
        tempat: String(d.tempat || '').trim(), pemimpin: String(d.pemimpin || '').trim(), pj: String(d.pj || '').trim(), petugas: String(d.petugas || '').trim(), keterangan: String(d.keterangan || '').trim(), diperbarui: todayISO()};
      if (!x) { row.dibuat = todayISO(); row.dibuatOleh = namaSesi(); }
      const nid = x ? x.id : 'ag_' + uid(), ok = await put('rohani', nid, row);
      if (ok && d.umumkan) await rhUmumkan({...row, id: nid}, (rhKejadian(row, todayISO(), '9999-12-31')[0]) || row.tanggal);
      if (ok) toast(x ? 'Agenda diperbarui.' : 'Agenda kegiatan disimpan.');
      return ok;
    },
    onDelete: x ? () => rhHapus(x, 'Agenda') : null, deleteLabel: 'Hapus agenda'});
  const u = $('#ra_u'), t = $('#ra_t');
  const upd = () => { const sw = $('#raSWrap'); if (sw) sw.hidden = u.value === 'tidak'; const h = $('#raUH'); if (h) h.textContent = u.value === 'tidak' ? '' : rhUlangTeks({tanggal: t.value, ulang: u.value}); };
  if (u) { u.addEventListener('change', upd); t.addEventListener('change', upd); upd(); }
}
// pengumuman yang dibuat dari agenda / kabar duka (termasuk data lama yang belum bertaut)
function rhPengumuman(x) {
  return S.pengumuman.filter(p => p.sumberRohani === x.id || p.id === 'pg-' + x.id || String(p.id).startsWith('pg-' + x.id + '-')
    || (x.tipe === 'duka' && p.kategori === 'Berita duka' && p.judul === 'Berita duka: ' + x.nama)
    || (x.tipe === 'agenda' && p.kategori === 'Keagamaan' && String(p.id).startsWith('rh_') && p.judul === x.judul));
}
async function rhHapus(x, label) {
  const terkait = rhPengumuman(x);
  const ok = await del('rohani', x.id); if (!ok) return false;
  let n = 0; if (bisa('info')) for (const p of terkait) if (await del('pengumuman', p.id)) n++;
  if (terkait.length && !bisa('info')) toast(`${label} dihapus, tetapi pengumumannya masih ada. Minta pengelola Pengumuman menghapusnya.`, 'bad');
  else toast(`${label} dihapus${n ? ` beserta ${n} pengumuman terkait` : ''}.`);
  return true;
}
async function rhUmumkan(a, t) {
  const ok = await put('pengumuman', 'pg-' + a.id + '-' + t, {sumberRohani: a.id, judul: a.judul, kategori: 'Keagamaan', isi: [a.pemimpin && 'Pengisi: ' + a.pemimpin, rhUlangTeks(a), a.petugas, a.keterangan].filter(Boolean).join('\n'), tanggalAcara: t, jam: a.jam || '', tempat: a.tempat || '', sematkan: false, dibuat: todayISO(), diperbarui: todayISO()});
  if (ok) toast('Diumumkan di menu Pengumuman.');
  return ok;
}
function openRhDuka(id) {
  const x = id ? S.rohani.find(a => a.id === id) : null, ro = dis('rohani');
  const v = x || {agama: 'Islam', tanggal: todayISO()};
  openDlg({title: x ? (bisa('rohani') ? 'Ubah kabar duka' : 'Kabar duka') : 'Kabar duka', area: 'rohani', submitLabel: x ? 'Simpan' : 'Simpan kabar duka',
    body: `<div class="grid2"><div class="fld"><label for="rd_n">Nama almarhum/almarhumah <span class="req">*</span></label><input type="text" id="rd_n" name="nama" required maxlength="100" value="${esc(v.nama || '')}" ${ro}></div>
      <div class="fld"><label for="rd_u">Usia (tahun)</label><input type="number" id="rd_u" name="usia" min="0" max="130" value="${esc(v.usia || '')}" ${ro}></div></div>
    <div class="grid2"><div class="fld"><label for="rd_w">Keluarga dari rumah</label><select id="rd_w" name="wargaId" ${ro}><option value="">— bukan warga / kerabat luar —</option>${wargaAktif().map(w => `<option value="${esc(w.id)}" ${w.id === v.wargaId ? 'selected' : ''}>${esc(w.blok)} · ${esc(w.nama)}</option>`).join('')}</select></div>
      <div class="fld"><label for="rd_a">Agama</label><select id="rd_a" name="agama" ${ro}>${agamaOpts(v.agama, 'Tidak disebutkan')}</select></div></div>
    <div class="fld"><label for="rd_h">Hubungan / keterangan keluarga</label><input type="text" id="rd_h" name="hubungan" maxlength="120" value="${esc(v.hubungan || '')}" placeholder="mis. Ayahanda dari Bpk. Budi Santoso" ${ro}></div>
    <div class="grid2"><div class="fld"><label for="rd_t">Tanggal wafat <span class="req">*</span></label><input type="date" id="rd_t" name="tanggal" required value="${esc(v.tanggal)}" ${ro}></div>
      <div class="fld"><label for="rd_j">Jam</label><input type="time" id="rd_j" name="jam" value="${esc(v.jam || '')}" ${ro}></div></div>
    <div class="fld"><label for="rd_r">Disemayamkan di</label><input type="text" id="rd_r" name="rumahDuka" maxlength="120" value="${esc(v.rumahDuka || '')}" placeholder="mis. Rumah duka, Blok B-03" ${ro}></div>
    <div class="grid2"><div class="fld"><label for="rd_wm">Waktu pemakaman</label><input type="text" id="rd_wm" name="waktuMakam" maxlength="60" value="${esc(v.waktuMakam || '')}" placeholder="mis. Ba'da Dzuhur / Sabtu 10.00" ${ro}></div>
      <div class="fld"><label for="rd_m">Lokasi pemakaman</label><input type="text" id="rd_m" name="makam" maxlength="120" value="${esc(v.makam || '')}" placeholder="mis. TPU Bojong Kulur" ${ro}></div></div>
    <div class="fld"><label for="rd_c">Keterangan / info takziah</label><textarea id="rd_c" name="keterangan" rows="2" maxlength="500" ${ro}>${esc(v.keterangan || '')}</textarea></div>
    ${!x && bisa('info') ? '<label class="ck" style="font-weight:500"><input type="checkbox" name="umumkan" checked> <span>Umumkan di Pengumuman & sematkan</span></label>' : ''}`,
    onSubmit: async d => {
      const nama = String(d.nama || '').trim(); if (!nama) { pesanDlg('Isi nama almarhum/almarhumah.', 'rd_n'); return false; }
      const w = d.wargaId && wById(d.wargaId);
      const row = {...(x || {}), tipe: 'duka', nama, usia: d.usia || '', wargaId: w ? w.id : '', blok: w ? w.blok : '', agama: d.agama || '', hubungan: String(d.hubungan || '').trim(), tanggal: d.tanggal, jam: d.jam || '',
        rumahDuka: String(d.rumahDuka || '').trim(), waktuMakam: String(d.waktuMakam || '').trim(), makam: String(d.makam || '').trim(), keterangan: String(d.keterangan || '').trim(), diperbarui: todayISO()};
      if (!x) { row.dibuat = todayISO(); row.dibuatOleh = namaSesi(); }
      const nid = x ? x.id : 'dk_' + uid(), ok = await put('rohani', nid, row);
      if (ok && (d.umumkan || (x && bisa('info') && rhPengumuman(x).length))) await rhUmumkanDuka({...row, id: nid}, x);
      if (ok) toast(x ? 'Kabar duka diperbarui.' : 'Kabar duka disimpan. Bagikan ke grup WhatsApp dari kartunya.');
      return ok;
    },
    onDelete: x ? () => rhHapus(x, 'Kabar duka') : null, deleteLabel: 'Hapus'});
  const rw = $('#rd_w'); if (rw && !x) rw.addEventListener('change', () => { const w = wById(rw.value); if (w && w.agama) $('#rd_a').value = w.agama; });
}
async function rhUmumkanDuka(x, lama) {
  const ada = rhPengumuman(lama || x)[0], pid = ada ? ada.id : 'pg-' + x.id;
  const ok = await put('pengumuman', pid, {...(ada || {}), sumberRohani: x.id, judul: 'Berita duka: ' + x.nama, kategori: 'Berita duka', isi: teksRhDuka(x).replace(/\*/g, '').replace(/\n\n[^\n]*$/, ''), tanggalAcara: '', jam: '', tempat: x.rumahDuka || '', sematkan: true, dibuat: (ada && ada.dibuat) || todayISO(), diperbarui: todayISO()});
  if (ok && !ada) toast('Berita duka diumumkan dan disematkan.');
  return ok;
}
function openRhSet() {
  const st = rhSet();
  openDlg({title: 'Lokasi jadwal sholat', area: 'rohani',
    body: `<label class="ck" style="font-weight:500"><input type="checkbox" name="tampilSholat" ${st.tampilSholat !== false ? 'checked' : ''}> <span>Tampilkan jadwal sholat di Kerohanian</span></label>
    <div class="fld"><label for="rs_k">Nama lokasi</label><input type="text" id="rs_k" name="kota" maxlength="60" value="${esc(st.kota)}"></div>
    <div class="grid2"><div class="fld"><label for="rs_la">Lintang (latitude)</label><input type="number" id="rs_la" name="lat" step="0.0001" min="-11" max="6" value="${esc(st.lat)}"></div>
      <div class="fld"><label for="rs_lo">Bujur (longitude)</label><input type="number" id="rs_lo" name="lng" step="0.0001" min="95" max="141" value="${esc(st.lng)}"></div></div>
    <p class="muted" style="margin:0;font-size:.84rem">Koordinat bisa disalin dari Google Maps (tekan lama lokasi). Waktu dihitung dengan metode Kemenag RI untuk zona WIB.</p>`,
    onSubmit: async d => {
      const lat = Number(d.lat), lng = Number(d.lng);
      if (!isFinite(lat) || lat < -11 || lat > 6 || !isFinite(lng) || lng < 95 || lng > 141) { pesanDlg('Koordinat di luar wilayah Indonesia.', 'rs_la'); return false; }
      const ok = await put('rohani', 'set', {tipe: 'set', kota: String(d.kota || '').trim() || 'Lokasi RT', lat, lng, tampilSholat: !!d.tampilSholat});
      if (ok) toast('Lokasi jadwal sholat disimpan.'); return ok;
    }});
}
function openQbSet() {
  const th = S.qbTh, st = qbSet(th);
  openDlg({title: 'Qurban ' + th + ': harga & tanggal', area: 'rohani',
    body: `<div class="fld"><label for="qs_t">Tanggal Idul Adha</label><input type="date" id="qs_t" name="tanggal" value="${esc(st.tanggal)}"></div>
    <div class="grid2"><div class="fld"><label for="qs_s">Harga sapi per ekor (Rp)</label><input type="number" id="qs_s" name="hargaSapi" min="0" step="50000" value="${esc(st.hargaSapi || '')}"><span class="hint" id="qsH"></span></div>
      <div class="fld"><label for="qs_k">Harga kambing per ekor (Rp)</label><input type="number" id="qs_k" name="hargaKambing" min="0" step="50000" value="${esc(st.hargaKambing || '')}"></div></div>
    <div class="fld"><label for="qs_d">Harga domba per ekor (Rp)</label><input type="number" id="qs_d" name="hargaDomba" min="0" step="50000" value="${esc(st.hargaDomba || '')}"></div>
    <div class="fld"><label for="qs_c">Catatan untuk peserta</label><textarea id="qs_c" name="catatan" rows="2" maxlength="400" placeholder="mis. Pendaftaran paling lambat H-14, pemotongan di lapangan blok C">${esc(st.catatan || '')}</textarea></div>`,
    onSubmit: async d => {
      const ok = await put('rohani', 'qurban-' + th, {tipe: 'qurbanSet', tahun: th, tanggal: d.tanggal || '', hargaSapi: Math.round(Number(d.hargaSapi) || 0), hargaKambing: Math.round(Number(d.hargaKambing) || 0), hargaDomba: Math.round(Number(d.hargaDomba) || 0), catatan: String(d.catatan || '').trim()});
      if (ok) toast('Pengaturan qurban disimpan.'); return ok;
    }});
  const s = $('#qs_s'), h = () => { $('#qsH').textContent = s.value ? '1/7 bagian = ' + rp(Math.round(Number(s.value) / 7)) : ''; };
  s.addEventListener('input', h); h();
}
function openQbPeserta(id) {
  const th = S.qbTh, set = qbSet(th), x = id ? S.qurban.find(p => p.id === id) : null, ro = dis('rohani');
  const v = x || {hewan: 'Sapi', jumlah: 1, tahun: th};
  openDlg({title: x ? (bisa('rohani') ? 'Ubah peserta qurban' : 'Peserta qurban') : 'Peserta qurban ' + th, area: 'rohani', submitLabel: x ? 'Simpan' : 'Daftarkan',
    body: `<div class="fld"><label for="qp_w">Warga</label><select id="qp_w" name="wargaId" ${ro}><option value="">— Peserta dari luar —</option>${wargaAktif().map(w => `<option value="${esc(w.id)}" ${w.id === v.wargaId ? 'selected' : ''}>${esc(w.blok)} · ${esc(w.nama)}</option>`).join('')}</select></div>
    <div class="fld" id="qpNW"${v.wargaId ? ' hidden' : ''}><label for="qp_n">Nama peserta <span class="req">*</span></label><input type="text" id="qp_n" name="nama" maxlength="80" value="${esc(v.wargaId ? '' : v.nama || '')}" ${ro}></div>
    <div class="grid2"><div class="fld"><label for="qp_h">Hewan</label><select id="qp_h" name="hewan" ${ro}>${HEWAN.map(k => `<option ${k === v.hewan ? 'selected' : ''}>${k}</option>`).join('')}</select></div>
      <div class="fld"><label for="qp_j" id="qpJL">${v.hewan === 'Sapi' ? 'Jumlah bagian (1–7)' : 'Jumlah ekor'}</label><input type="number" id="qp_j" name="jumlah" min="1" max="${v.hewan === 'Sapi' ? 7 : 20}" value="${esc(v.jumlah || 1)}" ${ro}></div></div>
    <div class="fld"><label for="qp_a">Qurban atas nama</label><input type="text" id="qp_a" name="atasNama" maxlength="200" value="${esc(v.atasNama || '')}" placeholder="mis. Budi bin Santoso (boleh beberapa nama untuk kambing/domba keluarga)" ${ro}></div>
    <div class="grid2"><div class="fld"><label for="qp_hg">Biaya (Rp)</label><input type="number" id="qp_hg" name="harga" min="0" step="1000" value="${esc(v.harga || '')}" placeholder="otomatis" ${ro}><span class="hint" id="qpHH"></span></div>
      <div class="fld"><label for="qp_b">Sudah dibayar (Rp)</label><input type="number" id="qp_b" name="dibayar" min="0" step="1000" value="${esc(v.dibayar || '')}" ${ro}></div></div>
    <div class="grid2"><div class="fld"><label for="qp_m">Metode bayar</label><select id="qp_m" name="metode" ${ro}>${METODE.map(m => `<option ${m === v.metode ? 'selected' : ''}>${m}</option>`).join('')}</select></div>
      <div class="fld"><label for="qp_tb">Tanggal bayar terakhir</label><input type="date" id="qp_tb" name="tglBayar" value="${esc(v.tglBayar || '')}" ${ro}></div></div>
    <div class="fld"><label for="qp_c">Catatan</label><input type="text" id="qp_c" name="catatan" maxlength="200" value="${esc(v.catatan || '')}" placeholder="mis. minta kaki & kepala, daging dibagikan semua" ${ro}></div>`,
    onSubmit: async d => {
      const w = d.wargaId && wById(d.wargaId), nama = w ? w.nama : String(d.nama || '').trim();
      if (!nama) { pesanDlg('Isi nama peserta.', 'qp_n'); return false; }
      const jumlah = Math.max(1, Math.min(d.hewan === 'Sapi' ? 7 : 20, Math.round(Number(d.jumlah) || 1)));
      const row = {...(x || {}), tahun: th, wargaId: w ? w.id : '', nama, blok: w ? w.blok : '', hewan: d.hewan, jumlah, atasNama: String(d.atasNama || '').trim() || nama, harga: Math.round(Number(d.harga) || 0),
        dibayar: Math.round(Number(d.dibayar) || 0), metode: d.metode, tglBayar: d.tglBayar || (Number(d.dibayar) && !(x && x.tglBayar) ? todayISO() : (x && x.tglBayar) || ''), catatan: String(d.catatan || '').trim(), diperbarui: todayISO()};
      if (!x) { row.dibuat = new Date().toISOString(); row.dibuatOleh = namaSesi(); }
      const ok = await put('qurban', x ? x.id : th + '_' + uid(), row);
      if (ok) toast(x ? 'Data peserta diperbarui.' : `${nama} terdaftar sebagai peserta qurban.`); return ok;
    },
    onDelete: x ? async () => { const ok = await del('qurban', x.id); if (ok) toast('Peserta dihapus.'); return ok; } : null, deleteLabel: 'Hapus peserta'});
  const sw = $('#qp_w'), hw = $('#qp_h'), jj = $('#qp_j');
  const upd = () => { $('#qpNW').hidden = !!sw.value; $('#qpJL').textContent = hw.value === 'Sapi' ? 'Jumlah bagian (1–7)' : 'Jumlah ekor'; jj.max = hw.value === 'Sapi' ? 7 : 20;
    $('#qpHH').textContent = 'Otomatis: ' + rp(qbHarga({hewan: hw.value, jumlah: jj.value}, set)); };
  [sw, hw].forEach(e => e && e.addEventListener('change', upd)); if (jj) jj.addEventListener('input', upd); if (sw) upd();
}

/* ---------- Sumbangan & donasi ---------- */
const SB_THN = (() => { const d = new Date(); return d.getFullYear() + (d.getMonth() >= 4 ? 1 : 0); })();
const SB_JENIS = [
  {j: 'Sumbangan sukarela', sifat: 'sukarela', kat: 'Kegiatan warga', contoh: 'Sumbangan sukarela warga'},
  {j: 'THR keamanan & kebersihan', sifat: 'rumah', kat: 'Keamanan / satpam', contoh: 'THR Satpam & Petugas Kebersihan ' + SB_THN},
  {j: 'HUT RI / 17 Agustus', sifat: 'rumah', kat: 'Kegiatan warga', contoh: 'Lomba & Tasyakuran HUT RI ' + (new Date().getMonth() > 7 ? new Date().getFullYear() + 1 : new Date().getFullYear())},
  {j: 'Duka cita / santunan', sifat: 'sukarela', kat: 'Sosial / duka / sakit', contoh: 'Santunan duka cita keluarga '},
  {j: 'Bantuan sosial / bencana', sifat: 'sukarela', kat: 'Sosial / duka / sakit', contoh: 'Bantuan untuk korban '},
  {j: 'Pembangunan / perbaikan fasum', sifat: 'rumah', kat: 'Perbaikan fasilitas', contoh: 'Perbaikan portal & pos satpam'},
  {j: 'Kegiatan keagamaan', sifat: 'sukarela', kat: 'Kegiatan warga', contoh: 'Santunan anak yatim'},
  {j: 'Lainnya', sifat: 'sukarela', kat: 'Lainnya', contoh: ''}
];
const SB_TAMPIL = [['nama', 'Nama penyumbang saja'], ['lengkap', 'Nama & jumlah'], ['tidak', 'Jangan tampilkan daftar']];
const sbJenis = j => SB_JENIS.find(x => x.j === j) || SB_JENIS[SB_JENIS.length - 1];
const sbProg = id => S.sumbangan.find(p => p.id === id);
const jml = l => l.reduce((t, x) => t + (Number(x.jumlah) || 0), 0);
function sbHitung(p) {
  const masuk = S.donasi.filter(d => d.programId === p.id && d.status === 'Diterima').sort((a, b) => String(b.tanggal || '').localeCompare(String(a.tanggal || '')));
  const tunggu = S.donasi.filter(d => d.programId === p.id && d.status === 'Menunggu');
  const salur = S.salur.filter(x => x.programId === p.id).sort((a, b) => String(b.tanggal || '').localeCompare(String(a.tanggal || '')));
  const terkumpul = jml(masuk), disalurkan = jml(salur), totalRumah = wargaAktif().length;
  const rumah = new Set(masuk.filter(d => d.wargaId).map(d => d.wargaId));
  const target = Number(p.target) || (p.sifat === 'rumah' && Number(p.nominal) ? Number(p.nominal) * totalRumah : 0);
  return {masuk, tunggu, salur, terkumpul, disalurkan, sisa: terkumpul - disalurkan, rumah, totalRumah, target, targetAuto: !Number(p.target) && !!target, pct: target ? Math.min(100, Math.round(terkumpul / target * 100)) : null, persen: target ? Math.round(terkumpul / target * 100) : null};
}
function sbBatas(p) {
  if (p.status === 'Selesai') return 'Program ditutup' + (p.ditutup ? ' ' + tgl(p.ditutup) : '');
  if (!p.selesai) return 'Tanpa batas waktu';
  const n = Math.round((new Date(p.selesai + 'T00:00') - new Date(todayISO() + 'T00:00')) / 864e5);
  return n > 0 ? `${n} hari lagi · s.d. ${tgl(p.selesai)}` : n === 0 ? 'Batas hari ini' : `Lewat batas ${tgl(p.selesai)}`;
}
// Sumbangan yang dicatat di buku kas: penerimaan dijumlahkan per program per tanggal, penyaluran per transaksi
function sbKasRows() {
  const prog = new Map(S.sumbangan.filter(p => p.masukKas !== false).map(p => [p.id, p])), g = new Map();
  for (const d of S.donasi) {
    if (d.status !== 'Diterima' || !d.tanggal || !prog.has(d.programId)) continue;
    const k = d.programId + '|' + d.tanggal, x = g.get(k) || {p: prog.get(d.programId), t: d.tanggal, n: 0, j: 0};
    x.n++; x.j += Number(d.jumlah) || 0; g.set(k, x);
  }
  const masuk = [...g.values()].map(x => ({id: 'sbm_' + x.p.id + '_' + x.t, jenis: 'masuk', tanggal: x.t, kategori: 'Sumbangan: ' + (x.p.jenis || 'Lainnya'), uraian: `Sumbangan ${x.p.nama} · ${x.n} penyumbang`, jumlah: x.j, auto: true, src: 'sb', programId: x.p.id}));
  const keluar = S.salur.filter(x => x.tanggal && prog.has(x.programId)).map(x => { const p = prog.get(x.programId);
    return {id: 'sbk_' + x.id, jenis: 'keluar', tanggal: x.tanggal, kategori: p.katKeluar || 'Lainnya', uraian: `${x.uraian || 'Penyaluran'} (dana ${p.nama})`, penerima: x.penerima || '', noNota: x.noNota || '', metode: x.metode || '', catatan: x.catatan || '', jumlah: Number(x.jumlah) || 0, auto: true, src: 'sb', programId: p.id}; });
  return {masuk, keluar};
}
const sbNamaTampil = d => d.anonim ? 'Hamba Allah' : (d.nama || '—');
function teksSbLaporan(p) {
  const h = sbHitung(p), daftar = p.tampilPenyumbang === 'tidak' ? '' : h.masuk.slice().reverse().map((d, i) => `${i + 1}. ${sbNamaTampil(d)}${!d.anonim && d.blok ? ' (' + d.blok + ')' : ''}${p.tampilPenyumbang === 'lengkap' ? ' – ' + rp(d.jumlah) : ''}`).join('\n');
  return `*Laporan ${p.nama}*\n${lingk()}\n\nTerkumpul: *${rp(h.terkumpul)}* dari ${h.masuk.length} penyumbang${h.target ? `\nTarget: ${rp(h.target)} (${h.persen}%)` : ''}${p.sifat === 'rumah' ? `\nPartisipasi: ${h.rumah.size} dari ${h.totalRumah} rumah` : ''}\nDisalurkan: ${rp(h.disalurkan)}\nSisa dana: ${rp(h.sisa)}`
    + `${h.salur.length ? '\n\n*Penyaluran*\n' + h.salur.slice().reverse().map(x => `- ${tgl(x.tanggal)} ${x.uraian}${x.penerima ? ' (' + x.penerima + ')' : ''}: ${rp(x.jumlah)}`).join('\n') : ''}`
    + `${daftar ? '\n\n*Terima kasih kepada*\n' + daftar : ''}\n\n${pengirim()}`;
}
function teksSbAjakan(p) {
  return `*${p.nama}*\n${lingk()}\n\n${p.deskripsi ? p.deskripsi + '\n\n' : ''}${p.sifat === 'rumah' && Number(p.nominal) ? `Saran sumbangan: *${rp(p.nominal)} per rumah*\n` : 'Sumbangan sukarela, berapa pun nilainya sangat berarti.\n'}${p.selesai ? `Batas: ${tglSurat(p.selesai)}\n` : ''}`
    + `${S.set.infoBayar ? `\nCara menyumbang:\n${S.set.infoBayar}\n` : ''}${p.konfirmasiWarga !== false && p.tampilWarga !== false ? '\nSetelah menyumbang, konfirmasi lewat aplikasi warga: menu Sumbangan.\n' : ''}\nTerima kasih.\n${pengirim()}`;
}
const teksSbIngat = (p, w) => `Yth. Bapak/Ibu ${w.nama} (${w.blok}),\n\nKami mengajak partisipasi untuk *${p.nama}*${p.sifat === 'rumah' && Number(p.nominal) ? ` sebesar ${rp(p.nominal)} per rumah` : ''}${p.selesai ? `, paling lambat ${tglSurat(p.selesai)}` : ''}.\n${S.set.infoBayar ? `\n${S.set.infoBayar}\n` : ''}\nMohon abaikan bila sudah menyumbang. Terima kasih.\n${pengirim()}`;
const sbNoBukti = d => 'SB/' + String(d.tanggal || todayISO()).replace(/-/g, '').slice(2) + '/' + String(d.id || '').slice(-5).toUpperCase();
const teksSbTerimaKasih = (p, d) => `*Tanda terima sumbangan*\n${lingk()}\n\nNo: ${sbNoBukti(d)}\nDiterima dari: ${d.nama}${d.blok ? ' (' + d.blok + ')' : ''}\nUntuk: ${p.nama}\nSebesar: ${rp(d.jumlah)}\nTerbilang: ${terbilang(Number(d.jumlah) || 0)}\nTanggal: ${tgl(d.tanggal)} (${d.metode || 'Tunai'})\n\nTerima kasih atas kepeduliannya, semoga menjadi berkah.\n${pengirim()}`;

function vSumbangan() {
  if (isWarga()) return vSumbanganWarga();
  const sel = S.sbSel && sbProg(S.sbSel);
  if (sel) return vSbDetail(sel);
  const kel = bisa('sumbangan'), th = String(new Date().getFullYear());
  const all = [...S.sumbangan].sort((a, b) => (a.status === 'Selesai') - (b.status === 'Selesai') || String(b.mulai || '').localeCompare(String(a.mulai || '')));
  const H = new Map(all.map(x => [x.id, sbHitung(x)]));
  const aktif = all.filter(x => x.status !== 'Selesai');
  const list = S.sbFilter === 'semua' ? all : S.sbFilter === 'selesai' ? all.filter(x => x.status === 'Selesai') : aktif;
  const tunggu = S.donasi.filter(d => d.status === 'Menunggu' && sbProg(d.programId));
  const masukTh = jml(S.donasi.filter(d => d.status === 'Diterima' && String(d.tanggal || '').startsWith(th) && sbProg(d.programId)));
  const salurTh = jml(S.salur.filter(x => String(x.tanggal || '').startsWith(th) && sbProg(x.programId)));
  const sisa = [...H.values()].reduce((t, h) => t + h.sisa, 0);
  const seg = [['aktif', `Aktif ${aktif.length}`], ['selesai', 'Selesai'], ['semua', `Semua ${all.length}`]].map(([k, l]) => `<button type="button" data-act="sbf" data-k="${k}" aria-pressed="${S.sbFilter === k}">${l}</button>`).join('');
  const kartu = x => { const h = H.get(x.id);
    return `<article class="sb-card" data-act="sb-buka" data-id="${esc(x.id)}">
      <div class="meta"><span class="chip ${x.status === 'Selesai' ? 'mute' : 'ok'}">${x.status === 'Selesai' ? 'Selesai' : 'Aktif'}</span><span class="chip mute plain">${esc(x.jenis || 'Lainnya')}</span>${x.masukKas === false ? '<span class="chip info plain">Dana terpisah</span>' : ''}${h.tunggu.length ? `<span class="chip warn">${h.tunggu.length} perlu verifikasi</span>` : ''}</div>
      <h4>${esc(x.nama)}</h4>
      <div class="sb-amt"><b>${esc(rp(h.terkumpul))}</b>${h.target ? `<span>dari ${esc(rp(h.target))} · ${h.persen}%</span>` : ''}</div>
      ${h.target ? `<div class="meter"><i style="width:${h.pct}%"></i></div>` : ''}
      <div class="sb-st"><span>${h.masuk.length} penyumbang</span>${x.sifat === 'rumah' ? `<span>${h.rumah.size}/${h.totalRumah} rumah</span>` : ''}<span>Sisa dana ${esc(rp(h.sisa))}</span></div>
      <div class="muted" style="font-size:.8rem">${esc(sbBatas(x))}</div>
      <button type="button" class="btn sm go" data-act="sb-buka" data-id="${esc(x.id)}">${kel ? 'Kelola' : 'Lihat'} ›</button></article>`; };
  const tpl = SB_JENIS.slice(0, 4).map(j => `<button type="button" class="btn sm" data-act="sb-new" data-j="${esc(j.j)}">+ ${esc(j.j)}</button>`).join('');
  return `<div class="sec-head"><div><h2>Sumbangan</h2><p>Penggalangan dana warga: sumbangan sukarela, THR petugas keamanan & kebersihan, HUT RI, duka cita, dan lainnya. Penerimaan dan penyaluran otomatis masuk buku kas.</p></div>
    ${kel ? '<button class="btn pri" data-act="sb-new">+ Program sumbangan</button>' : ''}</div>
  ${tunggu.length && kel ? `<div class="notice" style="background:var(--sun-soft);color:#6b4a00">${tunggu.length} konfirmasi sumbangan dari warga menunggu diverifikasi (${esc(rp(jml(tunggu)))}). Buka programnya, lalu tab "Perlu verifikasi".</div>` : ''}
  <div class="tiles">
    <div class="tile"><span class="ti g">${ico('sumbangan')}</span><span class="lbl">Program aktif</span><span class="val">${aktif.length}</span><span class="sub">${all.length} program tercatat</span></div>
    <div class="tile"><span class="ti b">${ico('naik')}</span><span class="lbl">Terkumpul ${th}</span><span class="val" style="color:var(--ok)">${esc(rp(masukTh))}</span><span class="sub">${S.donasi.filter(d => d.status === 'Diterima' && String(d.tanggal || '').startsWith(th)).length} sumbangan</span></div>
    <div class="tile"><span class="ti r">${ico('pengeluaran')}</span><span class="lbl">Disalurkan ${th}</span><span class="val" style="color:var(--bad)">${esc(rp(salurTh))}</span><span class="sub">${S.salur.filter(x => String(x.tanggal || '').startsWith(th)).length} penyaluran</span></div>
    <div class="tile"><span class="ti s">${ico('kas')}</span><span class="lbl">Sisa dana sumbangan</span><span class="val">${esc(rp(sisa))}</span><span class="sub">belum disalurkan, semua program</span></div>
  </div>
  ${all.length ? `<div class="toolbar"><div class="seg" role="group" aria-label="Saring program">${seg}</div></div>
    ${list.length ? `<div class="sb-grid">${list.map(kartu).join('')}</div>` : `<div class="empty">${S.sbFilter === 'aktif' ? 'Tidak ada program yang sedang berjalan.' : 'Belum ada program selesai.'}</div>`}`
  : `<div class="empty">Belum ada program sumbangan.${kel ? `<div style="font-size:.88rem;margin-top:6px">Mulai cepat dari salah satu jenis berikut:</div><div class="sb-tpl">${tpl}</div>` : ''}</div>`}`;
}
function vSbDetail(p) {
  const h = sbHitung(p), kel = bisa('sumbangan'), buka = p.status !== 'Selesai';
  const belum = wargaAktif().filter(w => !h.rumah.has(w.id));
  const tabs = [['penyumbang', `Penyumbang ${h.masuk.length}`], ['belum', `${p.sifat === 'rumah' ? 'Belum menyumbang' : 'Belum ikut'} ${belum.length}`], ['salur', `Penyaluran ${h.salur.length}`]];
  if (h.tunggu.length || S.sbTab === 'verif') tabs.push(['verif', `Perlu verifikasi ${h.tunggu.length}`]);
  if (kel && buka) tabs.push(['keliling', 'Catat keliling']);
  if (!tabs.some(t => t[0] === S.sbTab)) S.sbTab = 'penyumbang';
  const seg = tabs.map(([k, l]) => `<button type="button" data-act="sbt" data-k="${k}" aria-pressed="${S.sbTab === k}">${esc(l)}</button>`).join('');
  const head = `<div class="sec-head"><div><button class="btn ghost sm sb-back" data-act="sb-kembali">‹ Semua program</button><h2>${esc(p.nama)}</h2>
      <div class="sb-chips"><span class="chip ${buka ? 'ok' : 'mute'}">${buka ? 'Aktif' : 'Selesai'}</span><span class="chip mute plain">${esc(p.jenis || 'Lainnya')}</span><span class="chip mute plain">${p.sifat === 'rumah' ? 'Per rumah' + (Number(p.nominal) ? ' · ' + esc(rp(p.nominal)) : '') : 'Sukarela'}</span>${p.masukKas === false ? '<span class="chip info plain">Dana terpisah dari kas RT</span>' : '<span class="chip info plain">Tercatat di buku kas</span>'}${p.tampilWarga === false ? '<span class="chip mute plain">Tidak tampil ke warga</span>' : ''}</div>
      ${p.deskripsi ? `<p style="margin-top:8px;white-space:pre-line">${esc(p.deskripsi)}</p>` : ''}</div>
    ${kel ? `<div class="toolbar" style="margin:0">${buka ? `<button class="btn pri" data-act="sb-catat">+ Catat sumbangan</button>` : ''}<button class="btn" data-act="sb-salur">+ Penyaluran</button><button class="btn ghost" data-act="sb-ubah" data-id="${esc(p.id)}">Ubah program</button></div>` : ''}</div>`;
  const hero = `<div class="panel sb-hero"><div><span class="lbl">Terkumpul</span><b class="big">${esc(rp(h.terkumpul))}</b>
      <span class="muted">${h.target ? `dari target ${esc(rp(h.target))}${h.targetAuto ? ` (${esc(rp(p.nominal))} × ${h.totalRumah} rumah)` : ''}` : 'Tanpa target'}</span>
      ${h.target ? `<div class="meter"><i style="width:${h.pct}%"></i></div>` : '<div style="height:10px"></div>'}
      <span class="muted" style="font-size:.84rem">${h.target ? h.persen + '% tercapai · ' : ''}${esc(sbBatas(p))}</span></div>
    <div class="sb-mini">
      <div><b>${h.masuk.length}</b><span>penyumbang</span></div>
      <div><b>${h.rumah.size}/${h.totalRumah}</b><span>rumah ikut (${h.totalRumah ? Math.round(h.rumah.size / h.totalRumah * 100) : 0}%)</span></div>
      <div><b style="color:var(--bad)">${esc(rp(h.disalurkan))}</b><span>disalurkan</span></div>
      <div><b>${esc(rp(h.sisa))}</b><span>sisa dana</span></div>
    </div></div>`;
  let isi = '';
  if (S.sbTab === 'penyumbang') {
    const q = S.sbQ.trim().toLowerCase(), L = h.masuk.filter(d => !q || [d.nama, d.blok, d.catatan, d.metode].some(v => String(v || '').toLowerCase().includes(q)));
    const aksi = d => { const w = d.wargaId && wById(d.wargaId), wa = w && w.noHp && waNomor(w.noHp).length >= 10;
      return `${wa && kel ? `<a class="btn ghost sm" href="${esc(waLink(w.noHp, teksSbTerimaKasih(p, d)))}" target="_blank" rel="noopener" title="Kirim tanda terima & ucapan terima kasih">Terima kasih</a>` : ''}<button class="btn sm" data-act="sb-don" data-id="${esc(d.id)}">${kel ? 'Ubah' : 'Lihat'}</button>`; };
    const rowsT = L.map((d, i) => `<tr><td class="c">${i + 1}</td><td class="num">${esc(tgl(d.tanggal))}</td><td><div style="font-weight:600">${esc(d.nama || '—')}${d.anonim ? ' <span class="chip mute plain" style="font-size:.7rem">anonim</span>' : ''}</div>${d.catatan ? `<div class="muted" style="font-size:.78rem">${esc(d.catatan)}</div>` : ''}</td>
      <td>${d.blok ? `<span class="house">${esc(d.blok)}</span>` : '<span class="muted">luar</span>'}</td><td>${esc(d.metode || 'Tunai')}${d.sumber === 'warga' ? ' <span class="chip info plain" style="font-size:.7rem">dari warga</span>' : ''}</td><td class="r num amt-in">${esc(rp(d.jumlah))}</td><td class="r" style="white-space:nowrap">${aksi(d)}</td></tr>`).join('');
    const rowsM = L.map(d => `<div class="row"><div class="grow"><div class="t">${esc(d.nama || '—')}${d.anonim ? ' · anonim' : ''}</div><div class="s">${esc(tgl(d.tanggal))}${d.blok ? ' · ' + esc(d.blok) : ''} · ${esc(d.metode || 'Tunai')}</div></div><span class="amt-in num">${esc(nf.format(d.jumlah))}</span><button class="btn ghost sm" data-act="sb-don" data-id="${esc(d.id)}" aria-label="Buka">›</button></div>`).join('');
    isi = `<div class="toolbar"><input class="search" type="search" id="qSb" placeholder="Cari nama, rumah, catatan…" value="${esc(S.sbQ)}" aria-label="Cari penyumbang"></div>
      ${L.length ? `<div class="tbl-wrap hide-m"><table><thead><tr><th class="c" style="width:40px">No</th><th>Tanggal</th><th>Penyumbang</th><th>Rumah</th><th>Metode</th><th class="r">Jumlah</th><th></th></tr></thead><tbody>${rowsT}
        <tr><td></td><td colspan="4" style="font-weight:700">Total ${L.length} sumbangan</td><td class="r num amt-in" style="font-weight:800">${esc(rp(jml(L)))}</td><td></td></tr></tbody></table></div>
        <div class="list-mobile">${rowsM}<div class="row"><div class="grow"><div class="t">Total ${L.length} sumbangan</div></div><span class="amt-in num" style="font-weight:800">${esc(rp(jml(L)))}</span></div></div>`
      : `<div class="empty">${h.masuk.length ? 'Tidak ada yang cocok dengan pencarian.' : 'Belum ada sumbangan tercatat.'}${!h.masuk.length && kel && buka ? '<button class="btn pri" data-act="sb-catat">+ Catat sumbangan</button>' : ''}</div>`}`;
  } else if (S.sbTab === 'belum') {
    const baris = w => { const wa = w.noHp && waNomor(w.noHp).length >= 10;
      return `<div class="row"><span class="house">${esc(w.blok)}</span><div class="grow"><div class="t">${esc(w.nama)}</div><div class="s">${esc(w.noHp ? hpTampil(w.noHp) : 'No. HP belum diisi')}</div></div>
        ${wa && buka ? `<a class="btn wa sm" href="${esc(waLink(w.noHp, teksSbIngat(p, w)))}" target="_blank" rel="noopener">Ingatkan</a>` : ''}${kel && buka ? `<button class="btn sm" data-act="sb-catat" data-w="${esc(w.id)}">Catat</button>` : ''}</div>`; };
    isi = `<div class="toolbar"><a class="btn wa" href="${esc(waShare(teksSbAjakan(p)))}" target="_blank" rel="noopener">Bagikan ajakan ke grup WhatsApp</a></div>
      ${belum.length ? `<div class="panel" style="padding:4px 16px">${belum.map(baris).join('')}</div>` : '<div class="empty">Semua rumah sudah ikut menyumbang. 🎉</div>'}`;
  } else if (S.sbTab === 'salur') {
    const rowsT = h.salur.map((x, i) => `<tr><td class="c">${i + 1}</td><td class="num">${esc(tgl(x.tanggal))}</td><td><div style="font-weight:600">${esc(x.uraian)}</div>${x.catatan ? `<div class="muted" style="font-size:.78rem">${esc(x.catatan)}</div>` : ''}</td><td>${esc(x.penerima || '—')}</td><td>${esc(x.metode || '')}</td><td class="mono">${esc(x.noNota || '—')}</td><td class="r num amt-out">${esc(rp(x.jumlah))}</td><td class="r"><button class="btn sm" data-act="sb-salur" data-id="${esc(x.id)}">${kel ? 'Ubah' : 'Lihat'}</button></td></tr>`).join('');
    const rowsM = h.salur.map(x => `<div class="row"><div class="grow"><div class="t">${esc(x.uraian)}</div><div class="s">${esc(tgl(x.tanggal))}${x.penerima ? ' · ' + esc(x.penerima) : ''}</div></div><span class="amt-out num">−${esc(nf.format(x.jumlah))}</span><button class="btn ghost sm" data-act="sb-salur" data-id="${esc(x.id)}" aria-label="Buka">›</button></div>`).join('');
    isi = h.salur.length ? `<div class="tbl-wrap hide-m"><table><thead><tr><th class="c" style="width:40px">No</th><th>Tanggal</th><th>Uraian</th><th>Penerima</th><th>Metode</th><th>No. nota</th><th class="r">Jumlah</th><th></th></tr></thead><tbody>${rowsT}
        <tr><td></td><td colspan="5" style="font-weight:700">Total disalurkan · sisa dana ${esc(rp(h.sisa))}</td><td class="r num amt-out" style="font-weight:800">${esc(rp(h.disalurkan))}</td><td></td></tr></tbody></table></div>
        <div class="list-mobile">${rowsM}<div class="row"><div class="grow"><div class="t">Total disalurkan</div><div class="s">Sisa dana ${esc(rp(h.sisa))}</div></div><span class="amt-out num" style="font-weight:800">${esc(rp(h.disalurkan))}</span></div></div>`
      : `<div class="empty">Belum ada dana yang disalurkan.${kel ? '<button class="btn pri" data-act="sb-salur">+ Catat penyaluran</button>' : ''}</div>`;
  } else if (S.sbTab === 'verif') {
    isi = h.tunggu.length ? `<div class="kel-list">${h.tunggu.map(d => `<article class="kel p-Sedang"><div class="meta"><span class="chip warn">Menunggu verifikasi</span><span>Dikirim ${esc(d.dikirim ? tgl(d.dikirim) + ' ' + jamDT(d.dikirim) : tgl(d.tanggal))}</span></div>
        <h4 style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span>${esc(d.nama || '—')}${d.blok ? ' · ' + esc(d.blok) : ''}${d.anonim ? ' <span class="chip mute plain">minta anonim</span>' : ''}</span><span>${esc(rp(d.jumlah))}</span></h4>
        <p>${esc(d.metode || 'Tunai')} · tanggal ${esc(tgl(d.tanggal))}${d.catatan ? ' · ' + esc(d.catatan) : ''}</p>
        ${kel ? `<div class="meta" style="gap:8px"><button class="btn sm pri" data-act="sb-verif" data-id="${esc(d.id)}">Periksa & terima</button><button class="btn sm" data-act="sb-tolak" data-id="${esc(d.id)}">Tolak</button></div>` : ''}</article>`).join('')}</div>`
      : '<div class="empty">Tidak ada konfirmasi yang menunggu.</div>';
  } else if (S.sbTab === 'keliling') isi = vSbKeliling(p, belum);
  return head + hero + `<div class="toolbar"><div class="seg" role="group" aria-label="Bagian program">${seg}</div></div>${isi}
  <div class="toolbar">
    <a class="btn wa" href="${esc(waShare(teksSbLaporan(p)))}" target="_blank" rel="noopener">Bagikan laporan ke WhatsApp</a>
    <button class="btn" data-act="sb-xlsx" data-id="${esc(p.id)}">Unduh laporan (Excel)</button>
    ${kel ? `<button class="btn ghost" data-act="sb-tutup" data-id="${esc(p.id)}">${buka ? 'Tutup program' : 'Buka kembali program'}</button>` : ''}
  </div>`;
}
function sbMzState(p) { if (!S.sbMz || S.sbMz.pid !== p.id) S.sbMz = {pid: p.id, sel: new Set(), jml: {}, tgl: todayISO(), metode: 'Tunai', q: ''}; return S.sbMz; }
function vSbKeliling(p, belum) {
  const z = sbMzState(p), q = z.q.trim().toLowerCase(), def = Number(p.nominal) || '';
  const list = belum.filter(w => !q || (w.blok + ' ' + w.nama).toLowerCase().includes(q));
  const semuaPilih = list.length && list.every(w => z.sel.has(w.id));
  const metOpt = `<select id="sbmMet" data-sbm="metode">${METODE.map(m => `<option ${m === z.metode ? 'selected' : ''}>${esc(m)}</option>`).join('')}</select>`;
  const rowsT = list.map(w => { const on = z.sel.has(w.id);
    return `<tr class="${on ? 'pick' : ''}" data-row="${esc(w.id)}"><td><input type="checkbox" data-sbm="sel" data-id="${esc(w.id)}" ${on ? 'checked' : ''} aria-label="Pilih ${esc(w.nama)}"></td><td><span class="house">${esc(w.blok)}</span></td><td style="font-weight:600">${esc(w.nama)}</td>
      <td><input type="number" min="0" step="1000" inputmode="numeric" data-sbm="jml" data-id="${esc(w.id)}" value="${esc(z.jml[w.id] ?? def)}" aria-label="Jumlah sumbangan ${esc(w.nama)}"></td></tr>`; }).join('');
  const rowsM = list.map(w => { const on = z.sel.has(w.id);
    return `<div class="mz-card ${on ? 'pick' : ''}" data-row="${esc(w.id)}"><label class="row" style="padding:0;border:0;cursor:pointer"><input type="checkbox" data-sbm="sel" data-id="${esc(w.id)}" ${on ? 'checked' : ''}><span class="house">${esc(w.blok)}</span><span class="grow"><span class="t">${esc(w.nama)}</span></span></label>
      <input type="number" min="0" step="1000" inputmode="numeric" data-sbm="jml" data-id="${esc(w.id)}" value="${esc(z.jml[w.id] ?? def)}" aria-label="Jumlah sumbangan ${esc(w.nama)}"></div>`; }).join('');
  return `<div class="panel" style="display:grid;gap:12px">
      <p class="muted" style="margin:0;font-size:.86rem">Untuk penarikan dari rumah ke rumah: centang rumah yang sudah menyerahkan sumbangan, sesuaikan jumlahnya, lalu simpan sekaligus. Hanya rumah yang belum tercatat yang tampil.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end">
        <div class="fld" style="margin:0"><label for="sbmTgl">Tanggal terima</label><input type="date" id="sbmTgl" data-sbm="tgl" value="${esc(z.tgl)}"></div>
        <div class="fld" style="margin:0"><label for="sbmMet">Metode</label>${metOpt}</div>
        <div class="fld" style="margin:0;flex:1;min-width:180px"><label for="sbmQ">Cari rumah / nama</label><input type="search" id="sbmQ" data-sbm="q" value="${esc(z.q)}" placeholder="mis. B-12"></div>
      </div>
      <div><button type="button" class="btn sm" data-act="sbm-semua" ${list.length ? '' : 'disabled'}>${semuaPilih ? 'Batal pilih semua' : `Pilih semua (${list.length})`}</button></div></div>
    ${list.length ? `<div class="tbl-wrap hide-m"><table class="mz-tbl"><thead><tr><th style="width:36px"></th><th>Rumah</th><th>Kepala keluarga</th><th>Jumlah (Rp)</th></tr></thead><tbody>${rowsT}</tbody></table></div>
    <div class="list-mobile"><div style="display:grid;gap:8px">${rowsM}</div></div>` : `<div class="empty">${belum.length ? 'Tidak ada rumah yang cocok.' : 'Semua rumah sudah tercatat.'}</div>`}
    <div class="mz-bar"><span class="grow" id="sbmSum"></span><button type="button" class="btn ghost" data-act="sbm-reset">Kosongkan</button><button type="button" class="btn pri" id="sbmSave" data-act="sbm-simpan" disabled>Simpan</button></div>`;
}
function sbMzRingkas() {
  const p = S.sbMz && sbProg(S.sbMz.pid); if (!p) return {n: 0, total: 0, rows: []};
  const z = S.sbMz, rows = [];
  for (const id of z.sel) { const w = wById(id); if (!w) continue; const j = Math.round(Number(z.jml[id] ?? p.nominal) || 0); if (j > 0) rows.push({w, j}); }
  return {p, n: rows.length, total: rows.reduce((t, r) => t + r.j, 0), rows};
}
function sbMzBar() {
  const r = sbMzRingkas(), el = $('#sbmSum'), b = $('#sbmSave');
  if (el) el.innerHTML = r.n ? `<b>${r.n} rumah</b> · <b>${esc(rp(r.total))}</b>` : '<span class="muted">Belum ada rumah yang dipilih</span>';
  if (b) { b.disabled = !r.n; b.textContent = r.n ? `Simpan ${r.n} sumbangan` : 'Simpan'; }
}
function sbMzSimpan() {
  const r = sbMzRingkas(), z = S.sbMz; if (!r.n) { toast('Pilih rumah dan isi jumlahnya dulu.', 'bad'); return; }
  openDlg({title: 'Simpan sumbangan keliling?', area: 'sumbangan', submitLabel: `Simpan ${r.n} sumbangan`,
    body: `<p style="margin:0"><b>${esc(r.p.nama)}</b> · tanggal ${esc(tgl(z.tgl))} · ${esc(z.metode)} · total <b>${esc(rp(r.total))}</b></p>
      <div class="panel" style="max-height:240px;overflow:auto;padding:10px 12px;background:var(--sunk);border:0;font-size:.86rem">${r.rows.map(x => `<div>${esc(x.w.blok)} · ${esc(x.w.nama)}: ${esc(rp(x.j))}</div>`).join('')}</div>`,
    onSubmit: async () => {
      if (!z.tgl) { pesanDlg('Isi tanggal terima.'); return false; }
      const docs = r.rows.map(x => ({koleksi: 'donasi', id: r.p.id + '_' + x.w.id + '_' + uid().slice(-5), data: {programId: r.p.id, wargaId: x.w.id, nama: x.w.nama, blok: x.w.blok, jumlah: x.j, tanggal: z.tgl, metode: z.metode, status: 'Diterima', sumber: 'keliling', catatan: '', dicatat: todayISO(), dicatatOleh: namaSesi(), oleh: (S.me && S.me.id) || '', olehSesi: S.sesi || ''}}));
      let simpan = 0;
      for (let i = 0; i < docs.length; i += 100) {
        const {data, error} = await SB.from('dokumen').upsert(docs.slice(i, i + 100), {onConflict: 'koleksi,id', ignoreDuplicates: true}).select('id,data');
        if (error) { pesanDlg(`Gagal menyimpan${simpan ? ` (${simpan} sudah tersimpan)` : ''}: ${sbErr(error).code === 'ditolak' ? 'role Anda tidak punya izin mengelola sumbangan.' : error.message}`); return false; }
        for (const d of data || []) taruh('donasi', d.id, d.data);
        simpan += (data || []).length;
      }
      sinkron('donasi'); S.sbMz = null; S.sbTab = 'penyumbang'; sbSched();
      toast(`${simpan} sumbangan tersimpan, total ${rp(r.total)}.`);
      return true;
    }});
}
function openSbProgram(id, jenisAwal) {
  const x = id ? sbProg(id) : null;
  const J = sbJenis((x && x.jenis) || jenisAwal || SB_JENIS[0].j);
  const v = x || {jenis: J.j, nama: J.contoh, sifat: J.sifat, katKeluar: J.kat, mulai: todayISO(), status: 'Aktif', masukKas: true, tampilWarga: true, konfirmasiWarga: true, tampilPenyumbang: 'nama'};
  const H = x ? sbHitung(x) : null, ro = dis('sumbangan');
  openDlg({
    title: x ? (bisa('sumbangan') ? 'Ubah program sumbangan' : 'Program sumbangan') : 'Program sumbangan baru', area: 'sumbangan', submitLabel: x ? 'Simpan' : 'Buat program',
    body: `<div class="grid2">
      <div class="fld"><label for="sbp_j">Jenis</label><select id="sbp_j" name="jenis" ${ro}>${SB_JENIS.map(j => `<option ${j.j === v.jenis ? 'selected' : ''}>${esc(j.j)}</option>`).join('')}</select></div>
      <div class="fld"><label for="sbp_s">Sifat</label><select id="sbp_s" name="sifat" ${ro}><option value="sukarela" ${v.sifat !== 'rumah' ? 'selected' : ''}>Sukarela (nominal bebas)</option><option value="rumah" ${v.sifat === 'rumah' ? 'selected' : ''}>Per rumah (ada nominal saran)</option></select></div>
    </div>
    <div class="fld"><label for="sbp_n">Nama program <span class="req">*</span></label><input type="text" id="sbp_n" name="nama" required maxlength="100" value="${esc(v.nama)}" placeholder="mis. THR Satpam & Petugas Kebersihan ${SB_THN}" ${ro}></div>
    <div class="fld"><label for="sbp_d">Keterangan untuk warga</label><textarea id="sbp_d" name="deskripsi" rows="3" maxlength="600" placeholder="mis. THR untuk 3 satpam dan 2 petugas kebersihan, dibagikan H-7 Lebaran." ${ro}>${esc(v.deskripsi || '')}</textarea></div>
    <div class="grid2" style="align-items:start">
      <div class="fld" id="sbpNomWrap"${v.sifat === 'rumah' ? '' : ' hidden'}><label for="sbp_nom">Saran per rumah (Rp) <span class="req">*</span></label><input type="number" id="sbp_nom" name="nominal" min="0" step="1000" inputmode="numeric" value="${esc(v.nominal || '')}" ${ro}></div>
      <div class="fld"><label for="sbp_t">Target dana (Rp)</label><input type="number" id="sbp_t" name="target" min="0" step="1000" inputmode="numeric" value="${esc(v.target || '')}" placeholder="opsional" ${ro}><span class="hint" id="sbpTHint"></span></div>
    </div>
    <div class="grid2">
      <div class="fld"><label for="sbp_m">Mulai</label><input type="date" id="sbp_m" name="mulai" value="${esc(v.mulai || '')}" ${ro}></div>
      <div class="fld"><label for="sbp_b">Batas pengumpulan</label><input type="date" id="sbp_b" name="selesai" value="${esc(v.selesai || '')}" ${ro}></div>
    </div>
    <div class="fld"><label for="sbp_k">Kategori pengeluaran saat dana disalurkan</label><select id="sbp_k" name="katKeluar" ${ro}>${KAT_KELUAR.map(k => `<option ${k === v.katKeluar ? 'selected' : ''}>${esc(k)}</option>`).join('')}</select></div>
    <label class="ck" style="font-weight:500;align-items:flex-start"><input type="checkbox" name="masukKas" ${v.masukKas === false ? '' : 'checked'} ${ro}> <span>Catat di buku kas RT & laporan keuangan<br><span class="muted" style="font-size:.82rem">Matikan bila dana ini titipan yang dikelola terpisah dari kas RT.</span></span></label>
    <label class="ck" style="font-weight:500;align-items:flex-start"><input type="checkbox" name="tampilWarga" ${v.tampilWarga === false ? '' : 'checked'} ${ro}> <span>Tampilkan ke warga di aplikasi (progres & penyaluran)</span></label>
    <label class="ck" style="font-weight:500;align-items:flex-start"><input type="checkbox" name="konfirmasiWarga" ${v.konfirmasiWarga === false ? '' : 'checked'} ${ro}> <span>Warga bisa mengirim konfirmasi sumbangan (diverifikasi bendahara sebelum dihitung)</span></label>
    <div class="fld"><label for="sbp_tp">Daftar penyumbang yang terlihat warga</label><select id="sbp_tp" name="tampilPenyumbang" ${ro}>${SB_TAMPIL.map(([k, l]) => `<option value="${k}" ${(v.tampilPenyumbang || 'nama') === k ? 'selected' : ''}>${l}</option>`).join('')}</select><span class="hint">Penyumbang yang memilih anonim tampil sebagai "Hamba Allah".</span></div>
    ${H ? `<p class="muted" style="margin:0;font-size:.84rem">Tercatat ${H.masuk.length} sumbangan (${esc(rp(H.terkumpul))}) dan ${H.salur.length} penyaluran.</p>` : ''}`,
    onSubmit: async d => {
      const nama = String(d.nama || '').trim(), nominal = Math.round(Number(d.nominal) || 0), target = Math.round(Number(d.target) || 0);
      if (!nama) { pesanDlg('Isi nama program.', 'sbp_n'); return false; }
      if (d.sifat === 'rumah' && nominal <= 0) { pesanDlg('Isi saran sumbangan per rumah.', 'sbp_nom'); return false; }
      if (d.selesai && d.mulai && d.selesai < d.mulai) { pesanDlg('Batas pengumpulan tidak boleh sebelum tanggal mulai.', 'sbp_b'); return false; }
      const row = {...(x || {}), nama, jenis: d.jenis, sifat: d.sifat, nominal: d.sifat === 'rumah' ? nominal : 0, target, deskripsi: String(d.deskripsi || '').trim(), mulai: d.mulai || todayISO(), selesai: d.selesai || '',
        katKeluar: d.katKeluar, masukKas: !!d.masukKas, tampilWarga: !!d.tampilWarga, konfirmasiWarga: !!d.konfirmasiWarga, tampilPenyumbang: d.tampilPenyumbang || 'nama', status: (x && x.status) || 'Aktif', diperbarui: todayISO()};
      if (!x) { row.dibuat = todayISO(); row.dibuatOleh = namaSesi(); }
      const nid = x ? x.id : uid();
      const ok = await put('sumbangan', nid, row);
      if (ok) { toast(x ? 'Program diperbarui.' : 'Program sumbangan dibuat.'); S.sbSel = nid; if (!x) S.sbTab = 'penyumbang'; }
      return ok;
    },
    onDelete: x ? async () => {
      if (H.masuk.length || H.tunggu.length || H.salur.length) { pesanDlg('Program ini sudah punya catatan sumbangan atau penyaluran, jadi tidak bisa dihapus. Gunakan "Tutup program" bila sudah selesai.'); return false; }
      const ok = await del('sumbangan', x.id); if (ok) { S.sbSel = null; toast('Program dihapus.'); } return ok;
    } : null, deleteLabel: 'Hapus program'
  });
  const sel = $('#sbp_j'), sf = $('#sbp_s'), nm = $('#sbp_n'), kat = $('#sbp_k');
  const tHint = () => { const el = $('#sbpTHint'); if (!el) return; const n = Number(($('#sbp_nom') || {}).value) || 0; el.textContent = sf.value === 'rumah' && n ? `Kosongkan untuk target otomatis ${rp(n * wargaAktif().length)} (${wargaAktif().length} rumah)` : 'Kosongkan bila tidak ada target'; };
  if (sf) sf.addEventListener('change', () => { $('#sbpNomWrap').hidden = sf.value !== 'rumah'; tHint(); });
  const nomEl = $('#sbp_nom'); if (nomEl) nomEl.addEventListener('input', tHint);
  if (sel && !x) sel.addEventListener('change', () => { const j = sbJenis(sel.value); if (!nm.dataset.ubah) nm.value = j.contoh; sf.value = j.sifat; kat.value = j.kat; $('#sbpNomWrap').hidden = j.sifat !== 'rumah'; tHint(); });
  if (nm) nm.addEventListener('input', () => { nm.dataset.ubah = '1'; });
  tHint();
}
function openSbDonasi(pid, did, wid) {
  const p = sbProg(pid); if (!p) return;
  const x = did ? S.donasi.find(d => d.id === did) : null;
  if (x && x.status === 'Menunggu') { openSbVerif(x.id); return; }
  const H = sbHitung(p), ro = dis('sumbangan');
  const v = x || {wargaId: wid || '', tanggal: todayISO(), metode: 'Tunai', jumlah: p.sifat === 'rumah' ? p.nominal : ''};
  const w0 = v.wargaId && wById(v.wargaId), wa = x && w0 && w0.noHp && waNomor(w0.noHp).length >= 10;
  openDlg({
    title: x ? (bisa('sumbangan') ? 'Ubah sumbangan' : 'Sumbangan') : 'Catat sumbangan', area: 'sumbangan', submitLabel: x ? 'Simpan' : 'Catat sumbangan',
    body: `<div class="panel" style="padding:10px 14px;background:var(--sunk);border:0"><b>${esc(p.nama)}</b><div class="muted" style="font-size:.84rem">${p.sifat === 'rumah' ? 'Saran ' + esc(rp(p.nominal)) + ' per rumah · ' : ''}terkumpul ${esc(rp(H.terkumpul))}</div></div>
    <div class="fld"><label for="sbd_w">Dari</label><select id="sbd_w" name="wargaId" ${ro}><option value="">— Donatur dari luar / lainnya —</option>${wargaAktif().map(w => `<option value="${esc(w.id)}" ${w.id === v.wargaId ? 'selected' : ''}>${esc(w.blok)} · ${esc(w.nama)}${H.rumah.has(w.id) && w.id !== v.wargaId ? ' ✓ sudah' : ''}${!x && H.tunggu.some(t => t.wargaId === w.id) ? ' · ada konfirmasi' : ''}</option>`).join('')}</select></div>
    <div class="fld" id="sbdNamaWrap"${v.wargaId ? ' hidden' : ''}><label for="sbd_n">Nama donatur <span class="req">*</span></label><input type="text" id="sbd_n" name="nama" maxlength="80" value="${esc(v.wargaId ? '' : v.nama || '')}" placeholder="mis. PT Maju Jaya / Bpk. Hasan (Kluster Merak)" ${ro}></div>
    <div class="grid2">
      <div class="fld"><label for="sbd_j">Jumlah (Rp) <span class="req">*</span></label><input type="number" id="sbd_j" name="jumlah" min="1" step="500" required inputmode="numeric" value="${esc(v.jumlah)}" ${ro}><span class="hint" id="sbdRp">${v.jumlah ? esc(terbilang(Number(v.jumlah))) : ''}</span><span class="hint" id="sbdKonf" hidden style="color:var(--info)"></span></div>
      <div class="fld"><label for="sbd_t">Tanggal terima <span class="req">*</span></label><input type="date" id="sbd_t" name="tanggal" required value="${esc(v.tanggal)}" ${ro}></div>
    </div>
    <div class="fld"><label for="sbd_m">Metode</label><select id="sbd_m" name="metode" ${ro}>${METODE.map(m => `<option ${m === v.metode ? 'selected' : ''}>${esc(m)}</option>`).join('')}</select></div>
    <label class="ck" style="font-weight:500"><input type="checkbox" name="anonim" ${v.anonim ? 'checked' : ''} ${ro}> <span>Sembunyikan nama di daftar untuk warga (tampil "Hamba Allah")</span></label>
    <div class="fld"><label for="sbd_c">Catatan</label><input type="text" id="sbd_c" name="catatan" maxlength="200" value="${esc(v.catatan || '')}" placeholder="opsional" ${ro}></div>
    ${x ? `<p class="muted" style="margin:0;font-size:.82rem">No. bukti ${esc(sbNoBukti(x))}${x.dicatatOleh ? ' · dicatat ' + esc(x.dicatatOleh) : ''}${x.sumber === 'warga' ? ' · dikonfirmasi warga lewat aplikasi' : x.sumber === 'keliling' ? ' · catat keliling' : ''}</p>` : ''}`,
    foot: wa && bisa('sumbangan') ? `<a class="btn wa" href="${esc(waLink(w0.noHp, teksSbTerimaKasih(p, x)))}" target="_blank" rel="noopener">Kirim tanda terima</a>` : '',
    onSubmit: async d => {
      const jumlah = Math.round(Number(d.jumlah) || 0), w = d.wargaId && wById(d.wargaId), nama = w ? w.nama : String(d.nama || '').trim();
      if (!nama) { pesanDlg('Isi nama donatur.', 'sbd_n'); return false; }
      if (jumlah <= 0) { pesanDlg('Jumlah harus lebih dari 0.', 'sbd_j'); return false; }
      if (!d.tanggal) { pesanDlg('Isi tanggal terima.', 'sbd_t'); return false; }
      const kf = !x && w ? sbKonfWarga(p.id, w.id) : null, dasar = x || kf || {};
      const row = {...dasar, programId: p.id, wargaId: w ? w.id : '', nama, blok: w ? w.blok : '', jumlah, tanggal: d.tanggal, metode: d.metode, anonim: !!d.anonim, catatan: String(d.catatan || '').trim(),
        status: 'Diterima', sumber: dasar.sumber || 'bendahara', dicatat: (x && x.dicatat) || todayISO(), dicatatOleh: (x && x.dicatatOleh) || namaSesi()};
      if (kf) row.verif = {oleh: namaSesi(), waktu: nowDT()};
      const ok = await put('donasi', x ? x.id : kf ? kf.id : p.id + '_' + (w ? w.id : 'luar') + '_' + uid().slice(-5), row);
      if (ok) toast(x ? 'Sumbangan diperbarui.' : `Sumbangan ${rp(jumlah)} dari ${nama} tercatat.`);
      return ok;
    },
    onDelete: x ? async () => { const ok = await del('donasi', x.id); if (ok) toast('Catatan sumbangan dihapus.'); return ok; } : null, deleteLabel: 'Hapus catatan'
  });
  const sw = $('#sbd_w'), jj = $('#sbd_j');
  const tRp = () => { const el = $('#sbdRp'); if (el) el.textContent = jj.value ? terbilang(Number(jj.value)) : ''; };
  let dariKonf = false;
  const isiDariKonf = () => {
    if (x || !sw || !jj) return;
    const kf = sw.value ? sbKonfWarga(p.id, sw.value) : null, info = $('#sbdKonf'), form = jj.form;
    if (kf) {
      jj.value = Math.round(Number(kf.jumlah) || 0) || '';
      if (kf.tanggal && form.tanggal) form.tanggal.value = kf.tanggal;
      if (kf.metode && form.metode && METODE.includes(kf.metode)) form.metode.value = kf.metode;
      if (form.anonim) form.anonim.checked = !!kf.anonim;
      if (form.catatan && kf.catatan && !form.catatan.value) form.catatan.value = kf.catatan;
      dariKonf = true;
      if (info) { info.hidden = false; info.textContent = `Diisi dari konfirmasi warga (${kf.metode || 'Tunai'}${kf.tanggal ? ', ' + tgl(kf.tanggal) : ''}). Ubah bila uang yang diterima berbeda. Menyimpan akan memverifikasi konfirmasi itu.`; }
    } else {
      if (dariKonf) { jj.value = p.sifat === 'rumah' && Number(p.nominal) ? p.nominal : ''; dariKonf = false; }
      if (info) { info.hidden = true; info.textContent = ''; }
    }
    tRp();
  };
  if (sw) sw.addEventListener('change', () => { $('#sbdNamaWrap').hidden = !!sw.value; isiDariKonf(); });
  if (jj) jj.addEventListener('input', () => { dariKonf = false; tRp(); });
  isiDariKonf();
}
/* Konfirmasi sumbangan terbaru dari warga yang masih menunggu verifikasi untuk program ini */
function sbKonfWarga(pid, wid) {
  return S.donasi.filter(d => d.programId === pid && d.wargaId === wid && d.status === 'Menunggu')
    .sort((a, b) => String(b.dikirim || b.tanggal || '').localeCompare(String(a.dikirim || a.tanggal || '')))[0] || null;
}
function openSbSalur(pid, sid) {
  const p = sbProg(pid); if (!p) return;
  const x = sid ? S.salur.find(s => s.id === sid) : null, H = sbHitung(p), ro = dis('sumbangan');
  const v = x || {tanggal: todayISO(), metode: 'Tunai'};
  const sisa = H.sisa + (x ? Number(x.jumlah) || 0 : 0);
  let peringatan = false;
  openDlg({
    title: x ? (bisa('sumbangan') ? 'Ubah penyaluran' : 'Penyaluran') : 'Catat penyaluran dana', area: 'sumbangan', submitLabel: x ? 'Simpan' : 'Catat penyaluran',
    body: `<div class="panel" style="padding:10px 14px;background:var(--sunk);border:0"><b>${esc(p.nama)}</b><div class="muted" style="font-size:.84rem">Sisa dana ${esc(rp(sisa))}${p.masukKas === false ? ' · dana terpisah, tidak masuk buku kas' : ' · tercatat sebagai pengeluaran kas (' + esc(p.katKeluar || 'Lainnya') + ')'}</div></div>
    <div class="fld"><label for="sbs_u">Uraian <span class="req">*</span></label><input type="text" id="sbs_u" name="uraian" required maxlength="140" value="${esc(v.uraian || '')}" placeholder="mis. THR Lebaran satpam shift pagi" ${ro}></div>
    <div class="grid2">
      <div class="fld"><label for="sbs_p">Diserahkan kepada <span class="req">*</span></label><input type="text" id="sbs_p" name="penerima" required maxlength="80" value="${esc(v.penerima || '')}" placeholder="mis. Pak Otin (satpam)" ${ro}></div>
      <div class="fld"><label for="sbs_j">Jumlah (Rp) <span class="req">*</span></label><input type="number" id="sbs_j" name="jumlah" min="1" step="500" required inputmode="numeric" value="${esc(v.jumlah || '')}" ${ro}></div>
    </div>
    <div class="grid2">
      <div class="fld"><label for="sbs_t">Tanggal <span class="req">*</span></label><input type="date" id="sbs_t" name="tanggal" required value="${esc(v.tanggal)}" ${ro}></div>
      <div class="fld"><label for="sbs_m">Metode</label><select id="sbs_m" name="metode" ${ro}>${METODE.map(m => `<option ${m === v.metode ? 'selected' : ''}>${esc(m)}</option>`).join('')}</select></div>
    </div>
    <div class="grid2">
      <div class="fld"><label for="sbs_n">No. nota / tanda terima</label><input type="text" id="sbs_n" name="noNota" maxlength="40" value="${esc(v.noNota || '')}" placeholder="opsional" ${ro}></div>
      <div class="fld"><label for="sbs_c">Catatan</label><input type="text" id="sbs_c" name="catatan" maxlength="200" value="${esc(v.catatan || '')}" placeholder="opsional" ${ro}></div>
    </div>`,
    onSubmit: async d => {
      const jumlah = Math.round(Number(d.jumlah) || 0);
      if (jumlah <= 0) { pesanDlg('Jumlah harus lebih dari 0.', 'sbs_j'); return false; }
      if (jumlah > sisa && !peringatan) { peringatan = true; pesanDlg(`Jumlah melebihi sisa dana program (${rp(sisa)}). Klik simpan sekali lagi bila memang kekurangannya ditutup dari dana lain.`, 'sbs_j'); return false; }
      const row = {...(x || {}), programId: p.id, uraian: String(d.uraian || '').trim(), penerima: String(d.penerima || '').trim(), jumlah, tanggal: d.tanggal, metode: d.metode, noNota: String(d.noNota || '').trim(), catatan: String(d.catatan || '').trim(), dicatat: (x && x.dicatat) || todayISO(), dicatatOleh: (x && x.dicatatOleh) || namaSesi()};
      const ok = await put('salur', x ? x.id : uid(), row);
      if (ok) { toast(`Penyaluran ${rp(jumlah)} tercatat.`); S.sbTab = 'salur'; }
      return ok;
    },
    onDelete: x ? async () => { const ok = await del('salur', x.id); if (ok) toast('Penyaluran dihapus.'); return ok; } : null, deleteLabel: 'Hapus penyaluran'
  });
}
function openSbVerif(did) {
  const x = S.donasi.find(d => d.id === did); if (!x || x.status !== 'Menunggu') return;
  const p = sbProg(x.programId);
  openDlg({title: 'Verifikasi konfirmasi sumbangan', area: 'sumbangan', submitLabel: 'Terima & catat',
    body: `<div class="panel" style="padding:10px 14px;background:var(--sunk);border:0"><b>${esc(x.nama || '—')}${x.blok ? ' · ' + esc(x.blok) : ''}</b><div class="muted" style="font-size:.84rem">${esc(p ? p.nama : '')} · ${esc(x.metode || 'Tunai')}${x.catatan ? ' · ' + esc(x.catatan) : ''}${x.anonim ? ' · minta anonim' : ''}</div></div>
      <p class="muted" style="margin:0;font-size:.86rem">Cocokkan dengan mutasi rekening atau uang tunai yang diterima. Setelah diterima, sumbangan dihitung di progres${p && p.masukKas !== false ? ' dan masuk buku kas' : ''}.</p>
      <div class="grid2">
        <div class="fld"><label for="sbv_j">Jumlah diterima (Rp)</label><input type="number" id="sbv_j" name="jumlah" min="1" step="500" required value="${esc(x.jumlah)}"></div>
        <div class="fld"><label for="sbv_t">Tanggal diterima</label><input type="date" id="sbv_t" name="tanggal" required value="${esc(x.tanggal || todayISO())}"></div>
      </div>`,
    foot: `<button type="button" class="btn" data-act="sb-tolak" data-id="${esc(x.id)}" style="color:var(--bad)">Tolak</button>`,
    onSubmit: async d => {
      const jumlah = Math.round(Number(d.jumlah) || 0); if (jumlah <= 0) { pesanDlg('Jumlah harus lebih dari 0.', 'sbv_j'); return false; }
      const ok = await put('donasi', x.id, {...x, jumlah, tanggal: d.tanggal, status: 'Diterima', verif: {oleh: namaSesi(), waktu: nowDT()}, dicatat: todayISO(), dicatatOleh: namaSesi()});
      if (ok) toast(`Sumbangan ${x.nama || ''} ${rp(jumlah)} diterima.`); return ok;
    }});
}
function openSbTolak(did) {
  const x = S.donasi.find(d => d.id === did); if (!x || x.status !== 'Menunggu') return;
  openDlg({title: 'Tolak konfirmasi sumbangan', area: 'sumbangan', submitLabel: 'Tolak',
    body: `<p style="margin:0"><b>${esc(x.nama || '—')}</b> · ${esc(rp(x.jumlah))} · ${esc(tgl(x.tanggal))}</p>
      <div class="fld"><label for="sbx_c">Alasan (terlihat oleh warga) <span class="req">*</span></label><textarea id="sbx_c" name="catatan" rows="2" required maxlength="200" placeholder="mis. Transfer belum masuk ke rekening RT, mohon kirim bukti ke bendahara"></textarea></div>`,
    onSubmit: async d => {
      const c = String(d.catatan || '').trim(); if (!c) { pesanDlg('Isi alasan penolakan.', 'sbx_c'); return false; }
      const ok = await put('donasi', x.id, {...x, status: 'Ditolak', verif: {oleh: namaSesi(), waktu: nowDT(), catatan: c}});
      if (ok) toast('Konfirmasi ditolak.'); return ok;
    }});
}
async function sbTutup(b) {
  const p = sbProg(b.dataset.id); if (!p || !bisa('sumbangan')) return;
  const tutup = p.status !== 'Selesai';
  if (tutup && !b.dataset.confirm) { b.dataset.confirm = '1'; b.textContent = 'Klik lagi untuk menutup'; return; }
  b.disabled = true;
  const ok = await put('sumbangan', p.id, {...p, status: tutup ? 'Selesai' : 'Aktif', ditutup: tutup ? todayISO() : ''});
  if (ok) toast(tutup ? 'Program ditutup. Data tetap tersimpan dan bisa dibuka kembali.' : 'Program dibuka kembali.');
}
function xlsxSumbangan(p) {
  const st = S.set, h = sbHitung(p), W = MiniXlsx.sheet([6, 14, 34, 12, 16, 16, 22]), K = W.ST;
  const sec = t => W.skip().put(0, t, K.bold, 7).next();
  W.put(0, `PENGURUS RT ${st.rt || '…'} / RW ${st.rw || '…'}`, K.kop, 7).next();
  W.put(0, lingk(), 0, 7).next().skip();
  W.put(0, 'LAPORAN SUMBANGAN', K.title, 7).next();
  W.put(0, p.nama, K.sub, 7).next();
  W.put(0, `${p.jenis || ''} · ${p.sifat === 'rumah' ? 'per rumah ' + rp(p.nominal) : 'sukarela'} · ${tgl(p.mulai)}${p.selesai ? ' s.d. ' + tgl(p.selesai) : ''} · ${p.status === 'Selesai' ? 'Selesai' : 'Aktif'}`, K.note, 7).next();
  sec('I. RINGKASAN');
  const r = (l, v, s = K.rp) => W.put(0, l, K.text, 5).put(5, v, s, 2).next();
  r('Total terkumpul', h.terkumpul); if (h.target) r(`Target${h.targetAuto ? ' (otomatis)' : ''}`, h.target);
  r('Jumlah penyumbang', h.masuk.length, K.num); r('Rumah ikut menyumbang', `${h.rumah.size} dari ${h.totalRumah}`, K.text);
  r('Total disalurkan', h.disalurkan, K.negRp);
  W.put(0, 'Sisa dana', K.akhirText, 5).put(5, h.sisa, K.akhirRp, 2).next();
  sec('II. DAFTAR PENYUMBANG');
  W.put(0, 'No', K.headC).put(1, 'Tanggal', K.head).put(2, 'Nama', K.head).put(3, 'Rumah', K.head).put(4, 'Metode', K.head).put(5, 'Jumlah', K.headR).put(6, 'Catatan', K.head).next();
  if (!h.masuk.length) W.put(0, 'Belum ada sumbangan', K.center, 7).next();
  h.masuk.slice().reverse().forEach((d, i) => W.put(0, i + 1, K.center).put(1, tgl(d.tanggal), K.text).put(2, (d.nama || '') + (d.anonim ? ' (anonim)' : ''), K.text).put(3, d.blok || 'luar', K.text).put(4, d.metode || 'Tunai', K.text).put(5, Number(d.jumlah) || 0, K.num).put(6, d.catatan || '', K.text).next());
  W.put(0, '', K.totText).put(1, '', K.totText).put(2, 'Jumlah', K.totText).put(3, '', K.totText).put(4, '', K.totText).put(5, h.terkumpul, K.totNum).put(6, '', K.totText).next();
  sec('III. PENYALURAN DANA');
  W.put(0, 'No', K.headC).put(1, 'Tanggal', K.head).put(2, 'Uraian', K.head).put(3, 'Metode', K.head).put(4, 'Penerima', K.head).put(5, 'Jumlah', K.headR).put(6, 'No. nota', K.head).next();
  if (!h.salur.length) W.put(0, 'Belum ada penyaluran', K.center, 7).next();
  h.salur.slice().reverse().forEach((x, i) => W.put(0, i + 1, K.center).put(1, tgl(x.tanggal), K.text).put(2, x.uraian || '', K.text).put(3, x.metode || '', K.text).put(4, x.penerima || '', K.text).put(5, Number(x.jumlah) || 0, K.num).put(6, x.noNota || '', K.text).next());
  W.put(0, '', K.totText).put(1, '', K.totText).put(2, 'Jumlah', K.totText).put(3, '', K.totText).put(4, '', K.totText).put(5, h.disalurkan, K.totNum).put(6, '', K.totText).next();
  W.skip();
  W.put(0, 'Dibuat oleh,', K.sign, 3).put(4, `${st.kota || lingk()}, ${tglSurat(todayISO())}`, K.sign, 3).next();
  W.put(0, 'Bendahara', K.sign, 3).put(4, `Mengetahui, Ketua RT ${st.rt || ''}`.trim(), K.sign, 3).next();
  W.skip(3);
  W.put(0, namaBendahara() || '(..............................)', K.signB, 3).put(4, namaKetua() || '(..............................)', K.signB, 3).next();
  return W.build('Sumbangan');
}
function eksporSumbangan(id) {
  const p = sbProg(id); if (!p) return;
  try { unduh(fname(`Sumbangan ${p.nama} - ${lingk()}.xlsx`), xlsxSumbangan(p)); } catch (e) { toast('File Excel gagal dibuat. Coba lagi.', 'bad'); }
}
/* --- tampilan warga --- */
let sbPubMuat = false;
async function muatSbPub() {
  if (sbPubMuat || !SB) return; sbPubMuat = true;
  try { const {data, error} = await SB.rpc('sumbangan_saya'); S.sbPub = !error && data ? data : {program: [], saya: [], gagal: true}; }
  catch (e) { S.sbPub = {program: [], saya: [], gagal: true}; }
  sbPubMuat = false; render();
}
function vSumbanganWarga() {
  const head = `<div class="sec-head"><div><h2>Sumbangan warga</h2><p>Program penggalangan dana di lingkungan kita, lengkap dengan perkembangan dan penyalurannya.</p></div></div>`;
  if (!S.sbPub) { muatSbPub(); return head + '<div class="empty">Memuat program sumbangan…</div>'; }
  const P = S.sbPub.program || [], w = wargaSaya();
  const saya = w ? S.donasi.filter(d => d.wargaId === w.id) : (S.sbPub.saya || []);
  const CH = {Diterima: 'ok', Menunggu: 'warn', Ditolak: 'bad'};
  const kartu = p => {
    const terk = Number(p.terkumpul) || 0, target = Number(p.target) || Number(p.targetOtomatis) || 0, pct = target ? Math.min(100, Math.round(terk / target * 100)) : null;
    const milik = saya.filter(d => d.programId === p.id), buka = p.status === 'Aktif', diterima = milik.filter(d => d.status === 'Diterima');
    const don = p.penyumbang || [];
    return `<article class="sb-card" style="cursor:default">
      <div class="meta"><span class="chip ${buka ? 'ok' : 'mute'}">${buka ? 'Sedang berjalan' : 'Selesai'}</span><span class="chip mute plain">${esc(p.jenis || '')}</span></div>
      <h4>${esc(p.nama)}</h4>
      ${p.deskripsi ? `<p style="margin:0;font-size:.88rem;white-space:pre-line">${esc(p.deskripsi)}</p>` : ''}
      <div class="sb-amt"><b>${esc(rp(terk))}</b><span>${p.donatur} penyumbang${target ? ` dari target ${esc(rp(target))}` : ''}</span></div>
      ${target ? `<div class="meter"><i style="width:${pct}%"></i></div>` : ''}
      <div class="sb-st">${p.sifat === 'rumah' && Number(p.nominal) ? `<span>Saran ${esc(rp(p.nominal))} per rumah</span>` : '<span>Sukarela</span>'}${Number(p.disalurkan) ? `<span>Sudah disalurkan ${esc(rp(p.disalurkan))}</span>` : ''}<span>${esc(sbBatas(p))}</span></div>
      ${milik.length ? `<div style="display:grid;gap:4px">${milik.map(d => `<div style="font-size:.86rem"><span class="chip ${CH[d.status] || 'mute'}">${d.status === 'Diterima' ? 'Sumbangan Anda diterima' : d.status === 'Menunggu' ? 'Menunggu verifikasi bendahara' : 'Konfirmasi ditolak'}</span> ${esc(rp(d.jumlah))} · ${esc(tgl(d.tanggal))}${d.status === 'Ditolak' && (d.verif && d.verif.catatan || d.alasan) ? `<div class="muted" style="font-size:.8rem;margin-top:2px">${esc((d.verif && d.verif.catatan) || d.alasan)}</div>` : ''}</div>`).join('')}</div>` : ''}
      ${buka && p.konfirmasiWarga ? `<button type="button" class="btn ${diterima.length ? '' : 'pri'} sm go" data-act="sbw-konf" data-id="${esc(p.id)}">${diterima.length ? 'Kirim sumbangan lagi' : 'Lanjut menyumbang'}</button>` : ''}
      ${don.length ? `<details><summary style="cursor:pointer;font-size:.86rem;font-weight:600">Daftar penyumbang (${don.length})</summary><div class="sb-don">${don.map(d => `<div><span>${esc(d.nama)}${d.blok ? ' · ' + esc(d.blok) : ''}</span>${d.jumlah != null ? `<span class="num">${esc(rp(d.jumlah))}</span>` : ''}</div>`).join('')}</div></details>` : ''}
    </article>`;
  };
  return head + (S.sbPub.gagal ? '<div class="notice">Data sumbangan belum bisa dimuat. <button class="btn sm" data-act="sbw-muat">Coba lagi</button></div>' : '')
    + (P.length ? `<div class="sb-grid">${P.map(kartu).join('')}</div>` : '<div class="empty">Belum ada program sumbangan saat ini.</div>')
    + (S.set.infoBayar && P.some(p => p.status === 'Aktif') ? `<div class="panel"><h3>Cara menyumbang</h3><p style="margin:0;white-space:pre-wrap">${esc(S.set.infoBayar)}</p><p class="muted" style="margin:8px 0 0;font-size:.84rem">Tekan "Lanjut menyumbang", lalu isi jumlah dan cara menyumbang agar bendahara bisa memverifikasi.</p></div>` : '');
}
function openSbKonfirmasi(pid) {
  const p = ((S.sbPub && S.sbPub.program) || []).find(x => x.id === pid), w = wargaSaya();
  if (!p || !w) return;
  openDlg({title: 'Konfirmasi sumbangan', submitLabel: 'Kirim ke Bendahara',
    body: `<div class="panel" style="padding:10px 14px;background:var(--sunk);border:0"><b>${esc(p.nama)}</b><div class="muted" style="font-size:.84rem">${esc(w.blok)} · ${esc(w.nama)}</div></div>
      <div class="grid2">
        <div class="fld"><label for="sbk_j">Jumlah (Rp) <span class="req">*</span></label><input type="number" id="sbk_j" name="jumlah" min="1" step="500" required inputmode="numeric" value="${esc(p.sifat === 'rumah' && Number(p.nominal) ? p.nominal : '')}"></div>
        <div class="fld"><label for="sbk_t">Tanggal <span class="req">*</span></label><input type="date" id="sbk_t" name="tanggal" required value="${todayISO()}" max="${todayISO()}"></div>
      </div>
      <div class="fld"><label for="sbk_m">Cara menyumbang</label><select id="sbk_m" name="metode">${METODE.map(m => `<option>${esc(m)}</option>`).join('')}</select></div>
      <div class="fld"><label for="sbk_c">Keterangan</label><input type="text" id="sbk_c" name="catatan" maxlength="200" placeholder="mis. transfer dari rekening a.n. Budi, atau tunai ke Bu Tata"></div>
      <label class="ck" style="font-weight:500"><input type="checkbox" name="anonim"> <span>Sembunyikan nama saya di daftar penyumbang</span></label>
      <p class="muted" style="margin:0;font-size:.84rem">Sumbangan dihitung setelah diverifikasi bendahara.</p>`,
    onSubmit: async d => {
      const jumlah = Math.round(Number(d.jumlah) || 0);
      if (jumlah <= 0) { pesanDlg('Jumlah harus lebih dari 0.', 'sbk_j'); return false; }
      const ok = await put('donasi', p.id + '_' + w.id + '_' + uid().slice(-5), {programId: p.id, wargaId: w.id, nama: w.nama, blok: w.blok, jumlah, tanggal: d.tanggal || todayISO(), metode: d.metode, catatan: String(d.catatan || '').trim(), anonim: !!d.anonim, status: 'Menunggu', sumber: 'warga'});
      if (ok) { toast('Terima kasih! Konfirmasi terkirim ke bendahara.'); S.sbPub = null; }
      return ok;
    }});
}

/* ---------- Pengajuan dana (permintaan pengeluaran) ---------- */
const bolehAjukan = () => !!S.sesi && !isWarga() && !!roleSaya();
const PJ_CHIP = {Menunggu: 'warn', Dicairkan: 'ok', Ditolak: 'bad', Dibatalkan: 'mute'};
function pjRinciHtml(x) {
  const its = Array.isArray(x.rincian) ? x.rincian : []; if (!its.length) return '';
  return `<table class="pj-rinci"><tbody>${its.map((it, i) => `<tr><td class="muted" style="width:22px">${i + 1}.</td><td>${esc(it.nama)}</td><td class="r muted">${esc(String(it.qty).replace('.', ','))}${it.satuan ? ' ' + esc(it.satuan) : ''} × ${esc(rp(it.harga))}</td><td class="r">${esc(rp(it.subtotal ?? pjSub(it)))}</td></tr>`).join('')}
    ${its.length > 1 ? `<tr class="t"><td></td><td>Total</td><td></td><td class="r">${esc(rp(x.jumlah))}</td></tr>` : ''}</tbody></table>`;
}
function vPengajuan() {
  const proses = bisa('pengeluaran'), saya = S.me && S.me.id;
  const all = [...S.pengajuan].sort((a, b) => (b.status === 'Menunggu') - (a.status === 'Menunggu') || String(b.diajukan || '').localeCompare(String(a.diajukan || '')) || String(b.id).localeCompare(String(a.id)));
  const cnt = {menunggu: all.filter(x => x.status === 'Menunggu').length, saya: all.filter(x => x.pemohonId === saya).length};
  const list = all.filter(x => S.pjFilter === 'semua' ? true : S.pjFilter === 'saya' ? x.pemohonId === saya : S.pjFilter === 'selesai' ? x.status !== 'Menunggu' : x.status === 'Menunggu');
  const seg = [['menunggu', `Menunggu ${cnt.menunggu}`], ['selesai', 'Selesai'], ['saya', `Pengajuan saya ${cnt.saya}`], ['semua', `Semua ${all.length}`]]
    .map(([k, l]) => `<button type="button" data-act="pjf" data-k="${k}" aria-pressed="${S.pjFilter === k}">${l}</button>`).join('');
  const totMenunggu = all.filter(x => x.status === 'Menunggu').reduce((t, x) => t + (Number(x.jumlah) || 0), 0);
  const kartu = x => {
    const milik = x.pemohonId === saya, tunggu = x.status === 'Menunggu', p = x.proses || {};
    return `<article class="kel ${tunggu ? 'p-Sedang' : x.status === 'Ditolak' ? 'p-Tinggi' : 'p-Rendah'}">
      <div class="meta"><span class="chip ${PJ_CHIP[x.status] || 'mute'}">${esc(x.status || 'Menunggu')}</span><span class="chip mute plain">${esc(x.kategori || 'Lainnya')}</span>${tunggu && proses && Number(x.jumlah) > saldoKini() ? '<span class="chip bad">Melebihi saldo kas</span>' : ''}<span>Diajukan ${esc(tgl(x.diajukan))} oleh <b>${esc(x.pemohonNama || '—')}</b>${milik ? ' (Anda)' : ''}</span>${x.dibutuhkan ? `<span>· dibutuhkan ${esc(tgl(x.dibutuhkan))}</span>` : ''}</div>
      <h4 style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span>${esc(x.uraian)}</span><span style="white-space:nowrap">${esc(rp(x.jumlah))}</span></h4>
      ${pjRinciHtml(x)}
      ${x.keterangan ? `<p>${esc(x.keterangan)}</p>` : ''}
      ${x.status === 'Dicairkan' ? `<div class="resp"><b>Dicatat di kas</b>${esc(rp(p.jumlah ?? x.jumlah))} · ${esc(tgl(p.tanggal))} · ${esc(p.metode || '')}${p.oleh ? ' · oleh ' + esc(p.oleh) : ''}${p.catatan ? '<br>' + esc(p.catatan) : ''}</div>` : ''}
      ${x.status === 'Ditolak' ? `<div class="resp"><b>Ditolak${p.oleh ? ' oleh ' + esc(p.oleh) : ''}</b>${esc(p.catatan || '')}</div>` : ''}
      ${tunggu && (proses || milik) ? `<div class="meta" style="gap:8px">${proses ? `<button class="btn sm pri" data-act="pj-catat" data-id="${esc(x.id)}">Catat pengeluaran</button><button class="btn sm" data-act="pj-tolak" data-id="${esc(x.id)}">Tolak</button>` : ''}${milik ? `<button class="btn sm ghost" data-act="pj-ubah" data-id="${esc(x.id)}">Ubah</button><button class="btn sm ghost" data-act="pj-batal" data-id="${esc(x.id)}">Batalkan</button>` : ''}</div>` : ''}
    </article>`;
  };
  return `<div class="sec-head"><div><h2>Pengajuan dana</h2><p>${proses ? 'Pengurus mengajukan kebutuhan dana. Bendahara memeriksa, lalu mencatatnya sebagai pengeluaran kas.' : 'Ajukan kebutuhan dana kegiatan atau perbaikan. Bendahara akan memproses dan mencatatnya di kas.'}</p></div>
    <button class="btn pri" data-act="pj-new">+ Ajukan pengeluaran</button></div>
  ${proses && cnt.menunggu ? `<div class="notice" style="background:var(--sun-soft);color:#6b4a00">${cnt.menunggu} pengajuan menunggu diproses, total ${esc(rp(totMenunggu))}. Saldo kas saat ini ${esc(rp(saldoKini()))}.</div>` : ''}
  <div class="toolbar"><div class="seg" role="group" aria-label="Saring pengajuan">${seg}</div></div>
  ${list.length ? `<div class="kel-list">${list.map(kartu).join('')}</div>` : `<div class="empty">${S.pjFilter === 'menunggu' ? 'Tidak ada pengajuan yang menunggu.' : 'Belum ada pengajuan.'}</div>`}`;
}
async function ambilSaldoKas() {
  if (SB) { try { const {data, error} = await SB.rpc('saldo_kas'); if (!error && data) return {saldo: Number(data.saldo) || 0, menunggu: Number(data.menunggu) || 0}; } catch (e) {} }
  return lihat('kas') ? {saldo: saldoKini(), menunggu: S.pengajuan.filter(x => x.status === 'Menunggu').reduce((t, x) => t + (Number(x.jumlah) || 0), 0)} : null;
}
function cekSaldoHint(el, jumlah, info, lain = 0) {
  if (!el) return;
  if (!info) { el.textContent = ''; return; }
  const kurang = jumlah - info.saldo, antre = Math.max(0, info.menunggu - lain);
  if (jumlah && kurang > 0) { el.innerHTML = `⚠ <b>Dana kas tidak mencukupi.</b> Saldo kas ${esc(rp(info.saldo))}, kurang ${esc(rp(kurang))}.`; el.style.color = 'var(--bad)'; }
  else if (jumlah && antre && jumlah > info.saldo - antre) { el.innerHTML = `⚠ Saldo kas ${esc(rp(info.saldo))} cukup, tetapi ada pengajuan lain yang menunggu ${esc(rp(antre))}.`; el.style.color = 'var(--warn)'; }
  else { el.textContent = `Saldo kas saat ini ${rp(info.saldo)}${jumlah ? ' · mencukupi' : ''}.`; el.style.color = jumlah ? 'var(--ok)' : ''; }
}
// rincian item pengajuan
const pjItems = x => x && Array.isArray(x.rincian) && x.rincian.length ? x.rincian : x && x.uraian ? [{nama: x.uraian, qty: 1, satuan: '', harga: Number(x.jumlah) || 0}] : [];
const pjSub = it => Math.round((Number(it.qty) || 0) * (Number(it.harga) || 0));
function pjiRow(it) {
  it = it || {qty: 1};
  return `<div class="pji-row"><input type="text" class="pji-n" maxlength="100" value="${esc(it.nama || '')}" placeholder="Nama barang / jasa" aria-label="Nama barang atau jasa">
    <input type="number" class="pji-q" min="0" step="any" inputmode="decimal" value="${esc(it.qty ?? 1)}" placeholder="Jml" aria-label="Jumlah">
    <input type="text" class="pji-s" maxlength="15" value="${esc(it.satuan || '')}" placeholder="satuan" aria-label="Satuan">
    <input type="number" class="pji-h" min="0" step="100" inputmode="numeric" value="${esc(it.harga || '')}" placeholder="Harga satuan" aria-label="Harga satuan (Rp)">
    <span class="pji-sub">${it.harga ? esc(rp(pjSub(it))) : '—'}</span>
    <button type="button" class="btn ghost sm" data-act="pji-del" aria-label="Hapus item" style="color:var(--bad);padding-inline:8px">✕</button></div>`;
}
function pjiAmbil() {
  return [...document.querySelectorAll('#pjItems .pji-row')].map(r => ({nama: r.querySelector('.pji-n').value.trim(), qty: Number(r.querySelector('.pji-q').value) || 0, satuan: r.querySelector('.pji-s').value.trim(), harga: Math.round(Number(r.querySelector('.pji-h').value) || 0), _el: r}))
    .filter(it => it.nama || it.harga);
}
let pjCtx = null;
function pjiHitung() {
  document.querySelectorAll('#pjItems .pji-row').forEach(r => { const sub = pjSub({qty: r.querySelector('.pji-q').value, harga: r.querySelector('.pji-h').value}); r.querySelector('.pji-sub').textContent = sub ? rp(sub) : '—'; });
  const its = pjiAmbil(), tot = its.reduce((t, it) => t + pjSub(it), 0), el = $('#pjTot');
  if (el) el.textContent = rp(tot);
  const n = $('#pjN'); if (n) n.textContent = its.length ? `${its.length} item` : '';
  const del = document.querySelectorAll('#pjItems [data-act=pji-del]'); del.forEach(b => { b.disabled = del.length < 2; });
  if (pjCtx) cekSaldoHint($('#pjSaldo'), tot, pjCtx.saldo, pjCtx.lain);
  return tot;
}
function openPengajuan(id) {
  const x = id ? S.pengajuan.find(p => p.id === id) : null;
  if (x && (x.status !== 'Menunggu' || x.pemohonId !== (S.me && S.me.id))) return;
  const v = x || {kategori: KAT_KELUAR[0]};
  openDlg({
    title: x ? 'Ubah pengajuan' : 'Ajukan pengeluaran', submitLabel: x ? 'Simpan' : 'Kirim ke Bendahara',
    body: `<div class="fld"><label for="pj_u">Untuk keperluan <span class="req">*</span></label><input type="text" id="pj_u" name="uraian" required maxlength="140" value="${esc(v.uraian)}" placeholder="mis. Perbaikan lampu jalan blok C"></div>
    <div class="fld"><label>Rincian pembelian <span class="req">*</span> <span class="muted" id="pjN" style="font-weight:500"></span></label>
      <div class="pji"><div class="pji-hd"><span>Barang / jasa</span><span>Jml</span><span>Satuan</span><span>Harga satuan (Rp)</span><span style="text-align:right">Subtotal</span><span></span></div>
        <div class="pji" id="pjItems">${(pjItems(x).length ? pjItems(x) : [{qty: 1}]).map(pjiRow).join('')}</div>
        <button type="button" class="btn sm" data-act="pji-add" style="justify-self:start">+ Tambah item</button>
        <div class="pji-tot"><span>Total pengajuan</span><b id="pjTot">Rp 0</b></div>
        <div class="hint" id="pjSaldo" style="font-size:.84rem">Memeriksa saldo kas…</div></div></div>
    <div class="grid2">
      <div class="fld"><label for="pj_k">Kategori</label><select id="pj_k" name="kategori">${KAT_KELUAR.map(k => `<option ${v.kategori === k ? 'selected' : ''}>${esc(k)}</option>`).join('')}</select></div>
      <div class="fld"><label for="pj_d">Dibutuhkan tanggal</label><input type="date" id="pj_d" name="dibutuhkan" value="${esc(v.dibutuhkan || '')}"></div>
    </div>
    <div class="fld"><label for="pj_ket">Keterangan</label><textarea id="pj_ket" name="keterangan" rows="2" maxlength="600" placeholder="mis. Dibeli di toko listrik dekat gerbang, nota menyusul">${esc(v.keterangan || '')}</textarea></div>`,
    onSubmit: async d => {
      const its = pjiAmbil();
      if (!its.length) { pesanDlg('Isi minimal satu item pembelian.'); const f = document.querySelector('#pjItems .pji-n'); if (f) f.focus(); return false; }
      const salah = its.find(it => !it.nama || it.qty <= 0 || it.harga <= 0);
      if (salah) { pesanDlg(!salah.nama ? 'Nama barang/jasa belum diisi.' : salah.qty <= 0 ? `Jumlah "${salah.nama}" harus lebih dari 0.` : `Harga satuan "${salah.nama}" belum diisi.`); const f = salah._el.querySelector(!salah.nama ? '.pji-n' : salah.qty <= 0 ? '.pji-q' : '.pji-h'); if (f) { f.setAttribute('aria-invalid', 'true'); f.focus(); } return false; }
      const rincian = its.map(({_el, ...it}) => ({...it, subtotal: pjSub(it)})), jumlah = rincian.reduce((t, it) => t + it.subtotal, 0);
      const saldoInfo = pjCtx && pjCtx.saldo;
      if (saldoInfo && jumlah > saldoInfo.saldo && pjCtx.konfirm !== jumlah) { pjCtx.konfirm = jumlah; pesanDlg(`Dana kas tidak mencukupi: total ${rp(jumlah)}, saldo ${rp(saldoInfo.saldo)}, kurang ${rp(jumlah - saldoInfo.saldo)}. Klik "${x ? 'Simpan' : 'Kirim ke Bendahara'}" sekali lagi bila tetap ingin mengajukan.`); return false; }
      const row = {...(x || {}), uraian: d.uraian.trim(), jumlah, rincian, saldoSaatAjuan: saldoInfo ? saldoInfo.saldo : null, kategori: d.kategori, dibutuhkan: d.dibutuhkan || '', keterangan: String(d.keterangan || '').trim(),
        status: 'Menunggu', pemohonId: (x && x.pemohonId) || (S.me && S.me.id) || '', pemohonNama: (x && x.pemohonNama) || namaSesi(), diajukan: (x && x.diajukan) || todayISO()};
      const ok = await put('pengajuan', x ? x.id : uid(), row);
      if (ok) toast(x ? 'Pengajuan diperbarui.' : `Pengajuan ${rp(jumlah)} terkirim ke Bendahara.`);
      return ok;
    }
  });
  const ctx = pjCtx = {saldo: null, lain: x ? Number(x.jumlah) || 0 : 0, konfirm: 0};
  pjiHitung();
  ambilSaldoKas().then(info => { if (pjCtx !== ctx) return; ctx.saldo = info; if (!info) { const el = $('#pjSaldo'); if (el) el.textContent = ''; } else pjiHitung(); });
}
function openPjCatat(id) {
  const x = S.pengajuan.find(p => p.id === id); if (!x || x.status !== 'Menunggu') return;
  openDlg({
    title: 'Catat pengeluaran dari pengajuan', area: 'pengeluaran', submitLabel: 'Catat di kas',
    body: `<div class="panel" style="padding:10px 14px;background:var(--sunk);border:0"><b>${esc(x.uraian)}</b> · ${esc(rp(x.jumlah))}<div class="muted" style="font-size:.84rem">Diajukan ${esc(x.pemohonNama || '')} · ${esc(tgl(x.diajukan))}${x.keterangan ? ' · ' + esc(x.keterangan) : ''}</div>${pjRinciHtml(x)}</div>
    <div class="grid2">
      <div class="fld"><label for="pc_t">Tanggal keluar <span class="req">*</span></label><input type="date" id="pc_t" name="tanggal" required value="${todayISO()}"></div>
      <div class="fld"><label for="pc_j">Jumlah dikeluarkan (Rp) <span class="req">*</span></label><input type="number" id="pc_j" name="jumlah" min="1" step="500" required value="${esc(x.jumlah)}"><span class="hint">Ubah bila yang dicairkan berbeda.</span></div>
      <div class="hint" id="pcSaldo" style="grid-column:1/-1;margin-top:-6px;font-size:.84rem"></div>
    </div>
    <div class="grid2">
      <div class="fld"><label for="pc_k">Kategori</label><select id="pc_k" name="kategori">${KAT_KELUAR.map(k => `<option ${x.kategori === k ? 'selected' : ''}>${esc(k)}</option>`).join('')}</select></div>
      <div class="fld"><label for="pc_m">Metode</label><select id="pc_m" name="metode">${METODE.map(m => `<option>${esc(m)}</option>`).join('')}</select></div>
    </div>
    <div class="grid2">
      <div class="fld"><label for="pc_p">Dibayar kepada</label><input type="text" id="pc_p" name="penerima" value="${esc(x.pemohonNama || '')}"></div>
      <div class="fld"><label for="pc_n">No. nota / kuitansi</label><input type="text" id="pc_n" name="noNota" placeholder="opsional"></div>
    </div>
    <div class="fld"><label for="pc_c">Catatan untuk pemohon</label><input type="text" id="pc_c" name="catatan" placeholder="mis. Uang diserahkan tunai, nota menyusul"></div>
    <p class="muted" style="margin:0;font-size:.84rem">Saldo kas saat ini ${esc(rp(saldoKini()))}.</p>`,
    onSubmit: async d => {
      const jumlah = Math.round(Number(d.jumlah) || 0);
      if (jumlah <= 0) { pesanDlg('Jumlah harus lebih dari 0.', 'pc_j'); return false; }
      if (jumlah > saldoKini() && konfirmPc !== jumlah) { konfirmPc = jumlah; pesanDlg(`Dana kas tidak mencukupi: saldo ${rp(saldoKini())}, kurang ${rp(jumlah - saldoKini())}. Saldo kas akan menjadi minus. Klik "Catat di kas" sekali lagi bila tetap ingin mencatat.`, 'pc_j'); return false; }
      const kasId = 'pj-' + x.id;
      const okKas = await put('kas', kasId, {jenis: 'keluar', tanggal: d.tanggal, kategori: d.kategori, uraian: x.uraian, jumlah, metode: d.metode,
        penerima: String(d.penerima || '').trim(), noNota: String(d.noNota || '').trim(), catatan: `Pengajuan dari ${x.pemohonNama || '-'}${Array.isArray(x.rincian) && x.rincian.length > 1 ? ' · ' + x.rincian.map(it => `${it.nama} ${String(it.qty).replace('.', ',')}${it.satuan ? ' ' + it.satuan : ''}`).join(', ') : ''}${d.catatan ? ' · ' + String(d.catatan).trim() : ''}`, rincian: Array.isArray(x.rincian) ? x.rincian : undefined, pengajuanId: x.id, dibuat: todayISO()});
      if (!okKas) return false;
      const ok = await put('pengajuan', x.id, {...x, status: 'Dicairkan', kasId, proses: {oleh: namaSesi(), waktu: nowDT(), tanggal: d.tanggal, jumlah, metode: d.metode, catatan: String(d.catatan || '').trim()}});
      if (ok) { toast(`Pengeluaran ${rp(jumlah)} dicatat di kas.`); S.pgPer = d.tanggal.slice(0, 7); }
      return ok;
    }
  });
  let konfirmPc = 0;
  const pj = $('#pc_j'), info = {saldo: saldoKini(), menunggu: 0}, upd = () => cekSaldoHint($('#pcSaldo'), Number(pj.value) || 0, info);
  if (pj) { pj.addEventListener('input', upd); upd(); }
}
function openPjTolak(id) {
  const x = S.pengajuan.find(p => p.id === id); if (!x || x.status !== 'Menunggu') return;
  openDlg({title: 'Tolak pengajuan', area: 'pengeluaran', submitLabel: 'Tolak pengajuan',
    body: `<p style="margin:0"><b>${esc(x.uraian)}</b> · ${esc(rp(x.jumlah))} dari ${esc(x.pemohonNama || '')}</p>
      <div class="fld"><label for="pt_c">Alasan <span class="req">*</span></label><textarea id="pt_c" name="catatan" rows="2" required placeholder="mis. Dana kas belum cukup, ajukan lagi bulan depan"></textarea></div>`,
    onSubmit: async d => {
      const c = String(d.catatan || '').trim(); if (!c) { pesanDlg('Isi alasan penolakan.', 'pt_c'); return false; }
      const ok = await put('pengajuan', x.id, {...x, status: 'Ditolak', proses: {oleh: namaSesi(), waktu: nowDT(), catatan: c}});
      if (ok) toast('Pengajuan ditolak.'); return ok;
    }});
}
function vPengeluaran() {
  const g = pgRentang(), semua = pgDalam(g.awal, g.akhir), prev = pgTotal(pgDalam(g.prevAwal, g.prevAkhir));
  const total = pgTotal(semua), selisih = total - prev, pct = prev ? Math.round(Math.abs(selisih) / prev * 100) : null;
  const perKat = {}; for (const x of semua) perKat[x.kategori || 'Lainnya'] = (perKat[x.kategori || 'Lainnya'] || 0) + (Number(x.jumlah) || 0);
  const kats = Object.entries(perKat).sort((a, b) => b[1] - a[1]), maxK = Math.max(1, ...kats.map(k => k[1]));
  const q = S.pgQ.trim().toLowerCase();
  const list = semua.filter(x => (!S.pgKat || x.kategori === S.pgKat) && (!q || [x.uraian, x.penerima, x.noNota, x.catatan].some(v => String(v || '').toLowerCase().includes(q))))
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal));
  const nav = S.pgMode === 'tahun'
    ? `<button class="btn sm" data-act="pgnav" data-n="-1" aria-label="Tahun sebelumnya">‹</button><strong>${S.pgTh}</strong><button class="btn sm" data-act="pgnav" data-n="1" aria-label="Tahun berikutnya">›</button>`
    : `<button class="btn sm" data-act="pgnav" data-n="-1" aria-label="Bulan sebelumnya">‹</button><strong>${esc(perLbl(S.pgPer))}</strong><button class="btn sm" data-act="pgnav" data-n="1" aria-label="Bulan berikutnya">›</button>`;
  const head = `<div class="sec-head"><div><h2>Pengeluaran kas</h2><p>Semua biaya yang dibayar dari kas RT, lengkap dengan penerima dan nomor nota.</p></div>
    ${bisa('pengeluaran') ? '<button class="btn pri" data-act="pg-new">+ Catat pengeluaran</button>' : ''}</div>
  <div class="toolbar" style="justify-content:space-between">
    <div class="seg" role="group" aria-label="Periode"><button type="button" data-act="pgmode" data-k="bulan" aria-pressed="${S.pgMode !== 'tahun'}">Bulanan</button><button type="button" data-act="pgmode" data-k="tahun" aria-pressed="${S.pgMode === 'tahun'}">Tahunan</button></div>
    <div class="monthnav">${nav}</div></div>`;
  const rowsT = list.map(x => `<tr><td class="num">${esc(tgl(x.tanggal))}</td>
    <td><div style="font-weight:600">${esc(x.uraian)}</div>${x.catatan ? `<div class="muted" style="font-size:.78rem">${esc(x.catatan)}</div>` : ''}</td>
    <td><span class="chip mute plain">${esc(x.kategori || 'Lainnya')}</span></td><td>${esc(x.penerima || '—')}</td><td class="mono">${esc(x.noNota || '—')}</td>
    <td class="r num amt-out">${esc(rp(x.jumlah))}</td>
    <td class="r">${x.src === 'sb' ? `<button class="btn ghost sm" data-act="sb-buka" data-id="${esc(x.programId)}">Lihat sumbangan</button>` : `<button class="btn sm" data-act="pg-edit" data-id="${esc(x.id)}">${bisa('pengeluaran') ? 'Ubah' : 'Lihat'}</button>`}</td></tr>`).join('');
  const rowsM = list.map(x => `<div class="row"><div class="grow"><div class="t">${esc(x.uraian)}</div><div class="s">${esc(tgl(x.tanggal))} · ${esc(x.kategori || 'Lainnya')}${x.penerima ? ' · ' + esc(x.penerima) : ''}</div></div>
    <span class="amt-out num">−${esc(nf.format(x.jumlah))}</span>${x.src === 'sb' ? `<button class="btn ghost sm" data-act="sb-buka" data-id="${esc(x.programId)}" aria-label="Lihat sumbangan">›</button>` : `<button class="btn ghost sm" data-act="pg-edit" data-id="${esc(x.id)}" aria-label="Buka">›</button>`}</div>`).join('');
  return head + `
  <div class="tiles">
    <div class="tile"><span class="ti r">${ico('pengeluaran')}</span><span class="lbl">Total ${esc(S.pgMode === 'tahun' ? 'tahun ini' : 'bulan ini')}</span><span class="val">${esc(rp(total))}</span><span class="sub">${esc(g.lbl)}</span></div>
    <div class="tile"><span class="ti ${selisih > 0 ? 'r' : 'g'}">${ico(selisih > 0 ? 'naik' : 'turun')}</span><span class="lbl">Dibanding ${esc(g.prevLbl)}</span><span class="val" style="color:${selisih > 0 ? 'var(--bad)' : 'var(--ok)'}">${pct === null ? '—' : (selisih > 0 ? '+' : selisih < 0 ? '−' : '') + pct + '%'}</span><span class="sub">${prev ? `${selisih > 0 ? 'naik' : selisih < 0 ? 'turun' : 'sama,'} ${esc(rp(Math.abs(selisih)))}` : 'Belum ada data pembanding'}</span></div>
    <div class="tile"><span class="ti b">${ico('kas')}</span><span class="lbl">Transaksi</span><span class="val">${semua.length}</span><span class="sub">rata-rata ${esc(rp(semua.length ? total / semua.length : 0))}</span></div>
    <div class="tile"><span class="ti s">${ico('alert')}</span><span class="lbl">Terbesar</span><span class="val" style="font-size:clamp(1rem,9cqi,1.3rem);white-space:normal">${esc(kats[0] ? kats[0][0] : '—')}</span><span class="sub">${kats[0] ? esc(rp(kats[0][1])) + ' · ' + Math.round(kats[0][1] / total * 100) + '%' : 'Belum ada pengeluaran'}</span></div>
  </div>
  <div class="cols">
    <div class="panel chart"><h3>${S.pgMode === 'tahun' ? 'Per bulan, ' + S.pgTh : 'Tren 6 bulan'} <small>dalam rupiah</small></h3>${pgChart()}</div>
    <div class="panel"><h3>Per kategori <small>${esc(g.lbl)}</small></h3>${kats.length ? `<div class="cat-bars">${kats.map(([k, v]) => `<button type="button" class="cat-bar pg-kat${S.pgKat === k ? ' on' : ''}" data-act="pgkat" data-k="${esc(k)}"><span>${esc(k)}</span><span class="num">${esc(rp(v))} · ${Math.round(v / total * 100)}%</span><div class="tr"><i style="width:${v / maxK * 100}%"></i></div></button>`).join('')}</div>
      <p class="muted" style="margin:10px 0 0;font-size:.8rem">Ketuk kategori untuk menyaring daftar.</p>` : '<p class="muted" style="margin:0">Belum ada pengeluaran di periode ini.</p>'}</div>
  </div>
  <div class="toolbar">
    <input class="search" type="search" id="qPg" placeholder="Cari uraian, penerima, nomor nota…" value="${esc(S.pgQ)}" aria-label="Cari pengeluaran">
    <select id="fPgKat" aria-label="Saring kategori" style="width:auto"><option value="">Semua kategori</option>${KAT_KELUAR.map(k => `<option ${S.pgKat === k ? 'selected' : ''}>${k}</option>`).join('')}</select>
  </div>
  ${list.length ? `<div class="tbl-wrap hide-m"><table><thead><tr><th>Tanggal</th><th>Uraian</th><th>Kategori</th><th>Penerima</th><th>No. nota</th><th class="r">Jumlah</th><th></th></tr></thead><tbody>${rowsT}
    <tr><td colspan="5" style="font-weight:700">Total ${list.length} transaksi</td><td class="r num amt-out" style="font-weight:800">${esc(rp(pgTotal(list)))}</td><td></td></tr></tbody></table></div>
  <div class="list-mobile">${rowsM}<div class="row"><div class="grow"><div class="t">Total ${list.length} transaksi</div></div><span class="amt-out num" style="font-weight:800">${esc(rp(pgTotal(list)))}</span></div></div>`
  : `<div class="empty">${semua.length ? 'Tidak ada pengeluaran yang cocok dengan saringan.' : `Belum ada pengeluaran di ${esc(g.lbl)}.`}${!semua.length && bisa('pengeluaran') ? '<button class="btn pri" data-act="pg-new">+ Catat pengeluaran</button>' : ''}</div>`}
  <div class="toolbar">
    <a class="btn wa" href="${esc(waShare(teksPengeluaran(g, semua, kats, total)))}" target="_blank" rel="noopener">Bagikan rincian ke WhatsApp</a>
    <button class="btn" data-act="pg-csv">Unduh rincian (CSV)</button>
  </div>`;
}
function teksPengeluaran(g, semua, kats, total) {
  return `*Pengeluaran Kas ${lingk()}*\n${g.lbl}\n\n${kats.map(([k, v]) => `- ${k}: ${rp(v)}`).join('\n') || '- Belum ada pengeluaran'}\n\n*Total: ${rp(total)}* (${semua.length} transaksi)\n\n${pengirim()}`;
}
function eksporPengeluaran() {
  const g = pgRentang(), l = pgDalam(g.awal, g.akhir).sort((a, b) => a.tanggal.localeCompare(b.tanggal));
  if (!l.length) { toast('Belum ada pengeluaran untuk diunduh.', 'bad'); return; }
  const rows = [['Tanggal', 'Kategori', 'Uraian', 'Penerima', 'No nota', 'Metode', 'Jumlah', 'Catatan'], ...l.map(x => [x.tanggal, x.kategori, x.uraian, x.penerima, x.noNota, x.metode, x.jumlah, x.catatan]), ['', '', 'TOTAL', '', '', '', pgTotal(l), '']];
  unduh(`Pengeluaran-${lingk().replace(/\s+/g, '-')}-${S.pgMode === 'tahun' ? S.pgTh : S.pgPer}.csv`, csv(rows));
}

/* ---------- PDF generator (tanpa library; font Helvetica bawaan PDF) ---------- */
const HW = {"Helvetica":[278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584,761,556,761,761,761,761,1000,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,350,556,1000,761,761,761,761,761,761,761,761,278,333,556,556,556,556,260,556,333,737,370,556,584,333,737,333,400,584,333,333,333,556,537,278,333,333,365,556,834,834,834,611,667,667,667,667,667,667,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,500,556,556,556,556,278,278,278,278,556,556,556,556,556,556,556,584,611,556,556,556,556,500,556,500],"Helvetica-Bold":[278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584,761,556,761,761,761,761,1000,761,761,761,761,761,761,761,761,761,761,761,761,761,761,761,350,556,1000,761,761,761,761,761,761,761,761,278,333,556,556,556,556,280,556,333,737,370,556,584,333,737,333,400,584,333,333,333,611,556,278,333,333,365,556,834,834,834,611,722,722,722,722,722,722,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,556,556,556,556,556,278,278,278,278,611,611,611,611,611,611,611,584,611,611,611,611,611,556,611,556]};
const WIN = {0x2013: 0x96, 0x2014: 0x97, 0x2022: 0x95, 0x2026: 0x85, 0x20AC: 0x80, 0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94};
function pdfEnc(str) {
  let o = '';
  for (const ch of String(str ?? '')) { const c = ch.codePointAt(0); o += String.fromCharCode(c < 128 && c >= 32 ? c : WIN[c] || (c >= 160 && c <= 255 ? c : 63)); }
  return o;
}
function pdfW(str, bold, size) { const t = HW[bold ? 'Helvetica-Bold' : 'Helvetica']; let w = 0; for (const ch of pdfEnc(str)) w += t[ch.charCodeAt(0) - 32] || 556; return w / 1000 * size; }
const PT = v => v * 72 / 25.4;
function pdfWrap(str, widthMm, bold, size) {
  const max = PT(widthMm), out = [];
  for (const para of String(str ?? '').split('\n')) {
    let line = '';
    for (const word of para.split(' ')) {
      const t = line ? line + ' ' + word : word;
      if (pdfW(t, bold, size) <= max || !line) line = t; else { out.push(line); line = word; }
      while (pdfW(line, bold, size) > max && line.length > 1) { let i = line.length - 1; while (i > 1 && pdfW(line.slice(0, i), bold, size) > max) i--; out.push(line.slice(0, i)); line = line.slice(i); }
    }
    out.push(line);
  }
  return out;
}
class MiniPDF {
  constructor() { this.W = 595.28; this.H = 841.89; this.pages = []; this.img = null; this.foto = []; this.addPage(); }
  addPage() { this.cur = []; this.pages.push(this.cur); }
  rgb(c) { return c.map(v => (v / 255).toFixed(3)).join(' '); }
  text(x, y, str, o = {}) {
    const size = o.size || 10, bold = !!o.bold, s = pdfEnc(str), w = pdfW(str, bold, size);
    let X = PT(x); if (o.align === 'right') X -= w; else if (o.align === 'center') X -= w / 2;
    const e = s.replace(/[\\()]/g, m => '\\' + m);
    this.cur.push(`BT /${bold ? 'F2' : 'F1'} ${size} Tf ${this.rgb(o.color || [29, 20, 13])} rg ${X.toFixed(2)} ${(this.H - PT(y)).toFixed(2)} Td (${e}) Tj ET`);
  }
  line(x1, y1, x2, y2, w = .5, c = [29, 20, 13]) { this.cur.push(`q ${this.rgb(c)} RG ${w} w ${PT(x1).toFixed(2)} ${(this.H - PT(y1)).toFixed(2)} m ${PT(x2).toFixed(2)} ${(this.H - PT(y2)).toFixed(2)} l S Q`); }
  rect(x, y, w, h, o = {}) {
    const r = `${PT(x).toFixed(2)} ${(this.H - PT(y + h)).toFixed(2)} ${PT(w).toFixed(2)} ${PT(h).toFixed(2)} re`;
    if (o.fill) this.cur.push(`q ${this.rgb(o.fill)} rg ${r} f Q`);
    if (o.stroke) this.cur.push(`q ${this.rgb(o.stroke)} RG ${o.lw || .4} w ${r} S Q`);
  }
  jalurBulat(cx, cy, r) {
    const X = PT(cx), Y = this.H - PT(cy), R = PT(r), k = R * 0.5523, f = n => n.toFixed(2);
    return `${f(X + R)} ${f(Y)} m ${f(X + R)} ${f(Y + k)} ${f(X + k)} ${f(Y + R)} ${f(X)} ${f(Y + R)} c ${f(X - k)} ${f(Y + R)} ${f(X - R)} ${f(Y + k)} ${f(X - R)} ${f(Y)} c ${f(X - R)} ${f(Y - k)} ${f(X - k)} ${f(Y - R)} ${f(X)} ${f(Y - R)} c ${f(X + k)} ${f(Y - R)} ${f(X + R)} ${f(Y - k)} ${f(X + R)} ${f(Y)} c`;
  }
  bulat(cx, cy, r, o = {}) {
    const c = this.jalurBulat(cx, cy, r);
    if (o.fill) this.cur.push(`q ${this.rgb(o.fill)} rg ${c} f Q`);
    if (o.stroke) this.cur.push(`q ${this.rgb(o.stroke)} RG ${o.lw || .4} w ${c} S Q`);
  }
  fotoBulat(i, cx, cy, r) {
    const X = PT(cx), Y = this.H - PT(cy), R = PT(r), f = n => n.toFixed(2), c = this.jalurBulat(cx, cy, r);
    this.cur.push(`q ${c} W n ${f(2 * R)} 0 0 ${f(2 * R)} ${f(X - R)} ${f(Y - R)} cm /Ft${i} Do Q`);
  }
  image(x, y, w, h) { if (this.img) this.cur.push(`q ${PT(w).toFixed(2)} 0 0 ${PT(h).toFixed(2)} ${PT(x).toFixed(2)} ${(this.H - PT(y + h)).toFixed(2)} cm /Im1 Do Q`); }
  bytes() {
    const objs = [];
    const add = s => { objs.push(s); return objs.length; };
    const cat = add(''), pages = add(''), f1 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>'), f2 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
    let im = 0; if (this.img) im = add(`<< /Type /XObject /Subtype /Image /Width ${this.img.w} /Height ${this.img.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${this.img.data.length} >>\nstream\n${this.img.data}\nendstream`);
    const fx = this.foto.map((g, i) => `/Ft${i} ${add(`<< /Type /XObject /Subtype /Image /Width ${g.w} /Height ${g.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${g.data.length} >>\nstream\n${g.data}\nendstream`)} 0 R`).join(' ');
    const res = `<< /Font << /F1 ${f1} 0 R /F2 ${f2} 0 R >>${im || fx ? ` /XObject << ${im ? `/Im1 ${im} 0 R ` : ''}${fx} >>` : ''} >>`;
    const kids = this.pages.map(p => { const c = p.join('\n'); const cs = add(`<< /Length ${c.length} >>\nstream\n${c}\nendstream`); return add(`<< /Type /Page /Parent ${pages} 0 R /MediaBox [0 0 ${this.W} ${this.H}] /Resources ${res} /Contents ${cs} 0 R >>`); });
    objs[cat - 1] = `<< /Type /Catalog /Pages ${pages} 0 R >>`;
    objs[pages - 1] = `<< /Type /Pages /Kids [${kids.map(k => k + ' 0 R').join(' ')}] /Count ${kids.length} >>`;
    let out = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'; const off = [];
    objs.forEach((o, i) => { off.push(out.length); out += `${i + 1} 0 obj\n${o}\nendobj\n`; });
    const xref = out.length;
    out += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + off.map(n => String(n).padStart(10, '0') + ' 00000 n \n').join('');
    out += `trailer\n<< /Size ${objs.length + 1} /Root ${cat} 0 R >>\nstartxref\n${xref}\n%%EOF`;
    const b = new Uint8Array(out.length); for (let i = 0; i < out.length; i++) b[i] = out.charCodeAt(i) & 255; return b;
  }
}
async function fotoJpeg(src, u = 200) {
  const im = new Image(); im.crossOrigin = 'anonymous'; im.src = src; await im.decode();
  const c = document.createElement('canvas'); c.width = c.height = u; const x = c.getContext('2d');
  const s = Math.min(im.naturalWidth, im.naturalHeight); x.fillStyle = '#fff'; x.fillRect(0, 0, u, u);
  x.drawImage(im, (im.naturalWidth - s) / 2, (im.naturalHeight - s) / 2, s, s, 0, 0, u, u);
  return {w: u, h: u, data: atob(c.toDataURL('image/jpeg', .88).split(',')[1])};
}
async function logoJpeg() {
  const im = new Image(); im.src = LOGO; await im.decode();
  const c = document.createElement('canvas'); c.width = im.naturalWidth * 2; c.height = im.naturalHeight * 2;
  const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(im, 0, 0, c.width, c.height);
  return {w: c.width, h: c.height, data: atob(c.toDataURL('image/jpeg', .92).split(',')[1])};
}
/* tabel dengan pindah halaman otomatis */
function pdfTabel(P, st, cfg) {
  const M = 16, BOTTOM = 280, size = cfg.size || 8.8, lh = size * .42 + .9, pad = 1.6, line = [205, 191, 174];
  const xs = []; let acc = M; for (const c of cfg.cols) { xs.push(acc); acc += c.w; }
  const draw = (cells, style) => {
    const bold = !!style.bold, lines = cells.map((t, i) => pdfWrap(t, cfg.cols[i].w - pad * 2, bold, size));
    const h = Math.max(...lines.map(l => l.length)) * lh + pad * 2;
    if (st.y + h > BOTTOM) { P.addPage(); st.y = 18; if (cfg.head && !style.isHead) draw(cfg.head, {bold: true, fill: [243, 236, 224], isHead: true}); }
    cells.forEach((t, i) => {
      const c = cfg.cols[i]; P.rect(xs[i], st.y, c.w, h, {fill: style.fill, stroke: line, lw: .5});
      lines[i].forEach((ln, j) => {
        const ty = st.y + pad + (j + 1) * lh - .9, al = style.isHead && c.align !== 'right' && c.align !== 'center' ? 'left' : c.align;
        const tx = al === 'right' ? xs[i] + c.w - pad : al === 'center' ? xs[i] + c.w / 2 : xs[i] + pad;
        const neg = /^\(.*\)$/.test(ln.trim());
        P.text(tx, ty, ln, {size, bold, align: al, color: neg ? [180, 45, 27] : style.color});
      });
    });
    st.y += h;
  };
  if (cfg.head) draw(cfg.head, {bold: true, fill: [243, 236, 224], isHead: true});
  for (const r of cfg.rows) draw(r.cells || r, r.style || {});
  st.y += 6;
}
async function pdfIuranBulan(per, saring) {
  const P = new MiniPDF(), st = S.set, M = 16, CW = 178, r = rekapBulan(per);
  let list = [...r.list].sort(sortHouse);
  if (saring === 'belum') list = list.filter(w => !r.pm.has(w.id));
  if (saring === 'lunas') list = list.filter(w => r.pm.has(w.id));
  try { P.img = await logoJpeg(); } catch (e) { P.img = null; }
  P.image(M, 11, 15.5, 18);
  const tx = P.img ? M + 20 : M;
  P.text(tx, 18, `PENGURUS RT ${st.rt || '...'} / RW ${st.rw || '...'}`, {size: 13, bold: true});
  const wil = [lingk(), st.kelurahan && 'Kel. ' + st.kelurahan, st.kecamatan && 'Kec. ' + st.kecamatan, st.kota].filter(Boolean).join(' · ');
  pdfWrap(wil, CW - 20, false, 9.5).forEach((l, i) => P.text(tx, 23.5 + i * 4.3, l, {size: 9.5, color: [74, 59, 48]}));
  P.line(M, 32, M + CW, 32, 1.4); P.line(M, 33.2, M + CW, 33.2, .5);
  P.text(105, 42, 'DAFTAR PEMBAYARAN IURAN WARGA', {size: 14, bold: true, align: 'center'});
  P.text(105, 48, `Bulan ${perLbl(per, true)}${saring === 'belum' ? ' · Belum bayar' : saring === 'lunas' ? ' · Sudah lunas' : ''}`, {size: 10.5, align: 'center', color: [74, 59, 48]});
  const s = {y: 54};
  P.text(M, s.y, `Iuran per KK: ${rp(nominal())} / bulan${jtHari() ? ` · Jatuh tempo: ${tgl(tglTempo(per))}` : ''}`, {size: 9, color: [74, 59, 48]});
  P.text(M + CW, s.y, `Dicetak: ${tglSurat(todayISO())}`, {size: 9, align: 'right', color: [74, 59, 48]}); s.y += 4;
  let tot = 0;
  pdfTabel(P, s, {size: 8.8, cols: [{w: 9, align: "center"}, {w: 20}, {w: 48}, {w: 22}, {w: 25}, {w: 22, align: "right"}, {w: 14, align: "center"}, {w: 18}],
    head: ['No', 'Blok', 'Nama kepala keluarga', 'Tgl bayar', 'Metode', 'Jumlah', 'Status', 'Paraf'],
    rows: [...list.map((w, i) => { const p = r.pm.get(w.id); if (p) tot += Number(p.jumlah) || 0;
      return {cells: [String(i + 1), w.blok || '', w.nama || '', p ? tgl(p.tanggal) : '', p ? p.metode || '' : '', p ? nf.format(p.jumlah) : '', p ? 'Lunas' : 'Belum', ''], style: p ? {} : {color: [160, 50, 30]}}; }),
      {cells: ['', '', `Jumlah (${list.length} KK)`, '', '', nf.format(tot), '', ''], style: {bold: true, fill: [250, 246, 239]}}]});
  if (s.y + 34 > 280) { P.addPage(); s.y = 20; }
  P.text(M, s.y, 'Rekapitulasi', {size: 10.5, bold: true}); s.y += 3;
  pdfTabel(P, s, {size: 9.2, cols: [{w: 70}, {w: 40, align: 'right'}], rows: [
    ['KK wajib iuran', `${r.total} KK`], ['Sudah lunas', `${r.lunas} KK (${r.total ? Math.round(r.lunas / r.total * 100) : 0}%)`], ['Belum bayar', `${r.total - r.lunas} KK`],
    ['Target iuran', rp(r.target)], {cells: ['Terkumpul', rp(r.terkumpul)], style: {bold: true, fill: [231, 242, 232]}}, ['Kekurangan', rp(Math.max(0, r.target - r.terkumpul))]]});
  // tanda tangan
  if (s.y + 46 > 282) { P.addPage(); s.y = 24; }
  const y0 = s.y + 2, xa = M + 38, xb = M + CW - 42, mm = n => n * 25.4 / 72;
  P.text(xa, y0 + 5, 'Dibuat oleh,', {size: 10, align: 'center'}); P.text(xa, y0 + 10, 'Bendahara', {size: 10, align: 'center'});
  P.text(xb, y0, `${st.kota || lingk()}, ${tglSurat(todayISO())}`, {size: 10, align: 'center'});
  P.text(xb, y0 + 5, 'Mengetahui,', {size: 10, align: 'center'}); P.text(xb, y0 + 10, `Ketua RT ${st.rt || ''}`.trim(), {size: 10, align: 'center'});
  const nb = namaBendahara() || '(..............................)', nk = namaKetua() || '(..............................)';
  P.text(xa, y0 + 36, nb, {size: 10, bold: true, align: 'center'}); P.line(xa - mm(pdfW(nb, true, 10)) / 2, y0 + 37, xa + mm(pdfW(nb, true, 10)) / 2, y0 + 37, .6);
  P.text(xb, y0 + 36, nk, {size: 10, bold: true, align: 'center'}); P.line(xb - mm(pdfW(nk, true, 10)) / 2, y0 + 37, xb + mm(pdfW(nk, true, 10)) / 2, y0 + 37, .6);
  const n = P.pages.length;
  P.pages.forEach((pg, i) => { P.cur = pg; P.line(M, 286, M + CW, 286, .3, [205, 191, 174]);
    P.text(M, 290.5, `Daftar Iuran Warga · ${lingk()} · ${perLbl(per, true)}`, {size: 7.5, color: [122, 100, 84]});
    P.text(M + CW, 290.5, `Halaman ${i + 1} dari ${n}`, {size: 7.5, color: [122, 100, 84], align: 'right'}); });
  return P.bytes();
}
async function buatPdfLaporan(g, L) {
  const P = new MiniPDF(), st = S.set, M = 16, CW = 178, R = v => rp(v), N = v => v ? nf.format(v) : '';
  try { P.img = await logoJpeg(); } catch (e) { P.img = null; }
  // kop
  P.image(M, 11, 15.5, 18);
  const tx = P.img ? M + 20 : M;
  P.text(tx, 18, `PENGURUS RT ${st.rt || '...'} / RW ${st.rw || '...'}`, {size: 13, bold: true});
  const wil = [lingk(), st.kelurahan && 'Kel. ' + st.kelurahan, st.kecamatan && 'Kec. ' + st.kecamatan, st.kota].filter(Boolean).join(' · ');
  pdfWrap(wil, CW - 20, false, 9.5).forEach((l, i) => P.text(tx, 23.5 + i * 4.3, l, {size: 9.5, color: [74, 59, 48]}));
  P.line(M, 32, M + CW, 32, 1.4); P.line(M, 33.2, M + CW, 33.2, .5);
  P.text(105, 42, 'LAPORAN KEUANGAN KAS RT', {size: 14, bold: true, align: 'center'});
  P.text(105, 48, 'Periode ' + g.lbl, {size: 10, align: 'center', color: [74, 59, 48]});
  const s = {y: 56};
  const judul = t => { if (s.y > 262) { P.addPage(); s.y = 20; } P.text(M, s.y, t, {size: 10.5, bold: true}); s.y += 3; };
  const sel = L.tMasuk - L.tKeluar, akhirTgl = g.akhir > todayISO() && g.awal <= todayISO() ? todayISO() : g.akhir;
  judul('I. RINGKASAN');
  pdfTabel(P, s, {size: 10, cols: [{w: 128}, {w: 50, align: 'right'}], rows: [
    ['Saldo awal per ' + tglSurat(g.awal), R(L.awal)], ['Total penerimaan', R(L.tMasuk)], ['Total pengeluaran', '(' + R(L.tKeluar) + ')'],
    ['Surplus / (defisit) periode ini', sel < 0 ? '(' + R(-sel) + ')' : R(sel)],
    {cells: ['Saldo akhir per ' + tglSurat(akhirTgl), R(L.akhir)], style: {bold: true, fill: [231, 242, 232]}}]});
  const katTab = (judulT, kolom, list, tot, lblTot) => {
    judul(judulT);
    pdfTabel(P, s, {cols: [{w: 12, align: 'center'}, {w: 118}, {w: 32, align: 'right'}, {w: 16, align: 'right'}], head: ['No', kolom, 'Jumlah', '%'],
      rows: [...(list.length ? list.map(([k, v], i) => [String(i + 1), k, R(v), (tot ? Math.round(v / tot * 100) : 0) + '%']) : [['', 'Tidak ada', '', '']]),
        {cells: ['', lblTot, R(tot), tot ? '100%' : ''], style: {bold: true, fill: [250, 246, 239]}}]});
  };
  katTab('II. PENERIMAAN', 'Sumber', L.masuk, L.tMasuk, 'Total penerimaan');
  katTab('III. PENGELUARAN', 'Pos pengeluaran', L.keluar, L.tKeluar, 'Total pengeluaran');
  judul('IV. PENERIMAAN IURAN WARGA');
  const it = L.iuran.reduce((a, x) => ({t: a.t + x.total, l: a.l + x.lunas, k: a.k + x.terkumpul, g: a.g + x.target}), {t: 0, l: 0, k: 0, g: 0});
  pdfTabel(P, s, {cols: [{w: 40}, {w: 22, align: 'right'}, {w: 22, align: 'right'}, {w: 24, align: 'right'}, {w: 35, align: 'right'}, {w: 35, align: 'right'}],
    head: ['Bulan', 'KK wajib', 'KK lunas', 'Kepatuhan', 'Target', 'Terkumpul'],
    rows: [...L.iuran.map(x => [perLbl(x.per, true), String(x.total), String(x.lunas), (x.total ? Math.round(x.lunas / x.total * 100) : 0) + '%', R(x.target), R(x.terkumpul)]),
      ...(L.iuran.length > 1 ? [{cells: ['Jumlah', String(it.t), String(it.l), (it.t ? Math.round(it.l / it.t * 100) : 0) + '%', R(it.g), R(it.k)], style: {bold: true, fill: [250, 246, 239]}}] : [])]});
  const tb = L.tung.reduce((a, x) => a + x[1].length, 0);
  s.y -= 3; pdfWrap(`Tunggakan per ${tglSurat(todayISO())}: ${L.tung.length} KK, ${tb} bulan, sekitar ${R(tb * nominal())}.`, CW, false, 8.5).forEach(l => { P.text(M, s.y, l, {size: 8.5, color: [74, 59, 48]}); s.y += 4; }); s.y += 4;
  judul('V. RINCIAN TRANSAKSI');
  let run = L.awal;
  pdfTabel(P, s, {size: 8, cols: [{w: 10, align: 'center'}, {w: 22}, {w: 56}, {w: 34}, {w: 18, align: 'right'}, {w: 18, align: 'right'}, {w: 20, align: 'right'}],
    head: ['No', 'Tanggal', 'Uraian', 'Kategori', 'Masuk', 'Keluar', 'Saldo'],
    rows: [{cells: ['', '', 'Saldo awal', '', '', '', nf.format(L.awal)], style: {bold: true}},
      ...(L.tx.length ? L.tx.map((x, i) => { run += nilai(x); return [String(i + 1), tgl(x.tanggal), x.uraian + (x.penerima ? ' · ' + x.penerima : ''), x.kategori || '', x.jenis === 'masuk' ? N(x.jumlah) : '', x.jenis !== 'masuk' ? N(x.jumlah) : '', nf.format(run)]; }) : [['', '', 'Tidak ada transaksi pada periode ini', '', '', '', '']]),
      {cells: ['', '', 'Jumlah', '', nf.format(L.tMasuk), nf.format(L.tKeluar), nf.format(L.akhir)], style: {bold: true, fill: [250, 246, 239]}}]});
  // tanda tangan
  if (s.y + 46 > 282) { P.addPage(); s.y = 24; }
  const y0 = s.y + 4, xa = M + 38, xb = M + CW - 42;
  P.text(xa, y0 + 5, 'Dibuat oleh,', {size: 10, align: 'center'}); P.text(xa, y0 + 10, 'Bendahara', {size: 10, align: 'center'});
  P.text(xb, y0, `${st.kota || lingk()}, ${tglSurat(todayISO())}`, {size: 10, align: 'center'});
  P.text(xb, y0 + 5, 'Mengetahui,', {size: 10, align: 'center'}); P.text(xb, y0 + 10, `Ketua RT ${st.rt || ''}`.trim(), {size: 10, align: 'center'});
  const nb = namaBendahara() || '(..............................)', nk = namaKetua() || '(..............................)';
  P.text(xa, y0 + 36, nb, {size: 10, bold: true, align: 'center'}); P.line(xa - pdfW(nb, true, 10) / 2 * 25.4 / 72, y0 + 37, xa + pdfW(nb, true, 10) / 2 * 25.4 / 72, y0 + 37, .6);
  P.text(xb, y0 + 36, nk, {size: 10, bold: true, align: 'center'}); P.line(xb - pdfW(nk, true, 10) / 2 * 25.4 / 72, y0 + 37, xb + pdfW(nk, true, 10) / 2 * 25.4 / 72, y0 + 37, .6);
  // kaki halaman
  const n = P.pages.length;
  P.pages.forEach((pg, i) => { P.cur = pg; P.line(M, 286, M + CW, 286, .3, [205, 191, 174]);
    P.text(M, 290.5, `Laporan Keuangan Kas RT · ${lingk()} · ${g.lbl}`, {size: 7.5, color: [122, 100, 84]});
    P.text(M + CW, 290.5, `Halaman ${i + 1} dari ${n}`, {size: 7.5, color: [122, 100, 84], align: 'right'}); });
  return P.bytes();
}

/* ---------- laporan keuangan ---------- */
const LAP_CSS = `.lap{background:#fff;color:#1d140d;font-family:'Plus Jakarta Sans',Arial,sans-serif;font-size:10.5pt;line-height:1.45;padding:32px 36px;max-width:820px;margin:0 auto}
.lap .kop{display:flex;align-items:center;gap:16px;border-bottom:3px double #1d140d;padding-bottom:10px;margin-bottom:16px}
.lap .kop img{height:72px;width:auto}
.lap .kop b{display:block;font-size:13pt;letter-spacing:.02em}
.lap .kop span{display:block;font-size:9.5pt;color:#4a3b30}
.lap h1{font-size:14pt;text-align:center;margin:0;letter-spacing:.04em;color:#1d140d;font-weight:800}
.lap .per{text-align:center;margin:2px 0 18px;color:#4a3b30}
.lap h2{font-size:10.5pt;margin:18px 0 6px;color:#1d140d;letter-spacing:.03em;font-weight:800;text-transform:uppercase}
.lap table{width:100%;border-collapse:collapse;min-width:0;margin:0}
.lap th,.lap td{border:1px solid #cdbfae;padding:5px 8px;text-align:left;vertical-align:top;background:none;color:#1d140d;font-size:9.5pt}
.lap th{background:#f3ece0;font-weight:700;text-transform:none;letter-spacing:0}
.lap tr:hover{background:none}
.lap .r{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}
.lap .c{text-align:center}
.lap tr.tot td{font-weight:800;background:#faf6ef}
.lap tr.sub td{font-weight:700}
.lap .ring td{font-size:10.5pt}
.lap .ring tr.akhir td{font-weight:800;background:#e7f2e8}
.lap .neg{color:#b42d1b}
.lap .note{font-size:9pt;color:#4a3b30;margin:6px 0 0}
.lap .ttd{display:flex;justify-content:space-between;gap:24px;margin-top:34px;page-break-inside:avoid}
.lap .ttd div{text-align:center;min-width:200px}
.lap .ttd .sp{height:64px}
.lap .ttd u{font-weight:700}`;
function lapRentang() {
  const g = lapRentang0(), t = saldoCutoff().tanggal;
  if (t && t > g.awal && t <= g.akhir) g.awal = t;
  return g;
}
function lapRentang0() {
  if (S.lapMode === 'tahun') return {awal: S.lapTh + '-01-01', akhir: S.lapTh + '-12-31', lbl: 'Tahun ' + S.lapTh, kode: String(S.lapTh)};
  if (S.lapMode === 'triwulan') { const m0 = (S.lapQ - 1) * 3 + 1, a = S.lapTh + '-' + pad(m0), b = S.lapTh + '-' + pad(m0 + 2);
    return {awal: a + '-01', akhir: b + '-31', lbl: `Triwulan ${['I', 'II', 'III', 'IV'][S.lapQ - 1]} ${S.lapTh} (${BLN_L[m0 - 1]}–${BLN_L[m0 + 1]})`, kode: S.lapTh + '-Q' + S.lapQ}; }
  if (S.lapMode === 'rentang') { const a = S.lapDari || todayISO(), b = S.lapSampai && S.lapSampai >= a ? S.lapSampai : a;
    return {awal: a, akhir: b, lbl: `${tglSurat(a)} s.d. ${tglSurat(b)}`, kode: a + '_' + b}; }
  return {awal: S.lapPer + '-01', akhir: S.lapPer + '-31', lbl: 'Bulan ' + perLbl(S.lapPer, true), kode: S.lapPer};
}
function hitungLaporan(g) {
  const tx = kasSemua().filter(x => x.tanggal >= g.awal && x.tanggal <= g.akhir).sort((a, b) => a.tanggal.localeCompare(b.tanggal) || (a.auto ? -1 : 1));
  const awal = saldoSebelum(g.awal);
  const grp = jenis => { const m = {}; for (const x of tx) if ((x.jenis === 'masuk') === (jenis === 'masuk')) m[x.kategori || 'Lainnya'] = (m[x.kategori || 'Lainnya'] || 0) + (Number(x.jumlah) || 0); return Object.entries(m).sort((a, b) => b[1] - a[1]); };
  const masuk = grp('masuk'), keluar = grp('keluar');
  const tMasuk = masuk.reduce((s, x) => s + x[1], 0), tKeluar = keluar.reduce((s, x) => s + x[1], 0);
  const bulan = []; let p = g.awal.slice(0, 7); while (p <= g.akhir.slice(0, 7) && bulan.length < 24) { bulan.push(p); p = addM(p, 1); }
  const iuran = bulan.map(per => { const r = rekapBulan(per); return {per, total: r.total, lunas: r.lunas, terkumpul: r.terkumpul, target: r.target}; });
  const tung = wargaAktif().map(w => [w, tunggakanList(w)]).filter(x => x[1].length);
  return {tx, awal, masuk, keluar, tMasuk, tKeluar, akhir: awal + tMasuk - tKeluar, iuran, tung};
}
function namaKetua() {
  const ps = pengurusAktif();
  const p = ps.find(x => /^ketua\s*rt$/i.test((x.jabatan || '').trim())) || ps.find(x => /ketua/i.test(x.jabatan || '') && !/wakil|rw/i.test(x.jabatan || '')) || ps.find(x => x.peranId === 'ketua');
  return p ? p.nama : (S.set.ketua || '');
}
function namaBendahara() { const p = pengurusAktif().find(x => /bendahara/i.test(x.jabatan || '') || x.peranId === 'bendahara'); return p ? p.nama : ''; }
function laporanHtml(g, L) {
  const st = S.set, wil = [st.kelurahan && 'Kel. ' + st.kelurahan, st.kecamatan && 'Kec. ' + st.kecamatan, st.kota].filter(Boolean).join(', ');
  const R = v => esc(rp(v)), R0 = v => v ? esc(nf.format(v)) : '';
  let run = L.awal;
  const rincian = L.tx.map((x, i) => { run += nilai(x); return `<tr><td class="c">${i + 1}</td><td>${esc(tgl(x.tanggal))}</td><td>${esc(x.uraian)}${x.penerima ? ` <span style="color:#6b5a4c">· ${esc(x.penerima)}</span>` : ''}</td><td>${esc(x.kategori || '')}</td><td class="r">${x.jenis === 'masuk' ? R0(x.jumlah) : ''}</td><td class="r">${x.jenis !== 'masuk' ? R0(x.jumlah) : ''}</td><td class="r">${esc(nf.format(run))}</td></tr>`; }).join('');
  const katRows = (list, tot, lblTot) => (list.length ? list.map(([k, v], i) => `<tr><td class="c">${i + 1}</td><td>${esc(k)}</td><td class="r">${R(v)}</td><td class="r">${tot ? Math.round(v / tot * 100) : 0}%</td></tr>`).join('') : '<tr><td colspan="4" class="c">Tidak ada</td></tr>') + `<tr class="tot"><td></td><td>${lblTot}</td><td class="r">${R(tot)}</td><td class="r">${tot ? '100%' : ''}</td></tr>`;
  const iurTot = L.iuran.reduce((a, x) => ({total: a.total + x.total, lunas: a.lunas + x.lunas, t: a.t + x.terkumpul, g: a.g + x.target}), {total: 0, lunas: 0, t: 0, g: 0});
  return `<div class="lap">
  <div class="kop"><img src="${LOGO}" alt=""><div><b>PENGURUS RT ${esc(st.rt || '…')} / RW ${esc(st.rw || '…')}</b><span>${esc(lingk())}${wil ? ' · ' + esc(wil) : ''}</span></div></div>
  <h1>LAPORAN KEUANGAN KAS RT</h1>
  <p class="per">Periode ${esc(g.lbl)}</p>
  <h2>I. Ringkasan</h2>
  <table class="ring"><tbody>
    <tr><td>Saldo awal per ${esc(tglSurat(g.awal))}</td><td class="r">${R(L.awal)}</td></tr>
    <tr><td>Total penerimaan</td><td class="r">${R(L.tMasuk)}</td></tr>
    <tr><td>Total pengeluaran</td><td class="r neg">(${R(L.tKeluar)})</td></tr>
    <tr><td>Surplus / (defisit) periode ini</td><td class="r ${L.tMasuk - L.tKeluar < 0 ? 'neg' : ''}">${L.tMasuk - L.tKeluar < 0 ? '(' + R(L.tKeluar - L.tMasuk) + ')' : R(L.tMasuk - L.tKeluar)}</td></tr>
    <tr class="akhir"><td>Saldo akhir per ${esc(tglSurat(g.akhir > todayISO() && g.awal <= todayISO() ? todayISO() : g.akhir))}</td><td class="r">${R(L.akhir)}</td></tr>
  </tbody></table>
  <h2>II. Penerimaan</h2>
  <table><thead><tr><th class="c" style="width:36px">No</th><th>Sumber</th><th class="r">Jumlah</th><th class="r" style="width:60px">%</th></tr></thead><tbody>${katRows(L.masuk, L.tMasuk, 'Total penerimaan')}</tbody></table>
  <h2>III. Pengeluaran</h2>
  <table><thead><tr><th class="c" style="width:36px">No</th><th>Pos pengeluaran</th><th class="r">Jumlah</th><th class="r" style="width:60px">%</th></tr></thead><tbody>${katRows(L.keluar, L.tKeluar, 'Total pengeluaran')}</tbody></table>
  <h2>IV. Penerimaan iuran warga</h2>
  <table><thead><tr><th>Bulan</th><th class="r">KK wajib</th><th class="r">KK lunas</th><th class="r">Kepatuhan</th><th class="r">Target</th><th class="r">Terkumpul</th></tr></thead><tbody>
    ${L.iuran.map(x => `<tr><td>${esc(perLbl(x.per, true))}</td><td class="r">${x.total}</td><td class="r">${x.lunas}</td><td class="r">${x.total ? Math.round(x.lunas / x.total * 100) : 0}%</td><td class="r">${R(x.target)}</td><td class="r">${R(x.terkumpul)}</td></tr>`).join('')}
    ${L.iuran.length > 1 ? `<tr class="tot"><td>Jumlah</td><td class="r">${iurTot.total}</td><td class="r">${iurTot.lunas}</td><td class="r">${iurTot.total ? Math.round(iurTot.lunas / iurTot.total * 100) : 0}%</td><td class="r">${R(iurTot.g)}</td><td class="r">${R(iurTot.t)}</td></tr>` : ''}
  </tbody></table>
  <p class="note">Tunggakan per ${esc(tglSurat(todayISO()))}: ${L.tung.length} KK, ${L.tung.reduce((s, x) => s + x[1].length, 0)} bulan, sekitar ${R(L.tung.reduce((s, x) => s + x[1].length, 0) * nominal())}.</p>
  <h2>V. Rincian transaksi</h2>
  <table><thead><tr><th class="c" style="width:32px">No</th><th style="width:86px">Tanggal</th><th>Uraian</th><th>Kategori</th><th class="r">Masuk</th><th class="r">Keluar</th><th class="r">Saldo</th></tr></thead><tbody>
    <tr class="sub"><td></td><td></td><td>Saldo awal</td><td></td><td></td><td></td><td class="r">${esc(nf.format(L.awal))}</td></tr>
    ${rincian || '<tr><td colspan="7" class="c">Tidak ada transaksi pada periode ini</td></tr>'}
    <tr class="tot"><td></td><td></td><td>Jumlah</td><td></td><td class="r">${esc(nf.format(L.tMasuk))}</td><td class="r">${esc(nf.format(L.tKeluar))}</td><td class="r">${esc(nf.format(L.akhir))}</td></tr>
  </tbody></table>
  <p class="note">Pemasukan iuran dijumlahkan per tanggal bayar dan sumbangan per program per tanggal. Rincian tersedia di menu Iuran dan Sumbangan.</p>
  <div class="ttd">
    <div>Dibuat oleh,<br>Bendahara<div class="sp"></div><u>${esc(namaBendahara() || '(..............................)')}</u></div>
    <div>${esc(st.kota || lingk())}, ${esc(tglSurat(todayISO()))}<br>Mengetahui, Ketua RT ${esc(st.rt || '')}<div class="sp"></div><u>${esc(namaKetua() || '(..............................)')}</u></div>
  </div></div>`;
}
function vLaporan() {
  const g = lapRentang(), L = hitungLaporan(g);
  const modes = [['bulan', 'Bulanan'], ['triwulan', 'Triwulan'], ['tahun', 'Tahunan'], ['rentang', 'Tanggal']]
    .map(([k, l]) => `<button type="button" data-act="lapmode" data-k="${k}" aria-pressed="${S.lapMode === k}">${l}</button>`).join('');
  let ctl = '';
  if (S.lapMode === 'bulan') ctl = `<div class="monthnav"><button class="btn sm" data-act="lapnav" data-n="-1" aria-label="Sebelumnya">‹</button><strong>${esc(perLbl(S.lapPer))}</strong><button class="btn sm" data-act="lapnav" data-n="1" aria-label="Berikutnya">›</button></div>`;
  else if (S.lapMode === 'tahun') ctl = `<div class="monthnav"><button class="btn sm" data-act="lapnav" data-n="-1" aria-label="Sebelumnya">‹</button><strong>${S.lapTh}</strong><button class="btn sm" data-act="lapnav" data-n="1" aria-label="Berikutnya">›</button></div>`;
  else if (S.lapMode === 'triwulan') ctl = `<div class="toolbar"><div class="monthnav"><button class="btn sm" data-act="lapnav" data-n="-1" aria-label="Sebelumnya">‹</button><strong>${S.lapTh}</strong><button class="btn sm" data-act="lapnav" data-n="1" aria-label="Berikutnya">›</button></div>
    <div class="seg" role="group" aria-label="Triwulan">${[1, 2, 3, 4].map(q => `<button type="button" data-act="lapq" data-k="${q}" aria-pressed="${S.lapQ === q}">TW ${['I', 'II', 'III', 'IV'][q - 1]}</button>`).join('')}</div></div>`;
  else ctl = `<div class="toolbar"><input type="date" id="lapDari" value="${esc(S.lapDari || '')}" aria-label="Dari tanggal" style="width:auto"><span class="muted">s.d.</span><input type="date" id="lapSampai" value="${esc(S.lapSampai || '')}" aria-label="Sampai tanggal" style="width:auto"></div>`;
  const kurang = !S.set.rt || !namaKetua(), co = saldoCutoff();
  const coPanel = `<div class="panel" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:12px 16px">
    <div class="grow" style="min-width:200px"><div style="font-weight:700">Saldo awal (cut-off)</div>
      <div class="muted" style="font-size:.86rem">${co.tanggal || co.jumlah ? `<b style="color:var(--ink)">${esc(rp(co.jumlah))}</b>${co.tanggal ? ' per ' + esc(tglSurat(co.tanggal)) : ''}${co.catatan ? ' · ' + esc(co.catatan) : ''}${co.oleh ? ' · diatur ' + esc(co.oleh) : ''}` : 'Belum diatur. Isi saldo kas saat mulai memakai aplikasi agar laporan sesuai buku kas.'}</div></div>
    ${bisa('kas') ? `<button class="btn ${co.tanggal || co.jumlah ? '' : 'pri'}" data-act="saldo-cutoff">${co.tanggal || co.jumlah ? 'Ubah saldo awal' : 'Atur saldo awal'}</button>` : ''}</div>`;
  return `<div class="sec-head"><div><h2>Laporan keuangan</h2><p>Laporan kas RT siap dibagikan ke warga atau dicetak untuk rapat.</p></div></div>
  ${coPanel}
  <div class="toolbar" style="justify-content:space-between"><div class="seg" role="group" aria-label="Jenis periode">${modes}</div>${ctl}</div>
  <div class="tiles">
    <div class="tile"><span class="ti b">${ico('kas')}</span><span class="lbl">Saldo awal</span><span class="val">${esc(rp(L.awal))}</span><span class="sub">per ${esc(tgl(g.awal))}</span></div>
    <div class="tile"><span class="ti g">${ico('naik')}</span><span class="lbl">Penerimaan</span><span class="val" style="color:var(--ok)">${esc(rp(L.tMasuk))}</span><span class="sub">${L.masuk.length} sumber</span></div>
    <div class="tile"><span class="ti r">${ico('turun')}</span><span class="lbl">Pengeluaran</span><span class="val" style="color:var(--bad)">${esc(rp(L.tKeluar))}</span><span class="sub">${L.keluar.length} pos</span></div>
    <div class="tile"><span class="ti s">${ico('laporan')}</span><span class="lbl">Saldo akhir</span><span class="val">${esc(rp(L.akhir))}</span><span class="sub">${L.tMasuk - L.tKeluar >= 0 ? 'surplus' : 'defisit'} ${esc(rp(Math.abs(L.tMasuk - L.tKeluar)))}</span></div>
  </div>
  <div class="toolbar lap-acts">
    <button class="btn pri" data-act="lap-dl">${ico('laporan')}Unduh PDF</button>
    <button class="btn" data-act="lap-csv">Unduh Excel</button>
    <a class="btn wa" href="${esc(waShare(teksLaporan(g, L)))}" target="_blank" rel="noopener">Bagikan ringkasan ke WhatsApp</a>
  </div>
  ${kurang ? `<div class="notice">Kop dan tanda tangan laporan memakai nomor RT/RW dan nama Ketua RT dari Pengaturan, yang belum lengkap.${bisa('pengaturan') ? ' <a href="#pengaturan" data-act="tab" data-k="pengaturan" style="color:inherit;font-weight:700">Lengkapi sekarang</a>.' : ''}</div>` : ''}
  <div class="lap-wrap" aria-label="Pratinjau laporan">${laporanHtml(g, L)}</div>`;
}
function openSaldoCutoff() {
  const co = saldoCutoff(), lama = S.keuangan.find(x => x.id === 'saldoAwal');
  openDlg({
    title: 'Saldo awal (cut-off)', area: 'kas', submitLabel: 'Simpan saldo awal',
    body: `<p class="muted" style="margin:0;font-size:.88rem">Isi saldo kas RT yang sebenarnya (uang tunai + rekening) pada tanggal mulai pembukuan di aplikasi. Saldo ini menjadi <b>saldo awal</b> laporan keuangan.</p>
    <div class="grid2">
      <div class="fld"><label for="co_t">Tanggal cut-off <span class="req">*</span></label><input type="date" id="co_t" name="tanggal" required value="${esc(co.tanggal || todayISO().slice(0, 8) + '01')}"><span class="hint">Pembukuan dihitung mulai tanggal ini.</span></div>
      <div class="fld"><label for="co_j">Saldo kas per tanggal itu (Rp) <span class="req">*</span></label><input type="number" id="co_j" name="jumlah" required step="1" inputmode="numeric" value="${esc(co.jumlah || '')}" placeholder="mis. 2500000"><span class="hint" id="coRp">${co.jumlah ? esc(rp(co.jumlah)) : ''}</span></div>
    </div>
    <div class="fld"><label for="co_c">Catatan</label><input type="text" id="co_c" name="catatan" maxlength="120" value="${esc(co.catatan)}" placeholder="mis. Saldo buku kas lama per akhir September"></div>
    <div class="notice" style="font-size:.84rem" id="coInfo"></div>`,
    onSubmit: async d => {
      const tanggal = String(d.tanggal || ''), jumlah = Number(d.jumlah);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(tanggal)) { pesanDlg('Isi tanggal cut-off.', 'co_t'); return false; }
      if (d.jumlah === '' || !isFinite(jumlah)) { pesanDlg('Isi saldo kas (boleh 0 atau minus bila kas defisit).', 'co_j'); return false; }
      const ok = await put('keuangan', 'saldoAwal', {...(lama || {}), jumlah, tanggal, catatan: String(d.catatan || '').trim(), olehNama: namaSesi(), diatur: todayISO()});
      if (ok) toast(`Saldo awal ${rp(jumlah)} per ${tglSurat(tanggal)} disimpan.`);
      return ok;
    }
  });
  const upd = () => {
    const t = ($('#co_t') || {}).value || '', j = Number(($('#co_j') || {}).value || 0), n = t ? S.kas.filter(x => x.tanggal && x.tanggal < t).length + S.iuran.filter(x => x.tanggal && x.tanggal < t).length : 0;
    const el = $('#coRp'); if (el) el.textContent = ($('#co_j') || {}).value !== '' ? rp(j) : '';
    const info = $('#coInfo'); if (info) info.innerHTML = t ? `Transaksi kas dan pembayaran iuran <b>sebelum ${esc(tglSurat(t))}</b> tidak dihitung lagi${n ? ` (${n} catatan)` : ''}, karena sudah termasuk dalam saldo awal ini.` : '';
  };
  ['co_t', 'co_j'].forEach(id => { const el = $('#' + id); if (el) el.addEventListener('input', upd); });
  upd();
}
function teksLaporan(g, L) {
  return `*Laporan Keuangan Kas ${lingk()}*\n${g.lbl}\n\nSaldo awal: ${rp(L.awal)}\n\n*Penerimaan: ${rp(L.tMasuk)}*\n${L.masuk.map(([k, v]) => `- ${k}: ${rp(v)}`).join('\n') || '- Tidak ada'}\n\n*Pengeluaran: ${rp(L.tKeluar)}*\n${L.keluar.map(([k, v]) => `- ${k}: ${rp(v)}`).join('\n') || '- Tidak ada'}\n\n*Saldo akhir: ${rp(L.akhir)}*\n\nLaporan lengkap dapat diminta ke bendahara.\n${pengirim()}`;
}
async function unduhLaporan(btn) {
  const g = lapRentang(), L = hitungLaporan(g);
  const asli = btn ? btn.innerHTML : '';
  if (btn) { btn.disabled = true; btn.textContent = 'Menyiapkan PDF…'; }
  try {
    const bytes = await buatPdfLaporan(g, L);
    await unduh(fname(`Laporan Keuangan ${lingk()} - ${g.kode}.pdf`), new Blob([bytes], {type: 'application/pdf'}));
  } catch (e) { toast('PDF gagal dibuat. Coba lagi.', 'bad'); }
  finally { if (btn) { btn.disabled = false; btn.innerHTML = asli; } }
}
/* ---------- XLSX sederhana (tanpa pustaka) ---------- */
const MiniXlsx = (() => {
  const T = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; T[n] = c >>> 0; }
  const crc32 = b => { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = T[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  const enc = new TextEncoder();
  function zip(files) {
    const parts = [], central = []; let off = 0;
    for (const f of files) {
      const nm = enc.encode(f.name), d = enc.encode(f.data), crc = crc32(d);
      const h = new DataView(new ArrayBuffer(30));
      h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(12, 0x21, true);
      h.setUint32(14, crc, true); h.setUint32(18, d.length, true); h.setUint32(22, d.length, true); h.setUint16(26, nm.length, true);
      parts.push(new Uint8Array(h.buffer), nm, d);
      const c = new DataView(new ArrayBuffer(46));
      c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(14, 0x21, true);
      c.setUint32(16, crc, true); c.setUint32(20, d.length, true); c.setUint32(24, d.length, true); c.setUint16(28, nm.length, true); c.setUint32(42, off, true);
      central.push(new Uint8Array(c.buffer), nm); off += 30 + nm.length + d.length;
    }
    const csz = central.reduce((t, a) => t + a.length, 0), e = new DataView(new ArrayBuffer(22));
    e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, csz, true); e.setUint32(16, off, true);
    return new Blob([...parts, ...central, new Uint8Array(e.buffer)], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  }
  const x = v => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');
  const col = i => { let s = ''; i++; while (i) { const m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; };
  // gaya sel (indeks xf)
  const ST = {title: 1, bold: 2, head: 3, text: 4, rp: 5, totText: 6, totRp: 7, pct: 8, totPct: 9, akhirText: 10, akhirRp: 11, note: 12, center: 13, sub: 14, num: 15, totNum: 16, negRp: 17, headR: 18, kop: 19, subRow: 20, subNum: 21, headC: 22, sign: 23, signB: 24};
  const STYLES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<numFmts count="4"><numFmt numFmtId="164" formatCode="&quot;Rp &quot;#,##0"/><numFmt numFmtId="165" formatCode="#,##0"/><numFmt numFmtId="166" formatCode="(&quot;Rp &quot;#,##0)"/><numFmt numFmtId="167" formatCode="0%"/></numFmts>
<fonts count="5"><font><sz val="10"/><name val="Arial"/></font><font><b/><sz val="10"/><name val="Arial"/></font><font><b/><sz val="14"/><name val="Arial"/></font><font><i/><sz val="9"/><color rgb="FF4A3B30"/><name val="Arial"/></font><font><b/><u/><sz val="10"/><name val="Arial"/></font></fonts>
<fills count="5"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFF3ECE0"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFAF6EF"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE7F2E8"/></patternFill></fill></fills>
<borders count="2"><border/><border><left style="thin"><color rgb="FFCDBFAE"/></left><right style="thin"><color rgb="FFCDBFAE"/></right><top style="thin"><color rgb="FFCDBFAE"/></top><bottom style="thin"><color rgb="FFCDBFAE"/></bottom></border></borders>
<cellStyleXfs count="1"><xf/></cellStyleXfs>
<cellXfs count="25">
<xf/>
<xf fontId="2" applyFont="1" applyAlignment="1"><alignment horizontal="center"/></xf>
<xf fontId="1" applyFont="1"/>
<xf fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
<xf borderId="1" applyBorder="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>
<xf numFmtId="164" borderId="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment vertical="top"/></xf>
<xf fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/>
<xf numFmtId="164" fontId="1" fillId="3" borderId="1" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1"/>
<xf numFmtId="167" borderId="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment vertical="top"/></xf>
<xf numFmtId="167" fontId="1" fillId="3" borderId="1" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1"/>
<xf fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/>
<xf numFmtId="164" fontId="1" fillId="4" borderId="1" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1"/>
<xf fontId="3" applyFont="1" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf>
<xf borderId="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf>
<xf applyAlignment="1"><alignment horizontal="center"/></xf>
<xf numFmtId="165" borderId="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment vertical="top"/></xf>
<xf numFmtId="165" fontId="1" fillId="3" borderId="1" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1"/>
<xf numFmtId="166" borderId="1" applyNumberFormat="1" applyBorder="1"/>
<xf fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center" wrapText="1"/></xf>
<xf fontId="1" applyFont="1"/>
<xf fontId="1" borderId="1" applyFont="1" applyBorder="1"/>
<xf numFmtId="165" fontId="1" borderId="1" applyNumberFormat="1" applyFont="1" applyBorder="1"/>
<xf fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
<xf applyAlignment="1"><alignment horizontal="center" vertical="top" wrapText="1"/></xf>
<xf fontId="4" applyFont="1" applyAlignment="1"><alignment horizontal="center"/></xf>
</cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`;
  function sheet(widths) {
    const rows = [], merges = [];
    let r = 0;
    const api = {
      ST,
      get row() { return r; },
      skip(n = 1) { r += n; return api; },
      // put(colIndex, value, style, span)
      put(c, v, st = 0, span = 1) {
        (rows[r] || (rows[r] = []))[c] = {v, st};
        for (let k = 1; k < span; k++) rows[r][c + k] = {v: null, st};
        if (span > 1) merges.push(`${col(c)}${r + 1}:${col(c + span - 1)}${r + 1}`);
        return api;
      },
      next() { r++; return api; },
      build(nama) {
        const cols = widths.map((w, i) => `<col min="${i + 1}" max="${i + 1}" width="${w}" customWidth="1"/>`).join('');
        const data = rows.map((cells, ri) => cells ? `<row r="${ri + 1}">${cells.map((c, ci) => {
          if (!c) return '';
          const ref = col(ci) + (ri + 1), sa = c.st ? ` s="${c.st}"` : '';
          if (c.v === null || c.v === undefined || c.v === '') return `<c r="${ref}"${sa}/>`;
          if (typeof c.v === 'number' && isFinite(c.v)) return `<c r="${ref}"${sa}><v>${c.v}</v></c>`;
          return `<c r="${ref}"${sa} t="inlineStr"><is><t xml:space="preserve">${x(c.v)}</t></is></c>`;
        }).join('')}</row>` : '').join('');
        const sh = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetPr><pageSetUpPr fitToPage="1"/></sheetPr><sheetViews><sheetView workbookViewId="0" showGridLines="0"/></sheetViews>
<cols>${cols}</cols><sheetData>${data}</sheetData>${merges.length ? `<mergeCells count="${merges.length}">${merges.map(m => `<mergeCell ref="${m}"/>`).join('')}</mergeCells>` : ''}
<pageMargins left="0.5" right="0.5" top="0.6" bottom="0.6" header="0.3" footer="0.3"/><pageSetup paperSize="9" orientation="portrait" fitToWidth="1" fitToHeight="0"/></worksheet>`;
        return zip([
          {name: '[Content_Types].xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>'},
          {name: '_rels/.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'},
          {name: 'xl/workbook.xml', data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${x(String(nama).slice(0, 31))}" sheetId="1" r:id="rId1"/></sheets></workbook>`},
          {name: 'xl/_rels/workbook.xml.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'},
          {name: 'xl/styles.xml', data: STYLES},
          {name: 'xl/worksheets/sheet1.xml', data: sh}
        ]);
      }
    };
    return api;
  }
  return {sheet};
})();
// Ekspor laporan keuangan ke Excel: susunan sama persis dengan pratinjau laporan (bagian I–V + tanda tangan)
function xlsxLaporan(g, L) {
  const st = S.set, wil = [st.kelurahan && 'Kel. ' + st.kelurahan, st.kecamatan && 'Kec. ' + st.kecamatan, st.kota].filter(Boolean).join(', ');
  const W = MiniXlsx.sheet([6, 14, 40, 20, 15, 15, 17]), K = W.ST;
  const sec = t => W.skip().put(0, t, K.bold, 7).next();
  W.put(0, `PENGURUS RT ${st.rt || '…'} / RW ${st.rw || '…'}`, K.kop, 7).next();
  W.put(0, lingk() + (wil ? ' · ' + wil : ''), 0, 7).next().skip();
  W.put(0, 'LAPORAN KEUANGAN KAS RT', K.title, 7).next();
  W.put(0, 'Periode ' + g.lbl, K.sub, 7).next();
  // I. Ringkasan
  const akhirTgl = g.akhir > todayISO() && g.awal <= todayISO() ? todayISO() : g.akhir, sel = L.tMasuk - L.tKeluar;
  sec('I. RINGKASAN');
  W.put(0, 'Saldo awal per ' + tglSurat(g.awal), K.text, 5).put(5, L.awal, K.rp, 2).next();
  W.put(0, 'Total penerimaan', K.text, 5).put(5, L.tMasuk, K.rp, 2).next();
  W.put(0, 'Total pengeluaran', K.text, 5).put(5, L.tKeluar, K.negRp, 2).next();
  W.put(0, 'Surplus / (defisit) periode ini', K.text, 5).put(5, Math.abs(sel), sel < 0 ? K.negRp : K.rp, 2).next();
  W.put(0, 'Saldo akhir per ' + tglSurat(akhirTgl), K.akhirText, 5).put(5, L.akhir, K.akhirRp, 2).next();
  // II & III
  const kat = (judul, kolom, list, tot, lblTot) => {
    sec(judul);
    W.put(0, 'No', K.headC).put(1, kolom, K.head, 4).put(5, 'Jumlah', K.headR).put(6, '%', K.headR).next();
    if (!list.length) W.put(0, 'Tidak ada', K.center, 7).next();
    list.forEach(([k, v], i) => W.put(0, i + 1, K.center).put(1, k, K.text, 4).put(5, v, K.rp).put(6, tot ? v / tot : 0, K.pct).next());
    W.put(0, '', K.totText).put(1, lblTot, K.totText, 4).put(5, tot, K.totRp).put(6, tot ? 1 : '', K.totPct).next();
  };
  kat('II. PENERIMAAN', 'Sumber', L.masuk, L.tMasuk, 'Total penerimaan');
  kat('III. PENGELUARAN', 'Pos pengeluaran', L.keluar, L.tKeluar, 'Total pengeluaran');
  // IV. Iuran
  sec('IV. PENERIMAAN IURAN WARGA');
  W.put(0, 'Bulan', K.head, 2).put(2, 'KK wajib', K.headR).put(3, 'KK lunas', K.headR).put(4, 'Kepatuhan', K.headR).put(5, 'Target', K.headR).put(6, 'Terkumpul', K.headR).next();
  L.iuran.forEach(r => W.put(0, perLbl(r.per, true), K.text, 2).put(2, r.total, K.num).put(3, r.lunas, K.num).put(4, r.total ? r.lunas / r.total : 0, K.pct).put(5, r.target, K.rp).put(6, r.terkumpul, K.rp).next());
  if (L.iuran.length > 1) {
    const t = L.iuran.reduce((a, r) => ({total: a.total + r.total, lunas: a.lunas + r.lunas, t: a.t + r.terkumpul, g: a.g + r.target}), {total: 0, lunas: 0, t: 0, g: 0});
    W.put(0, 'Jumlah', K.totText, 2).put(2, t.total, K.totNum).put(3, t.lunas, K.totNum).put(4, t.total ? t.lunas / t.total : 0, K.totPct).put(5, t.g, K.totRp).put(6, t.t, K.totRp).next();
  }
  const tb = L.tung.reduce((a, r) => a + r[1].length, 0);
  W.put(0, `Tunggakan per ${tglSurat(todayISO())}: ${L.tung.length} KK, ${tb} bulan, sekitar ${rp(tb * nominal())}.`, K.note, 7).next();
  // V. Rincian
  sec('V. RINCIAN TRANSAKSI');
  W.put(0, 'No', K.headC).put(1, 'Tanggal', K.head).put(2, 'Uraian', K.head).put(3, 'Kategori', K.head).put(4, 'Masuk', K.headR).put(5, 'Keluar', K.headR).put(6, 'Saldo', K.headR).next();
  W.put(0, '', K.subRow).put(1, '', K.subRow).put(2, 'Saldo awal', K.subRow).put(3, '', K.subRow).put(4, '', K.subRow).put(5, '', K.subRow).put(6, L.awal, K.subNum).next();
  let run = L.awal;
  if (!L.tx.length) W.put(0, 'Tidak ada transaksi pada periode ini', K.center, 7).next();
  L.tx.forEach((t, i) => {
    run += nilai(t);
    W.put(0, i + 1, K.center).put(1, tgl(t.tanggal), K.text).put(2, (t.uraian || '') + (t.penerima ? ' · ' + t.penerima : ''), K.text).put(3, t.kategori || '', K.text)
      .put(4, t.jenis === 'masuk' ? Number(t.jumlah) || 0 : '', K.num).put(5, t.jenis !== 'masuk' ? Number(t.jumlah) || 0 : '', K.num).put(6, run, K.num).next();
  });
  W.put(0, '', K.totText).put(1, '', K.totText).put(2, 'Jumlah', K.totText).put(3, '', K.totText).put(4, L.tMasuk, K.totNum).put(5, L.tKeluar, K.totNum).put(6, L.akhir, K.totNum).next();
  W.put(0, 'Pemasukan iuran dijumlahkan per tanggal bayar dan sumbangan per program per tanggal. Rincian tersedia di menu Iuran dan Sumbangan.', K.note, 7).next();
  // tanda tangan
  W.skip();
  W.put(0, 'Dibuat oleh,', K.sign, 3).put(4, `${st.kota || lingk()}, ${tglSurat(todayISO())}`, K.sign, 3).next();
  W.put(0, 'Bendahara', K.sign, 3).put(4, `Mengetahui, Ketua RT ${st.rt || ''}`.trim(), K.sign, 3).next();
  W.skip(3);
  W.put(0, namaBendahara() || '(..............................)', K.signB, 3).put(4, namaKetua() || '(..............................)', K.signB, 3).next();
  return W.build('Laporan ' + g.kode);
}
function csvLaporan() {
  const g = lapRentang(), L = hitungLaporan(g);
  try { unduh(fname(`Laporan Keuangan ${lingk()} - ${g.kode}.xlsx`), xlsxLaporan(g, L)); }
  catch (e) { toast('File Excel gagal dibuat. Coba lagi.', 'bad'); }
}

/* ---------- keamanan ---------- */
const JENIS_TAMU = ['Tamu', 'Kurir / paket', 'Ojek online', 'Pekerja / tukang', 'Lainnya'];
const JENIS_KEJADIAN = ['Orang mencurigakan', 'Pencurian', 'Kebakaran', 'Darurat medis', 'Kecelakaan', 'Gangguan ketertiban', 'Kerusakan fasilitas', 'Lainnya'];
const JENIS_DARURAT = ['Kebakaran', 'Pencurian / perampokan', 'Darurat medis', 'Orang mencurigakan', 'Lainnya'];
const SHIFT = [['Pagi', '07.00–15.00'], ['Siang', '15.00–23.00'], ['Malam', '23.00–07.00']];
const NOMOR_BAWAAN = [['Polisi', '110'], ['Ambulans', '118'], ['Pemadam kebakaran', '113'], ['SAR / Basarnas', '115'], ['PLN (gangguan listrik)', '123']];
const nowDT = () => { const d = new Date(); return todayISO() + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes()); };
const jamDT = dt => dt ? dt.slice(11, 16).replace(':', '.') : '';
const tglJam = dt => dt ? tgl(dt.slice(0, 10)) + ', ' + jamDT(dt) : '—';
const rumahLbl = id => { const w = id && wById(id); return w ? `${w.blok} · ${w.nama}` : ''; };
const opsiRumah = val => `<option value="">— pilih rumah —</option>${wargaAktif().map(w => `<option value="${esc(w.id)}" ${val === w.id ? 'selected' : ''}>${esc(w.blok)} · ${esc(w.nama)}</option>`).join('')}`;
function shiftSekarang() {
  const d = new Date(), h = d.getHours();
  if (h >= 7 && h < 15) return {tanggal: todayISO(), shift: 'Pagi'};
  if (h >= 15 && h < 23) return {tanggal: todayISO(), shift: 'Siang'};
  if (h >= 23) return {tanggal: todayISO(), shift: 'Malam'};
  const k = new Date(d); k.setDate(k.getDate() - 1); return {tanggal: k.getFullYear() + '-' + pad(k.getMonth() + 1) + '-' + pad(k.getDate()), shift: 'Malam'};
}
const daruratAktif = () => S.darurat.filter(x => x.status === 'Aktif').sort((a, b) => String(b.waktu).localeCompare(String(a.waktu)));
const daftarNomor = () => S.nomorDarurat.length ? [...S.nomorDarurat].sort((a, b) => (a.urut ?? 99) - (b.urut ?? 99)) : NOMOR_BAWAAN.map(([nama, nomor], i) => ({id: 'b' + i, nama, nomor, bawaan: true}));
function nomorPanel(edit) {
  return `<div class="panel"><h3>Nomor darurat ${edit ? '<small><button class="btn sm" data-act="nomor-new">+ Tambah</button></small>' : ''}</h3><div class="rows">
    ${daftarNomor().map(n => `<div class="row"><div class="grow"><div class="t">${esc(n.nama)}</div></div><span class="nomor mono">${esc(n.nomor)}</span>
      <button class="btn sm" data-act="salin" data-teks="${esc(n.nomor)}">Salin</button>${edit && !n.bawaan ? `<button class="btn sm ghost" data-act="nomor-edit" data-id="${esc(n.id)}">Ubah</button>` : ''}</div>`).join('')}
  </div>${edit && !S.nomorDarurat.length ? '<p class="muted" style="margin:8px 0 0;font-size:.8rem">Nomor nasional bawaan. Tambahkan nomor pos satpam, ketua RT atau puskesmas terdekat.</p>' : ''}</div>`;
}
function daruratBanner() {
  if (!lihat('keamanan')) return '';
  const l = daruratAktif(); if (!l.length) return '';
  return `<section class="sos-banner" role="alert">${l.map(x => `<div class="sos-item"><span class="sos-dot" aria-hidden="true"></span>
    <div class="grow"><b>DARURAT · ${esc(x.jenis)}</b><div>${esc(rumahLbl(x.wargaId) || 'Rumah tidak diketahui')} · ${esc(tglJam(x.waktu))}${x.pesan ? ' · "' + esc(x.pesan) + '"' : ''}</div></div>
    ${bisa('keamanan') ? `<button class="btn sm" data-act="sos-tangani" data-id="${esc(x.id)}">Tangani</button>` : ''}</div>`).join('')}</section>`;
}
function vKeamanan() {
  const tabs = [['pos', 'Pos jaga'], ['tamu', 'Buku tamu'], ['paket', 'Paket'], ['titip', 'Titip rumah'], ['kejadian', 'Kejadian'], ['jaga', 'Jadwal jaga']];
  const dalam = S.tamu.filter(t => !t.keluar).length, dipos = S.paket.filter(p => p.status !== 'Diambil').length, titip = S.titip.filter(t => t.status !== 'Selesai').length;
  const cnt = {tamu: dalam, paket: dipos, titip};
  const head = `<div class="sec-head"><div><h2>Keamanan</h2><p>Pos jaga satpam: tamu, paket, rumah yang dititipkan, kejadian dan jadwal jaga.</p></div></div>
    <div class="toolbar"><div class="seg km-seg" role="group" aria-label="Bagian keamanan">${tabs.map(([k, l]) => `<button type="button" data-act="kmtab" data-k="${k}" aria-pressed="${S.kmTab === k}">${l}${cnt[k] ? ` <span class="seg-ct">${cnt[k]}</span>` : ''}</button>`).join('')}</div></div>`;
  return head + panelNotif('pengurus') + ({pos: kmPos, tamu: kmTamu, paket: kmPaket, titip: kmTitip, kejadian: kmKejadian, jaga: kmJaga})[S.kmTab]();
}
function kmPos() {
  const sk = shiftSekarang(), j = S.jaga.find(x => x.id === sk.tanggal + '_' + sk.shift);
  const bln = nowPer(), kj = S.kejadian.filter(k => String(k.waktu).slice(0, 7) === bln).length;
  const dalam = S.tamu.filter(t => !t.keluar), dipos = S.paket.filter(p => p.status !== 'Diambil'), titip = S.titip.filter(t => t.status !== 'Selesai');
  const riwayatSos = S.darurat.filter(x => x.status !== 'Aktif').sort((a, b) => String(b.waktu).localeCompare(String(a.waktu))).slice(0, 3);
  return `${daruratAktif().length ? '' : '<div class="aman-ok"><span aria-hidden="true">✓</span> Tidak ada panggilan darurat aktif</div>'}
  <div class="tiles">
    <div class="tile"><span class="ti b">${ico('warga')}</span><span class="lbl">Tamu di dalam</span><span class="val">${dalam.length}</span><span class="sub">${S.tamu.filter(t => String(t.masuk).startsWith(todayISO())).length} tamu hari ini</span></div>
    <div class="tile"><span class="ti s">${ico('paket')}</span><span class="lbl">Paket di pos</span><span class="val">${dipos.length}</span><span class="sub">belum diambil warga</span></div>
    <div class="tile"><span class="ti g">${ico('ringkasan')}</span><span class="lbl">Rumah dititip</span><span class="val">${titip.length}</span><span class="sub">perlu dipantau</span></div>
    <div class="tile"><span class="ti r">${ico('alert')}</span><span class="lbl">Kejadian ${esc(perLbl(bln))}</span><span class="val">${kj}</span><span class="sub">tercatat bulan ini</span></div>
  </div>
  <div class="cols">
    <div class="panel"><h3>Petugas jaga sekarang <small>${esc(sk.shift)} · ${esc(SHIFT.find(s => s[0] === sk.shift)[1])}</small></h3>
      <p style="margin:0;font-size:1.15rem;font-weight:700">${esc(j && j.petugas || 'Belum dijadwalkan')}</p>
      <p class="muted" style="margin:4px 0 0;font-size:.84rem">${esc(tglPanjang(sk.tanggal))}</p>
      <div class="toolbar" style="margin-top:12px">${bisa('keamanan') ? `<button class="btn sm pri" data-act="tamu-new">+ Catat tamu</button><button class="btn sm" data-act="paket-new">+ Terima paket</button><button class="btn sm" data-act="kej-new">+ Catat kejadian</button>` : ''}</div></div>
    ${nomorPanel(bisa('keamanan'))}
  </div>
  ${titip.length ? `<div class="panel"><h3>Rumah yang dititipkan <small><button class="btn ghost sm" data-act="kmtab" data-k="titip">Lihat semua →</button></small></h3><div class="rows">${titip.slice(0, 5).map(t => `<div class="row"><span class="house">${esc((wById(t.wargaId) || {}).blok || '?')}</span><div class="grow"><div class="t">${esc((wById(t.wargaId) || {}).nama || '')}</div><div class="s">${esc(tgl(t.dari))} – ${esc(tgl(t.sampai))} · cek terakhir ${esc(t.cek && t.cek.length ? tglJam(t.cek[t.cek.length - 1].t) : 'belum')}</div></div></div>`).join('')}</div></div>` : ''}
  ${riwayatSos.length ? `<div class="panel"><h3>Panggilan darurat terakhir</h3><div class="rows">${riwayatSos.map(x => `<div class="row"><div class="grow"><div class="t">${esc(x.jenis)} · ${esc(rumahLbl(x.wargaId))}</div><div class="s">${esc(tglJam(x.waktu))}${x.ditangani ? ` · ditangani ${esc(x.ditangani.oleh)} ${esc(jamDT(x.ditangani.waktu))}${x.ditangani.catatan ? ' · ' + esc(x.ditangani.catatan) : ''}` : ''}</div></div><span class="chip ok">${esc(x.status)}</span></div>`).join('')}</div></div>` : ''}`;
}
function kmTamu() {
  const q = S.kmQ.trim().toLowerCase(), t0 = todayISO();
  let l = [...S.tamu].sort((a, b) => String(b.masuk).localeCompare(String(a.masuk)));
  if (S.tamuF === 'dalam') l = l.filter(t => !t.keluar); else if (S.tamuF === 'hari') l = l.filter(t => String(t.masuk).startsWith(t0));
  if (q) l = l.filter(t => [t.nama, t.plat, t.keperluan, rumahLbl(t.wargaId), t.tujuanLain].some(v => String(v || '').toLowerCase().includes(q)));
  const seg = [['dalam', `Di dalam ${S.tamu.filter(t => !t.keluar).length}`], ['hari', 'Hari ini'], ['semua', 'Semua']].map(([k, lb]) => `<button type="button" data-act="tamuf" data-k="${k}" aria-pressed="${S.tamuF === k}">${lb}</button>`).join('');
  const aksi = t => t.keluar ? `<span class="muted" style="font-size:.84rem">Keluar ${esc(jamDT(t.keluar))}</span>` : bisa('keamanan') ? `<button class="btn sm pri" data-act="tamu-keluar" data-id="${esc(t.id)}">Keluar</button>` : '<span class="chip warn">Di dalam</span>';
  const rowsT = l.map(t => `<tr><td class="num">${esc(tglJam(t.masuk))}</td><td><div style="font-weight:600">${esc(t.nama)}</div><div class="muted" style="font-size:.78rem">${esc(t.jenis)}${t.jumlah > 1 ? ' · ' + t.jumlah + ' orang' : ''}${t.noHp ? ' · ' + esc(t.noHp) : ''}</div></td>
    <td>${esc(rumahLbl(t.wargaId) || t.tujuanLain || '—')}</td><td>${esc(t.keperluan || '—')}</td><td class="mono">${esc(t.plat || '—')}</td><td class="r">${aksi(t)}</td>
    <td class="r">${bisa('keamanan') ? `<button class="btn ghost sm" data-act="tamu-edit" data-id="${esc(t.id)}" aria-label="Ubah">✎</button>` : ''}</td></tr>`).join('');
  const rowsM = l.map(t => `<div class="row"><div class="grow"><div class="t">${esc(t.nama)} <span class="muted" style="font-weight:400">· ${esc(t.jenis)}</span></div><div class="s">${esc(jamDT(t.masuk))} → ${esc(rumahLbl(t.wargaId) || t.tujuanLain || '—')}${t.plat ? ' · ' + esc(t.plat) : ''}</div></div>${aksi(t)}</div>`).join('');
  return `<div class="toolbar" style="justify-content:space-between"><div class="seg" role="group" aria-label="Saring tamu">${seg}</div>${bisa('keamanan') ? '<button class="btn pri" data-act="tamu-new">+ Catat tamu</button>' : ''}</div>
  <div class="toolbar"><input class="search" type="search" id="qKm" placeholder="Cari nama, plat nomor, tujuan…" value="${esc(S.kmQ)}" aria-label="Cari tamu"><button class="btn" data-act="km-csv" data-k="tamu">Unduh CSV</button></div>
  ${l.length ? `<div class="tbl-wrap hide-m"><table><thead><tr><th>Masuk</th><th>Tamu</th><th>Tujuan</th><th>Keperluan</th><th>Plat</th><th class="r">Status</th><th></th></tr></thead><tbody>${rowsT}</tbody></table></div><div class="list-mobile">${rowsM}</div>`
  : `<div class="empty">${S.tamuF === 'dalam' ? 'Tidak ada tamu di dalam lingkungan saat ini.' : 'Belum ada tamu tercatat.'}</div>`}`;
}
function openTamu(id) {
  const t = id ? S.tamu.find(x => x.id === id) : null, x = t || {jenis: 'Tamu', jumlah: 1, masuk: nowDT()};
  openDlg({
    title: t ? 'Ubah data tamu' : 'Catat tamu masuk', area: 'keamanan', submitLabel: t ? 'Simpan' : 'Catat masuk',
    body: `<div class="fld"><label>Jenis</label><div class="seg tamu-jenis" role="radiogroup">${JENIS_TAMU.map(j => `<label class="pill-r"><input type="radio" name="jenis" value="${j}" ${x.jenis === j ? 'checked' : ''}><span>${j}</span></label>`).join('')}</div></div>
    <div class="grid2"><div class="fld"><label for="tm_n">Nama <span class="req">*</span></label><input type="text" id="tm_n" name="nama" required value="${esc(x.nama)}"></div>
      <div class="fld"><label for="tm_j">Jumlah orang</label><input type="number" id="tm_j" name="jumlah" min="1" max="50" value="${esc(x.jumlah)}"></div></div>
    <div class="fld"><label for="tm_w">Tujuan rumah</label><select id="tm_w" name="wargaId">${opsiRumah(x.wargaId)}</select></div>
    <div class="fld"><label for="tm_l">Tujuan lain</label><input type="text" id="tm_l" name="tujuanLain" value="${esc(x.tujuanLain)}" placeholder="Bila bukan ke rumah warga, mis. balai warga"></div>
    <div class="grid2"><div class="fld"><label for="tm_k">Keperluan</label><input type="text" id="tm_k" name="keperluan" value="${esc(x.keperluan)}" placeholder="mis. silaturahmi, antar barang"></div>
      <div class="fld"><label for="tm_p">Plat nomor kendaraan</label><input type="text" id="tm_p" name="plat" value="${esc(x.plat)}" placeholder="mis. B 1234 XYZ" autocapitalize="characters"></div></div>
    <div class="grid2"><div class="fld"><label for="tm_h">No. HP tamu</label><input type="tel" id="tm_h" name="noHp" value="${esc(x.noHp)}"></div>
      <div class="fld"><label for="tm_m">Waktu masuk</label><input type="datetime-local" id="tm_m" name="masuk" value="${esc(x.masuk)}"></div></div>`,
    onSubmit: async d => {
      if (!d.wargaId && !String(d.tujuanLain || '').trim()) { pesanDlg('Pilih tujuan rumah, atau isi tujuan lain.', 'tm_w'); return false; }
      const row = {...(t || {}), nama: d.nama.trim(), jenis: d.jenis || 'Tamu', jumlah: Math.max(1, Number(d.jumlah) || 1), wargaId: d.wargaId || '', tujuanLain: String(d.tujuanLain || '').trim(),
        keperluan: String(d.keperluan || '').trim(), plat: String(d.plat || '').trim().toUpperCase(), noHp: String(d.noHp || '').trim(), masuk: d.masuk || nowDT(), keluar: t ? t.keluar || '' : '', petugas: t ? t.petugas : namaSesi()};
      const ok = await put('tamu', t ? t.id : uid(), row); if (ok) toast(t ? 'Data tamu diperbarui.' : `${row.nama} tercatat masuk.`); return ok;
    },
    onDelete: t ? async () => { const ok = await del('tamu', t.id); if (ok) toast('Data tamu dihapus.'); return ok; } : null, deleteLabel: 'Hapus'
  });
}
function kmPaket() {
  const l = [...S.paket].filter(p => S.paketF === 'semua' || p.status !== 'Diambil').sort((a, b) => String(b.diterima).localeCompare(String(a.diterima)));
  const seg = [['pos', `Di pos ${S.paket.filter(p => p.status !== 'Diambil').length}`], ['semua', 'Semua']].map(([k, lb]) => `<button type="button" data-act="paketf" data-k="${k}" aria-pressed="${S.paketF === k}">${lb}</button>`).join('');
  return `<div class="toolbar" style="justify-content:space-between"><div class="seg" role="group" aria-label="Saring paket">${seg}</div>${bisa('keamanan') ? '<button class="btn pri" data-act="paket-new">+ Terima paket</button>' : ''}</div>
  ${l.length ? `<div class="panel"><div class="rows">${l.map(p => { const w = wById(p.wargaId); return `<div class="row" style="flex-wrap:wrap"><span class="house">${esc(w ? w.blok : '?')}</span>
    <div class="grow"><div class="t">${esc(w ? w.nama : 'Rumah tidak diketahui')}</div><div class="s">${esc(p.kurir || 'Kurir')}${p.resi ? ' · resi ' + esc(p.resi) : ''}${p.ket ? ' · ' + esc(p.ket) : ''}</div>
      <div class="s">Diterima ${esc(tglJam(p.diterima))}${p.petugas ? ' oleh ' + esc(p.petugas) : ''}${p.status === 'Diambil' ? ` · diambil ${esc(tglJam(p.diambil))}${p.diambilOleh ? ' oleh ' + esc(p.diambilOleh) : ''}` : ''}</div></div>
    <div class="racts">${p.status === 'Diambil' ? '<span class="chip ok">Diambil</span>' : `<span class="chip warn">Di pos</span>${bisa('keamanan') ? `${w && w.noHp && waNomor(w.noHp).length >= 10 ? `<a class="btn sm wa" href="${esc(waLink(w.noHp, `Yth. ${w.nama} (${w.blok}), ada paket dari ${p.kurir || 'kurir'}${p.resi ? ' (resi ' + p.resi + ')' : ''} yang dititipkan di pos satpam sejak ${tglJam(p.diterima)}. Silakan diambil. Terima kasih.\n\nPos Satpam ${lingk()}`))}" target="_blank" rel="noopener">Kabari</a>` : ''}<button class="btn sm pri" data-act="paket-ambil" data-id="${esc(p.id)}">Diambil</button>` : ''}`}
      ${bisa('keamanan') ? `<button class="btn ghost sm" data-act="paket-edit" data-id="${esc(p.id)}" aria-label="Ubah">✎</button>` : ''}</div></div>`; }).join('')}</div></div>`
  : `<div class="empty">${S.paketF === 'pos' ? 'Tidak ada paket yang menunggu di pos.' : 'Belum ada paket tercatat.'}</div>`}`;
}
function openPaket(id) {
  const p = id ? S.paket.find(x => x.id === id) : null, x = p || {diterima: nowDT()};
  openDlg({
    title: p ? 'Ubah data paket' : 'Terima paket untuk warga', area: 'keamanan',
    body: `<div class="fld"><label for="pk_w">Untuk rumah <span class="req">*</span></label><select id="pk_w" name="wargaId" required>${opsiRumah(x.wargaId)}</select></div>
    <div class="grid2"><div class="fld"><label for="pk_k">Kurir / ekspedisi</label><input type="text" id="pk_k" name="kurir" value="${esc(x.kurir)}" list="kurirList" placeholder="mis. JNE, Shopee Express"><datalist id="kurirList">${['JNE', 'J&T', 'SiCepat', 'Shopee Express', 'Anteraja', 'Pos Indonesia', 'GoSend', 'GrabExpress', 'Lalamove', 'Ninja Xpress'].map(k => `<option value="${k}">`).join('')}</datalist></div>
      <div class="fld"><label for="pk_r">No. resi</label><input type="text" id="pk_r" name="resi" value="${esc(x.resi)}"></div></div>
    <div class="grid2"><div class="fld"><label for="pk_t">Diterima</label><input type="datetime-local" id="pk_t" name="diterima" value="${esc(x.diterima)}"></div>
      <div class="fld"><label for="pk_c">Keterangan</label><input type="text" id="pk_c" name="ket" value="${esc(x.ket)}" placeholder="mis. kardus besar, makanan"></div></div>`,
    onSubmit: async d => {
      const row = {...(p || {}), wargaId: d.wargaId, kurir: String(d.kurir || '').trim(), resi: String(d.resi || '').trim(), ket: String(d.ket || '').trim(), diterima: d.diterima || nowDT(), status: p ? p.status : 'Di pos', petugas: p ? p.petugas : namaSesi()};
      const ok = await put('paket', p ? p.id : uid(), row); if (ok) toast(p ? 'Data paket diperbarui.' : `Paket untuk ${rumahLbl(d.wargaId)} tercatat di pos.`); return ok;
    },
    onDelete: p ? async () => { const ok = await del('paket', p.id); if (ok) toast('Data paket dihapus.'); return ok; } : null, deleteLabel: 'Hapus'
  });
}
function openPaketAmbil(id) {
  const p = S.paket.find(x => x.id === id); if (!p) return;
  openDlg({title: 'Paket diambil', area: 'keamanan', submitLabel: 'Tandai diambil',
    body: `<p style="margin:0">Paket ${esc(p.kurir || '')} untuk <b>${esc(rumahLbl(p.wargaId))}</b>.</p><div class="fld"><label for="pa_o">Diambil oleh</label><input type="text" id="pa_o" name="oleh" value="${esc((wById(p.wargaId) || {}).nama || '')}"></div>`,
    onSubmit: async d => { const ok = await put('paket', p.id, {...p, status: 'Diambil', diambil: nowDT(), diambilOleh: String(d.oleh || '').trim()}); if (ok) toast('Paket ditandai sudah diambil.'); return ok; }});
}
function kmTitip() {
  const l = [...S.titip].sort((a, b) => (a.status === 'Selesai') - (b.status === 'Selesai') || String(a.dari).localeCompare(String(b.dari)));
  return `<div class="toolbar" style="justify-content:space-between"><p class="muted" style="margin:0;font-size:.88rem">Rumah kosong yang dititipkan warga untuk dipantau saat patroli.</p>${bisa('keamanan') ? (isSatpam() ? '<button class="btn pri" disabled title="Titip rumah diajukan oleh warga atau dicatat pengurus" aria-disabled="true">+ Titip rumah</button>' : '<button class="btn pri" data-act="titip-new">+ Titip rumah</button>') : ''}</div>
  ${l.length ? `<div class="kel-list">${l.map(t => titipKartu(t, bisa('keamanan'))).join('')}</div>` : '<div class="empty">Tidak ada rumah yang dititipkan.</div>'}`;
}
function titipKartu(t, petugas) {
  const w = wById(t.wargaId) || {}, lewat = t.sampai && t.sampai < todayISO() && t.status !== 'Selesai';
  return `<article class="kel ${t.status === 'Selesai' ? '' : 'p-Sedang'}"><div class="meta"><span class="house">${esc(w.blok || '?')}</span><span>${esc(w.nama || '')}</span>${t.status === 'Selesai' ? '<span class="chip ok">Selesai</span>' : lewat ? '<span class="chip bad">Lewat jadwal pulang</span>' : '<span class="chip warn">Aktif</span>'}</div>
    <h4>${esc(tgl(t.dari))} – ${esc(tgl(t.sampai))}</h4>${t.catatan ? `<p>${esc(t.catatan)}</p>` : ''}${t.kontak ? `<div class="meta">Kontak darurat: <span class="mono">${esc(t.kontak)}</span></div>` : ''}
    ${t.cek && t.cek.length ? `<div class="resp"><b>Catatan patroli</b>${t.cek.slice(-4).reverse().map(c => `<div>${esc(tglJam(c.t))} · ${esc(c.petugas || '')}${c.ket ? ' · ' + esc(c.ket) : ''}</div>`).join('')}</div>` : '<div class="muted" style="font-size:.84rem">Belum ada catatan patroli.</div>'}
    ${petugas && t.status !== 'Selesai' ? `<div class="acts"><button class="btn sm pri" data-act="titip-cek" data-id="${esc(t.id)}">Catat patroli</button><button class="btn sm" data-act="titip-selesai" data-id="${esc(t.id)}">Pemilik sudah pulang</button></div>` : ''}</article>`;
}
function openTitip(wargaTetap) {
  const w0 = wargaTetap ? wargaSaya() : null;
  openDlg({
    title: 'Titip rumah', area: wargaTetap ? undefined : 'keamanan', submitLabel: 'Titipkan',
    body: `${w0 ? `<p style="margin:0">Rumah <span class="house">${esc(w0.blok)}</span> akan dipantau satpam saat patroli selama Anda pergi.</p>` : `<div class="fld"><label for="tt_w">Rumah <span class="req">*</span></label><select id="tt_w" name="wargaId" required>${opsiRumah('')}</select></div>`}
    <div class="grid2"><div class="fld"><label for="tt_d">Pergi tanggal <span class="req">*</span></label><input type="date" id="tt_d" name="dari" required value="${todayISO()}"></div>
      <div class="fld"><label for="tt_s">Pulang tanggal <span class="req">*</span></label><input type="date" id="tt_s" name="sampai" required></div></div>
    <div class="fld"><label for="tt_k">Kontak yang bisa dihubungi</label><input type="tel" id="tt_k" name="kontak" value="${esc(w0 ? w0.noHp || '' : '')}"></div>
    <div class="fld"><label for="tt_c">Catatan untuk satpam</label><textarea id="tt_c" name="catatan" rows="2" placeholder="mis. lampu teras dinyalakan, kunci dititip ke rumah B-02"></textarea></div>`,
    onSubmit: async d => {
      if (d.sampai < d.dari) { pesanDlg('Tanggal pulang tidak boleh sebelum tanggal pergi.', 'tt_s'); return false; }
      const row = {wargaId: w0 ? w0.id : d.wargaId, dari: d.dari, sampai: d.sampai, kontak: String(d.kontak || '').trim(), catatan: String(d.catatan || '').trim(), status: 'Aktif', cek: [], dibuat: nowDT(), olehNama: namaSesi()};
      const ok = await put('titip', uid(), row); if (ok) toast('Rumah dititipkan. Satpam akan memantau saat patroli.'); return ok;
    }
  });
}
function openTitipCek(id) {
  const t = S.titip.find(x => x.id === id); if (!t) return;
  openDlg({title: 'Catat patroli', area: 'keamanan', submitLabel: 'Simpan',
    body: `<p style="margin:0">Rumah <b>${esc(rumahLbl(t.wargaId))}</b></p><div class="fld"><label for="tc_k">Keterangan</label><input type="text" id="tc_k" name="ket" value="Aman, pintu dan pagar terkunci"></div>`,
    onSubmit: async d => { const ok = await put('titip', t.id, {...t, cek: [...(t.cek || []), {t: nowDT(), petugas: namaSesi(), ket: String(d.ket || '').trim()}].slice(-30)}); if (ok) toast('Patroli tercatat.'); return ok; }});
}
function kmKejadian() {
  const l = [...S.kejadian].sort((a, b) => String(b.waktu).localeCompare(String(a.waktu)));
  const tk = {Berat: 'p-Tinggi', Sedang: 'p-Sedang', Ringan: 'p-Rendah'};
  const blm = bisa('keamanan') ? sosTanpaKejadian() : [];
  return `<div class="toolbar" style="justify-content:space-between"><button class="btn" data-act="km-csv" data-k="kejadian">Unduh CSV</button>${bisa('keamanan') ? '<button class="btn pri" data-act="kej-new">+ Catat kejadian</button>' : ''}</div>
  ${blm.length ? `<div class="notice" style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><span class="grow">${blm.length} panggilan SOS yang sudah ditangani belum tercatat sebagai kejadian.</span><button class="btn sm pri" data-act="sos-impor">Catat ke Kejadian</button></div>` : ''}
  ${l.length ? `<div class="kel-list">${l.map(k => `<article class="kel ${tk[k.tingkat] || ''}"><div class="meta">${k.sumber === 'SOS' ? '<span class="chip bad plain">SOS</span>' : ''}<span class="chip mute plain">${esc(k.jenis)}</span><span>Tingkat ${esc(k.tingkat || '—')}</span><span>· ${esc(tglJam(k.waktu))}</span></div>
    <h4>${esc(k.lokasi || 'Lokasi tidak diisi')}</h4>${k.uraian ? `<p>${esc(k.uraian)}</p>` : ''}${k.tindakan ? `<div class="resp"><b>Tindakan</b>${esc(k.tindakan)}</div>` : ''}
    <div class="meta">Petugas: ${esc(k.petugas || '—')}${bisa('keamanan') ? ` <button class="btn ghost sm" data-act="kej-edit" data-id="${esc(k.id)}">Ubah</button>` : ''}</div></article>`).join('')}</div>`
  : '<div class="empty">Belum ada kejadian tercatat. Semoga tetap aman.</div>'}`;
}
function openKejadian(id) {
  const k = id ? S.kejadian.find(x => x.id === id) : null, x = k || {waktu: nowDT(), jenis: JENIS_KEJADIAN[0], tingkat: 'Ringan', petugas: namaSesi()};
  openDlg({
    title: k ? 'Ubah laporan kejadian' : 'Catat kejadian', area: 'keamanan',
    body: `<div class="grid2"><div class="fld"><label for="kj_w">Waktu</label><input type="datetime-local" id="kj_w" name="waktu" value="${esc(x.waktu)}"></div>
      <div class="fld"><label for="kj_j">Jenis</label><select id="kj_j" name="jenis">${JENIS_KEJADIAN.map(j => `<option ${x.jenis === j ? 'selected' : ''}>${j}</option>`).join('')}</select></div></div>
    <div class="grid2"><div class="fld"><label for="kj_l">Lokasi <span class="req">*</span></label><input type="text" id="kj_l" name="lokasi" required value="${esc(x.lokasi)}" placeholder="mis. gerbang belakang, depan C-04"></div>
      <div class="fld"><label for="kj_t">Tingkat</label><select id="kj_t" name="tingkat">${['Ringan', 'Sedang', 'Berat'].map(j => `<option ${x.tingkat === j ? 'selected' : ''}>${j}</option>`).join('')}</select></div></div>
    <div class="fld"><label for="kj_u">Uraian kejadian</label><textarea id="kj_u" name="uraian" rows="3">${esc(x.uraian)}</textarea></div>
    <div class="fld"><label for="kj_d">Tindakan yang diambil</label><textarea id="kj_d" name="tindakan" rows="2" placeholder="mis. ditegur dan diminta meninggalkan lingkungan, lapor polsek">${esc(x.tindakan)}</textarea></div>
    <div class="fld"><label for="kj_p">Petugas</label><input type="text" id="kj_p" name="petugas" value="${esc(x.petugas)}"></div>`,
    onSubmit: async d => { const row = {...(k || {}), ...d, lokasi: d.lokasi.trim()}; const ok = await put('kejadian', k ? k.id : uid(), row); if (ok) toast(k ? 'Laporan diperbarui.' : 'Kejadian tercatat.'); return ok; },
    onDelete: k ? async () => { const ok = await del('kejadian', k.id); if (ok) toast('Laporan dihapus.'); return ok; } : null, deleteLabel: 'Hapus'
  });
}
function kmJaga() {
  const senin = S.kmMinggu, hari = Array.from({length: 7}, (_, i) => { const d = new Date(senin + 'T00:00'); d.setDate(d.getDate() + i); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); });
  const sk = shiftSekarang();
  return `<div class="toolbar" style="justify-content:space-between"><div class="monthnav"><button class="btn sm" data-act="jaga-nav" data-n="-7" aria-label="Minggu sebelumnya">‹</button><strong style="min-width:auto">${esc(tgl(hari[0]))} – ${esc(tgl(hari[6]))}</strong><button class="btn sm" data-act="jaga-nav" data-n="7" aria-label="Minggu berikutnya">›</button></div>
    ${bisa('jaga') ? '<button class="btn" data-act="jaga-salin">Salin dari minggu lalu</button>' : ''}</div>
  <div class="tbl-wrap"><table class="jaga-tbl"><thead><tr><th>Shift</th>${hari.map(h => `<th class="${h === todayISO() ? 'hari-ini' : ''}">${HARI[new Date(h + 'T00:00').getDay()].slice(0, 3)}<br><span style="font-weight:500">${Number(h.slice(8))}/${Number(h.slice(5, 7))}</span></th>`).join('')}</tr></thead><tbody>
    ${SHIFT.map(([s, jam]) => `<tr><td><b>${s}</b><div class="muted" style="font-size:.76rem">${jam}</div></td>${hari.map(h => { const j = S.jaga.find(x => x.id === h + '_' + s), now = sk.tanggal === h && sk.shift === s;
      return `<td class="${now ? 'jaga-now' : ''}">${bisa('jaga') ? `<button type="button" class="jaga-cell" data-act="jaga-edit" data-k="${h}_${s}">${esc(j && j.petugas || '+')}</button>` : esc(j && j.petugas || '—')}</td>`; }).join('')}</tr>`).join('')}
  </tbody></table></div><p class="muted" style="margin:0;font-size:.8rem">Kotak hijau = shift yang sedang berjalan.${bisa('jaga') ? ' Ketuk kotak untuk mengisi nama petugas.' : ' Jadwal diatur oleh koordinator keamanan / pengurus.'}</p>`;
}
let petugasKm = null;
async function muatPetugasKm(paksa) {
  if (petugasKm && !paksa && Date.now() - petugasKm.t < 60000) return petugasKm.list;
  try { const {data, error} = await SB.rpc('petugas_keamanan'); petugasKm = {t: Date.now(), list: !error && Array.isArray(data) ? data.filter(p => p.nama) : []}; }
  catch (e) { petugasKm = {t: Date.now(), list: []}; }
  return petugasKm.list;
}
async function openJaga(key) {
  const j = S.jaga.find(x => x.id === key) || {}, [tg, sh] = key.split('_');
  const list = await muatPetugasKm(), namaPk = list.map(p => p.nama.trim());
  const kini = String(j.petugas || '').split(',').map(x => x.trim()).filter(Boolean);
  const lain = kini.filter(n => !namaPk.some(m => m.toLowerCase() === n.toLowerCase()));
  const dipilih = n => kini.some(k => k.toLowerCase() === n.toLowerCase());
  if (!bisa('jaga')) return;
  openDlg({title: `Jaga ${sh} · ${tglPanjang(tg)}`, area: 'jaga',
    body: `<div class="fld"><label>Petugas satpam</label>
      ${list.length ? `<div class="jg-pilih">${list.map((p, i) => `<label class="jg-chip"><input type="checkbox" name="pk_${i}" value="${esc(p.nama)}" ${dipilih(p.nama) ? 'checked' : ''}><span><b>${esc(p.nama)}</b><small>${esc(p.jabatan || '')}</small></span></label>`).join('')}</div>
        <span class="hint">Daftar diambil dari menu Pekerja &amp; gaji (petugas keamanan berstatus aktif). Boleh pilih lebih dari satu.</span>`
      : `<div class="notice" style="margin:0">Belum ada petugas keamanan aktif di data Pekerja. Minta Bendahara menambahkan satpam di menu <b>Pekerja &amp; gaji</b>, lalu buka lagi jadwal ini.</div>`}</div>
    <details ${lain.length || !list.length ? 'open' : ''}><summary class="muted" style="cursor:pointer;font-size:.88rem">Petugas pengganti / di luar data pekerja</summary>
      <div class="fld" style="margin-top:8px"><input type="text" id="jg_l" name="lain" value="${esc(lain.join(', '))}" placeholder="mis. Pak Udin (pengganti)" maxlength="120"><span class="hint">Pisahkan dengan koma bila lebih dari satu.</span></div></details>`,
    onSubmit: async d => {
      const pilih = Object.keys(d).filter(k => /^pk_\d+$/.test(k)).map(k => d[k]);
      const extra = String(d.lain || '').split(',').map(x => x.trim()).filter(Boolean);
      const semua = [...new Set([...pilih, ...extra])], p = semua.join(', ');
      const ok = p ? await put('jaga', key, {tanggal: tg, shift: sh, petugas: p}) : (j.id ? await del('jaga', key) : true);
      if (ok) toast(p ? 'Jadwal jaga disimpan.' : 'Jadwal shift dikosongkan.'); return ok;
    }});
}
async function salinJaga() {
  if (!bisa('jaga')) return;
  let n = 0;
  for (let i = 0; i < 7; i++) for (const [s] of SHIFT) {
    const d = new Date(S.kmMinggu + 'T00:00'); d.setDate(d.getDate() + i); const h = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
    const p = new Date(d); p.setDate(p.getDate() - 7); const hp = p.getFullYear() + '-' + pad(p.getMonth() + 1) + '-' + pad(p.getDate());
    const src = S.jaga.find(x => x.id === hp + '_' + s); if (src && !S.jaga.find(x => x.id === h + '_' + s)) { if (!await put('jaga', h + '_' + s, {tanggal: h, shift: s, petugas: src.petugas})) return; n++; }
  }
  toast(n ? `${n} jadwal disalin dari minggu lalu.` : 'Tidak ada jadwal minggu lalu yang bisa disalin.');
}
function openNomor(id) {
  const n = id ? S.nomorDarurat.find(x => x.id === id) : null;
  openDlg({title: n ? 'Ubah nomor darurat' : 'Tambah nomor darurat', area: 'keamanan',
    body: `<div class="fld"><label for="nd_n">Nama <span class="req">*</span></label><input type="text" id="nd_n" name="nama" required value="${esc(n ? n.nama : '')}" placeholder="mis. Pos satpam, Polsek Duren Sawit"></div>
    <div class="fld"><label for="nd_t">Nomor <span class="req">*</span></label><input type="tel" id="nd_t" name="nomor" required value="${esc(n ? n.nomor : '')}"></div>`,
    onSubmit: async d => {
      if (!S.nomorDarurat.length) for (let i = 0; i < NOMOR_BAWAAN.length; i++) if (!await put('nomorDarurat', 'b' + i, {nama: NOMOR_BAWAAN[i][0], nomor: NOMOR_BAWAAN[i][1], urut: i})) return false;
      const ok = await put('nomorDarurat', n ? n.id : uid(), {nama: d.nama.trim(), nomor: d.nomor.trim(), urut: n ? n.urut : 50}); if (ok) toast('Nomor darurat disimpan.'); return ok;
    },
    onDelete: n ? async () => { const ok = await del('nomorDarurat', n.id); if (ok) toast('Nomor dihapus.'); return ok; } : null, deleteLabel: 'Hapus'});
}
const SOS_KE_KEJADIAN = {'Kebakaran': ['Kebakaran', 'Berat'], 'Pencurian / perampokan': ['Pencurian', 'Berat'], 'Darurat medis': ['Darurat medis', 'Sedang'], 'Orang mencurigakan': ['Orang mencurigakan', 'Sedang'], 'Lainnya': ['Lainnya', 'Sedang']};
const sosTanpaKejadian = () => S.darurat.filter(x => x.status === 'Ditangani' && !S.kejadian.some(k => k.daruratId === x.id));
async function sosKeKejadian(x) {
  const id = 'sos-' + x.id;
  if (S.kejadian.some(k => k.id === id || k.daruratId === x.id)) return true;
  const [jenis, tingkat] = SOS_KE_KEJADIAN[x.jenis] || ['Lainnya', 'Sedang'], rumah = rumahLbl(x.wargaId) || 'rumah tidak diketahui', t = x.ditangani || {};
  return put('kejadian', id, {waktu: x.waktu, jenis, tingkat, lokasi: 'Rumah ' + rumah,
    uraian: `Panggilan SOS (${x.jenis}) dari ${rumah}${x.pesan ? ': "' + x.pesan + '"' : '.'}`,
    tindakan: [t.catatan, t.waktu ? `Ditangani ${tglJam(t.waktu)}` : ''].filter(Boolean).join(' · '),
    petugas: t.oleh || namaSesi(), sumber: 'SOS', daruratId: x.id, dibuat: todayISO()});
}
function openSosTangani(id) {
  const x = S.darurat.find(d => d.id === id); if (!x) return;
  openDlg({title: 'Tangani panggilan darurat', area: 'keamanan', submitLabel: 'Tandai sudah ditangani',
    body: `<p style="margin:0"><b>${esc(x.jenis)}</b> dari <b>${esc(rumahLbl(x.wargaId))}</b> · ${esc(tglJam(x.waktu))}</p>${x.pesan ? `<p style="margin:0">"${esc(x.pesan)}"</p>` : ''}
    <div class="fld"><label for="sg_c">Catatan penanganan</label><textarea id="sg_c" name="catatan" rows="2" placeholder="mis. petugas tiba 3 menit, warga aman"></textarea></div>`,
    onSubmit: async d => {
      const row = {...x, status: 'Ditangani', ditangani: {oleh: namaSesi(), waktu: nowDT(), catatan: String(d.catatan || '').trim()}};
      const ok = await put('darurat', x.id, row); if (!ok) return false;
      const kj = await sosKeKejadian({...row, id: x.id});
      toast(kj ? 'Panggilan darurat ditangani dan tercatat di Kejadian.' : 'Panggilan darurat ditandai sudah ditangani.');
      return true;
    }});
}
function ekspKm(k) {
  const tag = lingk().replace(/\s+/g, '-');
  if (k === 'tamu') { if (!S.tamu.length) return toast('Belum ada data tamu.', 'bad');
    return unduh(`Buku-tamu-${tag}.csv`, csv([['Masuk', 'Keluar', 'Nama', 'Jenis', 'Jumlah', 'Tujuan', 'Keperluan', 'Plat', 'No HP', 'Petugas'], ...[...S.tamu].sort((a, b) => String(a.masuk).localeCompare(String(b.masuk))).map(t => [t.masuk, t.keluar, t.nama, t.jenis, t.jumlah, rumahLbl(t.wargaId) || t.tujuanLain, t.keperluan, t.plat, t.noHp, t.petugas])])); }
  if (!S.kejadian.length) return toast('Belum ada data kejadian.', 'bad');
  unduh(`Laporan-kejadian-${tag}.csv`, csv([['Waktu', 'Jenis', 'Tingkat', 'Lokasi', 'Uraian', 'Tindakan', 'Petugas'], ...[...S.kejadian].sort((a, b) => String(a.waktu).localeCompare(String(b.waktu))).map(x => [x.waktu, x.jenis, x.tingkat, x.lokasi, x.uraian, x.tindakan, x.petugas])]));
}
/* sisi warga */
function vAman() {
  const w = wargaSaya(); if (!w) return '<div class="empty">Data rumah Anda tidak ditemukan.</div>';
  const sosku = S.darurat.filter(x => x.wargaId === w.id).sort((a, b) => String(b.waktu).localeCompare(String(a.waktu)));
  const aktif = sosku.find(x => x.status === 'Aktif');
  const paket = S.paket.filter(p => p.wargaId === w.id).sort((a, b) => String(b.diterima).localeCompare(String(a.diterima))).slice(0, 8);
  const titip = S.titip.filter(t => t.wargaId === w.id).sort((a, b) => String(b.dari).localeCompare(String(a.dari))).slice(0, 4);
  const tamu = S.tamu.filter(t => t.wargaId === w.id).sort((a, b) => String(b.masuk).localeCompare(String(a.masuk))).slice(0, 6);
  return `<div class="sec-head"><div><h2>Keamanan</h2><p>Panggil satpam saat darurat, titip rumah, dan cek paket Anda.</p></div></div>
  <section class="sos-card">${aktif ? `<div class="sos-status"><span class="sos-dot" aria-hidden="true"></span><div><b>Panggilan darurat terkirim</b><div>${esc(aktif.jenis)} · ${esc(tglJam(aktif.waktu))}. Petugas jaga sudah melihat panggilan ini di pos.</div></div></div>
    <button class="btn" data-act="sos-batal" data-id="${esc(aktif.id)}">Batalkan, situasi sudah aman</button>`
    : `<button type="button" class="sos-btn" data-act="sos-new"><span>SOS</span></button><div><b>Tombol darurat</b><p class="muted" style="margin:2px 0 0;font-size:.88rem">Tekan bila ada kebakaran, pencurian, atau darurat medis. Panggilan langsung tampil di layar pos satpam dan pengurus.</p></div>`}</section>
  <div class="cols">
    <div class="panel"><h3>Paket untuk saya <small>${paket.filter(p => p.status !== 'Diambil').length} di pos</small></h3><div class="rows">
      ${paket.length ? paket.map(p => `<div class="row"><div class="grow"><div class="t">${esc(p.kurir || 'Paket')}${p.resi ? ' · ' + esc(p.resi) : ''}</div><div class="s">Diterima satpam ${esc(tglJam(p.diterima))}${p.status === 'Diambil' ? ' · diambil ' + esc(tglJam(p.diambil)) : ''}</div></div>${p.status === 'Diambil' ? '<span class="chip ok">Diambil</span>' : '<span class="chip warn">Ambil di pos</span>'}</div>`).join('') : '<p class="muted" style="margin:0">Belum ada paket yang dititipkan di pos.</p>'}</div></div>
    <div class="panel"><h3>Titip rumah <small><button class="btn sm pri" data-act="titip-warga">+ Titip rumah</button></small></h3>
      ${titip.length ? `<div class="kel-list">${titip.map(t => titipKartu(t, false)).join('')}</div>` : '<p class="muted" style="margin:0">Akan bepergian? Titipkan rumah supaya satpam memeriksa saat patroli.</p>'}</div>
  </div>
  <div class="cols">
    <div class="panel"><h3>Tamu ke rumah saya <small>6 terakhir</small></h3><div class="rows">${tamu.length ? tamu.map(t => `<div class="row"><div class="grow"><div class="t">${esc(t.nama)} <span class="muted" style="font-weight:400">· ${esc(t.jenis)}</span></div><div class="s">${esc(tglJam(t.masuk))}${t.keluar ? ' – ' + esc(jamDT(t.keluar)) : ' · masih di dalam'}</div></div></div>`).join('') : '<p class="muted" style="margin:0">Belum ada tamu tercatat di pos.</p>'}</div></div>
    ${nomorPanel(false)}
  </div>`;
}
function openSos() {
  const w = wargaSaya(); if (!w) return;
  openDlg({title: 'Kirim panggilan darurat', submitLabel: 'Kirim sekarang',
    body: `<div class="fld"><label>Jenis darurat</label><div class="seg tamu-jenis" role="radiogroup">${JENIS_DARURAT.map((j, i) => `<label class="pill-r"><input type="radio" name="jenis" value="${j}" ${i === 0 ? 'checked' : ''}><span>${j}</span></label>`).join('')}</div></div>
    <div class="fld"><label for="sos_p">Pesan singkat (opsional)</label><input type="text" id="sos_p" name="pesan" maxlength="140" placeholder="mis. asap dari dapur, butuh bantuan"></div>
    <p class="muted" style="margin:0;font-size:.82rem">Panggilan ini tampil di layar pos satpam dan pengurus yang sedang membuka aplikasi. Untuk keadaan sangat genting, hubungi juga nomor darurat di halaman ini.</p>`,
    onSubmit: async d => {
      const row = {wargaId: w.id, jenis: d.jenis || 'Lainnya', pesan: String(d.pesan || '').trim(), waktu: nowDT(), status: 'Aktif'};
      const ok = await put('darurat', uid(), row); if (ok) toast('Panggilan darurat terkirim ke pos satpam.'); return ok;
    }});
}

/* ---------- pengumuman ---------- */
const KAT_INFO = ['Informasi', 'Kegiatan', 'Kerja bakti', 'Rapat warga', 'Rapat pengurus', 'Keagamaan', 'Berita duka', 'Penting'];
const KAT_RAHASIA = 'Rapat pengurus';
const infoRahasia = a => a && a.kategori === KAT_RAHASIA;
const jamLbl = j => j ? ' pukul ' + j.replace(':', '.') : '';
function teksInfo(a) {
  return `${infoRahasia(a) ? '🔒 *KHUSUS PENGURUS*\n' : ''}*${a.judul}*\n\n${a.isi || ''}${a.tanggalAcara ? `\n\nWaktu: ${tglPanjang(a.tanggalAcara)}${jamLbl(a.jam)}` : ''}${a.tempat ? `\nTempat: ${a.tempat}` : ''}\n\n${pengirim()}`;
}
const urutInfo = list => [...list].sort((a, b) => (b.sematkan ? 1 : 0) - (a.sematkan ? 1 : 0) || String(b.dibuat).localeCompare(String(a.dibuat)));
function kartuInfo(a, ringkas) {
  const nanti = a.tanggalAcara && a.tanggalAcara >= todayISO();
  const chip = a.kategori === 'Penting' ? 'bad' : a.kategori === 'Kerja bakti' || a.kategori === 'Kegiatan' ? 'info' : 'mute';
  return `<article class="info${a.sematkan ? ' pin' : ''}">
    <div class="meta" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;font-size:.8rem;color:var(--muted)">
      <span class="chip ${chip} plain">${esc(a.kategori)}</span>${infoRahasia(a) ? '<span class="chip bad plain" title="Hanya terlihat oleh pengurus dan pemilik">🔒 Khusus pengurus</span>' : ''}${a.sematkan ? '<span class="chip ok plain">Disematkan</span>' : ''}
      ${a.tanggalAcara ? (nanti ? '<span class="chip warn">Akan datang</span>' : '<span class="chip mute">Sudah lewat</span>') : ''}<span>Diumumkan ${esc(tgl(a.dibuat))}</span></div>
    <h4>${esc(a.judul)}</h4>
    ${a.isi && !ringkas ? `<p class="isi">${esc(a.isi)}</p>` : ''}
    ${a.tanggalAcara || a.tempat ? `<div class="when">${a.tanggalAcara ? `<span><b>Waktu:</b> ${esc(tglPanjang(a.tanggalAcara))}${esc(jamLbl(a.jam))}</span>` : ''}${a.tempat ? `<span><b>Tempat:</b> ${esc(a.tempat)}</span>` : ''}</div>` : ''}
    ${ringkas || isWarga() ? '' : `<div class="racts" style="justify-content:flex-start">
      ${isSatpam() ? `<button type="button" class="btn sm wa" disabled aria-disabled="true" title="Satpam hanya dapat melihat pengumuman">${infoRahasia(a) ? 'Kirim ke grup pengurus (WA)' : 'Bagikan ke WhatsApp'}</button>
      <button type="button" class="btn sm" disabled aria-disabled="true" title="Satpam hanya dapat melihat pengumuman">Salin teks</button>`
      : `<a class="btn sm wa" href="${esc(waShare(teksInfo(a)))}" target="_blank" rel="noopener">${infoRahasia(a) ? 'Kirim ke grup pengurus (WA)' : 'Bagikan ke WhatsApp'}</a>
      <button class="btn sm" data-act="salin" data-teks="${esc(teksInfo(a))}">Salin teks</button>`}
      ${bisa('info') ? `<button class="btn sm ghost" data-act="info-edit" data-id="${esc(a.id)}">Ubah</button>` : ''}</div>`}
  </article>`;
}
function infoRingkas() {
  const list = urutInfo(S.pengumuman).filter(a => a.sematkan || !a.tanggalAcara || a.tanggalAcara >= todayISO()).slice(0, 2);
  if (!list.length) return '';
  return `<div class="panel" style="display:grid;gap:10px"><h3>Pengumuman <small><a href="#info" data-act="tab" data-k="info" style="color:var(--accent)">Lihat semua →</a></small></h3>
    <div class="info-list">${list.map(a => kartuInfo(a, true)).join('')}</div></div>`;
}
function vInfo() {
  const head = `<div class="sec-head"><div><h2>Pengumuman</h2><p>Kabar untuk warga. Bagikan ke grup WhatsApp dengan satu tombol.</p></div>
    ${bisa('info') ? `<button class="btn pri" data-act="info-new">+ Buat pengumuman</button>` : ''}</div>`;
  if (!S.pengumuman.length) return head + `<div class="empty"><h3>Belum ada pengumuman</h3><p style="margin:0">Contoh: jadwal kerja bakti, rapat warga, atau perubahan jadwal angkut sampah.</p>
    ${bisa('info') ? `<button class="btn pri" data-act="info-new">+ Buat pengumuman</button>` : ''}</div>`;
  const t = todayISO();
  let list = urutInfo(S.pengumuman);
  if (S.infoFilter === 'acara') list = list.filter(a => a.tanggalAcara && a.tanggalAcara >= t);
  if (S.infoFilter === 'rapat') list = list.filter(infoRahasia);
  const nAcara = S.pengumuman.filter(a => a.tanggalAcara && a.tanggalAcara >= t).length, nRapat = S.pengumuman.filter(infoRahasia).length;
  const seg = [['semua', `Semua ${S.pengumuman.length}`], ['acara', `Acara mendatang ${nAcara}`], ...(nRapat ? [['rapat', `🔒 Rapat pengurus ${nRapat}`]] : [])]
    .map(([k, l]) => `<button type="button" data-act="inff" data-k="${k}" aria-pressed="${S.infoFilter === k}">${l}</button>`).join('');
  return head + `<div class="toolbar"><div class="seg" role="group" aria-label="Saring pengumuman">${seg}</div></div>
    <div class="info-list">${list.length ? list.map(a => kartuInfo(a)).join('') : `<div class="empty">${S.infoFilter === 'rapat' ? 'Belum ada pengumuman rapat pengurus.' : 'Tidak ada acara mendatang.'}</div>`}</div>`;
}
function openInfo(id) {
  const a = id ? S.pengumuman.find(x => x.id === id) : null;
  const x = a || {kategori: 'Informasi'};
  openDlg({
    title: a ? 'Ubah pengumuman' : 'Buat pengumuman', area: 'info',
    body: `<div class="fld"><label for="in_j">Judul <span class="req">*</span></label><input type="text" id="in_j" name="judul" required value="${esc(x.judul)}" placeholder="mis. Kerja bakti hari Minggu"></div>
    <div class="fld"><label for="in_k">Kategori</label><select id="in_k" name="kategori">${KAT_INFO.map(k => `<option ${x.kategori === k ? 'selected' : ''}>${k}</option>`).join('')}</select>
      <span class="hint" id="inRahasia" ${infoRahasia(x) ? '' : 'hidden'} style="color:var(--bad)">🔒 Hanya terlihat oleh pengurus dan pemilik. Warga dan satpam tidak dapat melihat pengumuman ini, dan tidak tampil di papan info halaman login.</span></div>
    <div class="fld"><label for="in_i">Isi pengumuman</label><textarea id="in_i" name="isi" rows="4">${esc(x.isi)}</textarea></div>
    <div class="grid2">
      <div class="fld"><label for="in_t">Tanggal acara</label><input type="date" id="in_t" name="tanggalAcara" value="${esc(x.tanggalAcara)}"><span class="hint">Kosongkan bila bukan acara</span></div>
      <div class="fld"><label for="in_jam">Jam</label><input type="time" id="in_jam" name="jam" value="${esc(x.jam)}"></div>
    </div>
    <div class="fld"><label for="in_tp">Tempat</label><input type="text" id="in_tp" name="tempat" value="${esc(x.tempat)}" placeholder="mis. Balai warga"></div>
    <label class="ck"><input type="checkbox" id="in_pin" name="sematkan" ${x.sematkan ? 'checked' : ''}> Sematkan di atas dan di Beranda</label>`,
    onSubmit: async d => {
      const row = {...(a || {}), ...d, judul: d.judul.trim(), sematkan: !!d.sematkan, diperbarui: todayISO()};
      if (!a) row.dibuat = todayISO();
      const ok = await put('pengumuman', a ? a.id : uid(), row);
      if (ok) toast(a ? 'Pengumuman diperbarui.' : infoRahasia(row) ? 'Pengumuman rapat pengurus diterbitkan (khusus pengurus).' : 'Pengumuman diterbitkan. Bagikan ke grup WhatsApp dari kartunya.');
      return ok;
    },
    onDelete: a ? async () => { const ok = await del('pengumuman', a.id); if (ok) toast('Pengumuman dihapus.'); return ok; } : null,
    deleteLabel: 'Hapus pengumuman'
  });
  const ks = $('#in_k'); if (ks) ks.addEventListener('change', () => { const h = $('#inRahasia'); if (h) h.hidden = ks.value !== KAT_RAHASIA; });
}

/* ---------- surat pengantar ---------- */
const JENIS_SURAT = ['Surat Keterangan Domisili', 'Surat Pengantar SKCK', 'Surat Pengantar KTP / KK', 'Surat Keterangan Usaha', 'Surat Keterangan Tidak Mampu', 'Surat Pengantar Nikah', 'Surat Keterangan Pindah', 'Surat Pengantar Lainnya'];
const ISI_SURAT = {
  'Surat Keterangan Domisili': 'adalah benar warga kami yang berdomisili di alamat tersebut di atas.',
  'Surat Pengantar SKCK': 'adalah benar warga kami yang berdomisili di alamat tersebut di atas. Sepanjang pengetahuan kami, yang bersangkutan berkelakuan baik dan tidak pernah terlibat tindak pidana di lingkungan kami.',
  'Surat Pengantar KTP / KK': 'adalah benar warga kami yang berdomisili di alamat tersebut di atas dan bermaksud mengurus dokumen kependudukan.',
  'Surat Keterangan Usaha': 'adalah benar warga kami dan sepanjang pengetahuan kami benar menjalankan usaha di lingkungan kami.',
  'Surat Keterangan Tidak Mampu': 'adalah benar warga kami dan sepanjang pengetahuan kami termasuk keluarga yang kurang mampu secara ekonomi.',
  'Surat Pengantar Nikah': 'adalah benar warga kami yang berdomisili di alamat tersebut di atas dan bermaksud melangsungkan pernikahan.',
  'Surat Keterangan Pindah': 'adalah benar warga kami yang akan pindah dari alamat tersebut di atas.',
  'Surat Pengantar Lainnya': 'adalah benar warga kami yang berdomisili di alamat tersebut di atas.'
};
const SURAT_CSS = `.surat{background:#fff;color:#111;font-family:'Times New Roman',Times,serif;font-size:12pt;line-height:1.5;padding:28px 36px;max-width:720px;margin:0 auto}
.surat .kop{text-align:center;border-bottom:3px double #111;padding-bottom:8px;margin-bottom:18px}
.surat .kop b{display:block;font-size:14pt;letter-spacing:.04em}
.surat .kop span{display:block;font-size:11pt}
.surat h1{font-family:inherit;font-size:13pt;text-align:center;text-decoration:underline;margin:0;letter-spacing:.03em;color:#111}
.surat .no{text-align:center;margin:0 0 18px}
.surat table{border-collapse:collapse;margin:8px 0 8px 28px;min-width:0;width:auto}
.surat td{padding:1px 8px 1px 0;vertical-align:top;border:0;background:none;color:#111}
.surat td:first-child{white-space:nowrap}
.surat tr:hover{background:none}
.surat p{margin:8px 0;text-align:justify}
.surat .ttd{display:flex;justify-content:space-between;gap:20px;margin-top:30px}
.surat .ttd div{text-align:center;min-width:190px}
.surat .ttd .sp{height:70px}
.surat .ttd u{font-weight:700}`;
const rtrw = () => `${S.set.rt ? 'RT ' + S.set.rt : 'RT'}${S.set.rw ? ' / RW ' + S.set.rw : ''}`;
function nomorSurat(tanggal) {
  const th = tanggal.slice(0, 4), bl = Number(tanggal.slice(5, 7));
  const seq = S.surat.filter(x => String(x.tanggal).startsWith(th)).length + 1;
  return `${String(seq).padStart(3, '0')}/RT${S.set.rt ? '.' + S.set.rt : ''}${S.set.rw ? '/RW.' + S.set.rw : ''}/${ROMAWI[bl - 1]}/${th}`;
}
function suratIsi(x) {
  const st = S.set, p = x.pemohon || {};
  const wil = [st.kelurahan && 'Kelurahan ' + st.kelurahan, st.kecamatan && 'Kecamatan ' + st.kecamatan, st.kota].filter(Boolean).join(', ');
  return `<div class="surat">
    <div class="kop"><b>RUKUN TETANGGA ${esc((st.rt || '…').toUpperCase())} / RUKUN WARGA ${esc((st.rw || '…').toUpperCase())}</b><span>${esc(lingk())}</span>${wil ? `<span>${esc(wil)}</span>` : ''}</div>
    <h1>${esc(String(x.jenis).toUpperCase())}</h1>
    <p class="no">Nomor: ${esc(x.nomor)}</p>
    <p>Yang bertanda tangan di bawah ini, Ketua ${esc(rtrw())} ${esc(lingk())}${wil ? ', ' + esc(wil) : ''}, menerangkan bahwa:</p>
    <table>
      <tr><td>Nama</td><td>:</td><td><b>${esc(p.nama)}</b></td></tr>
      <tr><td>NIK</td><td>:</td><td>${esc(p.nik || '-')}</td></tr>
      <tr><td>Jenis kelamin</td><td>:</td><td>${esc(p.jk === 'P' ? 'Perempuan' : p.jk === 'L' ? 'Laki-laki' : '-')}</td></tr>
      <tr><td>Tanggal lahir</td><td>:</td><td>${p.lahir ? esc(tglSurat(p.lahir)) : '-'}</td></tr>
      ${p.agama ? `<tr><td>Agama</td><td>:</td><td>${esc(agamaLbl(p.agama))}</td></tr>` : ''}
      <tr><td>Alamat</td><td>:</td><td>${esc(p.alamat)}</td></tr>
    </table>
    <p>${esc(ISI_SURAT[x.jenis] || ISI_SURAT['Surat Pengantar Lainnya'])}</p>
    <p>Surat ini diberikan untuk keperluan: <b>${esc(x.keperluan)}</b>.${x.keterangan ? ' ' + esc(x.keterangan) : ''}</p>
    <p>Demikian surat ini dibuat dengan sebenarnya untuk dapat dipergunakan sebagaimana mestinya.</p>
    <div class="ttd">
      <div><br>Mengetahui,<br>Ketua RW ${esc(st.rw || '')}<div class="sp"></div><u>${esc(st.ketuaRw || '(..............................)')}</u></div>
      <div>${esc(st.kota || lingk())}, ${esc(tglSurat(x.tanggal))}<br><br>Ketua RT ${esc(st.rt || '')}<div class="sp"></div><u>${esc(namaKetua() || '(..............................)')}</u></div>
    </div>
  </div>`;
}
function pemohonOpts(val) {
  return wargaAktif().map(w => [`<option value="${esc(w.id)}|-1" ${val === w.id + '|-1' ? 'selected' : ''}>${esc(w.blok)} · ${esc(w.nama)} (kepala keluarga)</option>`,
    ...(w.anggota || []).map((a, i) => `<option value="${esc(w.id)}|${i}" ${val === w.id + '|' + i ? 'selected' : ''}>${esc(w.blok)} · ${esc(a.nama)} (${esc(a.hubungan)})</option>`)].join('')).join('');
}
function vSurat() {
  const head = `<div class="sec-head"><div><h2>Surat pengantar</h2><p>Buat surat bernomor otomatis, lalu unduh untuk dicetak dan ditandatangani.</p></div>
    <button class="btn pri" data-act="surat-new" ${dis('surat')}>+ Buat surat</button></div>`;
  const kurang = !S.set.rt || !S.set.kelurahan || !namaKetua();
  const note = kurang ? `<div class="notice">Kop surat belum lengkap (nomor RT, kelurahan atau nama Ketua RT). ${bisa('pengaturan') ? '<a href="#pengaturan" data-act="tab" data-k="pengaturan" style="color:inherit;font-weight:600">Lengkapi di Pengaturan</a>.' : 'Minta Ketua RT melengkapinya di Pengaturan.'}</div>` : '';
  if (!S.surat.length) return head + note + `<div class="empty"><h3>Belum ada surat</h3><p style="margin:0">Pilih jenis surat dan warga pemohon; nomor surat dan isinya terisi otomatis.</p>
    <button class="btn pri" data-act="surat-new" ${dis('surat')}>+ Buat surat</button></div>`;
  const q = S.suratQ.trim().toLowerCase();
  const list = [...S.surat].sort((a, b) => String(b.tanggal).localeCompare(String(a.tanggal)) || String(b.nomor).localeCompare(String(a.nomor)))
    .filter(x => !q || [x.nomor, x.jenis, x.keperluan, x.pemohon && x.pemohon.nama].some(v => String(v || '').toLowerCase().includes(q)));
  const rowsT = list.map(x => `<tr><td class="mono">${esc(x.nomor)}</td><td class="num">${esc(tgl(x.tanggal))}</td><td>${esc(x.jenis)}</td>
    <td><div style="font-weight:600">${esc(x.pemohon && x.pemohon.nama)}</div><div class="muted" style="font-size:.78rem">${esc(x.keperluan)}</div></td>
    <td class="r"><div class="racts"><button class="btn sm" data-act="surat-view" data-id="${esc(x.id)}">Lihat</button><button class="btn sm" data-act="surat-dl" data-id="${esc(x.id)}">Unduh</button></div></td></tr>`).join('');
  const rowsM = list.map(x => `<div class="row"><div class="grow"><div class="t">${esc(x.pemohon && x.pemohon.nama)}</div><div class="s">${esc(x.jenis.replace(/^Surat /, ''))} · ${esc(tgl(x.tanggal))}</div><div class="s mono">${esc(x.nomor)}</div></div>
    <button class="btn sm" data-act="surat-view" data-id="${esc(x.id)}">Lihat</button></div>`).join('');
  return head + note + `<div class="toolbar"><input class="search" type="search" id="qSurat" placeholder="Cari nomor, nama, jenis surat…" value="${esc(S.suratQ)}" aria-label="Cari surat"></div>
    <p class="muted" style="margin:-10px 0 0;font-size:.84rem">Buku agenda: ${S.surat.length} surat tercatat</p>
    <div class="tbl-wrap hide-m"><table><thead><tr><th>Nomor</th><th>Tanggal</th><th>Jenis</th><th>Pemohon</th><th></th></tr></thead><tbody>${rowsT}</tbody></table></div>
    <div class="list-mobile">${rowsM}</div>`;
}
function openSuratBaru() {
  if (!wargaAktif().length) { toast('Tambahkan data warga dulu sebelum membuat surat.', 'bad'); return; }
  openDlg({
    title: 'Buat surat pengantar', area: 'surat', submitLabel: 'Buat surat',
    body: `<div class="fld"><label for="sr_j">Jenis surat</label><select id="sr_j" name="jenis">${JENIS_SURAT.map(j => `<option>${j}</option>`).join('')}</select></div>
    <div class="fld"><label for="sr_p">Pemohon <span class="req">*</span></label><select id="sr_p" name="pemohon" required><option value="">— pilih warga —</option>${pemohonOpts('')}</select><span class="hint">Kepala keluarga dan anggota keluarga yang sudah dicatat</span></div>
    <div class="fld"><label for="sr_k">Keperluan <span class="req">*</span></label><input type="text" id="sr_k" name="keperluan" required placeholder="mis. Melamar pekerjaan"></div>
    <div class="fld"><label for="sr_t">Tanggal surat</label><input type="date" id="sr_t" name="tanggal" value="${todayISO()}" required></div>
    <div class="fld"><label for="sr_ket">Keterangan tambahan</label><textarea id="sr_ket" name="keterangan" rows="2" placeholder="Opsional, mis. nama usaha atau alamat tujuan pindah"></textarea></div>`,
    onSubmit: async d => {
      const [wid, idx] = String(d.pemohon).split('|'), w = wById(wid);
      if (!w) { pesanDlg('Pilih warga pemohon.', 'sr_p'); return false; }
      const a = Number(idx) >= 0 ? (w.anggota || [])[Number(idx)] : null;
      const alamat = `${lingk()} Blok ${w.blok}${S.set.rt ? ', ' + rtrw() : ''}${S.set.kelurahan ? ', Kel. ' + S.set.kelurahan : ''}`;
      const pemohon = a ? {nama: a.nama, nik: a.nik || '', jk: a.jk || '', agama: a.agama || w.agama || '', lahir: a.lahir || '', alamat, wargaId: w.id}
        : {nama: w.nama, nik: w.nik || '', jk: w.jk || '', agama: w.agama || '', lahir: w.lahir || '', alamat, wargaId: w.id};
      const row = {jenis: d.jenis, pemohon, keperluan: d.keperluan.trim(), keterangan: String(d.keterangan || '').trim(), tanggal: d.tanggal, nomor: nomorSurat(d.tanggal), dibuat: todayISO()};
      const id = uid(), ok = await put('surat', id, row);
      if (ok) { toast(`Surat ${row.nomor} dibuat.`); setTimeout(() => openSuratLihat(id, row), 50); }
      return ok;
    }
  });
}
/* ---------- Editor teks sederhana (ukuran, tebal, miring, garis bawah, rata, daftar) ---------- */
const RT_TAG = {P: 'p', DIV: 'p', BR: 'br', B: 'b', STRONG: 'b', I: 'i', EM: 'i', U: 'u', UL: 'ul', OL: 'ol', LI: 'li', H1: 'h2', H2: 'h2', H3: 'h3', H4: 'h3', SPAN: 'span', FONT: 'span', BLOCKQUOTE: 'blockquote'};
const RT_BLOK = /^(p|h2|h3|li|blockquote)$/;
function rtBersih(html) {
  const doc = new DOMParser().parseFromString('<!doctype html><body>' + String(html || '') + '</body>', 'text/html');
  const out = document.createElement('div');
  const walk = (src, dst) => { for (const n of [...src.childNodes]) {
    if (n.nodeType === 3) { dst.appendChild(document.createTextNode(n.nodeValue)); continue; }
    if (n.nodeType !== 1) continue;
    const tag = RT_TAG[n.tagName];
    if (!tag) { if (!/^(SCRIPT|STYLE|IFRAME|OBJECT|EMBED|TEMPLATE|SVG|MATH|NOSCRIPT|TITLE|HEAD|LINK|META|IMG|VIDEO|AUDIO|CANVAS|FORM|INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName)) walk(n, dst); continue; }
    const el = document.createElement(tag), cls = [], kc = String(n.getAttribute('class') || '');
    if (RT_BLOK.test(tag)) { const al = String((n.style && n.style.textAlign) || n.getAttribute('align') || (kc.match(/rt-al-(left|center|right|justify)/) || [])[1] || '').toLowerCase(); if (/^(center|right|justify)$/.test(al)) cls.push('rt-al-' + al); }
    let fs = 0; if (n.tagName === 'FONT') { const z = Number(n.getAttribute('size')); fs = z <= 2 ? 1 : z === 3 ? 0 : z <= 5 ? 3 : 4; } else { const m = kc.match(/rt-fs-([134])/); if (m) fs = Number(m[1]); }
    if (fs && tag === 'span') cls.push('rt-fs-' + fs);
    if (cls.length) el.className = cls.join(' ');
    // gaya dari span (Chrome/Word): tebal, miring, garis bawah → tag sederhana
    let isi = el;
    if (n.style && (tag === 'span' || tag === 'p')) {
      const st = n.style, w = [];
      if (/^(bold|[6-9]00)$/.test(st.fontWeight)) w.push('b');
      if (st.fontStyle === 'italic') w.push('i');
      if (/underline/.test(st.textDecorationLine || st.textDecoration || '')) w.push('u');
      w.forEach(t => { const x = document.createElement(t); isi.appendChild(x); isi = x; });
    }
    if (tag !== 'br') walk(n, isi);
    if (tag === 'span' && !cls.length) { while (el.firstChild) dst.appendChild(el.firstChild); continue; }
    dst.appendChild(el);
  } };
  walk(doc.body, out);
  return out.innerHTML.replace(/<p><\/p>/g, '');
}
function rtTeks(html) {
  const doc = new DOMParser().parseFromString('<!doctype html><body>' + rtBersih(html) + '</body>', 'text/html');
  doc.querySelectorAll('ol').forEach(ol => [...ol.children].forEach((li, i) => li.prepend((i + 1) + '. ')));
  doc.querySelectorAll('ul > li').forEach(li => li.prepend('• '));
  doc.querySelectorAll('br').forEach(b => b.replaceWith('\n'));
  doc.querySelectorAll('h2,h3').forEach(h => { h.prepend('*'); h.append('*'); });
  doc.querySelectorAll('p,h2,h3,li,blockquote').forEach(b => b.append('\n'));
  return doc.body.textContent.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}
function rtEditorHtml(id, html, ph) {
  const b = (c, label, t) => `<button type="button" class="rt-b" data-rt="${c}" title="${t}" aria-label="${t}">${label}</button>`;
  const ik = d => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
  return `<div class="rt-wrap"><div class="rt-bar" role="toolbar" aria-label="Format teks">
      <select class="rt-sel" data-rtsel="blok" aria-label="Gaya paragraf" title="Gaya paragraf"><option value="P">Paragraf</option><option value="H2">Judul</option><option value="H3">Subjudul</option></select>
      <select class="rt-sel" data-rtsel="ukuran" aria-label="Ukuran huruf" title="Ukuran huruf"><option value="">Ukuran huruf</option><option value="2">Kecil</option><option value="3">Normal</option><option value="5">Besar</option><option value="6">Sangat besar</option></select>
      <span class="rt-sep"></span>${b('bold', '<b>B</b>', 'Tebal (Ctrl+B)')}${b('italic', '<i>I</i>', 'Miring (Ctrl+I)')}${b('underline', '<u>U</u>', 'Garis bawah (Ctrl+U)')}
      <span class="rt-sep"></span>${b('justifyLeft', ik('M4 6h16M4 10h10M4 14h16M4 18h10'), 'Rata kiri')}${b('justifyCenter', ik('M4 6h16M7 10h10M4 14h16M7 18h10'), 'Rata tengah')}${b('justifyRight', ik('M4 6h16M10 10h10M4 14h16M10 18h10'), 'Rata kanan')}${b('justifyFull', ik('M4 6h16M4 10h16M4 14h16M4 18h16'), 'Rata kiri-kanan')}
      <span class="rt-sep"></span>${b('insertUnorderedList', ik('M9 7h11M9 12h11M9 17h11M4.5 7h.5M4.5 12h.5M4.5 17h.5'), 'Daftar berpoin')}${b('insertOrderedList', '<span class="rt-num">1.</span>' + ik('M10 7h10M10 12h10M10 17h10'), 'Daftar bernomor')}
      <span class="rt-sep"></span>${b('undo', '↶', 'Urungkan (Ctrl+Z)')}${b('redo', '↷', 'Ulangi (Ctrl+Y)')}${b('removeFormat', '<span style="text-decoration:line-through">T</span>', 'Hapus format')}
    </div><div class="rt-isi rt" id="${id}" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Isi" spellcheck="true" data-ph="${esc(ph || '')}">${rtBersih(html)}</div></div>`;
}
function rtPasang(id) {
  const ed = document.getElementById(id); if (!ed) return;
  const wrap = ed.closest('.rt-wrap'), bar = wrap.querySelector('.rt-bar');
  try { document.execCommand('styleWithCSS', false, false); document.execCommand('defaultParagraphSeparator', false, 'p'); } catch (e) {}
  const status = () => bar.querySelectorAll('[data-rt]').forEach(b => { let on = false; try { on = /^(bold|italic|underline|justify|insert)/.test(b.dataset.rt) && document.queryCommandState(b.dataset.rt); } catch (e) {} b.classList.toggle('on', !!on); });
  bar.addEventListener('mousedown', e => { if (e.target.closest('[data-rt]')) e.preventDefault(); });
  bar.addEventListener('click', e => { const b = e.target.closest('[data-rt]'); if (!b) return; ed.focus(); document.execCommand(b.dataset.rt, false, null); status(); });
  bar.querySelectorAll('[data-rtsel]').forEach(sel => sel.addEventListener('change', () => { const v = sel.value; if (!v) return; ed.focus();
    if (sel.dataset.rtsel === 'blok') document.execCommand('formatBlock', false, '<' + v + '>'); else { document.execCommand('fontSize', false, v); sel.value = ''; } status(); }));
  ed.addEventListener('keyup', status); ed.addEventListener('mouseup', status);
  ed.addEventListener('paste', e => { const cd = e.clipboardData; if (!cd) return; const h = cd.getData('text/html'), t = cd.getData('text/plain');
    e.preventDefault(); document.execCommand('insertHTML', false, h ? rtBersih(h) : esc(t || '').replace(/\n/g, '<br>')); });
  if (!ed.innerHTML.trim()) ed.innerHTML = '<p><br></p>';
}
const RT_CSS = `.rt h2{font-size:1.25em;margin:.8em 0 .3em}.rt h3{font-size:1.08em;margin:.8em 0 .3em}.rt p{margin:.35em 0}.rt ul,.rt ol{margin:.3em 0 .3em 1.4em;padding:0}.rt li{margin:.15em 0}.rt .rt-al-center{text-align:center}.rt .rt-al-right{text-align:right}.rt .rt-al-justify{text-align:justify}.rt .rt-fs-1{font-size:.85em}.rt .rt-fs-3{font-size:1.25em}.rt .rt-fs-4{font-size:1.6em}.rt blockquote{margin:.4em 0 .4em 1em;padding-left:.8em;border-left:3px solid #ccc}`;

/* ---------- Notulensi rapat (dibuat sekretaris / pengurus berhak kelola Surat; dibaca pengurus) ---------- */
const bolehRapatC = () => { if (!S.sesi || isWarga()) return false; if (S.sesi === 'pemilik') return bolehPemilik(); const p = pengurusSesi(); return !!p && !p.dariPekerja && !isSatpam(); };
const bisaNotulen = () => bolehRapatC() && (S.sesi === 'pemilik' || (roleSaya() || {}).id === 'sekretaris'); // hanya Sekretaris (& Pemilik) yang membuat/mengubah/mengirim
const NT_TEMPLATE = '<h3>Agenda rapat</h3><ol><li>…</li></ol><h3>Pembahasan</h3><p>…</p><h3>Keputusan</h3><ol><li>…</li></ol><h3>Tindak lanjut</h3><ul><li>… (penanggung jawab, tenggat)</li></ul>';
const ntPeserta = n => String(n.peserta || '').split(/\n|,/).map(x => x.trim()).filter(Boolean);
function vNotulen() {
  const head = `<div class="sec-head"><div><h2>Notulensi rapat</h2><p>Catatan hasil rapat pengurus dan warga. Hanya dapat dilihat pengurus.</p></div>
    ${bisaNotulen() ? '<button class="btn pri" data-act="nt-new">+ Buat notulen</button>' : ''}</div>`;
  if (!S.notulen.length) return head + `<div class="empty"><h3>Belum ada notulen</h3><p style="margin:0">Catat jalannya rapat: agenda, pembahasan, keputusan, dan tindak lanjut.</p>${bisaNotulen() ? '<button class="btn pri" data-act="nt-new">+ Buat notulen</button>' : ''}</div>`;
  const q = S.ntQ.trim().toLowerCase();
  const list = [...S.notulen].sort((a, b) => String(b.tanggal).localeCompare(String(a.tanggal)) || String(b.dibuat || '').localeCompare(String(a.dibuat || '')))
    .filter(n => !q || [n.judul, n.tempat, n.pimpinan, n.notulis, rtTeks(n.isi)].some(v => String(v || '').toLowerCase().includes(q)));
  return head + `<div class="toolbar"><input class="search" type="search" id="qNotulen" placeholder="Cari judul, tempat, isi notulen…" value="${esc(S.ntQ)}" aria-label="Cari notulen"></div>
    <div class="kel-list">${list.map(n => { const ringkas = rtTeks(n.isi).replace(/\*/g, '').replace(/\s+/g, ' ');
      return `<article class="kel ${n.status === 'Final' ? '' : 'p-Sedang'}"><div class="meta">${n.status === 'Final' ? '<span class="chip ok">Final</span>' : '<span class="chip warn">Draf</span>'}<span>${esc(tglPanjang(n.tanggal))}${n.jamMulai ? ' · ' + esc(n.jamMulai) + (n.jamSelesai ? '–' + esc(n.jamSelesai) : '') : ''}</span>${n.tempat ? `<span>· ${esc(n.tempat)}</span>` : ''}</div>
      <h4>${esc(n.judul)}</h4><p class="muted" style="margin:0;font-size:.86rem">${ntPeserta(n).length} peserta${n.pimpinan ? ' · Pimpinan: ' + esc(n.pimpinan) : ''}${n.notulis ? ' · Notulis: ' + esc(n.notulis) : ''}</p>
      <p style="margin:6px 0 0;font-size:.9rem;color:var(--muted)">${esc(ringkas.slice(0, 160))}${ringkas.length > 160 ? '…' : ''}</p>
      <div class="acts"><button class="btn sm pri" data-act="nt-lihat" data-id="${esc(n.id)}">Lihat</button>${bisaNotulen() ? `<button class="btn sm" data-act="nt-edit" data-id="${esc(n.id)}">Ubah</button>` : ''}</div></article>`; }).join('') || '<div class="empty">Tidak ada notulen yang cocok.</div>'}</div>`;
}
function openNotulen(id) {
  if (!bisaNotulen()) return;
  const n = id ? S.notulen.find(x => x.id === id) : null;
  openDlg({title: n ? 'Ubah notulen rapat' : 'Buat notulen rapat', submitLabel: 'Simpan', lebar: true,
    body: `<div class="fld"><label for="nt_j">Judul rapat <span class="req">*</span></label><input type="text" id="nt_j" name="judul" required maxlength="150" value="${esc(n ? n.judul : '')}" placeholder="mis. Rapat pengurus bulanan November"></div>
      <div class="grid2"><div class="fld"><label for="nt_t">Tanggal <span class="req">*</span></label><input type="date" id="nt_t" name="tanggal" required value="${esc(n ? n.tanggal : todayISO())}"></div>
        <div class="fld"><label for="nt_tp">Tempat</label><input type="text" id="nt_tp" name="tempat" maxlength="100" value="${esc(n ? n.tempat || '' : '')}" placeholder="mis. Pos jaga / rumah Ketua RT"></div></div>
      <div class="grid2"><div class="fld"><label for="nt_m">Jam mulai</label><input type="time" id="nt_m" name="jamMulai" value="${esc(n ? n.jamMulai || '' : '')}"></div>
        <div class="fld"><label for="nt_s">Jam selesai</label><input type="time" id="nt_s" name="jamSelesai" value="${esc(n ? n.jamSelesai || '' : '')}"></div></div>
      <div class="grid2"><div class="fld"><label for="nt_pm">Pimpinan rapat</label><input type="text" id="nt_pm" name="pimpinan" maxlength="80" value="${esc(n ? n.pimpinan || '' : namaKetua() || '')}"></div>
        <div class="fld"><label for="nt_nt">Notulis</label><input type="text" id="nt_nt" name="notulis" maxlength="80" value="${esc(n ? n.notulis || '' : namaSesi())}"></div></div>
      <div class="fld"><label for="nt_ps">Peserta / yang hadir</label><textarea id="nt_ps" name="peserta" rows="3" maxlength="3000" placeholder="Satu nama per baris, atau pisahkan dengan koma">${esc(n ? n.peserta || '' : '')}</textarea></div>
      <div class="fld"><span class="lbl-f">Isi notulen <span class="req">*</span></span>${rtEditorHtml('ntIsi', n ? n.isi : NT_TEMPLATE, 'Tulis hasil rapat…')}</div>
      <div class="fld"><label for="nt_st">Status</label><select id="nt_st" name="status"><option ${!n || n.status !== 'Final' ? 'selected' : ''}>Draf</option><option ${n && n.status === 'Final' ? 'selected' : ''}>Final</option></select><span class="hint">Draf masih bisa dilengkapi. Pilih Final bila sudah disetujui pimpinan rapat.</span></div>`,
    onSubmit: async d => {
      const isi = rtBersih(($('#ntIsi') || {}).innerHTML || '');
      if (!rtTeks(isi).replace(/[…*•\d.\s]/g, '').trim()) { pesanDlg('Isi notulen masih kosong.'); return false; }
      if (d.jamMulai && d.jamSelesai && d.jamSelesai < d.jamMulai) { pesanDlg('Jam selesai tidak boleh sebelum jam mulai.', 'nt_s'); return false; }
      const row = {...(n || {}), judul: d.judul.trim(), tanggal: d.tanggal, tempat: String(d.tempat || '').trim(), jamMulai: d.jamMulai || '', jamSelesai: d.jamSelesai || '',
        pimpinan: String(d.pimpinan || '').trim(), notulis: String(d.notulis || '').trim(), peserta: String(d.peserta || '').trim(), isi, status: d.status === 'Final' ? 'Final' : 'Draf',
        diubah: nowDT(), diubahOleh: namaSesi()};
      if (!n) { row.dibuat = nowDT(); row.dibuatOleh = namaSesi(); }
      const nid = n ? n.id : uid(), ok = await put('notulen', nid, row);
      if (ok) { toast(n ? 'Notulen diperbarui.' : 'Notulen tersimpan.'); setTimeout(() => openNotulenLihat(nid, row), 60); }
      return ok;
    },
    onDelete: n ? async () => { const ok = await del('notulen', n.id); if (ok) toast('Notulen dihapus.'); return ok; } : null, deleteLabel: 'Hapus notulen'});
  rtPasang('ntIsi');
}
function notulenDok(n) {
  const st = S.set, ps = ntPeserta(n);
  const wil = [st.kelurahan && 'Kelurahan ' + st.kelurahan, st.kecamatan && 'Kecamatan ' + st.kecamatan, st.kota].filter(Boolean).join(', ');
  return `<div class="surat notulen">
    <div class="kop"><b>RUKUN TETANGGA ${esc((st.rt || '…').toUpperCase())} / RUKUN WARGA ${esc((st.rw || '…').toUpperCase())}</b><span>${esc(lingk())}</span>${wil ? `<span>${esc(wil)}</span>` : ''}</div>
    <h1>NOTULEN RAPAT</h1><p class="no">${esc(n.judul)}</p>
    <table>
      <tr><td>Hari, tanggal</td><td>:</td><td>${esc(tglPanjang(n.tanggal))}</td></tr>
      ${n.jamMulai ? `<tr><td>Waktu</td><td>:</td><td>${esc(n.jamMulai)}${n.jamSelesai ? ' – ' + esc(n.jamSelesai) : ''} WIB</td></tr>` : ''}
      ${n.tempat ? `<tr><td>Tempat</td><td>:</td><td>${esc(n.tempat)}</td></tr>` : ''}
      ${n.pimpinan ? `<tr><td>Pimpinan rapat</td><td>:</td><td>${esc(n.pimpinan)}</td></tr>` : ''}
      ${n.notulis ? `<tr><td>Notulis</td><td>:</td><td>${esc(n.notulis)}</td></tr>` : ''}
      ${ps.length ? `<tr><td>Peserta</td><td>:</td><td>${ps.length} orang: ${esc(ps.join(', '))}</td></tr>` : ''}
    </table>
    <div class="rt nt-isi">${rtBersih(n.isi)}</div>
    <div class="ttd"><div><br>Pimpinan rapat<div class="sp"></div><u>${esc(n.pimpinan || '(..............................)')}</u></div>
      <div>${esc(st.kota || lingk())}, ${esc(tglSurat(n.tanggal))}<br>Notulis<div class="sp"></div><u>${esc(n.notulis || '(..............................)')}</u></div></div>
  </div>`;
}
const teksNotulen = n => `*NOTULEN RAPAT*\n*${n.judul}*\n${tglPanjang(n.tanggal)}${n.jamMulai ? ', ' + n.jamMulai + (n.jamSelesai ? '–' + n.jamSelesai : '') + ' WIB' : ''}${n.tempat ? '\nTempat: ' + n.tempat : ''}${n.pimpinan ? '\nPimpinan: ' + n.pimpinan : ''}${n.notulis ? '\nNotulis: ' + n.notulis : ''}${ntPeserta(n).length ? '\nPeserta: ' + ntPeserta(n).length + ' orang' : ''}\n\n${rtTeks(n.isi)}\n\n${pengirim()}`;
function openNotulenLihat(id, fallback) {
  const n = S.notulen.find(x => x.id === id) || (fallback && {...fallback, id}); if (!n || !bolehRapatC()) return;
  openDlg({title: n.judul, lebar: true,
    body: `<div class="surat-wrap">${notulenDok(n)}</div>${n.diubahOleh ? `<p class="muted" style="margin:0;font-size:.8rem">Terakhir diubah ${esc(n.diubahOleh)} · ${esc(tglJam(n.diubah))} · Status ${esc(n.status || 'Draf')}</p>` : ''}`,
    foot: `<button type="button" class="btn" data-act="salin" data-teks="${esc(teksNotulen(n))}">Salin teks</button>${bisaNotulen() ? `<a class="btn wa" href="${esc(waShare(teksNotulen(n)))}" target="_blank" rel="noopener">Kirim ke grup pengurus (WA)</a>` : '<button type="button" class="btn wa" disabled aria-disabled="true" title="Hanya Sekretaris yang dapat mengirim notulen ke grup WhatsApp">Kirim ke grup pengurus (WA)</button>'}<button type="button" class="btn" data-act="nt-unduh" data-id="${esc(n.id)}">Unduh / cetak</button>${bisaNotulen() ? `<button type="button" class="btn pri" data-act="nt-edit" data-id="${esc(n.id)}">Ubah</button>` : ''}`});
}
function unduhNotulen(id) {
  const n = S.notulen.find(x => x.id === id); if (!n) return;
  const html = `<!doctype html><html lang="id"><head><meta charset="utf-8"><title>Notulen - ${esc(n.judul)}</title><style>${SURAT_CSS}${RT_CSS}
@page{size:A4;margin:2cm}body{margin:0;background:#fff}.surat{padding:0;max-width:none}@media screen{body{padding:24px}.surat{max-width:720px}}</style></head><body>${notulenDok(n)}</body></html>`;
  unduh(fname(`Notulen - ${n.judul} - ${n.tanggal}.html`), html);
}
function openSuratLihat(id, fallback) {
  const x = S.surat.find(s => s.id === id) || (fallback && {...fallback, id}); if (!x) return;
  openDlg({
    title: x.nomor, area: 'surat',
    body: `<div class="surat-wrap">${suratIsi(x)}</div><p class="muted" style="margin:0;font-size:.82rem">Unduh lalu buka file di browser untuk mencetak atau menyimpan sebagai PDF.</p>`,
    foot: `<button type="button" class="btn pri" data-act="surat-dl" data-id="${esc(x.id)}">Unduh surat</button>`,
    onDelete: async () => { const ok = await del('surat', x.id); if (ok) toast('Surat dihapus dari buku agenda.'); return ok; },
    deleteLabel: 'Hapus surat'
  });
}
function unduhSurat(id) {
  const x = S.surat.find(s => s.id === id); if (!x) return;
  const html = `<!doctype html><html lang="id"><head><meta charset="utf-8"><title>${esc(x.nomor)}</title><style>${SURAT_CSS}
@page{size:A4;margin:2cm}body{margin:0;background:#fff}.surat{padding:0;max-width:none}@media screen{body{padding:24px}.surat{max-width:720px}}</style></head><body>${suratIsi(x)}</body></html>`;
  unduh(fname(`${x.jenis} - ${x.pemohon && x.pemohon.nama} - ${x.tanggal}.html`), html);
}

/* ---------- ekspor CSV ---------- */
function csv(rows) { return rows.map(r => r.map(v => { let t = String(v ?? ''); if (typeof v !== 'number' && /^[=+\-@\t\r]/.test(t)) t = "'" + t; return /[;"\n\r]/.test(t) ? '"' + t.replace(/"/g, '""') + '"' : t; }).join(';')).join('\r\n'); }
function ekspor(k, per) {
  const tag = lingk().replace(/\s+/g, '-');
  const W = [...S.warga].sort(sortHouse);
  let rows, name;
  if (k === 'warga') { name = `Data-warga-${tag}`; rows = [['Blok/No','Nama kepala keluarga','NIK','No HP','Agama','Jumlah jiwa','Status huni','Status','Wajib iuran mulai','Tunggakan (bulan)','Catatan'],
    ...W.map(w => [w.blok, w.nama, w.nik, w.noHp, agamaLbl(w.agama), w.jumlahJiwa, w.statusHuni, w.status, mulaiTgl(w), tunggakan(w), w.catatan])]; }
  else if (k === 'anggota') { name = `Anggota-keluarga-${tag}`; rows = [['Blok/No','Kepala keluarga','Nama anggota','Hubungan','Jenis kelamin','Agama','Tanggal lahir','Umur','NIK'],
    ...W.flatMap(w => [[w.blok, w.nama, w.nama, 'Kepala keluarga', w.jk === 'P' ? 'Perempuan' : w.jk === 'L' ? 'Laki-laki' : '', agamaLbl(w.agama), w.lahir, umur(w.lahir), w.nik], ...(w.anggota || []).map(a => [w.blok, w.nama, a.nama, a.hubungan, a.jk === 'P' ? 'Perempuan' : 'Laki-laki', agamaLbl(a.agama || w.agama), a.lahir, umur(a.lahir), a.nik])])]; }
  else if (k === 'iuran') { name = `Riwayat-iuran-${tag}`; rows = [['Periode','Blok/No','Nama','Jumlah','Tanggal bayar','Metode','No kwitansi','Catatan'],
    ...[...S.iuran].sort((a, b) => b.periode.localeCompare(a.periode)).map(p => { const w = wById(p.wargaId) || {}; return [p.periode, w.blok, w.nama, p.jumlah, p.tanggal, p.metode, kwNomor(p), p.catatan]; })]; }
  else if (k === 'tunggakan') { name = `Tunggakan-${tag}-${todayISO()}`; rows = [['Blok/No','Nama','No HP','Jumlah bulan','Bulan tertunggak','Total (Rp)'],
    ...W.map(w => [w, tunggakanList(w)]).filter(x => x[1].length).map(([w, l]) => [w.blok, w.nama, w.noHp, l.length, l.map(p => perLbl(p)).join(', '), l.length * nominal()])]; }
  else if (k === 'kas') { const all = kasSemua().filter(x => !per || x.tanggal.slice(0, 7) === per).sort((a, b) => a.tanggal.localeCompare(b.tanggal));
    let run = per ? rekapKas(per).awal : saldoCutoff().jumlah;
    name = per ? `Laporan-kas-${tag}-${per}` : `Buku-kas-${tag}`;
    rows = [['Tanggal','Jenis','Kategori','Uraian','Masuk','Keluar','Saldo'], ['', '', '', 'Saldo awal', '', '', run],
      ...all.map(x => { run += nilai(x); return [x.tanggal, x.jenis === 'masuk' ? 'Pemasukan' : 'Pengeluaran', x.kategori, x.uraian, x.jenis === 'masuk' ? x.jumlah : '', x.jenis !== 'masuk' ? x.jumlah : '', run]; })]; }
  else if (k === 'keluhan') { name = `Keluhan-${tag}`; rows = [['Tanggal','Judul','Kategori','Prioritas','Status','Pelapor','Lokasi','Uraian','Tanggapan'],
    ...S.keluhan.map(x => { const w = x.wargaId && wById(x.wargaId); return [x.dibuat, x.judul, x.kategori, x.prioritas, x.status, w ? `${w.blok} ${w.nama}` : x.pelaporNama, x.lokasi, x.isi, x.tanggapan]; })]; }
  else if (k === 'surat') { name = `Agenda-surat-${tag}`; rows = [['Nomor','Tanggal','Jenis','Pemohon','NIK','Keperluan'],
    ...[...S.surat].sort((a, b) => String(a.tanggal).localeCompare(String(b.tanggal))).map(x => [x.nomor, x.tanggal, x.jenis, x.pemohon && x.pemohon.nama, x.pemohon && x.pemohon.nik, x.keperluan])]; }
  if (!rows || rows.length < 2) { toast('Belum ada data untuk diunduh.', 'bad'); return; }
  unduh(name + '.csv', csv(rows));
}

/* ---------- dialog ---------- */
const dlg = $('#dlg');
let dlgSubmit = null, dlgDelete = null;
function openDlg({title, body, submitLabel = 'Simpan', onSubmit, onDelete, deleteLabel = 'Hapus', area, foot = '', lebar = false}) {
  const boleh = area ? bisa(area) : true;
  dlg.classList.toggle('lebar', !!lebar);
  $('#dlgTitle').textContent = title;
  $('#dlgBody').innerHTML = body;
  pesanDlg('');
  if ($('#f_nik')) cekNik($('#f_nik'));
  if ($('#f_hp')) cekHp($('#f_hp'));
  document.querySelectorAll('#agList .ag-nik').forEach(el => cekNik(el, el.nextElementSibling));
  if ($('#agList')) agRefresh();
  dlgSubmit = onSubmit; dlgDelete = onDelete;
  $('#dlgFoot').innerHTML = `
    ${onDelete && boleh ? `<span class="left" id="delWrap"><button type="button" class="btn ghost" data-act="dlg-del" style="color:var(--bad)">${deleteLabel}</button></span>` : ''}
    ${foot}<button type="button" class="btn" data-act="dlg-close">${onSubmit && boleh ? 'Batal' : 'Tutup'}</button>
    ${onSubmit && boleh ? `<button type="submit" class="btn pri">${submitLabel}</button>` : ''}`;
  if (!dlg.open) dlg.showModal();
  const f = dlg.querySelector('.dlg-b input:not([type=hidden]),.dlg-b select,.dlg-b textarea'); if (f && !f.disabled) f.focus();
}
function pesanDlg(msg, fieldId) {
  const box = $('#dlgMsg');
  dlg.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
  box.textContent = msg || ''; box.hidden = !msg;
  if (fieldId) { const f = document.getElementById(fieldId); if (f) { f.setAttribute('aria-invalid', 'true'); f.focus(); f.scrollIntoView({block: 'center', behavior: 'smooth'}); } }
}
$('#dlgForm').addEventListener('input', e => {
  if (e.target.closest && e.target.closest('#gjPen,#gjPot')) { gjHitungForm(); const a = $('#gjTPen'), b2 = $('#gjTPen2'); if (a && b2) b2.textContent = a.textContent; return; }
  if (e.target.closest && e.target.closest('#pjItems')) { e.target.removeAttribute('aria-invalid'); pjiHitung(); return; }
  if (e.target.id === 'f_nik') { cekNik(e.target); return; }
  if (e.target.id === 'pg_pin' || e.target.id === 'pp_pin' || e.target.id === 'pp_pin2') { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6); return; }
  if (e.target.id === 'pg_role') { e.target.dataset.manual = '1'; $('#pgRoleInfo').innerHTML = roleInfoHtml(e.target.value, $('#pg_jab').value); return; }
  if (e.target.id === 'pg_jab') {
    const sel = $('#pg_role'), r = roleCocok(e.target.value);
    if (r && sel && !sel.dataset.manual && sel.value !== r.id) { sel.value = r.id; const kosong = sel.querySelector('option[value=""]'); if (kosong) kosong.remove(); }
    if (sel) $('#pgRoleInfo').innerHTML = roleInfoHtml(sel.value, e.target.value);
    return;
  }
  if (e.target.id === 'pgCari') {
    const q = e.target.value.trim(); clearTimeout(pgCariTmr);
    pgCariTmr = setTimeout(async () => {
      const box = $('#pgHasil'); if (!box || !U) return;
      const res = q ? await U.search(q) : [];
      for (const h of res) S.names[h.id] = h;
      const dipakai = new Set(S.pengurus.map(p => p.userId));
      box.innerHTML = q && !res.length ? '<p class="muted" style="margin:6px 0 0;font-size:.85rem">Tidak ditemukan. Orang di luar organisasi bisa membuka aplikasi lalu menekan "Minta akses".</p>'
        : res.map(h => `<div class="row" style="padding:6px 0">${avatarHtml(h.id, h.name)}<div class="grow"><div class="t">${esc(h.name)}</div>${dipakai.has(h.id) ? '<div class="s">Sudah terdaftar sebagai pengurus</div>' : ''}</div>
          <button type="button" class="btn sm" data-act="pg-pilih" data-id="${esc(h.id)}" ${dipakai.has(h.id) ? 'disabled' : ''}>Pilih</button></div>`).join('');
    }, 250);
    return;
  }
  if (e.target.id === 'kas_jenis') { const k = $('#kas_kat'); if (k) k.innerHTML = katOpts(e.target.value); const kk = $('.kas-keluar'); if (kk) kk.hidden = e.target.value === 'masuk'; return; }
  if (e.target.id === 'f_hp') { cekHp(e.target); return; }
  if (e.target.classList.contains('ag-nik')) { cekNik(e.target, e.target.nextElementSibling); return; }
  if (e.target.classList.contains('ag-lahir')) { e.target.nextElementSibling.textContent = umur(e.target.value); }
  if (e.target.id === 'f_status' && $('#f_pindahBox')) { const pd = e.target.value === 'Pindah'; $('#f_pindahBox').hidden = !pd; if (pd && $('#f_tp') && !$('#f_tp').value) $('#f_tp').value = todayISO(); }
  if (e.target.id === 'f_mulai' && $('#mulaiInfo')) $('#mulaiInfo').textContent = mulaiInfo(e.target.value);
  if (e.target.getAttribute('aria-invalid')) e.target.removeAttribute('aria-invalid');
});
$('#dlgForm').addEventListener('submit', async e => {
  e.preventDefault();
  if (!dlgSubmit) return;
  pesanDlg('');
  const form = e.target, bad = [...form.querySelectorAll('[required]')].find(el => !String(el.value).trim());
  if (bad) {
    const lbl = form.querySelector(`label[for="${bad.id}"]`);
    pesanDlg(`${lbl ? lbl.textContent.replace('*', '').trim() : 'Kolom wajib'} belum diisi.`, bad.id); return;
  }
  const btn = form.querySelector('button[type=submit]'); if (btn) btn.disabled = true;
  const ok = await dlgSubmit(Object.fromEntries(new FormData(form)));
  if (btn) btn.disabled = false;
  if (ok !== false) dlg.close();
});

/* ---------- actions ---------- */
function openWarga(id) {
  if (isSatpam()) return;
  const w = id ? wById(id) : null;
  openDlg({
    title: w ? (bisa('warga') ? 'Ubah data warga' : 'Data warga') : 'Tambah warga', body: formWarga(w), area: 'warga',
    onSubmit: async d => {
      d.nik = String(d.nik || '').replace(/\D/g, '');
      if (d.nik && d.nik.length !== 16) { pesanDlg(`NIK harus 16 digit (sekarang ${d.nik.length} digit), atau kosongkan.`, 'f_nik'); return false; }
      const hpDigit = String(d.noHp || '').replace(/\D/g, '').length;
      if (!hpDigit) { pesanDlg('No. HP wajib diisi karena dipakai untuk login dan WhatsApp.', 'f_hp'); return false; }
      if (hpDigit < 10) { pesanDlg(`No. HP minimal 10 digit (sekarang ${hpDigit} digit).`, 'f_hp'); return false; }
      d.noHp = String(d.noHp || '').trim();
      const blok = String(d.blok).trim().toUpperCase();
      const dup = S.warga.find(x => x.id !== (w && w.id) && x.status !== 'Pindah' && String(x.blok).toUpperCase() === blok && d.status !== 'Pindah');
      if (dup) { pesanDlg(`Rumah ${blok} sudah tercatat atas nama ${dup.nama}. Ubah data itu, atau tandai warga lama sebagai Pindah.`, 'f_blok'); return false; }
      const ag = agAmbil();
      const agTanpaNama = ag.find(x => !x.nama);
      if (agTanpaNama) { pesanDlg('Nama anggota keluarga belum diisi. Isi namanya, atau hapus baris anggota itu.', agTanpaNama._namaId); return false; }
      const agNik = ag.find(x => x.nik && x.nik.length !== 16);
      if (agNik) { pesanDlg(`NIK ${agNik.nama} harus 16 digit (sekarang ${agNik.nik.length} digit), atau kosongkan.`, agNik._nikId); return false; }
      const anggota = ag.map(({_nikId, _namaId, ...x}) => x);
      const jiwa = Math.max(Number(d.jumlahJiwa) || 1, 1 + anggota.length);
      const row = {...(w || {}), ...d, blok, nama: d.nama.trim(), anggota, jumlahJiwa: jiwa, diperbarui: todayISO()};
      if (row.status !== 'Pindah') delete row.tglPindah;
      else if (row.tglPindah && row.tglPindah > todayISO()) { pesanDlg('Tanggal pindah tidak boleh di masa depan.', 'f_tp'); return false; }
      const jadiPindah = !!w && w.status !== 'Pindah' && row.status === 'Pindah', jadiAktif = !!w && w.status === 'Pindah' && row.status !== 'Pindah';
      delete row.izinLapak;
      if (w && w.izinLapak !== undefined) row.izinLapak = w.izinLapak;
      if (bolehIzinLapak()) { const iz = !!d.izinLapak; if (iz !== !!(w && w.izinLapak)) { row.izinLapakOleh = namaSesi(); row.izinLapakTgl = todayISO(); if (row.mintaLapak) row.mintaLapak = {...row.mintaLapak, status: iz ? 'Disetujui' : row.mintaLapak.status}; } row.izinLapak = iz; }
      if (!w) row.dibuat = todayISO();
      const ok = await put('warga', w ? w.id : uid(), row);
      if (ok) toast(w ? 'Data warga diperbarui.' : `${row.nama} ditambahkan.`);
      if (ok && jadiPindah) setTimeout(() => setelahPindah(w.id, row), 80);
      if (ok && jadiAktif) setTimeout(() => tawarAktifkanAkun(w.id, row), 80);
      return ok;
    },
    onDelete: w ? async () => {
      const n = S.iuran.filter(p => p.wargaId === w.id);
      for (const p of n) await del('iuran', p.id);
      const ok = await del('warga', w.id);
      if (ok) toast(`${w.nama} dihapus beserta ${n.length} catatan iuran.`);
      return ok;
    } : null,
    deleteLabel: 'Hapus warga'
  });
}
/* --- warga pindah: akun login otomatis nonaktif (server), cek pengurus & aktifkan kembali --- */
function setelahPindah(wid, w) {
  const akun = S.akunWarga.find(a => a.wargaId === wid);
  S.akunWarga = S.akunWarga.map(a => a.wargaId === wid && a.aktif !== false ? {...a, aktif: false, nonaktifKarena: 'Pindah'} : a);
  const pg = S.pengurus.filter(p => p.wargaId === wid && p.aktif !== false && !p.dariPekerja);
  const infoAkun = akun || !bisaKelola() ? 'Akun login warga rumah ini otomatis dinonaktifkan dan sesinya diputus.' : '';
  if (!pg.length) { if (infoAkun) toast(`${w.nama} ditandai pindah. ${infoAkun}`); return; }
  const daftar = pg.map(p => `<b>${esc(p.nama)}</b> (${esc(p.jabatan || 'Pengurus')})`).join(', ');
  if (!bisaKelola()) { openDlg({title: 'Warga ini juga pengurus', submitLabel: 'Mengerti', body: `<p style="margin:0">${infoAkun}</p><p style="margin:0">${daftar} masih tercatat sebagai <b>pengurus aktif</b>. Minta Pemilik aplikasi menonaktifkan akses pengurusnya di Admin → Pengurus.</p>`, onSubmit: async () => true}); return; }
  openDlg({title: 'Warga ini juga pengurus', area: 'admin', submitLabel: 'Nonaktifkan pengurus',
    body: `<p style="margin:0">${infoAkun}</p><p style="margin:0">${daftar} masih tercatat sebagai <b>pengurus aktif</b>. Nonaktifkan juga akses pengurusnya? Namanya hilang dari Struktur Kepengurusan dan akunnya tidak bisa membuka menu pengurus.</p>`,
    onSubmit: async () => {
      let ok = true; for (const p of pg) ok = (await put('pengurus', p.id, {...p, aktif: false, nonaktifKarena: 'Pindah', diperbarui: todayISO()})) && ok;
      if (ok) { S.struktur = null; toast('Akses pengurus dinonaktifkan.'); } return ok;
    }});
}
function tawarAktifkanAkun(wid, w) {
  const akun = S.akunWarga.find(a => a.wargaId === wid);
  if (bisaKelola() && (!akun || akun.aktif !== false)) return;
  openDlg({title: 'Aktifkan kembali akun login?', area: 'warga', submitLabel: 'Aktifkan akun',
    body: `<p style="margin:0">${esc(w.nama)} (${esc(w.blok)}) kembali berstatus <b>Aktif</b>. ${bisaKelola() ? 'Akun login warganya masih nonaktif.' : 'Bila rumah ini punya akun login warga, akunnya masih nonaktif sejak ditandai pindah.'} Aktifkan kembali supaya warga bisa masuk dengan No. HP dan password lamanya?</p>`,
    onSubmit: async () => {
      try { const {data, error} = await SB.rpc('aktifkan_akun_warga', {p_warga: wid}); if (error) throw error;
        if (data) { S.akunWarga = S.akunWarga.map(a => a.wargaId === wid ? {...a, aktif: true, nonaktifKarena: undefined} : a); if (bisaKelola()) muatProfil(); toast('Akun login warga aktif kembali.'); }
        else toast('Rumah ini belum punya akun login warga. Buat di Admin → Akun warga.', 'bad');
        return true; }
      catch (e) { pesanDlg('Gagal: ' + pesanAuth(e)); return false; }
    }});
}
async function nonaktifkanAkunPindah(ids) {
  if (!bisaKelola()) return;
  let n = 0;
  for (const id of ids) { const a = S.akunWarga.find(x => x.id === id); if (!a) continue;
    try { if (a.userId) await hapusProfil(a.userId); if (await put('akunWarga', a.id, {...a, aktif: false, nonaktifKarena: 'Pindah', diperbarui: todayISO()})) n++; } catch (e) { toast('Gagal menonaktifkan sebagian akun: ' + pesanAuth(e), 'bad'); break; } }
  if (n) toast(`${n} akun warga pindah dinonaktifkan.`);
}
function openWargaSaya() {
  const w = wargaSaya(); if (!w) return;
  openDlg({
    title: 'Ubah data rumah saya', body: formWarga(w, true), submitLabel: 'Simpan perubahan',
    onSubmit: async d => {
      const nik = String(d.nik || '').replace(/\D/g, '');
      if (nik && nik.length !== 16) { pesanDlg(`NIK harus 16 digit (sekarang ${nik.length} digit), atau kosongkan.`, 'f_nik'); return false; }
      const hpDigit = String(d.noHp || '').replace(/\D/g, '').length;
      if (!hpDigit) { pesanDlg('No. HP wajib diisi karena dipakai untuk login dan WhatsApp.', 'f_hp'); return false; }
      if (hpDigit < 10) { pesanDlg(`No. HP minimal 10 digit (sekarang ${hpDigit} digit).`, 'f_hp'); return false; }
      const ag = agAmbil();
      const tn = ag.find(x => !x.nama); if (tn) { pesanDlg('Nama anggota keluarga belum diisi. Isi namanya, atau hapus baris anggota itu.', tn._namaId); return false; }
      const an = ag.find(x => x.nik && x.nik.length !== 16); if (an) { pesanDlg(`NIK ${an.nama} harus 16 digit (sekarang ${an.nik.length} digit), atau kosongkan.`, an._nikId); return false; }
      const anggota = ag.map(({_nikId, _namaId, ...x}) => x);
      const row = {...w, nama: String(d.nama || '').trim() || w.nama, nik, noHp: String(d.noHp || '').trim(), jk: d.jk === 'P' ? 'P' : 'L', agama: AGAMA_W.includes(d.agama) ? d.agama : '', lahir: d.lahir || '',
        anggota, jumlahJiwa: Math.max(Number(d.jumlahJiwa) || 1, 1 + anggota.length), diperbarui: todayISO(), diubahWarga: todayISO()};
      const ok = await put('warga', w.id, row);
      if (ok) toast('Data rumah Anda tersimpan. Pengurus RT bisa melihat perubahannya.');
      return ok;
    }
  });
}
function openBayar(id, per) {
  const w = wById(id); if (!w) return;
  openDlg({
    title: 'Catat pembayaran iuran', body: formBayar(w, per), submitLabel: 'Simpan pembayaran', area: 'iuran',
    onSubmit: async d => {
      const n = Number(d.bulan) || 1, jumlah = Number(d.jumlah) || 0;
      const paid = new Set(S.iuran.filter(p => p.wargaId === w.id).map(p => p.periode));
      const pers = []; for (let i = 0, p = d.periode; pers.length < n && i < 36; i++, p = addM(p, 1)) if (!paid.has(p)) pers.push(p);
      for (const p of pers) {
        const ok = await put('iuran', `${w.id}_${p}`, {wargaId: w.id, periode: p, jumlah, tanggal: d.tanggal, metode: d.metode, catatan: d.catatan || '', dicatat: todayISO()});
        if (!ok) return false;
      }
      toast(pers.length === 1 ? `Iuran ${perLbl(pers[0])} ${w.nama} tercatat.` : `${pers.length} bulan (${perLbl(pers[0])}–${perLbl(pers[pers.length - 1])}) tercatat untuk ${w.nama}.`);
      return true;
    }
  });
}
/* --- Koreksi pembayaran iuran: Lunas → Belum (laporan & saldo kas ikut berkurang otomatis) --- */
const ALASAN_KOREKSI = ['Salah catat rumah / warga', 'Salah catat bulan', 'Tercatat dua kali', 'Pembayaran batal / uang dikembalikan', 'Nominal salah (akan dicatat ulang)', 'Lainnya'];
function openKoreksiIuran(pid) {
  if (!bisa('iuran')) return;
  const p = S.iuran.find(x => x.id === pid); if (!p) return;
  const w = wById(p.wargaId) || {nama: '?', blok: ''}, jml = Number(p.jumlah) || 0, co = saldoCutoff();
  const sebelumSaldo = co.tanggal && p.tanggal < co.tanggal;
  const lewat = lewatTempo(p.periode);
  openDlg({title: 'Koreksi pembayaran iuran', area: 'iuran', submitLabel: 'Koreksi ke Belum',
    body: `<div class="kw" style="padding:12px 14px"><dl class="kw-d" style="margin:0">
        <dt>Rumah</dt><dd>${esc(w.blok)} · ${esc(w.nama)}</dd><dt>Bulan iuran</dt><dd>${esc(perLbl(p.periode, true))}</dd>
        <dt>Dicatat lunas</dt><dd>${esc(tgl(p.tanggal))} · ${esc(p.metode || 'Tunai')}</dd><dt>Jumlah</dt><dd><b>${esc(rp(jml))}</b></dd></dl></div>
      <div class="notice" style="margin:0;background:var(--warn-soft,#fdf3e1);color:inherit"><b>Dampak koreksi:</b><ul style="margin:6px 0 0;padding-left:18px;line-height:1.55">
        <li>Status iuran ${esc(perLbl(p.periode, true))} rumah ini kembali <b>Belum</b>${lewat ? ' dan masuk <b>tunggakan</b>' : ' (belum jatuh tempo)'}.</li>
        ${sebelumSaldo ? `<li>Tanggal bayar sebelum saldo awal kas (${esc(tgl(co.tanggal))}), jadi buku kas & laporan <b>tidak berubah</b>.</li>`
          : `<li>Pemasukan "Iuran warga" tanggal ${esc(tgl(p.tanggal))} di <b>Kas RT</b> dan <b>Laporan keuangan ${esc(perLbl(p.tanggal.slice(0, 7), true))}</b> berkurang <b>${esc(rp(jml))}</b>.</li>
             <li>Saldo kas berkurang ${esc(rp(jml))}.</li>`}
        <li>Kwitansi pembayaran ini tidak berlaku lagi.</li></ul></div>
      <div class="fld"><label for="ko_a">Alasan koreksi <span class="req">*</span></label><select id="ko_a" name="alasan" required><option value="">— pilih alasan —</option>${ALASAN_KOREKSI.map(a => `<option>${esc(a)}</option>`).join('')}</select></div>
      <div class="fld"><label for="ko_c">Keterangan</label><input type="text" id="ko_c" name="catatan" maxlength="200" placeholder="mis. seharusnya untuk SB1/03, bukan SB1/02"></div>
      ${w.noHp && waNomor(w.noHp).length >= 10 ? '<label class="ck" style="font-weight:500"><input type="checkbox" name="kabari"> Beri tahu warga lewat WhatsApp setelah koreksi</label>' : ''}
      <label class="ck" style="font-weight:500;align-items:flex-start"><input type="checkbox" name="paham" required> <span>Saya paham status pembayaran dan laporan keuangan akan berubah.</span></label>`,
    onSubmit: async d => {
      if (!d.alasan) { pesanDlg('Pilih alasan koreksi.', 'ko_a'); return false; }
      if (!d.paham) { pesanDlg('Centang pernyataan bahwa Anda paham dampak koreksi.'); return false; }
      if (d.alasan === 'Lainnya' && !String(d.catatan || '').trim()) { pesanDlg('Isi keterangan untuk alasan "Lainnya".', 'ko_c'); return false; }
      const jejak = {...p, koreksi: {alasan: d.alasan, catatan: String(d.catatan || '').trim(), oleh: namaSesi(), waktu: nowDT()}};
      if (!await put('iuran', pid, jejak)) return false;          // jejak alasan ikut tersimpan di Log aktivitas saat dihapus
      const ok = await del('iuran', pid); if (!ok) return false;
      toast(`Pembayaran ${perLbl(p.periode)} ${w.blok} dikoreksi menjadi Belum. Laporan keuangan diperbarui.`);
      if (d.kabari) setTimeout(() => openDlg({title: 'Beri tahu warga', submitLabel: 'Tutup', onSubmit: async () => true,
        body: `<p style="margin:0">Kirim pemberitahuan koreksi ke ${esc(w.nama)} (${esc(w.blok)}).</p>
          <a class="btn wa" style="justify-self:start" href="${esc(waLink(w.noHp, `Yth. Bapak/Ibu ${w.nama} (${w.blok}),\n\nKami informasikan ada koreksi pencatatan iuran ${perLbl(p.periode, true)} sebesar ${rp(jml)} (dicatat ${tgl(p.tanggal)}). Status iuran bulan tersebut kami kembalikan menjadi belum dibayar.\nAlasan: ${d.alasan}${d.catatan ? ' — ' + d.catatan : ''}.\n\nMohon maaf atas ketidaknyamanannya. Bila ada pertanyaan, silakan hubungi bendahara.\n\n${pengirim()}`))}" target="_blank" rel="noopener">Kirim ke WhatsApp</a>`}), 120);
      return true;
    }});
}
function openBayarDel(pid) {
  const p = S.iuran.find(x => x.id === pid); if (!p) return;
  const w = wById(p.wargaId) || {nama: '?', blok: ''};
  openDlg({
    title: 'Batalkan pembayaran?',
    body: `<p style="margin:0">Pembayaran <b>${esc(perLbl(p.periode, true))}</b> dari <b>${esc(w.blok)} · ${esc(w.nama)}</b> sebesar ${esc(rp(p.jumlah))} (${esc(tgl(p.tanggal))}) akan dihapus dan bulan ini kembali tercatat belum bayar.</p>`,
    submitLabel: 'Ya, batalkan', area: 'iuran',
    onSubmit: async () => { const ok = await del('iuran', pid); if (ok) toast('Pembayaran dibatalkan.'); return ok; }
  });
}
function openKel(id) {
  const k = id ? S.keluhan.find(x => x.id === id) : null;
  openDlg({
    title: k ? 'Ubah & tanggapi keluhan' : 'Catat keluhan', body: formKel(k), area: 'keluhan',
    onSubmit: async d => {
      const row = {...(k || {}), ...d, judul: d.judul.trim(), diperbarui: todayISO()};
      if (!k) { row.dibuat = todayISO(); row.status = 'Baru'; }
      const ok = await put('keluhan', k ? k.id : uid(), row);
      if (ok) toast(k ? 'Keluhan diperbarui.' : 'Keluhan dicatat.');
      return ok;
    },
    onDelete: k ? async () => { const ok = await del('keluhan', k.id); if (ok) { if (Array.isArray(k.foto) && k.foto.length && SB) SB.storage.from('keluhan').remove(k.foto).catch(() => {}); toast('Keluhan dihapus.'); } return ok; } : null,
    deleteLabel: 'Hapus keluhan'
  });
}

document.addEventListener('click', async e => {
  const b = e.target.closest('[data-act]'); if (!b || b.disabled) return;
  const a = b.dataset.act;
  if (b.tagName === 'SELECT') return;
  if (a === 'tab') { e.preventDefault(); if (!tabBoleh(b.dataset.k)) return; if (dlg.open) dlg.close(); S.tab = b.dataset.k; if (S.tab === 'struktur') muatStruktur(true); render(); window.scrollTo(0, 0); }
  else if (a === 'lainnya') openLainnya();
  else if (a === 'kwitansi') openKwitansi(b.dataset.id);
  else if (a === 'salin') salin(b.dataset.teks || '');
  else if (a === 'kper') { const n = Number(b.dataset.n); S.kasPer = n === 0 ? nowPer() : addM(S.kasPer, n); render(); }
  else if (a === 'kas-new') openKas();
  else if (a === 'pg-new') openKas(null, 'pengeluaran');
  else if (a === 'pg-edit') openKas(b.dataset.id, 'pengeluaran');
  else if (a === 'pgmode') { S.pgMode = b.dataset.k; render(); }
  else if (a === 'pgnav') { const n = Number(b.dataset.n); if (S.pgMode === 'tahun') S.pgTh += n; else S.pgPer = addM(S.pgPer, n); render(); }
  else if (a === 'pgkat') { S.pgKat = S.pgKat === b.dataset.k ? '' : b.dataset.k; render(); }
  else if (a === 'pg-csv') eksporPengeluaran();
  else if (a === 'kmtab') { S.kmTab = b.dataset.k; if (S.tab !== 'keamanan') S.tab = 'keamanan'; render(); }
  else if (a === 'tamuf') { S.tamuF = b.dataset.k; render(); }
  else if (a === 'paketf') { S.paketF = b.dataset.k; render(); }
  else if (a === 'tamu-new') openTamu();
  else if (a === 'tamu-edit') openTamu(b.dataset.id);
  else if (a === 'tamu-keluar') { const t = S.tamu.find(x => x.id === b.dataset.id); if (t) { b.disabled = true; if (await put('tamu', t.id, {...t, keluar: nowDT()})) toast(`${t.nama} tercatat keluar.`); } }
  else if (a === 'paket-new') openPaket();
  else if (a === 'paket-edit') openPaket(b.dataset.id);
  else if (a === 'paket-ambil') openPaketAmbil(b.dataset.id);
  else if (a === 'titip-new') { if (!isSatpam()) openTitip(false); }
  else if (a === 'titip-warga') openTitip(true);
  else if (a === 'titip-cek') openTitipCek(b.dataset.id);
  else if (a === 'titip-selesai') { const t = S.titip.find(x => x.id === b.dataset.id); if (t && await put('titip', t.id, {...t, status: 'Selesai', selesai: nowDT()})) toast('Titip rumah selesai.'); }
  else if (a === 'kej-new') openKejadian();
  else if (a === 'kej-edit') openKejadian(b.dataset.id);
  else if (a === 'jaga-nav') { const d = new Date(S.kmMinggu + 'T00:00'); d.setDate(d.getDate() + Number(b.dataset.n)); S.kmMinggu = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); render(); }
  else if (a === 'jaga-edit') openJaga(b.dataset.k);
  else if (a === 'jaga-salin') { b.disabled = true; await salinJaga(); }
  else if (a === 'nomor-new') openNomor();
  else if (a === 'nomor-edit') openNomor(b.dataset.id);
  else if (a === 'sos-new') openSos();
  else if (a === 'sos-tangani') openSosTangani(b.dataset.id);
  else if (a === 'sos-impor') { b.disabled = true; let n = 0; for (const x of sosTanpaKejadian()) if (await sosKeKejadian(x)) n++; toast(`${n} panggilan SOS dicatat ke Kejadian.`); }
  else if (a === 'sos-batal') { const x = S.darurat.find(d => d.id === b.dataset.id); if (x && await put('darurat', x.id, {...x, status: 'Dibatalkan', ditangani: {oleh: namaSesi(), waktu: nowDT(), catatan: 'Dibatalkan warga'}})) toast('Panggilan darurat dibatalkan.'); }
  else if (a === 'km-csv') ekspKm(b.dataset.k);
  else if (a === 'lapmode') { S.lapMode = b.dataset.k; if (S.lapMode === 'rentang' && !S.lapDari) { S.lapDari = nowPer() + '-01'; S.lapSampai = todayISO(); } render(); }
  else if (a === 'lapnav') { const n = Number(b.dataset.n); if (S.lapMode === 'bulan') S.lapPer = addM(S.lapPer, n); else S.lapTh += n; render(); }
  else if (a === 'lapq') { S.lapQ = Number(b.dataset.k); render(); }
  else if (a === 'lap-dl') unduhLaporan(b);
  else if (a === 'lap-csv') csvLaporan();
  else if (a === 'papan-buka') bukaPapan();
  else if (a === 'impor-warga') openImporWarga();
  else if (a === 'pjf') { S.pjFilter = b.dataset.k; render(); }
  else if (a === 'lp-fav') { e.stopPropagation(); const f = lpFav(), on = !f.has(b.dataset.id); on ? f.add(b.dataset.id) : f.delete(b.dataset.id); lpFavSet(f); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); if (S.lpTab === 'favorit') render(); else { const t = document.querySelector('[data-act=lp-tab][data-k=favorit]'); if (t) t.textContent = 'Favorit ' + S.lapak.filter(x => f.has(x.id) && lpTampilUmum(x)).length; } }
  else if (a === 'pk-foto-del') { if (pkFotoKerja && !pkFotoKerja.load) { pkFotoKerja.url = ''; renderFoto(pkFotoKerja); } }
  else if (a === 'pg-foto-del') { if (pgFotoKerja && !pgFotoKerja.load) { pgFotoKerja.url = ''; pgRenderFoto(); } }
  else if (a === 'brtab') { S.brTab = b.dataset.k; render(); }
  else if (a === 'br-lapor') openLapor('Kebersihan & sampah');
  else if (a === 'br-jadwal') openBrJadwal();
  else if (a === 'br-jrow-add') { const box = $('#brJrows'), n = Date.now() % 100000; box.insertAdjacentHTML('beforeend', window.__brBaris({jenis: JENIS_SAMPAH[1][0], hari: [], jam: '07:00'}, n)); }
  else if (a === 'br-jrow-del') { const r = b.closest('.br-jrow'); if (r) r.remove(); }
  else if (a === 'br-kgf') { S.brKgF = b.dataset.k; render(); }
  else if (a === 'br-kg-new') openBrKegiatan();
  else if (a === 'br-kg-edit') openBrKegiatan(b.dataset.id);
  else if (a === 'br-hadir') openBrHadir(b.dataset.id);
  else if (a === 'br-hadir-semua') { const cs = [...document.querySelectorAll('.br-hadir input')], all = cs.every(c => c.checked); cs.forEach(c => { c.checked = !all; }); const n = $('#brHadirN'); if (n) n.textContent = `${all ? 0 : cs.length} dari ${cs.length} KK`; }
  else if (a === 'br-umum') { const k = S.bersih.find(x => x.id === b.dataset.id); if (k) await brUmumkan(k); }
  else if (a === 'br-tgl') { const n = Number(b.dataset.n); if (n === 0) S.brTgl = todayISO(); else { const d = new Date(S.brTgl + 'T00:00'); d.setDate(d.getDate() + n); S.brTgl = isoHari(d); } render(); }
  else if (a === 'br-tgl-ke') { S.brTgl = b.dataset.k; render(); window.scrollTo(0, 0); }
  else if (a === 'br-cek') openBrCek();
  else if (a === 'br-tanggap') openBrTanggap(b.dataset.id);
  else if (a === 'iur-pdf') { b.disabled = true; try { const sf = S.iurFilter || 'semua'; unduh(fname(`Iuran Warga ${perLbl(S.per, true)}${sf !== 'semua' ? ' - ' + (sf === 'belum' ? 'Belum bayar' : 'Lunas') : ''}.pdf`), new Blob([await pdfIuranBulan(S.per, sf)], {type: 'application/pdf'})); } catch (err) { toast('PDF gagal dibuat.', 'bad'); } b.disabled = false; }
  else if (a === 'org-atur') openStrukturAtur();
  else if (a === 'org-kelola') { S.tab = 'admin'; S.admTab = 'pengurus'; render(); window.scrollTo(0, 0); }
  else if (a === 'org-muat') muatStruktur(true);
  else if (a === 'org-pdf') { try { const by = await pdfStruktur(); if (by) unduh(fname(`Struktur Kepengurusan ${strukturNama(S.struktur || {})}.pdf`), new Blob([by], {type: 'application/pdf'})); } catch (err) { toast('PDF gagal dibuat.', 'bad'); } }
  else if (a === 'gjtab') { S.gjTab = b.dataset.k; render(); }
  else if (a === 'gjper') { const n = Number(b.dataset.n); S.gjPer = n === 0 ? nowPer() : addM(S.gjPer, n); render(); }
  else if (a === 'gjth') { S.gjTh += Number(b.dataset.n); render(); }
  else if (a === 'pk-new') openPekerja();
  else if (a === 'pk-edit') openPekerja(b.dataset.id);
  else if (a === 'gj-buat') gjBuatSlip();
  else if (a === 'gj-slip') openSlip(b.dataset.id);
  else if (a === 'gj-bayar') openBayarGaji([b.dataset.id]);
  else if (a === 'gj-bayar-semua') openBayarGaji(gjBulan(S.gjPer).filter(g => g.status !== 'Dibayar').map(g => g.id));
  else if (a === 'gj-batal-bayar') gjBatalBayar(b);
  else if (a === 'gj-pdf') unduhSlip(b.dataset.id);
  else if (a === 'gj-xlsx') { try { unduh(fname(`Rekap Gaji ${perLbl(S.gjPer, true)} - ${lingk()}.xlsx`), xlsxGaji(S.gjPer)); } catch (err) { toast('File Excel gagal dibuat.', 'bad'); } }
  else if (a === 'gj-xlsx-th') { try { unduh(fname(`Rekap Gaji ${S.gjTh} - ${lingk()}.xlsx`), xlsxGaji(null, S.gjTh)); } catch (err) { toast('File Excel gagal dibuat.', 'bad'); } }
  else if (a === 'gj-row-add') { const box = $(b.dataset.k); if (box) { box.insertAdjacentHTML('beforeend', gjItemRow({nama: b.dataset.n || ''}, b.dataset.k === '#gjPot' ? 'pot' : 'pen')); const r = box.querySelectorAll('.gj-row'), last = r[r.length - 1]; const f = last.querySelector(b.dataset.n ? '.gj-j' : '.gj-l'); if (f) f.focus(); gjHitungForm(); } }
  else if (a === 'gj-row-del') { const r = b.closest('.gj-row'); if (r) { r.remove(); gjHitungForm(); } }
  else if (a === 'mfa-on') openMfaDaftar();
  else if (a === 'mfa-off') openMfaMatikan();
  else if (a === 'mfa-batal') { try { await SB.auth.signOut(); } catch (err) {} resetSesi(); render(); }
  else if (a === 'push-on') pushAktifkan(b);
  else if (a === 'push-off') pushMatikan(b);
  else if (a === 'push-tes') pushTes(b);
  else if (a === 'peta-muat') { try { localStorage.setItem('peta-muat', '1'); } catch (err) {} render(); }
  else if (a === 'lp-buka') openLapakDetail(b.dataset.id);
  else if (a === 'lp-new') { if (!isWarga()) toast('Pengurus RT dan admin tidak diperbolehkan berjualan di Lapak Warga.', 'bad'); else if (lpBolehJual()) openLapak(); else openLapakIzin(); }
  else if (a === 'lp-izin-buka') { S.tab = 'lapak'; S.lpTab = 'izin'; render(); window.scrollTo(0, 0); }
  else if (a === 'lp-izin-ya') { const w = wById(b.dataset.id); if (w && bolehIzinLapak()) { b.disabled = true; if (await lpIzinSimpan(w, true)) toast(`${w.nama} sekarang boleh berjualan di Lapak Warga.`); } }
  else if (a === 'lp-izin-tolak') openLapakTolak(b.dataset.id);
  else if (a === 'lp-izin-cabut') { const w = wById(b.dataset.id); if (w && bolehIzinLapak()) { if (!b.dataset.confirm) { b.dataset.confirm = '1'; b.textContent = 'Klik lagi untuk mencabut'; return; } b.disabled = true; if (await lpIzinSimpan(w, false)) toast(`Izin berjualan ${w.nama} dicabut.`); } }
  else if (a === 'lp-ubah') openLapak(b.dataset.id);
  else if (a === 'lp-tab') { S.lpTab = b.dataset.k; render(); }
  else if (a === 'lp-kat') { S.lpKat = b.dataset.k; render(); }
  else if (a === 'lp-foto') { const u = $('#lpUtama'); if (u) u.innerHTML = `<img src="${esc(b.dataset.src)}" alt="">`; document.querySelectorAll('.lp-thumbs button').forEach(t => t.setAttribute('aria-pressed', t === b)); }
  else if (a === 'lp-foto-del') { if (lpFotoKerja) { lpFotoKerja.list.splice(Number(b.dataset.i), 1); lpRenderFoto(); } }
  else if (a === 'lp-status') { const x = S.lapak.find(l => l.id === b.dataset.id); if (x) { b.disabled = true; const ok = await put('lapak', x.id, {...x, status: b.dataset.k, terjualPada: b.dataset.k === 'Terjual' ? new Date().toISOString() : x.terjualPada || '', diperbarui: new Date().toISOString()}); if (ok) { toast(b.dataset.k === 'Terjual' ? 'Selamat, sudah laku! 🎉' : b.dataset.k === 'Habis' ? 'Ditandai stok habis.' : 'Lapak tersedia lagi.'); openLapakDetail(x.id); } } }
  else if (a === 'lp-panjang') { const x = S.lapak.find(l => l.id === b.dataset.id); if (x) { const d = new Date(); d.setDate(d.getDate() + LP_HARI); b.disabled = true; const ok = await put('lapak', x.id, {...x, berlaku: isoD(d), diperbarui: new Date().toISOString()}); if (ok) { toast('Lapak diperpanjang sampai ' + tgl(isoD(d)) + '.'); openLapakDetail(x.id); } } }
  else if (a === 'lp-sembunyi') openLapakSembunyi(b.dataset.id);
  else if (a === 'lp-tampil') { const x = S.lapak.find(l => l.id === b.dataset.id); if (x && lpModerator()) { b.disabled = true; const ok = await put('lapak', x.id, {...x, status: x.statusSebelum && x.statusSebelum !== 'Disembunyikan' ? x.statusSebelum : 'Tersedia', moderasi: null}); if (ok) { toast('Lapak ditampilkan lagi.'); dlg.close(); } } }
  else if (a === 'rht') { if (S.tab !== 'rohani') { if (!tabBoleh('rohani')) return; S.tab = 'rohani'; } S.rhTab = b.dataset.k; render(); }
  else if (a === 'rhaf') { S.rhAgF = b.dataset.k; render(); }
  else if (a === 'rh-ag') openRhAgenda(b.dataset.id);
  else if (a === 'rh-duka') openRhDuka(b.dataset.id);
  else if (a === 'rh-set') openRhSet();
  else if (a === 'rh-umum') { const x = S.rohani.find(r => r.id === b.dataset.id); if (x) { b.disabled = true; await rhUmumkan(x, b.dataset.t); } }
  else if (a === 'rh-umum-duka') { const x = S.rohani.find(r => r.id === b.dataset.id); if (x) { b.disabled = true; await rhUmumkanDuka(x); } }
  else if (a === 'rh-santun') { const x = S.rohani.find(r => r.id === b.dataset.id); if (x) { openSbProgram(null, 'Duka cita / santunan'); const n = $('#sbp_n'); if (n) { n.value = 'Santunan duka cita ' + (x.agama === 'Islam' ? 'alm. ' : '') + x.nama; n.dataset.ubah = '1'; } const dd = $('#sbp_d'); if (dd) dd.value = `Santunan untuk keluarga ${x.nama}${x.hubungan ? ' (' + x.hubungan + ')' : ''}.`; } }
  else if (a === 'qbth') { S.qbTh += Number(b.dataset.n); render(); }
  else if (a === 'qb-set') openQbSet();
  else if (a === 'qb-new') openQbPeserta();
  else if (a === 'qb-edit') openQbPeserta(b.dataset.id);
  else if (a === 'qb-xlsx') { try { unduh(fname(`Peserta Qurban ${S.qbTh} - ${lingk()}.xlsx`), xlsxQurban(S.qbTh)); } catch (err) { toast('File Excel gagal dibuat.', 'bad'); } }
  else if (a === 'sb-new') openSbProgram(null, b.dataset.j);
  else if (a === 'sb-buka') { if (!tabBoleh('sumbangan')) return; if (dlg.open) dlg.close(); const pindah = S.tab !== 'sumbangan' || S.sbSel !== b.dataset.id; S.tab = 'sumbangan'; S.sbSel = b.dataset.id; if (pindah) { S.sbTab = 'penyumbang'; S.sbQ = ''; } render(); window.scrollTo(0, 0); }
  else if (a === 'sb-kembali') { S.sbSel = null; render(); window.scrollTo(0, 0); }
  else if (a === 'sbf') { S.sbFilter = b.dataset.k; render(); }
  else if (a === 'sbt') { S.sbTab = b.dataset.k; render(); if (S.sbTab === 'keliling') sbMzBar(); }
  else if (a === 'sb-ubah') openSbProgram(b.dataset.id);
  else if (a === 'sb-catat') openSbDonasi(S.sbSel, null, b.dataset.w || '');
  else if (a === 'sb-don') openSbDonasi(S.sbSel, b.dataset.id);
  else if (a === 'sb-salur') openSbSalur(S.sbSel, b.dataset.id);
  else if (a === 'sb-verif') openSbVerif(b.dataset.id);
  else if (a === 'sb-tolak') openSbTolak(b.dataset.id);
  else if (a === 'sb-xlsx') eksporSumbangan(b.dataset.id);
  else if (a === 'sb-tutup') sbTutup(b);
  else if (a === 'sbm-semua') { const p = sbProg(S.sbSel); if (!p) return; const z = sbMzState(p), q = z.q.trim().toLowerCase(), h = sbHitung(p); const L = wargaAktif().filter(w => !h.rumah.has(w.id) && (!q || (w.blok + ' ' + w.nama).toLowerCase().includes(q))); const all = L.every(w => z.sel.has(w.id)); L.forEach(w => all ? z.sel.delete(w.id) : z.sel.add(w.id)); render(); sbMzBar(); }
  else if (a === 'sbm-reset') { S.sbMz = null; render(); sbMzBar(); }
  else if (a === 'sbm-simpan') sbMzSimpan();
  else if (a === 'sbw-konf') openSbKonfirmasi(b.dataset.id);
  else if (a === 'sbw-muat') { S.sbPub = null; render(); }
  else if (a === 'pji-add') { $('#pjItems').insertAdjacentHTML('beforeend', pjiRow()); pjiHitung(); const r = document.querySelectorAll('#pjItems .pji-n'); r[r.length - 1].focus(); }
  else if (a === 'pji-del') { const r = b.closest('.pji-row'); if (r && document.querySelectorAll('#pjItems .pji-row').length > 1) { r.remove(); pjiHitung(); } }
  else if (a === 'pj-new') openPengajuan();
  else if (a === 'pj-ubah') openPengajuan(b.dataset.id);
  else if (a === 'pj-catat') openPjCatat(b.dataset.id);
  else if (a === 'pj-tolak') openPjTolak(b.dataset.id);
  else if (a === 'pj-batal') { const x = S.pengajuan.find(p => p.id === b.dataset.id); if (x && x.status === 'Menunggu') { b.disabled = true; if (await put('pengajuan', x.id, {...x, status: 'Dibatalkan'})) toast('Pengajuan dibatalkan.'); } }
  else if (a === 'saldo-cutoff') openSaldoCutoff();
  else if (a === 'kas-edit') openKas(b.dataset.id);
  else if (a === 'kas-csv') ekspor('kas', S.kasPer);
  else if (a === 'info-new') openInfo();
  else if (a === 'info-edit') openInfo(b.dataset.id);
  else if (a === 'inff') { S.infoFilter = b.dataset.k; render(); }
  else if (a === 'surat-new') openSuratBaru();
  else if (a === 'nt-new') openNotulen();
  else if (a === 'nt-edit') openNotulen(b.dataset.id);
  else if (a === 'nt-lihat') openNotulenLihat(b.dataset.id);
  else if (a === 'nt-unduh') unduhNotulen(b.dataset.id);
  else if (a === 'surat-view') openSuratLihat(b.dataset.id);
  else if (a === 'surat-dl') unduhSurat(b.dataset.id);
  else if (a === 'ekspor') ekspor(b.dataset.k);
  else if (a === 'dlg-close') dlg.close();
  else if (a === 'dlg-del') {
    const wrap = $('#delWrap');
    if (!wrap.dataset.confirm) { wrap.dataset.confirm = '1'; wrap.innerHTML = `<span style="font-size:.85rem">Yakin?</span> <button type="button" class="btn danger sm" data-act="dlg-del">Ya, hapus</button>`; return; }
    if (dlgDelete) { b.disabled = true; const ok = await dlgDelete(); if (ok !== false) dlg.close(); }
  }
  else if (a === 'pilih-user') { S.pilih = S.pilih === b.dataset.id ? null : b.dataset.id; S.pinGagal = 0; render(); const f = $('#pinMasuk') || $('#loginForm button'); if (f) f.focus(); }
  else if (a === 'keluar') { b.disabled = true; try { if (pushSub) { const ep = pushSub.endpoint; await pushSub.unsubscribe(); await SB.rpc('push_lepas', {p_endpoint: ep}); pushSub = null; } } catch (err) {} await onlineKeluar(); try { await SB.auth.signOut(); } catch (err) {} resetSesi(); S.loginError = ''; render(); window.scrollTo(0, 0); muatInfoPublik(); }
  else if (a === 'pin-pemilik') openPinPemilik();
  else if (a === 'pemilik-hp') openPemilikHp();
  else if (a === 'loginmode') { S.loginMode = b.dataset.k; S.pilih = null; S.pinGagal = 0; render(); const f = $(S.loginMode === 'warga' ? '#wUser' : '.user-opt'); if (f) f.focus(); }
  else if (a === 'lihat-pass') { const i = $('#' + (b.dataset.for || 'wPass')); if (i) { const lihat = i.type === 'password'; i.type = lihat ? 'text' : 'password'; b.innerHTML = lihat ? MATA_TUTUP : MATA_BUKA; b.setAttribute('aria-pressed', String(lihat));
    const lbl = lihat ? 'Sembunyikan password' : 'Tampilkan password'; b.setAttribute('aria-label', lbl); b.title = lbl; if (bhsAktif()) terjemahNode(b); i.focus({preventScroll: true}); } }
  else if (a === 'akun-new') openAkun();
  else if (a === 'akun-edit') openAkun(b.dataset.id);
  else if (a === 'akun-acak') { const i = $('#ak_p') || $('#ak_pr'); if (i) i.value = passAcak(); }
  else if (a === 'lupa-hp') { S.lupaInfoHp = true; render(); }
  else if (a === 'lupa-hp-tutup') { S.lupaInfoHp = false; render(); }
  else if (a === 'lupa-pass') { S.lupaInfoHp = false; S.lEmailDraft = String(($('#lEmail') || {}).value || '').trim(); S.lupa = true; S.lupaTerkirim = ''; render(); const f = $('#lupaEmail'); if (f) f.focus(); }
  else if (a === 'ganti-pass') openKeamananAkun();
  else if (a === 'on-muat') muatOnline();
  else if (a === 'on-kill') openKillSesi(b.dataset.u, b.dataset.p, b.dataset.n, b.dataset.d);
  else if (a === 'on-f') { S.onFilter = b.dataset.k; render(); }
  else if (a === 'jt-atur') openJatuhTempo();
  else if (a === 'idle-tetap') { idleAkhir = Date.now(); idleWarn(0); }
  else if (a === 'idle-keluar') idleLogout(true);
  else if (a === 'akun-pindah-off') { b.disabled = true; await nonaktifkanAkunPindah(String(b.dataset.id || '').split(',').filter(Boolean)); }
  else if (a === 'bhs') gantiBahasa(b.dataset.k);
  else if (a === 'blok-atur') openBlok(b.dataset.id);
  else if (a === 'blok-new') openBlok();
  else if (a === 'blok-tanpa') { S.tab = 'warga'; S.fBlok = '-'; S.q = ''; render(); window.scrollTo(0, 0); }
  else if (a === 'mode-ke') gantiMode(b.dataset.k === 'warga');
  else if (a === 'mode-kenal') { try { localStorage.setItem(modeKey() + ':kenal', '1'); } catch (err) {} render(); }
  else if (a === 'pemilik-rumah') openPemilikRumah();
  else if (a === 'ka-pass') { dlg.close(); setTimeout(openGantiPass, 50); }
  else if (a === 'ka-bio-on') { if (S.terkunci) return; b.disabled = true; await aktifkanBio(); }
  else if (a === 'ka-bio-off') { if (S.terkunci) return; kunciSimpan({...kunciCfg(), bio: null}); toast('Sidik jari / wajah dimatikan.'); openKeamananAkun(); }
  else if (a === 'ka-pin') { if (S.terkunci) return; dlg.close(); setTimeout(openAturPin, 50); }
  else if (a === 'ka-pin-off') { if (S.terkunci) return; kunciSimpan({...kunciCfg(), pin: null}); toast('PIN aplikasi dihapus.'); openKeamananAkun(); }
  else if (a === 'ka-kunci') { dlg.close(); kunciSekarang(); }
  else if (a === 'kunci-bio') { b.disabled = true; await bukaBio(); b.disabled = false; }
  else if (a === 'kunci-pw') { try { await SB.auth.signOut(); } catch (err) {} resetSesi(); render(); muatInfoPublik(); }
  else if (a === 'kunci-tawar') { dlgTutupTawar(); openKeamananAkun(); }
  else if (a === 'kunci-tawar-x') { dlgTutupTawar(); render(); }
  else if (a === 'pwa-pasang') pwaPasang();
  else if (a === 'pwa-tutup') { try { localStorage.setItem(pwaTutupKey, String(Date.now() + 7 * 864e5)); } catch (err) {} const el = document.getElementById('pwaBar'); if (el) el.remove(); }
  else if (a === 'lupa-tutup') { S.lupa = false; S.lupaTerkirim = ''; S.lupaInfo = ''; render(); }
  else if (a === 'pulih-batal') { S.pulih = false; try { await SB.auth.signOut(); } catch (err) {} resetSesi(); render(); }
  else if (a === 'pg-acak2') { const i = $('#pg_reset'); if (i) i.value = passAcak(); }
  else if (a === 'pk-acak') { const i = $('#' + b.dataset.k); if (i) i.value = passAcak(); }
  else if (a === 'pg-acak') { const i = $('#pg_pass'); if (i) i.value = passAcak(); }
  else if (a === 'lapor-new') openLapor();
  else if (a === 'rumah-ubah') openWargaSaya();
  else if (a === 'tema') { setTema(b.dataset.k); render(); toast('Tampilan: ' + ({otomatis: 'mengikuti perangkat', terang: 'terang', gelap: 'gelap'})[b.dataset.k] + '.'); }
  else if (a === 'tema-tukar') { setTema(temaGelapAktif() ? 'terang' : 'gelap'); render(); }
  else if (a === 'nik-lihat') { const i = Number(b.dataset.i); S.nikBuka.has(i) ? S.nikBuka.delete(i) : S.nikBuka.add(i); render(); }
  else if (a === 'minta') {
    b.disabled = true;
    try { await DB.collection('permintaan').doc(S.me.id).set({pesan: String(($('#mintaPesan') || {}).value || '').trim().slice(0, 200), diminta: todayISO()}); toast('Permintaan akses terkirim.'); }
    catch (err) { b.disabled = false; toast('Permintaan gagal dikirim. Pastikan halaman ini dibagikan ke Anda dengan akses Contributor.', 'bad'); }
  }
  else if (a === 'minta-batal') { try { await DB.collection('permintaan').doc(S.me.id).delete(); } catch (err) { fail(err); } }
  else if (a === 'admtab') { S.admTab = b.dataset.k; if (b.dataset.k === 'log') S.logAkt = null; render(); }
  else if (a === 'log-muat') muatLog();
  else if (a === 'pgr-new') openPengurus();
  else if (a === 'pgr-edit') openPengurus(b.dataset.id);
  else if (a === 'role-new') openRole();
  else if (a === 'role-edit') openRole(b.dataset.id);
  else if (a === 'migrasi') { b.disabled = true; await migrasiAkses(); }
  else if (a === 'minta-proses') { const id = b.dataset.id, r = S.minta.find(m => m.id === id) || {}; openPengurus(null, {nama: nama(id) === 'Pengguna tanpa nama' ? '' : nama(id), jabatan: r.pesan || '', userId: id}); }
  else if (a === 'tolak') { b.disabled = true; try { await DB.collection('permintaan').doc(b.dataset.id).delete(); toast('Permintaan ditolak.'); } catch (err) { b.disabled = false; fail(err); } }
  else if (a === 'pg-pilih') { $('#pg_uid').value = b.dataset.id; if (!$('#pg_nama').value.trim()) $('#pg_nama').value = nama(b.dataset.id); $('#pgAkun').innerHTML = akunBox(b.dataset.id); }
  else if (a === 'pg-lepas') { $('#pg_uid').value = ''; $('#pgAkun').innerHTML = akunBox(''); const c = $('#pgCari'); if (c) c.focus(); }
  else if (a === 'ag-add') {
    $('#agList').insertAdjacentHTML('beforeend', agRow());
    agRefresh(true);
    const rows = document.querySelectorAll('#agList .ag-row'), last = rows[rows.length - 1];
    last.querySelector('.ag-nama').focus(); last.scrollIntoView({block: 'nearest', behavior: 'smooth'});
  }
  else if (a === 'ag-del') { b.closest('.ag-row').remove(); agRefresh(true); }
  else if (a === 'warga-new') openWarga();
  else if (a === 'warga-edit') openWarga(b.dataset.id);
  else if (a === 'bayar') openBayar(b.dataset.id, b.dataset.per);
  else if (a === 'iur-koreksi') openKoreksiIuran(b.dataset.id);
  else if (a === 'bayar-del') openBayarDel(b.dataset.id);
  else if (a === 'per') { const n = Number(b.dataset.n); S.per = n === 0 ? nowPer() : addM(S.per, n); render(); }
  else if (a === 'iurf') { S.iurFilter = b.dataset.k; render(); }
  else if (a === 'iurmode') { S.iurMode = b.dataset.k; render(); if (S.iurMode === 'massal') mzUpdBar(); }
  else if (a === 'mz-semua') { const z = mzState(), pm = paidMap(S.per), belum = S.warga.filter(w => wajib(w, S.per) && !pm.has(w.id)); const all = belum.length && belum.every(w => z.sel.has(w.id)); belum.forEach(w => all ? z.sel.delete(w.id) : z.sel.add(w.id)); render(); mzUpdBar(); }
  else if (a === 'mz-lalu') mzAmbilLalu();
  else if (a === 'mz-reset') { S.mz = null; render(); mzUpdBar(); }
  else if (a === 'mz-simpan') mzSimpan();
  else if (a === 'kelf') { S.kelFilter = b.dataset.k; render(); }
  else if (a === 'kel-new') { if (!isSatpam()) openKel(); }
  else if (a === 'kel-edit') openKel(b.dataset.id);
  else if (a === 'kel-st') {
    const k = S.keluhan.find(x => x.id === b.dataset.id); if (!k) return;
    b.disabled = true;
    const ok = await put('keluhan', k.id, {...k, status: b.dataset.s, diperbarui: todayISO()});
    if (ok) toast(`"${k.judul}" → ${b.dataset.s}.`);
  }
  else if (a === 'sample-load') { b.disabled = true; await loadSample(); }
  else if (a === 'sample-del') {
    if (!b.dataset.confirm) { b.dataset.confirm = '1'; b.textContent = 'Klik lagi untuk menghapus'; return; }
    b.disabled = true; await delSample();
  }
});
document.addEventListener('input', e => {
  const sbm = e.target.dataset && e.target.dataset.sbm;
  if (sbm && S.sbMz) {
    const z = S.sbMz, id = e.target.dataset.id;
    if (sbm === 'jml') { z.jml[id] = e.target.value; if (!z.sel.has(id) && e.target.value !== '') { z.sel.add(id); const r = e.target.closest('[data-row]'); if (r) { r.classList.add('pick'); const c = r.querySelector('[data-sbm=sel]'); if (c) c.checked = true; } } sbMzBar(); }
    if (sbm === 'q') { z.q = e.target.value; render(); sbMzBar(); const el = $('#sbmQ'); if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); } }
    return;
  }
  if (e.target.id === 'qLapak') { S.lpQ = e.target.value; render(); const el = $('#qLapak'); if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); } return; }
  if (e.target.id === 'qSb') { S.sbQ = e.target.value; render(); const el = $('#qSb'); if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); } return; }
  const mz = e.target.dataset && e.target.dataset.mz;
  if (mz) {
    const z = mzState(), id = e.target.dataset.id;
    if (mz === 'jml') { z.jml[id] = e.target.value; if (!z.sel.has(id) && e.target.value !== '') { z.sel.add(id); const r = e.target.closest('[data-row]'); if (r) r.classList.add('pick'); const c = r && r.querySelector('[data-mz=sel]'); if (c) c.checked = true; } mzUpdBar(); }
    if (mz === 'q') { z.q = e.target.value; render(); mzUpdBar(); }
    return;
  }
  if (e.target.id === 'qPg') { S.pgQ = e.target.value; render(); }
  if (e.target.id === 'qKm') { S.kmQ = e.target.value; render(); }
  if (e.target.id === 'qSurat') { S.suratQ = e.target.value; render(); }
  if (e.target.id === 'qWarga') { S.q = e.target.value; render(); }
  if (e.target.id === 'qNotulen') { S.ntQ = e.target.value; render(); }
  if (e.target.id === 'qKel') { S.kelQ = e.target.value; render(); }
});
document.addEventListener('change', async e => {
  if (e.target && e.target.dataset && e.target.dataset.rw === 'th') { S.rwTh = e.target.value; render(); return; }
  const sbm = e.target.dataset && e.target.dataset.sbm;
  if (sbm && sbm !== 'q' && sbm !== 'jml' && S.sbMz) {
    const z = S.sbMz, id = e.target.dataset.id;
    if (sbm === 'sel') { e.target.checked ? z.sel.add(id) : z.sel.delete(id); const r = e.target.closest('[data-row]'); if (r) r.classList.toggle('pick', e.target.checked); }
    if (sbm === 'tgl') z.tgl = e.target.value;
    if (sbm === 'metode') z.metode = e.target.value;
    sbMzBar(); return;
  }
  const mz = e.target.dataset && e.target.dataset.mz;
  if (mz && mz !== 'q' && mz !== 'jml') {
    const z = mzState(), id = e.target.dataset.id;
    if (mz === 'sel') { e.target.checked ? z.sel.add(id) : z.sel.delete(id); const r = e.target.closest('[data-row]'); if (r) r.classList.toggle('pick', e.target.checked); }
    if (mz === 'bln') { z.bln[id] = e.target.value; z.sel.add(id); }
    if (mz === 'met') { z.met[id] = e.target.value; }
    if (mz === 'tgl') z.tgl = e.target.value;
    if (mz === 'metode') { z.metode = e.target.value; z.met = {}; render(); }
    if (mz === 'bln') render();
    mzUpdBar(); return;
  }
  if (e.target.id === 'fBlok') { S.fBlok = e.target.value; render(); }
  if (e.target.id === 'fPgKat') { S.pgKat = e.target.value; render(); }
  if (e.target.id === 'fLpSort') { S.lpSort = e.target.value; render(); }
  if (e.target.id === 'fRhAgama') { S.rhAgama = e.target.value; render(); }
  if (e.target.id === 'lapDari') { S.lapDari = e.target.value; render(); }
  if (e.target.id === 'lapSampai') { S.lapSampai = e.target.value; render(); }
});

document.addEventListener('submit', async e => {
  if (e.target.id === 'loginForm') { e.preventDefault(); await prosesLogin(); return; }
  if (e.target.id === 'loginWargaForm') { e.preventDefault(); await prosesLoginWarga(); return; }
  if (e.target.id === 'lupaForm') { e.preventDefault(); await prosesLupa(); return; }
  if (e.target.id === 'pulihForm') { e.preventDefault(); await prosesPulih(); return; }
  if (e.target.id === 'kodeForm') { e.preventDefault(); await prosesKode(); return; }
  if (e.target.id === 'wajibForm') { e.preventDefault(); await prosesWajib(); return; }
  if (e.target.id === 'mfaForm') { e.preventDefault(); await prosesMfa(); return; }
  if (e.target.id !== 'setForm') return;
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const t = k => String(d[k] || '').trim();
  const ok = await putSetting({nama: t('nama') || 'Villani 5', namaLengkap: t('namaLengkap'), iuranBulanan: Math.max(0, Number(d.iuranBulanan) || 0),
    rt: t('rt'), rw: t('rw'), kelurahan: t('kelurahan'), kecamatan: t('kecamatan'), kota: t('kota'), ketua: t('ketua'), ketuaRw: t('ketuaRw'),
    infoBayar: String(d.infoBayar || '').trim(), papanPublik: !!d.papanPublik, ...(S.sesi === 'pemilik' ? {pilihanBahasa: !!d.pilihanBahasa} : {}), ...(S.sesi === 'pemilik' ? {turnstileKey: /^[0-9A-Za-z_-]{10,80}$/.test(t('turnstileKey')) ? t('turnstileKey') : ''} : {}),
    lokasi: (() => { const lat = Number(d.lat), lng = Number(d.lng), L0 = lokasiRT(); const okK = isFinite(lat) && isFinite(lng) && lat >= -11 && lat <= 6 && lng >= 95 && lng <= 141;
      const L = {alamat: t('alamat') || L0.alamat, lat: okK ? lat : L0.lat, lng: okK ? lng : L0.lng}; if (L.lat === LOKASI_DEF.lat && L.lng === LOKASI_DEF.lng) L.placeId = LOKASI_DEF.placeId; return L; })()});
  if (ok) toast('Pengaturan disimpan.');
});

/* ---------- data contoh ---------- */
async function loadSample() {
  const cur = nowPer(), start = addM(cur, -5);
  const ppl = [['A-01','Budi Santoso',4,'Pemilik'],['A-03','Siti Rahmawati',3,'Pemilik'],['A-07','Hendra Wijaya',2,'Kontrak / sewa'],['B-02','Dewi Lestari',5,'Pemilik'],
    ['B-05','Agus Prasetyo',4,'Pemilik'],['B-11','Rina Marlina',1,'Kontrak / sewa'],['C-04','Yusuf Hidayat',6,'Pemilik'],['C-09','Maria Ulfa',3,'Keluarga pemilik']];
  const skip = {2: [0, 1, 2], 5: [1, 0], 6: [0], 3: [3]}; // index -> months-back unpaid
  toast('Mengisi data contoh…');
  const ids = [];
  for (let i = 0; i < ppl.length; i++) {
    const [blok, nama, jiwa, huni] = ppl[i], id = 'contoh-w' + i; ids.push(id);
    if (!await put('warga', id, {blok, nama, jumlahJiwa: jiwa, statusHuni: huni, status: 'Aktif', nik: '3674' + String(1000000 + i * 7919).padStart(8, '0') + String(2000 + i * 13).slice(-4),
      noHp: `0812-${3000 + i * 111}-${4100 + i * 37}`, mulaiIuran: start + '-01', catatan: 'Data contoh', contoh: true, dibuat: todayISO()})) return;
  }
  for (let i = 0; i < ids.length; i++) for (let back = 5; back >= 0; back--) {
    if ((skip[i] || []).includes(back)) continue;
    const p = addM(cur, -back), [y, m] = p.split('-');
    if (!await put('iuran', `${ids[i]}_${p}`, {wargaId: ids[i], periode: p, jumlah: nominal(), tanggal: `${y}-${m}-${pad(3 + i)}`, metode: METODE[i % 3], catatan: '', contoh: true})) return;
  }
  const kel = [
    ['Sampah belum diangkut sejak Senin', 'Kebersihan & sampah', 'Tinggi', 'Baru', 'Tumpukan sampah di bak depan Blok A mulai bau.', ids[0], 'Bak sampah Blok A', ''],
    ['Lampu jalan depan Blok B mati', 'Penerangan jalan', 'Sedang', 'Diproses', 'Dua tiang lampu tidak menyala sejak minggu lalu, jalan gelap.', ids[3], 'Jalan Blok B', 'Sudah dilaporkan ke pengelola, teknisi dijadwalkan datang Kamis.'],
    ['Got di samping C-04 tersumbat', 'Jalan & saluran air', 'Sedang', 'Baru', 'Air menggenang setiap hujan.', ids[6], 'Samping C-04', ''],
    ['Portal gerbang belakang rusak', 'Keamanan', 'Rendah', 'Selesai', 'Portal tidak bisa dikunci.', ids[1], 'Gerbang belakang', 'Engsel portal sudah diganti oleh petugas keamanan.']
  ];
  for (let i = 0; i < kel.length; i++) {
    const [judul, kategori, prioritas, status, isi, wargaId, lokasi, tanggapan] = kel[i];
    const d = new Date(); d.setDate(d.getDate() - (i * 4 + 1));
    const iso = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
    if (!await put('keluhan', 'contoh-k' + i, {judul, kategori, prioritas, status, isi, wargaId, lokasi, tanggapan, pelaporNama: '', dibuat: iso, diperbarui: iso, contoh: true})) return;
  }
  const kasC = [
    [-28, 'keluar', 'Kebersihan & sampah', 'Angkut sampah bulanan', 150000], [-25, 'keluar', 'Listrik & air fasum', 'Token listrik pos ronda dan lampu jalan', 100000],
    [-20, 'masuk', 'Donasi', 'Donasi warga untuk lomba 17-an', 300000], [-12, 'keluar', 'Kegiatan warga', 'Konsumsi kerja bakti', 175000],
    [-6, 'keluar', 'Perbaikan fasilitas', 'Ganti engsel portal belakang', 85000], [-2, 'keluar', 'Kebersihan & sampah', 'Angkut sampah bulanan', 150000]
  ];
  for (let i = 0; i < kasC.length; i++) {
    const [off, jenis, kategori, uraian, jumlah] = kasC[i], d = new Date(); d.setDate(d.getDate() + off);
    const iso = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
    if (!await put('kas', 'contoh-kas' + i, {jenis, kategori, uraian, jumlah, tanggal: iso, metode: 'Tunai', catatan: '', contoh: true, dibuat: iso})) return;
  }
  const ahad = new Date(); ahad.setDate(ahad.getDate() + ((7 - ahad.getDay()) % 7 || 7));
  const ahadIso = ahad.getFullYear() + '-' + pad(ahad.getMonth() + 1) + '-' + pad(ahad.getDate());
  await put('pengumuman', 'contoh-p0', {judul: 'Kerja bakti membersihkan saluran air', kategori: 'Kerja bakti', isi: 'Menjelang musim hujan, mohon setiap rumah mengirim satu perwakilan. Bawa cangkul atau sapu lidi bila ada.', tanggalAcara: ahadIso, jam: '07:00', tempat: 'Kumpul di pos ronda', sematkan: true, dibuat: todayISO(), contoh: true});
  await put('pengumuman', 'contoh-p1', {judul: 'Jadwal angkut sampah berubah', kategori: 'Informasi', isi: 'Mulai bulan ini sampah diangkut setiap Senin dan Kamis pagi. Mohon sampah dikeluarkan sebelum pukul 07.00.', tanggalAcara: '', jam: '', tempat: '', sematkan: false, dibuat: todayISO(), contoh: true});
  const jm = (off, h, m) => { const d = new Date(); d.setDate(d.getDate() + off); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + 'T' + pad(h) + ':' + pad(m); };
  await put('tamu', 'contoh-t0', {nama: 'Rudi Hartono', jenis: 'Tamu', jumlah: 2, wargaId: ids[0], keperluan: 'Silaturahmi', plat: 'B 1234 XYZ', masuk: jm(0, 9, 15), keluar: '', petugas: 'Pak Darto', contoh: true});
  await put('tamu', 'contoh-t1', {nama: 'Kurir J&T', jenis: 'Kurir / paket', jumlah: 1, wargaId: ids[3], keperluan: 'Antar paket', plat: 'B 5521 KJT', masuk: jm(0, 10, 2), keluar: jm(0, 10, 9), petugas: 'Pak Darto', contoh: true});
  await put('tamu', 'contoh-t2', {nama: 'Tukang AC', jenis: 'Pekerja / tukang', jumlah: 2, wargaId: ids[6], keperluan: 'Servis AC', plat: 'B 9087 QW', masuk: jm(-1, 13, 30), keluar: jm(-1, 16, 5), petugas: 'Pak Udin', contoh: true});
  await put('paket', 'contoh-pk0', {wargaId: ids[1], kurir: 'Shopee Express', resi: 'SPX0192837', ket: 'Kardus sedang', diterima: jm(0, 11, 20), status: 'Di pos', petugas: 'Pak Darto', contoh: true});
  await put('titip', 'contoh-tt0', {wargaId: ids[4], dari: jm(-2, 0, 0).slice(0, 10), sampai: jm(5, 0, 0).slice(0, 10), kontak: '0812-3444-4248', catatan: 'Mudik ke Solo. Lampu teras dinyalakan.', status: 'Aktif', cek: [{t: jm(-1, 22, 10), petugas: 'Pak Udin', ket: 'Aman, pagar terkunci'}], contoh: true});
  await put('kejadian', 'contoh-kj0', {waktu: jm(-3, 1, 40), jenis: 'Orang mencurigakan', tingkat: 'Ringan', lokasi: 'Gerbang belakang', uraian: 'Dua orang tidak dikenal mondar-mandir dengan motor tanpa plat.', tindakan: 'Ditegur dan diminta meninggalkan lingkungan.', petugas: 'Pak Udin', contoh: true});
  toast('Data contoh siap. Hapus kapan saja dari tab Pengaturan.');
}
async function delSample() {
  let n = 0;
  for (const c of ['iuran', 'keluhan', 'kas', 'pengumuman', 'surat', 'tamu', 'paket', 'titip', 'kejadian', 'warga']) for (const x of S[c].filter(x => x.contoh)) { if (!await del(c, x.id)) return; n++; }
  toast(`${n} catatan contoh dihapus.`);
}

/* ---------- toast ---------- */
function toast(msg, kind) {
  if (dlg.open && kind === 'bad') { pesanDlg(msg); return; }
  const t = document.createElement('div'); t.className = 'toast' + (kind ? ' ' + kind : ''); t.textContent = msg;
  $('#toasts').appendChild(t); setTimeout(() => t.remove(), kind === 'bad' ? 6000 : 3200);
}

/* ---------- boot ---------- */
(function () { const h = location.hash.slice(1); if (TABS.some(t => t[0] === h)) S.tab = h; })();
/* ---------- PWA: service worker & pasang aplikasi ---------- */
const PWA = {prompt: null, standalone: matchMedia('(display-mode: standalone)').matches || navigator.standalone === true,
  ios: /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)};
if (PWA.standalone) document.body.classList.add('pwa-standalone');
const pwaTutupKey = 'pwa-tutup-sampai';
function pwaBolehTampil() {
  if (PWA.standalone) return false;
  try { if (Number(localStorage.getItem(pwaTutupKey) || 0) > Date.now()) return false; } catch (e) {}
  return !!PWA.prompt || (PWA.ios && /safari/i.test(navigator.userAgent) && !/crios|fxios|edgios/i.test(navigator.userAgent));
}
function pwaBar() {
  let el = document.getElementById('pwaBar');
  if (!pwaBolehTampil()) { if (el) el.remove(); return; }
  if (el) return;
  el = document.createElement('div'); el.id = 'pwaBar'; el.className = 'pwa-bar'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Pasang aplikasi');
  el.innerHTML = `<img src="icons/icon-192.png" alt=""><div class="tx"><b>Pasang Warga Kasuari</b>Buka langsung dari layar HP, lebih cepat seperti aplikasi.</div>
    <button type="button" class="btn sm pri" data-act="pwa-pasang">Pasang</button><button type="button" class="x" data-act="pwa-tutup" aria-label="Tutup">×</button>`;
  document.body.appendChild(el);
}
async function pwaPasang() {
  if (PWA.prompt) {
    const p = PWA.prompt; PWA.prompt = null;
    p.prompt();
    try { const r = await p.userChoice; if (r && r.outcome === 'accepted') toast('Aplikasi sedang dipasang di HP Anda.'); } catch (e) {}
    pwaBar(); return;
  }
  if (PWA.ios) {
    openDlg({title: 'Pasang di iPhone / iPad', submitLabel: 'Mengerti',
      body: `<div class="ios-step"><b>1</b><div>Buka halaman ini di <b>Safari</b>.</div></div>
        <div class="ios-step"><b>2</b><div>Ketuk tombol <b>Bagikan</b> <span aria-hidden="true">(kotak dengan panah ke atas)</span> di bawah layar.</div></div>
        <div class="ios-step"><b>3</b><div>Pilih <b>Tambah ke Layar Utama</b>, lalu ketuk <b>Tambah</b>.</div></div>
        <p class="muted" style="margin:0;font-size:.84rem">Ikon Warga Kasuari akan muncul di layar utama dan terbuka seperti aplikasi.</p>`,
      onSubmit: async () => true});
    return;
  }
  openDlg({title: 'Pasang aplikasi', submitLabel: 'Mengerti',
    body: `<p style="margin:0">Buka menu browser (ikon <b>⋮</b> di Chrome), lalu pilih <b>Instal aplikasi</b> atau <b>Tambahkan ke layar utama</b>.</p>`, onSubmit: async () => true});
}
addEventListener('beforeinstallprompt', e => { e.preventDefault(); PWA.prompt = e; pwaBar(); render(); });
addEventListener('appinstalled', () => { PWA.prompt = null; PWA.standalone = true; pwaBar(); toast('Warga Kasuari terpasang. Buka dari layar utama HP Anda.'); });
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  let muatUlang = false;
  navigator.serviceWorker.addEventListener('message', e => { const h = e.data && e.data.buka; if (h) { const k = h.slice(1); if (TABS.some(t => t[0] === k) && tabBoleh(k)) { if (dlg.open) dlg.close(); S.tab = k; if (k === 'keamanan') S.kmTab = 'pos'; render(); window.scrollTo(0, 0); } } });
  navigator.serviceWorker.addEventListener('controllerchange', () => { if (muatUlang) return; muatUlang = true; location.reload(); });
  addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('sw.js', {scope: './'});
      const tawarkan = w => {
        if (!w || !navigator.serviceWorker.controller) return;
        const el = document.createElement('div'); el.className = 'pwa-bar'; el.style.zIndex = 61;
        el.innerHTML = `<img src="icons/icon-192.png" alt=""><div class="tx"><b>Versi baru tersedia</b>Muat ulang untuk memakai pembaruan terbaru.</div><button type="button" class="btn sm pri">Muat ulang</button>`;
        el.querySelector('button').onclick = () => w.postMessage('pakai-versi-baru');
        document.body.appendChild(el);
      };
      if (reg.waiting) tawarkan(reg.waiting);
      reg.addEventListener('updatefound', () => { const w = reg.installing; if (w) w.addEventListener('statechange', () => { if (w.state === 'installed') tawarkan(w); }); });
      setInterval(() => reg.update().catch(() => {}), 60 * 60 * 1000);
    } catch (e) {}
  });
}
setTimeout(pwaBar, 1500);
async function init() {
  $('#suratCss').textContent = SURAT_CSS + '\n' + LAP_CSS;
  SET0 = {...S.set};
  S.mode = 'online'; S.profilList = [];
  if (!window.supabase || !window.supabase.createClient) { S.sbGagal = true; S.loaded = true; render(); return; }
  const hash = location.hash || '';
  const dariReset = /type=recovery/.test(hash), errReset = /error_code=|error=/.test(hash) ? decodeURIComponent((hash.match(/error_description=([^&]+)/) || [])[1] || '').replace(/\+/g, ' ') : '';
  SB = window.supabase.createClient(SUPA_URL, SUPA_KEY, {auth: {persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'implicit'}});
  DB = DBShim;
  SB.auth.onAuthStateChange(ev => {
    if (ev === 'PASSWORD_RECOVERY') { S.pulih = true; S.loaded = true; render(); }
    if (ev === 'SIGNED_OUT' && S.authUser) { resetSesi(); render(); }
  });
  let sesi = null;
  try { const r = await SB.auth.getSession(); sesi = r.data && r.data.session; } catch (e) {}
  if (dariReset || errReset) { try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} }
  if (errReset) { S.loaded = true; S.lupa = true; S.lupaTerkirim = ''; S.lupaInfo = /expired|invalid/i.test(errReset) ? 'Tautan yang Anda buka sudah tidak berlaku. Biasanya karena membuka email reset yang lama: setiap permintaan baru membatalkan tautan sebelumnya. Buka email reset PALING BARU, atau minta lagi di bawah lalu ketik kodenya.' : 'Tautan reset tidak valid: ' + errReset; render(); return; }
  if (dariReset && sesi) { S.pulih = true; S.loaded = true; render(); return; }
  if (dariReset && !sesi) { S.lupa = true; S.lupaTerkirim = ''; S.lupaInfo = 'Tautan reset tidak valid lagi. Minta lagi di bawah, lalu buka email paling baru atau ketik kodenya.'; S.loaded = true; render(); return; }
  if (S.pulih) return;
  if (sesi && sesi.user) { S.dariPulih = true; await masukSesi(sesi.user); } else { S.loaded = true; render(); muatInfoPublik(); }
}
init();
