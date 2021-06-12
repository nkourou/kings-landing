import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'gatsby';
import Emoji from './emoji';
import { FaRegCheckCircle } from 'react-icons/fa';


const Pricing = () => {
  return (

    <section id="pricing" className="mb-6">
      <div className="container">
        <div className="columns is-centered px-3">
          <div className="column is-three-quarters">
            <div className="card has-background-warning-light">
              <header className="card-header">
                <p className="card-header-title is-size-2">
                  Pricing
                </p>
              </header>
              <div className="card-content">
                <div className="content is-size-5">
                 <ul className="mb-6">
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Unlimited AI diagnosis, evaluations and exercises
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Unlimited access to past and upcoming webinars
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Free of cost question-answering with IELTS certified teachers
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        2 writing and 1 speaking evaluation by IELTS certified teachers
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Pay minimal for further evaluations if needed
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Free trial for a week to use at your hearts content <Emoji emoji='🎉'/>
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Get additional cashback by uploading your official IELTS results
                      </p>
                    </li>
                  </ul>
                  <button className="button is-fullwidth is-success is-large is-outlined">
                    Sign up now to start free
                  </button>
                  <p className="help has-text-centered">No credit card needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing
