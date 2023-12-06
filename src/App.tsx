import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTotalFavorites } from "./redux/states/favorites";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Home from "./pages/home/Home";
import DetailMovie from "./pages/detail-movie/DetailMovie";
import Search from "./pages/search/Search";
import Menssage from "./utilities/menssage/Menssage";
import Register from "./pages/auth/rigister/Register";
import Profile from "./pages/profile/Profile";
import Movies from "./pages/category/movies/Movies";
import AuthGuards from "./guards/authGuards";
import Series from "./pages/category/series/Series";
import { Suspense } from "react";
import store from "./redux/store";

function App() {
  type AppDispatch = typeof store.dispatch;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTotalFavorites());
  }, []);

  return (
    <main>
      <Suspense fallback={<>cargando...</>}>
        <Routes>
          <Route element={<AuthGuards />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail-movie/:id" element={<DetailMovie />} />
            <Route path="/category/movies" element={<Movies />} />
            <Route path="/category/series" element={<Series />} />
            <Route path="/user-profile" element={<Profile />} />
            <Route path="/search/:query" element={<Search />} />
          </Route>

          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="*" element={<Menssage menssage="Page not found" />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
