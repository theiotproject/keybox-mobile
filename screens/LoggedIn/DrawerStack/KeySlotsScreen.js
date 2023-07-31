import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import KeySlot from '../../../components/keyslots/KeySlot'
import { KeyboxContext } from '../DrawerNavigationScreen';

// Activity for showing all of Keyslots availible in current device
const KeySlotsScreen = () => {
  // Variable for getting current device, so only cards that belong to this device will show up
  const device = useContext(KeyboxContext);

  return (
    <View>
      <Text>KeySlotsScreen</Text>
      <Text>{device.deviceName}</Text>
      <KeySlot />
    </View>
  )
}

export default KeySlotsScreen

const styles = StyleSheet.create({})