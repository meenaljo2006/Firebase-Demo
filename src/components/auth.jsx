import './auth.css';
import {auth,googleProvider} from '../config/firebase';
import { createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth';
import { useState } from 'react';


const Auth = () => {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

        const signIn = async () => {
            try{
                await createUserWithEmailAndPassword(auth,email,password);
                console.log(auth.currentUser.email);
            } catch(error){
                console.error(error);
            }  
        };

        const signInWithGoogle = async () => {
            try{
                await signInWithPopup(auth,googleProvider);
                // console.log(auth.currentUser.googleProvider);
            } catch(error){
                console.error(error);
            }  
        };

        const signOutUser = async () => {
            try {
              await signOut(auth); // Sign out the current user
              setEmail(null); // Clear the user state on sign-out
              console.log('User signed out successfully');
            } catch (error) {
              console.error('Error signing out:', error);
            }
        };

    return(
        <>
            <input 
                placeholder="Enter your Email"
                type="email"
                onChange={(e) =>setEmail(e.target.value)}

            ></input>
            <input 
                placeholder="Enter password"
                type="password"
                onChange={(e) =>setPassword(e.target.value)}
            ></input>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signOutUser}>Sign Out</button>

            <button onClick={signInWithGoogle}>Sign In with google</button>

        </>
    )
};

export default Auth;