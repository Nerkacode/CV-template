import React from 'react';
import PropTypes from 'prop-types';
import data from './data';
import './index.scss';

// zemiau esancioje funkcijoje figuriniuose skliaustuose {} rasome paprasta js scripta

function Header(props) {
  const { language, onLanguage } = props;
  const { name, contacts, location, summary, picture } = data[language];

  return (
    <header className="Header">
      <h1>{name}</h1>
      <hr />
      <p className="Header--contact">
        {contacts.phone.label} {contacts.phone.value}
      </p>
      <p className="Header--contact">
        {contacts.email.label}{' '}
        <a
          href={`mailto:${contacts.email.value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contacts.email.value}
        </a>
      </p>
      <p className="Header--contact">{location}</p>
      <p className="Header--summary">{summary}</p>
      <img
        className="Header--profile-picture"
        src={picture.src}
        alt={picture.alt}
      />
      <select
        onChange={e => onLanguage(e.target.value)}
        className="Header--language-select"
      >
        <option value="en">EN</option>
        <option value="lt">LT</option>
      </select>
    </header>
  );
}

Header.propTypes = {
  language: PropTypes.oneOf(['en', 'lt']),
  onLanguage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  language: 'en',
};

export default Header;
