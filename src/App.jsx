import { useMemo, useState } from "react";
import moviesData from "./data/moviesData.js";
import useFavorites from "./hooks/useFavorites.js";
import Navbar from "./components/Navbar.jsx";
import FilterBar from "./components/FilterBar.jsx";
import MovieGrid from "./components/MovieGrid.jsx";
import MovieModal from "./components/MovieModal.jsx";
import FavoritesView from "./components/FavoritesView.jsx";

// Normaliza para buscar sin importar mayúsculas ni acentos
const normalize = (s) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

const GENRES = [...new Set(moviesData.map((m) => m.genre))].sort((a, b) =>
  a.localeCompare(b, "es")
);

export default function App() {
  const [view, setView] = useState("explorar");
  const [query, setQuery] = useState("");
  const [type, setType] = useState("todas");
  const [genre, setGenre] = useState("todos");
  const [selectedId, setSelectedId] = useState(null);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const filtered = useMemo(() => {
    const q = normalize(query);
    return moviesData.filter(
      (m) =>
        (type === "todas" || m.type === type) &&
        (genre === "todos" || m.genre === genre) &&
        (q === "" || normalize(m.title).includes(q))
    );
  }, [query, type, genre]);

  const favoriteItems = useMemo(
    () => moviesData.filter((m) => favorites.includes(m.id)),
    [favorites]
  );

  const selected = moviesData.find((m) => m.id === selectedId) ?? null;

  const resetFilters = () => {
    setQuery("");
    setType("todas");
    setGenre("todos");
  };

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <span className="orb orb--a" />
        <span className="orb orb--b" />
        <span className="orb orb--c" />
      </div>

      <div className="shell">
        <Navbar
          view={view}
          onViewChange={setView}
          favoritesCount={favorites.length}
          query={query}
          onQueryChange={setQuery}
        />

        <main className="main">
          {view === "explorar" ? (
            <>
              <FilterBar
                type={type}
                onTypeChange={setType}
                genres={GENRES}
                genre={genre}
                onGenreChange={setGenre}
              />

              <p className="results-count" aria-live="polite">
                {filtered.length} {filtered.length === 1 ? "título" : "títulos"}
              </p>

              {filtered.length > 0 ? (
                <MovieGrid
                  items={filtered}
                  isFavorite={isFavorite}
                  onOpen={setSelectedId}
                  onToggleFavorite={toggleFavorite}
                />
              ) : (
                <div className="empty glass">
                  <h2>Sin resultados</h2>
                  <p>Ningún título coincide con tu búsqueda y filtros actuales.</p>
                  <button className="btn-primary" onClick={resetFilters}>Limpiar filtros</button>
                </div>
              )}
            </>
          ) : (
            <FavoritesView
              items={favoriteItems}
              isFavorite={isFavorite}
              onOpen={setSelectedId}
              onToggleFavorite={toggleFavorite}
              onExplore={() => setView("explorar")}
            />
          )}
        </main>
      </div>

      {selected && (
        <MovieModal
          movie={selected}
          isFavorite={isFavorite(selected.id)}
          onClose={() => setSelectedId(null)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </>
  );
}
