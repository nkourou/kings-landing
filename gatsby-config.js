// https://github.com/alxshelepenok/gatsby-starter-lumen/blob/master/gatsby-config.js

const siteUrl = process.env.ROOT_URL || 'https://wuruzeka.com'
 
module.exports = {
  siteMetadata: {
    title: 'Wuru Zeka',
    siteTitleShort: 'wuru_zeka', // short_name for manifest
    pathPrefix: '/',
    siteImg: `${siteUrl}/images/wz_header.jpg`,
    siteLogo: 'https://raw.githubusercontent.com/nkourou/kings-landing/main/src/images/logo_light.png',
    author: 'Wuru Zeka',
    description: 'Your ultimate online destination for IELTS General Test prep! Expert-curated courses, tips, articles, full mock tests, and evaluations from certified IELTS tutors. #LearnWithWuruzeka',
    minibio: 'Discover Wuru Zeka - the go-to complete online hub for IELTS General Test exam preparation with expert-curated courses, tips, and articles on improving English, full mock tests, Speaking and Writing evaluations from certified IELTS Tutors. #LearnWithWuruzeka',
    keywords: `ielts speaking correction, ielts writing correction, mock tests ielts, ielts writing, ielts speaking, ielts writing task 1 sample answer, ielts writing task 2 sample answer, ielts practice test, agree disagree essay ielts, ielts score chart, ielts speaking questions with answers, ielts writing task 2 topics`,
    twitter: 'https://twitter.com/wuruzeka',
    instagram: "https://www.instagram.com/wuruzeka_learning/",
    fbAppID: process.env.WZ_FB_ID,
    mixpanel: process.env.WZ_MXPNL_ID,
    medium: 'https://medium.com/@wuruzeka',
    siteUrl: siteUrl,
    appUrl: process.env.APP_URL || "https://app.wuruzeka.com",
    organization: { 
      name: "Wuru Zeka Inc.", 
      logo: "https://raw.githubusercontent.com/nkourou/kings-landing/main/src/images/logo_light.png", 
      url: siteUrl 
    }
  },
  // flags: { 
    // PRESERVE_WEBPACK_CACHE: true,
    // PRESERVE_FILE_DOWNLOAD_CACHE: true,
    // PARALLEL_SOURCING: true,
    // LMDB_STORE: true
  //  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    // "gatsby-plugin-scroll-reveal-fixed",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.WZ_GA_ID, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "https://wz-preview.netlify.app/**"],
          // Defaults to https://www.googletagmanager.com
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        }
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/non_text_logo.svg",
      },
    },
		{
			resolve: `gatsby-plugin-hotjar`,
			options: {
				includeInDevelopment: true, // optional parameter to include script in development
				id: process.env.HOTJAR_ID,
				sv: process.env.HOTJAR_SNIPPET_VERSION,
			},
		},
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.WZ_SPACE_ID,
        accessToken: process.env.WZ_CONTENTFUL_ACCESS_TOKEN,
        host: process.env.WZ_CONTENTFUL_HOST
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl
      }
    },
  ],
};
