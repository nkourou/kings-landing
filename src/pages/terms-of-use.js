import React from 'react';

import '../components/style.scss';
import PageLayout from '../components/pagelayout';
import TermsSection from '../components/termssection';

const Terms = () => (
    <PageLayout pageTitle="Terms & Conditions" pageLink="terms-of-use">
        <TermsSection />
    </PageLayout>
);

export default Terms;
