import React from "react";
import { NavLink } from "react-router-dom";

const AllProjectNavigation = () => {
  return (
    <div className="all-project-container">
      <div className="project-right">
        <ul className="all-project-list">
          <NavLink to="/project-01" className="all-project-items projet-01">
            <li className="hover ">Projet 01</li>
            <div className="img-project-01 img-projet"></div>
          </NavLink>
          <NavLink to="/project-02" className="all-project-items projet-02">
            <li className="hover">Projet 02</li>
            <div className="img-project-02 img-projet"></div>
          </NavLink>
          <NavLink to="/project-03" className="all-project-items projet-03">
            <li className="hover">Projet 03</li>
            <div className="img-project-03 img-projet"></div>
          </NavLink>
          <NavLink to="/project-04" className="all-project-items projet-04">
            <li className="hover">Projet 04</li>
            <div className="img-project-04 img-projet"></div>
          </NavLink>
          <NavLink to="/project-05" className="all-project-items projet-05">
            <li className="hover">Projet 05</li>
            <div className="img-project-05 img-projet"></div>
          </NavLink>
          <NavLink to="/project-06" className="all-project-items projet-06">
            <li className="hover">Projet 06</li>
            <div className="img-project-06 img-projet"></div>
          </NavLink>
          <NavLink to="/project-07" className="all-project-items projet-07">
            <li className="hover">Projet 07</li>
            <div className="img-project-07 img-projet"></div>
          </NavLink>
          <NavLink to="/project-08" className="all-project-items projet-08">
            <li className="hover">Projet 08</li>
            <div className="img-project-08 img-projet"></div>
          </NavLink>
          <NavLink to="/project-09" className="all-project-items projet-09">
            <li className="hover">Projet 09</li>
            <div className="img-project-09 img-projet"></div>
          </NavLink>
          {/* <NavLink to="/project-10" className="all-project-items projet-10">
            <li className="hover">Projet 10</li>
          </NavLink> */}
        </ul>
      </div>
    </div>
  );
};

export default AllProjectNavigation;
