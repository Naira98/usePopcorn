import Movie from '../Movie/Movie'

const MovieList = ({movies,selectedId, setSelectedId}) => {
  return (
    <ul className="list">
          {movies?.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} selectedId={selectedId} setSelectedId={setSelectedId} />
          ))}
        </ul>
  )
}

export default MovieList