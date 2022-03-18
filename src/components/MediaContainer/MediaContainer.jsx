import axios from "axios";
import { useEffect, useState } from "react";
import { MediaList } from "../MediaList/MediaList";

export const MediaContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      const response = await axios.get(
        "https://miniflow2022.herokuapp.com/insecure/api/contents"
      );
      console.log("soy la response general", response);
      const data = response.data;
      setMovies(data);
    };
    try {
      getMedia();
    } catch (error) {
      console.log("we have this error: ", error);
    }
  }, []);
  return <MediaList movies={movies} />;
};
