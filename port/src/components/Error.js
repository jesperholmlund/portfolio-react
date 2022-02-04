import React from "react";
import "../dist/css/Error.css";
import { ImSad } from "react-icons/im";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="errorModal" className="bg-dark">
      <div id="error" className="text-light">
        <h1>Error 404</h1>
        <h3>Page is missing!!</h3>
        <ImSad style={{ fontSize: "100px" }}></ImSad>
        <NavLink
          to="/skills"
          style={{
            fontSize: "40px",
            background: "green",
          }}
          className={({ isActive }) =>
            "btn " + (isActive ? " btn-danger" : " text-light")
          }
        >
          Go to about
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
