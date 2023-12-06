
interface Genre {
  id: number;
  name: string;
}

interface Languages {
  name:string;
}

export interface DetailMovies {
  spoken_languages: Languages[];
  backdrop_path?: string;
  genres: Genre[];
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  runtime:number;
}