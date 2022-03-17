import { NavLink } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <div>
      <ul className="ul">
        <NavLink to="/" className="navLink">
          Inicio
        </NavLink>
        <NavLink to="/login" className="navLink">
          Salir
        </NavLink>
      </ul>
    </div>
  );
};
