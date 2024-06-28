import "./movie.css";

const Movie = ({ movie, selectedId, setSelectedId }) => {


  const handleSelect = () => {
    setSelectedId(selectedId === movie.imdbID ? null : movie.imdbID);
  };
  return (
    <li onClick={handleSelect}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div className="year">
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
