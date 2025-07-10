import React from 'react'
import { Link } from "react-router-dom";
import Facebk from '../../Images/fac.png'
import Insta from '../../Images/insta1.jpg'
import Twitter from '../../Images/twitter.png'

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
         {/* <div className=' flex justify-center pb-8'>
         <div className=' flex w-6'>
         <img src={Insta}/>
         </div>
         <div>
         <img src={Facebk} className='w-8  pl-2'/>
         </div>
         <div className='w-8 pl-2'>
          <img src={Twitter}/>
         </div>
    </div> */}
      </div>
    </div>
  );
};


export default Footer;
