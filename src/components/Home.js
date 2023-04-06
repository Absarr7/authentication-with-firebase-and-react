import React, {useState} from 'react'
import vector from './Assets/wave.png'
import {Link} from 'react-router-dom'
import {auth} from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const Home = ()=>{

    const [Login, setLogin] = useState();

    onAuthStateChanged(auth, (user)=>{
        if (user) {
            setLogin(true)
        }
        else {
            setLogin(false)
        }
    })



    return (
        <>
            {!Login === true?
                <div className="container text-center d-flex justify-content-center align-items-center " style={{'height':'90vh'}}>
                    <div className="headline">
                        <img src={`${vector}`} alt="hello!" className='w-25 py-2'/>
                        <h1 className='fw-bold'>Welcome Aboard!</h1>
                        <p className=''>Make your communications with team hassle-free and smooth.</p>
                        <div className='d-flex justify-content-center'>
                        <Link className="btn py-2 fw-semibold btn-purple mx-2" to='/signup'>Create Your Account</Link>
                        <Link className="btn py-2 fw-semibold btn-purple" to='/login'>Already have a account</Link>
                        </div>
                    </div>
                </div>
            :
                // if the user is signed in 
               <div className="container text-center d-flex justify-content-center align-items-center " style={{'height':'90vh'}}>
                    <div className="headline">
                        <img src={`${vector}`} alt="hello!" className='w-25 py-2'/>
                        <h1 className='fw-bold'>{`Welcome Aboard, Captain!`}</h1>
                        <p className=''>{`Thanks for creating an account, ${auth.currentUser.email}`}</p>
                        <Link className="btn py-2 fw-semibold btn-purple" to='/signup'>Navigate</Link>
                    </div>
                </div>
            }
                
            
        </>
    )
}

export default Home;