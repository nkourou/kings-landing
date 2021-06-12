import React, { useState, useEffect } from "react";
import Emoji from './emoji';
import { Link } from 'gatsby';


const Cookie = () => {
  const [isHaveCookieConsent, setState] = useState(undefined);
  
  useEffect(() => {
    setState(localStorage.getItem('has_cookie_consent') === 'true')
  }, [])

  const enableCookies = () => {
    localStorage.setItem('has_cookie_consent', true)
    setState(true)
  };

  return (
      <div
        role="dialog"
        aria-live="polite"
        aria-label="cookieconsent"
        aria-describedby="cookieconsent:desc"
        className={`cookie-consent ${isHaveCookieConsent ? 'is-hidden': ''}`}
      >
        <div className="content">
          <p id="cookieconsent:desc" className="cc-message">
            We use cookies to ensure you get the best experience on our website.
            <br />
            <Link
              aria-label="learn more about cookies"
              to="/privacy"
              target="_blank"
            >
              Our privacy policy
            </Link>
            .
          </p>
        </div>
        <div className="cc-compliance">
          <button
            aria-label="dismiss cookie message"
            className="button is-warning has-text-weight-bold"
            onClick={enableCookies}
          >
          <Emoji emoji='🍪' className="mr-2" /> Gotcha!
          </button>
        </div>
      </div>
  );
};

export default Cookie;
