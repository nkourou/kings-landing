import React, { useState } from 'react';

import logo from '../images/logo.svg';
import { Link } from 'gatsby';

const Navbar = () => {
	const [isShowMenu, setState] = useState(false);

	return (
	<header>
		<nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link className="navbar-item" to="/" data-config-id="brand">
						<img src={logo} alt="logo" />
					</Link>

					<button className={`navbar-burger button is-ghost ${isShowMenu ? 'is-active' : ''}`}
						onClick={() => setState(!isShowMenu)}
						data-toggle="side-menu" aria-expanded="false" aria-label="Toggle navigation">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</button>
				</div>

				<div id="navbarLinks" className={`navbar-menu is-size-4 ${isShowMenu ? 'is-active' : ''}`}>
					{/* <div className="navbar-start">
						<Link className="navbar-item mx-3"
							to="/technology"
							activeClassName="active-link">Technology</Link>
						<div className="vr"></div>
						<Link className="navbar-item mx-3"
							to="/#pricing"
							activeClassName="active-link">Pricing</Link>
						<div className="vr"></div>
						<Link className="navbar-item mx-3"
							to="/blog" activeClassName="active-link">Blog</Link>
						<div className="vr"></div>
						<a className="navbar-item mx-3"
							href="https://ieltsregistration.britishcouncil.org/test-chooser">Book IELTS</a>
					</div> */}

					<div className="navbar-end">
						<div className="navbar-item is-hidden-mobile">
							<button className="button is-outlined is-primary is-rounded has-text-weight-semibold"
									id="primary-header-action">
								Log in
							</button>
						</div>
						<div className="navbar-item">
							<button className="button is-primary is-rounded is-light has-text-weight-semibold" id="secondary-header-action"> 	Sign up
							</button>
						</div>
					</div>
				</div>
		</nav>
	</header>
	)
};

export default Navbar;
