// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import { Button, IconButton, PaperProvider, useTheme } from 'react-native-paper';
import themes from './utils/themes';
import { logo } from './assets';
import { AuthProvider } from './context/AuthContext';

import { AppRegistry, Platform } from 'react-native';
import 'expo-dev-client'
import Dashboard from './screens/Dashboard';



const Stack = createNativeStackNavigator();

export default function App() {

  // getting current theme

  const currentTheme = theme;


  // Elements are in navigation containee so you can change between screens (like in android studio)
  return (
    // PaperProvider is used for setting app theme
    <PaperProvider theme={currentTheme}>
      {/* NavigationContainer is used for navigating app*/}
      <NavigationContainer>
        {/* Provider for authentication */}
        <AuthProvider >
          {/* Navigation */}
          <Stack.Navigator>

            {/* <Stack.Screen name="Dashboard" options={{ headerShown: false }} component={Dashboard} /> */}
            <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignInScreen} />
            <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
            <Stack.Screen name="Home" options={{ headerBackVisible: false, headerLeft: () => <IconButton icon={logo}/> }} component={HomeScreen} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
