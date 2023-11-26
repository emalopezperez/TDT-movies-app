import "./heroItem.scss";
import { Movie } from "../../../../models/types";
import { useNavigate } from "react-router-dom";

interface Props {
  data: Movie;
}

const HeroItem: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const { poster_path, title, overview, id } = data;

  const handleDetailClick = () => {
    navigate(`/detail-movie/${id}`);
  };

  return (
    <section className="container-hero">
      <img src={`${import.meta.env.VITE_PATH_IMG}${poster_path}`} alt={title} />
      <div className="filter-image"></div>
      <div className="container-info">
        <h2>{title}</h2>
        <p>{overview}</p>

        <div>
          <button onClick={handleDetailClick} className="button play-button">
            Play
          </button>
          <button className="button watch-later-button">Watch Later</button>
        </div>
      </div>
    </section>
  );
};

export default HeroItem;
