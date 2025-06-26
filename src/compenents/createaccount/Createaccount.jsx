import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(' Error:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="border border-secondary" style={{ maxWidth: '400px', margin: '40px auto', padding: "25px" }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} className='mt-5'>
        <input name="name" type="text" placeholder="Full Name" className="form-control my-2" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" className="form-control my-2" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="form-control my-2" onChange={handleChange} />
        <button className="btn btn-success w-100">Sign Up</button>
      </form>
      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
