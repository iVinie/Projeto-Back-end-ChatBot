import React, { useEffect, useRef, useState } from 'react';
import '../../assets/css/ChatBot.css'
import '../../assets/css/responsive.css'
import Robot from './Robot';

function ChatBot() {
  return (
    <div className='bodyChat'>
      <Robot />
    </div >
  );
}

export default ChatBot;
