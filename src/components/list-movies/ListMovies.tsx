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
        <div key={movie.id} className="">
          <CardMovie movie={movie} />
        </div>
      ))}
    </main>
  );
};

export default ListMovies;
