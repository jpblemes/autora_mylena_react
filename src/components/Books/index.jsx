import React, { useState, useEffect, useCallback } from "react";
import { getBooks, getSeries } from "../../services/fakeBookService";
import Pagination from "../common/Pagination";
import ListGroup from "../common/ListGroup";
import { paginate } from "../utils/paginate";
import BooksTable from "../BooksTable";
import _ from "lodash";
import ButtonLink from "../common/ButtonLink";

const Books = () => {
  const allBooks = getBooks();
  const pageSize = 4;
  const genres = [{ id: 0, name: "Todos os livros" }, ...getSeries()];
  const [books, setBooks] = useState(allBooks);
  const [filtered, setFiltered] = useState(books);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [pageBooks, setPageBooks] = useState([]);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  const handleDelete = (book) => {
    let booksAux = [...books];
    booksAux = booksAux.filter((m) => m !== book);
    setBooks(booksAux);
  };

  const handleBookSelection = (book) => {};

  const handleLike = (book) => {
    let booksAux = [...books];
    let index = booksAux.indexOf(book);
    booksAux[index] = { ...booksAux[index] };
    booksAux[index].liked = !booksAux[index].liked;
    setBooks(booksAux);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const filterItems = useCallback(() => {
    let filter =
      selectedGenre && selectedGenre.id
        ? books.filter((b) => b.serie === selectedGenre.name)
        : books;
    let sorted = _.orderBy(filter, [sortColumn.path], [sortColumn.order]);
    setFiltered(sorted);
  }, [selectedGenre, books, sortColumn]);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
    filterItems();
  };

  useEffect(() => {
    filterItems();
  }, [books, filterItems]);

  useEffect(() => {
    setPageBooks(paginate(filtered, currentPage, pageSize));
  }, [currentPage, filtered]);

  return (
    <div className="ui four column centered grid">
      <div className="two column row">
        <ListGroup
          items={genres}
          selectedItem={selectedGenre}
          onItemSelect={handleGenreSelect}
        />
      </div>
      <div className="two column row">
        <BooksTable
          pageBooks={pageBooks}
          onLike={handleLike}
          onDelete={handleDelete}
          onSort={handleSort}
          sortColumn={sortColumn}
        />
        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Books;
