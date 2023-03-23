
import React from 'react'

function Verify() {
  return (
    <div className="container text-center d-flex justify-content-center align-items-center " style={{'height':'90vh'}}>
        <div className="headline">
            <h1 className='fw-bold'>Please verify your Email...</h1>
            <p className=''>An confirmation email has been sent to - </p>
            <button className="btn py-2 fw-semibold btn-purple">Verify</button>
        </div>
    </div>
  )
}

export default Verify;