import React from 'react';

import './quizpage.styles.css';




import CountDownTimer from '../../Components/CountDownTimer/CountDownTimer.component';
import Question from '../../Components/Question/Question.component';
const QuizPage = () => {
    return (
        <div className='quizpage mt5'>
              <CountDownTimer />

              <Question />
        </div>
    );
}

export default QuizPage;