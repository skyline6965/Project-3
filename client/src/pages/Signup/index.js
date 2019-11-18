import React from "react";
import 'bulma/css/bulma.css';
import "./style.css"
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "../../components/Nav";

class Signup extends React.Component {

  state = {
    username: "",
    email: "",
    phone: "",
    password: "",
    redirect: false,
    redirectTo: "/login"
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if(this.state.redirect){
      return <Redirect to={this.state.redirectTo}/>
    }
  }

  handleChange = (event) => {
    event.preventDefault()

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Username: ");

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    var newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    console.log(newUser);

    axios.post('/api/users', newUser)
    .then(response => {
      console.log(response)
      if(response.data){
        console.log("Successful Signup!");
        alert("Successful Signup!");
        this.setRedirect();
        this.renderRedirect();
      }
      else{
        console.log("Signup error");
      }
    }).catch(error => {
      console.log("Signup Server Error: ")
      console.log(error);
    })
  }
  

  render() {
    return (
      <div>
      <Navbar />
      <div className="customForm">
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              name="username"
              type="text"
              placeholder="Name"
              value={this.state.username}
              onChange={this.handleChange}>
            </input>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input is-success"
              name="email"
              type="email"
              placeholder="youremail@youremail.com"
              value={this.state.email}
              onChange={this.handleChange}>
            </input>
          </div>

        </div>

        <div className="field">
          <label className="label">Phone</label>
          <div className="control">
            <input
              className="input"
              name="phone"
              type="tel"
              placeholder="(XXX) XXX-XXXX"
              value={this.state.phone}
              onChange={this.handleChange}>
            </input>
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <p className="control">
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input>
          </p>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button 
            className="button is-link"
            onClick={this.handleSubmit}>Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
          <br></br>
          <div>
            <br></br>
          Already have a user profile? Click<a href="/login"> here</a>
          </div>
        </div>
      </div>
      {this.renderRedirect()}
      </div>
    )
  }

}
export default Signup;