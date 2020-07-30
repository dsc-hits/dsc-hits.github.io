var cacheName = 'DSC HITS';
var filesToCache = [
  '/',
  '/index.html',
  'amp/index.html',
  'exp-ml/',
  'gcpcrashcourse/'
  'gallery/index.html',
  'join/index.html',
  'omg/index.html',
  'support/index.html',
  'css/style.css',
  'js/index.js',
  'assets/',
  
];self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
