import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const signIn = ( email, password ) => {
    // Sign in to app
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        const user = auth.currentUser;
        console.log('Logged in with: ', user.email);
    })
    .catch(error => alert(error.message));
    
}

export const signInGoogle = async () => {
    // try {
    //   const { type, accessToken, user } = await GoogleSignin.signInAsync({
    //     behavior: 'web',
    //     androidClientId: 'YOUR_ANDROID_CLIENT_ID',
    //     iosClientId: 'YOUR_IOS_CLIENT_ID',
    //     scopes: ['profile', 'email'],
    //   });
  
    //   if (type === 'success') {
    //     // Authenticate with Firebase using the Google access token
    //     const credential = auth.GoogleAuthProvider.credential(null, accessToken);
    //     await auth().signInWithCredential(credential);
  
    //     // Access the authenticated user
    //     const currentUser = auth().currentUser;
    //     console.log('Logged in with Google:', currentUser.displayName);
  
    //     // Navigate to the Home screen or perform other actions
    //   }
    // } catch (error) {
    //   console.error('Google sign-in error:', error);
    // }
  };