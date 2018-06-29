const SERVER_URL = 'http://localhost:3333'; 

const checkForPushSubscription = (registration) => 
  registration.pushManager.getSubscription().then(() => 
    console.log('update ui: already subscribed')
  );

const subscribe = (swRegistration) => {
  if (!swRegistration) return console.error('Service Worker registration not found');

  getApplicationServerKey()
    .then(applicationServerKey => {
      // Subscribe
      swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey
      }).then(res => res.toJSON())
        .then(subscription => {
          console.log(subscription);
          // fetch(`${serverURL}/subscribe`, {method: 'POST', body: JSON.stringify(subscription)});
        });
    });
};

const getApplicationServerKey = () => 
  fetch(`${serverUrl}/key`)
    .then(res => res.arrayBuffer())
    .then(key => new Uint8Array(key));

export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js")
      .then(registration => {
        console.log(`SW registered with scope: ${registration.scope}`);
        checkForPushSubscription(registration);
      }).catch(err => console.error(`SW registration failed: ${err}`));
  }
};