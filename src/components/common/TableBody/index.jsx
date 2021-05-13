import React from "react";
import _ from "lodash";
import colors from "../../../config/colors";

const tableBody = ({ data, columns }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  return (
    <tbody style={{ backgroundColor: colors.lightPurple }}>
      {data.map((item, i) => (
        <tr key={i}>
          {columns.map((column, j) => (
            <td key={j}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default tableBody;
