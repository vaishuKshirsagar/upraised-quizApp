import React from 'react'
import logo from '../../../components/common/heading/upraised_logo.jpeg';
import "./header.css";
import "../../../App.css"
function Head() {
  return (
    <>
      <section className='head'>
        <div className="container flexSB">
            <div className="logo-text-container">
                <img src={logo} alt="upraised logo" className="logo-image"/>
                <div className="text-container">
                <h1>TechQuiz</h1>
                <span>Online learning with Quiz</span>
                </div>
            </div>
            <div className='social'>
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-instagram icon'></i>
                <i className='fab fa-twitter icon'></i>
                <i className="fa solid fa-globe icon"></i>
            </div>
        </div>
      </section>
    </>
  )
}

export default Head
