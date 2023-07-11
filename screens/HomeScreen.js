import { ImageBackground, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
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
  const [username, setUsername] = useState('');

  //If not logged in go to sign in screen 
  useEffect(() => {
    if (!user && navigation) {
      navigation.navigate('SignIn');
      alert('You are not logged in. Please log in.');
    }
  }, [ user, navigation ]);

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

      <Text>{username}</Text> 

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
