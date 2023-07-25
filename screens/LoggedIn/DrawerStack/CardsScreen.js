import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import KeyCard from '../../../components/keycards/KeyCard'
import KeyCardPending from '../../../components/keycards/KeyCardPending'
import { useContext } from 'react'
import { KeyboxContext } from '../DrawerNavigationScreen'

const CardsScreen = () => {
 
  const device = useContext(KeyboxContext);

  return (
    <View>
      <Text>CardsScreen</Text>

      <Text>{device.deviceName}</Text>

      <KeyCard deviceName="The End Is Never The End Is Never The End Is Never The End Is Never " />
    
      <KeyCardPending deviceId="4563465745355683289"/>
    
    </View>
  )
}

export default CardsScreen

const styles = StyleSheet.create({})