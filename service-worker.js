const CACHE_NAME = 'my-react-app-cache-v1';

const urlsToCache = [
  '/',
	'/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});

self.addEventListener('fetch', event => {
	event.respondWith(
	  caches.match(event.request)
		 .then(response => {
			// Если кеш найден, вернуть его
			if (response) {
			  return response;
			}
 
			const fetchRequest = event.request.clone();
 
			// Если сеть недоступна, вернуть сообщение об ошибке
			if (!navigator.onLine) {
			  return new Response("You're offline.");
			}
 
			// В противном случае выполнить запрос к бекенду
			return fetch(fetchRequest)
			  .then(response => {
				 // Если запрос не успешен, вернуть ответ из кеша, если есть
				 if (!response || response.status !== 200 || response.type !== 'basic') {
					return caches.match(fetchRequest);
				 }
 
				 const responseToCache = response.clone();
 
				 caches.open(CACHE_NAME)
					.then(cache => {
					  cache.put(event.request, responseToCache);
					});
 
				 return response;
			  });
		 })
	);
 });

