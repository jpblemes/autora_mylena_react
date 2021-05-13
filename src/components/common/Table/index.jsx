import React from "react";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

const Table = ({ data, onSort, columns, sortColumn }) => {
  return (
    <table style={{ textAlign: "center" }} className="ui collapsing table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
