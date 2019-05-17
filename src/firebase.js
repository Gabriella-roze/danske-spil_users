import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAOpi471GQehJOJNj8C7bVOnqQ3-SSiTyE",
  authDomain: "danskespil-970a3.firebaseapp.com",
  databaseURL: "https://danskespil-970a3.firebaseio.com",
  projectId: "danskespil-970a3",
  storageBucket: "danskespil-970a3.appspot.com",
  messagingSenderId: "253764022587",
  appId: "1:253764022587:web:40c324ef9c1779c0"
};

// Initialize Firebase
firebase.initializeApp(config);


export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOutFromGoogle = () => auth.signOut();

window.firebase = firebase; // for testing

export const getUserDocument = async (uid) => {
  if (!uid) { return null; }

  try {
    // const userDocument = await firestore.collection('users').doc(uid).get();
    // return { uid, ...userDocument.data() };

    return firestore.collection('users').doc(uid)
  } catch (error) {
      console.log('Error getting the user: ', error);
  }
}

export default firebase;