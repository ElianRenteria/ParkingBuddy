import fireBaseClient from '../firebaseClient';
import generateUUID from '../generateUUID';

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://console.firebase.google.com/u/0/project/parkingbuddy-79e1c/firestore/data/~2FParking%20Structure~2FLot%20F"
});

// Access the database and perform operations
const db = admin.firestore();

// Function to duplicate a document
async function buildDocument(collectionPath, lotName, lotId, sections) {
    try {
        // Get the source document
        await(fireBaseClient.addDocument(collectionPath, {id:lotId, name: lotName, sections:[]}, lotId ));

        
    } catch (error) {
        console.error('Error building document:', error);
    }
}

// Example usage
const collectionPath = 'lots';
const sourceDocId = 'source_document_id';
const destinationDocId = 'new_document_id';

duplicateDocument(collectionPath, sourceDocId, destinationDocId);
