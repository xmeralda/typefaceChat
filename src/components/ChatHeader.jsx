import React from 'react'
import typefaceLogo from '/src/assets/typefaceLogo.png'
import './ChatHeader.css'

export default function ChatHeader() {
  return (
    <div className='header'>
      <img className='typeface-logo' src={typefaceLogo}/>
      <h3 className='header-text'>Typeface Chat</h3>
    </div>
  )
}
