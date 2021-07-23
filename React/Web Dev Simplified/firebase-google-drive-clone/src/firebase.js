import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = firebase.initializeApp({
  apiKey: "AIzaSyCYYWlhTuIrJWoVpd5l6lc4TR87q01vE0U",
  authDomain: "drive-543.firebaseapp.com",
  projectId: "drive-543",
  storageBucket: "drive-543.appspot.com",
  messagingSenderId: "806983124440",
  appId: "1:806983124440:web:0dd20176b0720fe4c59ead",
  measurementId: "G-85N8H1YFRV",
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
