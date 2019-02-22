import React from 'react';

function IconLink(props) {
  // icon: Icon, tai tas pats kas const Icon = icon;, cia del to kad mums zemiau reikia komponento is didziosios raides <Icon />
  const { href, target, icon: Icon } = props;

  return (
    <a href={href} target={target} rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

export default IconLink;
