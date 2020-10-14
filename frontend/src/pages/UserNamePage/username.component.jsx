import React, {Component} from 'react';

import Particles from 'react-particles-js';

import './username.styles.css';



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
class UserNamePage extends Component{
    
    render() {        
    return (
        <div className="ba b--black signin w-50 mh7 center">
            <Particles 
                className='particles'
                params={particlesOptions}
            />
            <div className="flex items-center pa4 bg-black">
            <svg className="w1 red" data-icon="info" viewBox="0 0 32 32">
                <title className="bg-light-gray">info icon</title>
                <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
            </svg>

            <span className="lh-title ml3 light-gray"><h3 className="#FFFF00">Caution: </h3>Please note that once you submit your user-name you will be directed to the quiz submition page.<br />
            If you quit out of that page you will lose all your quiz data and restart the quiz.<br />
            Also a timer will track your submition. You will have 10 minutes to submit the form.<br /> Thank you!
            </span>
            
            
            </div>

            <main className="pa4 black-80">

            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Enter your user name</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="email-address">User Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="admin"  id="adminName" />
                    </div>
                    <input className="custom-margin b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />                               
                </fieldset>
                
                                
            </form>

            </main>                
        </div>
    );
    }

}

export default UserNamePage;