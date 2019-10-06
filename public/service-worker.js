/*importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}*/

const cacheName = 'cache-v2';
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
