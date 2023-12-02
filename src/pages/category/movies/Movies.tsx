import "./movies.scss";
import { useState, useEffect } from "react";
import { FetchData } from "../../../services/fetchData";
import Nav from "../../../components/nav/Nav";
import { Movie, Fetch } from "../../../models/types";
import ListMovies from "../../../components/list-movies/ListMovies";
import Filter from "../components/filter/Filter";
import Spinner from "../../../components/spinner/Spinner";

type ListMovies = Movie[];

interface ApiResponse {
  results: Movie[];
  total_pages: number;
}

const Movies = () => {
  const [listMovies, setListMovies] = useState<ListMovies>([]);
  const [filtered, setFiltered] = useState<ListMovies>([]);
  const [genre, setGenre] = useState<number>(0);

  const [spinner, setSpinner] = useState(true);

  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const API_URL = `${import.meta.env.VITE_BASE_URL}${
    import.meta.env.VITE_ENDPOINT_POPULAR
  }api_key=${import.meta.env.VITE_API_KEY}${
    import.meta.env.VITE_LANGUAGE
  }&page=${page}`;

  const handleSuccess = (response: ApiResponse) => {
    const { results } = response;

    setTotalPages(response.total_pages);

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
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Spinner spinner={spinner} />
      <div className="movies">
        <Filter
          listMovies={listMovies}
          setFiltered={setFiltered}
          genre={genre}
          setGenre={setGenre}
        />

        <div className="list-movies">
          <ListMovies data={filtered} />
        </div>
      </div>
    </>
  );
};

export default Movies;
