import React from "react";
import Table from "../common/Table";
import IconLink from "../common/IconLink";

const BooksTable = ({ pageBooks, onSort, sortColumn }) => {
  const columns = [
    { path: "title", label: "Título" },
    {
      content: (book) => (
        <IconLink link={`/meuslivros/${book.id}`} icon="search" />
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
