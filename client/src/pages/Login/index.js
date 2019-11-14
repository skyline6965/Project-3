import React from "react";
import 'bulma/css/bulma.css';
import "./style.css";
import Navbar from "../../components/Nav";

function Login() {
    return (
        <div>
        <form action="/auth/login" method="post">
        <div className="customForm">
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" placeholder="e.g alexsmith@gmail.com"></input>
                </div>
            </div>

            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="password" placeholder="Enter password"></input>
                </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <input className="button is-link"
                type="submit"
                value="Login">
                </input>
              </p>
              <p className="control">
                <a className="button is-light">
                  Cancel
                </a>
              </p>
            </div>
        </div>
        </form>
      </div>
    )
}


export default Login;