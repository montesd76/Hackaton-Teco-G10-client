import { Link } from "react-router-dom";

import "./MediaItem.css";
export const MediaItem = ({ movie }) => {
  return (
    <div className="card-column">
      <div className="card-container-text">
        <h4>{movie.titulo}</h4>
      </div>
      <div className="card-full">
        <div className="card-top">
          <img
            src="https://iphone-image.apkpure.com/v2/app/5/0/1/501be331b8e210aa426a6b1d74401efb.jpg"
            alt="foto"
          />
          {/* <p className="card-description">{movie.descripcion}</p> */}
          <Link to={`/player/${movie.id}`}>Ver</Link>
        </div>
      </div>
    </div>
  );
};
