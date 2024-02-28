import React from "react";

import "./style.scss";
import HelmetC from "./helmetc";
import Footer from "./footer";
import Navbar from "./navbar";
import Cookie from "./cookie";

const PageLayout = ({ pageTitle, pageLink, excerpt, image, slug, date, authorName, children }) => (
  <>
    <HelmetC
      isBlogPost={true}
      title={pageTitle}
      excerpt={excerpt}
      image={image}
      slug={slug}
      date={date}
      authorName={authorName}
    />
    <Navbar />
    <section className="mb-6 hero is-warning">
      <div className="hero-body">
        <h1 className="title">
          {pageTitle}
        </h1>
        <h2 className="subtitle">{excerpt || 'Your ultimate online destination for IELTS General Test prep!'}</h2>
      </div>
    </section>
    <div className="container">{children}</div>
    <Cookie />
    <Footer />
  </>
);

export default PageLayout;
