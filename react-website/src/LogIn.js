import React, { useState } from 'react';
import logo from './waytogo.png'; 

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    const cleanedValue = event.target.value.replace(/\s/g, '');
    setUsername(cleanedValue);
  };

  const handlePasswordChange = (event) => {
    const cleanedValue = event.target.value.replace(/\s/g, '');
    setPassword(cleanedValue);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      
      <div className="login-form">
        <img src={logo} alt="waytigo Logo" className="logo" /> {/* Logo */}
        <h2>Username</h2>
        <input
          type="text"
          className="input-box"
          value={username}
          onChange={handleUsernameChange}
        />
        <h2>Password</h2>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            className="input-box"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            onClick={handleTogglePassword}
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default LogIn;
