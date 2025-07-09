import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm" style={{ height: '80px' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-3">
          StayEase
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto fs-5 gap-lg-5">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/expirience" className="nav-link">
                Experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutsite" className="nav-link">
                About
              </Link>
            </li>
          </ul>

          <div className="d-flex fs-5 align-items-center gap-3">
            <Link to="/cart" className="btn  fs-5 btn-sm">
              Cart
            </Link>
            <Link to="/login" className="btn fs-5  btn-sm">
              Login
            </Link>
            <button onClick={handleLogout} className="btn fs-5  btn-sm">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
