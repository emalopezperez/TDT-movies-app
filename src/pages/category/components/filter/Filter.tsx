import "./filter.scss";
import { useEffect } from "react";
import { Movie } from "../../../../models/types";

interface Props {
  listMovies: Movie[];
  setFiltered: React.Dispatch<React.SetStateAction<Movie>>;
  genre: number;
  setGenre: React.Dispatch<React.SetStateAction<number>>;
}

const Filter: React.FC<Props> = ({
  listMovies,
  setFiltered,
  genre,
  setGenre,
}) => {
  useEffect(() => {
    if (genre === 0) {
      setFiltered(listMovies);
      return;
    }

    const filter = listMovies.filter((movie) =>
      movie.genre_ids.includes(genre)
    );

    setFiltered(filter);
  }, [genre]);

  return (
    <nav className="container-filter">
      <div className="filters">
        <button
          className={genre === 0 ? "active-filter" : ""}
          onClick={() => {
            setGenre(0);
          }}>
          All
        </button>
        <button
          className={genre === 12 ? "active-filter" : ""}
          onClick={() => {
            setGenre(12);
          }}>
          Adventure
        </button>
        <button
          className={genre === 18 ? "active-filter" : ""}
          onClick={() => {
            setGenre(18);
          }}>
          Drama
        </button>
        <button
          className={genre === 28 ? "active-filter" : ""}
          onClick={() => {
            setGenre(28);
          }}>
          Accion
        </button>
      </div>
    </nav>
  );
};

export default Filter;
