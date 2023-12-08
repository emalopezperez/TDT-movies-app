import "./heroItem.scss";
import { Movie } from "../../../../models/types";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  data: Movie;
}

const HeroItem: React.FC<Props> = ({ data }) => {
  const { poster_path, title, overview, id, backdrop_path } = data;

  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail-movie/${id}`);
  };

  return (
    <section className="container-hero">
      <img
        src={`${import.meta.env.VITE_PATH_IMG}${backdrop_path}`}
        alt={title}
      />
      <div className="filter-image"></div>
      <div className="container-info">
        <div className="absolute">
          <motion.div
            className="info"
            initial={{ x: -120 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 0.8 }}>
            <h2>{title}</h2>
            <p>{overview}</p>
            <div>
              <button className="button play-button">Play</button>
              <button
                onClick={handleDetailClick}
                className="button watch-later-button">
                Ver estreno
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 120 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="card-hero">
            <img
              src={`${import.meta.env.VITE_PATH_IMG}${poster_path}`}
              alt={title}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroItem;
