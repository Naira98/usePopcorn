import { useEffect, useState } from "react";

const useMovies = (query, setSelectedId) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // let canceled = false;
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setError("");
        if (query.length === 0) {
          return setMovies([]);
        }
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_API_KEY
          }&s=${query}}`,
          { signal: controller.signal }
        );
        // if (canceled) return;
        if (!res.ok) {
          throw new Error("Can't find the movie");
        }
        const data = await res.json();
        // if (canceled) return;
        if (data.Response === "False") throw new Error("Movie not found");
        setError("");
        setMovies(data.Search);
      } catch (err) {
        // if (canceled) return;
        if (err.name !== "AbortError") {
          setMovies([]);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    setSelectedId(null);
    fetchMovies();

    return () => {
      controller.abort();
      // canceled = true;
    };
  }, [query, setSelectedId]);
  return {movies, error, isLoading};
};

export default useMovies;
