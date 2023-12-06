export interface FavoriteMovies {
      id?: number,
      titulo?: string,
      descripcion?: string,
      imagen?: string,
}

export interface Favorites {
  favoritesMovies: FavoriteMovies[];
  favoritesQuantity: number;
}
