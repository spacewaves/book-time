// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGy97Pshyl6fiqOJwUMtWLsT0neYlgYsI",
  authDomain: "book-time-8e655.firebaseapp.com",
  projectId: "book-time-8e655",
  storageBucket: "book-time-8e655.appspot.com",
  messagingSenderId: "480801466816",
  appId: "1:480801466816:web:c4ab5536380825a1e40025",
  measurementId: "G-QLE6BBCMRJ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
