import { useState } from "react";

import Box from "../Box/Box";
import WatchedSummary from "../WatchedSummary/WatchedSummary";
import WatchedMovieList from "../WatchedMovieList/WatchedMovieList";
import MovieList from "../MovieList/MovieList";
import Loading from "../Loading/Loading";
import MovieDetails from "../MovieDetails/MovieDetails";
import Error from "../Error/Error";
import "./main.css";

import useLocalStorage from "../../Hooks/useLocalStorage";

const Main = ({ movies, error, isLoading, selectedId, setSelectedId }) => {
  const [alreadyExists, setAlreadyExists] = useState(false);
  const [watchedList, setWatchedList] = useLocalStorage([], 'watched')
  return (
    <main className="main">
      {/* <Box element={<MovieList movies={movies} />} />
      <Box
        element={
          <>
            <WatchedSummary watched={watched} />
            <WatchedMovieList watched={watched} />
          </>
        }
      /> */}
      <Box>
        {isLoading && <Loading />}
        {!isLoading && !error && (
          <MovieList
            movies={movies}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        )}
        {error && <Error message={error} />}
      </Box>
      <Box>
        {selectedId ? (
          <MovieDetails
            key={selectedId}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            alreadyExists={alreadyExists}
            setAlreadyExists={setAlreadyExists}
            watchedList={watchedList}
            setWatchedList={setWatchedList}
          />
        ) : (
          <>
            <WatchedSummary watchedList={watchedList} />
            <WatchedMovieList
              watchedList={watchedList}
              setWatchedList={setWatchedList}
              setSelectedId={setSelectedId}
            />
          </>
        )}
      </Box>
    </main>
  );
};

export default Main;
