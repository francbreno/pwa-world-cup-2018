import PushHelper from 'helpers/push';

const SERVER_URL = 'http://localhost:3000'; 

const onServiceWorkerRegistrationSuccess = (registration) => {
  if ('Notification' in window) {
    if (Notification.permission === "granted") {
      // poderia fazer algo aqui...
    } else if (Notification.permission === "blocked") {
      PushHelper.unsubscribe();
    } else {
      Notification.requestPermission(status => {
        if (status === 'granted') {
          PushHelper.subscribe();
        }
      });
    }
  }  
}

export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then(onServiceWorkerRegistrationSuccess)
      .catch(err => console.error(`SW registration failed: ${err}`));
  }
};