import React from 'react';
import { useNavigate } from 'react-router-dom';
import './topics.css';
import kubernetes from './assets/kubernetes.jpg';
import php from './assets/php.jpeg';
import bash from './assets/bash.jpg';
import docker from './assets/docker.jpg';
import html from './assets/html.jpg';
import mysql from './assets/mysql.jpg';
import python from './assets/python.jpg';
import devops from './assets/devops.jpg';

const topicsData = [
  { id: 1, name: 'Kubernetes', image: kubernetes, questions: 120 },
  { id: 2, name: 'PHP', image: php, questions: 90 },
  { id: 3, name: 'BASH', image: bash, questions: 73 },
  { id: 4, name: 'Docker', image: docker, questions: 112 },
  { id: 5, name: 'HTML', image: html, questions: 344 },
  { id: 6, name: 'MySQL', image: mysql, questions: 95 },
  { id: 7, name: 'Python', image: python, questions: 240 },
  { id: 8, name: 'DevOps', image: devops, questions: 23 }
];

const Topics = () => {
  const navigate = useNavigate();

  const handleTopicClick = (topicName) => {
    navigate(`/quiz?topic=${topicName}`);
  };

  return (
    <div className='topics'>
      <h2>Our Top Topics</h2>
      <p>Test your skills with our top topics with a variety of questions set for beginners and seniors alike!</p>
      <div className="topics-grid">
        {topicsData.map((topic) => (
          <div key={topic.id} className="topic-card" onClick={() => handleTopicClick(topic.name)}>
            <img src={topic.image} alt={topic.name} className="topic-image" />
            <div className="topic-info">
              <h3>{topic.name}</h3>
              <p>{topic.questions} Questions</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
