import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default signUp = ({ email, password, username }) => {
        
    //Create user + return user or error
    // return (
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            const user = auth.currentUser;
            console.log('Registered with: ', user.email);
            // Setting Username
            // updateProfile(user, {
            //     displayName: username,
            // })  
        })
        .catch(error => alert(error.message))
    // )
}