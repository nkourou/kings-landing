import React from 'react';
import Emoji from './emoji';
import { FaRegCheckCircle } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik'


const Pricing = () => {
  return (
    <section id="pricing" className="mb-6">
      <div className="container">
        <div className="columns is-centered px-3">
          <div className="column is-two-thirds">
            <div className="card has-background-warning-light">
              <header className="card-header">
                <p className="card-header-title is-size-2">
                  <Emoji emoji='💰'/> Pricing
                </p>
                <span className="tag is-warning is-large is-size-2 has-text-weight-bold has-text-right" id="pricing-tag">
                    $69
                </span>
              </header>
              <div className="card-content">
                <div className="content is-size-4">
                 <ul className="mb-6">
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Unlimited AI <Emoji emoji='🦄'/> diagnosis, evaluations and exercises
                      </p>
                    </li>
                    {/* <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Unlimited access to past and upcoming webinars
                      </p>
                    </li> */}
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        {/* Daily classes and a dedicated IELTS expert assigned to you */}
                        A dedicated IELTS expert assigned to you <Emoji emoji='🧞‍♂️'/>
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Free of cost 24x7 unlimited question-answering with IELTS experts
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
                        Unlimited Reading and Listening mock tests
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Pay minimal for further evaluations only if needed
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Free trial for a week to use at your hearts content <Emoji emoji='😍'/>
                      </p>
                    </li>
                    {/* <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Get 20% cashback by uploading your official IELTS results
                      </p>
                    </li> */}
                  </ul>
                  <a href="https://app.wuruzeka.com/auth/sign-up" className="button is-primary is-large is-rounded">
                    <span>Try for free today!</span>
                  </a>
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
// - Unlimited AI diagnosis, evaluations and exercises
// - A dedicated IELTS expert assigned to you
// - Free of cost 24x7 unlimited question-answering with IELTS experts
// - 2 writing and 1 speaking evaluation by IELTS certified teachers
// - Unlimited Reading and Listening mock tests
// - Pay minimal for further evaluations only if needed
// - Get 20% cashback by uploading your official IELTS results
