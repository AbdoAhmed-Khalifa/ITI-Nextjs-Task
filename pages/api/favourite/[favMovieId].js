import { favoriteMovies } from '@/data/favourite';

export default function handleFavourite(req, res) {
  const { favMovieId } = req.query;
  const deleteMovie = favoriteMovies.find(mov => {
    return Number(mov.id) === Number(favMovieId);
  });
  const deleteMovieIndex = favoriteMovies.findIndex(mov => {
    return Number(mov.id) === Number(favMovieId);
  });
  favoriteMovies.splice(deleteMovieIndex, 1);
  res.status(200).json(deleteMovie);
}
