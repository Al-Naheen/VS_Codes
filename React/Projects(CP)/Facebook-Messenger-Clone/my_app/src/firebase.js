import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCh5wZUaAHbSBTr3OdZqefYX46JhC89ROM",
    authDomain: "facebook-messenger-clone-c1d9d.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-c1d9d.firebaseio.com",
    projectId: "facebook-messenger-clone-c1d9d",
    storageBucket: "facebook-messenger-clone-c1d9d.appspot.com",
    messagingSenderId: "91521326965",
    appId: "1:91521326965:web:bed7103bb394755c4d7d3c",
    measurementId: "G-1FD2P43J5D"
})

const db = firebaseApp.firestore();

export default db;
