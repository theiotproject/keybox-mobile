import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { backgroundMain, logo } from '../assets';


const HomeScreen = () => {
  return (
    <ImageBackground
            style={styles.container}
            source={backgroundMain} >

    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
    




})