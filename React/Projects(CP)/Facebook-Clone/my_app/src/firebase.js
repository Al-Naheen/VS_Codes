import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnBVBkqfFCLPpn6dfQvrY0w8qr6PBWesQ",
  authDomain: "facebook-clone-d8951.firebaseapp.com",
  databaseURL: "https://facebook-clone-d8951.firebaseio.com",
  projectId: "facebook-clone-d8951",
  storageBucket: "facebook-clone-d8951.appspot.com",
  messagingSenderId: "425190934642",
  appId: "1:425190934642:web:5cfbe338a116b732f0daeb",
  measurementId: "G-YTNVHMR25V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
