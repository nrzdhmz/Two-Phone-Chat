import React, { useState, useEffect } from 'react';
import avatar from '../assets/images/default.png';

const Header = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const getBatteryStatus = async () => {
      try {
        const battery = await navigator.getBattery();
        setBatteryLevel((battery.level * 100).toFixed(0) + '%');

        battery.addEventListener('levelchange', () => {
          setBatteryLevel((battery.level * 100).toFixed(0) + '%');
        });
      } catch (error) {
        console.error('error');
        setBatteryLevel('?');
      }
    };

    getBatteryStatus();

    const updateTime = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <header className="header">
      <div className="top">
        <div className="time">{formatTime(currentTime)}</div>
        <div className="systemInfo">
          <i className="fa-solid fa-signal"></i>
          <i className="fa-solid fa-wifi"></i>
          <div className="battery">{batteryLevel !== null ? batteryLevel : 'Loading...'}</div>
        </div>
      </div> 
      <div className="bottom">
        <div className="left">
          <div className="avatar-container">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="username">Hamza</div>
        </div>
        <div className="right">
          <i className="fa-solid fa-video"></i>
          <i className="fa-solid fa-phone"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
