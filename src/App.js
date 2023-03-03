import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Projet01 from "./pages/projets/Projet_01";
import Projet02 from "./pages/projets/Projet_02";
import Projet03 from "./pages/projets/Projet_03";
import Projet04 from "./pages/projets/Projet_04";
import Projet05 from "./pages/projets/Projet_05";
import Projet06 from "./pages/projets/Projet_06";
import Projet07 from "./pages/projets/Projet_07";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-01" element={<Projet01 />} />
        <Route path="/project-02" element={<Projet02 />} />
        <Route path="/project-03" element={<Projet03 />} />
        <Route path="/project-04" element={<Projet04 />} />
        <Route path="/project-05" element={<Projet05 />} />
        <Route path="/project-06" element={<Projet06 />} />
        <Route path="/project-07" element={<Projet07 />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
