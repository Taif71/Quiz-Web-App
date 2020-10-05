import React, {Component} from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

// importing all the required pages
import HomePage from './pages/homepage/homepage.component';
import AdminPage from './pages/adminpage/adminpage.component';
import QuizPage from './pages/quizpage/quizpage.component';
import LeadBoard from './pages/leadboard/leadboard.component';
import ContactPage from './pages/contact/contact.component';
//importing components
import Navbar from './Components/Navbar/Navbar.component';
// import Option from './Components/Option/Option.component';





class App extends Component {


  render() {
    return (              
        <div className="App" >
          {/* using Particles and adding props */}
          {/* <Navbar /> */}
         

         

          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/quiz' component={QuizPage} />
            <Route exact path='/login' component={AdminPage} />
            <Route path='/leadboard' component={LeadBoard}/>
            <Route path='/contact' component={ContactPage}/>
          </Switch>          
          
        </div>
      
    );
  }
}

export default App;
