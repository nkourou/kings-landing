import React from 'react';

import './style.scss';
import HelmetC from './helmetc';
import Footer from './footer';
import Navbar from './navbar';
import Cookie from './cookie';
import Pricing from './pricing';
import Testimonials from './testimonials';
import HowItWorks from './howItWorks';
import Faq from './faq';

const Layout = ({ children }) => (
	<div>
		<HelmetC />
		<Navbar/>
		{ children }
		<Testimonials  />
		<Pricing />
		<HowItWorks />
		<Faq />
		<Cookie />
		<Footer />
	</div>
);

export default Layout;
