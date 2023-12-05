import "./series.scss";
import { useState, useEffect } from "react";
import { FetchData } from "../../../services/fetchData";
import Nav from "../../../components/nav/Nav";
import { Movie, Fetch } from "../../../models/types";
import ListMovies from "../../../components/list-movies/ListMovies";
import Filter from "../components/filter-series/FilterSeries";
import Spinner from "../../../components/spinner/Spinner";

type listSeries = Movie[];

interface ApiResponse {
  results: Movie[];
}

const Series = () => {
  const [listSeries, setListSeries] = useState<listSeries>([]);
  const [filtered, setFiltered] = useState<listSeries>([]);
  const [genre, setGenre] = useState<number>(0);

  const [spinner, setSpinner] = useState(true);

  const API_URL = `${import.meta.env.VITE_BASE_URL}tv/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }${import.meta.env.VITE_LANGUAGE}&page=2`;

  const handleSuccess = (response: ApiResponse) => {
    console.log(response);
    const { results } = response;

    setListSeries(results);
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

  const getSeries = () => {
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
    getSeries();
    setSpinner(true);
    window.scrollTo(0, -20);
  }, []);

  return (
    <>
      <Nav />
      <Spinner spinner={spinner} />
      <div className="category-movies">
        <Filter
          listSeries={listSeries}
          setFiltered={setFiltered}
          genre={genre}
          setGenre={setGenre}
        />

        <ListMovies data={filtered} />
      </div>
    </>
  );
};

export default Series;
