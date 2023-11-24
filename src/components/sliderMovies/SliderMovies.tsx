import "./sliderMovies.scss";
import { useEffect, useState } from "react";
import { Movie, Fetch } from "../../models/types";
import { FetchData } from "../../services/fetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardMovie from "../card-movie/CardMovie";

interface Props {
  title: string;
  url: string;
}

const SliderMovies = ({ title, url }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSuccess = (response) => {
    setMovies(response.slice(1, 15));
  };

  const handleError = (error: string) => {
    console.error(error);
  };

  const getMovies = () => {
    const fetchOptions: Fetch = {
      type: "GET",
      url: `https://api.themoviedb.org/3/${url}api_key=0137837942ce96a8946a8ccf1ce02b76&language=en-US&page=1`,
      success: handleSuccess,
      error: handleError,
    };

    FetchData.customFetch(fetchOptions);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="slider-container">
      <h3 className="title-movies">{title}</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={18}
        grabCursor={true}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper">
        {movies.map((movie) => (
          <SwiperSlide className="card-container">
            <CardMovie key={movie.id} movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderMovies;
