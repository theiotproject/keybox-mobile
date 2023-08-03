import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut as signOutFirebase } from "firebase/auth";
import { auth } from "../firebase";
import { firebase } from '@react-native-firebase/auth';
import LogoutModal from "../components/modals/LogOutModal";
import {AsyncStorage} from 'react-native';


// -------------------------------------------------
// SIGNING UP
export const signUp = ( auth, email, password, username ) => {
        
    //Create user + return user or error
    return (
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            const user = auth.currentUser;
            console.log('Registered with: ', user.email);
            // Setting Username
            updateProfile(user, {
                displayName: username,
            })  
        })
        .catch(error => alert(error.message))
    )
}

// -------------------------------------------------
// SIGNING IN
export const signIn = ( email, password, rememberUser ) => {
    // Sign in to app
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        const user = auth.currentUser;
        
        // Save user in AsyncStorage
        if(rememberUser)
        {
            // TODO Remember User
        }
        console.log('Logged in with: ', user.email);
    })
    .catch(error => alert(error.message));
    
}


// > GOOGLE SIGN IN/UP





// -------------------------------------------------
// SIGNING OUT
export const signOut = () => {
    signOutFirebase(auth);    
}



// -------------------------------------------------
// RESETTING PASSWORD
export const resetPassword = (userEmail) => [
    // It will probably work after building app
    firebase.auth().sendPasswordResetEmail(userEmail)
    .then(() => {
        alert("password reset send")
    }).catch((error) => {
        alert(error)
    })
]
