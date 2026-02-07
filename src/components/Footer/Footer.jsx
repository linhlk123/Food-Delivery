import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>© 2024 Food App. All rights reserved.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook icon" />
                    <img src={assets.twitter_icon} alt="twitter icon" />
                    <img src={assets.linkedin_icon} alt="linkedin icon" />
                </div>
            </div>
            <div className="footer-content-center">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Contact Us</p>
            </div>
            <div className="footer-content-right">
                <h3>Subscribe to our Newsletter</h3>
                <div className="footer-subscribe">
                    <input type="email" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
