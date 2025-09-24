self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('simple-pwa-cache').then(cache => {
      return cache.addAll([
        './',
        './page3-15.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
