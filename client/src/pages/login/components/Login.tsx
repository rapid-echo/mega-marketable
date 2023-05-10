import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginBodyType, LoginResponseType } from '../../../types';

const Login = () => {
  const [username, setUsername] = useState('' as string);
  const [password, setPassword] = useState('' as string);
  const navigate = useNavigate();

  const loginSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      } as LoginBodyType),
    })
      .then((res): Promise<LoginResponseType> => res.json())
      .then((res) => {
        if (res.user) {
          navigate('/home'); // Navigates to Home page on successful signin
        } else {
          const invalidDisplay = document.getElementById('invalid-display');
          if (invalidDisplay) {
            invalidDisplay.innerHTML = 'Invalid Username or Password'; // Insert text into empty div
          }
        }
      })
      .catch((err) => {
        console.log('Error in login fetch request:', err);
      });
  };

  return (
    <div id='login-page' className='pages'>
      <div id='login-container'>
        <h1>Mega Marketable</h1>
        <div id='invalid-display'></div>
        <form>
          <div>
            <input
              type='username'
              placeholder='username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button id='signup-button'>Sign up</button>
            <button
              id='login-button'
              type='submit'
              onClick={(e) => loginSubmit(e)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
