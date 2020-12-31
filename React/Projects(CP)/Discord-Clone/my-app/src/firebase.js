import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD7EY_7jbGW_AnWXzWzGyC2EijnYONiu0",
  authDomain: "discord-clone-9025e.firebaseapp.com",
  databaseURL: "https://discord-clone-9025e.firebaseio.com",
  projectId: "discord-clone-9025e",
  storageBucket: "discord-clone-9025e.appspot.com",
  messagingSenderId: "676613759886",
  appId: "1:676613759886:web:acd6293ed81e3172143adf",
  measurementId: "G-T5J2FEHBQ7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

