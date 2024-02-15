import React from 'react'
import "./CSS/Signup.css"
// import { Link } from "react-router-dom";


const LoginSignup = () => {
  return (
    <div className='Signup'>
      <div className="SignupContainer">
        <h1>Sign up</h1>
        <div className="SignupFields">
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Email address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>continue</button>
        <p className="Signup-login">Already have an account? 
          <span>
            Login here
          </span>
        </p>
        <div className="SignupAgree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
