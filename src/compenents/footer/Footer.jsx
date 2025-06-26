import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{marginTop:"55px"}}>
      <div className="mt-5 position-absolute"
        style={{
          width: "100%",
          height: "30vh",
          backgroundColor: "#9f978a",
         padding:"25px", // or '10px'
         marginTop:"50px"
        }}
      >
        <div className='d-flex justify-content-center gap-4  '>
        <Link  to={"/"} style={{ color: 'white',textDecoration: 'none'  }}>Home  |</Link >
        <Link to={"/aboutsite"} style={{ color: 'white', textDecoration: 'none'}}>About Us  |</Link >
        <Link  style={{ color: 'white',textDecoration: 'none' }}>Contact Us  |</Link >
        <Link  style={{ color: 'white',textDecoration: 'none' }}>Privacy Policy  |</Link >
        </div>
      </div>
    </div>
  );
};


export default Footer;
