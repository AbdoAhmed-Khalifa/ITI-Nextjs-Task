import MovieCard from '@/styles/components/MovieCard';
function TopMovies({ res }) {
  const movies = res.results;
  console.log(movies);
  return (
    <div>
      <h2 className="text-4xl pb-10">TopMovies</h2>
      <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-x-3 gap-y-6">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default TopMovies;

export async function getStaticProps() {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1'
  );
  const data = await response.json();
  return { props: { res: data } };
}
