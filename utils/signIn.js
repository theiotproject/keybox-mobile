import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default signIn = ( email, password ) => {
    // Sign in to app
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        const user = auth.currentUser;
        console.log('Logged in with: ', user.email);
    })
    .catch(error => alert(error.message));
    
}