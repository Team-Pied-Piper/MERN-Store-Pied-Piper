import { NavLink, useNavigate } from "react-router-dom";
import "../styles/HeaderNav.css";
import logo from "../img/logo-pied-horizontal.png";

const HeaderNavAdmin = () => {
  const navigate = useNavigate();
  const salir = () => {
    localStorage.setItem("token", "");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header__izquierda">
        <NavLink to={"/PiedPiperAdmin"}>
          <img src={logo} alt="logo" className="header__logo" />
        </NavLink>
        <nav className="header__nav">
          <ul className="header__nav-ul">
            <li>
              <NavLink
                to={"/PiedPiperAdmin"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Lista productos
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/PiedPiperAdmin/lista-ventas"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ventas
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__derecha">
        <div className="header__carrito-conetenedor"></div>
        <pre className="header__user" onClick={salir}>
          Salir
        </pre>
      </div>
    </header>
  );
};

export { HeaderNavAdmin };
