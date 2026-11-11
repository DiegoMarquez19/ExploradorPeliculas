import { useEffect } from "react";
import { CloseIcon, HeartIcon } from "./Icons.jsx";
import Poster from "./Poster.jsx";

export default function MovieModal({ movie, isFavorite, onClose, onToggleFavorite }) {
  // Cerrar con Escape y bloquear el scroll del fondo mientras está abierto
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const isSerie = movie.type === "serie";

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal glass" role="dialog" aria-modal="true"
           aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">
          <CloseIcon />
        </button>

        <div className="modal__poster">
          <Poster src={movie.image} title={movie.title} />
        </div>

        <div className="modal__info">
          <div className="modal__tags">
            <span className="badge glass">{isSerie ? "Serie" : "Película"}</span>
            <span className="badge glass">{movie.genre}</span>
          </div>

          <h2 id="modal-title" className="modal__title">{movie.title}</h2>

          <dl className="facts">
            <div><dt>Año</dt><dd>{movie.year}</dd></div>
            <div>
              <dt>{isSerie ? "Temporadas" : "Duración"}</dt>
              <dd>{isSerie ? movie.seasons : movie.duration}</dd>
            </div>
            <div><dt>Género</dt><dd>{movie.genre}</dd></div>
          </dl>

          <p className="modal__synopsis">{movie.synopsis}</p>

          <button className={`btn-fav ${isFavorite ? "is-on" : ""}`}
                  aria-pressed={isFavorite} onClick={() => onToggleFavorite(movie.id)}>
            <HeartIcon filled={isFavorite} />
            {isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
}
