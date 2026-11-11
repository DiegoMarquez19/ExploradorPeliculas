import MovieGrid from "./MovieGrid.jsx";

export default function FavoritesView({ items, isFavorite, onOpen, onToggleFavorite, onExplore }) {
  if (items.length === 0) {
    return (
      <div className="empty glass">
        <h2>Aún no tienes favoritos</h2>
        <p>Toca el corazón de cualquier película o serie para guardarla aquí.</p>
        <button className="btn-primary" onClick={onExplore}>Explorar el catálogo</button>
      </div>
    );
  }

  return (
    <>
      <h2 className="section-title">Tus favoritos <span>{items.length}</span></h2>
      <MovieGrid items={items} isFavorite={isFavorite} onOpen={onOpen} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
