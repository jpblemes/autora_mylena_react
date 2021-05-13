import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

const IconLink = ({ link, icon }) => {
  return (
    <Router>
      <Link to={link}>
        <i className={`${icon} icon`}></i>
      </Link>
    </Router>
  );
};

IconLink.defaultProps = {
  link: "#",
  icon: "",
};

export default IconLink;
