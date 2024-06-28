import { useEffect, useState } from "react";
import "./rating.css";
import Stars from "../Stars/Stars";

const Rating = ({
  userRating,
  setUserRating,
  maxRating = 10,
  color = "#fcc419",
  size = 18,
}) => {
  const [tempRating, setTempRating] = useState(0);

  const textStyles = {
    color,
    fontSize: `${size}px`,
    fontFamily: "sans-serif",
    fontWeight: "400",
  };

  const handleClick = (i) => {
    setUserRating(i + 1);
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
            full={tempRating ? tempRating > i : userRating > i}
            onRate={() => handleClick(i)}
            onHoverIn={() => handleMouseEnter(i)}
            onHoverOut={() => handleMouseLeave(i)}
            color={color}
          />
        ))}
      </div>
      <span style={textStyles}>{tempRating || userRating || ""}</span>
    </div>
  );
};

export default Rating;
