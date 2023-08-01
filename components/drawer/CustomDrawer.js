import { StyleSheet } from 'react-native'
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import EventsScreen from '../../screens/LoggedIn/DrawerStack/EventsScreen';
import KeySlotsScreen from '../../screens/LoggedIn/DrawerStack/KeySlotsScreen';
import CardsScreen from '../../screens/LoggedIn/DrawerStack/CardsScreen';
import SettingsScreen from '../../screens/LoggedIn/DrawerStack/SettingsScreen';
import Tester from '../../screens/LoggedIn/DrawerStack/Tester';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import themes from '../../utils/themes';
import CustomDrawerContent from './CustomDrawerContent';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Drawer = createDrawerNavigator();


const CustomDrawer = ({ handleLogout, handleAddDevice, handleEditDevice, handleSelectDevice, keyboxList, loading }) => {

    // Get dimensions of screen
    const dimensions = useWindowDimensions()

    // Navigation
    const navigation = useNavigation();   

    return (
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
                
                drawerActiveTintColor: themes.colors.secondary,
                drawerInactiveTintColor: 'red'
            }}

            backBehavior='none'

            drawerContent={(props) => 
                <CustomDrawerContent {...props} 
                    handleLogout={() => handleLogout()} 
                    handleAddDevice={() => handleAddDevice()}
                    handleEditDevice={(device) => handleEditDevice(device)}
                    handleSelectDevice={(device) => handleSelectDevice(device)} 
                    keyboxList={keyboxList} 
                    loading={loading} />
            } 
        >
            <Drawer.Screen name="Events" component={EventsScreen} />
            <Drawer.Screen name="Key Slots" component={KeySlotsScreen} />
            <Drawer.Screen name="Cards" component={CardsScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Tester" component={Tester} />
        </Drawer.Navigator>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})