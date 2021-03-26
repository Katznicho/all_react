import firebase from 'firebase';
let firebaseConfig = {
    apiKey: "AIzaSyAdP_T7krernhwHyWAfChf0Xk9-YWANVEM",
    authDomain: "facebook-clone-bda6f.firebaseapp.com",
    projectId: "facebook-clone-bda6f",
    storageBucket: "facebook-clone-bda6f.appspot.com",
    messagingSenderId: "489208465901",
    appId: "1:489208465901:web:dec52c5eaa5224eb263fe4",
    measurementId: "G-4XQEG9BMFL"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
