import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, DocumentData, CollectionReference, doc, getDoc } from 'firebase/firestore/lite';
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

    async getDocument(collectionName: string, documentId: string): Promise<DocumentData | undefined> {
        try {
            const documentRef = doc(this.firestore, collectionName, documentId);
            const documentSnapshot = await getDoc(documentRef);

            if (documentSnapshot.exists()) {
            return documentSnapshot.data();
            } else {
            console.error('Document does not exist');
            return undefined;
            }
        } catch (error) {
            console.error('Error while fetching document:', error);
            throw error;
        }
    }
  
    // Add more methods for interacting with Firebase services as needed
}

async function test() {
    const result = await firebaseClient.getCollection('Parking Structure');
    console.log(result);
    const result2 = await firebaseClient.getDocument('Parking Structure','Lot XYZ');
    console.log(result2);
}
  
const firebaseClient = new FirebaseClient();

//test();
  
export default firebaseClient;