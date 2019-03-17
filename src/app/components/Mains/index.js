import React from 'react';
import PropTypes from 'prop-types';
import {
  education,
  experiance,
  achievements,
  technologies,
  hobies,
  languages,
  strengths,
} from './data';
import './index.scss';

function Main(props) {
  const { language } = props;

  return (
    <main>
      <section className="Section">
        <div className="Section--left">
          <h3>{education[language].label}</h3>
        </div>
        <div className="Section--right">
          <h3>{education[language].school}</h3>
          <p>
            <span>{education[language].major.label}</span>
          </p>
          <p>{education[language].major.value}</p>
          <p>
            <span>{education[language].minor.label}</span>
          </p>
          <p>{education[language].minor.value}</p>
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{experiance[language].label}</h3>
        </div>
        <div className="Section--right">
          {experiance[language].list.map(
            ({ link, logo, title, subtitle, responsibilities }, index) => (
              <div key={index}>
                <div className="Section--right-job-title">
                  <a href={link} target="_blanc">
                    <img src={logo.src} alt={logo.alt} title={title} />
                  </a>
                  <span>{subtitle}</span>
                </div>
                <ul>
                  {responsibilities.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{achievements[language].label}</h3>
        </div>
        <div className="Section--right">
          {achievements[language].list.map(
            ({ title, subtitle, responsibilities }, index) => (
              <div key={index}>
                <div className="Section--right-job-title">
                  <h3>{title}</h3>
                </div>
                <p>{subtitle}</p>
                <ul>
                  {responsibilities.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{technologies[language].label}</h3>
        </div>
        <div className="Section--right">
          {technologies[language].list.map(({ link, logo, title }, index) => (
            <div className="Section--right-technologies" key={index}>
              <div>
                <a href={link} target="_blanc">
                  <img src={logo.src} alt={logo.alt} title={title} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{strengths[language].label}</h3>
        </div>
        <div className="Section--right">
          {strengths[language].list.map((value, i) => (
            <p key={i}> {value} </p>
          ))}
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{languages[language].label}</h3>
        </div>
        <div className="Section--right">
          {languages[language].list.map((value, i) => (
            <p key={i}> {value} </p>
          ))}
        </div>
      </section>

      <section className="Section">
        <div className="Section--left">
          <h3>{hobies[language].label}</h3>
        </div>
        <div className="Section--right">
          {hobies[language].list.map((value, i) => (
            <span key={i}> {value} </span>
          ))}
        </div>
      </section>
    </main>
  );
}

Main.propTypes = {
  language: PropTypes.oneOf(['en', 'lt']),
};

Main.defaultProps = {
  language: 'en',
};

export default Main;
