import React from "react";
import "./style.scss";
import { StaticImage } from "gatsby-plugin-image";

const HowItWorks = () => {
  return (
    <>
      <section
        id="how-it-works"
        data-section-id="3"
        data-category="howitworks"
        className="section has-background-white-bis"
      >
        <div className="columns py-3 is-centered is-vcentered">
          <div className="column is-6">
            <div className="p-6">
              <StaticImage
                src="../images/undraw_Master_plan_re_jvit.svg"
                alt="learning as a loop"
                data-config-id="01_image"
                data-sal="slide-right"
              />
            </div>
          </div>
          <div className="column pr-6" data-sal="slide-left">
            <div className="mb-6">
              <h2 className="mt-4 title is-2" data-config-id="01_header">
                How it works ?
              </h2>
            </div>
            <div className="is-flex mb-5">
              <div>
                <h1
                  className="title is-3 is-spaced mb-3"
                  data-config-id="header1"
                >
                  1. Diagnosis
                </h1>
                <p className="subtitle is-4" data-config-id="desc1">
                  We use the latest in natural language processing (NLP) and
                  automated speech recognition (ASR) to get deeper insights
                  into your skill levels.
                </p>
              </div>
            </div>
            <div className="is-flex mb-5">
              <div>
                <h1
                  className="title is-3 is-spaced mb-3"
                  data-config-id="header2"
                >
                  2. Treatment
                </h1>
                <p className="subtitle is-4" data-config-id="desc2">
                  We leverage bleeding edge advancements in learning science to build short modules that you can finish in less than 20 minutes per day.
                  {/* as well as behavorial psychology  */}
                </p>
              </div>
            </div>
            <div className="is-flex">
              <div>
                <h1
                  className="title is-3 is-spaced mb-3"
                  data-config-id="header3"
                >
                  3. Re-evaluation
                </h1>
                <p className="subtitle is-4" data-config-id="desc3">
                  Our A.I. and IELTS certified teachers work together to assess the effect of treatment in step 2 and go back to step 1 with new set of exercises that help you take your skills to the next level.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="title is-1 has-text-centered">
          Learning as a l
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 68 68"
              className="loop-svg"
            >
              <path d="M 50.871 17.551 C 46.478 17.551 42.35 19.258 39.311 22.297 L 33.993 27.397 L 28.764 22.372 C 25.663 19.264 21.529 17.551 17.129 17.551 C 12.73 17.551 8.602 19.271 5.501 22.372 C 2.394 25.48 0.68 29.607 0.68 34.007 C 0.68 38.393 2.387 42.527 5.501 45.628 C 8.602 48.736 12.73 50.449 17.129 50.449 C 21.522 50.449 25.656 48.742 28.689 45.696 L 34 40.603 L 39.236 45.628 C 42.337 48.736 46.471 50.449 50.871 50.449 C 55.27 50.449 59.391 48.742 62.492 45.628 C 65.6 42.527 67.313 38.393 67.313 33.993 C 67.313 29.594 65.606 25.473 62.492 22.358 C 59.391 19.258 55.264 17.551 50.871 17.551 Z M 22.025 38.896 C 19.407 41.514 14.851 41.514 12.233 38.896 C 10.921 37.584 10.207 35.85 10.207 34 C 10.207 32.15 10.928 30.416 12.247 29.097 C 13.546 27.785 15.286 27.071 17.136 27.071 C 18.986 27.071 20.72 27.792 22.107 29.172 L 27.139 34.007 Z M 55.767 38.896 C 53.149 41.521 48.661 41.582 45.907 38.828 L 40.875 33.993 L 45.975 29.097 C 48.593 26.479 53.156 26.479 55.774 29.09 C 57.086 30.41 57.8 32.144 57.8 33.993 C 57.8 35.836 57.072 37.584 55.767 38.896 Z"></path>
            </svg>
          </span>
          p, not a cycle
        </h1>
      </section>
    </>
  );
};

export default HowItWorks;
