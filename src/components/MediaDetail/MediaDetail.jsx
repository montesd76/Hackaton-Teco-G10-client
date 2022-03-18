import ReactPlayer from "react-player";

export const MediaDetail = ({ film }) => {
  console.log(film);
  return (
    <div>
      <ReactPlayer
        url={film.url}
        width="640px"
        height="360px"
        controls
        playing
      ></ReactPlayer>
      <h2>{film.titulo}</h2>
      <p>{film.descripcion}</p>
    </div>
  );
};
