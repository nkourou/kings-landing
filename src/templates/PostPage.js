import React from "react";
import { graphql, Link } from "gatsby";
import PageLayout from "../components/pagelayout";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { FaTwitter } from "react-icons/fa";
// import { FaTwitter, FaFacebook, FaLinkedin, FaHeart } from "react-icons/fa";

export const pageQuery = graphql`
  query PostPageQuery($id: ID!) {
    gcms {
      post(where: { id: $id }) {
        title
        excerpt
        slug
        date
        tags
        author {
          biography
          name
          title
          picture {
            url
          }
        }
        coverImage {
          url
        }
        seo {
          keywords
        }
        content {
          raw
          text
        }
        relatedPosts {
          title
          slug
          coverImage {
            url
          }
          excerpt
        }
      }
    }
  }
`;

const PostPage = ({
  data: {
    gcms: { post },
  },
}) => {
  const AVG_READING_SPEED = 150;
  let readTime = post.content.text.split(" ").length / AVG_READING_SPEED;
  readTime =
    readTime < 1
      ? `${Math.floor(readTime * 60)} seconds`
      : `${Math.floor(readTime)} min`;
  return (
    <PageLayout pageTitle="Blog" pageLink="blog">
      <div className="has-text-centered">
        <h1 className="title is-size-1">{post.title}</h1>
        <h3 className="subtitle">{post.excerpt}</h3>
        <img src={post.coverImage.url} alt="cover" />
      </div>
      <section className="section">
        <article className="media mb-5">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={post.author.picture.url} alt="author" className="is-rounded" />
            </p>
          </figure>
          <div className="media-content">
            <p className="">
              <span className="title is-size-4">{post.author.name}</span>
              <br />
              {readTime} read
              <p className="my-5 has-text-justified">
                <RichText
                  content={post.content.raw}
                  renderers={{
                    img: ({ children, alt, ...rest }) => (
                      <img alt={alt} {...rest}>{children}</img>
                    ),
                    bold: ({ children }) => <strong>{children}</strong>,
                    a: ({ children, openInNewTab, href, rel, ...rest }) => {
                      if (href.match(/^https?:\/\/|^\/\//i)) {
                        return (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            {...rest}
                          >
                            {children}
                          </a>
                        );
                      }

                      return (
                        <Link to={href}>
                          <a {...rest}>{children}</a>
                        </Link>
                      );
                    },
                  }}
                />
              </p>
              {post.tags.map((tag) => (
                <div className="pr-2">
                  <span className="tag is-light is-rounded is-size-6">
                    #{tag}
                  </span>
                </div>
              ))}
            </p>
            <p className="my-4 is-size-6">
              Published on {post.date} by {post.author.name} |{" "}
              {post.author.title}
            </p>
          </div>
          <div className="media-right">
            <nav className="level">
              <div className="level-right">
                <a
                  className="level-item"
                  target="_blank"
                  rel="noreferrer"
                  href='https://twitter.com/intent/tweet?hashtags=ielts%2Ctutor%2Cprep&amp;original_referer=https%3A%2F%2Fieltsgeek.com%2F&amp;ref_src=twsrc%5Etfw&amp;related=twitterapi%2Ctwitter&amp;text=Great%20tips%20to%20prepare%20for%20IELTS&amp;tw_p=ieltsgeek&amp;url=https%3A%2F%2Fieltsgeek.com%2Fblog%2F&amp;via=ieltsgeek'
                >
                  <FaTwitter className="mr-2" size={25} />
                </a>
                {/* <a className="level-item">
                  <FaFacebook className="mr-2" size={25} />
                </a>
                <a className="level-item">
                  <FaLinkedin className="mr-2" size={25} />
                </a>
                <div className="level-item">
                  <FaHeart className="mr-2" size={25} />
                </div> */}
              </div>
            </nav>
          </div>
        </article>
        {post.relatedPosts.length > 0 && (
          <div className="tabs is-large">
            <ul>
              <li>Further reading</li>
            </ul>
          </div>
        )}
        <div className="columns is-multiline">
          {post.relatedPosts.map(({ title, coverImage, excerpt, slug }) => (
            <div className="column is-4">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img src={coverImage.url} alt="Related post" />
                  </figure>
                </div>
                <div className="card-content">
                  <span className="title is-size-4">
                    <Link to={`/blog/${slug}`}>{title}</Link>
                  </span>
                  <p>{excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default PostPage;
