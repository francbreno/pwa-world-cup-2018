workbox.skipWaiting();
workbox.clientsClaim();

const pluginOnlyOkStatuses = new workbox.cacheableResponse.Plugin({
  statuses: [0, 200],
});

workbox.routing.registerRoute(
  new RegExp(/^https:\/\/worldcup.sfg.io\/matches\/current/),
  workbox.strategies.networkFirst({
    plugins: [pluginOnlyOkStatuses],
  })
);

workbox.routing.registerRoute(
  new RegExp(/^https:\/\/worldcup.sfg.io/),
  workbox.strategies.staleWhileRevalidate({
    plugins: [pluginOnlyOkStatuses],
  })
);

self.addEventListener('push', (event) => {
  console.log('new notification received');
  const { title, body, icon } = event.data.json();
  event.waitUntil(self.registration.showNotification(title, { body, icon }));
});


workbox.precaching.precacheAndRoute(self.__precacheManifest);