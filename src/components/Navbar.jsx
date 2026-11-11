import { FilmIcon, HeartIcon } from "./Icons.jsx";
import SearchBar from "./SearchBar.jsx";

export default function Navbar({ view, onViewChange, favoritesCount, query, onQueryChange }) {
  return (
    <header className="navbar glass">
      <div className="navbar__brand">
        <span className="navbar__logo"><FilmIcon /></span>
        <span className="navbar__name">Cinespot</span>
      </div>

      {view === "explorar" && <SearchBar value={query} onChange={onQueryChange} />}

      <nav className="navbar__tabs" aria-label="Secciones">
        <button className={`tab ${view === "explorar" ? "is-active" : ""}`}
                aria-pressed={view === "explorar"} onClick={() => onViewChange("explorar")}>
          Explorar
        </button>
        <button className={`tab ${view === "favoritos" ? "is-active" : ""}`}
                aria-pressed={view === "favoritos"} onClick={() => onViewChange("favoritos")}>
          <HeartIcon filled={view === "favoritos"} />
          Favoritos
          {favoritesCount > 0 && <span className="tab__badge">{favoritesCount}</span>}
        </button>
      </nav>
    </header>
  );
}
