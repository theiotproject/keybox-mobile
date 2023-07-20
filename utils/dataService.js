// TODO dataService.js
// import app from './firebase'; // Path to your firebase.js file
// import { firestore } from "firebase-admin";


// const db = firestore();


// const getKeyboxesData = async () => {
//   try {
//     const snapshot = await db.collection('keyboxes').get();
//     const keyboxesData = [];
//     snapshot.forEach((doc) => {
//       const { deviceId, deviceName, deviceStatus, ownerId } = doc.data();
//       keyboxesData.push({
//         id: doc.id,
//         deviceId,
//         deviceName,
//         deviceStatus,
//         ownerId,
//       });
//     });
//     return keyboxesData;
//   } catch (error) {
//     console.error('Error fetching keyboxes data:', error);
//     return [];
//   }
// };

// export default getKeyboxesData;
