import React from 'react'
import backArrow from '/src/assets/arrow_back.svg'
import './ThreadHeader.css'

export default function ThreadHeader({setInThreadView}) {
  const returnHome = () => {
    setInThreadView(false);
  }
  return (
    <>
      <div className='header'>
      <img className='back-arrow'src={backArrow} onClick={returnHome}/>
        <h3 className='header-text'>Thread</h3>
      </div>
    </>
  )
}
