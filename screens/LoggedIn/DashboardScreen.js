import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CardsScreen from './DrawerStack/CardsScreen';
import KeySlotsScreen from './DrawerStack/KeySlotsScreen';
import EventsScreen from './DrawerStack/EventsScreen';
import SettingsScreen from './DrawerStack/SettingsScreen';
import CustomDrawerContent from '../../components/drawer/CustomDrawerContent';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Tester from './DrawerStack/Tester';
import { Dimensions } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { auth } from '../../firebase';

const Drawer = createDrawerNavigator();
const width = Dimensions.get('window').width;
const drawerWidth = width / 2;

const DashboardScreen = () => {

  const navigation = useNavigation();

  const [keyBoxList, setKeyboxList] = useState();

  const [currentDevice, setCurrentDevice] = useState({deviceId: 1, deviceName: "Hello Mobile World", deviceStatus: false, ownerId: 2137})


  // USER MANAGEMENT
  const { user } = useContext(AuthContext);
  
  // HANDLE USER STATE
  //If not logged in go to sign in screen 
  useEffect(() => {
      if (!user && navigation) {
        // navigation.navigate('SignIn'); // TODO uncomment after dashboard is done
        alert('You are not logged in. Please log in.');
      }
  }, [ user, navigation ]);
  // --------------------------



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