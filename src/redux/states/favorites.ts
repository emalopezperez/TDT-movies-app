import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const API_URL_LIKE = 'https://api-movies-tdt.vercel.app/api/auth/like-movie/';
const API_URLDESLIKE = 'https://api-movies-tdt.vercel.app/api/auth/deslike-movie/';
const API_BASE_URL = 'https://api-movies-tdt.vercel.app/api/auth';

const userState = JSON.parse(localStorage.getItem('userState') || '{}');
const userId = userState.info?.id;


export interface FavoriteMovies {
  id?: number;
  titulo?: string;
  descripcion?: string;
  imagen?: string;
}

export interface FavoritesState {
  favoritesMovies: FavoriteMovies[];
  favoritesQuantity: number;
}



export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (movie: FavoriteMovies ) => {
    const response = await fetch(`${API_URL_LIKE}${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    const data = await response.json();

    console.log(data);

    return data;
  }
);

export const getTotalFavorites = createAsyncThunk(
  'favorites/getTotalFavorites',
  async () => {
    const response = await fetch(`${API_BASE_URL}/profile/${userId}`);
    const data = await response.json();
    return data.profile.movies_likes as FavoriteMovies[];
  }
);

export const removeFavorite = createAsyncThunk(
  'favorites/removeFavorite',
  async (movieId: number | undefined) => {
    const response = await fetch(`${API_URLDESLIKE}${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movieId }),
    });
    const data = await response.json();

    console.log(data);

    return data;
  }
);

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesMovies: [] as FavoriteMovies[],
    favoritesQuantity: 0,
  } as FavoritesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTotalFavorites.fulfilled, (state, action: PayloadAction<FavoriteMovies[]>) => {
      state.favoritesMovies = action.payload;
      state.favoritesQuantity = action.payload.length;
    });

    builder.addCase(addFavorite.fulfilled, (state) => {
      state.favoritesQuantity += 1;
    });

    builder.addCase(removeFavorite.fulfilled, (state, action: PayloadAction<{ deletedId: number }>) => {
      state.favoritesMovies = state.favoritesMovies.filter((movie) => movie.id !== action.payload.deletedId);
      state.favoritesQuantity -= 1;
    });
  },
});

export default favoritesSlice.reducer;
