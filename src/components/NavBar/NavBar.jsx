import { NavLink } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBar">
        {
          console.log(window.location.pathname)}
          {
          window.location.pathname === "/login" || window.location.pathname === "/" ? (
            null
            )
            : (
              <>
              <NavLink to="/home" className="navLink">
                INICIO
              </NavLink>
              <NavLink to="/login" className="navLink">
                SALIR
              </NavLink>
              </>
            )
        }

      </div>
    </div>
  );
};
