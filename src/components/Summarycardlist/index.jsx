import React, { useState } from "react";
import Summarycard from "../Summarycard/";
import Pagination from "../common/Pagination";
import { paginate } from "../utils/paginate";

const Summarycardlist = ({ readers }) => {
  const pageSize = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const allreaders = readers.map((reader) => {
    return <Summarycard key={reader.id} reader={reader} />;
  });
  const pageSummaries = paginate(allreaders, currentPage, pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="ui container cards">{pageSummaries}</div>
      <div
        className="ui four column centered grid"
        style={{ marginTop: "30px" }}
      >
        <Pagination
          itemsCount={allreaders.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Summarycardlist;
