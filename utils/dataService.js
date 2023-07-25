// import { addDoc, collection, getDocs } from 'firebase/firestore';
import uuid from 'react-native-uuid' // TEMPORARY
import { db, auth } from '../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

//TODO ADD VERIFICATION TO CHECK IF USER IS LOGGED IN
// For some reason it does not work in separate file


export const AddKeyBox = async () => {
    try {
        const docRef = await addDoc(collection(db, "keyboxes"), {
            deviceId: uuid.v4(),
            deviceName: "ggfghghg",
            deviceStatus: true,
            ownerId: auth.currentUser.uid
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Get all keyboxes
export const GetKeyBoxes = async () => {
    const keyboxes = []
    const querySnapshot = (await getDocs(collection(db, "keyboxes")));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        keyboxes.push(doc.data())
    })
    return keyboxes
}

// Get all keyboxes
export const REPAIRTHIS__GetKeyBoxes = async () => {
    const keyboxes = []
    const querySnapshot = (await getDocs(collection(db, "keyboxes")));
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        const {deviceName, deviceId, deviceStatus, ownerId} = doc.data()
        keyboxes.push({
            id: doc.id,
            deviceId,
            deviceName,
            deviceStatus,
            ownerId,
        })
    })
    return keyboxes
}


// Function to get data from returned keyboxes by field name
export const getDataFromKeyBoxes = async (fieldName) => {
    try {
        const keyboxes = await GetKeyBoxes();
        const fieldData = keyboxes.map((keybox) => keybox[fieldName]);
        return fieldData;
    } catch (e) {
        console.error("Error getting field data: ", e);
        return [];
    }
}