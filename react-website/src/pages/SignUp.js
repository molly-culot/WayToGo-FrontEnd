import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedChild, setSelectedChild] = useState('');
  const [children, setChildren] = useState({
    "Name 1": {
      Monday: { to: true, from: true },
      Tuesday: { to: true, from: true },
      Wednesday: { to: true, from: true },
      Thursday: { to: true, from: true },
      Friday: { to: true, from: true }
    },
    "Name 2": {
      Monday: { to: true, from: true },
      Tuesday: { to: true, from: true },
      Wednesday: { to: true, from: true },
      Thursday: { to: true, from: true },
      Friday: { to: true, from: true }
    }
    // Add more children here if needed
  });

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

  const handleChildSelect = (childName) => {
    setSelectedChild(childName);
  };

  const handleScheduleChange = (childName, day, timeType, value) => {
    setChildren((prevChildren) => ({
      ...prevChildren,
      [childName]: {
        ...prevChildren[childName],
        [day]: {
          ...prevChildren[childName][day],
          [timeType]: value,
        },
      },
    }));
  };

  return (
    <div className="App">
      <h1>WayToGo</h1>
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

      <br/><br/><br/><br/><br/><br/><br/><br/>

      <div className="child-buttons">
        {Object.keys(children).map((childName) => (
          <button key={childName} onClick={() => handleChildSelect(childName)}>
            {childName}
          </button>
        ))}
      </div>


      {selectedChild && (
        <>
          <h1>{selectedChild}'s Schedule</h1>
          
          {Object.entries(children[selectedChild]).map(([day, schedule]) => (
            <div key={day}>
              <h2>{day}</h2>
              To: 
              <select
                value={schedule.to}
                onChange={(e) => handleScheduleChange(selectedChild, day, 'to', e.target.value)}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
              From: 
              <select
                value={schedule.from}
                onChange={(e) => handleScheduleChange(selectedChild, day, 'from', e.target.value)}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          ))}
          <button>Change</button>
        </>
      )}
       <br/><br/><br/><br/><br/><br/><br/><br/>
      <h1>View Bus Log</h1>
      
    </div>
  );
}

export default App;
