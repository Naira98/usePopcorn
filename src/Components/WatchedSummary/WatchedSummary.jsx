import "./watchedSummary.css";

const WatchedSummary = ({ watchedList }) => {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watchedList.map((movie) => movie.imdbRating));
  const avgUserRating = average(watchedList.map((movie) => movie.userRating));
  const avgRuntime = average(watchedList.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedList.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{Math.round(avgImdbRating * 10) / 10}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{Math.round(avgUserRating * 10) / 10}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{Math.round(avgRuntime)} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
