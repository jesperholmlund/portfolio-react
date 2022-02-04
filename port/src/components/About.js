import react from "react";
import "../dist/css/About.css";
import { Route, Routes, NavLink } from "react-router-dom";

//denna komponent använder en enkel retunering av enkel skriven html, text samt med egen privat css-fil
//
const About = () => {
  return (
    <div id="about">
      <div id="profile-picture"></div>
      <div id="profile-about">
        <div id="profile-text" className="text-light">
          Jag heter Jesper Holmlund och är webbutvecklare inriktad på
          javascript, node och react. Jag brinner för kreativ problemlösning och
          anser att programmering är en problemlösande disciplin och inte en
          disciplin där man på förhand har svar på problem. Repition är
          lärandets moder och jag älskar att komma på en idé och testa om det
          fungerar - repetera kod tills jag hittar ett nytt kreativt sätt att
          lösa ett problem
        </div>
        <div id="profile-skills">
          {/* menyn använder Navlinks från react-router-dom 
            samt avnänder funkitonen isActive is klassen tillsammans med en ternary operator
            denna funktion avgör om en länk är kativ och ger den då en speciell bakgrund
          */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "btn " + (isActive ? " btn-danger" : " text-light")
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              "btn " + (isActive ? "btn-danger" : "text-light")
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              "btn " + (isActive ? "btn-danger" : "text-light")
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
