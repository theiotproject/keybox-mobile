import { Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {  Button, Checkbox, TouchableRipple } from 'react-native-paper';
import { backgroundMain, logo } from '../assets';
import ClickableText from '../components/ClickableText';
import WrappedTextInput from '../components/WrappedTextInput';






const SignInScreen = () => {

    // Variables used for setting an email
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [rememberUser, setRememberUser] = useState(false);


    const navigation = useNavigation();



    
    // Go to home screen on login
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( ( user ) => {
            if (user) {
                navigation.navigate("Home") 
            }
        });

        return unsubscribe
    }, [])

    // Used for signing-up (used on button register)
    const handleSignUp = () => {
        navigation.navigate('SignUp') 

        //Create user (NO EMAIL VALIDATION YET)
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(() => {
        //         const user = auth.currentUser;
        //         console.log('Registered with: ', user.email);
        //     })
        //     .catch(error => alert(error.message));

    }

    // SIGNING IN WITH EMAIL AND PASSWORD
    const handleSignIn = () => {
        // Sign in to app
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            const user = auth.currentUser;
            console.log('Logged in with: ', user.email);
        })
        .catch(error => alert(error.message));
        
        // Change TextInput value "error" to true while not valid

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

                <WrappedTextInput
                    label="Email Address"
                    value={ email }
                    onChangeText={text => setEmail(text)}
                    canHide={false}
                />

                <WrappedTextInput
                    label="Password"
                    value={ password }
                    onChangeText={ text => setPassword(text)}
                    canHide={true}
                />


                <View style={styles.checkboxContainer}>
                    <Checkbox.Item
                        label='Remember Me'
                        position='leading'
                        style={styles.checkbox}
                        status={rememberUser? 'checked' : 'unchecked'}
                        onPress={() => {
                            setRememberUser(!rememberUser);
                        }}
                    />
                </View>
            
            </View>


            {/* CONTAINER FOR BUTTONS */}
            <View style={styles.buttonContainer}>

                {/* SIGN IN - BUTTON */}
                <Button
                    onPress={handleSignIn}
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
                    handlePress={() => alert("Here will be passwor recovery")}
                />

                <ClickableText
                    text="Don't have an account? Sign Up"
                    handlePress={handleSignUp}
                />
            </View>
        </ImageBackground>
    )
}

export default SignInScreen

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
        width: '60%',
    },

    checkbox: {

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