import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenStack } from 'react-native-screens';
import CardsScreen from './DrawerStack/CardsScreen';
import KeySlotsScreen from './DrawerStack/KeySlotsScreen';
import EventsScreen from './DrawerStack/EventsScreen';
import { Button } from 'react-native-paper';
import SettingsScreen from './DrawerStack/SettingsScreen';
import CustomDrawerContent from '../../components/drawer/CustomDrawerContent';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Tester from './DrawerStack/Tester';
import { Dimensions } from 'react-native';

const Drawer = createDrawerNavigator();
const width = Dimensions.get('window').width;
const drawerWidth = width / 2;

const DashboardScreen = () => {

  const navigation = useNavigation();

  const [currentDevice, setCurrentDevice] = useState({deviceId: 1, deviceName: "Hello Mobile World", deviceStatus: false, ownerId: 2137})

  return (
    <>
      <Drawer.Navigator 
        screenOptions={{
          drawerStyle: {
            width: 250,
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} progress={navigation.progress}/>}
      >
        <Drawer.Screen name="Cards" component={CardsScreen}/>
        <Drawer.Screen name="Key Slots" component={KeySlotsScreen} />
        <Drawer.Screen name="Events" component={EventsScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Tester" component={Tester} />
      </Drawer.Navigator>
    </>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({})