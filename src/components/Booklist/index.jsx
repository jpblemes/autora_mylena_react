import React from "react";
import Books from "../Books";
import { background } from "./styles";

const Booklist = () => {
  return (
    <div style={background}>
      <div style={{ paddingBottom: "150px" }} className="ui container">
        <Books />
      </div>
    </div>
  );
};

export default Booklist;
