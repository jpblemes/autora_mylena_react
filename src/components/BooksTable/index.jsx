import React from "react";
import Like from "../common/Like";
import Table from "../common/Table";
import IconLink from "../common/IconLink";
import colors from "../../config/colors";
/*to={`/meuslivros/${book.id}/summary`}*/
const BooksTable = ({ pageBooks, onDelete, onLike, onSort, sortColumn }) => {
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
