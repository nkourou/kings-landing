import React from "react";

import "./style.scss";
import HelmetC from "./helmetc";
import Footer from "./footer";
import Navbar from "./navbar";
import Cookie from "./cookie";
import { Link } from "gatsby";

const PageLayout = ({ pageTitle, pageLink, children }) => (
  <>
    <HelmetC />
    <Navbar />
    <section className="mb-6 hero is-warning">
      <div className="hero-body">
        <h1 className="title">
          <Link to={`/${pageLink}`}>WuruZeka | {pageTitle}</Link>
        </h1>
        <h2 className="subtitle">The AI tutor app for IELTS</h2>
      </div>
    </section>
    <div className="container">{children}</div>
    <Cookie />
    <Footer />
  </>
);

export default PageLayout;
