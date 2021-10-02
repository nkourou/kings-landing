import React from 'react';
import Emoji from './emoji';
import { FaRegCheckCircle } from 'react-icons/fa';


const Pricing = () => {
  const [value, setValue] = React.useState({})
  const [serverResponse, setServerResponse] = React.useState(``)
  // Listen to form changes and save them.
  function handleChange(e) {
    value[e.target.id] = e.target.value
    setServerResponse(``)
    setValue({ ...value })
  }
  // When the form is submitted, send the form values
  // to our function for processing.
  async function onSubmit(e) {
    setServerResponse('loading')
    e.preventDefault()
    const response = await window
      .fetch(`/api/signup-form`, {
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(value),
      })
      .then(res => res.json())
    setServerResponse(response)
  }

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
                {/* <span className="tag is-warning is-large is-size-1 has-text-weight-bold">
                    $49
                </span> */}
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
                    {/* <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Unlimited access to past and upcoming webinars
                      </p>
                    </li> */}
                    <li>
                      <p>
                        <FaRegCheckCircle className="mr-2 has-text-success"/>
                        Daily classes and a dedicated IELTS expert assigned to you
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
                  {/* <article className="message is-warning">
                    <div className="message-body">
                      Free trial for a week to use at your hearts content <Emoji emoji='🎉'/>
                    </div>
                  </article> */}
                  {/* <form method="post" action="https://getform.io/f/11d11e9e-066b-45c5-a194-529634758a02"> */}
                  
                    <form method="post" onSubmit={onSubmit} action="/api/signup-form">
                      {/* <label htmlFor="email">
                      </label> */}
                      <div className="field has-addons">
                        <div className="control is-expanded">
                          <input type="email" name="email" id="email" className="input is-rounded is-large is-success" placeholder="Your e-mail address" value={value[`email`] || ``}
                            onChange={handleChange} disabled={serverResponse === 'OK' || serverResponse === 'loading'}/>
                        </div>
                        <div className="control">
                          <button className={`button is-fullwidth is-success is-large  is-rounded ${serverResponse === "loading" ? "is-loading": ""}`} type="submit" disabled={serverResponse === 'OK'}>
                          {serverResponse === "OK" ?
                            <span>Click here to get invited!</span> :
                            <span>Tada <Emoji emoji='🎉' /></span>
                          }
                        </button>
                        </div>
                    </div>
                    <p className="help has-text-centered">
                      {serverResponse === 'OK' ?
                        <span>Be on the lookout for your special invite link!</span> :
                        <span>We don't spam, promise!</span>
                      }
                    </p>
                  </form>
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
