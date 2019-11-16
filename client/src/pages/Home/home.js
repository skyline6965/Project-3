import React from "react";
import Navbar from "../../components/Nav";
import {Link} from "react-router-dom";
import "./style.css"


function Home() {
	return (
		<div>
			<Navbar />
			<section className="hero is-link is-fullheight-with-navbar has-background-black">
				<div className="hero-body skyline-banner">
					<div className="container">
						{/* <img src="https://images.squarespace-cdn.com/content/v1/50187db624acce5741aad553/1504285359881-EALV96CVEPU3HQ6LB2QD/ke17ZwdGBToddI8pDm48kKKBYw7RkZ4eykKqfKUvHod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ud9Ke1lvTF9Z4NYnQC_mTW5zDYQ53IbTNfUUbEMZUmRiJvwGh1qtNWvMhYKnvaKhbA/DSC01039.png"></img> */}
						<p className="title" >
							Skyline Studios
      				</p>
					</div>
				</div>
			</section>

			{/* STUDIO SECTION */}
			<section className="hero is-link is-fullheight" id="studio-section">
				<div >
					<div className="container">
						{/* <img src="https://images.squarespace-cdn.com/content/v1/50187db624acce5741aad553/1504285359881-EALV96CVEPU3HQ6LB2QD/ke17ZwdGBToddI8pDm48kKKBYw7RkZ4eykKqfKUvHod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ud9Ke1lvTF9Z4NYnQC_mTW5zDYQ53IbTNfUUbEMZUmRiJvwGh1qtNWvMhYKnvaKhbA/DSC01039.png"></img> */}
						<p className="title" id="studio-title">
							Studio Section
      				</p>
					  <div className="columns">
						  <div className="column is-6">
						  <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/159244675&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
						  </div>
						
						  <div className="column is-6">
						  <a data-flickr-embed="true" data-context="true" href="https://www.flickr.com/photos/182459762@N05/49068214672/in/album-72157711787878022/" title="Skyline Studios"><img src="https://live.staticflickr.com/65535/49068214672_2ab8544730_b.jpg" width="1024" height="683" alt="Skyline Studios"></img></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
						  </div>
					  </div>
					
					  <div class="tech-slideshow">
						<div class="mover-1"></div>
						<div class="mover-2"></div>
					</div>


						<Link to="/calendar"><button className="button is-link">Schedule Studio Time</button></Link>
					</div>
				</div>
			</section>

			{/* LESSONS SECTION */}
			<section className="hero is-link has-background-black" >
				<div className="hero-body" id="lessons-home">
					<div className="container">
						<section className="hero">
							<p className="title" >
								Lessons
							</p>

						</section>
					</div>
				</div>
			</section>


			<div className="columns">

				<div className="column is-7" id="recording-card">
					<p className="title">Recording</p>
					{/* <img src="images/akgmic2.jpg" className="is-3by2" alt="something" id="recording-img"></img> */}
				</div>
				<div className="column is-5">
					<p>
					Selling Points for mixing:
					Professional equipment
					Berklee College of Music
					1-on-1 Lessons (Lessons tailored to your needs)
					Affordable
					Try a free 30min intro lesson!
					Music to play here?
					

					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
				</div>
			</div>

			<div className="columns">

				<div className="column is-7">
					<p>
					<p>Selling Points:</p>
					<p>Beginner Piano...</p>
					Professional equipment
					Berklee College of Music
					1-on-1 Lessons (Lessons tailored to your needs)
					Affordable
					Try a free 30min intro lesson!
					Music to play here?

					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
				</div>

				<div className="column is-5" id="piano-card">
					<p className="title">Piano</p>
					{/* <img src="images/akgmic2.jpg" className="is-3by2" alt="something" id="recording-img"></img> */}
				</div>



			</div>

			<Link to="/calendar"><button className="button is-link">Schedule Lesson Time</button></Link>

			<br></br>

			<footer class="footer">
				<div class="content has-text-centered">
					<p>
						<strong>Skyline Studios</strong>  <a href="https://jgthms.com">Joe Williams</a>. Other Footer Info 
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
				</div>
			</footer>

		</div>
	)
}

export default Home;