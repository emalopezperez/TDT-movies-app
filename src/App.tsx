import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/auth/login/Login";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import DetailMovie from "./pages/detail-movie/DetailMovie";
import Search from "./pages/search/Search";
import Menssage from "./utilities/menssage/Menssage";
import Register from "./pages/auth/rigister/Register";
import AuthGuards from "./guards/authGuards";

import { Suspense, lazy } from "react";

function App() {
  return (
    <main>
      <Suspense fallback={<>cargando...</>}>
        <Provider store={store}>
          <Nav />
          <Routes>
            <Route element={<AuthGuards />}>
              <Route path="/" element={<Home />} />
              <Route path="/detail-movie/:id" element={<DetailMovie />} />
              <Route path="/search/:query" element={<Search />} />
            </Route>

            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="*" element={<Menssage menssage="Page not found" />} />
          </Routes>
        </Provider>
      </Suspense>
    </main>
  );
}

export default App;
