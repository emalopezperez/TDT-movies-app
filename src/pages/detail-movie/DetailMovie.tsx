import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../../services/fetchData";
import "./detailMovie.scss";
import Detail from "../../components/detailMovie/Detail";
import Spinner from "../../components/spinner/Spinner";
import { Fetch, Movie } from "../../models/types";

const DetailMovie = () => {
  const { id } = useParams();

  const API_URL = `${import.meta.env.VITE_BASE_URL}movie/
    ${id}?api_key=${import.meta.env.VITE_API_KEY}`;

  const [movie, setMovie] = useState({});
  const [spinner, setSpinner] = useState(true);

  const handleSuccess = (response: Movie) => {
    setMovie(response);
  };

  const handleError = (error: string): void => {
    console.error(`Error fetching data: ${error}`);
  };

  const handleAlways = () => {
    setSpinner(false);
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
    <main className="container-detail">
      <Spinner spinner={spinner} />
      <Detail data={movie} />
    </main>
  );
};

export default DetailMovie;
