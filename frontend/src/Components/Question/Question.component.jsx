import React from 'react';
//import Quiz from 'react-quiz-component';
//import { quiz } from './quiz.js';
import Tilt from 'react-parallax-tilt';




import './question.styles.css';
import { Component } from 'react';






 

class Question extends Component {
    constructor() {
        super();
        this.state = {
            questionId: [],
            userName: '',
            ans1: null,
            ans2: null,
            ans3: null,
            ans4: null,
            ans5: null,
            ans6: null,
            ans7: null,
            ans8: null,
            ans9: null,
            ans10: null,
            score: null,
            time: 600,
            stateData: ''

        }

    }

    async componentDidMount() {
        const getData = await fetch('/api/quiz/questions');
        const data = getData.json();

        this.setState({
            stateData: data
        });
        
    }

    submitForm = async () => {
        const response = await fetch('/api/quiz/submit', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               questionId: 1, 
               
   
            })
        })
    }
   
    onChange = ()  => {
        
    }
    
   
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
                 {   this.state.stateData.map((res) => (
                        <div className="ml7 center question-border">
                            <h3 className="tl">Q{res.id}: {res.questions}</h3><br />
                            <div className=""><br />
                            <h4 className="">Answers:</h4>
                            </div>
                                
                            <div className="fl pb5">
                                <input type="radio" id="opt1" name="option" value={this.onChange} />                
                                <label className="ml2" for="option">{res.opt1}</label>
                                <br />
                                <input type="radio" id="opt2" name="option" value={this.onChange}/>                
                                <label className="ml2" for="option">{res.opt2}</label>
                                <br />
                                <input type="radio" id="opt3" name="option" value={this.onChange}/>                
                                <label className="ml2" for="option">{res.opt3}</label>
                                <br />
                                <input type="radio" id="opt4" name="option" value={this.onChange}/>               
                                <label className="ml2" for="option">{res.opt4}</label>
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