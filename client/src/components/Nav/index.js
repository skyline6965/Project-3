import React from "react";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';




function Navbar() {

	return(
    	<div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <strong><p>Skyline Studios</p></strong>
                    {/* <img src="" width="112" height="28"></img> */}
                </Link>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/home">
                        Home
                    </Link>                
                    <a href="#studio-title" className="navbar-item">
                        Studio
                    </a>
                    <a href="#to-lessons" className="navbar-item">
                        Lessons
                    </a>                   
                    <Link className="navbar-item" to="/about">
                        About
                    </Link>

                <div className="navbar-item has-dropdown is-hoverable">
                    <Link className="navbar-link" to="/calendar">
                        Contact
                    </Link>

                        <div className="navbar-dropdown">
                        <Link className="navbar-item" to="/submitrequest">
                                    Schedule Appointments
											</Link>
                            <hr className="navbar-divider"></hr>
                            <Link className="navbar-item" to="/calendar">
                                See Availability
          									</Link>
                            <Link className="navbar-item" to="/lessons">
                                Lessons
          									</Link>
                            <Link className="navbar-item" to="/jobs">
                                Jobs
          									</Link>
        									</div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link className="button is-link" to="/register">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link className="button is-light" to="/login">
                                    Log in
         												</Link>
                            </div>
                        </div>
                    </div>
                </div>         
        </nav>
    </div>
  )
}

export default Navbar;