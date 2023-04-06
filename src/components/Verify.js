
import React, {useState, useEffect} from 'react';
import {auth} from "../config/firebase";
import { sendEmailVerification, onAuthStateChanged } from "firebase/auth";

function Verify() {

  const [DisplayEmail, setDisplayEmail] = useState(false);
  const [Disabled, setDisabled] = useState(false);
  const [Verified, setVerified] = useState(false);

  
  
  onAuthStateChanged(auth, (user)=>{
    if (user) {
      if (auth.currentUser.emailVerified) {
        setVerified(true)
        console.log("Email verified");
        window.location.href = "/"

      }
    }
  });

  const sendVerification = ()=>{
    sendEmailVerification(auth.currentUser).then(()=>{
      console.log("verification sent!");
      setDisplayEmail(true);
      setDisabled(true);
    });
  };
  
  useEffect(() => {
    if (Disabled) {
      const timer = setTimeout(() => {
        setDisabled(false);
      }, 60000);
      return () => clearTimeout(timer);
    }
  }, [Disabled]);

  
  
  return (
    <>
    {DisplayEmail === true &&
    <div class="alert alert-success alert-dismissible fade show m-4 position-absolute" role="alert" style={{"width":"38vw"}}>
    <i class="fa-solid fa-circle-check px-1"></i><strong className='px-1'>Kindly reload the page after you've verified your email</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
}

{Verified === true &&
    <div class="alert alert-success alert-dismissible fade show m-4 position-absolute" role="alert" style={{"width":"38vw"}}>
    <i class="fa-solid fa-circle-check px-1"></i><strong className='px-1'>Email verified!!</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
}
    <div className="container text-center d-flex justify-content-center align-items-center " style={{'height':'90vh'}}>
        <div className="headline">
            <h1 className='fw-bold'>Verify your email to continue.</h1>
            {DisplayEmail === true &&
            <div className='v'>
              <p className='fs-6 fw-bold text-black my-0'>{`An email has been sent to ${auth.currentUser.email}`}</p>
            </div>
            
            }
            <button className="btn px-3 py-2 my-2 fw-semibold btn-purple" onClick={sendVerification}disabled={Disabled}>Send the Link!</button>
        </div>
    </div>
    </>
  )
}

export default Verify;