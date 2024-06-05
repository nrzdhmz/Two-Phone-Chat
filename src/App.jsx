import React, { useState } from 'react';
import Phone from './pages/Phone';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [typingData, setTypingData] = useState({});

  const sendMessage = (id, message) => {
    if (message) {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newMessage = { id: id, message: message, timestamp: timestamp };
      setChatMessages([...chatMessages, newMessage]);
      setTypingData({
        ...typingData,
        [id]: false,
      });
    }
  };

  const isTypingFunc = (id, isTyping) => {
    setTypingData({
      ...typingData,
      [id]: isTyping
    });
  };

  return (
    <div className="container">
      <Phone 
        id={1} 
        chatMessages={chatMessages} 
        sendMessage={(message) => sendMessage(1, message)}
        isTyping={(isTyping) => isTypingFunc(1, isTyping)}
        typingData={typingData}
      />
      <Phone 
        id={2} 
        chatMessages={chatMessages} 
        sendMessage={(message) => sendMessage(2, message)}
        isTyping={(isTyping) => isTypingFunc(2, isTyping)}
        typingData={typingData}
      />
    </div>
  );
};

export default App;
