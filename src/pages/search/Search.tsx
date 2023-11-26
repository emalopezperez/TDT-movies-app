import "./search.scss";
import { FetchData } from "../../services/fetchData";
import { useState, useEffect } from "react";
import ListMovies from "../../components/list-movies/ListMovies";
import { useParams } from "react-router-dom";
import { Movie, Fetch } from "../../models/types";

type ListMovies = Movie[];

const Search = () => {
  const { query } = useParams();

  const API_URL = `${import.meta.env.VITE_BASE_URL}${
    import.meta.env.VITE_ENDPOINT_SEARCH
  }${query}&api_key=${import.meta.env.VITE_API_KEY}`;

  const [listMovies, setListMovies] = useState<ListMovies>([]);

  const handleSuccess = (response: ListMovies) => {
    setListMovies(response.results);
  };

  const handleError = (error: string): void => {
    console.error(`Error fetching data: ${error}`);
  };

  const getMovies = () => {
    const fetchOptions: Fetch = {
      type: "GET",
      url: API_URL,
      success: handleSuccess,
      error: handleError,
    };
    FetchData.customFetch(fetchOptions);
  };

  useEffect(() => {
    getMovies();
  }, [query]);

  return (
    <main className="list-movies-search">
      <ListMovies data={listMovies} />
    </main>
  );
};

export default Search;
