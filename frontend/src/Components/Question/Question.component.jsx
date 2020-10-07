import React from 'react';

import './question.styles.css';

import QuizBg from '../QuizBg/QuizBg.component';


const dummyData = "What is your name?";
const Question = () => {
    return (
        <div className="question fl w-100">
            {/* <QuizBg /> */}
            <h1>Quiz</h1>
            <form>
                <div className="fl w-100 pa2">
                    <h2 className="tl pl7">Q1: {dummyData}</h2>                                    

                        <div className="mv2 f6">
                            

                            <div class="mb2 mt4 f6">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />
                                    Option one is this and that—be sure to include why it's great
                                </label>
                            </div>

                            <div class="mv2 f6">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                                    Option two can be something else and selecting it will deselect option one
                                </label>
                            </div>

                            <div class="mv2 f6">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />
                                    Option two can be something else and selecting it will deselect option one
                                </label>
                            </div>

                            <div class="mv2 f6">
                                <label>
                                    <input type="radio" name="optionsRadios" id="optionsRadios4" value="option4" />
                                    Option two can be something else and selecting it will deselect option one
                                </label>
                            </div>
                            
                </div> 
                
                </div>

            </form>
        
        

        </div>
    );
}

export default Question;