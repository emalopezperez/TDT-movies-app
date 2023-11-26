import "./detail.scss";
import { Movie } from "../../models/types";

interface Props {
  data: Movie;
}

const Detail: React.FC<Props> = ({ data }) => {
  const { id, overview, poster_path, title } = data;

  return (
    <article className="detail">
      <img src={`${import.meta.env.VITE_PATH_IMG}${poster_path}`} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <span>categori</span>
        <p>{overview}</p>
      </div>
    </article>
  );
};

export default Detail;
