import { CloseIcon, SearchIcon } from "./Icons.jsx";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <SearchIcon />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por título"
        aria-label="Buscar por título"
      />
      {value && (
        <button className="search__clear" onClick={() => onChange("")} aria-label="Borrar búsqueda">
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
