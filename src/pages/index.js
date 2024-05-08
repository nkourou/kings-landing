import React from 'react';

import Layout from '../components/landinglayout';
import Header from '../components/header';

// export const Head = () => (
//     <>
//       <title>Hello World</title>
//       <meta name="description" content="Hello World" />
//     </>
// )

const IndexPage = ({ pageTitle, children }) => {
    return (
        <Layout>
            <Header />
        </Layout>
    )
};

export default IndexPage;