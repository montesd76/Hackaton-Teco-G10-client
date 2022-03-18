import ReactPlayer from "react-player";
import "./MediaDetail.css";

export const MediaDetail = ({ film }) => {
  return (
    <div className="media-container">
      <div className="video-container">
        <ReactPlayer url={film.url} controls playing />
      </div>

      <h2 className="media-title">
        {film.titulo}
      </h2>
      <p className="media-description">
        {film.descripcion}
      </p>
    </div>
  );
};
