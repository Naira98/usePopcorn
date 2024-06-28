import { StarBorderRounded, StarRounded } from "@mui/icons-material";
import PropTypes from "prop-types";

const Stars = ({
  full,
  onRate,
  onHoverIn,
  onHoverOut,
  size = 22,
  color = "gold",
}) => {
  const starStyle = {
    cursor: "pointer",
    width: `${size}px`,
    height: `${size}px`,
    color: `${color}`,
  };
  return (
    <span>
      {full ? (
        <StarRounded
          onClick={onRate}
          onMouseEnter={onHoverIn}
          onMouseLeave={onHoverOut}
          style={starStyle}
        />
      ) : (
        <StarBorderRounded
          onClick={onRate}
          onMouseEnter={onHoverIn}
          onMouseLeave={onHoverOut}
          style={starStyle}
        />
      )}
    </span>
  );
};

Stars.propTypes = {
  full: PropTypes.bool,
  onRate: PropTypes.func,
  onHoverIn: PropTypes.func,
  onHoverOut: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Stars;
