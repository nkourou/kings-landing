import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaUser,
} from "react-icons/fa";
import { StaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            twitter
            instagram
            medium
          }
        }
      }
    `}
    render={(data) => (
      <footer data-section-id="6" className="footer section mt-6">
        <div className="container">
          <div className="columns">
            <div className="column is-5 is-4-widescreen">
              <article className="media">
                <figure className="media-left">
                  <StaticImage
                    alt="WuruZeka"
                    role="presentation"
                    src="../images/non_text_logo.png"
                    placeholder="blurred"
                    layout="fixed"
                    width={64}
                    height={64}
                  />
                </figure>
                <div className="media-content">
                  <div className="content">
                    <div className="title is-size-4">Wuru Zeka</div>
                    <div className="subtitle is-size-5">
                      AI to help you rock your IELTS
                    </div>
                  </div>
                </div>
              </article>
              <div className="is-size-6">
                <hr />
                <p>
                  Science backed app for people who want to identify their
                  weakness and improve them. Because rote memorization &amp;
                  passive learning has failed them!
                </p>
                {/* <hr />
                <a href="http://www.singpaledulabs.ai">© Singpal Edu AI Labs</a> */}
              </div>
            </div>
            <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
              <div className="columns">
                {/* <div className="column is-4">
                  <div className="menu">
                    <p className="menu-label">Product</p>
                    <ul className="menu-list">
                      <li>
                        <Link to="/" activeClassName="is-active">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/technology" activeClassName="is-active">
                          Technology
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="column is-4">
                  <div className="menu">
                    <p className="menu-label">Company</p>
                    <ul className="menu-list">
                      {/* <li>
                        <Link to="/blog" activeClassName="is-active">Blog</Link>
                      </li> */}
                      <li>
                        <Link to="/about-us" activeClassName="is-active">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy" activeClassName="is-active">
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <Link to="/terms-of-use" activeClassName="is-active">
                          Terms
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="menu">
                    <p className="menu-label">Connect with us</p>
                    <ul className="menu-list">
                      <li>
                        <a
                          href="mailto:support@wuruzeka.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaUser className="mr-2" />
                          Mail us
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href={data.site.siteMetadata.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook className="mr-2" />
                          Facebook
                        </a>
                      </li> */}
                      <li>
                        <a
                          href={data.site.siteMetadata.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram className="mr-2" />
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href={data.site.siteMetadata.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter className="mr-2" />
                          Twitter
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href={data.site.siteMetadata.medium}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaMedium className="mr-2" />
                          Medium
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
