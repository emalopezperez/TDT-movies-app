import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import NotFound from "./components/404/404";
import DetailMovie from "./pages/detail-movie/DetailMovie";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail-movie/:id" element={<DetailMovie />} />
      </Routes>
    </main>
  );
}

export default App;
