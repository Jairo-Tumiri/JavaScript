import { Link } from "react-router-dom";
import { Progress } from "rsuite";

export default function MovieCard({ movie }) {
  const percent = movie.vote_average * 10;
  const imgeUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const status = percent === 100 ? "success" : null;
  const color = percent === 100 ? "#52c41a" : "#3385ff";
  return (
    <li className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-card-cont">
        <picture className="movie-card-img">
          <img src={imgeUrl} alt={`imagen de ${movie.title}`} />
        </picture>
        <h4 className="movie-card-title">{movie.title}</h4>
      </Link>
      <Progress.Circle percent={percent} strokeColor={color} status={status} />
    </li>
  );
}
