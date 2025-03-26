import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import App from "../App";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Works from "./pages/Works";
import DirectoryCaseStudy from "./pages/DirectoryCaseStudy";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index element={<PageWrapper><Hero /></PageWrapper>} />
          <Route path="about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="works" element={<PageWrapper><Works /></PageWrapper>} />
          <Route path="works/directory-case-study" element={<PageWrapper><DirectoryCaseStudy /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .2 }}
  >
    {children}
  </motion.div>
);

const Router = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default Router;