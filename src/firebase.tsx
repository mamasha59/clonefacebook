import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzZNGoNwkNfKSyukDRYSPbZmIubFDuza8",
    authDomain: "cloneface-99fc1.firebaseapp.com",
    projectId: "cloneface-99fc1",
    storageBucket: "cloneface-99fc1.appspot.com",
    messagingSenderId: "259733254147",
    appId: "1:259733254147:web:e1719f208031e5329c9e36",
    measurementId: "G-PVDEKTVFB1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export  {auth, provider};
export default db;