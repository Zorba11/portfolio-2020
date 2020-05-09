import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnadeCte5fBKbjlomAvdkQMz4uqZ0Nqqg",
    authDomain: "portfolio-2020-d74be.firebaseapp.com",
    databaseURL: "https://portfolio-2020-d74be.firebaseio.com",
    projectId: "portfolio-2020-d74be",
    storageBucket: "portfolio-2020-d74be.appspot.com",
    messagingSenderId: "884437872497",
    appId: "1:884437872497:web:6c324c7ae4cd0bb94950d0"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

