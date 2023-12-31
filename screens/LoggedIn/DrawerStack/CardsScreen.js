import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import KeyCard from '../../../components/keycards/KeyCard'
import KeyCardPending from '../../../components/keycards/KeyCardPending'
import { useContext } from 'react'
import { KeyboxContext } from '../DrawerNavigationScreen'
import { Text } from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'


// Screen for showing all the cards (Requests and Regular ones)
const CardsScreen = () => {
  // Variable for getting current device, so only cards that belong to this device will show up
  const device = useContext(KeyboxContext);
  // List of all regular cards
  const [ cards, setCards ] = useState(['CEO', "Storage Worker", "Manager", "Mr. Albert", "Cleaner", "Ms. Ellen"])
  // List of all card requests (Pending Cards)
  const [ cardsPending, setCardsPending ] = useState(['11111111111', "222222222222", "333333333333"])


  // Showing all cards in two separate scrollable Flatlists
  return (
    <View style={styles.container}>

      <Text>{device.deviceName}</Text>

      <View style={styles.cardsPendingContainer}>
        <Text variant='displaySmall' style={styles.cardLabel}>Card Requests</Text>

        {/* Rendering all cards in flatlist */}
        <FlatList
            scrollEnabled ={true}
            data={cardsPending}
            renderItem={({ item }) => 
              <KeyCardPending deviceId={item} />
            }
        />
      </View>

      <View style={styles.cardsContainer}>
        <Text variant='displaySmall' style={styles.cardLabel}>Cards</Text>

        {/* Rendering all cards in flatlist */}
        <FlatList
            scrollEnabled ={true}
            data={cards}
            renderItem={({ item }) => 
              <KeyCard deviceName={item} />
            }
        />
      </View>
    </View>

  )
}

export default CardsScreen

const styles = StyleSheet.create({
  cardLabel: {
    paddingHorizontal: 10,
    marginTop: 5,
    fontWeight: 'bold'
  },

  container: {
    flex: 1,
    flexDirection: 'column'
  },

  cardsPendingContainer: {
    flex: 1,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  
  cardsContainer: {
    flex: 2,
    borderRadius: 25,
    marginHorizontal: 5,
  },

})