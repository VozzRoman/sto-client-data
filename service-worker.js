// const CACHE_NAME = 'my-react-app-cache-v1';


// const urlsToCache = [
//   '/',
// //   '/index.html',
//   '/manifest.json',
//   '/icons/icon-192x192.png',
//   '/icons/icon-512x512.png',

// ];


// self.addEventListener('install', event => {

//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(cache => cache.addAll(urlsToCache))
//   );
// });

// self.addEventListener('activate', event => {

//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.filter(name => name !== CACHE_NAME)
//           .map(name => caches.delete(name))
//       );
//     })
//   );
// });


// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
      
//       if (response) {
//         return response;
//       }
   
//       return fetch(event.request);
//     })
//   );
// });