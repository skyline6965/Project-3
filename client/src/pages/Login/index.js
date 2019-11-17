import React from "react";
import 'bulma/css/bulma.css';
import "./style.css";
import Navbar from "../../components/Nav";
import { Redirect } from "react-router-dom";
import axios from "axios";



class Login extends React.Component {
  state = {
    username: "",
    password: "",
    redirect: false,
    redirectTo: "/calendar"
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirectTo} />
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  sendHome = event => {
    this.setRedirect();
    this.setState({redirectTo: "/"})
    this.renderRedirect();
  }

  handleSubmit = event => {
  event.preventDefault();
  const loginInfo = {
    username: this.state.username,
    password: this.state.password
  }
  console.log(loginInfo);
    
  axios.post("/auth/login", loginInfo)
    .then(response => {
      alert("Welcome");
      console.log("you passed")
      console.log(response)
      this.setRedirect();
      this.renderRedirect();
      
    })
    // .catch(err => {
    //   console.log("FUCKMEEEE");
    //   console.log(err)
    // })
  }

  render(){
    return (
        <div>
          <Navbar/>
        <form action="/auth/login" method="post">
        <div className="customForm">
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                <input className="input" type="text" placeholder="e.g Alex Smith" name="username" value={this.state.username} onChange={this.handleChange}></input>
                </div>
            </div>

            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="password" placeholder="Your password..." name="password" value={this.state.password} onChange={this.handleChange}></input>
                </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <button className="button is-link" onClick={this.handleSubmit}>
                  Submit
                </button>
              </p>
              <p className="control">
                <button className="button is-light" onClick={this.sendHome}>
                  Cancel
                </button>
              </p>
            </div>
        </div>
      {this.renderRedirect()}
      </form>
      </div>
    )
  }
}


export default Login;
