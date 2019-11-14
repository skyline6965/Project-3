import React from "react";
import 'bulma/css/bulma.css';
import "./style.css";
import Navbar from "../../components/Nav";
import { Redirect } from "react-router-dom";
import axios from "axios";



class Login extends React.Component {
  state = {
    name: "",
    password: "",
    redirect: false,
    redirectTo: "/"
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
    this.renderRedirect();
  }

  handleSubmit = event => {
  event.preventDefault();
  const loginInfo = {
    name: this.state.name,
    password: this.state.password
  }
  console.log(loginInfo);
    
  axios.get("/api/users/login/" + loginInfo.name)
    .then(response => {
      console.log(response)
      if(loginInfo.password === response.data[0].password){
        alert("Login Successful.");
        this.setRedirect();
        this.renderRedirect();
      } else {
        alert("Incorrect Password");
        this.setState({
          password: ""
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    return (
        <div>
        <form action="/auth/login" method="post">
        <div className="customForm">
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                <input className="input" type="text" placeholder="e.g Alex Smith" name="name" value={this.state.name} onChange={this.handleChange}></input>
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