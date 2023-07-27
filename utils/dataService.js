// import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { addDoc, collection, doc, getDocs, onSnapshot, updateDoc } from 'firebase/firestore';

// Add new keybox with current user id as ownerId
export const AddKeyBox = async ( deviceId, deviceName ) => {
    try {
        const docRef = await addDoc(collection(db, "keyboxes"), {
            deviceId: deviceId,
            deviceName: deviceName,
            deviceStatus: true,
            ownerId: auth.currentUser.uid,
            // slots: []
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Get all keyboxes
export const GetKeyBoxes = async () => {
    try {
        const keyboxes = [];
        const querySnapshot = (await getDocs(collection(db, "keyboxes")));
        querySnapshot.docs.forEach((doc) => {
            keyboxes.push({ docId: doc.id, ...doc.data() });
        });
        return keyboxes;
    } catch (e) {
        console.error("Error getting keyboxes: ", e);
        return [];
    }
};

// TODO MAKE IT WORK or not
export const GetKeyBoxesNew = async () => {
    // try {
    //     const keyboxes = [];
    //     firestore.collection(db, "keyboxes").where("ownerId", '==', auth.currentUser.uid), (snapshot) => {
    //         snapshot.docs.forEach((doc) => {
    //             keyboxes.push({ docId: doc.id, ...doc.data() });
    //         });
    //         return keyboxes;
    //     };
    // } catch (e) {
    // console.error("Error getting keyboxes: ", e);
    // return [];
    // }
};

// Edit Keyboxes

export const EditKeybox = async (docId, deviceName, deviceStatus) => {
    try {
        console.log("Received data in EditKeybox:", docId, deviceName, deviceStatus);
        const deviceRef = doc(db, "keyboxes", docId);
        const updateData = {
            deviceName: deviceName,
            // deviceStatus: true,
        };

        await updateDoc(deviceRef, updateData);
        console.log("Document updated successfully.");
    } catch (error) {
        console.error("Error updating document:", error);
        // Handle any errors that might occur during the update process
    }

};



