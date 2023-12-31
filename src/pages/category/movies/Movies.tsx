import "./movies.scss";
import { useState, useEffect } from "react";
import { FetchData } from "../../../services/fetchData";
import Nav from "../../../components/nav/Nav";
import { Movie, Fetch } from "../../../models/types";
import ListMovies from "../../../components/list-movies/ListMovies";
import FilterMovies from "../components/filter-movies/FilterMovies";
import Spinner from "../../../components/spinner/Spinner";

type ListMovies = Movie[];

interface ApiResponse {
  results: Movie[];
}

const Movies = () => {
  const [listMovies, setListMovies] = useState<ListMovies>([]);
  const [filtered, setFiltered] = useState<ListMovies>([]);
  const [genre, setGenre] = useState<number>(0);

  const [spinner, setSpinner] = useState(true);

  const API_URL = `${import.meta.env.VITE_BASE_URL}${
    import.meta.env.VITE_ENDPOINT_POPULAR
  }api_key=${import.meta.env.VITE_API_KEY}${
    import.meta.env.VITE_LANGUAGE
  }&page=2`;

  const handleSuccess = (response: ApiResponse) => {
    const { results } = response;

    setListMovies(results);
    setFiltered(results);
  };

  const handleError = (error: string): void => {
    console.error(`Error fetching data: ${error}`);
  };

  const handleAlways = () => {
    setTimeout(() => {
      setSpinner(false);
    }, 600);
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
    setSpinner(true);
    window.scrollTo(0, -20);
  }, []);

  return (
    <>
      <Nav />
      <Spinner spinner={spinner} />
      <div className="category-movies">
        <FilterMovies
          listMovies={listMovies}
          setFiltered={setFiltered}
          genre={genre}
          setGenre={setGenre}
        />

        <ListMovies data={filtered} />
      </div>
    </>
  );
};

export default Movies;
