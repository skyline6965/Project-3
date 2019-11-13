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
                    <Link className="navbar-item" to="/studio">
                        Studio
                    </Link>
                    <Link className="navbar-item" to="/lessons">
                        Lessons
                    </Link>

                <div className="navbar-item has-dropdown is-hoverable">
                    <Link className="navbar-link" to="/calendar">
                        Contact
                    </Link>

                        <div className="navbar-dropdown">
                            <Link className="navbar-item" to="/about">
                                About
          									</Link>
                            <Link className="navbar-item" to="/jobs">
                                Jobs
          									</Link>
                            <Link className="navbar-item" to="/calendar">
                                Contact
          									</Link>
                            <hr className="navbar-divider"></hr>
                                <a className="navbar-item" href="/">
                                    Report an issue
																	</a>
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


        <section className="hero is-link is-fullheight-with-navbar has-background-black">
  <div className="hero-body">
    <div className="container">
        {/* <img src="https://images.squarespace-cdn.com/content/v1/50187db624acce5741aad553/1504285359881-EALV96CVEPU3HQ6LB2QD/ke17ZwdGBToddI8pDm48kKKBYw7RkZ4eykKqfKUvHod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ud9Ke1lvTF9Z4NYnQC_mTW5zDYQ53IbTNfUUbEMZUmRiJvwGh1qtNWvMhYKnvaKhbA/DSC01039.png"></img> */}
      <p className="title" >
        Skyline Studios 
      </p>
    </div>
  </div>
</section>
    </div>
    )
}

export default Navbar;