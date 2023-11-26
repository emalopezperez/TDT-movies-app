import "./listMovies.scss";
import { Movie } from "../../models/types";

interface Props {
  data: Movie;
}

const ListMovies: React.FC<Props> = ({ data }) => {
  return (
    <section className="list-movies">
      {data.map((movie) => (
        <div key={movie.id} className="">
          {movie.title}
        </div>
      ))}
    </section>
  );
};

export default ListMovies;
