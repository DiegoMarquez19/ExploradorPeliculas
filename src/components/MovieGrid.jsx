import MovieCard from "./MovieCard.jsx";

export default function MovieGrid({ items, isFavorite, onOpen, onToggleFavorite }) {
  return (
    <div className="grid">
      {items.map((movie) => (
        <MovieCard key={movie.id} movie={movie} isFavorite={isFavorite(movie.id)}
                   onOpen={onOpen} onToggleFavorite={onToggleFavorite} />
      ))}
    </div>
  );
}
