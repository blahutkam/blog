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

//modify fetched post
//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15234798#overview
export const convertPostsSnapshotToMap = (posts) => {
  const transformedPosts = posts.docs.map((doc) => {
    const { title, teaser, article, image, date, timestamp } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title: title.toUpperCase(),
      teaser: teaser,
      image: image,
      article: article,
      date: date,
      timestamp: timestamp,
    };
  });

  //console.log("transformed fetched posts log", transformedPosts);
  return transformedPosts.reduce((accumulator, post) => {
    accumulator[post.title.toLowerCase()] = post;
    return accumulator;
  }, {});
};

//modify fetched comments
//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15234798#overview
export const convertCommentsSnapshotToMap = (comments) => {
  const transformedComments = comments.docs.map((doc) => {
    const { name, text, dateAndTime, timestamp } = doc.data();

    return {
      id: doc.id,
      name: name,
      text: text,
      dateAndTime: dateAndTime,
      timestamp: timestamp,
    };
  });

  //console.log("transformed comments log", transformedComments);

  return transformedComments.reduce((accumulator, comment) => {
    accumulator[comment.id] = comment;
    return accumulator;
  }, {});
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
