import PushHelper from 'helpers/push';
import firebase from './firebase';
import { 
  askForPermissionToReceiveNotifications,
  associateFirebaseMessaging,
  subscribeUserToReceiveNotifications
} from './firebase/notifications';

const onServiceWorkerRegistrationSuccess = (registration) => {
  associateFirebaseMessaging(registration)
    .then(askForPermissionToReceiveNotifications)
    .then(subscribeUserToReceiveNotifications);
}

export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then(onServiceWorkerRegistrationSuccess)
      // .then(askForNotificationsPermission)
      .catch(err => console.error(`SW registration failed: ${err}`));
  }
};