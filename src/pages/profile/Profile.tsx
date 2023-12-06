import "./profile.scss";
import { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import Card from "./components/card/Card";
import { useSelector, useDispatch } from "react-redux";
import store from "../../redux/store";
import { AppStore } from "../../redux/store";
import { getTotalFavorites } from "../../redux/states/favorites";
import Menssage from "../../utilities/menssage/Menssage";

type AppDispatch = typeof store.dispatch;

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();

  const favorites = useSelector(
    (state: AppStore) => state.favorites.favoritesMovies
  );

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getTotalFavorites());
    };

    fetchData();
    window.scrollTo(0, -20);
  }, [favorites]);

  return (
    <>
      <Nav />
      {favorites.length <= 0 ? (
        <Menssage menssage="Usted no tiene favoritos" />
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
