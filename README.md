# Cinespot Glass

Explorador de películas y series en React con estética Apple Liquid Glass.

## Cómo ejecutarlo

Requisito: Node.js 18 o superior.

```bash
cd cinespot-glass
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente http://localhost:5173).

Para generar la versión de producción: `npm run build` y `npm run preview`.

## Estructura

```
src/
├── App.jsx                  Estado global: búsqueda, filtros, vista, modal
├── index.css                Estilos Liquid Glass
├── data/moviesData.js       25 títulos (13 películas y 12 series)
├── hooks/useFavorites.js    Favoritos persistidos en localStorage
└── components/
    ├── Navbar.jsx           Barra superior y pestañas Explorar / Favoritos
    ├── SearchBar.jsx        Búsqueda en tiempo real
    ├── FilterBar.jsx        Filtros por tipo y género
    ├── MovieGrid.jsx        Cuadrícula de tarjetas
    ├── MovieCard.jsx        Tarjeta con póster, título, género y corazón
    ├── MovieModal.jsx       Detalle flotante con sinopsis y favorito
    ├── FavoritesView.jsx    Vista de favoritos y estado vacío
    ├── Poster.jsx           Imagen con respaldo si la URL falla
    └── Icons.jsx            Iconos SVG
```

## Nota sobre las imágenes

Los pósteres apuntan a image.tmdb.org. Si alguna ruta no carga, la tarjeta
muestra un respaldo con el título. Para cambiar un póster, edita el campo
`image` en `src/data/moviesData.js`.
