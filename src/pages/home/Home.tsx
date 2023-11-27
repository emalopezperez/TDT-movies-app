import "./home.scss";
import Hero from "../../components/hero/Hero";
import SliderMovies from "../../components/sliderMovies/SliderMovies";

const Home = () => {
  return (
    <>
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
