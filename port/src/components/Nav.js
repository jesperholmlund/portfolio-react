import react from "react";
import "../dist/css/Nav.css";
import About from "./About";
import { motion } from "framer-motion";
//importerar framer-motion och komponenten about som innehåller enklare informaiton samt navigationsmenyn

const Nav = () => {
  return (
    //denna kör precis som anant enkalre animering vid rendering
    <motion.nav
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 2 }}
    >
      {/* komponenten about inne i navigationen (inte komponenten navigation utan html-elementet) */}
      <About></About>
    </motion.nav>
  );
};

export default Nav;
