import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArGI8ELLNVjcebRDy8q9ApGNi82kIOKUg",
  authDomain: "tiktok-clone-f3029.firebaseapp.com",
  databaseURL: "https://tiktok-clone-f3029.firebaseio.com",
  projectId: "tiktok-clone-f3029",
  storageBucket: "tiktok-clone-f3029.appspot.com",
  messagingSenderId: "641906437864",
  appId: "1:641906437864:web:965371a5be4770e8b3e35d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;