import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import PageLayout from "../components/pagelayout";

const pageQuery = graphql`
  {
    gcms {
      posts(orderBy: publishedAt_DESC) {
        date
        excerpt
        date
        publishedBy {
          name
          picture
        }
        author {
          name
          picture {
            url
          }
        }
        slug
        tags
        title
        coverImage {
          url
        }
      }
    }
  }
`;

const Blog = () => {
  const {
    gcms: { posts },
  } = useStaticQuery(pageQuery);

  return (
    <PageLayout
      pageTitle="Blog"
      pageLink="blog"
    >
      <div className="columns is-multiline mx-3">
        {posts.map(({ slug, ...post }) => (
          <div className="column is-4">
            <div className="card is-flex is-flex-direction-column">
              <div className="card-image">
                <figure className="image">
                  <img src={post.coverImage.url} alt="Blog cover" />
                </figure>
              </div>
              <div className="card-content is-flex-grow-1">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src={post.author.picture.url}
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
                  <p>{post.excerpt}</p>
                </div>
              </div>
              <div className="card-content">
                {post.tags.map((tag) => (
                  <span className="tag is-link is-light is-rounded is-small mr-3">
                    {tag}
                  </span>
                ))}
                <span className="help">
                  Published on <time date={post.date}>{post.date}</time>
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
