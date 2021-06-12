import React from 'react';

import '../components/style.scss';
import PageLayout from '../components/pagelayout';
import PrivacySection from '../components/privacysection';

const Privacy = () => (
    <PageLayout pageTitle="Privacy" pageLink="privacy">
        <PrivacySection />
    </PageLayout>
);

export default Privacy;
