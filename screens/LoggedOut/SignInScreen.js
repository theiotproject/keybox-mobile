import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {  Button, Checkbox, Text, TouchableRipple } from 'react-native-paper';
// import { backgroundMain, logo } from '../../assets';
import ClickableText from '../../components/ClickableText';
import WrappedTextInput from '../../components/WrappedTextInput';
import { signIn, signInGoogle } from '../../utils/userHandler';
import themes from '../../utils/themes';
import Spacer from '../../components/Spacer';
import AnimatedLogo from '../../components/AnimatedLogo';
import { AuthContext } from '../../context/AuthContext';




const { height } = Dimensions.get('window');


const SignInScreen = () => {

 
    // Variables used for setting an email
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [rememberUser, setRememberUser] = useState(false);


    const navigation = useNavigation();


    // -------------------------
    // USER MANAGEMENT
    const { user } = useContext(AuthContext);
    const [username, setUsername] = useState('');

    // HANDLE USER STATE
    //If logged in, go to Dashboard screen
    useEffect(() => {
        if (user && navigation) {
            navigation.navigate('Dashboard');
        }
    }, [ user, navigation ]);
    // --------------------------

    
    // Go to home screen on login
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged( ( user ) => {
    //         if (user) {
    //             navigation.navigate("Home") 
    //         }
    //     });

    //     return unsubscribe
    // }, [])

    // Used for signing-up (used on button register)
    const handleSignUp = () => {
        navigation.navigate('SignUp') 
    }

    // SIGNING IN WITH EMAIL AND PASSWORD
    const handleSignIn = () => {
        signIn(email, password, rememberUser);
    }
    
    const handleSignInGoogle = () => {
        // signIn(email, password);
        alert('You shall not Log In Ashen One. Inasmuch as this function does not work')
    }

    return (
        
        <View
            style={{height}}
        >
            {/* CONTAINER FOR LOGO AND WELCOME TEXT  */}
            <View style={styles.logoTextContainer}>

                {/* It may be stupid, but it works*/}
                <Spacer />
                <Spacer />

                <View style={styles.logoContainer}>
                    
                    {/* Unnecessary logic here */}
                    {/* <Pressable style={styles.logoImage} 
                        onPress={() => null}
                    >
                        <Image 
                            style={styles.logoImage} 
                            source={logo} />
                    </Pressable> */}

                    <AnimatedLogo />

                </View>
                
                {/* HELLO TEXT */}
                <Text variant='headlineSmall' style={styles.textHeadline}> Hello Again! Sign In </Text>
                
            </View>
            

            <View style={styles.formContainer}>

                {/* CONTAINER FOR INPUTS */}
                <View style={styles.inputContainer}>

                    <WrappedTextInput
                        label="Email Address"
                        value={ email }
                        style={styles.input}
                        onChangeText={text => setEmail(text)}
                        canHide={false}
                    />

                    <WrappedTextInput
                        label="Password"
                        value={ password }
                        style={styles.input}
                        onChangeText={ text => setPassword(text)}
                        canHide={true}
                    />

                    <View style={styles.checkboxContainer}>
                        <Checkbox.Item
                            label='Remember Me'
                            labelStyle={styles.checkboxLabel}
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

                    {/* OR */}
                    <Text variant='labelLarge' style={styles.text}>or</Text>

                    {/* SIGN IN GOOGLE - BUTTON */}
                    <Button
                        onPress={handleSignInGoogle}
                        mode='contained'
                        uppercase={true}
                        style = {styles.buttonVariant}
                        icon='google'    
                    >
                            SIGN IN WITH GOOGLE 
                    </Button>

                </View>

                {/* CHANGE PASSWORD, REGISTER */}
                <View style={styles.clickableTextContainer}>
                    {/* Forgot Password */}
                    <ClickableText
                        style={styles.clickableText}
                        text="Forgot Password?"
                        handlePress={() => alert("Here will be passwor recovery")}
                    />

                    <ClickableText
                        style={styles.clickableText}
                        text="Don't have an account? Sign Up"
                        handlePress={handleSignUp}
                    />
                </View>

            </View>
            
        </View>
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

    logoTextContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    formContainer: {
        flex: 5,
        width:'100%',
        paddingHorizontal: '3%',
        alignContent: 'center',
        justifyContent: 'space-around',

        // backgroundColor: 'green'

    },

    // INPUT STYLES

    inputContainer: {
        flex: 4,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-evenly',
        // backgroundColor: 'red'
    },

    
    // BUTTON STYLES

    buttonContainer: {
        flex: 2,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'violet'

    },
    
    button: {
        width: '100%',
        borderRadius: 5,
    },
    
    
    buttonVariant: {
        color: 'white',
        backgroundColor: themes.colors.secondary,
        width: '100%',
        borderRadius: 5,
    },

    // CHECKBOX
    
    checkboxContainer: {
        width: '100%',
        // backgroundColor: 'yellow'
    },

    checkboxLabel: {
        fontSize: 15,
        textAlign: 'left',
    },

    checkbox: {
        // Style Checkbox here
    },

    // IMAGE STYLES

    logoContainer: {
        marginVertical: 25, //Idk how it makes it look better, but it looks better
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoImage: {
        resizeMode: 'contain',
        width: '100%',
    },


    // CLICKABLE TEXT CONTAINER
    clickableTextContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'pink',
        padding: 5,
    },

    clickableText: {
        flex: 1,
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