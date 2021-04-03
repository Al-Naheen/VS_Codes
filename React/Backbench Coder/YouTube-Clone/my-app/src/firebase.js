import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyDXuDJWBz1XAMrnsi3_Br0DzoRo6kUXKFY",
   authDomain: "yt-clone-5841.firebaseapp.com",
   projectId: "yt-clone-5841",
   storageBucket: "yt-clone-5841.appspot.com",
   messagingSenderId: "992574657289",
   appId: "1:992574657289:web:6e50da5058ffc2baa7f9d8"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()