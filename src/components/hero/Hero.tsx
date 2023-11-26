import { useEffect, useState } from "react";
import { Movie } from "../../models/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fetch } from "../../models/types";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import HeroItem from "./components/heroItem/HeroItem";
import { FetchData } from "../../services/fetchData";

const API_URL = `${import.meta.env.VITE_BASE_URL}${
  import.meta.env.VITE_ENDPOINT_POPULAR
}api_key=${import.meta.env.VITE_API_KEY}${
  import.meta.env.VITE_LANGUAGE
}&page=1`;

type ListMovies = Movie[];

const Hero = () => {
  const [movies, setMovies] = useState<ListMovies>([]);

  const handleSuccess = (response: ListMovies) => {
    setMovies(response.results.slice(1, 6));
  };

  const handleError = (error: string): void => {
    console.error(`Error fetching data: ${error}`);
  };

  const getMovies = () => {
    const fetchOptions: Fetch = {
      type: "GET",
      url: API_URL,
      success: handleSuccess,
      error: handleError,
    };
    FetchData.customFetch(fetchOptions);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <header className="container-heroes">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3800,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {movies.map((movie, key) => (
          <SwiperSlide key={key}>
            <HeroItem data={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default Hero;
