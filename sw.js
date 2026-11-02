/* Offline support. Network first, so updates always show; the cache is only a fallback. Change V when you want to clear old caches. */
const V = "mub-v3";
const CORE = ["./", "index.html", "assets/css/style.css", "assets/js/app.js", "data/content.js", "assets/img/me.webp", "assets/img/me-sq.webp"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;
  e.respondWith(fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; }).catch(() => caches.match(r).then(m => m || caches.match("index.html"))));
});
