import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginBodyType, LoginResponseType } from '../../../types';

//onClick={(e: React.MouseEvent<HTMLButtonElement>) => loginSubmit(e)}
//^button onClick functionality stuff idk
//define LoginProps in types.ts
//props: LoginProps
function Login() {
  const [username, setUsername] = useState('' as string);
  const [password, setPassword] = useState('' as string);

  const navigate = useNavigate();

  function loginSubmit(e: React.MouseEvent<HTMLButtonElement>) {
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
          navigate('/'); // Navigates to Home page on successful signin
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
  }

  return (
    <div id="login-container">
      <div id="invalid-display"></div>
      <form>
        <input
          id="login-username"
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <input
          id="login-password"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Sign up</button>
        <button type="submit" onClick={(e) => loginSubmit(e)}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
