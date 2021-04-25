import React from "react";
import Pdf from "../common/Pdf/";
import { getBook } from "../../services/fakeBookService";
import url from "../../config/urls";

const Firstchapter = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { id: bookId } = params;

  const book = getBook(parseInt(bookId));
  if (book === undefined) {
    history.replace(url.notFound);
    window.location.reload();
  }

  return (
    <div className="ui centered container">
      <Pdf pdfurl={book.pdfurl} />
    </div>
  );
};

export default Firstchapter;
