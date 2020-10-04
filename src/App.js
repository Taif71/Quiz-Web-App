import React, {Component} from 'react';
import Particles from 'react-particles-js';

import './App.css';



import Navbar from './Components/Navbar/Navbar.component';
import Option from './Components/Option/Option.component';
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

class App extends Component {


  render() {
    return (              
        <div className="App" >
          {/* using Particles and adding props */}
          <Navbar />
          
          <Particles
            params={particlesOptions}
          />

          <Option />

         

          
        </div>
      
    );
  }
}

export default App;
