import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { get } from "../data/httpClient";
import style from "./ContextMovieCard.module.css";

export default function ContextMovieCard() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className={style.contextMovieCard}>
      {movies?.map((movie, i) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
