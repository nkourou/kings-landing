import React from "react";
import "./style.scss";
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
        <div className="columns is-variable is-5">
          <div className="column is-4">
            <div className="card" data-sal="slide-left">
              {/* <StaticImage
                alt="3.5+ Million test takers"
                src="../images/undraw_Airport_re_oqk1.svg"
              /> */}
              {/* <FaGlobeAsia className="mr-2" /> */}
              <h3 className="title is-spaced is-size-3 has-text-centered pt-4">
                3.5+ Million test takers
              </h3>
              <div className="card-content">
                <p className="subtitle is-size-4">
                  The average IELTS band score of <strong>6.53</strong> is less than the minimum required.
                  {/* for immigration to countries like Canada, and Australia. */}
                </p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card" data-sal="slide-up">
              {/* <StaticImage
                alt="Passive learning"
                src="../images/undraw_book_lover_mkck.svg"
              /> */}
              <h3 className="title is-spaced is-size-3 has-text-centered pt-4">
                Passive learning <Emoji emoji="😕" />
              </h3>
              <div className="card-content">
                <p className="subtitle is-size-4">
                  Watching videos and giving mock tests over and over again is 
                  only practicing the same mistakes repeatedly.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card" data-sal="slide-left">
              {/* <StaticImage
                alt="We diagnose and fix it"
                src="../images/undraw_doctors_hwty.svg"
              /> */}
              <h3 className="title is-spaced is-size-3 has-text-centered pt-4">
              Wuru Zeka magic <Emoji emoji="🧙🏼‍♀️" />
              </h3>
              <div className="card-content">
                <p className="subtitle is-size-4">
                  Using personalized learning, AI not only fixes your weaknesses, 
                  but also reinforces your strengths.
                </p>
              </div>
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
                  Not only is the content personal to you, we also ramp up the excercises as the exam day reaches closer to optimize your target band scores. 
                  {/* Yes, our AI tunes your learning path after every module you do! */}
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
                  We use the latest in NLP, ASR and learning science to get deeper insights into your skills level. We build short modules that you can finish in less than 20 minutes.
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
                  However, in case you need 1:1 help, our teachers are here to offer support.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-6 is-hidden-touch" data-sal="slide-left">
            <div className="p-6">
              <StaticImage
                className="
						  is-relative is-radius is-fullwidth is-object-cover is-radius
						"
                src="../images/undraw_fixing_bugs_w7gi.svg"
                alt=""
                data-config-id="01_image"
              />
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
                        Most difficult to get a high score on
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
