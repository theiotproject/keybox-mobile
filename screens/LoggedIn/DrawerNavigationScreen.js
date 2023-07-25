import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CardsScreen from './DrawerStack/CardsScreen';
import KeySlotsScreen from './DrawerStack/KeySlotsScreen';
import EventsScreen from './DrawerStack/EventsScreen';
import SettingsScreen from './DrawerStack/SettingsScreen';
import CustomDrawerContent from '../../components/drawer/CustomDrawerContent';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Tester from './DrawerStack/Tester';
// import { Dimensions } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
// import { auth } from '../../firebase';
import themes from '../../utils/themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import LogoutModal from '../../components/modals/LogOutModal';
import { signOut } from '../../utils/userHandler';
import { createContext } from 'react';
import CustomDrawer from '../../components/drawer/CustomDrawer';


// For this activity to be using side drawer
const Drawer = createDrawerNavigator();

// For sending device between activities
export const KeyboxContext = createContext();

const DrawerNavigationScreen = () => {
  
  // Get dimensions of screen
  const dimensions = useWindowDimensions()
  
  // Navigation
  const navigation = useNavigation();
  
  // KEYBOX MANAGEMENT
  const [keyBoxList, setKeyboxList] = useState();
  
  const [currentDevice, setCurrentDevice] = useState({deviceId: 1, deviceName: "Hello Mobile World", deviceStatus: false, ownerId: 2137})
  
  // MODALS
  const [ logout, setLogout ] = useState(false)
  
  // USER MANAGEMENT
  const { user } = useContext(AuthContext);
  
  // HANDLE USER STATE
  useEffect(() => {
    //If not logged in go to sign in screen 
    if (!user && navigation) {
      navigation.navigate('SignIn'); // TODO uncomment after dashboard is done
      alert('You are not logged in. Please log in.');
    }
  }, [ user, navigation ]);
  // --------------------------
  
  
  return (
    <>
      {/* Sends currentDevice across all activities  */}
      <KeyboxContext.Provider value={currentDevice}>
        {/* Side Drawer (left) */}
        <CustomDrawer handleLogout={() => setLogout(true)} handleSelectDevice={(device) => setCurrentDevice(device)}/>

        {/* Modals  */}
        <LogoutModal 
            visible={logout} 
            handleSignOut={() => {
              signOut()
              setLogout(false) 
            }} 
            handleDismiss={() => setLogout(false)} 
            />
      </KeyboxContext.Provider>
    </>
  )
}

export default DrawerNavigationScreen


const styles = StyleSheet.create({})