import React, {Component} from 'react';
import { Link } from "react-router-dom";

class OffcanvasSide extends Component {
	render() {
		return (
			<div className="offcanvas-container">
				<nav id="offcanvas" className="animated navmenu navmenu-default navmenu-fixed-right offcanvas offcanvas-right">
					<div className="logo">
						<Link to="/"><img id="logo" src="images/logo_light_blue.png" alt="The Project"/></Link>
					</div>

					<div className="site-slogan">
						Multipurpose HTML5 Template
					</div>
					<div className="separator"/>
					<ul className="social-links circle small clearfix margin-clear text-center animated-effect-1">
						<li className="twitter"><Link to="#"><i className="fa fa-twitter"></i></Link></li>
						<li className="skype"><Link to="#"><i className="fa fa-skype"></i></Link></li>
						<li className="linkedin"><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
						<li className="googleplus"><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
						<li className="youtube"><Link to="#"><i className="fa fa-youtube-play"></i></Link></li>
						<li className="flickr"><Link to="#"><i className="fa fa-flickr"></i></Link></li>
						<li className="facebook"><Link to="#"><i className="fa fa-facebook"></i></Link></li>
					</ul>
					<div className="separator mt-10"/>
					<nav>
						<ul className="nav flex-column">
							<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
							<li className="nav-item"><Link className="nav-link active" to="blog-large-image-right-sidebar.html">Blog</Link></li>
							<li className="nav-item"><Link className="nav-link" to="portfolio-grid-2-3-col.html">Portfolio</Link></li>
							<li className="nav-item"><Link className="nav-link" to="page-about.html">About</Link></li>
							<li className="nav-item"><Link className="nav-link" to="page-contact.html">Contact</Link></li>
						</ul>
					</nav>
				</nav>
				<button type="button" className="offcanvas-toggle-right navbar-toggle" data-toggle="offcanvas" data-target="#offcanvas"/>
			</div>
	);
	}
}

export default OffcanvasSide;