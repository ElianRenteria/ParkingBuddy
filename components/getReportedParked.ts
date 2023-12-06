import firebaseClient from './FirebaseClient';

class counter{
  getReportedParked = async (name:string) => {
    try {
      const data = await firebaseClient.getCollection('Lots');
      //console.log(data);
      data.forEach((doc) => {
        let count = 0;
        if (doc.name == name) {
          doc['sections'].forEach((section: any) => {
                count += section['reportedParked'];
              }
          );  
        }    

        return count;
      });
    } catch (error) {
      console.error('Error fetching reported parked data:', error);
      return {}; // Return an empty object in case of an error
    }
  };
}


const c = new counter();

export default c;



