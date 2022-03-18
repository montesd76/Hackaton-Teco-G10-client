import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MediaPlayerContainer.css";
import { MediaDetail } from "../MediaDetail/MediaDetail";
export const MediaPlayerContainer = () => {
  const { movieID } = useParams();
  const [film, setFilm] = useState([]);

  useEffect(
    () => {
      const getFilm = async () => {
        const response = await axios.get(
          `https://miniflow2022.herokuapp.com/insecure/api/contents/${movieID}`
        );
        const data = response.data;
        console.log(data);

        setFilm(data[0]);
      };
      getFilm();
    },
    [movieID]
  );

  return <MediaDetail className="media-container" film={film} />;
};
