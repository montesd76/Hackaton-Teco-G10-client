import logos from "../../assets/img/logos.png";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footerContainer">
      <img src={logos} className="footerImg" alt="logosFooter" />
    </div>
  );
};
