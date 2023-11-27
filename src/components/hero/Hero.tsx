import { useEffect, useState } from "react";
import { Movie } from "../../models/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fetch } from "../../models/types";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroItem from "./components/heroItem/HeroItem";
import { FetchData } from "../../services/fetchData";
import Spinner from "../spinner/Spinner";

const API_URL = `${import.meta.env.VITE_BASE_URL}${
  import.meta.env.VITE_ENDPOINT_POPULAR
}api_key=${import.meta.env.VITE_API_KEY}${
  import.meta.env.VITE_LANGUAGE
}&page=1`;

type ListMovies = Movie[];

interface ApiResponse {
  results: Movie[];
}

const Hero = () => {
  const [movies, setMovies] = useState<ListMovies>([]);
  const [spinner, setSpinner] = useState(true);

  const handleSuccess = (response: ApiResponse) => {
    const { results } = response;

    setMovies(results.slice(1, 6));
  };

  const handleError = (error: string): void => {
    console.error(`Error fetching data: ${error}`);
  };
  const handleAlways = () => {
    setSpinner(false);
  };

  const getMovies = () => {
    const fetchOptions: Fetch = {
      type: "GET",
      url: API_URL,
      success: handleSuccess,
      error: handleError,
      always: handleAlways,
    };
    FetchData.customFetch(fetchOptions);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <header>
      <Spinner spinner={spinner} />
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
