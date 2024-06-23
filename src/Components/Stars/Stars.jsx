import { Star, StarBorder } from "@mui/icons-material";
import React from "react";

const Stars = ({ full, onRate, onHoverIn, onHoverOut }) => {
  return (
    <span>
      {full ? (
        <Star
          sx={{ color: "gold" }}
          onClick={onRate}
          onMouseEnter={onHoverIn}
          onMouseLeave={onHoverOut}
        />
      ) : (
        <StarBorder
          sx={{ color: "gold" }}
          onClick={onRate}
          onMouseEnter={onHoverIn}
          onMouseLeave={onHoverOut}
        />
      )}
    </span>
  );
};

export default Stars;
