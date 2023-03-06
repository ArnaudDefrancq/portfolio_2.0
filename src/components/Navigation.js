import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation-list">
        <NavLink to="/">
          <li className="navigation-items">Accueil</li>
        </NavLink>
        <NavLink to="/project-page">
          <li className="navigation-items">Projets</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="navigation-items">Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
