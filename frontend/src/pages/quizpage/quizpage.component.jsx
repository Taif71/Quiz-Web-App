import React from 'react';

import './quizpage.styles.css';



import CountDownTimer from '../../Components/CountDownTimer/CountDownTimer.component';

const QuizPage = () => {
    return (
        <div className='quizpage mt5'>
              <CountDownTimer />
        </div>
    );
}

export default QuizPage;