import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXWNZZZ8RgusTXtfcjnDkG-icIytoJJiQ",
  authDomain: "clone-be743.firebaseapp.com",
  projectId: "clone-be743",
  storageBucket: "clone-be743.appspot.com",
  messagingSenderId: "246686819607",
  appId: "1:246686819607:web:1388d0f9c8904f20f74352",
  measurementId: "G-N7YDJMBNNS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth};