// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "------------------------",
  authDomain: "whatsapp-clone-a4cf8.firebaseapp.com",
  databaseURL:
    "https://whatsapp-clone-a4cf8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "whatsapp-clone-a4cf8",
  storageBucket: "whatsapp-clone-a4cf8.appspot.com",
  messagingSenderId: "73297256686",
  appId: "1:73297256686:web:36e1881f8a58530309d3ff",
  measurementId: "G-EPYJ0L5XFW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
