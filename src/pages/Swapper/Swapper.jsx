import ReactPlayer from "react-player";
import { useState } from "react";
import "./Swapper.css";


export const Swapper = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/embed/NMWAWljzj8M"
        width="640px"
        height="360px"
        controls
        playing
      ></ReactPlayer>
      <h1>Batman Vs Superman: El origen de la justicia</h1>
      <p>
        Dos años después de la destrucción de Metrópolis, Superman y Batman se
        sumergen en una contienda territorial, pero las cosas se complican
        cuando una nueva y peligrosa amenaza pone en jaque la existencia de la
        humanidad.
      </p>
    </div>
  );
};
