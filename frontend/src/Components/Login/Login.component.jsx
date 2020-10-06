import React from 'react';
import Particles from 'react-particles-js';


import './login.styles.css';


import Form from './Form.component';

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

const Login = () => {
    return (
       <div>
        <Particles
            className='particles'
            params={particlesOptions}
         />

         <Form />
       </div>
    )  

}

export default Login;