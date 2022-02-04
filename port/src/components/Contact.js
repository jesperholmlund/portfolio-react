import react from "react";
import "../dist/css/Contact.css";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import { motion } from "framer-motion";

//jag importerar in dedikerad CSS-fil, axios för att skicka till en api
//useState till olika funktioner och framer-motion för animeringar

const Contact = () => {
  {
    /* här använder jag tre states. 
    Det första är till en array som är underlag till mailet, 
    den adnra till att kolla status på formuläret. Default är false, att det inte går skicka in
  tre tredje är att toggla ett eventuellt felmeddelande som till en början är tomt
  */
  }
  const [mail, setMail] = useState([]);
  const [failStatus, setFailStatus] = useState(false);
  const [failMessage, setFailMessage] = useState("");

  //här är en funktion som läser av formuläret och skriver i det i ett state
  //spread operatorn används för att behålla tidigare, förhindra nollställning
  //event.target.name tar namnet på formulärfältet och event.target.value tar värdet
  //genom denna upplägning möjliggör jag en och samma funktion för alla tee fält
  //istället för en separata funktioner för fälten
  const handleChange = (event) => {
    setMail({ ...mail, [event.target.name]: event.target.value });
    console.log();
  };
  //funtion att sända mail
  const sendMail = (event) => {
    //förhindrar default beteende för skicka knappen
    event.preventDefault();
    //hämtar värde från state mail.email
    let mailCheck = mail.email;
    //kollar om värdet innehåller @ och en ternary operator av gör vad som händer
    mailCheck.includes("@")
      ? setFailStatus(true)
      : setFailMessage("Email wrong");
    //alla värden från state arrayen loppas ut och kollas igenom
    let values = [mail.name, mail.email, mail.message];
    values.forEach((value) => {
      if (!value) {
        setFailStatus(true);
        setFailMessage("Missing field");
      }
    });
    //om falsdestatus inte når false postas via axios till en strapi server
    //så kan man se mailen i en inkorg
    if (failStatus === false) {
      axios.post("http://localhost:1337/api/mails", {
        data: {
          Name: mail.name,
          Email: mail.email,
          Message: mail.message,
        },
      });
      setFailMessage("Mail sent");
    }
  };
  return (
    //retunerar animerade div genom motion
    //som har ett initialt värde och animeras  till ett annat värde på tid.
    //först är den osnylig och har ingen skala, sen får den på tid både skala
    //och synlighet samtidigt som den roterar runt sig själv ett varv
    <>
      {" "}
      <motion.div
        id="contact"
        initial={{ opacity: 0, scale: 0, rotate: 360 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 2 }}
      >
        {/* det mesta är bootstrap */}
        <form style={{ width: "60rem", margin: "auto" }}>
          <div className="form-group row">
            <label
              htmlFor="colFormLabelLg"
              className="col-sm-2 col-form-label col-form-label-lg"
            >
              Email
            </label>
            <div className="col-sm-10">
              {/* har använder jag en animneringsinput
            som ökar storlken på det fält som är markerat
            på input finns onChange, som kollar vad som händer när värde skrivs
            till denna är funktionen kopplad som skickar dessa värden till en array i state
            */}
              <motion.input
                whileFocus={{ scale: 1.1 }}
                onChange={handleChange}
                type="email"
                className="form-control form-control-lg"
                id="colFormLabelLg"
                name="email"
              ></motion.input>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="title"
              className="col-sm-2 col-form-label col-form-label-lg"
            >
              Title
            </label>
            <div className="col-sm-10">
              <motion.input
                whileFocus={{ scale: 1.1 }}
                type="text"
                className="form-control form-control-lg"
                id="title"
                name="name"
                onChange={handleChange}
              ></motion.input>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="message"
              className="col-sm-2 col-form-label col-form-label-lg"
            >
              Message
            </label>
            <div className="col-sm-10">
              <motion.textarea
                whileFocus={{ scale: 1.1 }}
                className="form-control form-control-lg"
                id="message"
                name="message"
                rows="3"
                onChange={handleChange}
              ></motion.textarea>
            </div>
          </div>
          {/* ternary operator som kollar failmeddelande och skriver ut det eller inte  */}
          <div>{failStatus === false ? failMessage : [failMessage]}</div>
          {/* onclick som helt enkelt triggar inskickning av mail men först går igenom så mailet är korrekt */}
          <button className="btn btn-primary" onClick={sendMail}>
            Maila
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default Contact;
