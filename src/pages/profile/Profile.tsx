import "./profile.scss";
import Nav from "../../components/nav/Nav";
import { useSelector, useDispatch } from "react-redux";
import { AppStore } from "../../redux/store";
import { useEffect, useState } from "react";
import { getTotalFavorites } from "../../redux/states/favorites";
import store from "../../redux/store";

type AppDispatch = typeof store.dispatch;

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const favorites = useSelector(
    (state: AppStore) => state.favorites.favoritesMovies
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getTotalFavorites());
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Nav />
      <main className="profile-container">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <ul>
            {favorites.map((movie) => (
              <li key={movie.id}>
                {movie.titulo}
                {movie.imagen}
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default Profile;
