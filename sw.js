// SECOND SIGHT v0.9 — offline shell
const CACHE='second-sight-pwa-v0.9';
const PREFIX='second-sight-';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(ASSETS);
  await self.skipWaiting();
 })());
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));
  await self.clients.claim();
 })());
});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 if(req.mode==='navigate'){
  event.respondWith((async()=>{
   try{
    const response=await fetch(req);
    if(response.ok){const cache=await caches.open(CACHE);await cache.put('./index.html',response.clone());}
    return response;
   }catch(_){
    return(await caches.match(req,{ignoreSearch:true}))||(await caches.match('./index.html'))||Response.error();
   }
  })());
  return;
 }
 event.respondWith((async()=>{
  const cached=await caches.match(req,{ignoreSearch:true});
  if(cached)return cached;
  try{return await fetch(req);}catch(_){return Response.error();}
 })());
});
