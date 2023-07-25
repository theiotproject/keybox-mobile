import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import firebase from 'react-native-firebase' // DOES NOT FUCKING WORK OF FUCKING COURSE
import { FlatList } from 'react-native-gesture-handler';
import { auth, db } from '../../../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Button } from 'react-native-paper';
import uuid from 'react-native-uuid' // TEMPORARY

const Tester = () => {

  
    const AddKeyBox = async () => {
      try {
        const docRef = await addDoc(collection(db, "keyboxes"), {
          deviceId: uuid.v4(),
          deviceName: "Tester with uuid an owner ID",
          deviceStatus: true,
          ownerId: auth.currentUser.uid
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    const GetKeyBoxes = async () => {
      const querySnapshot = await getDocs(collection(db, "keyboxes"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      })
    }
    

  return (
    <>
      {/* <View style={{flex: 1, marginTop: 100}}>  
        <FlatList
          style={{height: '100%'}}
          data={keyboxes}
          numColumns={1}
          renderItem={({ item }) => {
            <Pressable>
                <Text>{item.deviceId}</Text>
                <Text>{item.deviceName}</Text>
                <Text>{item.deviceStatus}</Text>
                <Text>{item.ownerId}</Text>

            </Pressable>
          }}
      
        />
      </View> */}

      <Button mode='contained' onPress={() => AddKeyBox()}>ADD TEMPLOT</Button>
      <Button mode='contained' onPress={() => GetKeyBoxes()}>GET DATA</Button>
    </>
  ) 
}

export default Tester

const styles = StyleSheet.create({})