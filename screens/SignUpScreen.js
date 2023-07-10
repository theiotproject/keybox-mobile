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
import validationSchema from '../utils/yup';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"


// ToDo Replace TextInput with WrappedTextInput
const SignUpScreen = () => {

    // USER VARIABLES
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    const [sendExtraEmails, setSendExtraEmails] = useState(false);
    const navigation = useNavigation();

    
    

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

        signUp();
    
    };



    

    // -------------


    const signUp = () => {
        
        //CreateUser
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            const user = auth.currentUser;
            console.log('Registered with: ', user.email);
            // Setting Username
            user.updateProfile({
                displayName: username,
            })
        })
        .catch(error => alert(error.message));
      

    }

    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    



  return (
    <ImageBackground
        style={styles.container}
        source={backgroundMain} 
    >
        {/* CONTAINER FOR LOGO AND WELCOME TEXT  */}
        <View style={styles.logoContainer}>

            <Image 
                style={styles.logoImage} 
                source={logo} />


        </View>

        {/* CONTAINER FOR INPUTS */}
        <View style={styles.inputContainer}>

            {/* USERNAME */}
            <Controller
                style={styles.controller}
                control={control}
                render={({ field }) => (
                <>
                    <TextInput
                        label='username'
                        mode='flat'
                        onChangeText={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        placeholder="Username"
                        error={errors.username ? errors.username.message : null}
                    />
                    {errors.username && (
                    <Text style={{ color: 'red' }}>{errors.username.message}</Text>
                    )}
                </>
                )}
                name="username"
                rules={{ required: true }}
                defaultValue=""
            />

            {/* EMAIL */}
            <Controller
                style={styles.controller}
                control={control}
                render={({ field }) => (
                <>
                    <TextInput
                        label='Email'
                        mode='flat'
                        onChangeText={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        placeholder="Email Address"
                        error={errors.email ? errors.email.message : null}

                    />
                    {errors.email && (
                    <Text style={{ color: 'red' }}>{errors.email.message}</Text>
                    )}
                </>
                )}
                name="email"
                rules={{ required: true }}
                defaultValue=""
            />

            {/* PASSWORD */}
            <Controller
                style={styles.controller}
                control={control}
                render={({ field }) => (
                <>
                    <TextInput
                        label='Password'
                        mode='flat'
                        onChangeText={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        placeholder="Password"
                        error={errors.password ? errors.password.message : null}
                        secureTextEntry
                    />
                    {errors.password && (
                    <Text style={{ color: 'red' }}>{errors.password.message}</Text>
                    )}
                </>
                )}
                name="password"
                rules={{ required: true }}
                defaultValue=""
            />

            {/* REPEAT PASSWORD */}
            <Controller
                style={styles.controller}
                control={control}
                render={({ field }) => (
                <>
                    <TextInput
                        label='Repeat Password'
                        mode='flat'
                        onChangeText={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        placeholder="Confirm Password"
                        error={errors.confirmPassword ? errors.confirmPassword.message : null}
                        secureTextEntry
                    />
                    {errors.confirmPassword && (
                    <Text style={{ color: 'red' }}>{errors.confirmPassword.message}</Text>
                    )}
                </>
                )}
                name="passwordRepeat"
                rules={{ required: true }}
                defaultValue=""
            />
        
        </View>

        {/* CHECKBOX */}
        <View style={styles.checkboxContainer}>
            <Checkbox.Item
                label='I want to recive inspiration, marketing promotions and updates via email.'
                labelStyle={styles.checkboxLabel}
                position='leading'
                style={styles.checkbox}
                status={sendExtraEmails? 'checked' : 'unchecked'}
                onPress={() => {
                    setSendExtraEmails(!sendExtraEmails);
                }}
            />
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
        </View>

        {/* CHANGE PASSWORD, REGISTER */}
        <View style={styles.clickableTextContainer}>
            {/* Forgot Password */}
            <ClickableText
                text="Forgot Password?"
                handlePress={null}
            />

            <ClickableText
                text="Have an account? Sign In"
                handlePress={handleSignIn}
            />
        </View>
    </ImageBackground>
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

    // INPUT STYLES

    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },

    input: {
        paddingHorizontal: 20,
    },

    inputWrapper: {
        marginTop: 25,
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
    },

    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#06F',
        borderWidth:  2,
    },

    buttonText: {
        color: 'white',
        fontWeight: 400,
        fontSize: 16,
    },

    buttonOutlineText: {
        color: '#06f',
        fontWeight: 700,
        fontSize: 16,
    },

    // CHECKBOX
    checkboxContainer: {
        width: '100%',
    },

    checkboxLabel: {
        fontSize: 15,
    },

    checkbox: {
        fontSize: 5,
    },

    // IMAGE STYLES

    logoContainer: {
        marginVertical: 50,
        width: 150,
        height: 150,
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

    



})