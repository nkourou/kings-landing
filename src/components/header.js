import React, {useState, useEffect, useRef} from "react";
import patternImg from "../images/pattern.png";
import dashboardImg from "../images/dashboard.png";
import "./style.scss";
import Typed from "typed.js";
import {FaRegPlayCircle, FaMicrophone} from 'react-icons/fa';

// class Header extends React.Component {
const Header = () => {
  // determined if page has scrolled and if the view is on mobile
  const [state, setState] = useState({
    scrolled: false,
  });

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== state.scrolled) {
        setState({
          scrolled: !state.scrolled,
        });
      }
    };
    document.addEventListener("scroll", handleScroll, {passive: true});
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [state.scrolled]);

  const vidRef = useRef(null);
  const vidButtonRef = useRef(null);
  const playVideo = () => {
    vidRef.current.play()
    // hide overlay play button styles, set by 'video__play-button'
    vidButtonRef.current.classList.add('is-playing');
  };
  const pauseVideo = () => {
    vidRef.current.pause();
    // show overlay play button styles, set by 'video__play-button'
    vidButtonRef.current.classList.remove('is-playing');
  };
  const handleToggleVideo = () => (vidRef.current.paused ? playVideo() : pauseVideo());

  return (
    <section
      id="headers"
      data-section-id="1"
      data-category="headers"
      className="section is-background-contain is-background-no-repeat has-background-white-bis"
    >
      <a
        className={`button is-primary is-rounded is-size-5 is-hidden-mobile has-text-weight-bold tertiary-header-action ${ state.scrolled ? "" : "is-hidden"
          }`}
        href="https://app.wuruzeka.com/auth/sign-up"
      >
        Try for free
      </a>
      {/* TODO: add in future      
      <div className="header-background-icons has-text-grey-light">
        <FaMicrophone />
      </div> */}
      <div className="mx-auto m-6 has-text-centered">
        <h1 className="title is-size-1-desktop text-5xl is-size-2-touch">
          <span data-config-id="header1 is-inline-block">Improve your </span>
          <span className="block">
            <br />
          </span>
          <span
            className="has-text-danger is-inline-block pr-2"
            data-config-id="header2"
          >
            IELTS
          </span>
          <span className="block is-hidden-desktop">
            <br />
          </span>
          <TypedText />
          <span className="block is-hidden-desktop">
            <br />
          </span>
          <span data-config-id="header4" className="ml-2">
            scores
          </span>
        </h1>
        <h2
          className="subtitle mt-2 is-size-3-desktop is-size-4-touch"
          data-config-id="description"
        >
          {/* Let AI fill your gaps in english with targeted learning! */}
          AI-Powered Personalized Learning for Unmatched Progress!
        </h2>
        <div className="buttons is-centered">
          <a href="https://app.wuruzeka.com/auth/sign-up"
            className="
                      button
                      is-primary is-rounded is-size-4-desktop
                      has-text-weight-bold
                      "
            data-config-id="primary-hero"
          >
            Start with a free mock test
          </a>
        </div>
        {/* <a
            className="button is-danger is-rounded is-light is-size-4-desktop is-hidden-mobile"
            href="https://ieltsregistration.britishcouncil.org/test-chooser"
            data-config-id="secondary-hero"
          >
            Book IELTS
          </a> */}
      </div>
      {/*  data-sal="slide-up" */}
      <div className="mx-auto is-relative is-centered container">
        <img src={patternImg} alt="pattern background" />
        <figure className="header-image image" id="hero-video-wrapper">
          {/* <img src={dashboardImg} alt="Gif of platform" /> */}
          <video
            id="shuffle-video" muted="" playsInline="" playbackRate="0.5"
            poster={dashboardImg}
            src="https://storage.googleapis.com/kubi-speech/vids/wuruzeka-hero.mp4" type="video/mp4"
            className="header-video" ref={vidRef} onClick={handleToggleVideo}></video>
          {/* <video
              ref={vidRef}
              autoPlay="" loop="false" 
              src="https://static.shuffle.dev/files/1692476908/shuffle-hero.mp4"
              type="video/mp4"
            /> */}
          <button ref={vidButtonRef} onClick={handleToggleVideo} className="video-play-btn has-text-grey-dark">
            <FaRegPlayCircle />
          </button>
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

  return <span className="txt-rotate pl-2 pr-4 is-inline-block" ref={el} />;
};
