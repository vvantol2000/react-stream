import React, {Component} from 'react';

class Post extends Component {
	render() {
		return (
			<div className="masonry-grid row">
				{/*// <!-- masonry grid item start -->*/}
				<div className="masonry-grid-item col-md-6 col-lg-4">
					{/*// <!-- blogpost start -->*/}
					<article className="blogpost hc-shadow-2 light-gray-bg bordered">
						<div id="carousel-blog-post" className="carousel slide" data-ride="carousel">
							{/*// <!-- Indicators -->*/}
							<ol className="carousel-indicators bottom margin-clear">
								<li data-target="#carousel-blog-post" data-slide-to="0" className="active"></li>
								<li data-target="#carousel-blog-post" data-slide-to="1"></li>
								<li data-target="#carousel-blog-post" data-slide-to="2"></li>
							</ol>

							{/*// <!-- Wrapper for slides -->*/}
							<div className="carousel-inner" role="listbox">
								<div className="carousel-item active">
									<div className="overlay-container">
										<img src="images/blog-1.jpg" alt=""/>
											<a className="overlay-link" href="blog-post.html"><i
												className="fa fa-link"></i></a>
									</div>
								</div>
								<div className="carousel-item">
									<div className="overlay-container">
										<img src="images/blog-3.jpg" alt=""/>
											<a className="overlay-link" href="blog-post.html"><i
												className="fa fa-link"></i></a>
									</div>
								</div>
								<div className="carousel-item">
									<div className="overlay-container">
										<img src="images/blog-4.jpg" alt=""/>
											<a className="overlay-link" href="blog-post.html"><i
												className="fa fa-link"></i></a>
									</div>
								</div>
							</div>
						</div>
						<header>
							<h2><a href="blog-post.html">Blogpost with slider</a></h2>
							<div className="post-info">
                        <span className="post-date">
                          <i className="fa fa-calendar-o pr-1"></i>
                          <span className="day">12</span>
                          <span className="month">May 2017</span>
                        </span>
								<span className="submitted"><i className="fa fa-user pr-1 pl-1"></i> by <a
									href="#">Lorem</a></span>
								<span className="comments"><i className="fa fa-comments-o pl-1 pr-1"></i> <a href="#">22 comments</a></span>
							</div>
						</header>
						<div className="blogpost-content">
							<p>Mauris dolor sapien, malesuada at interdum ut, hendrerit eget lorem. Nunc interdum mi
								neque, et sollicitudin purus fermentum ut. Suspendisse faucibus nibh odio, a vehicula
								eros pharetra in. Maecenas ullamcorper commodo rutrum.</p>
						</div>
						<footer className="clearfix">
							<div className="tags pull-left"><i className="fa fa-tags pr-1"></i> <a href="#">tag
								1</a>, <a href="#">tag 2</a>, <a href="#">long tag 3</a></div>
							<div className="link pull-right"><i className="fa fa-link pr-1"></i><a href="#">Read
								More</a></div>
						</footer>
					</article>
				</div>
			</div>

				);
	}
}

export default Post;