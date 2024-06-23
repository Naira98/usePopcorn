import { useEffect, useState } from "react";
import "./rating.css";
import Stars from "../Stars/Stars";

const Rating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const handleClick = (i) => {
    setRating(i + 1);
  };
  const handleMouseEnter = (i) => {
    setTempRating(i + 1);
  };
  const handleMouseLeave = (i) => {
    setTempRating(0);
  };
  return (
    <div className="stars-container">
      <div className="stars">
        {Array.from({ length: Number(maxRating) }, (_, i) => (
          <Stars
            key={i}
            full={tempRating ? tempRating > i : rating > i}
            onRate={() => handleClick(i)}
            onHoverIn={() => handleMouseEnter(i)}
            onHoverOut={() => handleMouseLeave(i)}
          />
        ))}
      </div>
      <span>{tempRating || rating || ""}</span>
    </div>
  );
};

export default Rating;
