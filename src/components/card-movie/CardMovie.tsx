import "./cardMovie.scss";
import { Link } from "react-router-dom";
import { Movie } from "../../models/types";

interface CardMovieProps {
  movie: Movie;
}

const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
  const { poster_path, title, overview, id } = movie;

  return (
    <Link to={`/detail-movie/${id}`} className="card ">
      <img src={`${import.meta.env.VITE_PATH_IMG}${poster_path}`} alt={title} />
      <div className="card-filter"></div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </Link>
  );
};

export default CardMovie;
