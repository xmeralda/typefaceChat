import React from 'react'
import "./ThreadView.css"

export default function ThreadView({threadMessage}) {
  return (
    <>
      <div className='thread-message'>
        <div>
          <img className='thread-image' src={threadMessage.userImage}/>
        </div>
        <div>
          <div style={{display:'flex'}}>
            <h3 className='thread-user-name'>{threadMessage.user}</h3>
            <p className='thread-time-stamp'>{threadMessage.timestamp}</p>
          </div>
          <p className='thread-content'>{threadMessage.content}</p>
        </div>
      </div>
      <div className='replies-header'>
        <p className='thread-replies'>Replies</p>
      </div>
    </>
  )
}
