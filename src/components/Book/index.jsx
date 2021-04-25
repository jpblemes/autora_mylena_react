import React, { useState } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { titleStyle, bgStyle } from "./styles";

const Book = ({ book }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={bgStyle} className="ui black card">
      <Router>
        <Link to={`/meuslivros/${book.id}`} className="ui centered small image">
          <img
            src={book.imageurl}
            alt={book.alt}
            onMouseOut={() => setHovered(false)}
            onMouseOver={() => setHovered(true)}
            style={{
              transform: `${hovered ? "scale(1.1)" : "scale(1)"}`,
            }}
          />
        </Link>
        <div style={titleStyle}>
          <h4 className="header">{book.title}</h4>
        </div>
      </Router>
    </div>
  );
};

export default Book;
