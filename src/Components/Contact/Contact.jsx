import React from 'react'
import './Contact.css'
import map from '../Assets/map.png'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-form-container">
          <h2 className="contact-header">Contact Us</h2>
          <form className="contact-form">
            <input 
              type="text" 
              placeholder="Name in Full" 
              className="contact-input" 
              required 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="contact-input" 
              required 
            />
            <textarea 
              placeholder="Enter Message" 
              className="contact-textarea" 
              required 
            />
            <button type="submit" className="contact-button">Send Email</button>
          </form>
        </div>
        <div className="contact-image-container">
          <img src={map} alt="Contact Us" className="contact-image" />
        </div>
      </div>
    </div>
  )
}

export default Contact
