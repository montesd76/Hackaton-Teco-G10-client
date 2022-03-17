import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  return (
    <div className="login">
      <div className="login-container">
        <h2>Mini Flow</h2>
        <form
          className="login-formGroup"
          method="POST"
          action="https://miniflow2022.herokuapp.com/auth/login"
        >
          <label htmlFor="">
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Ingrese su Correo"
            />
          </label>
          <label htmlFor="">
            <input
              type={user.showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Contraseña"
            />
          </label>
          <label htmlFor="showPassword">
            Mostrar contraseña
            <input
              type="checkbox"
              id="showPassword"
              value={user.showPassword}
              onChange={() =>
                setUser({ ...user, showPassword: !user.showPassword })
              }
            />
          </label>
          <button type="submit" className="login-reg-writeButton">
            INICIAR SESION
          </button>
        </form>
      </div>
    </div>
  );
};
