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
                  <Emoji emoji='💰'/> Pricing
                </p>
                <button className="button card-header-icon is-warning is-large is-size-2 has-text-weight-bold" id="pricing-tag">
                    <span><span class="price-tag has-text-grey">$49</span> $29</span>
                    <span class='help tag has-background-warning-light'><Emoji emoji='🎉'/> 40% off </span>
                </button>
              </header>
              <div className="card-content">
                <div className="content is-size-4">
                 <ul className="mb-6 no-disc">
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
                    {/* <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Daily classes and a dedicated IELTS expert assigned to you
                        A dedicated IELTS expert assigned to you <Emoji emoji='🧞‍♂️'/>
                      </p>
                    </li> */}
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Unlimited question-answering with IELTS experts
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
                        100 Reading, Writing, Speaking and Listening mock tests
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
                        100% satisfaction peace-of-mind money back guarantee
                      </p>
                    </li>
                    {/* <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Free trial for a week to use at your hearts content <Emoji emoji='😍'/>
                      </p>
                    </li> */}
                    {/* <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Get 20% cashback by uploading your official IELTS results
                      </p>
                    </li> */}
                  </ul>
                  <div className="has-text-centered">
                      <a href="https://app.wuruzeka.com/auth/sign-up" 
                      className="button is-primary is-large is-rounded has-text-weight-semibold">
                        Try for free today!
                      </a>
                  </div>
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
