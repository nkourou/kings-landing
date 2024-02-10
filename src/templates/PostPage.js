import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import PageLayout from "../components/pagelayout";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const pageQuery = graphql`
  query PostPageQuery($id: String) {
    contentfulPageBlogPost(id: {eq: $id}) {
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
    `;

const PostPage = () => {
  const post = useStaticQuery(pageQuery).contentfulPageBlogPost;
  console.log(post);
  const AVG_READING_SPEED = 150;
  const plainTextBody = documentToPlainTextString(JSON.parse(post.content.raw))

  let readTime = plainTextBody.split(" ").length / AVG_READING_SPEED;
  readTime =
    readTime < 1
      ? `${Math.floor(readTime * 60)} seconds`
      : `${Math.floor(readTime)} min`;

  return (
    <PageLayout
      pageTitle={post.title}
      pageLink="blog"
      excerpt={post.shortDescription.shortDescription}
      image={post.featuredImage.publicUrl}
      slug={post.slug}
      date={post.date}
      authorName={post.author.name}
    >
      <div className="has-text-centered">
        <h1 className="title is-size-1">{post.title}</h1>
        <h3 className="subtitle">{post.excerpt}</h3>
        <img src={post.featuredImage.publicUrl} alt="cover" />
      </div>
      <section className="section">
        <article className="media mb-5">
          <figure className="media-left">
            <p className="image is-64x64">
              <img
                src={post.author.avatar.publicUrl}
                alt="author"
                className="is-rounded"
              />
            </p>
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
        <p className="my-5 has-text-justified">
            {plainTextBody}
            {post.body?.raw && renderRichText(post.content, {
                renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: (node) => {
                    const { gatsbyImage, description } = node.data.target
                    return (
                    <GatsbyImage
                        image={getImage(gatsbyImage)}
                        alt={description}
                    />
                    )
                    },
                },
                })}
          <RichText
            content={post.content.raw}
            renderers={{
              img: ({ children, alt, ...rest }) => (
                <img alt={alt} {...rest}>
                  {children}
                </img>
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
        {/* {post.tags.map((tag) => (
          <div className="pr-2">
            <span className="tag is-light is-rounded is-size-6">#{tag}</span>
          </div>
        ))} */}
        <p className="my-4 is-size-6">
          Published on {post.date} by {post.author.name}
          {/* Published on {post.date} by {post.author.name} | {post.author.title} */}
        </p>
        {/* {post.relatedPosts.length > 0 && (
          <div className="tabs is-large">
            <ul>
              <li>Further reading</li>
            </ul>
          </div>
        )}
        <div className="columns is-multiline">
          {post.relatedPosts.map(({ title, featuredImage, shortDescription, slug }) => (
            <div className="column is-4">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img src={featuredImage.publicUrl} alt="Related post" />
                  </figure>
                </div>
                <div className="card-content">
                  <span className="title is-size-4">
                    <Link to={`/blog/${slug}`}>{title}</Link>
                  </span>
                  <p>{shortDescription.shortDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </PageLayout>
  );
};

export default PostPage;
