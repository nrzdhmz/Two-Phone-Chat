import React, { useState, useEffect } from 'react';
import avatar from '../assets/images/default.png';

const Header = ({ phoneId, typingData }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [username, setUsername] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setUsername(phoneId === 1 ? 'Hamza' : 'Ismayil');
  }, [phoneId]);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const isTyping = phoneId === 1 ? typingData[2] : typingData[1];

  return (
    <header className="header">
      <div className="top">
        <div className="time">{formatTime(currentTime)}</div>
        <div className="systemInfo">
          <i className="fa-solid fa-signal"></i>
          <i className="fa-solid fa-wifi"></i>
          <div className="battery">79%</div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <i className="fa-solid fa-chevron-left"></i>
          <div className="avatar-container">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="username-container">
            <p>{username}</p>
            <p className='status'>{isTyping ? 'typing...' : 'online'}</p>
          </div>
        </div>
        <div className="right">
          <i className="fa-solid fa-video"></i>
          <i className="fa-solid fa-phone"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;