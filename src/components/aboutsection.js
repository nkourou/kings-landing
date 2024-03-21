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
    <section className="section mb-6 has-text-grey-dark">
      <p className="block">
        WuruZeka was initially developed by graduates from MIT, Harvard and CMU. The platform is backed by 10,000+ hours of 
        instructional design that our Artifical Intelligence has learned from. This allows WuruZeka to surface core
        weaknesses and reinforce existing strengths for students from 
        all walks of life.
      </p>
      <p className="block">
        After proving value for this subset of students, we expanded our technology to general audience who can use our AI to improve themselves as well!
      </p>
      <p className="block">
        As for our name, the term <i>Wuru Zeka</i> stems from two languages. Wuru means Artificial in an indigenous African language and Zeka means Intelligence in Turkish. Together they form Artifical Intelligence which is the core technology behind our success.
      </p>
    </section>
  </div>
);

export default AboutSection;
