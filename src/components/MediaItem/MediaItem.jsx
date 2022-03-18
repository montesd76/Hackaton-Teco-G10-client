import { Link } from "react-router-dom";

export const MediaItem = ({ movie }) => {
  return (
    <div>
      <h4>{movie.titulo}</h4>
      <p>{movie.descripcion}</p>
      <Link to={`/player/${movie.id}`}>Ver</Link>
    </div>
  );
};
