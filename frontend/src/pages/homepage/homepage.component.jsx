import React from 'react';

import Option from '../../Components/Option/Option.component';

import './homepage.styles.css';

import Particles from 'react-particles-js';


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
const HomePage = () => {

    return (
        <div className=''> 

                <Particles
                    className='particles'
                    params={particlesOptions}
                /> 
                <Option />
        </div>
    );
}

export default HomePage;