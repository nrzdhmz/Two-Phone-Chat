import React, { useState } from 'react';
import Phone from './pages/Phone';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [chatMessages, setChatMessages] = useState([]);

  const sendMessage = (id, message) => {
    if (message) {
      const newMessage = { id: id, message: message };
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
