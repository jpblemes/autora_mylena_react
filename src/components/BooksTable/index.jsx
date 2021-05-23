import React from "react";
import Table from "../common/Table";
import { Link } from "react-router-dom";

const BooksTable = ({ pageBooks, onSort, sortColumn }) => {
  const columns = [
    {
      path: "title",
      label: "Título",
      content: (book) => (
        <Link to={`/meuslivros/${book.id}`}>{book.title}</Link>
      ),
    },
  ];

  return (
    <Table
      data={pageBooks}
      onSort={onSort}
      columns={columns}
      sortColumn={sortColumn}
    />
  );
};

export default BooksTable;
