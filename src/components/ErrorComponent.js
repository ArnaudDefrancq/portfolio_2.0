import React from "react";
import { NavLink } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div className="error-page">
      <div className="error-page-items">
        <h1>Erreur 404</h1>
        <NavLink to="/">
          <h2>
            Retour à l'accueil <i className="fas fa-home"></i>
          </h2>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorComponent;
