import React from 'react';
import PropTypes from 'prop-types';
import { education, skills, experiance, hobies, references } from './data';
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
            <span>{education[language].major.label} </span>
            {education[language].major.value}
          </p>
          <p>
            <span>{education[language].minor.label} </span>
            {education[language].minor.value}
          </p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{skills[language].label}</h3>
        </div>
        <div className="Section--right">
          {skills[language].list.map(({ title, discription }, index) => (
            <div key={index}>
              <h3>{title}</h3>
              <p>{discription}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{experiance[language].label}</h3>
        </div>
        <div className="Section--right">
          {experiance[language].list.map(
            ({ title, subtitle, responsibilities }, index) => (
              <div key={index}>
                <div className="Section--right-job-title">
                  <h3>{title}</h3>
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
          <h3>{hobies[language].label}</h3>
        </div>
        <div className="Section--right">
          {hobies[language].list.map((value, i) => (
            <span key={i}> {value} </span>
          ))}
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>{references[language].label}</h3>
        </div>
        <div className="Section--right">
          <p>{references[language].list}</p>
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
