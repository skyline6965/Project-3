import React from "react";
import 'bulma/css/bulma.css'

function Navbar() {
    return(
    <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <strong><p>Skyline Studios</p></strong>
                    {/* <img src="" width="112" height="28"></img> */}
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Studio
                    </a>
                    <a className="navbar-item">
                        Lessons
                    </a>

                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Contact
                    </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
          </a>
                            <a className="navbar-item">
                                Jobs
          </a>
                            <a className="navbar-item">
                                Contact
          </a>
                            <hr className="navbar-divider"></hr>
                                <a className="navbar-item">
                                    Report an issue
          </a>
        </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-link">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
          </a>
                            </div>
                        </div>
                    </div>
                </div>
           
        </nav>


        <section class="hero is-link is-fullheight-with-navbar has-background-black">
  <div className="hero-body">
    <div className="container">
        {/* <img src="https://images.squarespace-cdn.com/content/v1/50187db624acce5741aad553/1504285359881-EALV96CVEPU3HQ6LB2QD/ke17ZwdGBToddI8pDm48kKKBYw7RkZ4eykKqfKUvHod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ud9Ke1lvTF9Z4NYnQC_mTW5zDYQ53IbTNfUUbEMZUmRiJvwGh1qtNWvMhYKnvaKhbA/DSC01039.png"></img> */}
      <p className="title" >
        Skyline Studios
      </p>
    </div>
  </div>
</section>
    </div>)
}

export default Navbar;