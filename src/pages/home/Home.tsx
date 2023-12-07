import { useEffect } from "react";
import "./home.scss";
import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";
import SliderMovies from "../../components/sliderMovies/SliderMovies";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <main className="container-home">
        <SliderMovies title="Comedia" endpoint="movie/upcoming?" />
        <SliderMovies title="lo más valorados" endpoint="movie/top_rated?" />
        <SliderMovies title="Tendencias " endpoint="trending/all/day?" />
      </main>
    </>
  );
};
export default Home;
