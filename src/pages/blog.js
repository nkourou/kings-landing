import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import PageLayout from "../components/pagelayout";
import { GatsbyImage } from "gatsby-plugin-image";
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'

const pageQuery = graphql`
query {
    allContentfulPageBlogPost(sort: { publishedDate: DESC }) {
        nodes {
          contentful_id
          id
          title
          slug
          summary {
            summary
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
          }
          content {
            raw
          }
        }
    }
  }
`;

const Blog = () => {
  const posts = useStaticQuery(pageQuery).allContentfulPageBlogPost.nodes;

  return (
    <PageLayout
      pageTitle="Blog"
      pageLink="blog"
    >
      <div className="columns is-multiline mx-3">
        {posts.map(({ slug, ...post }) => (
          <div className="column is-4" key={slug}>
            <div className="card is-flex is-flex-direction-column">
              <div className="card-image">
              <Link to={`/blog/${slug}`}>
                <figure className="image">
                  {/* <img src={post.featuredImage.publicUrl} alt="Blog cover" /> */}
                  <GatsbyImage image={post.featuredImage.gatsbyImageData} alt={post.title}/>
                </figure>
                </Link>
              </div>
              <div className="card-content is-flex-grow-1">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src={post.author.avatar.publicUrl}
                        alt="author avatar"
                        className="is-rounded"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="">
                      <Link to={`/blog/${slug}`} className="blog-title-link">
                        {post.title}
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="content is-size-6">
                  <p>{documentToPlainTextString(JSON.parse(post.content.raw)).substring(0, 200)}..</p>
                </div>
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