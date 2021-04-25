import React from "react";
import Bookcarousel from "../Bookcarousel";
import { mylena, allabout, style } from "./styles";

const Aboutme = () => {
  const titlestyle = {
    textAlign: "center",
  };

  const aboutmylena = allabout.map((about) => {
    return (
      <p
        style={{
          textAlign: "justify",
          textJustify: "inter-word",
        }}
        key={about.id}
      >
        {about.text}
      </p>
    );
  });

  return (
    <div className="ui container">
      <br />
      <div style={style} className="ui fluid card">
        <div className="content">
          <div style={titlestyle} className="header">
            <h2>Sobre mim</h2>
          </div>
          <br />
          <br />
          <div className="description">
            <div className="ui right floated vertical buttons bookmenu">
              <img
                style={{ margin: "1px", marginLeft: "3px" }}
                className="right floated small ui image"
                src={mylena.src}
                alt={mylena.alt}
              />
            </div>
            <div>{aboutmylena}</div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Obras disponíveis:</h1>
      <br />
      <div style={{ width: "90%" }} className="ui container">
        <Bookcarousel />
      </div>
    </div>
  );
};

export default Aboutme;
