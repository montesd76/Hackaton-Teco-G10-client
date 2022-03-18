import { Fragment } from "react";
import { MediaItem } from "../MediaItem/MediaItem";

export const MediaList = ({ movies }) => {
  return (
    <Fragment>
      {movies.map((movie) => (
        <MediaItem key={movie.id} movie={movie} />
      ))}
    </Fragment>
  );
};
