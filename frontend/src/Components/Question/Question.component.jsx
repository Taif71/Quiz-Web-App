import React from 'react';
//import Quiz from 'react-quiz-component';
//import { quiz } from './quiz.js';
import Tilt from 'react-parallax-tilt';




import './question.styles.css';

// import QuizBg from '../QuizBg/QuizBg.component';

const dummy = "Hello This is the best question?";
const dummy2 = 3;
// dummy data
var cars = [1,2,3,4,5];


const Question = () => {
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
              className="" 
              id="quiz"
              action="/" 
              method="post"
              >
                 {   cars.map((res) => (
                        <div className="ml7 center question-border">
                            <h3 className="tl">Q{dummy2}: {dummy}</h3><br />
                            <div className=""><br />
                            <h4 className="">Answers:</h4>
                            </div>
                                
                            <div className="fl pb5">
                                <input type="radio" id="opt1" name="option" />                
                                <label className="ml2" for="option">The answer is 1</label>
                                <br />
                                <input type="radio" id="opt2" name="option" />                
                                <label className="ml2" for="option">The answer is 2</label>
                                <br />
                                <input type="radio" id="opt3" name="option" />                
                                <label className="ml2" for="option">The answer is 3</label>
                                <br />
                                <input type="radio" id="opt4" name="option" />               
                                <label className="ml2" for="option">The answer is 4</label>
                                <br /> 
                            </div>
                        </div>

                        ))}           
                        
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

export default Question;













// <h1>Quiz Title</h1> 
//             <form>
//                 <div className="">
                    
                      
//                         <h2 className="">Q1: {dummyData}</h2>                                    
//                         <div className="mv2 f6">     
                    
//                             <div class="mv2 f6">
//                                 <input type="radio" name="option" id="optionsRadios2" value="option2" />
//                                 <label className="ml3" for="option1">                                    
//                                     Option two can be something else and selecting it will deselect option one
//                                 </label>
//                             </div>

//                             <div class="mv2 f6">
//                                 <input type="radio" name="option" id="optionsRadios2" value="option2" />
//                                 <label className="ml3" for="option2">                                    
//                                     Option two can be something else and selecting it will deselect option one
//                                 </label>
//                             </div>

//                             <div class="mv2 f6">
//                             <input type="radio" name="option" id="optionsRadios3" value="option3" />
//                                 <label className="ml3" for="option3">                                    
//                                     Option two can be something else and selecting it will deselect option one
//                                 </label>
//                             </div>

//                             <div class="mv2 f6">
//                             <input type="radio" name="option" id="optionsRadios4" value="option4" />
//                                 <label className="ml3" for="option4">                                    
//                                     Option two can be something else and selecting it will deselect option one
//                                 </label>
//                             </div>
                        
//                         </div> 
                            
                
                
//                 </div>

//             </form>