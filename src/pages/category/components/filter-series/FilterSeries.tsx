import "../filter.scss";
import { useEffect } from "react";
import { Movie } from "../../../../models/types";

interface Props {
  listSeries: Movie[];
  setFiltered: (listSeries: Movie[]) => void;
  genre: number;
  setGenre: (genre: number) => void;
}

const FilterSeries: React.FC<Props> = ({
  listSeries,
  setFiltered,
  genre,
  setGenre,
}) => {
  useEffect(() => {
    if (genre === 0) {
      setFiltered(listSeries);
      return;
    }

    const filter = listSeries.filter(({ genre_ids }) =>
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
            setGenre(35);
          }}>
          Comedia
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
            setGenre(99);
          }}>
          Documentales
        </button>
      </div>
    </nav>
  );
};

export default FilterSeries;
