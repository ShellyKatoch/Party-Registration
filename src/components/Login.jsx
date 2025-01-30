import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/login.css';
import axios from 'axios';
import {setCookie} from './Cookie';

const Login = () => {
  const [role, setRole] = useState('member'); 

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); 
  useEffect(() =>{
    console.log()
  })


  const handleRoleChange = (e) => {
    setRole(e.target.value); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.email && credentials.password) {
      setCookie("user",credentials.email,2)
      const formData = new FormData()
     formData.append('email', credentials.email ),
     formData.append('password', credentials.password )

      axios.post('http://localhost:3000/api/login',formData,{
        headers : {
              'Content-Type': 'application/json'
          }
        
      })
      .then(res => {
        if(res.status === 200){
          console.log("user is logged in!",res);
          navigate('/adminDashboard');
        }
        else{
          console.log('Login failed:', res.data.message);
          navigate('/login');
        }
       
      })
      .catch(err => {
        console.log('Axios error:', err.response?.data || err.message);
        navigate('/login');
      })
    }
    else{
      alert("Please fill in all fields")
    }
    setCredentials({
      email: "",
      password: ""
    })
  };

  return (
    <div className="login-page">
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <section className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            {/* <div className="form-group">
              <label htmlFor="role">Select Role</label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={handleRoleChange}
                required
              >
                <option value="member">Member Login</option>
                <option value="admin">Admin Login</option>
              </select>
            </div> */}

            {/* <div className="form-group">
              {role === 'admin' ? (
                <label htmlFor="username">Username (Admin)</label>
              ) : (
                <label htmlFor="username">Email (Member)</label>
              )}
              <input
                type={role === 'admin' ? 'text' : 'email'}
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </div> */}

           <div className='form-group'>
            <label htmlFor="email">Email</label>
           <input type="email" id = "email" name = "email" value={credentials.email} onChange={handleChange} required />
           </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Login</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
