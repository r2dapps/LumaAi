const CACHE='luma-shell-v13';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil((async()=>{const c=await caches.open(CACHE);for(const url of CORE){try{await c.add(url)}catch{}}self.skipWaiting()})())});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('luma-shell-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);
  if(req.mode==='navigate'){event.respondWith((async()=>{try{return await fetch(req,{cache:'no-store'})}catch{return (await caches.match('./index.html'))||Response.error()}})());return;}
  if(url.origin===location.origin){event.respondWith((async()=>{const cached=await caches.match(req);if(cached)return cached;try{const r=await fetch(req);if(r.ok){const c=await caches.open(CACHE);c.put(req,r.clone()).catch(()=>{})}return r}catch{return Response.error()}})());}
});
