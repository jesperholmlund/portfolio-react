import react from "react";

//använder props från komponenten projektlsita
const Project = (props) => {
  return (
    //bootstrap används delvis här och delvis har jag egna klasser och style
    <div className="project card" style={{ width: "22rem" }}>
      {/* props läggs in på visa ställen som kommer från parent component */}
      <div className="project-header">{props.info.attributes.Title}</div>
      <div className="project-body card-text">
        {props.info.attributes.content}
      </div>
      <div className="project-footer">
        <a
          className="card-link border-secondary btn text-muted"
          href={props.info.attributes.gitHub}
        >
          gitHub
        </a>
        <a
          className="card-link border-secondary btn text-dark"
          href={props.info.attributes.Demo}
        >
          demo
        </a>
      </div>
    </div>
  );
};

export default Project;
