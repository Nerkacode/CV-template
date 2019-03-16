import React from 'react';
import PropTypes from 'prop-types';

function IconLink(props) {
  // icon: Icon, tai tas pats kas const Icon = icon;, cia del to kad mums zemiau reikia komponento is didziosios raides <Icon />
  const { href, target, icon: Icon } = props;

  return (
    <a href={href} target={target} rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

// cia aprasysime propTypes, t.y. nurodysime kokiu duomenu tipo tikimes, tai pat ir default reiksmes
// PropTypes - su dviem didziosiomis raidemis ateina modulio, kuri isiraseme (React komanda atskyre i atskira moduli)
// propTypes ir defaultProps - su pirmaja mazaja raide ateina is React
// props tipai gali buti ivairus nuo stringo iki funkcijos, objekto ir pan.
IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

IconLink.defaultProps = {
  target: '_blank',
};

export default IconLink;
