import React from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/Nav.css';

const Nav = ({navClick}) => {
  function onNavClick(e) {
    navClick(e.target);
  }
  return (
    <div className="row nav-bar">
      <div className="col-xs-12">
        <ul className="nav nav-tabs">
          <li role="presentation"><IndexLink to="/" activeClassName="active" data-products="all" onClick={onNavClick}>All Prodcuts</IndexLink></li>
          <li role="presentation"><Link to="/products1" activeClassName="active" data-products="0" onClick={onNavClick}>Products 1</Link></li>
          <li role="presentation"><Link to="/products2" activeClassName="active" data-products="1" onClick={onNavClick}>Products 2</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;
