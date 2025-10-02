import Carousel from "../components/Carousel.jsx";

import { useTrending, usePopularMovies } from "../hooks/useTmdb.js";

export default function Home() {
  const { data: trending } = useTrending("movie", "week");
  const { data: popular, error } = usePopularMovies();

  return (
    <>
      <Carousel title="Trending this week" items={trending?.results} />
      <Carousel title="Popular" items={popular?.results} />
    </>
  );
}
