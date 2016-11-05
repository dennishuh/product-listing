import React from 'react';
import { IndexLink } from 'react-router';

import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header clearfix">
      <IndexLink to="/"><img src="/images/logo.png" alt="codetest"/></IndexLink>
    </div>
  )
}

export default Header;
