import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import ClickableText from '../../components/ClickableText';
import WrappedTextInput from '../../components/WrappedTextInput';
import Spacer from '../../components/Spacer';
import AnimatedLogo from '../../components/AnimatedLogo';
import { useNavigation } from '@react-navigation/native';
import themes from '../../utils/themes';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { changePasswordValidationSchema, resetPasswordValidationSchema } from '../../utils/yupShema';
import { firebase } from '@react-native-firebase/auth';
import { resetPassword } from '../../utils/userHandler';
// import firebase from 'react-native-firebase'; //oes not work in expo

const ResetPasswordScreen = () => {

  // User variables used for resetting password
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Used fo navigation between activities
  const navigation = useNavigation();

  // HANDLING FORM
  // Variables for handling form validation (using yup schema and yupResolver)
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(resetPasswordValidationSchema),
    defaultValues: {
        email: '',
    },
  });

  // When form is submitted (Works only if every field is filled correctly)
  const onSubmit = (data) => {
    alert("working")
    console.log('Email:', data.email);
    resetPassword(data.email)
  };


 

  return (
    <View style={styles.container}>

      {/* CONTAINER FOR LOGO AND WELCOME TEXT  */}
      <View style={styles.logoContainer}>

        {/* It may be stupid, but it works*/}
        <Spacer />
        <Spacer />

        <View style={styles.logoImageContainer}>
            <AnimatedLogo />
        </View>

        {/* HELLO TEXT */}
        <Text variant='headlineSmall' style={styles.textHeadline}> Reset Password </Text>

      </View>


      <KeyboardAvoidingView style={styles.inputContainer} >
        
        {/* EMAIL */}
        <Controller
          style={styles.controller}
          control={control}
          render={({ field }) => (
              <>
                <TextInput
                  label='Email'
                  mode='outlined'
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  placeholder="Email Address"
                  style={styles.inputText}
                  error={errors.email ? errors.email.message : null}
                />
                {errors.email && (
                    <Text style={styles.error}>{errors.email.message}</Text>
                )}
              </>
          )}
          name="email"
          rules={{ required: true }}
          defaultValue=""
        />

        
      </KeyboardAvoidingView>

      <View style={styles.buttonContainer}>
        {/* Reset Password Button */}
        <Button 
          mode="contained" 
          onPress={handleSubmit(onSubmit)} 
          style={styles.button}
          rippleColor={themes.colors.primaryRippleColor}>
          Reset Password
        </Button>

      </View>

      

      {/* CHANGE PASSWORD, REGISTER */}
      <View style={styles.clickableTextContainer}>
          {/* Forgot Password */}
          <ClickableText
              style={styles.clickableText}
              text="Have an account? Sign In"
              handlePress={() => navigation.navigate("SignIn")}
          />

          <ClickableText
              style={styles.clickableText}
              text="Don't have an account? Sign Up"
              handlePress={() => navigation.navigate("SignUp")}
          />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // LOGO CONTAINER
  logoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  logoImageContainer: {
      marginVertical: 25, //Idk how it makes it look better, but it looks better
      width: 95,
      height: 95,
      alignItems: 'center',
      justifyContent: 'space-evenly',
  },

  logoImage: {
      resizeMode: 'contain',
      width: '100%',
  },


  // INPUTS
  inputContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  controller: {

  },

  input: {
    width: '100%',
    // height: 50,
  },

  error: {
    color: 'red',
    fontSize: 10,
  },

  // BUTTON
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    // backgroundColor: 'green',
  },

  button: {
    width: '100%',
    borderRadius: 5,

  },

  // CLICKABLE TEXT
  clickableTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    // backgroundColor: 'pink',
  },

  clickableText: {
      flex: 1,
      alignItems:'center',
  },

  // TEXT
  textHeadline: {
      color: 'black',
      fontWeight: 'bold'
  }


});

export default ResetPasswordScreen;
