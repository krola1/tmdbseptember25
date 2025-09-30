import MovieCard from "../components/MovieCard.jsx";
import { useTrending, usePopularMovies } from "../hooks/useTmdb.js";

export default function Home() {
  const { data: trending } = useTrending("movie", "week");
  const { data: popular, error } = usePopularMovies();
  console.log(error);

  console.log("trending", trending);
  console.log("popular", popular);
  return (
    <>
      <h1>hello from home</h1>
      {trending.results.map((item) => (
        <MovieCard key={item.id} item={item} />
      ))}
    </>
  );
}
