import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletterFloat">
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="nLetter">
            <input type="email" placeholder="Enter your email" />
            <button id="subscribe">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter;
