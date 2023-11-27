import "./heroItem.scss";
import { Movie } from "../../../../models/types";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      <motion.div
        className="container-info"
        initial={{ x: -60 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}>
        <h2>{title}</h2>
        <p>{overview}</p>
        <div>
          <button onClick={handleDetailClick} className="button play-button">
            Play
          </button>
          <button className="button watch-later-button">Watch Later</button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroItem;
