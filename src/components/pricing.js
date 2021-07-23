import React from 'react';
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
                <span className="tag is-warning is-large is-size-1 has-text-weight-bold">
                    $49
                </span>
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
                        Daily classes and a dedicated IELTS expert assigned to you
                      </p>
                    </li>
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Free of cost 24x7 question-answering with IELTS experts
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
                    {/* <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Free trial for a week to use at your hearts content <Emoji emoji='🎉'/>
                      </p>
                    </li> */}
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Get 20% cashback by uploading your official IELTS results
                      </p>
                    </li>
                  </ul>
                  <article class="message is-warning">
                    <div class="message-body">
                      Free trial for a week to use at your hearts content <Emoji emoji='🎉'/>
                    </div>
                  </article>
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
