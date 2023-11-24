import "./heroItem.scss";
import { Movie } from "../../../../models/types";

const HeroesItem = ({ data }: { data: Movie }) => {
  const { poster_path, title, overview } = data;
  
  return (
    <section className="container-heroes">
      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
      <div className="filter-image"></div>
      <div className="container-info">
        <h2>{title}</h2>
        <p>{overview}</p>

        <div>
          <button className="button play-button">Play</button>
          <button className="button watch-later-button">Watch Later</button>
        </div>
      </div>
    </section>
  );
};

export default HeroesItem;
