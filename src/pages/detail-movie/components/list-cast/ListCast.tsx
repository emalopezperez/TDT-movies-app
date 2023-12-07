import "./listCast.scss";
import { useEffect, useState } from "react";
import { FetchData } from "../../../../services/fetchData";
import { Fetch } from "../../../../models/types";
import { Cast } from "../../../../models/casts";
import { Swiper, SwiperSlide } from "swiper/react";
import CardCast from "../card-cast/CardCast";
import "swiper/css";

interface Props {
  id: number | string | undefined;
}

type ResponseCast = {
  cast: Cast[];
};

const ListCast: React.FC<Props> = ({ id }) => {
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
    import.meta.env.VITE_API_KEY
  }`;

  const [casts, setCasts] = useState<Cast[]>([]);

  const handleSuccess = (response: ResponseCast) => {
    setCasts(response.cast.slice(1, 10).filter((cast) => cast.profile_path));
  };

  const handleError = (error: string): void => {
    console.error(`Error fetching data: ${error}`);
  };

  const handleAlways = () => {};

  const getCasts = () => {
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
    getCasts();
  }, [id]);

  console.log(casts);
  return (
    <main className="container-casts">
      <h3 className="title-movies">Elenco</h3>
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
            spaceBetween: 10,
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
        {casts.map((cast) => (
          <SwiperSlide key={cast.id} className="card-container ">
            <CardCast cast={cast} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default ListCast;
