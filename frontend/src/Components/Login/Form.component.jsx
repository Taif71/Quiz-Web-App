import React from 'react';
import './form.styles.css';


const isAuthenticated;

class Form extends React.Component  {

    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            pass: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        //alert('A form was submitted: ' + this.state);
        this.setState({
            name: 
        });
        fetch('/api/admin/login', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
          }).then(response =>  {
            console.log(response)
            
            if(response.isAuth === true){
                isAuthenticated = true;
            } else if( response.isAuth === false ){
                isAuthenticated = false;
            }

           
          });


       
    }

    render() {
    return (
        <div className="ba b--black signin w-50 mh7 center">
            <main className="pa4 black-80">

            <form className="measure center" onSubmit={this.handleSubmit}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" for="email-address">Admin name</label>
                    <input onChange={this.handleChange} value={this.state.value} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="admin"  id="adminName" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                    <input onChange={this.handleChange} value={this.state.value} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
                {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
                </fieldset>
                
                <div className="lh-copy mt7 mr2">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                </div>                
            </form>

            </main>                
        </div>
        
    );

    }
}


 export default Form;
 export default isAuthenticated;