

import { useAuth } from "react-oidc-context";
import React from 'react';
import Logo from "../assets/images/main-logo.png"

function Header() {
	const auth = useAuth();

	const signOutRedirect = () => {
		auth.removeUser();
		const clientId = "333ervd99rdgcc0p98ov4vgj6i";
		const logoutUri = "http://localhost:5173/";
		const cognitoDomain = "https://us-east-1rdwe7qjjg.auth.us-east-1.amazoncognito.com";
		window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
	};



	if (auth.isLoading) {
		return <div>Loading...</div>;
	}

	if (auth.error) {
		return <div>Encountering error... {auth.error.message}</div>;
	}



	return (
		<>
			<div id="header-wrap">
				<div class="top-content">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-6">
								<div class="social-links">
									<ul>
										<li>
											<a href="#"><i class="icon icon-facebook"></i></a>
										</li>
										<li>
											<a href="#"><i class="icon icon-twitter"></i></a>
										</li>
										<li>
											<a href="#"><i class="icon icon-youtube-play"></i></a>
										</li>
										<li>
											<a href="#"><i class="icon icon-behance-square"></i></a>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-md-6">
								<div class="right-element">
									

									{auth.isAuthenticated ?
										<button
											className="mr-8"
											onClick={() => signOutRedirect()}
										>
											logout
										</button>
										:
										<button
											className="mr-8"
											onClick={() => auth.signinRedirect()}
										>
											Login
										</button>
									}



									<a href="#" class="cart for-buy"><i class="icon icon-clipboard"></i><span>Cart:(0
										$)</span></a>

									<div class="action-menu">

										<div class="search-bar">
											<a href="#" class="search-button search-toggle" data-selector="#header-wrap">
												<i class="icon icon-search"></i>
											</a>
											<form role="search" method="get" class="search-box">
												<input class="search-field text search-input" placeholder="Search"
													type="search" />
											</form>
										</div>
									</div>

								</div>
							</div>

						</div>
					</div>
				</div>

				<header id="header">
					<div class="container-fluid">
						<div class="row">

							<div class="col-md-2">
								<div class="main-logo">
									<a href="index.html"><img src={Logo} alt="logo" /></a>
								</div>

							</div>

							<div class="col-md-10">

								<nav id="navbar">
									<div class="main-menu stellarnav">
										<ul class="menu-list">
											<li class="menu-item active"><a href="#home">Home</a></li>
											<li class="menu-item has-sub">
												<a href="#pages" class="nav-link">Pages</a>

												<ul>
													<li class="active"><a href="index.html">Home</a></li>
													<li><a href="about.html">About <span class="badge bg-dark">PRO</span></a></li>
													<li><a href="styles.html">Styles <span class="badge bg-dark">PRO</span></a></li>
													<li><a href="blog.html">Blog <span class="badge bg-dark">PRO</span></a></li>
													<li><a href="single-post.html">Post Single <span class="badge bg-dark">PRO</span></a></li>
													<li><a href="shop.html">Our Store <span class="badge bg-dark">PRO</span></a></li>
													<li><a href="single-product.html">Product Single <span class="badge bg-dark">PRO</span></a></li>
													<li><a href="contact.html">Contact <span class="badge bg-dark">PRO</span></a></li>
													<li><a href="thank-you.html">Thank You <span class="badge bg-dark">PRO</span></a></li>
												</ul>

											</li>
											<li class="menu-item"><a href="#featured-books" class="nav-link">Featured</a></li>
											<li class="menu-item"><a href="#popular-books" class="nav-link">Popular</a></li>
											<li class="menu-item"><a href="#special-offer" class="nav-link">Offer</a></li>
											<li class="menu-item"><a href="#latest-blog" class="nav-link">Articles</a></li>
											<li class="menu-item"><a href="#download-app" class="nav-link">Download App</a></li>
											<li class="menu-item"><a href="https://templatesjungle.gumroad.com/l/booksaw-free-html-bookstore-template" class="nav-link btn btn-outline-dark rounded-pill m-0" target="_blank">Get PRO</a></li>
										</ul>

										<div class="hamburger">
											<span class="bar"></span>
											<span class="bar"></span>
											<span class="bar"></span>
										</div>

									</div>
								</nav>

							</div>

						</div>
					</div>
				</header>

			</div>
		</>

	);
}

export default Header;