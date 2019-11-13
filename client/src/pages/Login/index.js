import React from "react";
import 'bulma/css/bulma.css';
import "./style.css"



function Login() {
    return (
        <div className="customForm">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="e.g Alex Smith"></input>
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"></input>
                </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
  <p className="control">
    <a className="button is-link">
      Submit
    </a>
  </p>
  <p className="control">
    <a className="button is-light">
      Cancel
    </a>
  </p>
</div>
        </div>

    )
}


export default Login;