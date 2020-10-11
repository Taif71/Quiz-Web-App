import React from 'react';

import './addquestion.styles.css';

const AddQuestion = () => {
    return (
        <div className="add-question">

            <section className="ba b--light-blue ba shadow-1 mw5 mw7-ns center bg-light-grey pa3 ph5-ns">
            <h1 className="mt0 hover-dark-red">Question 1</h1>

            <form className="pa4 black-80">
            
            <h4 className="red hover-dark-blue tl mt-2">Please input the question</h4>
            <div>
                    <label for="comment" className="f6 b db mb2">Enter a question <span className="normal black-60">(Compulsory)</span></label>
                    <textarea id="comment" name="comment" className="ba b--light-blue db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
                    {/* <small id="comment-desc" class="f6 black-60">Helper text for a form control. Can use this text to <a href="#" class="link underline black-80 hover-blue">link to more info.</a></small> */}
            </div>

            <h4 className="red hover-dark-blue tl mt-2">Please input the options for this question</h4>
            <div className="measure mt-3">    
                <label for="name" className="f6 b db mb2">Option 1 <span className="normal black-60">(Compulsory)</span></label>
                <input id="name" className="ba b--light-blue input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                {/* <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small> */}
            </div>
            <div className="measure">    
                <label for="name" className="f6 b db mb2">Option 2 <span className="normal black-60">(Compulsory)</span></label>
                <input id="name" className="ba b--light-blue input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                {/* <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small> */}
            </div>
            <div className="measure">    
                <label for="name" className="f6 b db mb2">Option 3 <span className="normal black-60">(Compulsory)</span></label>
                <input id="name" className="ba b--light-blue input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                {/* <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small> */}
            </div>
            <div className="measure">    
                <label for="name" className="f6 b db mb2">Option 4<span className="normal black-60"> (Compulsory)</span></label>
                <input id="name" className="ba b--light-blue input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                {/* <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small> */}
            </div>


            <h4 className="tl hover-dark-blue red mt-2">Please input the solution number for this question</h4>
            <fieldset id="favorite_movies" className="bn">
            
                <legend className="fw7 mb2">Specify the correct answer</legend>
                <div className="flex items-center mb2">
                <input className="ba b--light-blue mr2" type="radio" id="option1" name="option" value="spacejam" />
                <label for="option1" className="lh-copy">Option 1</label>
                </div>
                <div className="flex items-center mb2">
                <input className="ba b--light-blue mr2" type="radio" id="option2" name="option" value="airbud" />
                <label for="option2" className="lh-copy">Option 2</label>
                </div>
                <div className="flex items-center mb2">
                <input className="ba b--light-blue mr2" type="radio" id="option3" name="option" value="hocuspocus" />
                <label for="option3" className="lh-copy">Option 3</label>
                </div>
                <div className="flex items-center mb2">
                <input className="ba b--light-blue mr2" type="radio" id="option4" name="option" value="diehard" />
                <label for="option4" className="lh-copy">Option 4</label>
                </div>
            
            </fieldset>
            </form>

            </section>

        </div>
    );
}

export default AddQuestion;