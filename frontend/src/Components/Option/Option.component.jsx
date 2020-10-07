import React from 'react';

import './option.styles.css';

const Option = () => {
    return (
        
            <div className="option">
                <a className="tc f6 link dim ba pa3 mt6 mr4 w5 h3 dib near-black" href="/quiz"><h3 className="ma0">Quiz Page</h3></a>
                <a className="tc f6 link dim ba pa3 mt6 ml4 w5 h3 dib near-red" href="/login"><h3 className="ma0">Admin Login</h3></a>
            </div>
        
    );
}

export default Option;