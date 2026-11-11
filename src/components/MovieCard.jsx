import { HeartIcon } from "./Icons.jsx";
import Poster from "./Poster.jsx";

export default function MovieCard({ movie, isFavorite, onOpen, onToggleFavorite }) {
  // Reflejo de luz que sigue al cursor (efecto "liquid glass")
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(movie.id);
    }
  };

  return (
    <article className="card glass" role="button" tabIndex={0}
             onClick={() => onOpen(movie.id)} onKeyDown={handleKey} onMouseMove={handleMove}
             aria-label={`Ver detalles de ${movie.title}`}>
      <div className="card__media">
        <Poster src={movie.image} title={movie.title} />
        <span className="badge glass">{movie.type === "serie" ? "Serie" : "Película"}</span>
        <button
          className={`heart ${isFavorite ? "is-on" : ""}`}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? `Quitar ${movie.title} de favoritos` : `Guardar ${movie.title} en favoritos`}
          onClick={(e) => { e.stopPropagation(); onToggleFavorite(movie.id); }}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>
      <div className="card__body">
        <h3 className="card__title">{movie.title}</h3>
        <p className="card__genre">{movie.genre}</p>
      </div>
    </article>
  );
}
