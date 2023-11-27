import "./cardMovie.scss";
import { Link } from "react-router-dom";
import { Movie } from "../../models/types";
import { imgDefault } from "../../consts/imageDefault";

interface CardMovieProps {
  movie: Movie;
}

const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
  const { poster_path, title, overview, id } = movie;

  return (
    <Link to={`/detail-movie/${id}`} className="card ">
      <img
        src={
          poster_path !== null
            ? `${import.meta.env.VITE_PATH_IMG}${poster_path}`
            : imgDefault
        }
        alt={title}
      />
      <div className="card-filter"></div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </Link>
  );
};

export default CardMovie;
