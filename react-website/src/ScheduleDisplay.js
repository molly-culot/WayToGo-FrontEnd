// ScheduleDisplay.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './LogSchedule.css';

function ScheduleDisplay({ children }) {
  const [selectedChild, setSelectedChild] = useState('');
  const [childrenData, setChildrenData] = useState(children);

  const handleChildSelect = (childName) => {
    setSelectedChild(childName);
  };

  const handleScheduleChange = (childName, day, timeType, value) => {
    setChildrenData((prevChildren) => ({
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
    <div className="LogSchedule">
      <Navbar />
      <div className="child-buttons">
        {Object.keys(childrenData).map((childName) => (
          <button
            key={childName}
            onClick={() => handleChildSelect(childName)}
            className={selectedChild === childName ? "selected" : ""}
          >
            {childName}
          </button>
        ))}
      </div>

      {selectedChild && (
        <>
          {Object.entries(childrenData[selectedChild]).map(([day, schedule]) => (
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

export default ScheduleDisplay;
