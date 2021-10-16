import React from 'react';
import Emoji from './emoji';
import { FaRegCheckCircle } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik'


const Pricing = () => {
  // const [value, setValue] = React.useState({})
  const [serverResponse, setServerResponse] = React.useState(``)
  // Listen to form changes and save them.
  // function handleChange(e) {
  //   value[e.target.id] = e.target.value
  //   setServerResponse(``)
  //   setValue({ ...value })
  // }
  // When the form is submitted, send the form values
  // to our function for processing.
  async function onSubmit(values, actions) {
    actions.setSubmitting(false);
  
    setServerResponse('loading')
    // e.preventDefault()
    const response = await window
      .fetch(`/api/signup-form`, {
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      })
      .then(res => res.json())
    setServerResponse(response)
  }

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
                  
                    {/* <form method="post" onSubmit={onSubmit} action="/api/signup-form"> */}
                      {/* <label htmlFor="email">
                      </label> */}
                    {/* <div className="field has-addons"> */}
                        <Formik
                          initialValues={{
                            email: ''
                          }}
                        onSubmit={onSubmit}
                        validate={values => {
                          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                          const errors = {};
                          if(!values.email || !emailRegex.test(values.email)) {
                            errors.email = 'Valid Email Required'
                          }
                          return errors;
                        }}
                        >
                        {() => (
                          <Form>
                        <div className="field">
                            <div className="control has-text-centered">
                              <ErrorMessage name="email" />
                              <Field type="email" name="email" id="email" className="input is-rounded is-large is-primary" placeholder="Your e-mail address" disabled={serverResponse === 'OK' || serverResponse === 'loading'}/>
                              {/* <input type="email" name="email" id="email" className="input is-rounded is-large is-primary" placeholder="Your e-mail address" value={value[`email`] || ``}
                                onChange={handleChange} disabled={serverResponse === 'OK' || serverResponse === 'loading'}/> */}
                            </div>

                  </div>
                  <div className="field has-text-centered">
                    <div className="control ">
                      <button className={`button is-primary is-large  is-rounded ${serverResponse === "loading" ? "is-loading" : ""}`} type="submit" disabled={serverResponse === 'OK'}>
                        
                        {serverResponse === "OK" ?
                          <span>Tada <Emoji emoji='🎉' /></span> :
                          <span>Click here to get invited!</span>
                        }
                      </button>
                    </div>
                  </div>
                                              
                  </Form>
                        )}
                        </Formik>
                    <p className="help has-text-centered">
                      {serverResponse === 'OK' ?
                        <span>Be on the lookout for your special invite link!</span> :
                        <span>We don't spam, promise!</span>
                      }
                    </p>
                  {/* </form> */}
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
