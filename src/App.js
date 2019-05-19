import React, { Component } from 'react';
import SignUp from "./component/signUpForm"
import SignIn from "./component/signInForm"
import './App.css';
import { Route, NavLink, Link, Switch} from 'react-router-dom';
import Authentication from './Authentication'


class App extends Component { 
  render() {
    return (
      <div>
        {/* <div className="App">
           <div className="maindiv maindiv1">
           </div>
          <div className="maindiv maindiv2"> */}
            {/* <div>
              <Link to="/SignIn"><button className="button2">SigIn </button></Link>
              <Link to="/SignUp" ><button className="button3">SignUp</button></Link>
            </div>
            <div className="nav">
              <NavLink className="navlink1" to="/SignIn" >Sign In or </NavLink>
              <NavLink className="navlink1" to="/SignUp">Sign Up</NavLink>
            </div> */}
            <Switch>
            <Route exact path="/SignUp" component={SignUp}/>
            <Route exact path="/SignIn" component={SignIn}/>
            <Route exact path="/Authentication" component={Authentication}/>
            </Switch>
          {/* </div>
        </div> */}

      </div>
    );
  }
}

export default App;


