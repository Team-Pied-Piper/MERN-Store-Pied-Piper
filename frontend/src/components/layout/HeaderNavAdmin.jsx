import { NavLink } from "react-router-dom";
import "../styles/HeaderNav.css";
import logo from "../img/logo-pied-horizontal.png";
import iconCard from "../img/icon-cart.svg";
import { Carrito } from "../pages/carrito/Carrito";

const HeaderNavAdmin = () => {
  return (
    <header className="header">
      <div className="header__izquierda">
        <NavLink to={"/lista-productos"}>
          <img src={logo} alt="logo" className="header__logo" />
        </NavLink>
        <nav className="header__nav">
          <ul className="header__nav-ul">
            <li>
              <NavLink
                to={"/lista-productos-admin"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Lista productos
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/lista-ventas-admin"}
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
        <pre className="header__user">Salir</pre>
      </div>
    </header>
  );
};

export { HeaderNavAdmin };
