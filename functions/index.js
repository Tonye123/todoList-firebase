const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.getAllTodos = functions.https.onRequest(async (request,response) => {
    const snapshot = await firestore.collection('todos').get();
    const todos = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));

    response.json({ todos })

});
