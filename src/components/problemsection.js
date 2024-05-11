import React from "react";
import "./style.scss";
import Emoji from "./emoji";

const ProblemSection = () => {
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
                {/* 3.5+ Million test takers */}
                Stuck at 6.5 <Emoji emoji="😕" /> ?
              </h3>
              <div className="card-content">
                <p className="subtitle is-size-4">
                  {/* The average IELTS band score of <strong>6.5</strong> is less than the minimum required */}
                  {/* for immigration to countries like Canada, and Australia. */}
                  {/* The average IELTS band of <strong>6.5</strong> is less than  */}
                  {/* minimum required for immigration to Canada, UK and Australia. */}
                  In 2024, students get to Band 7 using tools, not information. 
                  Band 7 is the minimum for immigrating to Canada, UK and Australia.
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
                Passive learning sucks <Emoji emoji="👎🏻" />
              </h3>
              <div className="card-content">
                <p className="subtitle is-size-4">
                  Watching videos, giving mock tests over and over again is 
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
              Wuru Zeka magic <Emoji emoji="🪄" />
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
    </>
  );
};

export default ProblemSection;
