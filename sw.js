// Souffle · fonctionnement hors ligne
/* Souffle : fonctionnement hors ligne. Change V pour forcer une mise à jour. */
const V="souffle-1.0.0";
const CORE=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET") return;
  const url=new URL(r.url);
  if(r.mode==="navigate"){ // réseau d'abord, cache si hors ligne
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put("index.html",cp));return res;}).catch(()=>caches.match("index.html")));
    return; }
  // polices et fichiers : cache d'abord
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{ if(res.ok&&(url.origin===location.origin||/fonts\.(googleapis|gstatic)\.com/.test(url.host))){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));} return res; })));
});
