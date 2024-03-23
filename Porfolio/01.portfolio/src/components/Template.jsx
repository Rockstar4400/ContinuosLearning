import React from 'react';
import reactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';

function Template () {
  
    return(
    <div id="template">
      <main>
        <div
          className="pieces"
          style=
          {{ backgroundImage: "url(/img/normal.jpg)" }}
          data-img-alt="url(/img/alt.jpg)"
          data-img-code="url(/img/code.jpg)"
        ></div>
        <div className="overlay overlay--hidden"></div>
        <div className="content">
          <div className="content__inner">
            <div className="content__top">
              <h2 className="title">
                <span
                  className="title__inner mode mode--design"
                  data-switch
                  data-glitch
                >
                  Alberto Del Angel
                </span>
              </h2>
              <div className="controls">
                <button className="btn btn--menu mode mode--design" data-switch>
                </button>
              </div>
            </div>
            <div className="menu">
              <ul className="menu__inner">
                <li className="menu__item">
                  <Link
                    to="/Blog" onClick={setPress}
                    className="menu__link"
                    data-switch
                  >
                    Blog
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    to="/Skills"
                    className="menu__link"
                    data-switch
                  >
                    Skills
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/Portfolio" className="menu__link" data-switch>
                    Portfolio
                  </Link>
                </li>
                <li className="menu__item">
                  <a 
                    href="https://app.codesignal.com/profile/rockstar4400" 
                    className="menu__link" 
                    data-switch>
                    Challenges
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu--code">
              <ul className="menu__inner">
                <li className="menu__item">
                  <Link to="/Current" className="menu__link" data-switch>
                    Current Projects
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/Experience" className="menu__link" data-switch>
                    Experience
                  </Link>
                </li>
                <li className="menu__item">
                  <a href="https://www.udemy.com/user/alberto-del-angel-2/" className="menu__link" data-switch>
                    Learning
                  </a>
                </li>
                <li className="menu__item">
                  <Link to="/About" 
                  //onClick={handleToggle}
                   className="menu__link" data-switch>
                    About me
                  </Link>
                  {/* <button
                    onClick={() => 
                    navigate("/About")}
                  >
                    About
                  </button> */}
                </li>
                <li className="menu__item">
                  <a
                    href="https://github.com/Rockstar4400"
                    className="menu__link"
                    data-switch
                  >
                    {`>`} Github
                  </a>
                </li>
              </ul>
            </div>
            <div className="content__bottom">
              <div className="switch mode mode--design">
                <Link to="/" className="switch__item switch__item--current">
                  Full Stack Developer
                </Link>
                <Link to="/" className="switch__item">
                  <span className="mode mode--design" data-switch data-glitch>
                    Software Engineer
                  </span>
                </Link>
              </div>
              <div className="link-wrap">
                <a
                  href="https://www.linkedin.com/in/alberto-del-angel-94a60062/"
                  className="contact-link mode mode--design"
                  data-switch
                  data-glitch
                >
                  Linked in
                </a>
              </div>
            </div>
            <div className='reactlogo'>
            <p>Made with:</p>
            <a
              className="pater mode mode--design"
              href="https://reactjs.org/"
            >
              <img src={reactLogo} className="logo react" alt="React logo" />
              <h2 className="pater__title" aria-label="Hired"></h2>
            </a>
            </div>
          </div>
        </div>
        <div className="loading"></div>
      </main>
    </div>
        );
}
export default Template;