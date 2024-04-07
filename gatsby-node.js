// exports.createPages = async ({ actions: { } }) => {
exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const result = await graphql(`
    {
        allContentfulPageBlogPost(sort: {publishedDate: DESC}) {
            nodes {
                id
                slug
            }
        }
        allContentfulPageBook(sort: {publishedDate: DESC}) {
            nodes {
                id
                slug
            }
        }
    }
    `)
    result.data.allContentfulPageBlogPost.nodes.forEach(({id, slug}) => {
        createPage({
            path: `/blog/${slug}`,
            component: require.resolve(`./src/templates/PostPage.js`),
            context: {
                id: id
            }
        })
    })
    result.data.allContentfulPageBook.nodes.forEach(({id, slug}) => {
        createPage({
            path: `/book/${slug}`,
            component: require.resolve(`./src/templates/BookPage.js`),
            context: {
                id: id
            }
        })
    })
}
