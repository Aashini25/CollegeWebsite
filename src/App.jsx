import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Rank from "./sections/Rank";
import Video from "./sections/Video";
import Scholarship from "./sections/Scholarship";
import Programme from "./sections/Programme";
import BSchool from "./sections/BSchool";
import Testimontials from "./sections/Testimontials";
import CampusLife from "./sections/CampusLife";
//import Blog from "./sections/Blog";
import Footer from "./components/Footer";
import AdmissionForm from "./components/Application_form";

const App = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleApplyNowClick = () => {
    setIsFormVisible(true);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
  };

  return (
    <Router>
      <Navbar onApplyNowClick={handleApplyNowClick} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="p-0 m-0 overflow-hidden">
              <Hero onApplyNowClick={handleApplyNowClick} />
              <Rank />
              <Video />
              <Scholarship />
              <Programme onApplyNowClick={handleApplyNowClick} />
              <BSchool />
              <Testimontials />
              <CampusLife />
              <Footer />
            </div>
          }
        />
      </Routes>
      <AdmissionForm isVisible={isFormVisible} onClose={handleFormClose} />
    </Router>
  );
};

export default App;
