import "../filter.scss";
import { useEffect } from "react";
import { Movie } from "../../../../models/types";

interface Props {
  listMovies: Movie[];
  setFiltered: (listMovies: Movie[]) => void;
  genre: number;
  setGenre: (genre: number) => void;
}

const FilterMovies: React.FC<Props> = ({
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

    const filter = listMovies.filter(({ genre_ids }) =>
      genre_ids?.includes(genre)
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

export default FilterMovies;
