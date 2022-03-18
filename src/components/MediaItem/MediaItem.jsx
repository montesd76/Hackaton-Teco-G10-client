import { Link } from "react-router-dom";

import "./MediaItem.css";
export const MediaItem = ({ movie }) => {
  return (
    <div className="card-column">
      <div className="card-container-text">
        <h4 className="card-title">{movie.titulo}</h4>
      </div>
      <div className="card-full">
        <div className="card-top">
          <img
            src={movie.ImagenPosterVertical}
            alt="foto"
          />
          <Link to={`/player/${movie.id}`}>Ver</Link>
        </div>
      </div>
    </div>
  );
};
