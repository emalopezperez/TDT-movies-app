import { configureStore } from "@reduxjs/toolkit";
import { User } from "../models/users";
import { userSlice } from "./states/user";
import {favoritesSlice} from "./states/favorites";


export interface FavoriteMovies {
  id?: number;
  titulo?: string;
  descripcion?: string;
  imagen?: string;
}

export interface Favorites {
favoritesMovies: FavoriteMovies[];
favoritesQuantity: number;
}


export interface AppStore {
  user: User;

  favorites:Favorites
}


export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
  
});