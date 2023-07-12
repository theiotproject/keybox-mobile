# KeyBox Mobile App
A repository for KeyBox Mobile App

> Note: This manual assumes that you are familiar with React Native and Expo

## Requirements

### npm packages

 > ^ -> or higher
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
* Scan QR Code From Your Terminal OR Use Generated Code Instead (ex. `exp://333.1.333.333:4444`)




## /Components

> ### `ClickableText.js`
>
> #### *Description*
>
> Text that you can click/press and execute provided function
>
> #### *Parameters*: 
>
> > `text` - Text that will be displayed in component  
> > `handlePress` - Function which will be executed on click 
>   
>   <br/>

> ### `LogOutModal.js`
>
> #### *Description*
>
> Modal used when logging out of Application
>
> #### *Parameters*: 
>
> > `visible` - Boolean used for showing/hiding Modal 
> > `handleSignOut` - Function to be executed on Sign Out (ex. Sign out of Application)
> > `handleDismiss` - Function to be executed on Dismiss (ex. hide Modal)
>   
>   <br/>

> ### `Spacer.js`
>
> #### *Description*
>
> Component with vertical margin to be placed between components that are not capable of using margin for some reason...
>   
>   <br/>

> ### `WrappedTextInput.js`
>
> #### *Description*
>
> [TextInput](https://callstack.github.io/react-native-paper/docs/components/TextInput/) but wrapped in [View](https://reactnative.dev/docs/view) so it can use margin. 
>
> #### *Parameters*
> > `label` - label for [TextInput](https://callstack.github.io/react-native-paper/docs/components/TextInput/)  
> > `value ` - value for [TextInput](https://callstack.github.io/react-native-paper/docs/components/TextInput/) 
> > `onChangeText` -  function to be executed on text change in [TextInput](https://callstack.github.io/react-native-paper/docs/components/TextInput/)  
> > `canHide` -  boolean for making [TextInput](https://callstack.github.io/react-native-paper/docs/components/TextInput/) secure or not (`secureTextInput` value) and making it possible for user to show or hide text (WORK IN PROGRESS)
>   
>   <br/>


## /Screens


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

## /Context

> ### `AuthContext.js`
> 
> #### *Description* 
> > Provides user status throughout Application
>   
>   <br/>
        
  
