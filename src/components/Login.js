import React, { useState } from 'react'
import {auth} from "../config/firebase"
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"

const Login = ()=>{

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    

    const Login = async(e)=>{
        e.preventDefault();
        await signInWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
            console.log("login successful");
            window.location.href = "/"
        })
    }



    return (
        <div className="container text-center my-4 d-flex flex-column align-items-center justify-content-center" style={{'height':'75vh'}}>
        <h2 className='fw-bold fs-1 my-4'>Welcome Back!</h2>

        <form onSubmit={Login}>
            <div className="mb-3">
                <input type="email" className="form-control-lg" id="login-email" aria-describedby="emailHelp" placeholder='Email Address' onChange={(e)=>{setEmail(e.target.value)}}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control-lg" id="login-pass" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button type="submit" className="btn btn-purple px-4 py-2">Login to your Account</button>
        </form>
        </div>

    )
}

export default Login;