import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

    // Variables used for setting an email
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const user = auth.currentUser;
                console.log('Registered with: ', user.email);
            })
            .catch(error => alert(error.message));

            



    }

    // Used for signing-up (used on button register)
    const handleSignIn = () => {
    
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const user = auth.currentUser;
                console.log('Logged in with: ', user.email);
            })
            .catch(error => alert(error.message));


    }


    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'>

            {/* CONTAINER FOR INPUTS */}
            <View style={styles.inputContainer}>

                <TextInput
                    placeholder="Email"
                    value={ email }
                    onChangeText={ text => setEmail(text)}
                    style={styles.input}  
                />

                <TextInput
                    placeholder="Password"
                    value={ password }
                    onChangeText={ text => setPassword(text)}
                    style={styles.input}  
                    secureTextEntry
                />

            </View>

            {/* CONTAINER FOR BUTTONS */}
            <View style={styles.buttonContainer}>
                {/* SignIn BUTTON */}
                <TouchableOpacity
                    onPress={handleSignIn}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}> 
                        SignIn 
                    </Text>
                </TouchableOpacity>
        

                {/* REGISTER BUTTON */}
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}> 
                        Register
                    </Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputContainer: {
        width: '80%',
    },

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },

    button: {
        backgroundColor: '#06f',
        width: '100%',
        padding: 15,
        borderRadius: 10
    },

    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#06F',
        borderWidth:  2,
    },

    buttonText: {
        color: 'white',
        fontWeight: 700,
        fontSize: 16,
    },

    buttonOutlineText: {
        color: '#06f',
        fontWeight: 700,
        fontSize: 16,
    },



})