import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import SchemaOrg from "./SchemaOrg";

const HelmetC = ({ postData, frontmatter = {}, postImage, isBlogPost }) => (
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
            siteImg
            twitter
            fbAppID
            mixpanel
          }
        }
      }
    `}
    render={(data) => {
      const title = postMeta.title || data.site.siteMetadata.title;
      const description = postMeta.description || data.site.siteMetadata.description;
      const image = postImage ? `${seo.siteUrl}${postImage}` : data.site.siteMetadata.siteImg;
      const url = postMeta.slug
        ? `${data.site.siteMetadata.siteUrl}/blog/${postMeta.slug}/`
        : data.site.siteMetadata.siteUrl;
      const datePublished = isBlogPost ? postMeta.datePublished : false;

      return (
        <React.Fragment>
          <Helmet>
            <html lang="en" />
            <meta charset="UTF-8" />

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, , minimum-scale=1.0"
            />
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
            <meta name="keywords" content={data.site.siteMetadata.keywords} />
            <title>{data.site.siteMetadata.title}</title>
            <meta name="image" content={data.site.siteMetadata.siteImg} />

            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
            {/* Google / Search Engine Meta Tags */}
            <meta itemprop="name" content={data.site.siteMetadata.author} />
            <meta itemprop="image" content={data.site.siteMetadata.siteLogo} />

            {/* OpenGraph tags */}
            <meta property="og:type" content="product" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta
              property="og:description"
              content={data.site.siteMetadata.description}
            />
            <meta property="og:image" content={data.site.siteMetadata.siteLogo} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
            <meta property="fb:app_id" content={data.site.siteMetadata.fbAppID} />

            <meta
              name="twitter:creator"
              content={data.site.siteMetadata.author}
            />
            <meta name="twitter:title" content={data.site.siteMetadata.title} />
            <meta
              name="twitter:description"
              content={data.site.siteMetadata.description}
            />
            <meta
              name="twitter:image:src"
              content={data.site.siteMetadata.siteLogo}
            />
            <meta name="twitter:card" content="summary_large_image" />

            <script
              type="text/javascript"
              async=""
              src="https://www.google-analytics.com/analytics.js"
            ></script>
            <script
              type="text/javascript"
              async=""
              src="//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
            >
              mixpanel.init(data.site.siteMetadata.mixpanel);
            </script>

            {/* <script
          async=""
          src="https://www.googletagmanager.com/gtag/js?id=G-4XHC55FZNZ"
        ></script> */}

            {/* Facebook Pixel Code https://www.facebook.com/events_manager2/list/pixel/349992816762548/settings?act=94102612 */}
            <script
              async=""
              src="https://connect.facebook.net/en_US/fbevents.js"
            ></script>

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
          <SchemaOrg
            isBlogPost={isBlogPost}
            url={url}
            title={title}
            image={image}
            description={description}
            datePublished={datePublished}
            siteUrl={data.site.siteMetadata.siteUrl}
            author={data.site.siteMetadata.author}
            organization={data.site.siteMetadata.organization}
            defaultTitle={data.site.siteMetadata.title}
          />
        </React.Fragment>
      )
    }}
  />
);

export default HelmetC;
