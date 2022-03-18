import { MediaItem } from "../MediaItem/MediaItem";

export const MediaList = ({ movies }) => {
  return (
    <div>
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
