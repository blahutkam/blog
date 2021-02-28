import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCt_slO1A0Dj9YVnxZMyjPyALIJ2B43MBw",
  authDomain: "blog-b1c14.firebaseapp.com",
  projectId: "blog-b1c14",
  storageBucket: "blog-b1c14.appspot.com",
  messagingSenderId: "304358535470",
  appId: "1:304358535470:web:2c637f016d81ef50ad0abf",
  measurementId: "G-38H1KSGWBH",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //if snapShot doesn't exists we create data at this place
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
