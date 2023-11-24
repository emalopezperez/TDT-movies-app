import "./cardMovie.scss";
import { Link } from "react-router-dom";
import { Movie } from "../../models/types";

interface CardMovieProps {
  movie: Movie;
}

const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
  const { poster_path, title, overview } = movie;

  return (
    <Link to="/" className="card">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
      />

      <div className="card-info">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>

      <div className="card-filter"></div>
    </Link>
  );
};

export default CardMovie;
