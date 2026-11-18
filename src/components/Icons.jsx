import filmIconUrl from "../assets/Gemini_Generated_Image_amdubaamdubaamdu.jpg";

const base = {
  width: 20, height: 20, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.8,
  strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
};

export const HeartIcon = ({ filled }) => (
  <svg {...base} fill={filled ? "currentColor" : "none"}>
    <path d="M12 20.5s-7.5-4.6-9.3-9.4C1.5 7.8 3.4 4.5 6.7 4.5c2 0 3.5 1.1 5.3 3 1.8-1.9 3.3-3 5.3-3 3.3 0 5.2 3.3 4 6.6-1.8 4.8-9.3 9.4-9.3 9.4z" />
  </svg>
);

export const SearchIcon = () => (
  <svg {...base}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);

export const CloseIcon = () => (
  <svg {...base}><path d="M6 6l12 12M18 6 6 18" /></svg>
);

export const FilmIcon = () => (
  <img className="film-icon" src={filmIconUrl} alt="" aria-hidden="true" />
);
