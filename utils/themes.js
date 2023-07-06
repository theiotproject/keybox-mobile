import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DarkTheme } from 'react-native-paper'

// File to be imported into App.js (Main file) for changing app theme

export default theme = {
    ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3AA090',
    secondary: 'yellow',
    // onSecondary: 'red',
    tertiary: 'white',
    surfaceVariant: 'white',
    // onSurfaceVariant: 'white',//On TextInput etc
    // outline: 'red', //Something
    // surface: 'red',
    onSurface:'#EEE'//Checkbox
  },
}