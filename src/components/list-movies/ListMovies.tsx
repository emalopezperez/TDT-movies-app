import "./listMovies.scss";
import { Movie } from "../../models/types";
import CardMovie from "../card-movie/CardMovie";
import { motion } from "framer-motion";

interface Props {
  data: Movie[];
}

const ListMovies: React.FC<Props> = ({ data }) => {
  return (
    <div className="list-movies">
      {data.map((movie) => (
        <CardMovie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default ListMovies;
