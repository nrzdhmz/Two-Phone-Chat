import React, { useState } from 'react';

const Footer = ({ phoneId, chatMessages, sendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const InputValueSaver = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue) {
      sendMessage(inputValue);
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
          </div>
        ))}
      </main>
      <footer>
        <i className="fa-solid fa-plus"></i>
        <input
          type="text"
          value={inputValue}
          onChange={InputValueSaver}
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
