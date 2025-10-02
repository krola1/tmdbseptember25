import { Link } from "react-router-dom";

export default function MovieCard({ item }) {
  const IMG = (path) =>
    path
      ? `https://image.tmdb.org/t/p/w342${path}`
      : "https://placehold.co/342x513?text=No+Image";
  const { title, poster_path, vote_average } = item;

  return (
    <>
      <Link to={`/movie/${item.id}`} className="card">
        <img src={IMG(poster_path)} alt={title} />
        <div className="card-body">
          <h3>{title}</h3>
          <p>Vote: {vote_average}</p>
        </div>
      </Link>
    </>
  );
}
