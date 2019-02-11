import React from 'react';

const FooterBase = () => {
	//<!-- footer start (Add "dark" class to #footer in order to enable dark footer) -->
	// 		<!-- ================ -->
	return (
		<footer id="footer" className="clearfix">
			<div className="footer">
				<div className="container">
					<div className="footer-inner">
						<div className="row justify-content-lg-center">
							<div className="col-lg-6">
								<div className="footer-content text-center padding-ver-clear">
									<div className="logo-footer"><img id="logo-footer" className="mx-auto" src="images/logo_brown.png" alt=""/></div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo vel dolorum soluta consectetur doloribus sit. Delectus non tenetur odit dicta vitae debitis suscipit doloribus. Lorem ipsum dolor sit amet, illo vel dolorum soluta consectetur.</p>
									<ul className="list-inline mb-20">
										<li className="list-inline-item"><i className="text-default fa fa-map-marker pr-1"></i>Street Address No, City</li>
										<li className="list-inline-item"><a href="#" className="link-dark"><i className="text-default fa fa-phone pl-10 pr-1"></i>+00 1234567890</a></li>
										<li className="list-inline-item"><a href="#" className="link-dark"><i className="text-default fa fa-envelope-o pl-10 pr-1"></i>example@your_domain.com</a></li>
									</ul>
									<ul className="social-links circle animated-effect-1 margin-clear">
										<li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
										<li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
										<li className="googleplus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
										<li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
										<li className="xing"><a href="#"><i className="fa fa-xing"></i></a></li>
									</ul>
									<div className="separator"></div>
									<p className="text-center margin-clear">Copyright © 2018. All Rights Reserved</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*// <!-- .footer end -->*/}
		</footer>
	);
};

export default FooterBase;
