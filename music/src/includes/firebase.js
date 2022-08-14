import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvVfUrSFaI23AWs6scAOr2laXOGwSse78",
  authDomain: "sound-8a936.firebaseapp.com",
  projectId: "sound-8a936",
  storageBucket: "sound-8a936.appspot.com",
  appId: "1:820459634549:web:60ba42def88dbd635e1d3c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
