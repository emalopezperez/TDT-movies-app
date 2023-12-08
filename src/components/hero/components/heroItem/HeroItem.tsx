import "./heroItem.scss";
import { Movie } from "../../../../models/types";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Stars from "../../../../utilities/stars/Stars";
import ButtonsFavorite from "../../../buttons-favorite/ButtonsFavorite";

interface Props {
  data: Movie;
}

const HeroItem: React.FC<Props> = ({ data }) => {
  const { poster_path, title, overview, id, backdrop_path, vote_average } =
    data;

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
            <div className="content-vote flex-between ">
              <div className="content-vote">
                <Stars totalStars={5} />
                {vote_average}
              </div>

              <ButtonsFavorite movie={data} />
            </div>

            <p>{overview}</p>
            <div>
              <button
                onClick={handleDetailClick}
                className="button play-button">
                Play
              </button>
              <button
                onClick={handleDetailClick}
                className="button watch-later-button inset-0 bg-gray-500 bg-opacity-25 transition-opacity">
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
