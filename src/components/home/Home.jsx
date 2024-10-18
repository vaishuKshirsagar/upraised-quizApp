import React from 'react'
import About from '../about/About'
import Topics from '../alltopics/Topics'
import Footer from '../common/footer/Footer'
import Header from '../common/heading/Header'
// import Header from '../common/heading/Header'
import Contact from '../contact/Contact'
import Hero from './hero/Hero'

const Home = () => {
  return (
    <>
    <div className="header-hero-container">
        <Header />
        <Hero />
      </div>
       <Topics/>
       <About/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default Home