import React from "react";
import "./style.scss";
import { StaticImage } from "gatsby-plugin-image";

const ExercisesDetails = () => {
  return (
    <>
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

export default ExercisesDetails;
