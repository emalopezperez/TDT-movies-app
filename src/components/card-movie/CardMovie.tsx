import "./cardMovie.scss";
import { Link } from "react-router-dom";
import { Movie } from "../../models/types";
import { imgDefault } from "../../consts/imageDefault";
import { paragraphDefault } from "../../consts/paragraphDefault";
import { motion } from "framer-motion";

import ButtonsFavorite from "../buttons-favorite/ButtonsFavorite";

interface CardMovieProps {
  movie: Movie;
}

const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
  const { poster_path, title, overview, id } = movie;
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
          <span>9.2</span>
        </div>
        <div className="card-info">
          <h3>{title}</h3>
          <div>
            <p>{overview !== "" ? overview : paragraphDefault}</p>

            <ButtonsFavorite movie={movie} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CardMovie;
