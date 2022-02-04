import React from "react";
import "../dist/css/Footer.css";
import { motion } from "framer-motion";
import { DiGithub } from "react-icons/di";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
//till denna komponent, min footer, har jag valt att importera ikoner från react-icons
//jag använder även motion-framer på denna för att animera footern vid första rendering

const Footer = () => {
  return (
    //denna rendering är hyfsat enkelt med opacity och skala i förändring under 2 sekunder.
    <motion.footer
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 2 }}
    >
      <div style={{ textAlign: "center" }} className="card">
        <BsFacebook style={{ fontSize: "35px" }}></BsFacebook>{" "}
        <a href="www.facebook.com">Facebook</a>
      </div>
      <div style={{ textAlign: "center" }} className="card">
        <DiGithub style={{ fontSize: "35px" }}></DiGithub>{" "}
        <a href="https://github.com/jesperholmlund/">gitHub</a>
      </div>
      <div style={{ textAlign: "center" }} className="card">
        <AiFillLinkedin style={{ fontSize: "35px" }}></AiFillLinkedin>{" "}
        <a href="www.linkedin.com">linkedIn</a>
      </div>
    </motion.footer>
  );
};

export default Footer;
