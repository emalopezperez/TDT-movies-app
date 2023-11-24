import "./home.scss";
import Heroes from "../../components/heroes/Heroes";
import SliderMovies from "../../components/sliderMovies/SliderMovies";

const Home = () => {
  return (
    <>
      <Heroes />
      <main className="container-home">
        <SliderMovies title="Comedia" url="movie/upcoming?" />

        <SliderMovies title="Populares" url="movie/top_rated?" />
      </main>
    </>
  );
};

export default Home;
