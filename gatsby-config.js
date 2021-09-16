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
    author: 'Ayush Singh',
    description: 'AI tutor for improving IELTS scores',
    minibio: 'The AI based app for people who want to identify their weakness and improve them. Because rote memorization & passive learning has failed them!',
    keywords: `Artifical Intelligence, Personalized learning, IELTS, IELTS coaching, IELTS prep, English, NLP, Natural Language Processing, Speech recognition`,
    twitter: 'https://twitter.com/wuruzeka',
    instagram: "https://instagram.com/wuruzeka",
    fbAppID: '349992816762548',
    mixpanel: '6b2f75494a5067e60cac888cd53760f6',
    medium: 'https://medium.com/@wuruzeka',
    siteUrl: siteUrl,
    appUrl: process.env.APP_URL || "https://app.wuruzeka.com",
    organization: { name: "Wuru Zeka Inc.", logo: "https://wuruzeka.com/static/logo-69580c490bdff69a56b3422793238446.svg", url: siteUrl }
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
    "gatsby-plugin-scroll-reveal",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.WZ_GA_ID, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          anonymize_ip: true,
        },
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
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: 'GraphCMS',
        fieldName: 'gcms',
        url: process.env.WZ_GRAPH_CMS_API
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
          query: `
          {
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
          {
            gcms {
              posts {
                slug
                updatedAt
              }
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { edges: allPages },
          gcms: { posts: allGcmsPosts },
          site: { siteMetadata: siteUrl }
        }) => {
          const wpNodeMap = allGcmsPosts.reduce((acc, node) => {
            const { slug } = node
            acc[slug] = node

            return acc
          }, {})

          return allPages.map(page => {
            const path = siteUrl + page.node.path
            return { path, ...wpNodeMap[`/blog/${page.node.path}`] }
          })
        },
        serialize: ({ path, updatedAt }) => {
          return {
            url: path,
            lastmod: updatedAt,
          }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl
      }
    },
  ],
};
