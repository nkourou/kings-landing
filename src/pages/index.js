import React from 'react';

import Layout from '../components/landinglayout';
import Header from '../components/header';
import Midsection from '../components/midsection';

const IndexPage = ({ pageTitle, children }) => {
    return (
        <Layout>
            <Header />
            <Midsection />
        </Layout>
    )
};

export default IndexPage;