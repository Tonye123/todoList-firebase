import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'


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

 window.firebase = firebase;

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider)


//creating user documnent profile
//takes in user object we got from the auth module and some additional data
export const createUserProfileDocumnet = async(user,additionalData) => {
    if(!user) return;

    //get a reference to the place in the database where a user profile might be.
    const userRef = db.doc(`users/${user.uid}`);

    //go and fetch the document from that location
    const snapshot = await userRef.get();

    //if the document does not exist, then we go ahead to create one
    if(!snapshot.exists) {
        const { displayName, email, photoURL } = user;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error("Error creating user",error);
            
        }
    }
        return getUserDocument(user.uid)
   };

    export const getUserDocument = async(uid) => {
        if(!uid) return null;
        try {
           return  db.collection('users').doc(uid);
            
        } catch (error) {
            console.error('Error fetching user', error.message);
            
            
        }
    }
