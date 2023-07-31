import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DashboardScreen, { DashboardContext, KeyboxContext } from '../DrawerNavigationScreen'
import { useContext } from 'react'

const EventsScreen = () => {
    // Variable for getting current device, so only cards that belong to this device will show up
    const device = useContext(KeyboxContext);
  
  return (
    <View>
      <Text>EventScreen</Text> 
      <Text>{device.deviceName}</Text>
    </View>
  )
}

export default EventsScreen

const styles = StyleSheet.create({})