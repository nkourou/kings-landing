import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const AboutSection = () => (
  <div className="container">
    <section className="section has-text-centered">
      <StaticImage
        src="../images/undraw_pizza_sharing_wxop.svg"
        alt="about us"
      />
      <h1 className="title m-6">
        We're a team of machine learning engineers, data scientists, learning
        science researchers and awesome teachers.
      </h1>
      <h2 className="subtitle is-size-4">
        Our <strong>mission</strong> is to develop novel ways of imparting
        education using <em>Artificial Intelligence</em>
      </h2>
    </section>
    <section className="section mb-6">
      <p className="mb-3">
        WuruZeka was initially developed to help students who have tried all
        methods and were simply not able to progress. Our system found core
        weaknesses and helped them improve these aspects.
      </p>
      <p>
        After proving value for this subset of students, we expanded our
        technology to general audience who can use our AI to improve themselves
        as well!
      </p>
      <blockquote>
        The term <i>Wuru Zeka</i> stems from two languages. Wuru means Artificial in an indigenous African language and Zeka means Intelligence in Turkish. Together they form Artifical Intelligence which is the core technology behind our success.
      </blockquote>
    </section>
  </div>
);

export default AboutSection;
