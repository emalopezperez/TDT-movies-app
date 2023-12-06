import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../../services/fetchData";
import "./detailMovie.scss";
import Nav from "../../components/nav/Nav";
import Detail from "./components/detailMovie/Detail";
import Spinner from "../../components/spinner/Spinner";
import { Fetch } from "../../models/types";
import { motion } from "framer-motion";
import { DetailMovies } from "../../models/detail-movies";

const initialDetailMovieState: DetailMovies = {
  backdrop_path: "",
  genres: [],
  spoken_languages: [],
  id: 0,
  overview: "",
  popularity: 0,
  poster_path: "",
  original_title: "",
  release_date: "",
  runtime: 0,
};

const DetailMovie = () => {
  const { id } = useParams();

  const API_URL = `${import.meta.env.VITE_BASE_URL}movie/
    ${id}?api_key=${import.meta.env.VITE_API_KEY}`;

  const [movie, setMovie] = useState<DetailMovies>(initialDetailMovieState);

  const [spinner, setSpinner] = useState(true);

  const handleSuccess = (response: DetailMovies) => {
    setMovie(response);
  };

  const handleError = (error: string): void => {
    console.error(`Error fetching data: ${error}`);
  };

  const handleAlways = () => {
    setTimeout(() => {
      setSpinner(false);
    }, 100);
  };

  const getMovie = () => {
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
    getMovie();
  }, []);

  return (
    <>
      <Nav />
      <Spinner spinner={spinner} />
      <motion.div
        className="container-detail"
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 0.7 }}>
        <Detail data={movie} />
      </motion.div>
    </>
  );
};

export default DetailMovie;
