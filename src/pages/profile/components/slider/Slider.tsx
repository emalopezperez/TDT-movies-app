import "./slider.scss";
import Card from "../card/Card";

export interface FavoriteMovies {
  id?: number;
  titulo?: string;
  descripcion?: string;
  imagen?: string;
}

interface Props {
  movies: FavoriteMovies;
}

const Slider: React.FC<Props> = ({ movies }) => {
  return (
    <main className="list-movies ">
      <Card data={movies} />
    </main>
  );
};

export default Slider;
