import React from "react";
import { hazelPreVenda, amazonurl } from "./styles";

const Maincontent = () => {
  return (
    <div style={{ marginTop: "30px" }} className="ui container">
      <img
        className="ui centered image"
        src={hazelPreVenda.src}
        alt={hazelPreVenda.alt}
      />
      <a href={amazonurl} target="_blank" rel="noreferrer">
        <button className="ui violet button">
          <i className="circular inverted amazon icon"></i>
          Adquira o seu na Pré-Venda!
        </button>
      </a>
    </div>
  );
};

export default Maincontent;
