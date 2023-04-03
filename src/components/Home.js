import React, {useState} from 'react'
import vector from './Assets/wave.png'
import {Link} from 'react-router-dom'
import {auth} from '../config/firebase'
import {} from 'firebase/auth'

const Home = ()=>{

    const [Login, setLogin] = useState();

    // if (!auth.currentUser) {
    //     setLogin(false)
    // } else if (auth.currentUser) {
    //     setLogin(false)
    // }



    return (
        <>
            {auth.currentUser?
                <div className="container text-center d-flex justify-content-center align-items-center " style={{'height':'90vh'}}>
                    <div className="headline">
                        <img src={`${vector}`} alt="hello!" className='w-25 py-2'/>
                        <h1 className='fw-bold'>{`Hello ${auth.currentUser.email}`}</h1>
                        <p className=''>Thanks for creating an account!!!</p>
                        <Link className="btn py-2 fw-semibold btn-purple" to='/signup'>Navigate</Link>
                    </div>
                </div>
            :
                // if the user is signed in 
                
                <div className="container text-center d-flex justify-content-center align-items-center " style={{'height':'90vh'}}>
                    <div className="headline">
                        <img src={`${vector}`} alt="hello!" className='w-25 py-2'/>
                        <h1 className='fw-bold'>Welcome Aboard!</h1>
                        <p className=''>Make your communications with team hassle-free and smooth.</p>
                        <Link className="btn py-2 fw-semibold btn-purple" to='/signup'>Create Your Account</Link>
                    </div>
                </div>
            }
                
            
        </>
    )
}

export default Home;