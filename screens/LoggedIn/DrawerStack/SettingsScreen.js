import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { KeyboxContext } from '../DrawerNavigationScreen';

// Activity for changing settings of this app
const SettingsScreen = () => {
  // TODO do i even need this in seetings?
  // Variable for getting current device, so only cards that belong to this device will show up
  const device = useContext(KeyboxContext);
  
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>{device.deviceName}</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})