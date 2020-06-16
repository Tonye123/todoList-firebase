const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.userDeleted = functions.firestore.document('/newUserData/{documentId}').onDelete(user => {
    const doc = firestore.collection('users').doc(user.uid);
    return doc.delete();
});


