// WaitTimeWest.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WaitTimeWest.css';
import { west_queue } from '../../App';

const WaitTimeWest = () => {
  const [minutes, setMinutes] = useState(west_queue.length);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilliseconds(999); // Change this line to setMilliseconds(999)
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
          setMilliseconds(999); // Change this line to setMilliseconds(999)
        } else {
          setIsRunning(false);
          setTimerExpired(true);
        }
      }, 10);
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, isRunning]);

  const navigate = useNavigate();

  const handleJoinQueueClick = () => {
    navigate('/joinqueue');
  };

  const handleReadyToParkClick = () => {
    navigate('/parkingguide');
  };

  return (
    <div className="wait-time-container">
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>West Garage</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '100px' }}>Estimated Waiting Time</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '100px' }}>{minutes} Mins</h1>
      <h2 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Queue Position: {west_queue.length}</h2>

      {timerExpired ? (
        <button onClick={handleReadyToParkClick} style={{ backgroundColor: 'green', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginBottom: '100px' }}>
          Ready to Park
        </button>
      ) : (
        <button onClick={handleJoinQueueClick} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginBottom: '100px' }}>
          Leave Queue
        </button>
      )}
    </div>
  );
};

export default WaitTimeWest;
