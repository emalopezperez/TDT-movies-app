import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import DetailMovie from "./pages/detail-movie/DetailMovie";
import Search from "./pages/search/Search";
import Menssage from "./utilities/menssage/Menssage";
import Register from "./pages/auth/rigister/Register";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="*" element={<Menssage menssage="Page not found" />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/detail-movie/:id" element={<DetailMovie />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </main>
  );
}

export default App;
