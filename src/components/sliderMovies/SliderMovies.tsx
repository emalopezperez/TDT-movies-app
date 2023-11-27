import "./sliderMovies.scss";
import { useEffect, useState } from "react";
import { Movie, Fetch } from "../../models/types";
import { FetchData } from "../../services/fetchData";
import CardMovie from "../card-movie/CardMovie";
import Spinner from "../spinner/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {
  title: string;
  endpoint: string;
}

type ListMovies = Movie[];

interface ApiResponse {
  results: Movie[];
}

const SliderMovies: React.FC<Props> = ({ title, endpoint }) => {
  const API_URL = `${import.meta.env.VITE_BASE_URL}${endpoint}api_key=${
    import.meta.env.VITE_API_KEY
  }${import.meta.env.VITE_LANGUAGE}&page=1`;

  const [movies, setMovies] = useState<ListMovies>([]);
  const [spinner, setSpinner] = useState(true);

  const handleSuccess = (response: ApiResponse) => {
    const { results } = response;

    setMovies(results.slice(1, 20));
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
    <div className="slider-container">
      <Spinner spinner={spinner} />
      <h3 className="title-movies">{title}</h3>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper">
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="card-container ">
            <CardMovie movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderMovies;
