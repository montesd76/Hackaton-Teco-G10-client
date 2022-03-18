import { NavLink } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBar">
        <NavLink to="/home" className="navLink">
          INICIO
        </NavLink>
        <NavLink to="/" className="navLink">
          SALIR
        </NavLink>
      </div>
    </div>
  );
};
