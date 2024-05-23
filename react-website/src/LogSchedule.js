import './App.css';
import React, { useState } from 'react';


function LogSchedule() {

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
      
    </div>
  );
}

export default LogSchedule;
