import { useSearchParams } from "react-router-dom";
import { useTrending, usePopularMovies, useSearch } from "../hooks/useTmdb";
import Carousel from "../components/Carousel";
import MovieCard from "../components/MovieCard.jsx";

export default function Home() {
  const [params] = useSearchParams();
  const q = params.get("q");

  const { data: trending } = useTrending("movie", "week");
  const { data: popular } = usePopularMovies();
  const { data: search } = useSearch(q || undefined);

  if (q) {
    return (
      <div className="grid">
        <h2>Søkeresultat for "{q}"</h2>
        <div className="grid-cards">
          {search?.results?.map((it) => (
            <MovieCard key={`${it.media_type}-${it.id}`} item={it} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Carousel title="Trending this week" items={trending?.results} />
      <Carousel title="Popular" items={popular?.results} />
    </>
  );
}
