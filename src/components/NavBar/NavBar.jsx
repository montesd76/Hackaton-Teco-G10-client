import { NavLink } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBar">
        {
          console.log(window.location.pathname)}
          {
          window.location.pathname != "/login" && window.location.pathname != "/" ? (
            <>
              <NavLink to="/home" className="navLink">
                Inicio
              </NavLink>
              <NavLink to="/login" className="navLink">
                Salir
              </NavLink>
              </>
            )
            : (
              null
            )
        }

      </div>
    </div>
  );
};
