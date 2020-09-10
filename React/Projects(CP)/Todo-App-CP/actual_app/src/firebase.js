import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_T2Ytz0m2_olBMoJZEgTevuZkGs4mAVs",
    authDomain: "react-todo-8b943.firebaseapp.com",
    databaseURL: "https://react-todo-8b943.firebaseio.com",
    projectId: "react-todo-8b943",
    storageBucket: "react-todo-8b943.appspot.com",
    messagingSenderId: "498619646532",
    appId: "1:498619646532:web:63f04451b28d6bb2d1f211",
    measurementId: "G-SWCV2LH6YN"
})
const db = firebaseApp.firestore();

// export { db }
export default db