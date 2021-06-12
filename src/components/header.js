import React, { useState, useEffect } from "react";
import patternImg from "../images/pattern.png";
import dashboardImg from "../images/dashboard.png";
import "./style.scss";
import Typed from "typed.js";

// class Header extends React.Component {
const Header = () => {
  // determined if page has scrolled and if the view is on mobile
  const [state, setState] = useState({
    scrolled: false,
  });

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== state.scrolled) {
        setState({
          scrolled: !state.scrolled,
        });
      }
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [state.scrolled]);

  return (
  <section
    id="headers"
    data-section-id="1"
    data-category="headers"
    className="section is-background-contain is-background-no-repeat"
  >
      <button className={`button is-primary is-rounded is-size-5 is-hidden-mobile has-text-weight-bold tertiary-header-action ${state.scrolled? '': 'is-hidden'}`}> Try demo </button>

      <div className="mx-auto has-text-centered">
        <h1 className="title is-size-1-desktop text-5xl is-size-2-touch">
          <span data-config-id="header1 is-inline-block">Improve your </span>
          <span className="block"><br/></span>
          <span
            className="has-text-danger is-inline-block pr-2"
            data-config-id="header2"
          >
            IELTS
          </span>
          <span className="block is-hidden-desktop"><br/></span>
          <TypedText />
          <span className="block is-hidden-desktop"><br/></span>
          <span data-config-id="header4" className="ml-2">scores</span>
        </h1>
        <h2
          className="subtitle is-size-4-desktop is-size-5-touch"
          data-config-id="description"
        >
          Let AI find gaps and improve with targeted learning!
        </h2>
        <div className="buttons is-centered">
          <a
            className="
          button
          is-primary is-rounded is-size-4-desktop
          has-text-weight-bold
          "
            href="https://app.ieltsgeek.com"
            data-config-id="primary-hero"
          >
            Try now for free
          </a>
          <a
            className="button is-danger is-rounded is-light is-size-4-desktop is-hidden-mobile"
            href="https://ieltsregistration.britishcouncil.org/test-chooser"
            data-config-id="secondary-hero"
          >
            Book IELTS
          </a>
        </div>
      </div>
      <div className="mx-auto is-relative is-centered" data-sal="slide-up">
        <img src={patternImg} alt="pattern background" />
        <figure className="header-image image">
          <img
            src={dashboardImg}
            alt="Gif of platform"
          />
        </figure>
      </div>
  </section>
  );
};

export default Header;

const TypedText = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  useEffect(() => {
    const options = {
      loop: true,
      smartBackspace: false,
      backDelay: 1000,
      backSpeed: 50,
      typeSpeed: 100,
      showCursor: false,
      shuffle: false,
      strings: ["reading", "listening", "writing", "speaking"],
      preStringTyped: (e, t) => {
        const a = t.el;
        e = t.strings[e];
        return "speaking" === e
          ? (a.classList.remove(
              "wrap-listening",
              "wrap-writing",
              "wrap-reading"
            ),
            a.classList.add("wrap-speaking"))
          : "listening" === e
          ? (a.classList.remove(
              "wrap-speaking",
              "wrap-writing",
              "wrap-reading"
            ),
            a.classList.add("wrap-listening"))
          : "writing" === e
          ? (a.classList.remove(
              "wrap-speaking",
              "wrap-listening",
              "wrap-reading"
            ),
            a.classList.add("wrap-writing"))
          : "reading" === e
          ? (a.classList.remove(
              "wrap-speaking",
              "wrap-writing",
              "wrap-listening"
            ),
            a.classList.add("wrap-reading"))
          : (a.classList.remove(
              "wrap-listening",
              "wrap-writing",
              "wrap-reading"
            ),
            a.classList.add("wrap-speaking"));
      },
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <span
      className="txt-rotate pl-2 pr-4 is-inline-block"
      ref={el}
    />
  );
};
