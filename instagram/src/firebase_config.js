
import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8W68CgsO1CNohIYgSEEGgS90TBeRVJ_A",
    authDomain: "instagram-clone-93641.firebaseapp.com",
    databaseURL: "https://instagram-clone-93641.firebaseio.com",
    projectId: "instagram-clone-93641",
    storageBucket: "instagram-clone-93641.appspot.com",
    messagingSenderId: "27198773267",
    appId: "1:27198773267:web:a37a1e1366eda78c9907e6",
    measurementId: "G-MMMCQHV2VP"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
export {db, auth, storage}