import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnF80Hj4a0jKW6p3OMOL1I_lNcWpq31JE",
    authDomain: "instagram-clone-325b6.firebaseapp.com",
    databaseURL: "https://instagram-clone-325b6.firebaseio.com",
    projectId: "instagram-clone-325b6",
    storageBucket: "instagram-clone-325b6.appspot.com",
    messagingSenderId: "29802271155",
    appId: "1:29802271155:web:b95e326919c1db73907bc6",
    measurementId: "G-FQFTSQHMEB"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }