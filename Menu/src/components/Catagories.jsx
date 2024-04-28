import React from "react";

const Catagories = ({ catagories,filterItems }) => {
  return (
    <>
      <div className="btn-container">
        {catagories.map((category,index) => {
          return (
            <button className="filter-btn" type="button" key={index} onClick={()=>filterItems(category)}>
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Catagories;
