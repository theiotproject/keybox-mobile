import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {  Button, Checkbox, Text, TextInput } from 'react-native-paper';
import { backgroundMain, logo } from '../assets';
import ClickableText from '../components/ClickableText';
import WrappedTextInput from '../components/WrappedTextInput';
import { useForm, Controller } from "react-hook-form"
import validationSchema from '../utils/yupShema';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import Spacer from '../components/Spacer';
import { signUp } from '../utils/userHandler';
import { Pressable } from 'react-native';
import themes from '../utils/themes';





// ToDo Replace TextInput with WrappedTextInput
const SignUpScreen = () => {

    // USER VARIABLES
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    const [sendExtraEmails, setSendExtraEmails] = useState(false);
    const navigation = useNavigation();

    
    // GOOGLE USER VARIABLES
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    
    

    // FORM VARIABLES
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        setUsername(data.username);
        setEmail(data.email);
        setPassword(data.password);
        console.log(errors);

        // Sign Up
        signUp(auth, data.email, data.password, data.username);

    };

    const handleSignUpGoogle = () =>
    {
        null
    }



    

    // -------------


    
    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    



  return (
    <View
        style={styles.container}
    >
        {/* CONTAINER FOR LOGO AND WELCOME TEXT  */}
        <View style={styles.logoContainer}>
            {/* Unnecessary logic here */}
            <Pressable style={styles.logoImage} 
                onPress={() => null}
            >
                <Image 
                    style={styles.logoImage} 
                    source={logo} />
            </Pressable>
        </View>
        
        {/* HELLO TEXT */}
        <Text variant='headlineSmall' style={styles.textHeadline}> Hello Again! Sign In </Text>

        {/* FORM CONTAINER */}
        <View style={styles.formContainer}>

            {/* CONTAINER FOR INPUTS */}
            <View style={styles.inputContainer}>
                {/* USERNAME */}
                <Controller
                    style={styles.controller}
                    control={control}
                    render={({ field }) => (
                        <>
                            <TextInput
                                label='Username'
                                mode='outlined'
                                onChangeText={field.onChange}
                                onBlur={field.onBlur}
                                value={field.value}
                                placeholder="Username"
                                style={styles.inputText}
                                error={errors.username ? errors.username.message : null}
                            />
                            {errors.username && (
                            <Text style={styles.error}>{errors.username.message}</Text>
                            )}
                        </>
                    )}
                    name="username"
                    rules={{ required: true }}
                    defaultValue=""
                />

                <Spacer/>

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

                <Spacer/>

                {/* PASSWORD */}
                <Controller
                    style={styles.controller}
                    control={control}
                    render={({ field }) => (
                        <>
                            <TextInput
                                label='Password'
                                mode='outlined'
                                onChangeText={field.onChange}
                                onBlur={field.onBlur}
                                value={field.value}
                                placeholder="Password"
                                style={styles.inputText}
                                error={errors.password ? errors.password.message : null}
                                secureTextEntry
                            />
                            {errors.password && (
                            <Text style={styles.error}>{errors.password.message}</Text>
                            )}
                        </>
                    )}
                    name="password"
                    rules={{ required: true }}
                    defaultValue=""
                />

                <Spacer/>

                {/* REPEAT PASSWORD */}
                <Controller
                    style={styles.controller}
                    control={control}
                    render={({ field }) => (
                        <>
                            <TextInput
                                label='Confirm Password'
                                mode='outlined'
                                onChangeText={field.onChange}
                                onBlur={field.onBlur}
                                value={field.value}
                                placeholder="Confirm Password"
                                style={styles.inputText}
                                error={errors.confirmPassword ? errors.confirmPassword.message : null}
                                secureTextEntry
                            />
                            {errors.confirmPassword && (
                                <Text style={styles.error}>{errors.confirmPassword.message}</Text>
                            )}
                        </>
                    )}
                    name="confirmPassword"
                    rules={{ required: true }}
                    defaultValue=""
                />

                {/* CHECKBOX */}
                <View style={styles.checkboxContainer}>
                    
                    <Controller
                        control={control}
                        name="agreeTerms"
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Checkbox.Item
                                    label="By creating an account, you agree to our terms and conditions"
                                    labelStyle={styles.checkboxLabel}
                                    position="leading"
                                    style={styles.checkbox}
                                    status={value ? 'checked' : 'unchecked'}
                                    onPress={() => onChange(!value)}
                                />

                                {errors.agreeTerms && (
                                    <Text style={styles.error}>{errors.agreeTerms.message}</Text>
                                )}
                            </>
                            
                        )}
                    />
                
                </View>

            </View>

 


            {/* CONTAINER FOR BUTTONS */}
            <View style={styles.buttonContainer}>


                {/* SIGN IN - BUTTON */}
                <Button
                    onPress={handleSubmit(onSubmit)}
                    mode='contained'
                    uppercase={true}
                    style = {styles.button}
                >
                        SIGN UP
                </Button>

                {/* OR */}
                <Text variant='labelLarge' style={styles.text}>or</Text>

                {/* SIGN IN GOOGLE - BUTTON */}
                <Button
                    onPress={handleSignUpGoogle}
                    mode='contained'
                    uppercase={true}
                    style = {styles.buttonVariant}
                    icon='google'
                >
                        SIGN UP WITH GOOGLE 
                </Button>
            </View>

            {/* TO SIGN IN */}
            <View style={styles.clickableTextContainer}>
                <ClickableText
                    text="Have an account? Sign In"
                    handlePress={handleSignIn}
                />
            </View>

        </View>

    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    formContainer: {
        width:'100%',
        paddingTop: 25 ,
        paddingHorizontal: '3%',
    },

// INPUT STYLES

    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },

    inputText: {
        height: 40
    },

    inputWrapper: {
        marginTop: 25,
    },  

    error: {
        color: 'red',
        fontSize: 10,
    },

// CONTROLLERS - input
   
    controller: {
        paddingVertical: 20,
    },

    
// BUTTON STYLES

    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        width: '100%',
        borderRadius: 5,
        marginVertical: 5,
    },

    buttonVariant: {
        color: 'white',
        backgroundColor: themes.colors.buttonVariant,
        width: '100%',
        borderRadius: 5,
        marginVertical: 5,
    },

// CHECKBOX
    checkboxContainer: {
        width: '100%',
    },

    checkboxLabel: {
        fontSize: 10,
    },

    checkbox: {
        fontSize: 5,
        textAlign: 'left',
    },

// IMAGE STYLES

    logoContainer: {
        marginVertical: 25,
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoImage: {
        resizeMode: 'contain',
        width: '100%',
    },


// CLICKABLE TEXT

    clickableTextContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        
    },

    clickableText: {
        flex:1,
        alignItems:'center',
    },

// Text

    text: {
        color: 'black',
    },
    
    textHeadline: {
        color: 'black',
        fontWeight: 'bold'
    }

})