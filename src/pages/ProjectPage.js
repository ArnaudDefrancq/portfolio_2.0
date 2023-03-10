import React from "react";
import AllProjectNavigation from "../components/navigations/AllProjectNavigation";
import Navigation from "../components/navigations/Navigation";
import Mouse from "../components/Mouse";

const ProjectPage = () => {
  return (
    <>
      <Mouse />
      <header>
        <Navigation />
      </header>
      <main>
        <AllProjectNavigation />
      </main>
    </>
  );
};

export default ProjectPage;
