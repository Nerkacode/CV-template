import React from 'react';
import data from './data';

import './index.scss';

// zemiau esancioje funkcijoje figuriniuose skliaustuose {} rasome paprasta js scripta

function Header() {
  return (
    <header className="Header">
      <h1>{data.name}</h1>
      <hr />
      <p className="Header--contact">
        {data.contacts.phone.label} {data.contacts.phone.value}
      </p>
      <p className="Header--contact">
        {data.contacts.email.label}{' '}
        <a
          href={`mailto:${data.contacts.email.value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.contacts.email.value}
        </a>
      </p>
      <p className="Header--summary">{data.summary}</p>
      <img
        className="Header--profile-picture"
        src={data.picture.src}
        alt={data.picture.alt}
      />
    </header>
  );
}

export default Header;
