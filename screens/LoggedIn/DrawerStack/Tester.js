import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import firebase from 'react-native-firebase' // DOES NOT FUCKING WORK OF FUCKING COURSE
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { AddKeyBox, GetKeyBoxes, getDataFromKeyBoxes } from '../../../utils/dataService';

const Tester = () => {

  const [keyboxes, setKeyboxes] = useState([]);

  return (
    <>
      
      <Button mode='contained' onPress={() => AddKeyBox()}>ADD TEMPLOT</Button>
      <Button mode='contained' onPress={() => {
        // setKeyboxes(getDataFromKeyBoxes("deviceName"))
        setKeyboxes(GetKeyBoxes());
        console.log(keyboxes)
      }}>GET DATA</Button>
      <FlatList
        style={{backgroundColor: 'red'}}
        data={keyboxes}
        renderItem={({item}) => <Text>{item}</Text>}
      />

      
    </>
  ) 
}

export default Tester

const styles = StyleSheet.create({})