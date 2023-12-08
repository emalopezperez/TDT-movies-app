import { useState } from "react";
import "./detail.scss";
import { DetailMovies } from "../../../../models/detail-movies";
import { paragraphDefault } from "../../../../consts/paragraphDefault";
import { formatTime } from "../../../../utilities/formatTime/formatTime";
import ButtonsFavorite from "../../../../components/buttons-favorite/ButtonsFavorite";
import ModalYt from "../../../../components/modal-yt/ModalYt";
import { PlayIcon } from "@heroicons/react/24/solid";

interface Props {
  data: DetailMovies;
}

const Detail: React.FC<Props> = ({ data }) => {
  const {
    id,
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

  const [modalYt, setModalYt] = useState(false);

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
          {modalYt ? (
            <ModalYt id={id} />
          ) : (
            <>
              <img
                src={
                  backdrop_path !== null
                    ? `${import.meta.env.VITE_PATH_IMG}${poster_path}`
                    : `${import.meta.env.VITE_PATH_IMG}${backdrop_path}`
                }
                alt={original_title}
              />
              <button className="button play-trailer ">
                <PlayIcon
                  onClick={() => {
                    setModalYt(!modalYt);
                  }}
                />
              </button>
            </>
          )}
        </div>

        <section className="info">
          <header>
            <h3>{original_title}</h3>

            <ButtonsFavorite movie={data} />
          </header>

          <div className="genres">
            {genres.map(({ id, name }) => (
              <button
                key={id}
                type="button"
                className="rounded-full bg-trasparent text-white px-3 py-2 text-xs font-semibold 0 shadow-sm ring-1 ring-inset ring-gray-300 ">
                {name}
              </button>
            ))}
          </div>

          <p>
            {overview !== "" ? overview : paragraphDefault} {paragraphDefault}
          </p>

          <p>Lanzamiento: {release_date}</p>
          <p>Duracion: {formatTime(runtime)}</p>
          <p>Valoracion: {popularity}</p>

          <div className="language">
            {spoken_languages.map(({ name }) => (
              <button
                key={name}
                type="button"
                className="rounded-full bg-trasparent text-white px-3 py-2 text-xs font-semibold 0 shadow-sm ring-1 ring-inset ring-gray-300">
                {name}
              </button>
            ))}
          </div>
        </section>
      </article>
    </>
  );
};

export default Detail;
