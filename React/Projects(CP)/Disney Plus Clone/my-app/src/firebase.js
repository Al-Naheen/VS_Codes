import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlFcsJPsTvTqeHcqKMXKG0dul5ZDlhsGE",
  authDomain: "disney-plus-clone-5841.firebaseapp.com",
  projectId: "disney-plus-clone-5841",
  storageBucket: "disney-plus-clone-5841.appspot.com",
  messagingSenderId: "348477501851",
  appId: "1:348477501851:web:7846bd9772a93fca66313e",
  measurementId: "G-VP335XM81M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
