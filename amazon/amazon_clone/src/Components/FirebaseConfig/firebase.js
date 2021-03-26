import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyAMZlk7s0lLc1VEhZGxmd3VGK3ob7LcmMY",
  authDomain: "tik-tok-clone-17dd6.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-17dd6.firebaseio.com",
  projectId: "tik-tok-clone-17dd6",
  storageBucket: "tik-tok-clone-17dd6.appspot.com",
  messagingSenderId: "160145515044",
  appId: "1:160145515044:web:cc23a746f3d9372597eeb1",
  measurementId: "G-LW2LLFXHFB"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firestore
const db = firebaseApp.firestore()
const auth = firebase.auth()
export {db, auth}