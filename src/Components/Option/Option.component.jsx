import React from 'react';

import './option.styles.css';

const Option = () => {
    return (
        
            <div className="option">
                <a className="tc f6 link dim ba pa3 mt7 mr4 w5 h3 dib yellow" href="/quiz"><h3 className="ma0">Quiz Page</h3></a>
                <a className="tc f6 link dim ba pa3 mt7 ml4 w5 h3 dib near-red" href="/admin"><h3 className="ma0">Admin Login</h3></a>
            </div>
        
    );
}

export default Option;