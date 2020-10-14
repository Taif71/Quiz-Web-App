import React, {Component} from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

// importing all the required pages
import HomePage from './pages/homepage/homepage.component';
import AdminPage from './pages/adminpage/adminpage.component';
import QuizPage from './pages/quizpage/quizpage.component';
import LeadBoard from './pages/leadboard/leadboard.component';
import ContactPage from './pages/contact/contact.component';
import AdminDashboard from './pages/admin-dashboard/admin-dashboard.component';
import AdminQuestionPage from './pages/admin-dashboard/admin-question-page.component';
import UserNamePage from './pages/UserNamePage/username.component';


//importing components
import Navbar from './Components/Navbar/Navbar.component';
// import Option from './Components/Option/Option.component';





class App extends Component {


  render() {
    return (              
        <div className="App" >
          {/* using Particles and adding props */}
          <Navbar />
         

         

          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/quiz' component={QuizPage} />
            <Route exact path='/login' component={AdminPage} />
            <Route path='/leadboard' component={LeadBoard}/>
            <Route path='/contact' component={ContactPage}/>
            <Route 
                  path='/admin/dashboard'                   
                  render={() => 
                    this.props.currentAdmin ? (
                      <AdminDashboard />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
            />
            <Route 
                  path='/admin/question-submit' 
                  render={() => 
                    this.props.currentAdmin ? (
                      <AdminQuestionPage />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
            />
            <Route exact path='/quiz/username' component={UserNamePage}/>
          </Switch>          
          
        </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  currentAdmin: state.admin.currentAdmin
});

export default connect(mapStateToProps)(App);
