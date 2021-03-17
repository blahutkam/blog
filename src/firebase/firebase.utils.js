import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

// initialize Cloud Firestore through Firebase
const config = {
  apiKey: "AIzaSyCt_slO1A0Dj9YVnxZMyjPyALIJ2B43MBw",
  authDomain: "blog-b1c14.firebaseapp.com",
  projectId: "blog-b1c14",
  storageBucket: "blog-b1c14.appspot.com",
  messagingSenderId: "304358535470",
  appId: "1:304358535470:web:2c637f016d81ef50ad0abf",
  measurementId: "G-38H1KSGWBH",
};

//creates a post list document in the posts collection
// export const createPost = ({ posts }) => {
//   return firestore.collection("posts").add({
//     created: firebase.firestore.FieldValue.serverTimestamp(),
//     postId: posts.postId,
//     title: posts.title,
//     date: posts.date,
//     image: posts.image,
//     text: posts.image,
//     //users: [{ name: displayName }],
//   });
// };

export const getGroceryList = (postId) => {
  return firestore.collection("posts").doc(postId).get();
};

//create a new user profile with googleAuth
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
//creates and initializes a Firebase app instance
export const appInit = firebase.initializeApp(config);

//initialize an instance of Cloud Firestore
export const firestore = firebase.firestore();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
