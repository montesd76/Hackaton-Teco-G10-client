import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  console.log(user);
  return (
    <div className="login">
      <div className="login-container">
        <h2>Mini Flow</h2>
        <form className="login-formGroup">
          <label htmlFor="">
            <input
              type="text"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Ingrese su Correo"
            />
          </label>
          <label htmlFor="">
            <input
              type={user.showPassword ? "text" : "password"}
              id="password"
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
          <button className="login-reg-writeButton">INICIAR SESION</button>
        </form>
      </div>
    </div>
  );
};
