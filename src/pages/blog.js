import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import PageLayout from "../components/pagelayout";

// const pageQuery = graphql`
// query ($id: String) {
//     contentfulPageBlogPost(id: {eq: $id}) {
//       id
//       title
//       slug
//       shortDescription {
//         id
//         shortDescription
//       }
//       seoFields {
//         id
//       }
//       publishedDate(formatString: "MMMM Do, YYYY")
//       author {
//         name
//         avatar {
//           publicUrl
//         }
//       }
//       featuredImage {
//         gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
//       }
//       content {
//         raw
//       }
//     }
//   }
// `;
const pageQuery = graphql`
query {
    allContentfulPageBlogPost(sort: { publishedDate: DESC }) {
        nodes {
          contentful_id
          id
          title
          slug
          shortDescription {
            id
            shortDescription
          }
          seoFields {
            id
          }
          publishedDate(formatString: "MMMM Do, YYYY")
          author {
            name
            avatar {
              publicUrl
            }
          }
          featuredImage {
            publicUrl
            gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
          }
          content {
            raw
          }
        }
    }
  }
`;

const Blog = () => {
  const posts = useStaticQuery(pageQuery);
//   console.log(posts)
  return (
    <PageLayout
      pageTitle="Blog"
      pageLink="blog"
    >
      <div className="columns is-multiline mx-3">
        {posts.allContentfulPageBlogPost.nodes.map(({ slug, ...post }) => (
          <div className="column is-4" key={slug}>
            <div className="card is-flex is-flex-direction-column">
              <div className="card-image">
              <Link to={`/blog/${slug}`}>
                <figure className="image">
                  <img src={post.featuredImage.publicUrl} alt="Blog cover" />
                </figure>
                </Link>
              </div>
              <div className="card-content is-flex-grow-1">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src={post.author.avatar.publicUrl}
                        alt="WuruZeka logo"
                        className="is-rounded"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-size-5">
                      <Link to={`/blog/${slug}`} className="blog-title-link">
                        {post.title}
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="content is-size-6">
                  <p>{post.shortDescription.shortDescription}</p>
                </div>
              </div>
              <div className="card-content">
                <span className="help">
                  Published on <time date={post.publishedDate}>{post.publishedDate}</time>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Blog;
                //   {/* <p>{post.excerpt}</p> */}

                // {/* {post.tags.map((tag) => (
                //   <span className="tag is-link is-light is-rounded is-small mr-3">
                //     {tag}
                //   </span>
                // ))} */}