import { useState } from "react";
import { FilmIcon } from "./Icons.jsx";

/** Imagen con respaldo visual si la URL falla. */
export default function Poster({ src, title }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="poster poster--fallback" role="img" aria-label={`Póster de ${title}`}>
        <FilmIcon />
        <span>{title}</span>
      </div>
    );
  }

  return (
    <img className="poster" src={src} alt={`Póster de ${title}`} loading="lazy"
         onError={() => setFailed(true)} />
  );
}
