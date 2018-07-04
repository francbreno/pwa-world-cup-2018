const PUSH_SERVER_URL = process.env.PUSH_SERVER_URL || 'http://localhost:3000';

const subscribe = () => {
  navigator.serviceWorker.ready.then(registration => {
    if (!registration.pushManager) {
      console.log("Push Unsupported");
      return;
    }

    const publicVapidKey = 'BPJyBdQxSoR8hBjM24j06V9dH6Z8R05E7PHz_65TtGR-CHH8lnTD6iVPrDz9SPFh9GrAimheCDFX5Max-5N42M4';
    const applicationServerKey = urlBase64ToUint8Array(publicVapidKey);

    registration.pushManager
      .subscribe({userVisibleOnly: true, applicationServerKey,})
      .then(requestSubscription)
      .catch(err => console.error('Push subscription error', err));
  });
}

const unsubscribe = () => {
  navigator.serviceWorker.ready.then(registration => {
    registration.pushManager.getSubscription().then(subscription => {
      if(!subscription) {
        return;
      }
      subscription
        .unsubscribe()
        .then(requestDeleteSubscription)
        .catch(err => console.error('Remove Push subscription error', err));
    })
  })
};

function requestSubscription(subscription) {
  console.log('subscription', JSON.stringify(subscription));
  fetch(`${PUSH_SERVER_URL}/subscription`, {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: { 'content-type': 'application/json', }
  })
  .then(() => console.log('registered'))
  .catch(err => console.err(err));
}

function requestDeleteSubscription() {
  fetch(`${PUSH_SERVER_URL}/subscription`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json', }
  })
  .then(() => console.log('unregistered'))
  .catch(err => console.err(err));
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
 
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
 
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default {
  subscribe,
  unsubscribe,
}