import React from "react";
import Summarycardlist from "../Summarycardlist";
import { getSummaryByBook } from "../../services/fakeSummaryService";
import url from "../../config/urls";

const Booksummary = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { id: bookId } = params;

  const booksummaries = getSummaryByBook(parseInt(bookId));
  if (booksummaries === undefined || booksummaries.length === 0) {
    history.replace(url.notFound);
    window.location.reload();
  }

  return (
    <div className="ui container">
      <Summarycardlist readers={booksummaries} />
    </div>
  );
};

export default Booksummary;
