import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, TextInput, Button, Text } from 'react-native-paper';
import themes from '../../../utils/themes';
import WrappedTextInput from '../../../components/WrappedTextInput';
import { logo } from '../../../assets';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.avatarContainer}>
        {/* User Avatar */}
        <Avatar.Image
          size={150}
          source={logo}
        />
      </View>
      

      <View style={styles.inputContainer}>
        {/* Username */}
        <WrappedTextInput
          label="Username"
          mode="outlined"
          value="JohnDoe"
          disabled
          style={styles.input}
        />

        {/* Email */}
        <WrappedTextInput
          label="Email"
          mode="outlined"
          value="johndoe@example.com"
          disabled
          style={styles.input}
        />
      </View>
      

      {/* View containing buttons to make them flex horizontally */}
      <View style={styles.buttonContainer}>
        {/* Button for changing password */}
        <Button 
          compact 
          mode="outlined" 
          style={styles.button} 
          textColor={themes.colors.secondaryDark}
          rippleColor={themes.colors.rippleColor}>
          Change Password
        </Button>

        <Text variant='labelLarge' style={styles.textButtonContainer}>or</Text>

        {/* Button for changing email */}
        <Button compact 
          mode="outlined" 
          style={styles.button} 
          textColor={themes.colors.secondaryDark}
          rippleColor={themes.colors.rippleColor}>
          Change Email
        </Button>
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'space-around',
    alignItems: 'center',
    padding: 16,
  },

  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },

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

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },

  button: {
    flex: 1,
    alignSelf: 'center',
    borderRadius: 5,
    paddingHorizontal: 0,
    height: 40,
    color: themes.colors.secondaryDark,
    borderColor: themes.colors.secondaryDark,
  },

  textButtonContainer: {
    marginHorizontal: 10,
    alignSelf: 'center'

  }
});

export default ProfileScreen;
