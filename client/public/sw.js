const VERSION = 'v1';
const CACHE_NAME = `app-caches-${VERSION}`;

// http://worldcup.sfg.io/
// https://market.mashape.com/explore?page=1

const IMMUTABLE_REQUESTS = [
  './images/pwa-logo.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  './css/app.css',
  './js/materialize.min.js',
  './fonts/roboto/Roboto-Light.woff2',
  './fonts/roboto/Roboto-Regular.woff2'
];

const MUTTABLE_REQUESTS = [
  'index.html',
];

self.addEventListener('install', event => {
  event.waitUntil(
    // Abre o novo cache para criá-lo
    caches.open(CACHE_NAME).then(cache => {
      const newImmutableRequests = [];
      return Promise.all(
        // Verifica se as requisições que não mudam já estavam no cache anterior
        IMMUTABLE_REQUESTS.map(url => {
          return caches.match(url).then(response => {
            if (response) {
              // requisição já cacheada. Salve-a no novo cache
              return cache.put(url, response); // put, não add
            } else {
              newImmutableRequests.push(url); // põe url na lista dos que ainda não estão em cache
              return Promise.resolve(); // resolve a promise. nada a ser feito
            }
          })
        })
      ).then(() => cache.addAll(newImmutableRequests.concat(MUTTABLE_REQUESTS)))
    })
  );
});

// Cache strategies

// Things that do not change within the lifetime of a service worker version.
const fetchCacheOnly = (event) =>
  event.respondWith(
    caches.match(event.request)
  );

// For fast responses. Data don't need to be the most up to date.
const fetchCacheFallbackToNetwork = (event) =>
  event.respondWith(
    caches.match(event.request).then((response) =>
      response || fetch(event.request)
    )
  );

// Data need's to be the most up to date version
const fetchNetworkOnly = (event) =>
  event.respondWith(
    fetch(event.request)
  );

// For data that is best fresh, but if not available the last receive must be fine.
const fetchNetworkFallbackToCache = (event) =>
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request)
    )
  );

// For faster responses, but if a newer version is obtained from network show this new one.
const fetchCacheThenNetwork = (event) =>
  event.respondWith(

  );