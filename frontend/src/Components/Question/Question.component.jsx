import React from 'react';
//import Quiz from 'react-quiz-component';
//import { quiz } from './quiz.js';
import Tilt from 'react-parallax-tilt';

//import { connect } from 'react-reduxs';


import './question.styles.css';
import { Component } from 'react';






 

class Question extends Component {

   render() {
    return (
        <Tilt             
            tiltMaxAngleX= "1"
            tiltMaxAngleY="1"
        >

        <h1 className="bg">Quiz questions</h1>
        <div className="question">
            {/* <QuizBg /> */}
        
            
            <div className="">
                {/* <Quiz quiz={quiz} /> */}
                    
                        
                        
              <form 
              submit={this.submitForm}
              className="" 
              id="quiz"
              action="/" 
              method="post"
              >                 
                        <div className="ml7 center question-border">
                            <h3 className="tl">Question</h3><br />
                            <div className=""><br />
                            <h4 className="">Answers:</h4>
                            </div>
                                
                            <div className="fl pb5">
                                <input type="radio" id="opt1" name="option" />                
                                <label className="ml2" for="option"></label>
                                <br />
                                <input type="radio" id="opt2" name="option" />                
                                <label className="ml2" for="option"></label>
                                <br />
                                <input type="radio" id="opt3" name="option" />                
                                <label className="ml2" for="option"></label>
                                <br />
                                <input type="radio" id="opt4" name="option" />               
                                <label className="ml2" for="option"></label>
                                <br /> 
                            </div>
                        </div>
                                  
                        
                </form>
                        <button 
                            form="quiz"
                            type="submit"
                            className=" mt3 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" 
                            href="#0">Button Text</button>                                
                                   
            </div>
            
                            
        </div>
        </Tilt>


            
    );
    } 
}

export default Question;







