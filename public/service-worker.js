const cacheName = 'cache-v1';
const resourceToPreCache = [
  '/',
  'index.html',
  'styles/main.css',
  'image/icons'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
          .then(cache => {
            return cache.addAll(resourceToPreCache);
          })
    );
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
