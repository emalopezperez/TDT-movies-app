import "./detail.scss";
import { DetailMovies } from "../../../../models/detail-movies";
import { paragraphDefault } from "../../../../consts/paragraphDefault";
import { formatTime } from "../../../../utilities/formatTime/formatTime";
import ButtonsFavorite from "../../../../components/buttons-favorite/ButtonsFavorite";

interface Props {
  data: DetailMovies;
}

const Detail: React.FC<Props> = ({ data }) => {
  const {
    overview,
    poster_path,
    original_title,
    genres,
    spoken_languages,
    popularity,
    release_date,
    runtime,
    backdrop_path,
  } = data;

  return (
    <>
      <div className="poster">
        <img
          src={`${import.meta.env.VITE_PATH_IMG}${backdrop_path}`}
          alt={original_title}
        />
        <div className="filter-image"></div>
      </div>

      <article className="detail">
        <div className="container-img">
          <img
            src={
              backdrop_path !== null
                ? `${import.meta.env.VITE_PATH_IMG}${poster_path}`
                : `${import.meta.env.VITE_PATH_IMG}${backdrop_path}`
            }
            alt={original_title}
          />
        </div>

        <section className="info">
          <header>
            <h3>{original_title}</h3>
            <ButtonsFavorite movie={data} />
          </header>

          <div className="genres">
            {genres.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </div>

          <p>{overview !== "" ? overview : paragraphDefault}</p>

          <p>Lanzamiento: {release_date}</p>
          <p>Duracion: {formatTime(runtime)}</p>
          <p>Valoracion: {popularity}</p>

          <div className="language">
            {spoken_languages.map(({ name }) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </section>
      </article>
    </>
  );
};

export default Detail;
