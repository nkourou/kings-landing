import React from 'react';

const AboutSection = () => (
  <div className="container">
    <section className="section has-text-centered">
      <img src="../images/undraw_pizza_sharing_wxop.svg" />
      <h1 className="title m-6">
        We're a team of machine learning engineers, data scientists, learning science researchers and awesome teachers.
      </h1>
      <h2 className="subtitle is-size-4">
      Our <strong>mission</strong> is to develop novel ways of imparting education using <em>Artificial Intelligence</em>
      </h2>
    </section>
    <section className="section mb-6">
      <p className="mb-3">
        IELTSgeek was initially developed to help students who have tried all methods and were simply not able to progress. Our system found core weaknesses and helped them improve these aspects.
      </p>
      <p>
        After proving value for this subset of students, we expanded our technology to general audience who can use our AI to improve themselves as well!
      </p>
    </section>
  </div>
);

export default AboutSection;
