import React, { Component } from 'react';
import "./form.css";
import { NavLink, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            authenticated: false
        }
    }

    handleChange = e => {
        let target = e.target;
        let name = target.name;
        this.setState({ [name]: e.target.value })

    }

    handleSubmit = e => {
        e.preventDefault();
        let password = localStorage.getItem(this.state.email)
        if (password === this.state.password) {
            this.setState({ authenticated: true })
        } else {
            this.setState({ authenticated: false })
        }
    }

    render() {
        return (
            <div>
          <div className="App">
           <div className="maindiv maindiv1">
           </div>
          <div className="maindiv maindiv2"> 
             <div>
              <Link to="/SignIn"><button className="button2">SigIn </button></Link>
              <Link to="/SignUp" ><button className="button3">SignUp</button></Link>
            </div>
            <div className="nav">
              <NavLink className="navlink1" to="/SignIn" >Sign In or </NavLink>
              <NavLink className="navlink1" to="/SignUp">Sign Up</NavLink>
            </div> 
            <div className="siginform">
                    <form onSubmit={this.handleSubmit}>
                    <div className="about">
                        <div>
                            <span>Email Address</span>
                        </div>
                        <input className="inputform" type="email" id="email" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="about inputform1">
                        <div>
                            <span>PassWord</span>
                        </div>
                        <input className="inputform " type="password" id="password" placeholder="Enter PassWord" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div>
                        <button className="button1" type="submit" >Sign In</button><Link className="accountlink" to="/SignUp">Create an account</Link>
                    </div>
                </form>     
            </div>
            { this.state.authenticated && <Redirect to='/Authentication' /> }
            </div>
            </div>            </div>

        )
    }
}

export default SignIn















