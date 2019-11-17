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
							Skyline Studios
      				</p>
					 <p id="studio-subtitle"> small studio  <strong>BIG SOUND</strong></p>
					  <div className="columns">
						  <div className="column is-7" id="studio-pic1">
							
						  </div>
						
						  <div className="column is-5" id="studio-text">
				
						  </div>
					  </div>

					  <div className="columns">						  					
						  <div className="column is-6">
						  <p id="studio-text2"> <strong>Pro equipment. 
							  <br></br>Experienced engineers.</strong></p>
						  <p id="studio-p1">
						  With a comfortable atmosphere and top-quality gear, we encourage creativity and expression while working collaboratively with you to achieve your best performance.
						  </p>
		
						  </div>

						  <div className="column is-6">
						  <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/159244675&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
						  </div>
					  </div>
					
					  <div className="columns">			
					  	<div className="column is-6" id="studio-pic2">
						{/* <img src="/images/Piano_2.jpg"></img> */}
						  </div>			  					
						  <div className="column is-6">
						  <p id="studio-text3"> <strong>Create Awesome.</strong></p>				  
					
						 <p id="studio-p2">Skyline Studios hosts a main control room for mixing and mastering in addition to an adjacent room for recording solo artists or small ensembles. </p>
						
						 <br></br>
						 <p id="studio-p3">Check out more studio photos <a href="/about">here</a> or contact us to take a free tour and see how we can help you with your next project</p>
						
						  </div>

				
					  </div>
					  <div className="tech-slideshow">
						<div className="mover-1"></div>
						<div className="mover-2"></div>
					</div>

					<Link className="button is-link" to="/submitrequest" id="studio-time">
								<strong>Schedule Studio Time</strong>
              		</Link>
			

					{/* <div>
					  <button className="button is-link" id="studio-button">Schedule Studio Time</button>
					  </div> */}
					</div>
				</div>
			</section>

			{/* LESSONS SECTION */}
			<section className="hero is-link has-background-black" >
				<div className="hero-body" id="lessons-home">
					<div className="container">
						<section className="hero">
							<p className="title" id="to-lessons">
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
					<p className="recording-subtitle">Recording. Mixing. Mastering.</p>
					<p className="recording-p1">
					<strong>Learn how to do it all yourself from the ground up</strong>	
					<p>Tailored classes for you based on your individual goals and interests. Start from scratch or pick a topic and we'll guide you through learning professional techniques, softwares, and other tools to get your music ready to share on your favorite platforms like iTunes, YouTube, and Spotify. </p>
						</p>
				</div>
			</div>

			<div className="columns">

				<div className="column is-7">
					<p className="recording-subtitle">Private Lessons</p>
				
					<p className="recording-p1"><strong>Beginner and Intermediate Piano Lessons</strong></p>
					<p className="recording-p1">All ages welcome. One-on-One instruction from a Berklee College of Music grad. After first lesson, books and materials are chosen for each student according to their skill level and interests.</p>
					<br></br><p className="recording-p1">We prepare you to learn fundamentals while also trying to help you learn your favorite songs.
					In addition to 30min lessons, we provide instruction and assignments for the following week.
					</p><p className="recording-p1">Schedule your first 30min lesson for free!
					</p>

						
				</div>

				<div className="column is-5" id="piano-card">
					<p className="title">Piano</p>
					{/* <img src="images/akgmic2.jpg" className="is-3by2" alt="something" id="recording-img"></img> */}
				</div>



			</div>

							<Link className="button is-link" to="/submitrequest">
								<strong>Schedule A Lesson</strong>
              </Link>

			<br></br>

			<footer class="footer">
				<div class="content has-text-centered">
					<p>
						<strong>Skyline Studios  </strong>   Phone:
      <a href="http://opensource.org/licenses/mit-license.php"> 801-318-9057</a>| Email: 
     <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">joe@joewilliamsmusic.com</a>| 
	 <a href="#top"> Back to Top</a>
    </p>

	


				</div>
			</footer>

		</div>
	)
}

export default Home;