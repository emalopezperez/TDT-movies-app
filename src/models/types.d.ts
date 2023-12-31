export interface Fetch {
  type: string;
  url: string;
  success: (results: Array | Object) => void;
  error?: (error: string) => void;
  always?: () => void;
  body?: Object;
}

interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number ;
  vote_count?: number;
}


interface Notify {
  menssage: string,
    status: boolean,
    success: boolean,
}