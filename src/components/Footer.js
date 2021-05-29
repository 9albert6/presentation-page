import React from 'react';
import './Footer.css';
import image1 from '../assets/logo-teatru.png'

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a href={window.location.origin} className='social-logo'>
              JP
              <i class='fab fa-typo3' />
            </a>
          </div>
          <img src={image1} alt="Logo" className="logo-container"/>
          <div class='website-rights'>JP © 2021</div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
