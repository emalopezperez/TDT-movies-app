import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../../services/fetchData";
import "./detailMovie.scss";
import Nav from "../../components/nav/Nav";
import Detail from "./components/detailMovie/Detail";
import Spinner from "../../components/spinner/Spinner";
import { Fetch } from "../../models/types";
import { DetailMovies } from "../../models/detail-movies";
import ListCast from "./components/list-cast/ListCast";

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
    }, 120);
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Spinner spinner={spinner} />
      <div className="container-detail">
        <Detail data={movie} />
        <ListCast id={id} />
      </div>
    </>
  );
};

export default DetailMovie;
