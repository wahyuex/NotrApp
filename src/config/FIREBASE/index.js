import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDGcie_1mJFAiaQp88yJaCHVxCkjIsY-7k",
    authDomain: "notesapp-18ccb.firebaseapp.com",
    projectId: "notesapp-18ccb",
    storageBucket: "notesapp-18ccb.appspot.com",
    messagingSenderId: "291304956427",
    appId: "1:291304956427:web:5df7c00fdbb0b891845d0e"
});

const FIREBASE = firebase;

export default FIREBASE;