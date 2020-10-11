import React from 'react';

import './option.styles.css';
import { Link } from 'react-router-dom';

const Option = () => {
    return (
        
            <div className="option">
                <Link className="tc f6 link dim ba pa3 mt6 mr4 w5 h3 dib near-black" to="/quiz"><h3 className="ma0">Quiz Page</h3></Link>
                <Link className="tc f6 link dim ba pa3 mt6 ml4 w5 h3 dib near-red" to="/login"><h3 className="ma0">Admin Login</h3></Link>
            </div>
        
    );
}

export default Option;