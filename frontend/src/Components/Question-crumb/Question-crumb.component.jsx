import React from 'react';

import './Question-crumb.styles.css';

const QuestionCrumb = () => {
 return (
     <div className="grow">              
            <article className="questionCrumb center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
            <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Question</h1>
            
            <div class="pa3 bt b--black-10">
                <p class="f6 f5-ns lh-copy measure">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                vero eos et accusam et justo duo dolores et ea rebum.
                </p>


                <button className="f6 link dim br1 ph3 pv2 mb2 dib white bg-yellow">Edit</button>
                <button className="f6 link dim br1 ph3 pv2 mb2 dib white bg-red">Delete</button>
                <br />
                <span className="tl gold">Click to edit the question,options and solution</span><br />
                <span className="tl light-red">Click Delete to delete this question</span>
            </div>

            
            </article>      
            
     </div>
 );
}

export default QuestionCrumb;