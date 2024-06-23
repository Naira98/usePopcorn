import { useState } from "react";
import "./watchedBox.css";
import WatchedSummary from "../WatchedSummary/WatchedSummary";
import WatchedMovieList from "../WatchedMovieList/WatchedMovieList";

const WatchedBox = ({ watched }) => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched}/>
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
};

export default WatchedBox;
