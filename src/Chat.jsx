import { useState, useRef, useEffect } from 'react'
import MessageList from './components/MessageList'
import Composer from './components/Composer'
import ChatHeader from './components/ChatHeader'
import ThreadHeader from './components/ThreadHeader'
import ThreadView from './components/ThreadView'
import './Chat.css'

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inThreadView, setInThreadView] = useState(false);
  const [threadIndex, setThreadIndex] = useState(-1);
  const [threadReplies, setThreadReplies] = useState([]);
  
  return (
    <>
      <div className='chat-interface'>
        {inThreadView && 
          <div className='thread-view'>
            <div>
              <ThreadHeader setInThreadView={setInThreadView}/>
              <ThreadView threadMessage={messages[threadIndex]} />
            </div> 
            <MessageList 
                inThreadView={inThreadView}
                setInThreadView={setInThreadView}
                setThreadIndex={setThreadIndex}
                messages={threadReplies}/>
            <div >
              <Composer 
                inThreadView={inThreadView}
                threadIndex={threadIndex}
                threadReplies={threadReplies}
                setThreadReplies={setThreadReplies}
                messages={messages} 
                setMessages={setMessages}/>
            </div>
          </div>}
        {!inThreadView &&
          <div className='chat-view'>
            <div>
              <ChatHeader /> 
            </div>
            <MessageList 
              setInThreadView={setInThreadView}
              setThreadIndex={setThreadIndex}
              setThreadReplies={setThreadReplies}
              messages={messages}/> 
            <div>
              <Composer 
                inThreadView={inThreadView} 
                messages={messages} 
                setMessages={setMessages}/>
            </div>
          </div>}
      </div> 
    </>
  )
}

export default Chat
