import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({ setShowLogin }) => {

    const [currStep, setCurrStep] = React.useState("Login");

  return (
    <div className="login-popup" id='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currStep}</h2>
            <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
            {currStep === "Login" ? null : <input type="text" placeholder='Your name' required/> }
            <input type="email" placeholder='Email address' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{currStep === "Sign Up" ? "Create Account": "Log in" }</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>I agree to the Terms of Service and Privacy Policy</p>
        </div>
        <div className="login-popup-switch">
            {currStep === "Login" ? (
                <p>Don't have an account? <span onClick={() => setCurrStep("Sign Up")}>Sign Up</span></p>
            ) : (
                <p>Already have an account? <span onClick={() => setCurrStep("Login")}>Log In</span></p>
            )}
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
