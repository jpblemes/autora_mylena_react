import React from "react";

const ListGroup = ({ items, textProperty, onItemSelect, selectedItem }) => {
  return (
    <>
      <div className="ui vertical menu">
        {items.map((item, i) => (
          <div
            onClick={() => {
              onItemSelect(item);
            }}
            key={i}
            className={
              item.id === selectedItem.id ? "violet item active" : "item"
            }
          >
            {item[textProperty]}
          </div>
        ))}
      </div>
    </>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
};

export default ListGroup;
