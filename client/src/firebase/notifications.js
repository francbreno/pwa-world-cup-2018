import { signIn, save, databaseBaseRef } from './database';

export const associateMessagingToServiceWorker = (swRegistration, firebase) => {
  return firebase.messaging().useServiceWorker(swRegistration);
}

export const askForPermissionToReceiveNotifications = (firebase) => {
  firebase.messaging().requestPermission()
    .then(() => {
      console.log('notifications permission granted');
      return firebase;
    })
    .catch(logError('Error trying to request notifications permission'));
}

export const getCurrentToken = (firebase) => {
  firebase.messaging().getToken().catch(logError('Error trying to get current token'));
}

export const subscribeUserToReceiveNotifications = (firebase, token) => {
  return updateNotificationsSubscription(firebase, token, true);
};

export const unsubscribeUserFromReceivingNotifications = (firebase, token) => {
  return updateNotificationsSubscription(firebase, token, false);
};

const updateNotificationsSubscription = (firebase, token, granted) => {
  return signIn().then(() => save(firebase, databaseBaseRef.child(token), granted));
}

export const showNotification = payload => {

}

const logError = errorMSG => err => console.log(errorMSG, error);