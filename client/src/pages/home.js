import React from "react";
import Navbar from "../components/Nav";
import Carousel from "../components/Carousel/Carousel"


function Home() {
	return (
		<div>
			<Navbar />
			<section class="hero is-link is-fullheight-with-navbar has-background-black">
				<div className="hero-body skyline-banner">
					<div className="container">
						{/* <img src="https://images.squarespace-cdn.com/content/v1/50187db624acce5741aad553/1504285359881-EALV96CVEPU3HQ6LB2QD/ke17ZwdGBToddI8pDm48kKKBYw7RkZ4eykKqfKUvHod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ud9Ke1lvTF9Z4NYnQC_mTW5zDYQ53IbTNfUUbEMZUmRiJvwGh1qtNWvMhYKnvaKhbA/DSC01039.png"></img> */}
						<p className="title" >
							Skyline Studios
      				</p>
					</div>

				</div>
			</section>

			<section className="carousel" style={{ height: 800, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: "#d3d3d3" }}>
				<Carousel />
			</section>
		</div>
	)
}

export default Home;