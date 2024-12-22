import React from 'react'
import BadgeTags from './BadgeTags';
import modelImage from '../image.png'
import './TextArea.css'

function TextArea() {
  return (
    <>
      <div className="text-content">
        <h2>We're unveiling Chic,<br />your ultimate fashion destination</h2>
        <div className='discount'>
        <img src={modelImage} alt="" />
        <p>Explore an extensive collection, curated to redefine your wardrobe. Elevate your fashion quotient effortlessly.</p>
        </div>
      </div>
      <BadgeTags />
    </>
  )
}

export default TextArea
