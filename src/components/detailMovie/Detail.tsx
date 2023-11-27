import "./detail.scss";
import { Movie } from "../../models/types";
import { imgDefault } from "../../consts/imageDefault";

interface Props {
  data: Movie;
}

const Detail: React.FC<Props> = ({ data }) => {
  const { id, overview, poster_path, title } = data;

  return (
    <article className="detail">
      <img
        src={
          poster_path !== null
            ? `${import.meta.env.VITE_PATH_IMG}${poster_path}`
            : imgDefault
        }
        alt={title}
      />
      <div className="info">
        <h3>{title}</h3>
        <span>categori</span>
        <p>{overview}</p>
      </div>
    </article>
  );
};

export default Detail;
