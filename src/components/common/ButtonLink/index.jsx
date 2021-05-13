import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

const ButtonLink = ({ link, text, color, icon }) => {
  return (
    <Router>
      <Link to={link}>
        <button style={{ margin: "1px 0" }} className={`ui ${color} button`}>
          <i className={`${icon} icon`}></i>
          {text}
        </button>
      </Link>
    </Router>
  );
};

ButtonLink.defaultProps = {
  link: "#",
  color: "white",
  text: "",
  icon: "",
};

export default ButtonLink;
