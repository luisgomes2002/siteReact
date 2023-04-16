import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-links'>
          <div className='footer-link--wrapper'>
            <div className='footer-link--items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/sign-up'>Testimonials</Link>
              <Link to='/sign-up'>Carrers</Link>
              <Link to='/sign-up'>Terms of Service</Link>
            </div>
          </div>
          <div className='footer-link--wrapper'>
            <div className='footer-link--items'>
              <h2>Social Media</h2>
              <Link to='https://www.instagram.com/_gomesluis/'>Instagram</Link>
              <Link to='/sign-up'>Facebook</Link>
              <Link to='/sign-up'>Youtube</Link>
              <Link to='https://twitter.com/SAiForaMalucoXD'>Twitter</Link>
            </div>
          </div>
        </div>
        <div>
          <section>
            <div className='social-media--wrap'>
              <div className='footer-logo'>
                <Link to='/' id='footer-logo'>Murasaki</Link>
              </div>
              <p className='website-rights'>© 2023. Murasaki</p>
              <div className='social-icons'>
                <Link to='https://www.instagram.com/_gomesluis/' className='social-icon--link' target='react/jsx-no-target-blank'
                ><i className='fa-brands fa-instagram'></i></Link>
                <Link to='https://twitter.com/SAiForaMalucoXD' className='social-icon--link' target='react/jsx-no-target-blank'
                ><i className='fa-brands fa-twitter'></i></Link>
                <Link to='https://www.linkedin.com/in/luis-gomes-8462b321a/' className='social-icon--link' target='react/jsx-no-target-blank'
                ><i className='fa-brands fa-linkedin'></i></Link>
                <Link to='https://github.com/luisgomes2002' className='social-icon--link' target='react/jsx-no-target-blank'
                ><i className='fa-brands fa-github'></i></Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer