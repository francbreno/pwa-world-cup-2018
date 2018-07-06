import firebase from 'firebase';
import { showNotification } from './notifications';

const initializeFirebase = () => {
  const firebaseApp = firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "pwa-wc2018.firebaseapp.com",
    databaseURL: "https://pwa-wc2018.firebaseio.com",
    projectId: "pwa-wc2018",
    storageBucket: "pwa-wc2018.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  });
  // registerMessageHandler(firebaseApp, showNotification);
  return firebaseApp;
}

const registerMessageHandler = (firebase, handler) => firebase.messaging().onMessage(handler);

export default initializeFirebase();