import { StyleSheet, View } from 'react-native'
import React from 'react'
import KeyCard from '../../../components/keycards/KeyCard'
import KeyCardPending from '../../../components/keycards/KeyCardPending'
import { useContext } from 'react'
import { KeyboxContext } from '../DrawerNavigationScreen'
import { Text } from 'react-native-paper'

const CardsScreen = () => {
 
  const device = useContext(KeyboxContext);

  return (
    <View>
      <Text>CardsScreen</Text>

      <Text>{device.deviceName}</Text>

      <Text variant='displaySmall' style={styles.cardLabel}>Card requests</Text>
      <KeyCardPending deviceId="4563465745355683289"/>
      <KeyCardPending deviceId="2132769843643501104"/>

      <Text variant='displaySmall' style={styles.cardLabel}>Cards</Text>
      <KeyCard deviceName="The End Is Never The End Is Never The End Is Never The End Is Never " />
      <KeyCard deviceName="JS Developer™ " />
      <KeyCard deviceName="A. Morgan " />
      <KeyCard deviceName="Oppenheimer " />
    </View>
  )
}

export default CardsScreen

const styles = StyleSheet.create({
  cardLabel: {
    paddingHorizontal: 10,
    marginTop: 5,
    fontWeight: 'bold'
  }
})