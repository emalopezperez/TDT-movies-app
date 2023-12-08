import "./buttonsFavorite.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  getTotalFavorites,
} from "../../redux/states/favorites";
import { AppStore } from "../../redux/store";
import store from "../../redux/store";
import { Movie } from "../../models/types";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

type AppDispatch = typeof store.dispatch;

interface Props {
  movie: Movie;
}

const ButtonsFavorite: React.FC<Props> = ({ movie }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [localIsFavorite, setLocalIsFavorite] = useState(false);

  const { poster_path, title, overview, id } = movie;

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

    dispatch(addFavorite(movie)).then(() => {
      dispatch(getTotalFavorites());
    });

    setLocalIsFavorite(!localIsFavorite);
  };

  const handleRemoveFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(removeFavorite(id)).then(() => {
      dispatch(getTotalFavorites());
    });

    setLocalIsFavorite(!localIsFavorite);
  };

  return (
    <>
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
        <button
          onClick={handleAddFavorite}
          className="button-likes inset-0 bg-gray-500 bg-opacity-25 transition-opacity">
          <span className="">
            <PlusIcon
              className="block h-5 w-5 text-white "
              aria-hidden="true"
            />
          </span>
        </button>
      )}
    </>
  );
};

export default ButtonsFavorite;
