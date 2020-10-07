import React from 'react';
import Particles from 'react-particles-js';
import './leadboard.styles.css';

import Table from '../../Components/Table/Table.component';



// specifying particles component styling
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

const LeadBoard = () => {

    return (
        
        <div>
        <Particles
        className='particles'
        params={particlesOptions}
        />
      
        
        <Table />
        <br />
        <br />
        </div>
    );
}

export default LeadBoard;
