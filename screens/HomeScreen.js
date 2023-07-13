import { ImageBackground, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { backgroundMain } from '../assets';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { signOut } from '../utils/userHandler';
import LogoutModal from '../components/LogOutModal';
import { FlatList } from 'react-native-gesture-handler';
import KeyboxList from '../components/KeyBoxList';
import AddKeyboxModal from '../components/AddKeyBoxModal';


const HomeScreen = () => {
  
  const navigation = useNavigation();

  // MODALS
  const [ logout, setLogout ] = useState(false)
  const [ addDevice, setAddDevice ] = useState(false)
  
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

  // KEYBOX LIST ITEMS
  const [keyboxList, setKeyboxList] = useState([
    { id: 1, name: 'Device 1' },
    { id: 2, name: 'Device 2' },
    { id: 3, name: 'Device 3' },
    { id: 4, name: 'Device 4' },
    { id: 5, name: 'Device 5' },
  ]);

  const handleAddDevice = (deviceName, deviceId) => {
    setKeyboxList(previous => [...previous, {id: deviceId, name: deviceName}])

    alert('Added Device');
    setAddDevice(false);
  }



  return (
    <ImageBackground style={styles.container} source={backgroundMain}>  

      <KeyboxList keyBoxList={keyboxList} />
   
      <Button mode='contained' title='AddDevice' text="Add Device" onPress={() => setAddDevice(true)}>
        Add Device
      </Button>

      <Button mode='contained' title='LogOut' text="LogOut" onPress={() => setLogout(true)}>
        LOG OUT
      </Button>
     

      { user ? <Text>{username}</Text> : null }

      <LogoutModal 
        visible={logout} 
        handleSignOut={() => {
          signOut()
          setLogout(false) 
        }} 
        handleDismiss={() => setLogout(false)} 
      />
    
      <AddKeyboxModal 
        visible={addDevice} 
        handleAdd={handleAddDevice} 
        handleDismiss={() => setAddDevice(false)} 
      />

    

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
