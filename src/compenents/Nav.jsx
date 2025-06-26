import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
const Navbar = () => {
  
   const handleLogout = () => {
    localStorage.removeItem('userId'); // Clear stored user session
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bgcolor  navbar navbar-expand-lg  " style={{ height: '100px' }}>
      <div className="container-fluid  ">
        <a className="navbar-brand fs-3" href="#">StayEase</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-center align-items-center fs-3 gap-5">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/expirience">experiences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutsite">About</a>
            </li>
          </ul>
        </div>

<div className="d-flex justify-content-end align-items-center" style={{ height: '200vh' }}>
<Link
  to="/cart"
  className="btn me-5 fs-5"
  style={{ width: '70%', color: "black" }}
>
  Cart
</Link>
</div>

<div className="d-flex justify-content-end align-items-center" style={{ height: '200vh' }}>
  <Link
  to="/login"
  className="btn me-5 fs-5"
  style={{ width: '70%', color: "black" }}
>
  Login 
</Link>

<div className="d-flex justify-content-end align-items-center " style={{ height: '200vh' }}>
  <button onClick={handleLogout} className="btn fs-5 ">Logout</button>
        </div>

      </div>
       </div>
    </nav>
   
  );
};


export default Navbar
