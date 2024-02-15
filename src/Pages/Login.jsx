import React from 'react'
import './CSS/Login.css'

const Login = () => {
    return (
        <div className='Login'>
          <div className="LoginContainer">
            <h1>Login</h1>
            <div className="LoginFields">
              <input type="email" placeholder='Email address'/>
              <input type="password" placeholder='Password'/>
            </div>
            <button>continue</button>
            <p className="Login-login">Dont have an account? 
              <span>
                Sign up here
              </span>
            </p>
            <div className="LoginAgree">
              <input type="checkbox" name='' id='' />
              <p>By continuing, i agree to the terms and privacy policy</p>
            </div>
          </div>
        </div>
      )
}

export default Login;
