import { useEffect, useState } from 'react';
import MovieCard from './../../styles/components/MovieCard';
import { getSession, signIn } from 'next-auth/react';
function Favourite() {
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getAllFavourites() {
      const session = await getSession();
      if (!session) signIn();
      else setIsLoading(false);
      const response = await fetch('/api/favourite');
      const favMovies = await response.json();
      setFavourites(favMovies);
    }
    getAllFavourites();
  }, []);
  if (isLoading) return <div>Loading ...</div>;
  else
    return (
      <div>
        <h2 className="text-4xl pb-10">Favourites Movies</h2>
        <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-x-3 gap-y-6">
          {favourites.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFav={true}
              update={update}
            />
          ))}
        </div>
      </div>
    );
}
export default Favourite;
