import "./Home.css";
import { MediaContainer } from "../../components/MediaContainer/MediaContainer";

export const Home = () => {
  return (
    <div className="homeContainer">
      <h1 className="homeTitle">Welcome to Mini Flow</h1>

      <MediaContainer />
    </div>
  );
};
