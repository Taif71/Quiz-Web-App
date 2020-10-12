
import React from 'react';
import { connect } from 'react-redux';

import QuestionCrumb from '../../Components/Question-crumb/Question-crumb.component';
//import AddQuestion from '../../Components/AddQuestion/AddQuestion.component';
class AdminDashboard extends React.Component {

    render() {
        return (
            <div className="">
                <h1 className="hover-purple">You can update and edit your questions here!</h1>

                <article class="center mw5 mw6-ns hidden ba mv4">
                <h1 class="f4 bg-yellow red mv0 pv2 ph3">CAUTION</h1>
                <div class="pa3 bt">
                    <p class="f6 f5-ns lh-copy measure mv0">
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
                <QuestionCrumb />
                <QuestionCrumb />
                <QuestionCrumb />
                <QuestionCrumb />
                <QuestionCrumb />

                {/* we will shot a loop here based on the add-question button to add upto 5 more QuestionCrumbs */}



                <button className="f6 link dim ba bw1 ph3 pv2 mb2 dib bg-black white pointer">Add Question</button>
                <br /><br /><br />


            </div>
        );
    }
}

const mapDispatchToProps = () => {

}

export default connect(null, mapDispatchToProps)(AdminDashboard);