import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./form.css"


class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            name: "",
            hasAgreed: false

        }
    }

    handleChange = e => {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name
        this.setState({ [name]: value })

    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("This form was submitted with following data");
        localStorage.setItem(this.state.email, this.state.password)
        console.log(this.state)
    }


    render() {
        return (
            <div className="siginform">
                <form onSubmit={this.handleSubmit}>
                    <div className="about about1">
                    <div>
                    <div>FullName</div>
                    </div>
                    <input className="inputform"  type="text" id="name" placeholder="Enter Your Full Name name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    
                    <div className="about about1">
                    <div>
                    <span>PassWord</span>
                    </div>
                    <input  className="inputform" type="text" id="password" placeholder="Enter your PassWord" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="about about1">
                    <div>
                    <span>E-Mail Address</span>
                    </div>

                    <input  className="inputform" type="email" id="email" placeholder="Enter E-Mail your Email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="checkbox">
                    <span>
                        <input className="checkbox2"  type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> <span className="checkbox3">I agree all Statement in </span>
                    </span>
                    </div>

                     <div>
                    <button className="button1" type="submit">SignUp</button> <Link  className="buttontext" to="/SignIn">I am already Member</Link>
                    </div>
                </form>


            </div>
        )
    }
}

export default SignUp