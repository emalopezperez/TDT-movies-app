import "./search.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../../services/fetchData";
import Nav from "../../components/nav/Nav";
import { Movie, Fetch } from "../../models/types";
import ListMovies from "../../components/list-movies/ListMovies";
import Spinner from "../../components/spinner/Spinner";
import Menssage from "../../utilities/menssage/Menssage";
import { motion } from "framer-motion";

type ListMovies = Movie[];

interface ApiResponse {
  results: Movie[];
  total_pages: number;
}

const Search = () => {
  const { query } = useParams();

  const [listMovies, setListMovies] = useState<ListMovies>([]);
  const [spinner, setSpinner] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const API_URL = `${import.meta.env.VITE_BASE_URL}${
    import.meta.env.VITE_ENDPOINT_SEARCH
  }${query}&api_key=${
    import.meta.env.VITE_API_KEY
  }&language=es-ES&page=${page}`;

  const handleSuccess = (response: ApiResponse) => {
    const { results } = response;

    setTotalPages(response.total_pages);

    setListMovies(results);
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

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    getMovies();
    setSpinner(true);
  }, [query, page]);

  return (
    <>
      <Nav />
      <Spinner spinner={spinner} />
      {listMovies.length == 0 ? (
        <Menssage menssage={`No esta disponible`} />
      ) : (
        <div className="list-movies-search">
          <motion.div
            animate={{ y: 40 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="list-movies">
            <ListMovies
              data={listMovies}
              handlePageChange={handlePageChange}
              page={page}
              totalPages={totalPages}
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Search;
