import img from "../../assets/img/imgFondo.png";
import "./Home.css";
export const Home = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img className="image" src={img} alt="foto" />
      </div>
    </div>
  );
};
