import React from 'react'
// import Title from '../common/title/Title'
import aboutus from './assets/quiz.png'
import './about.css'

const About = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className="container flexSB">
        <div className="left row">
            <img src= {aboutus} alt=""/>
        </div>
        <div className="right row">
          <h2>What is TechQuiz? </h2><br/>
          <p>
          "The 
          <strong> TechQuiz</strong> is an online platform which lets you test your knowledge on a wide variety of technical topics. You can get random set of questions for a speicifc topic including Linux, DevOps, BASH, PHP and lots more. TechQuiz App is your ultimate platform for testing and improving your knowledge across a wide range of technical topics! Whether you're a beginner looking to learn new skills or an experienced professional aiming to sharpen your expertise, our quiz app offers an engaging way to challenge yourself."
          </p>
        </div>
        </div>
      </section>
    </>
  )
}

export default About
