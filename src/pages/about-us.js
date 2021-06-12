import React from 'react';
import PageLayout from '../components/pagelayout';

import '../components/style.scss';
import AboutSection from '../components/aboutsection';

const About = () => (
    <PageLayout pageTitle="About Us" pageLink="about-us">
        <AboutSection />
    </PageLayout>
);

export default About;
