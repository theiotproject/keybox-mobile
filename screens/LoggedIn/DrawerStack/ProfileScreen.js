import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, TextInput, Button, Text } from 'react-native-paper';
import themes from '../../../utils/themes';
import WrappedTextInput from '../../../components/WrappedTextInput';
import { logo } from '../../../assets';
import { AuthContext } from '../../../context/AuthContext';
import ChangePasswordModal from '../../../components/modals/ChangePasswordModal';
import ChangeEmailModal from '../../../components/modals/ChangeEmailModal';

const ProfileScreen = () => {

  // User variables
  const { user } = useContext(AuthContext);
  const [userName, setUserName] = useState(user?.displayName);
  const [userEmail, setUserEmail] = useState(user?.email);


  // Modal variables
  const [ visiblePassword, setVisiblePassword] = useState(false);
  const [ visibleEmail, setVisibleEmail] = useState(false);

  const handleChangeEmail = (newEmail, password) => {
    alert("Change email")
    console.log(newEmail, password)
  }
  
  const handleChangePassword = (password, newPassword) => {
    alert("Change password") 
    console.log(password, newPassword)
  }

  return (
    <>
      <View style={styles.container}>

        <View style={styles.avatarContainer}>
          {/* User Avatar */}
          <Avatar.Image
            style={styles.avatarImage}
            size={150}
            source={logo}
          />

          <Text variant='displayLarge' style={styles.textData}>{userName}</Text>
          <Text variant='titleLarge' style={styles.textData}>{userEmail}</Text>

        </View>

        

        {/* View containing buttons to make them flex horizontally */}
        <View style={styles.buttonContainer}>

          {/* Button for changing email */}
          <Button 
            compact 
            icon='email'
            mode="contained" 
            style={styles.button} 
            rippleColor={themes.colors.primaryRippleColor}
            onPress={()  => setVisibleEmail(true)}>
            Change Email
          </Button>

          <Text variant='labelLarge' style={styles.textButtonContainer}>or</Text>

          {/* Button for changing password */}

          <Button 
            compact 
            icon='lock'
            mode="contained" 
            style={styles.button} 
            rippleColor={themes.colors.primaryRippleColor}
            onPress={() => setVisiblePassword(true)}>
            Change Password
          </Button>
          
        </View>

      </View>


      <ChangePasswordModal 
        visible={visiblePassword}
        handleChangePassword={(password, newPassword) => {
          handleChangePassword(password, newPassword)
          setVisiblePassword(false)
        }}
        handleDismiss={() => setVisiblePassword(false)}
      />
    
      <ChangeEmailModal 
        visible={visibleEmail}
        handleChangeEmail={(newEmail, password) => {
          handleChangeEmail(newEmail, password)
          setVisibleEmail(false)
        }}
        handleDismiss={() => setVisibleEmail(false)}
      />
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    paddingVertical: 100,
  },

  // Avatar
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },

  avatarImage: {
    alignSelf: 'center'
  },

  // INPUTS
  inputContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    // backgroundColor: 'red'
  },

  input: {
    flex: 1,
    width: '100%',
    marginVertical: 10,
  },

  // TEXT DATA
  textDataLabel: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  textData: {
    alignSelf: 'center',
  },

  // BUTTONS
  buttonContainer: {
    flex: 1,
    // flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },

  button: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    paddingHorizontal: 0,
    height: 40,
    color: themes.colors.secondaryDark,
    borderColor: themes.colors.secondaryDark,
  },

  textButtonContainer: {
    marginHorizontal: 10,
    marginVertical: 20,
    alignSelf: 'center'

  }
});

export default ProfileScreen;
