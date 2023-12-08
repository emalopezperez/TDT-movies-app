import "./cardCast.scss";
import { Cast } from "../../../../models/casts";

interface CardMovieProps {
  cast: Cast;
}

const CardCast: React.FC<CardMovieProps> = ({ cast }) => {
  const { name, profile_path } = cast;

  return (
    <div className="card-cast bg-white-cast">
      <img
        src={`${import.meta.env.VITE_PATH_IMG}${profile_path}`}
        alt={name}
        className="absolute-cast img-cast "
      />

      <div className="card-info">
        <h3>{name}</h3>
        <div>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCast;
