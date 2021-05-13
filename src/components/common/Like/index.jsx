import React from "react";

const Like = ({ liked, onClick }) => {
  const getClasses = () => {
    let classes = "fas fa-heart";
    if (!liked) {
      classes = "far fa-heart";
    }
    return classes;
  };
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onClick}
      className={getClasses()}
    ></i>
  );
};

export default Like;
