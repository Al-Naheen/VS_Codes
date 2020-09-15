import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAW0kwwH5Ve3xi2nsQM0Ghi8clM6lNWlEg",
    authDomain: "challenge-e1137.firebaseapp.com",
    databaseURL: "https://challenge-e1137.firebaseio.com",
    projectId: "challenge-e1137",
    storageBucket: "challenge-e1137.appspot.com",
    messagingSenderId: "62202544453",
    appId: "1:62202544453:web:83069705d3fdc74165fe2c",
    measurementId: "G-H2WQD9CMLG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth};