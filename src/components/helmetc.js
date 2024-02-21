import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import SchemaOrg from "./SchemaOrg";

const HelmetC = ({ title, excerpt, image, slug, date, isBlogPost, authorName }) => {
  const data = useStaticQuery(graphql`
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
            organization {
              name
              url
              logo
            }
          }
        }
      }`)
    const siteTitle = title || data.site.siteMetadata.title;
    const description = excerpt || data.site.siteMetadata.description;
    const siteImage = image ? `${data.site.siteMetadata.siteUrl}${image}` : data.site.siteMetadata.siteImg;
    const url = slug ? `${data.site.siteMetadata.siteUrl}/blog/${slug}/`
      : data.site.siteMetadata.siteUrl;
    const datePublished = isBlogPost ? date : false;
    const author = authorName || data.site.siteMetadata.author;
    return (
      <React.Fragment key={slug}>
        <Helmet key="helmet">
          <html lang="en" />
          <meta charset="UTF-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, , minimum-scale=1.0"
          />
          <meta
            name="description"
            content={description}
          />
          <meta name="keywords" content={data.site.siteMetadata.keywords} />
          <title>{siteTitle}</title>
          <meta name="image" content={siteImage} />

          <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
          {/* Google / Search Engine Meta Tags */}
          <meta itemprop="name" content={author} />
          <meta itemprop="image" content={siteImage} />

          {/* OpenGraph tags */}
          <meta property="og:type" content="product" />
          <meta property="og:title" content={siteTitle} />
          <meta
            property="og:description"
            content={description}
          />
          <meta property="og:image" content={siteImage} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={url} />
          <meta property="fb:app_id" content={data.site.siteMetadata.fbAppID} />

          <meta
            name="twitter:creator"
            content={author}
          />
          <meta name="twitter:title" content={siteTitle} />
          <meta
            name="twitter:description"
            content={description}
          />
          <meta
            name="twitter:image:src"
            content={siteImage}
          />
          <meta name="twitter:card" content="summary_large_image" />

          {/* <script
            type="text/javascript"
            async=""
            src="https://www.google-analytics.com/analytics.js"
          ></script> */}
          <script src="//code.tidio.co/yajtuyakmo1zg0rxumwk38ttbfsdzzbu.js" async></script>
          {/* <script
            type="text/javascript"
            async=""
            src="//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
          >
            mixpanel.init(data.site.siteMetadata.mixpanel);
          </script> */}

          {/* <script
        async=""
        src="https://www.googletagmanager.com/gtag/js?id=G-4XHC55FZNZ"
      ></script> */}

          {/* Facebook Pixel Code https://www.facebook.com/events_manager2/list/pixel/349992816762548/settings?act=94102612 */}
          {/* <script
            async=""
            src="https://connect.facebook.net/en_US/fbevents.js"
          ></script> */}

          {/*  Hotjar Tracking Code */}
          {/* <script
            async=""
          // src="https://static.hotjar.com/c/hotjar-2326395.js?sv=6"
          ></script>
          <script
            async=""
            // src="https://script.hotjar.com/modules.734bd4b678d25642f35b.js"
            charset="utf-8"
          ></script> */}
        </Helmet>
        <SchemaOrg
            key="schema"
          isBlogPost={isBlogPost}
          url={url}
          title={siteTitle}
          image={image}
          description={description}
          datePublished={datePublished}
          canonicalUrl={data.site.siteMetadata.siteUrl}
          authorName={author}
          organization={data.site.siteMetadata.organization}
          defaultTitle={data.site.siteMetadata.title}
        />
      </React.Fragment>
    )
        };

export default HelmetC;
