import "./buttonsFavorite.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/states/favorites";
import { AppStore } from "../../redux/store";
import store from "../../redux/store";
import { Movie } from "../../models/types";

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

    dispatch(addFavorite(movie));
    setLocalIsFavorite(!localIsFavorite);
  };

  const handleRemoveFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(removeFavorite(id));
    setLocalIsFavorite(!localIsFavorite);
  };

  return (
    <>
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
    </>
  );
};

export default ButtonsFavorite;
