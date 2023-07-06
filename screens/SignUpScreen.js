import { StyleSheet, Text, View } from 'react-native'
import { React, useState } from 'react'

const SignUpScreen = () => {



  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='height'>

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

export default SignUpScreen

const styles = StyleSheet.create({})