import React from 'react';
import Title from '../../common/title/Title';
import { useNavigate } from 'react-router-dom';
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleTakeQuizClick = () => {
    navigate('/quiz');
  };

  const handleViewTopicsClick = () => {
    navigate('/topics');
  };

  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="row">
            <Title subtitle='WELCOME TO TECH QUIZ' title='Best Online Quiz Platform' />
            <p>Test your knowledge, ace the challenge with Tech Quiz</p>
            <div className='button'>
              <button className="primary-btn" onClick={handleTakeQuizClick}>
                TAKE QUIZ <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='secondary-btn' onClick={handleViewTopicsClick}>
                VIEW TOPICS <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <div className='margin'></div> */}
    </>
  );
};

export default Hero;
