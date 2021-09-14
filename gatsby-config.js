// https://github.com/alxshelepenok/gatsby-starter-lumen/blob/master/gatsby-config.js

module.exports = {
  siteMetadata: {
    title: 'Wuru Zeka',
    siteTitleAlt: 'AI tutor for improving IELTS scores', // Alternative Site title for SEO
    siteTitleShort: 'wuruzeka', // short_name for manifest
    pathPrefix: '/',
    siteImg: 'https://github.com/nkourou/nkourou.github.io/raw/main/imgs/open-graph.jpg',
    siteLogo: '../images/non_text_logo.png',
    author: 'Ayush Singh',
    minibio: 'The AI based app for people who want to identify their weakness and improve them. Because rote memorization & passive learning has failed them!',
    description: 'AI tutor for improving IELTS scores',
    keywords: `Artifical Intelligence, Personalized learning, IELTS, IELTS coaching, IELTS prep, English, NLP, Natural Language Processing, Speech recognition`,
    twitter: 'https://twitter.com/wuruzeka',
    instagram: "https://instagram.com/wuruzeka",
    fbAppID: '349992816762548',
    mixpanel: '6b2f75494a5067e60cac888cd53760f6',
    medium: 'https://medium.com/@wuruzeka',
    siteUrl: process.env.ROOT_URL || 'https://wuruzeka.com',
    appUrl: process.env.APP_URL || "https://app.wuruzeka.com",
    organization: "Wuru Zeka Inc."
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
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/non_text_logo.png",
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
    }
  ],
};
