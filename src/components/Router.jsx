import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Works from "./pages/Works";
import DirectoryCaseStudy from "./pages/DirectoryCaseStudy";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hero />} /> {/* Default route when at / */}
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />} />
          <Route
            path="works/directory-case-study"
            element={<DirectoryCaseStudy />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
