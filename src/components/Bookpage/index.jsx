import React, { useEffect } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { titleStyle, bgStyle } from "./styles";
import { getBook } from "../../services/fakeBookService";
import url from "../../config/urls";

const Bookpage = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { id: bookId } = params;

  const book = getBook(parseInt(bookId));

  if (book === undefined) {
    history.replace(url.notFound);
    window.location.reload();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const amazonbutton = () => {
    if (book.amazonurl !== "") {
      return (
        <a
          href={book.amazonurl}
          target="_blank"
          rel="noreferrer"
          className="item"
        >
          <button style={{ margin: "1px 0" }} className="ui violet button">
            <i className="circular inverted amazon icon"></i>
            Adquira
          </button>
        </a>
      );
    } else {
      return null;
    }
  };

  const pinterestbutton = () => {
    if (book.amazonurl !== "") {
      return (
        <a
          href={book.pinteresturl}
          target="_blank"
          rel="noreferrer"
          className="item"
        >
          <button style={{ margin: "1px 0" }} className="ui violet button">
            <i className="circular inverted pinterest icon"></i>
            Pinterest
          </button>
        </a>
      );
    } else {
      return null;
    }
  };

  const spotfybutton = () => {
    if (book.spotfyurl !== "") {
      return (
        <a
          href={book.spotfyurl}
          target="_blank"
          rel="noreferrer"
          className="item"
        >
          <button style={{ margin: "1px 0" }} className="ui violet button">
            Playlist Spotfy
          </button>
        </a>
      );
    } else {
      return null;
    }
  };

  const summarybutton = () => {
    if (book.readerssummary === true) {
      return (
        <Router>
          <Link to={`/meuslivros/${book.id}/summary`}>
            <button style={{ margin: "1px 0" }} className="ui violet button">
              Resenhas
            </button>
          </Link>
        </Router>
      );
    } else {
      return null;
    }
  };

  const pdfbutton = () => {
    if (book.pdfurl !== "") {
      return (
        <Router>
          <Link to={`/meuslivros/${book.id}/primeiro_capitulo`}>
            <button
              style={{ margin: "1px 0" }}
              className="ui violet button"
              href={`${book.nameurl}-primeiro_capitulo`}
            >
              Leia o 1º capítulo
            </button>
          </Link>
        </Router>
      );
    } else {
      return null;
    }
  };
  const skoobButton = () => {
    if (book.skooburl !== "") {
      return (
        <a
          href={book.skooburl}
          target="_blank"
          rel="noreferrer"
          className="item"
        >
          <button style={{ margin: "1px 0" }} className="ui violet button">
            Skoob
          </button>
        </a>
      );
    } else {
      return null;
    }
  };

  const wattpadButton = () => {
    if (book.wattpadurl !== "") {
      return (
        <a
          href={book.wattpadurl}
          target="_blank"
          rel="noreferrer"
          className="item"
        >
          <button style={{ margin: "1px 0" }} className="ui violet button">
            Ler no Wattpad
          </button>
        </a>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="ui container">
      <br />
      <div style={bgStyle} className="ui fluid card">
        <div className="content">
          <div style={titleStyle} className="header">
            <h2>{book.title}</h2>
          </div>
          <br />
          <br />
          <div className="description">
            <div
              style={{ marginLeft: "3px" }}
              className="ui right floated vertical buttons"
            >
              <img
                style={{ margin: "1px" }}
                className="right floated small ui image"
                src={book.imageurl}
                alt={book.alt}
              />
              {amazonbutton()}
              {summarybutton()}
              {pdfbutton()}
              {skoobButton()}
              {wattpadButton()}
              {pinterestbutton()}
              {spotfybutton()}
            </div>
            <h3 style={{ textAlign: "center" }}>{book.extra}</h3>
            <p
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              {book.summary}
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Bookpage;
