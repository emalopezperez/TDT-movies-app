/* eslint-disable react/prop-types */
import "./sliderMovies.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SliderMovies = ({ title, url }: { title: string; url: string }) => {
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
        <SwiperSlide className="prueba">Slide 1</SwiperSlide>
        <SwiperSlide className="prueba">Slide 2</SwiperSlide>
        <SwiperSlide className="prueba">Slide 3</SwiperSlide>
        <SwiperSlide className="prueba">Slide 4</SwiperSlide>
        <SwiperSlide className="prueba">Slide 5</SwiperSlide>
        <SwiperSlide className="prueba">Slide 6</SwiperSlide>
        <SwiperSlide className="prueba">Slide 7</SwiperSlide>
        <SwiperSlide className="prueba">Slide 8</SwiperSlide>
        <SwiperSlide className="prueba">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderMovies;
