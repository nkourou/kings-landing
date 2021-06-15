import React from "react";
import "./style.scss";
import fixingBugsSvg from "../images/undraw_fixing_bugs_w7gi.svg";
import masterPlanSvg from "../images/undraw_Master_plan_re_jvit.svg";
import Emoji from "./emoji";
import { StaticImage } from "gatsby-plugin-image";

const Midsection = () => {
  return (
    <>
      <section
        id="statistics"
        data-section-id="2"
        className="section"
      >
        <div className="columns is-variable is-5" data-sal="slide-up">
          <div className="column is-4">
            <div className="card">
              {/* <StaticImage
                alt="3.5+ Million test takers"
                src="../images/undraw_Airport_re_oqk1.svg"
              /> */}
              {/* <FaGlobeAsia className="mr-2" /> */}
              <h3 className="title is-spaced is-size-3 has-text-centered">
                3.5+ Million test takers
              </h3>
              <p className="subtitle is-size-4">
                The average score of IELTS test takers without preparation
                is <strong>6.53</strong>.
              </p>
              <p>
                This is less than the minimum required
                for both, admission to universities and immigration to countries
                like Canada, Australia, etc.
              </p>
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              {/* <StaticImage
                alt="Passive learning"
                src="../images/undraw_book_lover_mkck.svg"
              /> */}
              <h3 className="title is-spaced is-size-3 has-text-centered">
                Passive learning <Emoji emoji="😕" />
              </h3>
              <p className="subtitle is-size-4">
                Watching videos and webinar can only take you so far.
              </p>
              <p>
                Giving
                mock tests over and over again is only practicing the same
                mistakes repeatedly.
              </p>
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              {/* <StaticImage
                alt="We diagnose and fix it"
                src="../images/undraw_doctors_hwty.svg"
              /> */}
              <h3 className="title is-spaced is-size-3 has-text-centered">
                We diagnose and fix it
              </h3>
              <p className="subtitle is-size-4">
                <Emoji emoji="🤖" />+ <Emoji emoji="🧙🏼‍♀️" />
                intelligence will not only surface & fix your weaknesses, but
                also reinforce your strengths.
              </p>
              <p>
                Using guided learning experiences
                tailored as per your needs, AI teaches you to get highest scores
                in shortest amount of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        data-section-id="3"
        data-category="features"
        className="section mb-6"
      >
        <div className="columns py-3 is-centered is-vcentered">
          <div className="column is-6 pr-6" data-sal="slide-right">
            <div className="mb-6">
              <h2 className="mt-4 title is-size-3" data-config-id="01_header">
                Key Features
              </h2>
            </div>
            <div className="is-flex mb-6">
              <div className="mr-4 has-text-primary">
                <svg
                  className="image is-32x32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="title is-4 is-spaced mb-3" data-config-id="header1">
                  Personalized learning
                </h1>
                <p className="subtitle" data-config-id="desc1">
                  Not only is the content personal to you, we also ramp up the time your need to spend per day as the exam day reaches closer in order to optimize your target band score. Yes, our AI tunes your learning path after every module you do!
                </p>
              </div>
            </div>
            <div className="is-flex mb-6 ">
              <div className="mr-4 has-text-primary">
                <svg
                  className="image is-32x32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="title is-4 is-spaced mb-3" data-config-id="header2">
                  Artifical Intelligence
                </h1>
                <p className="subtitle" data-config-id="desc2">
                  We use the latest in NLP, ASR and learning science to get deeper insights
                  into your skills level. We build short modules that you
                  can finish these modules in 10 minutes.
                </p>
              </div>
            </div>
            <div className="is-flex">
              <div className="mr-4 has-text-primary">
                <svg
                  className="image is-32x32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="title is-4 is-spaced mb-3" data-config-id="header3">
                  1:1 tutoring
                </h1>
                <p className="subtitle" data-config-id="desc3">
                  Our <span className="has-text-info">A.I.</span> and{" "}
                  <span className="has-text-danger">IELTS certified</span>{" "}
                  teachers work together to decide what is best for you.
                  However, in case you need 1:1 help, our teachers are here when
                  you need it.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-6 is-hidden-touch" data-sal="slide-left">
            <div className="p-6">
              <img
                className="
						  is-relative is-radius is-fullwidth is-object-cover is-radius
						"
                src={fixingBugsSvg}
                alt=""
                data-config-id="01_image"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        data-section-id="3"
        data-category="howitworks"
        className="section mb-6"
      >
        <h1 className="title is-size-1 has-text-centered">
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
        <div className="columns py-3 is-centered is-vcentered">
          <div className="column is-6">
            <div className="p-6">
              <img
                src={masterPlanSvg}
                alt="learning as a loop"
                data-config-id="01_image"
                data-sal="slide-right"
              />
            </div>
          </div>
          <div className="column pr-6" data-sal="slide-left">
            <div className="mb-6">
              <h2 className="mt-4 title " data-config-id="01_header">
                How it works ?
              </h2>
            </div>
            <div className="is-flex mb-6">
              <div>
                <h1
                  className="title is-4 is-spaced mb-3"
                  data-config-id="header1"
                >
                  1. Diagnosis
                </h1>
                <p className="subtitle is-5" data-config-id="desc1">
                  We leverage bleeding edge advancements in learning science as
                  well as behavorial psychology to build short modules.
                </p>
              </div>
            </div>
            <div className="is-flex mb-6 ">
              <div>
                <h1
                  className="title is-4 is-spaced mb-3"
                  data-config-id="header2"
                >
                  2. Treatment
                </h1>
                <p className="subtitle is-5" data-config-id="desc2">
                  We use the latest in natural language processing (NLP) and
                  automated speech recognition (ASR) to get even deeper insights
                  into your skills level.
                </p>
              </div>
            </div>
            <div className="is-flex">
              <div>
                <h1
                  className="title is-4 is-spaced mb-3"
                  data-config-id="header3"
                >
                  3. Re-evaluation
                </h1>
                <p className="subtitle is-5" data-config-id="desc3">
                  Our A.I. and IELTS certified teachers work together to assess the effect of treatment in step 2 and go back to step 1 with new set of exercises that help you take it to the next level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <div className="container">
          <div className="columns is-8 is-variable">
            <div className="column is-6">
              <div className="card" data-sal="slide-right">
                <div className="card-image">
                  <figure className="image">
                    <StaticImage
                      src="../images/undraw_typewriter_i8xd.svg"
                      alt="Writing"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title">Writing</p>
                      <p className="subtitle is-6">
                        Most difficult of all task to get a high score on
                      </p>
                    </div>
                  </div>

                  <div className="content">
                    Transferring your thoughts in a structured way isn't
                    enough. One needs to show use of complex grammar, lexical
                    diversity and hundred other things. Our AI assesses your
                    writing style and teaches you to break bad habits and
                    build new ones.
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="card" data-sal="slide-left">
                <div className="card-image">
                  <figure className="image">
                    <StaticImage
                      src="../images/undraw_getting_coffee_wntr.svg"
                      // src="../images/undraw_candidate_ubwv.svg"
                      alt="Speaking"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title">Speaking</p>
                      <p className="subtitle is-6">Another difficult task</p>
                    </div>
                  </div>

                  <div className="content">
                    Once we assess your speaking level. We provide self-paced
                    conversation modules. This improves confidence and teaches
                    you the art of discourse.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-8 is-variable">
            <div className="column is-6">
              <div className="card" data-sal="slide-right">
                <div className="card-image">
                  <figure className="image">
                    <StaticImage
                      src="../images/undraw_studying_s3l7.svg"
                      alt="Reading"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title">Reading</p>
                      <p className="subtitle is-6">
                        Tests comprehension skills
                      </p>
                    </div>
                  </div>

                  <div className="content">
                    Candidate needs to understand the text beyond just fact
                    retrieval. This requires sound reading comprehension
                    skills and the vocabulary required to understand it.
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="card" data-sal="slide-left">
                  <div className="card-image">
                    <figure className="image">
                      <StaticImage
                        src="../images/undraw_walk_in_the_city_1ma6.svg"
                        alt="Listening"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title">Listening</p>
                        <p className="subtitle is-6">
                          Easy to score high but full marks is tricky
                        </p>
                      </div>
                    </div>

                    <div className="content">
                      We train your ear to listen to the types of information
                      asked in IELTS tests. Different accents, speed, pitch and
                      cultural dialects are some of the ways listening tests
                      will test your ability. e.g.{" "}
                      <em>know what corner of 5th and 8th means ?</em>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Midsection;
