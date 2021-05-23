import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaonbiWKfAZz-ttdwYU9BQV-_RerKWVng",
  authDomain: "linkedin-clone-cff40.firebaseapp.com",
  databaseURL: "https://linkedin-clone-cff40-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "linkedin-clone-cff40",
  storageBucket: "linkedin-clone-cff40.appspot.com",
  messagingSenderId: "43203940285",
  appId: "1:43203940285:web:6c93d10cd8fc42de468cd4",
  measurementId: "G-7QJB0HQV88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
