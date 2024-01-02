import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { getMovieImg } from "../utils/getMovieImg";
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
    <div className="moviedetails">
      <div className="moviedetails-carucel">
        <img src={imgeUrl} alt={`imagen de ${movie?.title}`} />
      </div>
      <div className="moviedetails-info">
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
