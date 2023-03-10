import React from "react";
import Navigation from "../components/navigations/Navigation";
import Mouse from "../components/Mouse";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Mouse />
      <header>
        <Navigation />
      </header>
      <main className="contact-main">
        <div className="about-me-container">
          <h1 className="about-me-title">à propos</h1>
          <p className="about-me-content">
            Salut ! Moi c'est Arnaud, je suis développeur web - front-end
            junior. Après avoir expérimenté le code de mon côté, j'ai décidé de
            me lancer dans la formation de Développeur web d'OpenClassrooms que
            j'ai obtenu. Maintenant, je suis à la recherche d'une alternance
            afin d'obtenir une expérience professionnelle.
          </p>
        </div>
        <div className="contact-container">
          <div className="contact-items-container github-item">
            <h3 className="contact-items-title">GitHub</h3>
            <NavLink
              to="https://github.com/ArnaudDefrancq"
              className="contact-items-content hover"
            >
              @ArnaudDefrancq
            </NavLink>
          </div>
          <div className="contact-items-container">
            <h3 className="contact-items-title">LinkedIn</h3>
            <NavLink
              to="https://www.linkedin.com/in/arnaud-defrancq/"
              className="contact-items-content hover"
            >
              @ArnaudDefrancq
            </NavLink>
          </div>
          <div className="contact-items-container email-item">
            <h3 className="contact-items-title">Email</h3>
            <p className="contact-items-content">contact@arnaud-defrancq.fr</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
