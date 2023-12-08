import "./modalYt.scss";
import { useState, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { FetchData } from "../../services/fetchData";
import { Fetch } from "../../models/types";

interface Props {
  id: string | number | undefined;
}

interface Trailer {
  key: string;
  name: string;
}

interface ApiResponse {
  results: Trailer[];
}

const ModalYt: React.FC<Props> = ({ id }) => {
  const API_URL = `${import.meta.env.VITE_BASE_URL}movie/
    ${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`;

  const [video, setVideo] = useState<Trailer | undefined>({
    key: "",
    name: "",
  });

  const handleSuccess = (response: ApiResponse): void => {
    const officialTrailer = response.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    setVideo(officialTrailer);
  };

  const handleError = (error: string): void => {
    console.error(`Error fetching data: ${error}`);
  };

  const handleAlways = () => {};

  const getVideo = () => {
    const fetchOptions: Fetch = {
      type: "GET",
      url: API_URL,
      success: handleSuccess,
      error: handleError,
      always: handleAlways,
    };
    FetchData.customFetch(fetchOptions);
  };

  useEffect(() => {
    getVideo();
  }, [id]);

  const opts: YouTubeProps["opts"] = {
    height: 605,
    width: 540,
    playerVars: {
      autoplay: 1,
      controls: 0,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 0,
      modestbranding: 0,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div className="modal-yt">
      <YouTube videoId={video ? video.key : "CBmWztLPp9c"} opts={opts} />
    </div>
  );
};

export default ModalYt;
