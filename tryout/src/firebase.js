import firebase from 'firebase';
const  firebaseConfig = {
    apiKey: "AIzaSyAN9rzsIcHfhUMjSj0kYwJWJ6IbvKS7dd0",
    authDomain: "trying-out-e6fa8.firebaseapp.com",
    projectId: "trying-out-e6fa8",
    storageBucket: "trying-out-e6fa8.appspot.com",
    messagingSenderId: "103247778152",
    appId: "1:103247778152:web:0e9dea40cc11150fa406dd",
    measurementId: "G-NJJMCP3GJL"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore()
  