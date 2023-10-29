// https://github.com/alxshelepenok/gatsby-starter-lumen/blob/master/gatsby-config.js

const siteUrl = process.env.ROOT_URL || 'https://wuruzeka.com'
 
// const siteUrl = "localhost:8000"
module.exports = {
  siteMetadata: {
    title: 'Wuru Zeka',
    siteTitleShort: 'wuru_zeka', // short_name for manifest
    pathPrefix: '/',
    siteImg: 'https://github.com/nkourou/nkourou.github.io/raw/main/imgs/open-graph.jpg',
    siteLogo: 'https://wuruzeka.com/static/logo-69580c490bdff69a56b3422793238446.svg',
    author: 'Kwitanga Education Group',
    description: 'AI based IELTS Writing & Speaking correction service with free IETLS full mock test simulator and tests!',
    minibio: 'Platform to get your writing and speaking evaluated by IELTS Certified experts with decades of experience.',
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
      logo: "https://wuruzeka.com/static/logo-69580c490bdff69a56b3422793238446.svg", 
      url: siteUrl 
    }
  },
  flags: { 
    // PRESERVE_WEBPACK_CACHE: true,
    // PRESERVE_FILE_DOWNLOAD_CACHE: true,
    // PARALLEL_SOURCING: true,
    // LMDB_STORE: true
   },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-scroll-reveal-fixed",
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
          exclude: ["/preview/**", "/do-not-track/me/too/"],
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // {
    //   resolve: "gatsby-source-graphcms",
    //   options: {
    //     id: process.env.CONTENTFUL_ID,
    //     token: process.env.CONTENTFUL_TOKEN,
    //     url: process.env.CONTENTFUL_URL,
    //     // endpoint: process.env.WZ_GRAPH_CMS_API,
    //     // token: process.env.WZ_GRAPH_TOKEN
    //   }
    // },
    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //       query: `
    //       {
    //         allSitePage {
    //           edges {
    //             node {
    //               path
    //             }
    //           }
    //         }
    //         gcms {
    //           posts {
    //             slug
    //             updatedAt
    //           }
    //         }
    //         site {
    //           siteMetadata {
    //             siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     resolveSiteUrl: () => siteUrl,
    //     resolvePages: ({
    //       allSitePage: { edges: allPages },
    //       gcms: { posts: allGcmsPosts },
    //       site: { siteMetadata: metadata }
    //     }) => {
    //       const wpNodeMap = allGcmsPosts.reduce((acc, node) => {
    //         const { slug } = node
    //         acc[`/blog/${slug}`] = node

    //         return acc
    //       }, {})
    //       return allPages.map(edge => {
    //         const path = metadata.siteUrl + edge.node.path
    //         return { path, ...wpNodeMap[edge.node.path] }
    //       })
    //     },
    //     serialize: ({ path, updatedAt }) => {
    //       return {
    //         url: path,
    //         lastmod: updatedAt,
    //       }
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl
      }
    },
  ],
};
