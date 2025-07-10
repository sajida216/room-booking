import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

 const Login = () => {
   const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://booking-backend-wb8a.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      //  handle non-200 responses first
      if (!res.ok) {
        const errMsg = (await res.json()).message || 'Login failed';
        alert(errMsg);
        return;
      }

      //  parse JSON
      const data = await res.json();      // { message: 'Login successful', userId: '...' }

      //  store userId
      localStorage.setItem('userId', data.userId);

      //  give feedback & redirect
      alert(data.message);                // or toast.success(data.message)
      navigate('/');                      // go to Home
    } catch (err) {
      console.error(' Login Error:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div
  className="border border-secondary rounded-4 shadow"
  style={{
    maxWidth: '400px',
    margin: '80px auto',
    padding: '32px',
    backgroundColor: '#ffffff',
  }}
>
  <h2 className="text-center mb-4">Login</h2>
  <form onSubmit={handleLogin}>
    <input
      name="email"
      type="email"
      placeholder="Email"
      className="form-control my-3 rounded-3"
      onChange={handleChange}
      required
    />
    <input
      name="password"
      type="password"
      placeholder="Password"
      className="form-control my-3 rounded-3"
      onChange={handleChange}
      required
    />
    <button className="btn btn-primary w-100 rounded-3 mt-2">Login</button>
  </form>
  <p className="text-center mt-4 mb-0">
    Don’t have an account? <Link to="/register">Create Account</Link>
  </p>
</div>

  );
};

export default Login;


