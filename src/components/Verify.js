
import React, {useState, useEffect} from 'react';
import {auth} from "../config/firebase";
import { sendEmailVerification, onAuthStateChanged } from "firebase/auth"

function Verify() {

  const [DisplayEmail, setDisplayEmail] = useState(false);


  onAuthStateChanged(auth, (user)=>{
    if (user) {
      if (user.emailVerified) {
        window.location.href = "/"
      }
    }
  });

  const sendVerification = ()=>{
    sendEmailVerification(auth.currentUser).then(()=>{
      console.log("verification sent!");
      setDisplayEmail(true);
    });
  };

  






  return (
    <div className="container text-center d-flex justify-content-center align-items-center " style={{'height':'90vh'}}>
        <div className="headline">
            <h1 className='fw-bold'>Please verify your Email...</h1>
            <p className=''>{DisplayEmail == true && `An email has been sent to ${auth.currentUser.email}`}</p>
            <button className="btn py-2 fw-semibold btn-purple" onClick={sendVerification}>Send the Link!</button>
        </div>
    </div>
  )
}

export default Verify;