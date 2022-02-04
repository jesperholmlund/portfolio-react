import React from "react";
import "../dist/css/Skills.css";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { motion } from "framer-motion";

//importering av diverse ikoner till listan av skills
//samt importering av animering

const Skills = () => {
  return (
    <div id="skills">
      <ul>
        {/* här kör jag motion på alla li element. Dom renderas sakta in på skärmen
        samt har alla egen ikon från react-icons */}
        <motion.li
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          {" "}
          <DiJsBadge style={{ color: "orange", fontSize: "80px" }}></DiJsBadge>
          <div className="skill">Javascript</div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
        >
          {" "}
          <DiReact style={{ color: "#61DBFB", fontSize: "80px" }}></DiReact>
          <motion.div className="skill">React</motion.div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.5 }}
        >
          {" "}
          <DiNodejsSmall
            style={{ color: "green", fontSize: "80px" }}
          ></DiNodejsSmall>
          <motion.div className="skill">Node.js</motion.div>
        </motion.li>
      </ul>
      <br></br>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        style={{ fontSize: "20px" }}
      >
        Jag heter Jesper Holmlund och är utbildad webbutvecklare vars främsta
        områden är javascript, node och react.
        <br></br>
        <br></br>* Formellt utbildad vid KYH
        <br></br>* Expert på React
        <br></br>* Lång erfarenhet av javascript
        <br></br>* Kompetent inom REST API, strapi CMS
      </motion.div>
    </div>
  );
};

export default Skills;
