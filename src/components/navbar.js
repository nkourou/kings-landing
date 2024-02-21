import React, { useState } from 'react';
import logoImg from "../images/logo_light.png";

import { Link } from 'gatsby';

const Navbar = () => {
	const [isShowMenu, setState] = useState(false);
	// const [value, setValue] = React.useState({})
	// const [serverResponse, setServerResponse] = React.useState(``)
	// // Listen to form changes and save them.
	// function handleChange(e) {
	//   value[e.target.id] = e.target.value
	//   setServerResponse(``)
	//   setValue({ ...value })
	// }
	// // When the form is submitted, send the form values
	// // to our function for processing.
	// async function onSubmit(e) {
	// 	setServerResponse('loading')
	//   e.preventDefault()
	//   const response = await window
	// 	.fetch(`/api/signup-form`, {
	// 	  method: `POST`,
	// 	  headers: {
	// 		"content-type": "application/json",
	// 	  },
	// 	  body: JSON.stringify(value),
	// 	})
	// 	.then(res => res.json())
	//   setServerResponse(response)
	// }
  
	return (
	<header>
		<nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link className="navbar-item" to="/" data-config-id="brand">
						<img src={logoImg} alt="Wuru Zeka logo" />
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
						{/* <Link className="navbar-item mx-3"
							to="/technology"
							activeClassName="active-link">Technology</Link>
						<div className="vr"></div> */}
						<Link className="navbar-item mx-3"
							to="/#pricing"
							activeClassName="active-link">Pricing</Link>
						<div className="vr"></div>
						<Link className="navbar-item mx-3"
							to="/#how-it-works"
							activeClassName="active-link">How it works</Link>
						{/* <Link className="navbar-item mx-3"
							to="https://app.wuruzeka.com/auth/sign-up"
							activeClassName="active-link">Sign-up</Link> */}
						<div className="vr"></div>
						<a className="navbar-item mx-3"
							href="https://app.wuruzeka.com/auth/login">Login</a>
						{/* <form method="post" onSubmit={onSubmit} action="/api/signup-form">
							<div className="navbar-item is-hidden-mobile">
							<button className="button is-outlined is-primary is-rounded has-text-weight-semibold"
									id="primary-header-action">
								Log in
							</button>
								<div className="field has-addons">
									<div className="control">
										<input type="email" name="email" id="email" className="input is-rounded" placeholder="Enter e-mail to get invited" value={value[`email`] || ``}
										onChange={handleChange} disabled={serverResponse === 'OK' || serverResponse === 'loading'}/>
									</div>
									<div className="control">
										<button className={`button is-primary is-rounded is-light has-text-weight-semibold ${serverResponse === "loading" ? "is-loading": ""}`} 
										type="submit"
											id="secondary-header-action"
											disabled={serverResponse === 'OK'}>
											{serverResponse === 'OK' ? "Thank you": "Sign up"}
										</button>
									</div>
								</div>
							</div>
						</form> */}
						{/* <div className="navbar-item">
							<button className="button is-primary is-rounded is-light has-text-weight-semibold" id="secondary-header-action"> 	Sign up
							</button>
						</div> */}
					</div>
				</div>
		</nav>
	</header>
	)
};

export default Navbar;

// loginWithRedirect(): void {
//     this.auth.loginWithRedirect({
//       screen_hint: 'signup',
//       display: 'popup'
//     });
//   }