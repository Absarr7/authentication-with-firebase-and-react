import React, { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, UserProfile, updateProfile} from "firebase/auth"
import {auth} from "../config/firebase";
import { Navigate } from 'react-router-dom';



const Signup = ()=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [user, setUser] = useState("");

    const signin = async(e)=>{
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password, name).then((userCredential)=>{
                window.location.href = "/verification-pending";
            })
            
        } catch (error) {
            console.error(error);
        }
    
    };

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    });

    return (
        <div className="container text-center my-4 d-flex flex-column align-items-center justify-content-center" style={{'height':'75vh'}}>
        <div className="headline my-4">
        <h1 className='fw-bold'>Create Your Account!</h1>
        <p className="">Get your brand-new Account created in seconds.</p>
        </div>

        <form onSubmit={signin}>
            <div className="mb-3">
                <input type="name" className="form-control-lg" id="login-name" aria-describedby="nameHelp" placeholder='Your Name' onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control-lg" id="login-email" aria-describedby="emailHelp" placeholder='Email Address' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control-lg" id="login-pass" placeholder='Password' onChange={(e)=>{setPass(e.target.value)}}/>
                <div id="emailHelp" className="form-text fs-9 fw-light">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-purple px-4 py-2">Create Account</button>
        </form>
            {/* <button className="btn btn-purple px-4 my-4" onClick={signout}>Signout</button> */}
        </div>
    )
}

export default Signup;