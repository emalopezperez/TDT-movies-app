import "./profile.scss";
import { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import Card from "./components/card/Card";
import { useSelector, useDispatch } from "react-redux";
import store from "../../redux/store";
import { AppStore } from "../../redux/store";
import { getTotalFavorites } from "../../redux/states/favorites";
import Menssage from "../../utilities/menssage/Menssage";
import Spinner from "../../components/spinner/Spinner";

type AppDispatch = typeof store.dispatch;

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();

  const favorites = useSelector(
    (state: AppStore) => state.favorites.favoritesMovies
  );

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getTotalFavorites());
      setSpinner(false);
    };

    fetchData();
  }, [favorites]);

  return (
    <>
      <Nav />
      {spinner ? (
        <Spinner spinner={spinner} />
      ) : favorites.length <= 0 ? (
        <Menssage menssage="No tiene peliculas guardadas" />
      ) : (
        <main className="profile-container">
          <div className="list-card">
            {favorites.map((movie) => (
              <Card data={movie} key={movie.id} />
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default Profile;
