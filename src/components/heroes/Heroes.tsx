import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fetch } from "../../models/types";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import HeroesItem from "./components/heroesItem/HeroesItem";
import { FetchData } from "../../services/fetchData";

const Heroes = () => {
  const [movies, setMovies] = useState([]);

  const handleSuccess = (response ) => {
    setMovies(response.slice(1, 6));
  };

  const handleError = (error: string) => {
    console.error(error);
  };

  const getMovies = () => {
    const fetchOptions: Fetch = {
      type: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=0137837942ce96a8946a8ccf1ce02b76&language=en-US&page=1",
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
            <HeroesItem data={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default Heroes;
