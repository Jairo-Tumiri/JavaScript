import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { getMovieImg } from "../utils/getMovieImg";
import style from "./MovieDetails.module.css";

export default function MovieDetails() {
  const { movieid } = useParams();
  const [movie, setMovie] = useState(null);
  const imgeUrl = getMovieImg(movie?.poster_path, 500);

  useEffect(() => {
    get(`/movie/${movieid}`).then((data) => {
      setMovie(data);
      console.log(data);
    });
  }, [movieid]);

  return (
    <div className={style.movieDetails}>
      <div className={style.movieDetailsCarucel}>
        <img src={imgeUrl} alt={`imagen de ${movie?.title}`} />
      </div>
      <div className={style.movieDetailsInfo}>
        <h2>
          <strong>Titulo:</strong> {movie?.title}
        </h2>
        <p>
          <strong>Descripcion:</strong> {movie?.overview}
        </p>
        <ul>
          <strong>Generos:</strong>
          {movie?.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
