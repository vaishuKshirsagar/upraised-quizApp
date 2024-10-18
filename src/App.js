import React from 'react';
// import Header from './components/common/heading/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Topics from './components/alltopics/Topics';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Quiz from './components/take-quiz/Quiz';
// import Title from './components/common/title/Title';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = '/' element ={<Home/>}/>
          <Route path = '/quiz' element ={<Quiz/>}/>
          <Route path = '/topics' element ={<Topics/>}/>
          <Route path = '/about' element ={<About/>}/>
          <Route path = '/contact' element ={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
