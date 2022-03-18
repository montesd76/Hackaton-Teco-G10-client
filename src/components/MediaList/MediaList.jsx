import { MediaItem } from "../MediaItem/MediaItem";

export const MediaList = ({ movies }) => {
  return (
    <div className="">
      <div className="card-container">
        <div className="card-container-card">
          {movies.map((movie) => (
            <MediaItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
