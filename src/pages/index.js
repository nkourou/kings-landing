import React from 'react';

import Layout from '../components/landinglayout';
import Header from '../components/header';
import Midsection from '../components/midsection';
import LearningAsLoop from '../components/learningAsLoop';

const IndexPage = ({ pageTitle, children }) => {
    return (
        <Layout>
            <Header />
            <Midsection />
            <LearningAsLoop />
        </Layout>
    )
};

export default IndexPage;