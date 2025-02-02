import React from "react";
import { useState } from "react";

const Tour = ({ tour }) => {
  const { id, image, name, info, price } = tour;
  const [readMore, setReadMore] = useState(true);

  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readMore ? `${info.substring(0, 200)}...` : info}
            <button
              onClick={() => {
                setReadMore = () => {
                  !readMore;
                };
              }}
            >{readMore?'Show Less':'Show More'}</button>
          </p>
        </footer>
      </article>
    </>
  );
};

export default Tour;
