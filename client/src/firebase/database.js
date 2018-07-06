export const signIn = (firebase) => {
  console.log(`Trying loggin in: for user ${process.env.FIREBASE_DATABASE_USER}`);
  return firebase.auth().signInWithEmailAndPassword(
    process.env.FIREBASE_DATABASE_USER, 
    process.env.FIREBASE_DATABASE_PASSWORD)
  .catch(
      error => console.log('error sign in firebase database', error)
  );
}

export const databaseBaseRef = (firebase) => firebase.database().ref();

export const save = (firebase, ref, data) => {
  firebase.database().ref(ref).set(data);
} 

export const update = (firebase, ref, update) => {
  firebase.database().ref(ref).update(update);
}

export const readOnce = (firebase, ref) => {
  firebase.database().ref(ref).once('value')
    .then(snapshot => snapshot.val());
}
