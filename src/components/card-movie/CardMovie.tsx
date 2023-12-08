import "./cardMovie.scss";
import { Link } from "react-router-dom";
import { Movie } from "../../models/types";
import { imgDefault } from "../../consts/imageDefault";
import { paragraphDefault } from "../../consts/paragraphDefault";
import { roundNumber } from "../../utilities/roundNumber/roundNumber";
import { motion } from "framer-motion";

import ButtonsFavorite from "../buttons-favorite/ButtonsFavorite";

interface CardMovieProps {
  movie: Movie;
}

const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
  const { poster_path, title, overview, id, vote_average } = movie;

  return (
    <Link to={`/detail-movie/${id}`} className="card ">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        layout
        className="card bg-white">
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
          <span>{roundNumber(vote_average)}</span>
        </div>
        <div className="card-info">
          <h3>{title}</h3>
          <div>
            <p>{overview !== "" ? overview : paragraphDefault}</p>

            <div className="btn-fav">
              <ButtonsFavorite movie={movie} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CardMovie;
