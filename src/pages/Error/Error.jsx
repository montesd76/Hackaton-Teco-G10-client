import "./Error.css";
import imageError from "../../assets/img/errorImage.png";
import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <div className="errorContainer">
      <div>
        <img src={imageError} alt="errorImage" />
      </div>
      <div>
        <Link className="errorButton" to="/home">
          Volver al Home
        </Link>
      </div>
    </div>
  );
};
