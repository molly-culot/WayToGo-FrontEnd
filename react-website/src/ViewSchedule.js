import React, { useState } from 'react';
import Navbar from './Navbar'; 
import './BusReport.css';

  
function ViewSchedule() {
  const [selectedChildren, setSelectedChildren] = useState([]);
  const [children, setChildren] = useState({
    "Name 1": {
      Monday: { onTime: 'Yes', offTime: 'No' },
      Tuesday: { onTime: 'Yes', offTime: 'Yes' },
      Wednesday: { onTime: 'Yes', offTime: 'No' },
      Thursday: { onTime: 'No', offTime: 'Yes' },
      Friday: { onTime: 'Yes', offTime: 'Yes' }
    },
    "Name 2": {
      Monday: { onTime: 'Yes', offTime: 'Yes' },
      Tuesday: { onTime: 'Yes', offTime: 'No' },
      Wednesday: { onTime: 'No', offTime: 'Yes' },
      Thursday: { onTime: 'Yes', offTime: 'Yes' },
      Friday: { onTime: 'Yes', offTime: 'Yes' }
    }
    // Add more children here if needed
  });

  const handleChildSelect = (childName) => {
    if (selectedChildren.includes(childName)) {
      setSelectedChildren(selectedChildren.filter((name) => name !== childName));
    } else {
      setSelectedChildren([...selectedChildren, childName]);
    }
  };

  return (
    <div className="ViewSchedule">
      <Navbar />
      <div className="child-buttons">
        {Object.keys(children).map((childName) => (
          <button 
            key={childName} 
            onClick={() => handleChildSelect(childName)}
            className={selectedChildren.includes(childName) ? "selected" : ""}
          >
            {childName}
          </button>
        ))}
      </div>

      <div className="schedule-container">
        {selectedChildren.map((childName) => (
          <div key={childName} className="child-schedule">
            <h2>{childName}</h2>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Taking Bus To</th>
                  <th>Taking Bus From</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(children[childName]).map(([day, schedule]) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>{schedule.onTime}</td>
                    <td>{schedule.offTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewSchedule;
