import React from 'react'
import './Modal.css';

const Modal = ({score}) => {
  return (
    <div className='modal'>
        <div className='modal-title'>Ton score : {score}</div>
        <div onClick={() => window.location ="/"} className='modal-btn'> Recommence à nouveau
        </div>
    </div>
  )
}

export default Modal