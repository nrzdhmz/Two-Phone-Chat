import React, { useState } from 'react';
import Phone from './pages/Phone';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [chatMessages, setChatMessages] = useState([]);

  const sendMessage = (id, message) => {
    if (message) {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newMessage = { id: id, message: message, timestamp: timestamp };
      setChatMessages([...chatMessages, newMessage]);
    }
  };

  return (
    <div className="container">
      <Phone id={1} chatMessages={chatMessages} sendMessage={(message) => sendMessage(1, message)} />
      <Phone id={2} chatMessages={chatMessages} sendMessage={(message) => sendMessage(2, message)} />
    </div>
  );
};

export default App;
