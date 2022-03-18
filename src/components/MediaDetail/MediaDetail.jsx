import ReactPlayer from "react-player";

export const MediaDetail = ({ film }) => {
  console.log(film);
  return (
    <div>
      <ReactPlayer
        url={film[0].url}
        width="640px"
        height="360px"
        controls
        playing
      ></ReactPlayer>
      <h2>{film[0].titulo}</h2>
      <p>{film[0].descripcion}</p>
    </div>
  );
};
