module.exports = {
  siteMetadata: {
    title: 'IELTSgeek',
    siteTitleAlt: 'AI tutor for improving IELTS scores', // Alternative Site title for SEO
    siteTitleShort: 'ieltsgeek', // short_name for manifest
    pathPrefix: '/',
    siteImg: 'https://github.com/nkourou/nkourou.github.io/raw/main/imgs/open-graph.jpg',
    siteLogo: '../images/bulma-logo.png',
    author: 'Ayush Singh',
    minibio: 'The AI based app for people who want to identify their weakness and improve them. Because rote memorization & passive learning has failed them!',
    description: 'AI tutor for improving IELTS scores',
    keywords: `Artifical Intelligence, Personalized learning, IELTS, IELTS coaching, IELTS prep, NLP, Natural Language Processing, Speech recognition`,
    twitter: 'https://twitter.com/ieltsgeek',
    fbAppID: '',
    github: `https://github.com/ieltsgeek`,
    medium: 'https://medium.com/@ieltsgeek',
    siteUrl: process.env.ROOT_URL || 'https://ieltsgeek.com',
    appUrl: "https://app.ieltsgeek.com"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-scroll-reveal",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "nblkjhb",
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
        url: process.env.GRAPH_CMS_API
      }
    }
  ],
};
