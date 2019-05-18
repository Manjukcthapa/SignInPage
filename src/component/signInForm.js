import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./form.css"



class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = e => {
        let target = e.target;
        let name = target.name;
        this.setState({ [name]: e.target.value })

    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("This form was submitted with following data");
        console.log(this.state)
    }

    render() {
        return (
            <div className="siginform">
                <form onSubmit={this.handleSubmit}>
                    <div className="about">
                        <div>
                            <span>Email Address</span>
                        </div>
                        <input  className="inputform" type="email" id="email" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="about inputform1">
                        <div>
                            <span>PassWord</span>
                        </div>
                        <input className="inputform "  type="password" id="password" placeholder="Enter PassWord" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div>
                        <button  className="button1"type="submit">Sign In</button> <Link className="accountlink" to="/SignUp">Create an account</Link>
                    </div>
                </form>


            </div>
        )
    }
}

export default SignIn















