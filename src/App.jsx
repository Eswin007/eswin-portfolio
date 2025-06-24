import { useState } from "react";
import "./scss/main.scss";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Outlet />
      <Analytics />
    </>
  );
};

export default App;
