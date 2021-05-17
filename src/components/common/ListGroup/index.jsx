import React from "react";

const ListGroup = ({ items, textProperty, onItemSelect, selectedItem }) => {
  return (
    <>
      <div className="ui vertical menu">
        {items.map((item, i) => (
          <a
            onClick={() => {
              onItemSelect(item);
            }}
            key={i}
            className={
              item.id === selectedItem.id ? "violet item active" : "item"
            }
          >
            {item[textProperty]}
          </a>
        ))}
      </div>
      {/* <ul className="list-group">
        {items.map((item, i) => (
          <li
            onClick={() => {
              onItemSelect(item);
            }}
            key={i}
            className={
              item.id === selectedItem.id
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul> */}
    </>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
};

export default ListGroup;
