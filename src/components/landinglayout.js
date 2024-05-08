import React from 'react';

import './style.scss';
import Faq from './faq';
import HelmetC from './helmetc';
import Footer from './footer';
import Navbar from './navbar';
import Cookie from './cookie';
import Pricing from './pricing';
import Testimonials from './testimonials';
import HowItWorks from './howItWorks';
import ProblemSection from './problemsection';
import ExercisesDetails from './exercicesDetails';

const Layout = ({ children }) => (
	<div>
		<HelmetC />
		<Navbar/>
		{ children }
		<ProblemSection />
		<HowItWorks />
		<ExercisesDetails />
		<Testimonials  />
		<Pricing />
		<Faq />
		<Cookie />
		<Footer />
	</div>
);

export default Layout;
