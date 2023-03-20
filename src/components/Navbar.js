import React from 'react'
import {Link,useLocation,useNavigate } from "react-router-dom";

 
function Navbar() {
    let location = useLocation();
    let navigate = useNavigate();
   
    const handleLogout = ()=>{
      localStorage.removeItem('token');
      navigate('/login')
    }


  return (
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">aNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/about'?'active':''}`} to="/about">About</Link>
        </li>
        
      </ul>
     {localStorage.getItem('token')? <button onClick={handleLogout} className='btn btn-primary'>Logout</button>:<form className="d-flex" role="search">
      <Link className="btn btn-primary mx-2" to="/login" role="button">login</Link>
      <Link className="btn btn-primary mx-2" to="/singup" role="button">Singup</Link>
      </form> }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar