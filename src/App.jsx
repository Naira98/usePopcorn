import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import useMovies from "./Hooks/useMovies";


const App = () => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);


  const {movies, error, isLoading} = useMovies(query, setSelectedId);

  return (
    <>
      <Navbar query={query} setQuery={setQuery}>
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </Navbar>
      <Main
        movies={movies}
        error={error}
        isLoading={isLoading}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </>
  );
};

export default App;
