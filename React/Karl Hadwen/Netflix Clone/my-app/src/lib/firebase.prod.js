import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyD4pfdcqK_Y4qs4tpB4JQB-MDke9tgOK-A",
  authDomain: "netflix-clone-karlhadwen-5841.firebaseapp.com",
  projectId: "netflix-clone-karlhadwen-5841",
  storageBucket: "netflix-clone-karlhadwen-5841.appspot.com",
  messagingSenderId: "765981929938",
  appId: "1:765981929938:web:c393bf2bfdb0a6184a180b",
  measurementId: "G-HKKCF55CHJ"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
