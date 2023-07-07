import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {  Button, Checkbox } from 'react-native-paper';
import { backgroundMain, logo } from '../assets';
import ClickableText from '../components/ClickableText';
import WrappedTextInput from '../components/WrappedTextInput';

const SignUpScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [sendExtraEmails, setSendExtraEmails] = useState(false);
    const navigation = useNavigation();

    const handleSignUp = () => {
        if(validateData()) {
            //CreateUser
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const user = auth.currentUser;
                console.log('Registered with: ', user.email);
            })
            .catch(error => alert(error.message));
        }

    }

    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    const validateData = () => {

        return true
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

            <View style={styles}>



            </View>


            {/* EMAIL */}
            <WrappedTextInput
                label="Email Address"
                value={ email }
                onChangeText={text => setEmail(text)}
                canHide={false}
            />

            {/* PASSWORD */}
            <WrappedTextInput
                label="Password"
                value={ password }
                onChangeText={ text => setPassword(text)}
                canHide={true}
            />
            
            {/* REPEAT PASSWORD */}
            <WrappedTextInput
                label="Repeat Password"
                value={ passwordRepeat }
                onChangeText={ text => setPasswordRepeat(text)}
                canHide={true}
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
                // onPress={handleSignIn}
                mode='contained'
                uppercase={true}
                style = {styles.button}
            >
                    SIGN IN
            </Button>
        </View>

        {/* CHANGE PASSWORD, REGISTER */}
        <View style={styles.clickableTextContainer}>
            {/* Forgot Password */}
            <ClickableText
                text="Forgot Password?"
                handlePress={handleSignUp}
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
        // borderRadius: 5,
        // borderWidth: 1,
        // borderColor: '#CCC',
    },

    inputWrapper: {
        marginTop: 25,
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


    // CLICKABLE TEXT CONTAINER
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