import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <div className="ui horizontal list">
        <div className="ui small buttons">
          {pages.map((page) => (
            <button
              key={page}
              className={
                page === currentPage ? "ui violet button" : "ui button"
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
