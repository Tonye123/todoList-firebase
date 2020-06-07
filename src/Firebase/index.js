import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDhDe162nhwuVoGjBGyDHxj0Py8xNXmtwk",
    authDomain: "to-do-app-76997.firebaseapp.com",
    databaseURL: "https://to-do-app-76997.firebaseio.com",
    projectId: "to-do-app-76997",
    storageBucket: "to-do-app-76997.appspot.com",
    messagingSenderId: "825580338908",
    appId: "1:825580338908:web:c2613ff6be6a51c71f7e19"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider)