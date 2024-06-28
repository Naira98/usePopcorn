import "./watchedMovie.css";

const WatchedMovie = ({ movie, setWatchedList }) => {
  const handleDelete = (event, id) => {
    event.preventDefault();
    setWatchedList((list) => list.filter(movie => movie.id !== id));
  };
  return (
    <>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button className="btn-delete" onClick={(event) => handleDelete(event, movie.id)}>
          X
        </button>
      </div>
    </>
  );
};

export default WatchedMovie;
