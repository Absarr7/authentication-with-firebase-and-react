import React from "react";


const Signup = ()=>{
    return (
        <div className="container text-center my-4 d-flex flex-column align-items-center justify-content-center" style={{'height':'75vh'}}>
        <div className="headline my-4">
        <h1 className='fw-bold'>Create Your Account!</h1>
        <p className="">Get your brand-new Account created in seconds.</p>
        </div>

        <form>
            <div className="mb-3">
                <input type="name" className="form-control-lg" id="login-name" aria-describedby="nameHelp" placeholder='Your Name'/>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control-lg" id="login-email" aria-describedby="emailHelp" placeholder='Email Address'/>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control-lg" id="login-pass" placeholder='Password'/>
                <div id="emailHelp" className="form-text fs-9 fw-light">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-primary px-4 py-2">Login to your Account</button>
        </form>
        </div>
    )
}

export default Signup;