import "./card.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../../redux/store";
import store from "../../../../redux/store";
import { removeFavorite } from "../../../../redux/states/favorites";
import { Link } from "react-router-dom";
import { imgDefault } from "../../../../consts/imageDefault";
import { paragraphDefault } from "../../../../consts/paragraphDefault";
import { motion } from "framer-motion";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export interface FavoriteMovies {
  id?: number;
  titulo?: string;
  descripcion?: string;
  imagen?: string;
}

interface CardMovieProps {
  data: FavoriteMovies;
}

export type AppDispatch = typeof store.dispatch;

const Card: React.FC<CardMovieProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { descripcion, titulo, imagen, id } = data;

  const [localIsFavorite, setLocalIsFavorite] = useState(false);

  const isFavorite = useSelector((store: AppStore) =>
    store.favorites.favoritesMovies.some((favMovie) => favMovie.id === id)
  );

  useEffect(() => {
    setLocalIsFavorite(isFavorite);
  }, [isFavorite]);

  const handleRemoveFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(removeFavorite(id));
    setLocalIsFavorite(!localIsFavorite);
  };

  return (
    <Link to={`/detail-movie/${id}`} className="card ">
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="card bg-white">
        <img
          src={
            imagen !== null
              ? `${import.meta.env.VITE_PATH_IMG}${imagen}`
              : imgDefault
          }
          alt={titulo}
          className="absolute"
        />
        <div className="card-filter absolute"></div>
        <div className="span-number">
          <span>9.2</span>
        </div>
        <div className="card-info">
          <h3>{titulo}</h3>
          <div>
            <p>{descripcion !== "" ? descripcion : paragraphDefault}</p>

            {localIsFavorite ? (
              <button
                onClick={(e) => handleRemoveFavorite(e)}
                className={
                  localIsFavorite ? "button-likes button-liked" : "button-likes"
                }>
                <span>
                  <MinusIcon
                    className="block h-5 w-5 text-white "
                    aria-hidden="true"
                  />
                </span>
              </button>
            ) : (
              <button className="button-likes">
                <span className="">
                  <PlusIcon
                    className="block h-5 w-5 text-white "
                    aria-hidden="true"
                  />
                </span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
