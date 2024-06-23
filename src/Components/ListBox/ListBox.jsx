import { useState } from "react";
import "./listBox.css";
import Movie from "../Movie/Movie";

const ListBox = ({ movies }) => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className="list">
          {movies?.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListBox;
