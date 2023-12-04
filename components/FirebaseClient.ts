import { initializeApp } from 'firebase/app';
import {getFirestore,collection,getDocs,DocumentData,CollectionReference,doc,getDoc,updateDoc,DocumentReference,addDoc,deleteDoc,setDoc,query,where,WhereFilterOp} from 'firebase/firestore/lite';
import firebaseConfig from '../constants/FirebaseConfig';



class FirebaseClient {
    private readonly firestore: ReturnType<typeof getFirestore>;
  
    constructor() {
        const firebaseApp = initializeApp(firebaseConfig);
        this.firestore = getFirestore(firebaseApp);
    }
  
    async getCollection(collectionName: string): Promise<DocumentData[]> {
        try {
            const collectionRef: CollectionReference<DocumentData> = collection(this.firestore, collectionName);
            const querySnapshot = await getDocs(collectionRef);
    
            // Convert the query snapshot to an array of JSON objects
            const result: DocumentData[] = [];
            querySnapshot.forEach((doc) => {
            result.push(doc.data());
            });
    
            return result;
        } catch (error) {
            console.error('Error while fetching collection:', error);
            throw error;
        }
    }

    async getDocument(collectionName: string, documentId: string, fieldName?: string): Promise<any | undefined> {
      try {
        const documentRef = doc(this.firestore, collectionName, documentId);
        const documentSnapshot = await getDoc(documentRef);
  
        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          return fieldName ? data?.[fieldName] : data;
        } else {
          console.error('Document does not exist');
          return undefined;
        }
      } catch (error) {
        console.error('Error while fetching document:', error);
        throw error;
      }
    }
  
    async updateDocument(collectionName: string, documentId: string, newData: Partial<DocumentData>): Promise<void> {
        try {
          const documentRef: DocumentReference<DocumentData> = doc(this.firestore, collectionName, documentId);
          await updateDoc(documentRef, newData);
          console.log('Document updated successfully');
        } catch (error) {
          console.error('Error while updating document:', error);
          throw error;
        }
    }

    async addDocument(collectionName: string, data: DocumentData, documentId?: string): Promise<void> {
        try {
          const collectionRef: CollectionReference<DocumentData> = collection(this.firestore, collectionName);
    
          // Use addDoc if documentId is not specified, else use setDoc with specified documentId
          if (documentId) {
            const documentRef = doc(this.firestore, collectionName, documentId);
            await setDoc(documentRef, data);
          } else {
            await addDoc(collectionRef, data);
          }
    
          console.log('Document added successfully');
        } catch (error) {
          console.error('Error while adding document:', error);
          throw error;
        }
    }

    async deleteDocument(collectionName: string, documentId: string): Promise<void> {
        try {
            const documentRef = doc(this.firestore, collectionName, documentId);
            await deleteDoc(documentRef);
            console.log('Document deleted successfully');
        } catch (error) {
            console.error('Error while deleting document:', error);
            throw error;
        }
    }

    async searchDocument(collectionName: string,fieldName: string,operator: WhereFilterOp,value: any): Promise<DocumentData[]> {
        try {
          const collectionRef: CollectionReference<DocumentData> = collection(this.firestore, collectionName);
          const q = query(collectionRef, where(fieldName, operator, value));
          const querySnapshot = await getDocs(q);
      
          // Convert the query snapshot to an array of JSON objects
          const result: DocumentData[] = [];
          querySnapshot.forEach((doc) => {
            result.push(doc.data());
          });
      
          return result;
        } catch (error) {
          console.error('Error while searching for document:', error);
          throw error;
        }
    }
    
}

async function test() {
    // Test getting collection
    const result = await firebaseClient.getCollection('Lots');
    console.log(result);
    // Test getting document
    //const result2 = await firebaseClient.getDocument('Lots','E3C08CD0-C651-42BC-9731-BD04242093DF', 'sections');
    //console.log(result2);
    //console.log(result2[0]['shape'])
    // Test updating document
    //const result3 = await firebaseClient.updateDocument('Parking Structure','Lot XYZ',{available: 0});
    // Test adding a new document without specifying document ID (Firestore generates a unique ID)
    //await firebaseClient.addDocument('Parking Structure', { /* new document data */ });
    // Test adding a new document with a specified document ID
    //await firebaseClient.addDocument('Parking Structure', { /* new document data */ }, 'customDocumentId');
    // Test deleting a document
    //await firebaseClient.deleteDocument('Parking Structure', 'customDocumentId'); // Replace 'customDocumentId' with the actual document ID
    // Test searching for documents
    //const searchResult = await firebaseClient.searchDocument('users', 'DocumentId', '==', 'abc@gmail.com');
    //console.log('Search Result:', searchResult);
}
  
const firebaseClient = new FirebaseClient();

//test();

export default firebaseClient;