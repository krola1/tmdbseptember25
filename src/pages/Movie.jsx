import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useTmdb";

const IMG = (path, size = "w780") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : "";

export default function Movie() {
  const { id } = useParams();
  const { data } = useMovieDetails(id);

  console.log(data);
  console.log(id);

  if (!data) return <p>Loading...</p>;

  const { title, overview, poster_path, backdrop_path, release_date, runtime } =
    data;

  return (
    <article className="movie">
      <div
        className="movie-hero"
        style={{
          backgroundImage: data.backdrop_path
            ? `url(${IMG(data.backdrop_path, "w1280")})`
            : "none",
        }}
      />

      <div className="movie-content">
        <img
          className="poster"
          src={IMG(data.poster_path, "w342")}
          alt={data.title}
        />
        <div>
          <h1>{data.title}</h1>
          <p className="muted">
            {data.release_date} • {data.runtime} min •{" "}
            {data.genres?.map((g) => g.name).join(", ")}
          </p>
          <p>{data.overview}</p>
          {data.videos?.results?.length ? (
            <details>
              <summary>Trailere</summary>
              <ul>
                {data.videos.results
                  .filter((videos) => videos.site === "YouTube")
                  .map((videos) => (
                    <li key={videos.id}>
                      <a
                        href={`https://www.youtube.com/watch?v=${videos.key}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {videos.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </details>
          ) : null}
        </div>
      </div>
    </article>
  );
}
