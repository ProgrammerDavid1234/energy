import React from 'react';
import styles from './Footer.module.css';
import logo from '../Assets/logo.png'
// import download from '../Assets/download.png';
// import social from '../Assets/social.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <img src={logo} alt="" />
          <div className={styles.subscribeSection}>
            <p>Funding freemium long tail hypotheses first mover advantage assets ownership</p>
          </div>
          <a href="#" className={styles.get10off}>agensi@mail.com</a>
          <a href="#" className={styles.get10off}>+ 12 3456 7890</a>
        </div>

        <div className={styles.footerSection}>
          <h3>Services</h3>
          <p>Domains</p>
          <p>Premium Hosting</p>
          <p>Private Server</p>
          <p>E-mail Hosting</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Support</h3>
          <ul>
            <li><a href="#">Pricing Plan</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Guide</a></li>
            <li><a href="#">Tutorial</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Company</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Join Us</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Legal</h3>
          <li><a href="#">Claim</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>

        </div>
      </div>
    </div>
  );
};

export default Footer;
