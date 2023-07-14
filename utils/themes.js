import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DarkTheme } from 'react-native-paper'

// File to be imported into App.js (Main file) for changing app theme

export default theme = {
    ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00618A',
    secondary: 'yellow',
    // onSecondary: 'red',
    tertiary: '#000',
    surfaceVariant: 'white', //TextInput
    // onSurfaceVariant: 'white',//On TextInput etc
    // outline: 'red', //Something
    // surface: 'red',
    onSurface:'#000',//Checkbox
    clickableText: '#00618A',
    buttonVariant: '#0086BE'
  },
}