# KeyBox Mobile App
A repository for KeyBox Mobile App

> Note: This manual assumes that you are familiar with React Native and Expo

## Requirements

### npm packages

 `^ -> or higher`
* react - `18.2.0^`
* react-hook-form - `7.45.1^`
* @hookform/resolvers - `3.1.1^`
* @react-native-community/masked-view - `0.1.11^`
* react-native - `0.72.1^`
* react-native-gesture-handler - `2.12.0^`
* react-native-paper - `5.9.1^`
* react-native-reanimated - `3.3.0^`
* react-native-safe-area-context - `4.6.3^`
* react-native-screens - `3.22.0^`
* react-native-vector-icons - `9.2.0^`
* @react-navigation/native - `6.1.7`
* @react-navigation/native-stack - `6.9.13^`
* @react-navigation/drawer - `6.6.3`
* expo - `49.0.0^`
* expo-google-app-auth - `10.0.0^`
* expo-status-bar - `1.6.0^`
* firebase - `9.23.0^`
* @react-native-firebase/auth - `18.1.0^`
* @react-native-google-signin/google-signin - `10.0.1^`
* yup - `1.2.0^`
* dotenv - `16.3.1^`
* @babel/core - `7.20.0^`

## Installation and Setup

### App

* Create Expo App `npx create-expo-app <YOUR APP NAME>`
  * [Example](https://docs.expo.dev/tutorial/create-your-first-app/)
* Install required `npm packages` with `npm install <PACKAGE NAME>` or `npm i <PACKAGE NAME>`
* Create `.env` file for your firebase credentials

### Third party

#### Firebase Project
  
  * Create New Project
  * Add Authentication
    * Add Email/Password Auth
    * Add Google Auth
  * Create Web App
    * Copy Firebase SDK Credentials Into `.env`
  * TO BE CONTINUED
  * [In-Depth Tutorial](https://blog.logrocket.com/integrating-firebase-authentication-expo-mobile-app/) 

#### Android Studio
  
> You can skip this section if you want to run app on your phone instead

  * Install [Java](https://www.java.com/en/download/)
  * Install [Java Development Kit](https://www.oracle.com/java/technologies/downloads/)
  * Install [Newest Version od Android Studio](https://developer.android.com/studio)
  * Install Android SDK (in Android Studio)
  * Create new Project
  * Go to `Tools -> Device Manager`
      * Create New Device ( Select Model of Your Liking) > I have tested it on `Pixel 4 API 30`
      * Install Android System
 
## Running App

### Android Emulation

* Open Android Emulator in Android Studio
* Open Terminal in Project Terminal and Execute `npx expo start`
* Press 'a' on Your Keyboard

### Running on Your Device

* Download [Expo App](https://expo.dev/client)
* Scan QR Code From Your Terminal OR Use Generated Code Instead (ex. `exp://3333.1.333.333:4444`)

        
  
