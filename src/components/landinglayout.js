import React from 'react';

import './style.scss';
import HelmetC from './helmetc';
import Footer from './footer';
import Navbar from './navbar';
import Cookie from './cookie';
import Pricing from './pricing';
import HowItWorks from './howItWorks';

const Layout = ({ children }) => (
	<div>
		<HelmetC />
		<Navbar />
		{ children }
		<Pricing />
		<HowItWorks />
		<Cookie />
		<Footer />
	</div>
);

export default Layout;
