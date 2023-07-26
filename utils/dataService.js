// import { addDoc, collection, getDocs } from 'firebase/firestore';
import uuid from 'react-native-uuid' // TEMPORARY
import { db, auth } from '../firebase';
import { addDoc, collection, getDocs, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';



export const AddKeyBox = async (id, name ) => {
    try {
        const docRef = await addDoc(collection(db, "keyboxes"), {
            deviceId: uuid.v4(),
            deviceName: name,
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
    try {
      const keyboxes = [];
      const querySnapshot = await getDocs(collection(db, "keyboxes"));
      querySnapshot.docs.forEach((doc) => {
        keyboxes.push({ docId: doc.id, ...doc.data() });
      });
      return keyboxes;
    } catch (e) {
      console.error("Error getting keyboxes: ", e);
      return [];
    }
};
