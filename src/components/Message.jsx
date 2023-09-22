import React from 'react'
import './Message.css'

export default function Message({message, onClick}) {

  return (
    <>
      <div className='message-component' onClick={onClick}>
        <div>
          <img className='user-image'src={message.userImage}/>
        </div>
        <div>
          <div style={{display:'flex'}}>
            <h3 className='user-name'>{message.user}</h3>
            <p className='time-stamp'>{message.timestamp}</p>
          </div>
          <p className='content'>{message.content}</p>
          {message.replies?.length > 0 && <p className='replies'>{message.replies.length} Replies</p>}
        </div>
      </div>
    </>
  )
}
