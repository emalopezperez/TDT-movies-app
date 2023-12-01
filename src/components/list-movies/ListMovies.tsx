import "./listMovies.scss";
import { Movie } from "../../models/types";
import CardMovie from "../card-movie/CardMovie";

interface Props {
  data: Movie[];
}

const ListMovies: React.FC<Props> = ({ data }) => {
  return (
    <main className="list-movies">
      {data.map((movie) => (
        <CardMovie movie={movie} key={movie.id} />
      ))}
    </main>
  );
};

export default ListMovies;
