import "./listMovies.scss";
import { Movie } from "../../models/types";
import CardMovie from "../card-movie/CardMovie";

interface Props {
  data: Movie[];
  totalPages: number;
  page: number;
  handlePageChange: (page: number) => void;
}

const ListMovies: React.FC<Props> = ({
  data,
  totalPages,
  page,
  handlePageChange,
}) => {
  return (
    <main className="list-movies">
      {data.map((movie) => (
        <CardMovie movie={movie} key={movie.id} />
      ))}

      <div className="pagination">
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Anterior</button>
        )}

        <span>
          Página {page} de {totalPages}
        </span>

        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}>Siguiente</button>
        )}
      </div>
    </main>
  );
};

export default ListMovies;
