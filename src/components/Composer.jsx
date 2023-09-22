import { useState } from 'react'
import defaultUserImage from '/src/assets/user.jpeg'
import Button from "@mui/material/Button";
import './Composer.css'

export default function Composer({
    inThreadView, 
    threadIndex, 
    threadReplies, 
    setThreadReplies, 
    messages, 
    setMessages}) {
  const [messageInput, setMessageInput] = useState('');

  const getTimestamp = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const amOrPm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${formattedHours}:${formattedMinutes}${amOrPm}`;
  }

  const handleOnEnter = (event) => {
    if (event.key === 'Enter') {
      inThreadView ? handleReply() : handleSend();
    }
  }

  const handleSend = () => {
    if (messageInput !== '') {
      let newMessage = {
        user: 'Elizabeth Jones',
        userImage: defaultUserImage,
        content: messageInput,
        timestamp: getTimestamp(),
        replies: []
      }
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  }
  
  const handleReply = () => {
    if (messageInput !== '') {
      let newReply = {
        user: 'Elizabeth Jones',
        userImage: defaultUserImage,
        content: messageInput,
        timestamp: getTimestamp(),
      }
      setThreadReplies([...threadReplies, newReply]);
      messages[threadIndex].replies.push(newReply);
      setMessages(messages);
      setMessageInput('');
    }
  }

  return (
    <>
      <div className='background'>
        <input 
          type="text" 
          className='message-input'
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={handleOnEnter}/>
        <Button 
          variant='filled' 
          onClick={inThreadView ? handleReply : handleSend}
          style={{ //Styling here due to CSS conflicts
            background:'#EA3F46', 
            outline:'none', 
            height:'30px', 
            borderRadius:'0'}}> {inThreadView ? 'Reply' : 'Send'}</Button>
      </div>
    </>
  )
}
