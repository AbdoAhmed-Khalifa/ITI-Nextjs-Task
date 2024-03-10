import { Card } from 'flowbite-react';


export default function Params({ movie }) {
  return (
    <div className="flex justify-center">
      <Card
        className="max-w-screen-lg"
        imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        horizontal
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.title}
        </h5>
        <div className=" font-bold tracking-tight text-gray-900 dark:text-white">
          release date:
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            {movie.release_date}
          </span>
        </div>
        <div className=" font-bold tracking-tight text-gray-900 dark:text-white">
          Vote Avarage:
          <span
            className={`ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold ${
              +movie.vote_average > 7 ? 'bg-green-800' : 'bg-red-800'
            }  text-white`}
          >
            {movie.vote_average}
          </span>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {movie.overview}
        </p>
      </Card>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { movieId } = context.params;
  console.log(movieId);
  let data;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1`
    );
    data = await response.json();
  } catch (e) {}

  return { props: { movie: data } };
}
