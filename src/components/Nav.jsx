import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        AOE
        <span>Units</span>
      </div>
      <div className="links">
        <NavLink className="link" exact to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/units">
          Units
        </NavLink>
      </div>
    </nav>
  );
}
