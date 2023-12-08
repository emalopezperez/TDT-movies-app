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
          className={`rounded px-2 py-1 text-xs font-semibold text-gray-900 ${
            genre === 0 ? "active-filter" : "bg-white text-gray-900"
          } focus:outline-none focus:ring focus:border-blue-300`}
          onClick={() => {
            setGenre(0);
          }}>
          All
        </button>

        <button
          className={`rounded px-2 py-1 text-xs font-semibold text-gray-900 ${
            genre === 35 ? " active-filter" : "bg-white text-gray-900"
          }  `}
          onClick={() => {
            setGenre(35);
          }}>
          Comedia
        </button>

        <button
          className={`rounded px-2 py-1 text-xs font-semibold text-gray-900 ${
            genre === 18 ? "active-filter" : "bg-white text-gray-900"
          } focus:outline-none focus:ring focus:border-blue-300`}
          onClick={() => {
            setGenre(18);
          }}>
          Drama
        </button>

        <button
          className={`rounded px-2 py-1 text-xs font-semibold text-gray-900 ${
            genre === 99 ? "active-filter" : "bg-white text-gray-900"
          } focus:outline-none focus:ring focus:border-blue-300`}
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
