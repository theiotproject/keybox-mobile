import { StyleSheet, Text, View } from 'react-native'
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
import { Dimensions } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { auth } from '../../firebase';
import { useWindowDimensions } from 'react-native';
import themes from '../../utils/themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import LogoutModal from '../../components/modals/LogOutModal';
import { signOut } from '../../utils/userHandler';



const Drawer = createDrawerNavigator();


const DashboardScreen = () => {

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
      <Drawer.Navigator 
        screenOptions={{
          drawerStyle: {
            width: 250,
          },
          // If it is a tablet, then drawer will be always on screen
          drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
          
        //SWIPE
          swipeEnabled: true, //TODO Allow user to change this setting in settings
          swipeEdgeWidth: 125, // TODO change distance to more reasonable
          
        // HEADER
          headerStyle: {
            height: 82,
            // fontSize: 50
          },
          headerTitleStyle: {
            fontSize: 30,
          },

          // Left Header Icon
          headerLeftContainerStyle: {
            paddingTop: 5,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'red',
            paddingLeft: 10
            
          },
          headerLeft: () => (
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name="reorder-three-outline" size={40} color="black" />
            </TouchableOpacity>
          ),

          // Right Header Icon
          headerRightContainerStyle: { // TODO make it smaller, not as wide as it is now
            paddingTop: 5,
            justifyContent: 'center',
            paddingRight: 10,
            width: 40,
          },
          
          headerRight: () => (
            <TouchableOpacity  
              onPress={() => {
                alert("Here will be notifications")
              }}>
              <Ionicons name="notifications" size={25} color="black" />
            </TouchableOpacity>
          ),
         

        }}

        


        backBehavior='none'

        
        drawerContent={(props) => 
          <CustomDrawerContent {...props} handleLogout={() => setLogout(true)}/>
        } 
          
      >
        <Drawer.Screen name="Cards" component={CardsScreen}/>
        <Drawer.Screen name="Key Slots" component={KeySlotsScreen} />
        <Drawer.Screen name="Events" component={EventsScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Tester" component={Tester} />
      </Drawer.Navigator>


      {/* Modals  */}
      <LogoutModal 
          visible={logout} 
          handleSignOut={() => {
              signOut()
              setLogout(false) 
          }} 
          handleDismiss={() => setLogout(false)} 
      />
    </>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({})