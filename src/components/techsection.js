import React from "react";
import {FaRegCheckCircle} from "react-icons/fa";
import {StaticImage} from "gatsby-plugin-image";

const TechSection = () => {
  return (
    <>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-7">
              <h1 className="title is-size-1">Lost in do's and dont's ?</h1>
              <h2 className="subtitle is-size-4 has-text-justified">
                Not only does the traditional way lacks the idea of tackling
                IELTS, they also fail considerably in coaching a student based
                on their calibre. Our innovative approach decides the models,
                excercises, practice sets, number and type of sessions required
                for a student based on their specific needs.
              </h2>
            </div>
            <StaticImage
              src="../images/undraw_wishes_icyp.svg"
              alt="tech image"
            />
          </div>
        </section>

        <section className="section">
          <h1 className="title is-size-2">Artificial Intelligence at core</h1>
          <h2>
            We are a science oriented company, that means we quantify each
            aspect of our decision making and measure using real world data. We
            are data-driven in everything we do!
          </h2>

          <ul className="mt-5">
            We use a combination of following disciplines of Machine learning
            (ML):
            <li>
              <p>
                <FaRegCheckCircle className="mr-2 has-text-primary" />
                Natural language processing (NLP) to read your written tests and
                generate the right content for you
              </p>
            </li>
            <li>
              <p>
                <FaRegCheckCircle className="mr-2 has-text-primary" />
                Automated speech recognition (ASR) to listen and analyse your
                speech to identify areas of improvement
              </p>
            </li>
            <li>
              <p>
                <FaRegCheckCircle className="mr-2 has-text-primary" />
                Recommendation systems just like e-commerce sites but instead to
                suggest the right set of questions to you
              </p>
            </li>
            <li>
              <p>
                <FaRegCheckCircle className="mr-2 has-text-primary" />
                Learning science to make sure you are learning with every
                session and to adaptively help you revise content that you might
                be ready to forget e.g. vocabulary
              </p>
            </li>
          </ul>
        </section>

        <section className="section">
          <h1 className="is-size-2">
            <span className="speaking-text">Speaking</span>
          </h1>
          <h2>
            This is one of the most difficult tasks to get good score on. It
            also is given higher weight when evaluating your profile by
            universities and countries. You not only have to be good at
            discourse but also lexical range, task efficiency, grammar and
            hunderds of other things. Just recording and listening doesn't give
            enough feedback and 1:1 tutoring is costly to happen at higher
            frequency as required. We bridge that gap by only bringing in IELTS
            certified teachers when needed, that means you can get unlimited
            feedback via AI while in background the AI lets the teacher know
            when help is required. This saves cost and allows you to practice to
            your hearts content.
          </h2>
        </section>

        <section className="section">
          <h1 className="is-size-2">
            <span className="writing-text">Writing</span>
          </h1>
          <div className="content">
            Transferring your thoughts in a structured way isn't enough. One
            needs to show use of complex grammar, lexical diversity and hundred
            other things. Our AI assesses your writing style and teaches you to
            break bad habits and build new ones.
          </div>
          {/* <form>
            <audio></audio>
            <div className="field">
              <label className="label">
                What would be a synonym of getting scared ?
              </label>
              <div className="control">
                <div className="select">
                  <select>
                    <option>Select answer</option>
                    <option>Petrified</option>
                    <option>Horrid</option>
                    <option>Horrified</option>
                    <option>Patronized</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">No idea!</button>
              </div>
            </div>
          </form> */}
        </section>

        <section className="section">
          <h1 className="is-size-2">
            <span className="listening-text">Listening</span>
          </h1>
          {/* <h3>
            See if you can extract information from this audio and answer the
            following question:
          </h3> */}
          <div className="content">
            We train your ear to listen to the types of information
            asked in IELTS tests. Different accents, speed, pitch and
            cultural dialects are some of the ways listening tests
            will test your ability. e.g.{" "}
            <em>know what corner of 5th and 8th means ?</em>
          </div>
          {/* <form>
            <audio></audio>
            <div className="field">
              <label className="label">
                Where did Berney ask Dave to meet today ?
              </label>
              <div className="control">
                <div className="select">
                  <select>
                    <option>Select answer</option>
                    <option>Corner of 43rd St & 8th Ave</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">No idea!</button>
              </div>
            </div>
          </form> */}
        </section>

        <section className="section">
          <h1 className="is-size-2">
            <span className="reading-text">Reading</span>
          </h1>
          <p>
            It's easier to score high on reading but not full. You're not alone,
            and happens to everyone. Average scores for reading are high but
            only a few get full. This is because of sub-optimal comprehension
            skills or not being able to understand the context due to complex
            vocabulary. Our AI provides you with short snippets and asks
            questions which improves your comprehension. These snippets are
            special because they are generated especially for you based on your
            weaknesses.
          </p>
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

        <section className="section has-text-centered">
          <h1 className="writing-text is-size-1">
            Thousands of exercise modules, <br /> you only do the ones that
            improve you!
          </h1>
          <a
            className="mt-4
          button
          is-primary is-rounded is-large
          has-text-weight-bold
          "
            href="https://app.wuruzeka.com/auth/sign-up"
          >
            Try now for free
          </a>
        </section>
      </div>
    </>
  );
};

export default TechSection;
