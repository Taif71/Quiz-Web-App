
import React from 'react';
import { connect } from 'react-redux';

import QuestionCrumb from '../../Components/Question-crumb/Question-crumb.component';
import { addQuestion } from '../../redux/admin/admin.actions';
//import AddQuestion from '../../Components/AddQuestion/AddQuestion.component';
class AdminDashboard extends React.Component {
    
   
    // const { addQuestion, qNum} = this.props; // this works only inside any function
    // if you use function expression like below, you will have access to the props using this.props.
    // but if you use normal functions you will not have access to this props
    // 
    handleAddQuestion = (e) =>  {
        
        e.preventDefault();   
        
        this.props.addQuestion({qNum: this.props.qNum + 1});  
        // if(qNum >= 5 && qNum < 10){
            
        //         // this is how you pass state and increment or decrement it                                          
        // }
    }
    
    

    render() {
        return (
            <div className="">
                <h1 className="hover-purple">You can update and edit your questions here!</h1>

                <article className="center mw5 mw6-ns hidden ba mv4">
                <h1 className="f4 bg-yellow red mv0 pv2 ph3">CAUTION</h1>
                <div className="pa3 bt">
                    <p className="f6 f5-ns lh-copy measure mv0">
                    This is the admin dashboard page. 
                    From here you can add upto 10 questions and not less than 5 questions.                                    
                    Also please note that whatever questions you update here will be shown in
                    the public page of the quiz submition page. 
                    <br />Thank you!
                    </p>
                </div>
                </article>

                <div className="">
                    <hr className="line" />
                </div>

                <h2>Add,Edit,Delete questions to be viewed publicly:</h2>
                <span>You can only add a maximum of 10 questions</span>

               
                <QuestionCrumb id={1}/>
                <QuestionCrumb id={2}/>
                <QuestionCrumb id={3}/>
                <QuestionCrumb id={4}/>
                <QuestionCrumb id={5}/>


                <QuestionCrumb id={6}/>
                <QuestionCrumb id={7}/>
                <QuestionCrumb id={8}/>
                <QuestionCrumb id={9}/>
                <QuestionCrumb id={10}/>
                {/* we will shot a loop here based on the add-question button to add upto 5 more QuestionCrumbs */}



                {/* <button className="f6 dim ba bw1 ph3 pv2 mb2 dib bg-black white pointer" onClick={this.handleAddQuestion}>Add Question</button> */}
                <br /><br /><br />


            </div>
        );
    }
}


const mapStateToProps = state => ({
    qNum: state.admin.qNum
});

const mapDispatchToProps = dispatch => ({
    addQuestion: question => dispatch(addQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);