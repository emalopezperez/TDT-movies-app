import "./home.scss";
import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";
import SliderMovies from "../../components/sliderMovies/SliderMovies";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <main className="container-home">
        <SliderMovies title="Lo más popular " endpoint="movie/popular?" />
        <SliderMovies title="Comedia" endpoint="movie/upcoming?" />
        <SliderMovies title="lo más valorados" endpoint="movie/top_rated?" />
      </main>
    </>
  );
};

export default Home;
