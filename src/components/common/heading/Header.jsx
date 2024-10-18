import React from 'react'
import Head from './Head'
import "./header.css"
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
        <Head/>
        <header>
          <nav className="flexSB">
            <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/topics">All Topics</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="auth-buttons">
              <div className="login-btn">Log In</div>
              <div className="signup-btn">Sign up</div>
            </div>
            <button className='toggle' onClick={() => setClick(!click)}>
              {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </header>
    </>
  )
}

export default Header