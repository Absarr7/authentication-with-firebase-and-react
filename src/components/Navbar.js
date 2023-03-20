import {Link} from 'react-router-dom'


const Navbar = ()=>{
  return (
        <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand font-weight-bold text-white" to="/">Absar Ahmad</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className='px-5 d-flex'>
        <Link className='btn btn-primary btn-sm' to="/login">Already have Account?</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;