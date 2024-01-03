import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { get } from "../data/httpClient";

export default function ContextMovieCard() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      console.log(data);
    });
  }, []);
  return (
    <ul className="context-movie-card">
      {movies?.map((movie, i) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
