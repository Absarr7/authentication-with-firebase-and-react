import {Link} from 'react-router-dom'
import {auth} from '../config/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import React, {useState} from "react"

const Navbar = ()=>{
  const [Login, setLogin] = useState(false)

  onAuthStateChanged(auth, (currentUser)=>{
    if (currentUser) {
      setLogin(true)
    } else {
      setLogin(false);
    }
  })

  const signout = async()=>{
    await auth.signOut().then((user)=>{
      console.log("User Signed Out");
      console.log(auth.currentUser);
      window.location.href = "/login"
    });
};
  return (
        <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand font-weight-bold text-white" to="/">Absar Ahmad</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          </ul>
        </div>
        <div className='px-2 d-flex mx-2'>
        {Login === true && 
        <button className='btn btn-purple mx-2 btn-sm' onClick={signout}>Signout</button>
        }
        </div>

      </div>
    </nav>
  )
}

export default Navbar;