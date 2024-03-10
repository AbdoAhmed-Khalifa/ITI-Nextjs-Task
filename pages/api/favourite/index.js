import { favoriteMovies } from '@/data/favourite';

export default function handleFavourite(req, res) {
  if (req.method === 'GET') res.status(200).json(favoriteMovies);
  else if (req.method === 'POST') {
    const movie = req.body;
    favoriteMovies.push(movie);
  }

  res.status(200).json(movie);
}
