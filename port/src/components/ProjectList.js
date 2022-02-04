import react, { useEffect, useState } from "react";
import Project from "./Project";
import "bootstrap/dist/css/bootstrap.css";
import "../dist/css/ProjectList.css";
import axios from "axios";
import { motion } from "framer-motion";
import Nav from "./Nav";

//här importerar jag en hel del saker, dels bootstrap som blev tillgänglig globalt och egen privat CSS-fil
//dels axios för att hämta min projekt
//dels framer-motion för animering

const ProjectList = () => {
  //state skapas för projektlistan
  const [projectList, setProjectList] = useState([]);
  //useeffect med axios för att hämta data från api
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/projects",
      headers: { "Content-type": "application/json" },
    })
      //när data hämtad skapas en respons som sendan skickas in i array state
      .then(async function (response) {
        await setProjectList(response.data.data);
      })
      //eventuella fel fångas och loggas i konsolen
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    //animerig med motion. typen är "spring" och lite värden är mixate för att göra en bra studsanimation
    //tillsammans med opacity och och vertikal rörelse
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2,
        type: "spring",
        bounce: 1,
        damping: 10,
        mass: 2,
        stiffness: 100,
      }}
      className="projectContainer"
    >
      <p style={{ display: "none" }} className="projectListHeader bg-warning">
        Projects
      </p>
      {/* projektlistan mapas ut enskilt till komponeten projekt */}
      <div className="projectList">
        {projectList.map((info) => (
          <Project key={info.id} info={info}></Project>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectList;
