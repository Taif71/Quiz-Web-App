import React from 'react';

import './option.styles.css';
import { Link } from 'react-router-dom';


class Option extends React.Component {


  

    render() {
    return (
        <div>
            <div className="option">
                <Link 
                    className="tc f6 link dim ba pa3 mt6 mr4 w5 h3 dib near-black"                     
                    to='/quiz/username'
                >
                <h3 className="ma0">Quiz Page</h3>                    
                </Link>

                <Link className="tc f6 link dim ba pa3 mt6 ml4 w5 h3 dib near-red" to="/login"><h3 className="ma0">Admin Login</h3></Link>
            </div>

            <div>
            
            </div>
        </div>    
    );
}

}

export default Option;