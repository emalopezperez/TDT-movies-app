import { useState } from "react";
import "./detail.scss";
import { DetailMovies } from "../../../../models/detail-movies";
import { paragraphDefault } from "../../../../consts/paragraphDefault";
import { formatTime } from "../../../../utilities/formatTime/formatTime";
import ButtonsFavorite from "../../../../components/buttons-favorite/ButtonsFavorite";
import ModalYt from "../../../../components/modal-yt/ModalYt";
import { PlayIcon } from "@heroicons/react/24/solid";
import Stars from "../../../../utilities/stars/Stars";
import { roundNumber } from "../../../../utilities/roundNumber/roundNumber";

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
    vote_average,
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
            <h3 className="">{original_title}</h3>
            <ButtonsFavorite movie={data} />
          </header>

          <div className="genres">
            {genres.map(({ id, name }) => (
              <button
                key={id}
                type="button"
                className="rounded-full bg-trasparent text-white px-3 md:py-2 xl:p-2 p-[2px] text-xs font-semibold 0 shadow-sm ring-1 ring-inset ring-gray-300 inset-0 bg-gray-500 bg-opacity-25 transition-opacity">
                {name}
              </button>
            ))}
          </div>

          <p>
            {overview !== "" ? overview : paragraphDefault} {paragraphDefault}
          </p>

          <div className="container-vote">
            <p>Lanzamiento: {release_date}</p>

            <div className="language">
              {spoken_languages.map(({ name }) => (
                <button
                  key={name}
                  type="button"
                  className="rounded-full bg-trasparent text-white px-3 py-2 text-xs font-semibold 0 shadow-sm ring-1 ring-inset ring-gray-300 inset-0 bg-gray-500 bg-opacity-25 transition-opacity">
                  {name}
                </button>
              ))}
            </div>
          </div>

          <p>Duracion: {formatTime(runtime)}</p>

          <div className="container-vote">
            <p>Valoracion: {popularity}</p>
            <div className="content-vote">
              <Stars totalStars={5} />
              {roundNumber(vote_average)}
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Detail;
