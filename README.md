# KeyBox Mobile App
A repository for KeyBox Mobile App

> Note: This manual assumes that you are familiar with React Native and Expo

## Requirements

### npm packages

 > ^ -> or higher

#### React Hooks etc
* react - `18.2.0^`
* react-hook-form - `7.45.1^`
* @hookform/resolvers - `3.1.1^`

#### React Native Various

* react-native - `0.72.1^`
* react-native-paper - `5.9.1^`
* react-native-reanimated - `3.3.0^`
* react-native-gesture-handler - `2.12.0^`
* react-native-drawer-layout - `3.2.1^`
* react-native-safe-area-context - `4.6.3^`
* react-native-screens - `3.22.0^`
* react-native-vector-icons - `9.2.0^`
* react-native-uuid - `2.0.1^`
* react-native-select-dropdown - `3.3.4^`
* react-native-switch-selector - `2.3.0^`
* @react-native-community/google-signin - `5.0.0^`
* @react-native-community/masked-view - `0.1.11^`
* @react-navigation/native - `6.1.7`
* @react-navigation/native-stack - `6.9.13^`
* @react-navigation/drawer - `6.6.3`

#### Expo

* expo - `49.0.0^`
* expo-google-app-auth - `10.0.0^`
* expo-status-bar - `1.6.0^`
* expo-sensors - `12.3.0`

#### Firebase

* firebase - `9.23.0^`
* react-native-firebase - `5.6.0`
* @react-native-firebase/app -`18.3.0^`
* @react-native-firebase/auth - `18.1.0^`
* @react-native-firebase/firestore - `18.1.0^`
* @react-native-google-signin/google-signin - `10.0.1^`

#### Various

* yup - `1.2.0^`
* dotenv - `16.3.1^`
* @babel/core - `7.20.0^`

## Installation and Setup

### App

* Create Expo App `npx create-expo-app <YOUR APP NAME>`
  * [Example](https://docs.expo.dev/tutorial/create-your-first-app/)
* Install required `npm packages` with `npm install <PACKAGE NAME>` or `npm i <PACKAGE NAME>`
> Note: If you are using [VS Code](https://code.visualstudio.com/download) you could download [NPM extension by Kasper Mikiewicz](https://marketplace.visualstudio.com/items?itemName=idered.npm) which allows You to manage node packages via [VS Code](https://code.visualstudio.com/download) sidebar, makes updating and changing packages versions easier  
* Create `.env` file for your firebase credentials based on `.env.example` (or just rename `.env.example` to `.env`) and fill the credentials

### Third party

#### Firebase Project
  
  * Create New Project
  * Add Authentication
    * Add Email/Password Auth
    * Add Google Auth
  * Create Web App
    * Copy Firebase SDK Credentials Into `.env`
  * TO BE CONTINUED
  > [In-Depth Tutorial](https://blog.logrocket.com/integrating-firebase-authentication-expo-mobile-app/) 

#### Android Studio
  
> You can skip this section if you want to run app on your phone instead

  * Install [Java](https://www.java.com/en/download/)
  * Install [Java Development Kit](https://www.oracle.com/java/technologies/downloads/)
  * Install [Newest Version od Android Studio](https://developer.android.com/studio)
  * Install Android SDK (in Android Studio)
  * Create new Project
  * Go to `Tools -> Device Manager`
      * Create New `Android Virtual Device`  
        * Select Model of Your Liking  
          * `*Works on Pixel 4 API 30`
        * Install Android System
          * From `x86 Images` (Why? Check [here](https://stackoverflow.com/questions/45517553/cant-change-the-ram-size-in-avd-manager-android-studio))  
            
      > Note: If you have problem with black artifacts while emulating Android increase RAM amount - [Here's why](https://stackoverflow.com/questions/73349171/android-studio-avd-emulator-shows-a-black-flickering)
 
## Running App

### Android Emulation

* Open Android Emulator in Android Studio -`Android Virtual Device` (ex. `Pixel 4 API 30`)
* Open Terminal in Project Terminal and Execute `npx expo start`
* Press 'a' on Your Keyboard

### Running on Your Device

* Open Terminal in Project Terminal and Execute `npx expo start`
* Download [Expo App](https://expo.dev/client)
* Scan QR Code From Your Terminal OR Use Generated Code Instead (ex. `exp://333.1.333.333:4444`)


<!-- -------------------------------------------- -->

## /Components

> ### `ClickableText.js`
>
> #### *Description*
>
> > Text that you can click/press and execute provided function
>
> #### *Parameters*: 
>
> > `text` - Text that will be displayed in component  
> > `handlePress` - Function which will be executed on click 
>   
>   <br/>

<!-- ------------------------------------- -->


> ### `LogOutModal.js`
>
> #### *Description*
>
> > Modal used when logging out of Application with Icon, Title, Text and Two buttons, one for Logging Out, other for dismissing Modal
>
> #### *Parameters*: 
>
> > `visible` - Boolean used for showing/hiding Modal 
> > `handleSignOut` - Function to be executed on Sign Out (ex. Sign out of Application)
> > `handleDismiss` - Function to be executed on Dismiss (ex. hide Modal)
>   
>   <br/>

<!-- ------------------------------------- -->

> ### `Spacer.js`
>
> #### *Description*
>
> > Component with vertical margin to be placed between components that are not capable of using margin for some reason...
>   
>   <br/>

<!-- ------------------------------------- -->

> ### `WrappedTextInput.js`
>
> #### *Description*
>
> > [TextInput](https://callstack.github.io/react-native-paper/docs/components/TextInput/) but wrapped in [View](https://reactnative.dev/docs/view) so it can use margin. 
>
> #### *Parameters*
> > `label` - label for [TextInput](https://callstack.github.io/react-native-paper/docs/components/TextInput/)  
> > `value ` - value for [TextInput](https://callstack.github.io/react-native-paper/docs/components/TextInput/) 
> > `onChangeText` -  function to be executed on text change in [TextInput](https://callstack.github.io/react-native-paper/docs/components/TextInput/)  
> > `canHide` -  boolean for making [TextInput](https://callstack.github.io/react-native-paper/docs/components/TextInput/) secure or not (`secureTextInput` value) and making it possible for user to show or hide text (WORK IN PROGRESS)
>   
>   <br/>

<!-- ------------------------------------- -->

## /Screens

> ### `HomeScreen.js`
> #### *Description*
> > Main Screen for managing user and devices
>
> <br>

> ### `SignInScreen.js`
> #### *Description*
> > Screen for Signing In/ Logging In to Application with [Firebase](https://firebase.google.com/)
>
> <br>

> ### `SignUpScreen.js`
> #### *Description*
> > Screen for Signing Up to Application with [Firebase](https://firebase.google.com/)
>
> <br>

<!-- -------------------------------------------- -->

## /Utils

> ### `themes.js`
> 
> #### *Description* 
> > Provides themes to App Screens 
>   
>   <br/>


> ### `userHandler.js`
> 
> #### *Description* 
> > Provides operations on user such as `signIn`, `signUp`, `signOut` for managing user status
>   
>   <br/>


> ### `yupSchema.js`
> 
> #### *Description* 
> > Provides `yup` shema to use in form in `SignUpScreen`
>   
>   <br/>

<!-- -------------------------------------------- -->

## /Context

> ### `AuthContext.js`
> 
> #### *Description* 
> > Provides user status throughout Application ( if user exists -> if user is logged in) to prevent accessing screens that should be availible only to logged in users.
>   
>   <br/>
        
  
