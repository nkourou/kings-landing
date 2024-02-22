import React from "react";
import { graphql, Link } from "gatsby";
import PageLayout from "../components/pagelayout";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image";

const propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query PostPageQuery($id: String) {
    contentfulPageBlogPost(id: {eq: $id}) {
      id
      title
      subtitle
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      author {
        name
        avatar {
          publicUrl
        }
      }
      featuredImage {
        publicUrl
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      content {
        raw
      }
      relatedBlogPosts {
        id
        title
        slug
        content {
          raw
        }
        featuredImage {
          publicUrl
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
    `;
    // seoFields {
    //   id
    //   pageTitle
    //   pageDescription {
    //     id
    //     pageDescription
    //   }
    // }
class PostPage extends React.Component {
  render() {
    const post = this.props.data.contentfulPageBlogPost;
    const plainTextBody = documentToPlainTextString(JSON.parse(post.content.raw))
    const AVG_READING_SPEED = 150;
    let readTime = plainTextBody.split(" ").length / AVG_READING_SPEED;
    readTime =
      readTime < 1
        ? `${Math.floor(readTime * 60)} seconds`
        : `${Math.floor(readTime)} min`;

    return (
      <PageLayout
        pageTitle={post.title}
        pageLink="blog"
        excerpt={post.subtitle}
        image={post.featuredImage.publicUrl}
        slug={post.slug}
        date={post.date}
        authorName={post.author.name}
      >
        <div className="has-text-centered">
          <h1 className="title">{post.title}</h1>
          {post.subtitle && <h3 className="subtitle">{post.subtitle}</h3>}
          <GatsbyImage image={post.featuredImage.gatsbyImageData} alt={post.title}/>
        </div>
        <section className="section">
          <article className="media mb-5">
            <figure className="media-left">
              <div className="image is-64x64">
                <img
                  src={post.author.avatar.publicUrl}
                  alt={post.author.avatar.name}
                  className="is-rounded"
                />
              </div>
            </figure>
            <div className="media-content">
              <span className="title is-size-4">{post.author.name}</span>
              <br />
              {readTime} read
            </div>
            <div className="media-right">
              <nav className="level">
                <div className="level-right">
                  <a
                    className="level-item"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={post.slug}
                    href={
                      "https://twitter.com/intent/tweet?hashtags=ielts%2Ctutor%2Cprep&amp;original_referer=https%3A%2F%2Fwuruzeka.com%2F&amp;ref_src=twsrc%5Etfw&amp;related=twitterapi%2Ctwitter&amp;text=Great%20tips%20to%20prepare%20for%20IELTS&amp;tw_p=WuruZeka&amp;via=WuruZeka&amp;url=https%3A%2F%2Fwuruzeka.com%2Fblog%2F" +
                      post.slug
                    }
                  >
                    <FaTwitter className="mr-2" size={25} />
                  </a>
                  <a
                    className="level-item"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={post.slug}
                    href={
                      "https://www.facebook.com/share.php?title=Writing+IELTS+for+Success&u=https%3A%2F%2Fwuruzeka.com%2Fblog%2F" +
                      post.slug
                    }
                  >
                    <FaFacebook className="mr-2" size={25} />
                  </a>
                  <a
                    className="level-item"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={post.slug}
                    href={
                      "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwuruzeka.com%2Fblog%2F" +
                      post.slug
                    }
                  >
                    <FaLinkedin className="mr-2" size={25} />
                  </a>
                </div>
              </nav>
            </div>
          </article>
          <div className="my-5 has-text-justified content">
              {renderRichText(post.content)}
          </div>
          {/* {post.tags.map((tag) => (
            <div className="pr-2">
              <span className="tag is-light is-rounded is-size-6">#{tag}</span>
            </div>
          ))} */}
          <p className="my-4 is-size-6">
            Published on {post.publishedDate} by {post.author.name}
            {/* Published on {post.publishedDate} by {post.author.name} | {post.author.title} */}
          </p>
          {post.relatedBlogPosts && post.relatedBlogPosts.length > 0 && (
            <div>
              <div className="tabs is-large">
                <ul>
                  <li>Further reading</li>
                </ul>
              </div>
              <div className="columns is-multiline">
                {post.relatedBlogPosts.map(({ title, featuredImage, content, slug }) => (
                  <div className="column is-4" key={title}>
                    <div className="card">
                      <div className="card-image">
                        <Link to={`/blog/${slug}`}>
                          <figure className="image">
                            {/* <img src={featuredImage.publicUrl} alt="Related post" /> */}
                            <GatsbyImage image={featuredImage.gatsbyImageData} alt={title}/>
                          </figure>
                        </Link>
                      </div>
                      <div className="card-content">
                        <Link to={`/blog/${slug}`}>{title}</Link>
                        <p className="is-size-6">{documentToPlainTextString(JSON.parse(content.raw)).substring(0, 100)}..</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </PageLayout>
    );
  }
};

PostPage.propTypes = propTypes
export default PostPage;
