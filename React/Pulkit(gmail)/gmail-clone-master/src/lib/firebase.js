import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZOIgfszlSmwEt_fpaBBm_wP3sqEQ73lQ",
  authDomain: "clone-fee96.firebaseapp.com",
  projectId: "clone-fee96",
  storageBucket: "clone-fee96.appspot.com",
  messagingSenderId: "247587884407",
  appId: "1:247587884407:web:00238ddce514ca0c692572",
  measurementId: "G-H8XRHNV8PD"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
