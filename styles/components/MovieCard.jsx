'use client';

import { Button, Card } from 'flowbite-react';
import { useRouter } from 'next/router';

export default function MovieCard({ movie, isFav, update }) {
  const router = useRouter();
  function handleClick(id) {
    router.push(`/home/${id}`);
  }

  const addToFav = async FavMovie => {
    const response = await fetch('/api/favourite', {
      method: 'POST',
      body: JSON.stringify(FavMovie),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const removeFromFav = async id => {
    const response = await fetch(`/api/favourite/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    update();
  };
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {movie.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {movie.overview}
      </p>
      <Button onClick={() => handleClick(movie.id)}>
        Read more
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      {isFav ? (
        <Button color="red" onClick={() => removeFromFav(movie.id)}>
          Remove from Favourite
        </Button>
      ) : (
        <Button color="green" onClick={() => addToFav(movie)}>
          Add to Favourite
        </Button>
      )}
    </Card>
  );
}
