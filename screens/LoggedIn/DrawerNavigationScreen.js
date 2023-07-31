import { StyleSheet, useWindowDimensions } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import LogoutModal from '../../components/modals/LogOutModal';
import { signOut } from '../../utils/userHandler';
import { createContext } from 'react';
import CustomDrawer from '../../components/drawer/CustomDrawer';
import { AddKeyBox, GetKeyBoxes, GetKeyBoxesUpdt } from '../../utils/dataService';
import AddKeyboxModal from '../../components/modals/AddKeyBoxModal';


// For this activity to be using side drawer
const Drawer = createDrawerNavigator();

// For sending device between activities
export const KeyboxContext = createContext();


// Main Activity of the app. It has Side Drawer to navigate between /DrawerStack Activities/Screens
const DrawerNavigationScreen = () => {
  // Loading
  const [loading, setLoading] = useState(false);
  
  // Get dimensions of screen
  const dimensions = useWindowDimensions()
  
  // Navigation
  const navigation = useNavigation();
  
  // -------------------------
  // USER MANAGEMENT
  const { user } = useContext(AuthContext);
  // handle User State
  useEffect(() => {
    //If not logged in go to sign in screen 
    if (!user && navigation) {
      navigation.navigate('SignIn'); 
      alert('You are not logged in. Please log in.');
    }
  }, [ user, navigation ]);
  // --------------------------


  // --------------------------
  // KEYBOX MANAGEMENT
  const [keyboxList, setKeyboxList] = useState();

  const [currentDevice, setCurrentDevice] = useState({deviceId: 1, deviceName: "Hello Mobile World", deviceStatus: false, ownerId: 2137})

  // Try fetching data from database (firestore), sets loading = true if fetching/ when using functions, and sets loading = false if finished
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await GetKeyBoxes();
      setKeyboxList(data);
    } catch (error) {
      console.error("Error fetching keyboxes: ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // --------------------------



  // MODALS
  // logout
  const [ logout, setLogout ] = useState(false)
  // add
  const [visibleAdd, setVisibleAdd] = useState(false);

  
  return (
    <>
      {/* Sends currentDevice across all activities  */}
      <KeyboxContext.Provider value={currentDevice}>
        {/* Side Drawer (left) */}
        <CustomDrawer 
          handleLogout={() => setLogout(true)} 
          handleAddDevice={() => setVisibleAdd(true)}
          handleSelectDevice={(device) => setCurrentDevice(device)} 
          keyboxList={keyboxList} 
          loading={loading} />

        {/* Modals  */}
        <LogoutModal 
          visible={logout} 
          handleSignOut={() => {
            signOut()
            setLogout(false) 
          }} 
          handleDismiss={() => setLogout(false)} 
        />

        <AddKeyboxModal 
          visible={visibleAdd} 
          handleAdd={(deviceId, deviceName) => { 
            AddKeyBox(deviceId, deviceName)
            setVisibleAdd(false)
          }}
          handleDismiss={() => setVisibleAdd(false)}  
        />

        
      </KeyboxContext.Provider>
    </>
  )
}

export default DrawerNavigationScreen

const styles = StyleSheet.create({})