const TYPES = [
  { value: "todas", label: "Todas" },
  { value: "pelicula", label: "Películas" },
  { value: "serie", label: "Series" },
];

export default function FilterBar({ type, onTypeChange, genres, genre, onGenreChange }) {
  return (
    <section className="filters" aria-label="Filtros">
      <div className="segmented glass" role="group" aria-label="Tipo de contenido">
        {TYPES.map((t) => (
          <button key={t.value}
                  className={`segmented__btn ${type === t.value ? "is-active" : ""}`}
                  aria-pressed={type === t.value}
                  onClick={() => onTypeChange(t.value)}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="chips" role="group" aria-label="Género">
        {["Todos", ...genres].map((g) => {
          const value = g === "Todos" ? "todos" : g;
          return (
            <button key={g}
                    className={`chip ${genre === value ? "is-active" : ""}`}
                    aria-pressed={genre === value}
                    onClick={() => onGenreChange(value)}>
              {g}
            </button>
          );
        })}
      </div>
    </section>
  );
}
