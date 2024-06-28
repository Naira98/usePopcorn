import WatchedMovie from "../WatchedMovie/WatchedMovie";

const WatchedMovieList = ({ watchedList, setWatchedList, setSelectedId }) => {
  // console.log(watchedList);

  const handleMovieClick = (event, id) => {
    if (event.defaultPrevented) {
      return;
    }

    setSelectedId(id);
  };

  return (
    <ul className="list">
      {watchedList.map((movie) => (
        <li key={movie.id} onClick={(event) => handleMovieClick(event, movie.id)}>
          <WatchedMovie movie={movie} setWatchedList={setWatchedList} />
        </li>
      ))}
    </ul>
  );
};

export default WatchedMovieList;
