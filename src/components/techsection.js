import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

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

        <section className="section has-text-centered">
          <h1 className="writing-text is-size-1">
            Thousands of exercise modules, <br /> you only do the ones that
            improve you!
          </h1>
          <a
            className="
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
