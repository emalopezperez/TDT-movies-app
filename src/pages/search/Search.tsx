import "./search.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../../services/fetchData";
import { Movie, Fetch } from "../../models/types";
import ListMovies from "../../components/list-movies/ListMovies";
import Spinner from "../../components/spinner/Spinner";
import Menssage from "../../utilities/menssage/Menssage";
import { motion } from "framer-motion";

type ListMovies = Movie[];

const Search = () => {
  const { query } = useParams();

  const API_URL = `${import.meta.env.VITE_BASE_URL}${
    import.meta.env.VITE_ENDPOINT_SEARCH
  }${query}&api_key=${import.meta.env.VITE_API_KEY}`;

  const [listMovies, setListMovies] = useState<ListMovies>([]);
  const [spinner, setSpinner] = useState(true);

  const handleSuccess = (response: ListMovies) => {
    setListMovies(response.results);
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
  }, [query]);

  return (
    <section>
      <Spinner spinner={spinner} />
      {listMovies.length == 0 ? (
        <Menssage menssage={`No esta disponible`} />
      ) : (
        <div className="list-movies-search">
          <motion.div
            animate={{ y: 40 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="list-movies">
            <ListMovies data={listMovies} />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Search;
