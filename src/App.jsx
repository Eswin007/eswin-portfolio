import { useState } from "react";
import "./scss/main.scss";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </>
  );
};

export default App;
