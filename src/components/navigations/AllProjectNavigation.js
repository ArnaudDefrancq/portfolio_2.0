import React from "react";
import { NavLink } from "react-router-dom";

const AllProjectNavigation = () => {
  return (
    <div className="all-project-container">
      <div className="project-right">
        <ul className="all-project-list">
          <NavLink
            to="https://www.reservia-project.arnaud-defrancq.fr/"
            className="all-project-items projet-01"
            target="_blank"
          >
            <li className="hover ">Projet Rerservia - OpenClassrooms</li>
            <div className="img-project-01 img-projet"></div>
          </NavLink>
          <NavLink
            to="https://www.ohmyfood-project.arnaud-defrancq.fr/"
            className="all-project-items projet-02"
            target="_blank"
          >
            <li className="hover">Projet OhMyFood! - OpenClassrooms</li>
            <div className="img-project-02 img-projet"></div>
          </NavLink>
          <NavLink
            to="https://www.bubble-project.arnaud-defrancq.fr/"
            className="all-project-items projet-03"
            target="_blank"
          >
            <li className="hover">Projet bubble shooter</li>
            <div className="img-project-03 img-projet"></div>
          </NavLink>
          <NavLink
            to="https://www.generateur-project.arnaud-defrancq.fr/"
            className="all-project-items projet-04"
            target="_blank"
          >
            <li className="hover">Projet Générateur mot de passe</li>
            <div className="img-project-04 img-projet"></div>
          </NavLink>
          <NavLink
            to="https://github.com/ArnaudDefrancq/P07_OpenClassrooms_16052022"
            className="all-project-items projet-05"
            target="_blank"
          >
            <li className="hover">Projet Groupomania - OpenClassrooms</li>
            <div className="img-project-05 img-projet"></div>
          </NavLink>
          <NavLink
            to="https://github.com/ArnaudDefrancq/P05_Openclassroom_07022022"
            className="all-project-items projet-06"
            target="_blank"
          >
            <li className="hover">Projet Kanap - OpenClassrooms</li>
            <div className="img-project-06 img-projet"></div>
          </NavLink>
          <NavLink
            to="https://quiz-pays.arnaud-defrancq.fr/"
            className="all-project-items projet-07"
            taget="_blank"
          >
            <li className="hover">Projet Quizz drapeaux</li>
            <div className="img-project-07 img-projet"></div>
          </NavLink>
          <NavLink
            to="https://projet-bonneteau.arnaud-defrancq.fr/"
            className="all-project-items projet-08"
            target="_blank"
          >
            <li className="hover">Projet Jeu de bonneteau</li>
            <div className="img-project-08 img-projet"></div>
          </NavLink>
          <NavLink
            to="https://projet-memory.arnaud-defrancq.fr/"
            className="all-project-items projet-09"
            target="_blank"
          >
            <li className="hover">Projet Jeu de mémoire</li>
            <div className="img-project-09 img-projet"></div>
          </NavLink>
          <NavLink
            to="https://snake.arnaud-defrancq.fr/"
            className="all-project-items projet-10"
            target="_blank"
          >
            <li className="hover">Projet Snake</li>
            <div className="img-project-10 img-projet"></div>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default AllProjectNavigation;
