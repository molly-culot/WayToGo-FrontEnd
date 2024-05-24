import React, { useState } from 'react';
import Navbar from './Navbar'; 
import './BusReport.css';

function BusReport() {
  const [selectedChildren, setSelectedChildren] = useState([]);
  const [children, setChildren] = useState({
    "Name 1": {
      Monday: { onTime: '7:45 AM', offTime: '3:00 PM' },
      Tuesday: { onTime: '7:50 AM', offTime: '3:05 PM' },
      Wednesday: { onTime: '7:55 AM', offTime: '3:10 PM' },
      Thursday: { onTime: '8:00 AM', offTime: '3:15 PM' },
      Friday: { onTime: '7:40 AM', offTime: '2:55 PM' }
    },
    "Name 2": {
      Monday: { onTime: '7:30 AM', offTime: '3:10 PM' },
      Tuesday: { onTime: '7:40 AM', offTime: '3:15 PM' },
      Wednesday: { onTime: '7:50 AM', offTime: '3:20 PM' },
      Thursday: { onTime: '7:55 AM', offTime: '3:25 PM' },
      Friday: { onTime: '7:35 AM', offTime: '3:05 PM' }
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
    <div className="BusReport">
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

export default BusReport;
