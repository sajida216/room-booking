import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@coreui/coreui/dist/css/coreui.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Home from '../src/compenents/homepage/Home.jsx';
import About from '../src/compenents/about/aboutpage.jsx'
import AboutRooms from '../src/compenents/about/Aboutroom.jsx'
import Expirience from './compenents/expirience/Expirience.jsx';
import Login from './compenents/login/Login.jsx';
import Register from './compenents/createaccount/Createaccount.jsx';
import Cart from './compenents/cart/Addcart.jsx'
import Features from './compenents/about/Placefeaters.jsx'
function App() {
  return (

    <Router>
      <ToastContainer position="bottom-center" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/aboutsite" element={<About />} /> 
        <Route path="/aboutrooms/:id" element={<AboutRooms />} />   
        <Route path="/expirience" element={<Expirience />} /> 
        <Route path="/login" element={<Login />} />  
        <Route path="/Register" element={<Register />} /> 
        <Route path="/cart" element={<Cart />} /> 
         <Route path="/features" element={< Features />} /> 
      </Routes>
    </Router>
     
  )
}

export default App
