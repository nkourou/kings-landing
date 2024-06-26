import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaUser,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  const data = useStaticQuery(graphql`
                  query {
                    site {
                      siteMetadata {
                        twitter
                        instagram
                        youtube
                        description
                      }
                    }
                  } 
                `)
  return (
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
              {/* <hr /> */}
              <p>
                {/* Science backed app for people who want to identify their weakness and improve them. Because rote memorization passive learning has failed them! */}
                {data.site.siteMetadata.description}
              </p>
              <hr />
              <p>© 2024 Wuru Zeka, Inc. All rights reserved</p>
            </div>
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Product</p>
                  <ul className="menu-list no-disc">
                    <li>
                      <Link to="/" activeClassName="is-active">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" activeClassName="is-active">Blog</Link>
                    </li>
                    <li>
                      <Link to="/book" activeClassName="is-active">Books</Link>
                    </li>
                    <li>
                      <Link to="/technology" activeClassName="is-active">
                        Technology
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Company</p>
                  <ul className="menu-list no-disc">
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
                  <ul className="menu-list no-disc">
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
                        <FaXTwitter className="mr-2" />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href={data.site.siteMetadata.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaYoutube className="mr-2" />
                        YouTube
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
  );
};

export default Footer;
