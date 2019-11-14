import React from "react";
import 'bulma/css/bulma.css';
import "./style.css"
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "../../components/Nav";

class Signup extends React.Component {

  state = {
    name: "",
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
    console.log("Username/Info:")
    console.log(this.state.name)

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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    console.log(this.state.name);

    axios.post('/api/users', newUser)
    .then(response => {
      console.log(response)
      if(response.data){
<<<<<<< HEAD
        console.log("Successful Signup!")
        this.setState({
          redirect:true,
          redirectTo: "/login"
        })
        // this.renderRedirect();
=======
        console.log("Successful Signup!");
        alert("Successful Signup!");
        this.setRedirect();
        this.renderRedirect();
>>>>>>> master
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
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
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
            <p className="help is-success">This email is available</p>
          </div>

        </div>

        <div className="field">
          <label className="label">Phone</label>
          <div className="control">
            <input
              className="input is-danger"
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
          <p className="help is-danger">This password is invalid</p>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Reserve Studio Time</option>
                <option>Recording Lessons</option>
                <option>Piano Lessons</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Text Area"></textarea>
          </div>
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
        </div>
      </div>
      {this.renderRedirect()}
      </div>
    )
  }

}
export default Signup;