import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/navigations/Navigation";

const Home = () => {
  return (
    <>
      <Mouse />
      <header>
        <Navigation />
      </header>
      <main>
        <div className="intro">
          <h1>
            Hey ! Je suis <span className="title-name">Arnaud Defrancq</span>
          </h1>
          <h3>Je suis développeur web front-end junior</h3>
        </div>
      </main>
    </>
  );
};

export default Home;
