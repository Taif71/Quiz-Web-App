import React from 'react';

import './quizpage.styles.css';

import Particles from 'react-particles-js';


import CountDownTimer from '../../Components/CountDownTimer/CountDownTimer.component';
import Question from '../../Components/Question/Question.component';










const particlesOptions = {
  
    background: {
     color: {
      value: "#f5f5f5",
    }
  },
    particles: {
      color: {
        value: "#e00202"
      },
      line_linked: {
        color: {
          value: "#000000"
        }
      },
      number: {
        value: 55
      },
      size: {
        value: 4
      }
    }  
} 
const QuizPage = () => {
    return (
        <div className='quizpage mt5'>
            <Particles 
                className='particles'
                params={particlesOptions}
            />
            <CountDownTimer />

            <Question />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default QuizPage;