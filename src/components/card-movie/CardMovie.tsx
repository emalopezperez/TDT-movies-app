import "./cardMovie.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/states/favorites";
import { Link } from "react-router-dom";
import { Movie } from "../../models/types";
import { imgDefault } from "../../consts/imageDefault";
import { paragraphDefault } from "../../consts/paragraphDefault";
import { motion } from "framer-motion";
import { AppStore } from "../../redux/store";
import store from "../../redux/store";

interface CardMovieProps {
  movie: Movie;
}

export type AppDispatch = typeof store.dispatch;

const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { poster_path, title, overview, id } = movie;

  const [localIsFavorite, setLocalIsFavorite] = useState(false);

  const isFavorite = useSelector((store: AppStore) =>
    store.favorites.favoritesMovies.some((favMovie) => favMovie.id === id)
  );

  useEffect(() => {
    setLocalIsFavorite(isFavorite);
  }, [isFavorite]);

  const handleAddFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const movie = {
      id: id,
      titulo: title,
      descripcion: overview,
      imagen: poster_path,
    };

    dispatch(addFavorite(movie));
    setLocalIsFavorite(!localIsFavorite);
  };

  const handleRemoveFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(removeFavorite(id));
    setLocalIsFavorite(!localIsFavorite);
  };

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

            {localIsFavorite ? (
              <button
                onClick={(e) => handleRemoveFavorite(e)}
                className="button-like">
                -
              </button>
            ) : (
              <button onClick={handleAddFavorite} className="button-like">
                +
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CardMovie;
