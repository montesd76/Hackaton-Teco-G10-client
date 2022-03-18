import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MediaDetail } from "../MediaDetail/MediaDetail";
export const MediaPlayerContainer = () => {
  const { movieID } = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    const getFilm = async () => {
      const response = await axios.get(
        `https://miniflow2022.herokuapp.com/insecure/api/contents/${movieID}`
      );
      const data = response.data;
        console.log(data);

      setFilm(data);
    };
    getFilm();
  }, [movieID]);

  return <MediaDetail film={film} />;
};
