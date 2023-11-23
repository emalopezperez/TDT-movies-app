const key = "0137837942ce96a8946a8ccf1ce02b76";

interface Api {
  BASE_URL: string;
  API_KEY: string;
  IMAGE_PATH: string;
  LANGUAGE: string;
  PAGE: string;
  ENPOINT_POPULAR: string;
}

const apiConfig: Api = {
  BASE_URL: `https://api.themoviedb.org/3/`,
  API_KEY: `api_key=${key}`,
  IMAGE_PATH: "https://image.tmdb.org/t/p/original/",
  LANGUAGE: "&language=en-US",
  PAGE: "&page=1",
  ENPOINT_POPULAR: `movie/popular?api_key=0137837942ce96a8946a8ccf1ce02b76&language=en-US&page=1`,
};

/**const endpoints = {
  endpointPopular: `movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}; */

export default {
  apiConfig,
};
