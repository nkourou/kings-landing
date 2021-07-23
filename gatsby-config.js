module.exports = {
  siteMetadata: {
    title: 'WuruZeka',
    siteTitleAlt: 'AI tutor for improving IELTS scores', // Alternative Site title for SEO
    siteTitleShort: 'wuruzeka', // short_name for manifest
    pathPrefix: '/',
    siteImg: 'https://github.com/nkourou/nkourou.github.io/raw/main/imgs/open-graph.jpg',
    siteLogo: '../images/logo.svg',
    author: 'Ayush Singh',
    minibio: 'The AI based app for people who want to identify their weakness and improve them. Because rote memorization & passive learning has failed them!',
    description: 'AI tutor for improving IELTS scores',
    keywords: `Artifical Intelligence, Personalized learning, IELTS, IELTS coaching, IELTS prep, English, NLP, Natural Language Processing, Speech recognition`,
    twitter: 'https://twitter.com/wuruzeka',
    instagram: "https://instagram.com/wuruzeka",
    fbAppID: '',
    medium: 'https://medium.com/@wuruzeka',
    siteUrl: process.env.ROOT_URL || 'https://wuruzeka.com',
    appUrl: process.env.APP_URL || "https://app.wuruzeka.com"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-scroll-reveal",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.WZ_GA_ID,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
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
