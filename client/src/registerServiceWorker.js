const SERVER_URL = 'http://localhost:8989'; 

const subscribeToPushServer = (registration) => {
  const publicVapidKey = 'BIouqAHQ77E4_jcn5ouLB9fcmB_mUrCtUU9Foq_YhmCPTO731m5QPb4248K0qILUupaRPRz9wUCX5BmPy8wlu9U';
  const subscription = registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  fetch(SERVER_URL, {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json',
    }.then(() => console.log('registered'))
    .catch(err => console.err(err))
  });
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

export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js")
      .then(subscripToPushServer).catch(err => console.error(`SW registration failed: ${err}`));
  }
};