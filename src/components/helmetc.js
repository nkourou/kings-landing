import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

const HelmetC = () => (
  <StaticQuery
    query={graphql`
      query helmetQuery {
        site {
          siteMetadata {
            title
            siteLogo
            description
            minibio
            keywords
            siteUrl
            twitter
            fbAppID
          }
        }
      }
    `}
    render={(data) => (
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <title>{data.site.siteMetadata.title}</title>

        {/* Google / Search Engine Meta Tags */}
        <meta itemprop="name" content={data.site.siteMetadata.author} />
        <meta itemprop="image" content={data.site.siteMetadata.siteLogo} />

        {/* OpenGraph tags */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content="IELTSgeek" />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:image" content={data.site.siteMetadata.siteLogo} />
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
        <meta property="fb:app_id" content={data.site.siteMetadata.fbAppID} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={data.site.siteMetadata.twitter} />
        <meta name="twitter:title" content="IELTSgeek" />
        <meta
          name="twitter:description"
          content={data.site.siteMetadata.description}
        />
        <meta
          name="twitter:image:src"
          content={data.site.siteMetadata.siteLogo}
        />

        <script
          type="text/javascript"
          async=""
          src="https://www.google-analytics.com/analytics.js"
        ></script>
        <script
          type="text/javascript"
          async=""
          src="//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
        ></script>
        <script
          async=""
          src="https://connect.facebook.net/en_US/fbevents.js"
        ></script>

        <script
          async=""
          // src="https://www.googletagmanager.com/gtag/js?id=UA-125842727-5"
        ></script>

        {/* Facebook Pixel Code */}

        {/*  Hotjar Tracking Code */}
        <script
          async=""
          // src="https://static.hotjar.com/c/hotjar-2326395.js?sv=6"
        ></script>
        <script
          async=""
          // src="https://script.hotjar.com/modules.734bd4b678d25642f35b.js"
          charset="utf-8"
        ></script>
      </Helmet>
    )}
  />
);

export default HelmetC;
