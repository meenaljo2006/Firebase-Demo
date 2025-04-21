import './auth.css';
import {auth} from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


const Auth = () => {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const signIn = async () => {
        await createUserWithEmailAndPassword(auth,email,password);
    };

    console.log(auth?.currentUser?.email);

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

        </>
    )
};

export default Auth;