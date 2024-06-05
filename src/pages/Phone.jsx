import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Phone = ({ id, chatMessages, sendMessage, isTyping ,typingData }) => {
  return (
    <section className="phone">
      <Header 
      phoneId={id}
      typingData={typingData}
      />
      <Footer 
        phoneId={id} 
        chatMessages={chatMessages} 
        sendMessage={sendMessage} 
        isTyping={isTyping} 
      />
    </section>
  );
};

export default Phone;
