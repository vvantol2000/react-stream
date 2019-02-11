import React, {Component} from 'react';

class Head extends Component {
	render() {
		return (
			<div className="header-top dark">
				<div className="container">
					<div className="row">
						<div className="col-3 col-sm-6 col-lg-9">

							<div className="header-top-first clearfix">
								<ul className="social-links circle small clearfix hidden-sm-down">
									<li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li className="skype"><a href="#"><i className="fa fa-skype"></i></a></li>
									<li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li className="googleplus"><a href="#"><i className="fa fa-google-plus"></i></a>
									</li>
									<li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
									<li className="flickr"><a href="#"><i className="fa fa-flickr"></i></a></li>
									<li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li className="pinterest"><a href="#"><i className="fa fa-pinterest"></i></a></li>
								</ul>
								<div className="social-links hidden-md-up circle small">
									<div className="btn-group dropdown">
										<button id="header-top-drop-1" type="button"
										        className="btn dropdown-toggle dropdown-toggle--no-caret"
										        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
											className="fa fa-share-alt"></i></button>
										<ul className="dropdown-menu dropdown-animation"
										    aria-labelledby="header-top-drop-1">
											<li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a>
											</li>
											<li className="skype"><a href="#"><i className="fa fa-skype"></i></a></li>
											<li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a>
											</li>
											<li className="googleplus"><a href="#"><i className="fa fa-google-plus"></i></a>
											</li>
											<li className="youtube"><a href="#"><i
												className="fa fa-youtube-play"></i></a></li>
											<li className="flickr"><a href="#"><i className="fa fa-flickr"></i></a></li>
											<li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a>
											</li>
											<li className="pinterest"><a href="#"><i
												className="fa fa-pinterest"></i></a></li>
										</ul>
									</div>
								</div>
								<ul className="list-inline hidden-md-down">
									<li className="list-inline-item"><i className="fa fa-map-marker pr-1 pl-2"></i>Address,
										City, Postal Code
									</li>
									<li className="list-inline-item"><i className="fa fa-phone pr-1 pl-2"/>+00 123
										123 123
									</li>
									<li className="list-inline-item">
										<i className="fa fa-envelope-o pr-1 pl-2"/> example@your_domain.com
									</li>
								</ul>
							</div>
						</div>
						<div className="col-9 col-sm-6 col-lg-3">


							<div id="header-top-second" className="clearfix">


								<div className="header-top-dropdown text-right">
									<div className="btn-group">
										<a href="page-signup.html" className="btn btn-default btn-sm">
											<i className="fa fa-user pr-2"/> Sign Up</a>
									</div>
									<div className="btn-group">
										<button id="header-top-drop-2" type="button"
										        className="btn dropdown-toggle btn-default btn-sm dropdown-toggle--no-caret"
										        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<i className="fa fa-lock pr-2"/> Login
										</button>
										<ul className="dropdown-menu dropdown-menu-right dropdown-animation"
										    aria-labelledby="header-top-drop-2">
											<li>
												<form className="login-form margin-clear">
													<div className="form-group has-feedback">
														<label className="control-label">Username</label>
														<input type="text" className="form-control" placeholder=""/>
															<i className="fa fa-user form-control-feedback"/>
													</div>
													<div className="form-group has-feedback">
														<label className="control-label">Password</label>
														<input type="password" className="form-control" placeholder=""/>
															<i className="fa fa-lock form-control-feedback"/>
													</div>
													<button type="submit" className="btn btn-gray btn-sm">Log In
													</button>
													<span className="pl-1 pr-1">or</span>
													<button type="submit" className="btn btn-default btn-sm">Sing Up
													</button>
													<ul>
														<li><a href="#">Forgot your password?</a></li>
													</ul>
													<span className="text-center">Login with</span>
													<ul className="social-links circle small colored clearfix">
														<li className="facebook"><a href="#"><i
															className="fa fa-facebook"/></a></li>
														<li className="twitter"><a href="#"><i
															className="fa fa-twitter"/></a></li>
														<li className="googleplus"><a href="#"><i
															className="fa fa-google-plus"/></a></li>
													</ul>
												</form>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Head;