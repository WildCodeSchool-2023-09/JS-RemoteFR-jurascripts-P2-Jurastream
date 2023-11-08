import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Rating.scss";

function StarRating({ ratingOnChange }) {
  const [rating, setRating] = useState(5);

  const onClickStarRating = (newRating) => {
    setRating(newRating);
    if (ratingOnChange) {
      ratingOnChange(newRating);
    }
  };

  return (
    <div className="star-rating-wrapper center">
      <div className="star-rating-container">
        {Array.from(Array(5).keys()).map((starNum) => (
          <div
            onClick={() => onClickStarRating(starNum)}
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onClickStarRating(starNum);
              }
            }}
            role="button"
            tabIndex={0}
            className={
              starNum <= rating
                ? "star-rating-item selected"
                : "star-rating-item"
            }
          >
            &#9733;
          </div>
        ))}
      </div>
    </div>
  );
}

StarRating.propTypes = {
  ratingOnChange: PropTypes.func,
};

StarRating.defaultProps = {
  ratingOnChange: null,
};

export default StarRating;
