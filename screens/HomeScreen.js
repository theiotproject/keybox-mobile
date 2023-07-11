import { ImageBackground, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { backgroundMain } from '../assets';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = () => {
  
  const navigation = useNavigation();
  
  // USER MANAGEMENT
  const { user } = useContext(AuthContext);

  // If no user, then go back to login
  if (!user) {
    console.log('you are not logged in')
    navigation.navigate('SignIn')
    return null;
  }


  // DRAWER CONTROL
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  
  const Drawer = createDrawerNavigator();


  return (
    <ImageBackground style={styles.container} source={backgroundMain}>  

      <Button mode='contained' title='open' onPress={openDrawer}/>
      <Button mode='contained' title='close' onPress={closeDrawer}/>

      {/* <Text>{auth.currentUser.displayName}</Text>  */}

    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  drawer: {
    width: '70%',
    backgroundColor: 'transparent',
  },
});
