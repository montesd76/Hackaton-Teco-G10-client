import "./Home.css";
import axios from "axios";
import { urlGetContent } from "../../services/urls";
import { MediaContainer } from "../../components/MediaContainer/MediaContainer";

export const Home = () => {
  const consultarDatosProtegidos = () => {
    axios
      .get(urlGetContent, { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="homeContainer">
      <h1 className="homeTitle">Welcome to Mini Flow</h1>

      <MediaContainer />

      <input
        type="button"
        value="consultar datos protegidos"
        onClick={consultarDatosProtegidos()}
      />
    </div>
  );
};
