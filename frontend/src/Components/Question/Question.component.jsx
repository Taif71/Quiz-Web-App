import React from 'react';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz.js';



import './question.styles.css';

// import QuizBg from '../QuizBg/QuizBg.component';


//const dummyData = "What is your name?";
const Question = () => {
    return (
        <div className="question">
            {/* <QuizBg /> */}
            <div className="ml7 center">
            <Quiz quiz={quiz} />
            </div>
                        
        </div>


            
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