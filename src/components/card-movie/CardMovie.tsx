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
        className="absolute"
      />
      <div className="card-filter absolute"></div>
      <div className="span-number">
        <span>9.2</span>
      </div>

      <div className="card-info">
        <h3>{title}</h3>
        <div>
          <p>{overview}</p>
          <button className="button-like">+</button>
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
