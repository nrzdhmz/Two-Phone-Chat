import React, { useState } from 'react';

const Footer = ({ phoneId, chatMessages, sendMessage, isTyping }) => {
  const [inputValue, setInputValue] = useState('');

  const inputValueChanged = (event) => {
    setInputValue(event.target.value);
    isTyping(event.target.value.length > 0);
  };

  const handleSendMessage = () => {
    if (inputValue) {
      sendMessage(phoneId, inputValue); 
      setInputValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <main>
        {chatMessages.map((message, index) => (
          <div
            className="chat"
            key={index}
            style={{
              alignSelf: message.id === phoneId ? 'flex-end' : 'flex-start',
              backgroundColor: message.id === phoneId ? '#134C37' : '#222627'
            }}
          >
            {message.message}
            <div
              className="timestamp"
              style={{
                color: message.id === phoneId ? '#77AA97' : '#848889',
              }}
            >
              {message.timestamp}
              <i className="fa-solid fa-check"></i>
            </div>
          </div>
        ))}
      </main>
      <footer>
        <i className="fa-solid fa-plus"></i>
        <input
          type="text"
          value={inputValue}
          onChange={inputValueChanged}
          onKeyPress={handleKeyPress}
        />
        {inputValue ? (
          <button onClick={handleSendMessage}>
            <i className="fa-solid fa-play"></i>
          </button>
        ) : (
          <>
            <i className="fa-solid fa-camera"></i>
            <i className="fa-solid fa-microphone"></i>
          </>
        )}
      </footer>
    </>
  );
};

export default Footer;
