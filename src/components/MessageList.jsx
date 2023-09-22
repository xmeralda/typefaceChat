import {useRef, useEffect } from 'react'
import Message from './Message'

export default function MessageList({
  inThreadView,
  setInThreadView, 
  setThreadIndex, 
  setThreadReplies,
  messages}) {
  const messageRef = useRef(null);

  useEffect(() => {
    scrollToLatestMessage();
  }, [messages]);

  const scrollToLatestMessage = () => {
    if (messageRef.current) {
      const messageList = messageRef.current;
      messageList.scrollTop = messageList.scrollHeight;
    }
  };

  const handleMessageOnClick = (message, index) => {
    setInThreadView(true);
    setThreadIndex(index);
    setThreadReplies(message.replies);
  }

  return (
    <div style={{height:'100%', overflow:'auto'}} ref={messageRef}>
      {messages.map((message, index) => (
        <Message 
          key={index} 
          message={message} 
          onClick={inThreadView ? () => {} : () => handleMessageOnClick(message, index)}/>
      ))}
    </div>
  )
}
