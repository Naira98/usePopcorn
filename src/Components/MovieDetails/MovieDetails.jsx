import { useEffect, useRef, useState } from "react";

import Rating from "../Rating/Rating";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import "./movieDetails.css";

import useKey from "../../Hooks/useKey";

const MovieDetails = ({
  selectedId,
  setSelectedId,
  watchedList,
  setWatchedList,
  alreadyExists,
  setAlreadyExists,
}) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [userRating, setUserRating] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  const handleAddWatchedMovie = () => {
    const newWatchedMovie = {
      id: movieDetails.imdbID,
      poster: movieDetails.Poster,
      title: movieDetails.Title,
      imdbRating: movieDetails.imdbRating,
      userRating,
      runtime: Number(movieDetails.Runtime.split(" ").at(0)),
      countRatingDecisions: countRef.current,
    };
    setWatchedList((watchedList) => [...watchedList, newWatchedMovie]);
    setSelectedId(null);
  };

  useEffect(() => {
    setAlreadyExists(false);
    const movie = watchedList.find((movie) => movie.id === selectedId);
    if (movie) {
      setAlreadyExists(true);
      setUserRating(movie.userRating);
    }
  }, [watchedList, selectedId, setAlreadyExists]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_API_KEY
          }&i=${selectedId}`
        );
        if (!res.ok) throw new Error("Error while fetch movie details");
        const data = await res.json();
        setError("");
        setMovieDetails(data);
        // console.log(data)
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!movieDetails.Title) return;
    document.title = `${movieDetails.Title}`;

    return () => {
      document.title = "usePopcorn";
    };
  }, [movieDetails]);


  useKey('Escape', ()=>{setSelectedId(null);})
  

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && !error && (
        <div className="details">
          <header>
            <button className="btn-back" onClick={() => setSelectedId(null)}>
              &larr;
            </button>
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
            <div className="details-overview">
              <h2>{movieDetails.Title}</h2>
              <p>
                {movieDetails.Released} &bull;{" "}
                {movieDetails.Runtime === "N/A"
                  ? ""
                  : `${movieDetails.Runtime}`}
              </p>
              <p>{movieDetails.Genre}</p>
              <p>
                <span>⭐️</span> {movieDetails.imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {alreadyExists ? (
                <div>You have already rated with {userRating} ⭐️</div>
              ) : (
                <>
                  <Rating
                    userRating={userRating}
                    setUserRating={setUserRating}
                  />
                  {userRating && (
                    <button className="btn-add" onClick={handleAddWatchedMovie}>
                      + Add to list
                    </button>
                  )}
                </>
              )}
            </div>
            <p>
              <em>{movieDetails.Plot}</em>
            </p>
            <p>Starring {movieDetails.Actors}</p>
            <p>Directed by {movieDetails.Director}</p>
          </section>
        </div>
      )}
      {error && <Error message={error} />}
    </>
  );
};

export default MovieDetails;
