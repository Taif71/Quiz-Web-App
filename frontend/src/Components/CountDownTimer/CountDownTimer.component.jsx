import React from 'react';


import './countdowntimer.styles.css';

import CountDown from '../CountDown/CountDown.component';

const CountDownTimer = () => {
    return (
        <div>
            <div className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green mb5 dark-green banner">
            {/* <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5"> */}
                <p className="fw6 f3 f2-ns lh-title mt0 ">
                You have 10 minutes to submit this Quiz form.
                </p>
                <div className="f6 no-underline ba b--dark-green grow pv2 ph3 dib mr3">
                        <CountDown />
                 </div>
            
            
            {/* </article>       */}
            </div>
        
        </div>
        
    );
}

export default CountDownTimer;