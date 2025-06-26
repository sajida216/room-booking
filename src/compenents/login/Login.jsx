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
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      // 1️⃣ handle non-200 responses first
      if (!res.ok) {
        const errMsg = (await res.json()).message || 'Login failed';
        alert(errMsg);
        return;
      }

      // 2️⃣ parse JSON
      const data = await res.json();      // { message: 'Login successful', userId: '...' }

      // 3️⃣ store userId
      localStorage.setItem('userId', data.userId);

      // 4️⃣ give feedback & redirect
      alert(data.message);                // or toast.success(data.message)
      navigate('/');                      // go to Home
    } catch (err) {
      console.error('❌ Login Error:', err);
      alert('Something went wrong');
    }
  };
//    const navigate = useNavigate(); // initialize navigate
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials)
//       });

//       localStorage.setItem('userId', response.data.userId);
      
//       const data = await res.json();
//      // alert(data.message);
//         alert("✅ Login successful!");
//         navigate('/'); // 👈 Redirect to Home page

//     } catch (err) {
//       console.error('❌ Login Error:', err);
//       alert('Something went wrong');
//     }
//   };

  return (
    <div className="border border-secondary" style={{ maxWidth: '400px', margin: '40px auto', padding: "28px" }}>
      <h2>Login Page</h2>
      <form className='mt-5' onSubmit={handleLogin}>
        <input name="email" type="email" placeholder="Email" className="form-control my-2" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="form-control my-2" onChange={handleChange} />
        <button  className="btn btn-primary w-100">Login</button>
      </form>
      <p className="text-center mt-3">
        Don't have an account? <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
};

export default Login;


