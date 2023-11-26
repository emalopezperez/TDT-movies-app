import "./home.scss";
import Hero from "../../components/hero/Hero";
import SliderMovies from "../../components/sliderMovies/SliderMovies";

const Home = () => {
  return (
    <>
      <Hero />
      <main className="container-home">
        <SliderMovies title="Comedia" endpoint="movie/upcoming?" />
        <SliderMovies title="Populares" endpoint="movie/top_rated?" />
      </main>
    </>
  );
};

export default Home;
