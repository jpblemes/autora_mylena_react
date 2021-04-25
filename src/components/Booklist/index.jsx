import React from "react";
import Book from "../Book/";
import { getBooks } from "../../services/fakeBookService";

const Booklist = () => {
  const allbooks = getBooks();

  const books = allbooks.map((book) => {
    return <Book key={book.id} book={book} />;
  });

  return (
    <div className="ui container three doubling stackable cards">{books}</div>
  );
};

export default Booklist;
