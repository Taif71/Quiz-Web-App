import React from 'react';
import './form.styles.css';


import { connect } from 'react-redux';

import { setAdminName, setPassword, setCurrentAdmin } from '../../redux/admin/admin.actions';




class Form extends React.Component  {


    handleAdmin = (event) => {
        this.props.setAdminName({ adminName: event.target.value});
    }

    handlePass = (event) => {
        this.props.setPassword({ password: event.target.value });
    }

    handleSubmit = (event) => {
        
        fetch('http://localhost:8000/admin/login', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.props)
          }).then(response =>  {
            console.log(response);
            
            if(response.isAuth === true){
               this.props.setCurrentAdmin({
                    currentAdmin: true
               })
            } else if( response.isAuth === false ){
                this.props.setCurrentAdmin({
                    currentAdmin: false
               })
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
                    <input onChange={this.handleAdmin} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="admin"  id="adminName" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                    <input onChange={this.handlePass} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
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


const mapStateToProps = (state) => ({
    currentAdmin: state.admin.currentAdmin
});

const mapDispatchToProps = dispatch => ({
    setAdminName: adminName => dispatch(setAdminName(adminName)),
    setPassword: password => dispatch(setPassword(password)),
    setCurrentAdmin: admin => dispatch(setCurrentAdmin(admin))
})
 export default connect(mapStateToProps, mapDispatchToProps)(Form);
 //export default isAuthenticated;