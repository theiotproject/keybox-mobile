import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import {  Button, Checkbox, Modal, Text, TextInput, Tooltip } from 'react-native-paper';
import ClickableText from '../../components/ClickableText';
import WrappedTextInput from '../../components/WrappedTextInput';
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Spacer from '../../components/Spacer';
import { signUp } from '../../utils/userHandler';
import { Pressable } from 'react-native';
import themes from '../../utils/themes';
import {Dimensions} from 'react-native'; 
import AnimatedLogo from '../../components/AnimatedLogo';
import { signUpValidationSchema } from '../../utils/yupShema';
const { height } = Dimensions.get('window');

// Activity for signing in
const SignUpScreen = () => {

    // USER VARIABLES
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Used fo navigation between activities
    const navigation = useNavigation();
    
    // -----------------------
    // HANDLING FORM
    // Variables for handling form validation (using yup schema and yupResolver)
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signUpValidationSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });
    
    // When form is submitted (Works only if every field is filled correctly)
    const onSubmit = (data) => {
        console.log(data);
        // Set variables to form data
        setUsername(data.username);
        setEmail(data.email);
        setPassword(data.password);
        console.log(errors);
        
        // Sign Up with username,email and password
        signUp(auth, data.email, data.password, data.username);
    };
    // -----------------------

    // H
    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    // TODO make it work
    const handleSignUpGoogle = () =>
    {
        null
    }





  return (

    <View
        // style ={styles.container}
        style = {{height}}
    >
        <View style={styles.logoTextContainer}>

            <Spacer/>


            {/* CONTAINER FOR LOGO AND WELCOME TEXT  */}
            <View style={styles.logoContainer}>
                {/* Unnecessary logic here */}
                <AnimatedLogo />
            </View>
            
            {/* HELLO TEXT */}
            <Text variant='headlineSmall' style={styles.textHeadline}> Hello! Sign Up to get started! </Text>

        </View>
        
        
        {/* FORM CONTAINER */}
        <View style={styles.formContainer}>

            {/* CONTAINER FOR INPUTS */}
            <View 
                style={styles.inputContainer}
                behavior="position"
            >
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
                                    label="Agree to Terms od Use"
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
                    rippleColor={themes.colors.primaryRippleColor}
                    uppercase={true}
                    style = {styles.button}
                >
                        SIGN UP
                </Button>


                {/* SIGN IN GOOGLE - BUTTON */}
                <Button
                    onPress={handleSignUpGoogle}
                    mode='contained'
                    rippleColor={themes.colors.primaryRippleColor}
                    uppercase={true}
                    style = {styles.buttonVariant}
                    icon='google'
                >
                        SIGN UP
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
        // height: { screenHeight },
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoTextContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    formContainer: {
        flex: 5,
        width:'100%',
        justifyContent: 'space-evenly',
        // backgroundColor: 'green',
    },

// INPUT STYLES
    inputContainer: {
        flex: 6,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        // backgroundColor: 'red',
        
    },

    inputText: {
    },

    error: {
        color: 'red',
        fontSize: 10,
    },

// CONTROLLERS - input
    controller: {
        flex: 1,
        paddingVertical: 20,
    },

    
// BUTTON STYLES
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        columnGap: 10,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'violet'

    },

    button: {
        flex: 1,
        width: '40%',
        borderRadius: 5,
    },


    buttonVariant: {
        flex: 1,
        color: 'white',
        backgroundColor: themes.colors.secondary,
        width: '40%',
        borderRadius: 5,
    },

// CHECKBOX
    checkboxContainer: {
        width: '100%',
        // backgroundColor: 'yellow'
    },

    checkboxLabel: {
        fontSize: 15,
        textAlign: 'left'
    },

    // checkbox: {
    //     fontSize: 5,
    //     textAlign: 'left',
    //     alignContent: 'flex-start'
    // },

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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'pink',
    },

    clickableText: {
        flex:1,
        alignItems:'center',
    },

// TEXT
    text: {
        color: 'black',
    },
    
    textHeadline: {
        color: 'black',
        fontWeight: 'bold'
    }

})