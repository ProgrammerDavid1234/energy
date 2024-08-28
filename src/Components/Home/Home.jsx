import React, { useState } from 'react';
import './Home.css';
import logo from '../Assets/logo.png';
import hero from '../Assets/hero.png';
import Card from '../Card/Card'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
const Home = () => {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    setOffCanvasOpen(!offCanvasOpen);
  };

  return (
    <div>

    
    <div className="home-container">
      <div className="container">
        <nav className="navbar">
          <img src={logo} alt="Logo" className="logo" />
          <ul className="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <div className="auth-buttons">
            <h5>Login</h5>
            <h5 className='reg'>Register</h5>
          </div>
          <button className="menu-icon" onClick={toggleOffCanvas}>
            &#9776;
          </button>
        </nav>

        {/* Off-Canvas Menu */}
        <div className={`offcanvas-menu ${offCanvasOpen ? 'open' : ''}`}>
          <button className="close-icon" onClick={toggleOffCanvas}>
            &times;
          </button>
          <ul className="offcanvas-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <div className="offcanvas-auth-buttons">
              <h5>Login</h5>
              <h5 className="reg">Register</h5>
            </div>
          </ul>
        </div>

        <div className="hero">
          <div className="text">
            <h4>Uninterrupted Power, <br /> Unbeatable Prices – <br /> Energizing Africa's Future!</h4>
            <p>Discover Unlimited Energy Solutions</p>
            <h5 className="learn">Learn More</h5>
          </div>

          <img src={hero} alt="" />
        </div>

      </div>

    </div>
    <div className="works">
      <div className="text">
      <h3>How It Works?</h3>
      </div>
    <Card />
        </div>
        <div className="subscribe">
        <h2>Subscribe</h2>
        </div>
        <div className="newsletter-container">
      <form className="newsletter-form">
        <input 
          type="text" 
          placeholder="Name in Full" 
          className="newsletter-input" 
          required 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          className="newsletter-input" 
          required 
        />
        <button type="submit" className="newsletter-button">Subscribe to News Letter</button>
      </form>
    </div>
    <Contact />
    <Footer />
    </div>
  );
}

export default Home;
