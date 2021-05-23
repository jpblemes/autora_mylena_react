import React from "react";

const TableHeader = ({ onSort, columns, sortColumn }) => {
  const raiseSort = (path) => {
    let sortColumnAux = { ...sortColumn };
    if (sortColumnAux.path === path) {
      sortColumnAux.order = sortColumnAux.order === "asc" ? "desc" : "asc";
    } else {
      sortColumnAux.path = path;
      sortColumnAux.order = "asc";
    }
    onSort(sortColumnAux);
  };

  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="caret up icon"></i>;
    return <i className="caret down icon"></i>;
  };
  return (
    <thead>
      <tr>
        {columns.map((column, i) => (
          <th
            key={i}
            style={{ cursor: "pointer" }}
            onClick={() => raiseSort(column.path)}
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
