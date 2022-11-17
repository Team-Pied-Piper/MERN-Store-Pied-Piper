import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/LogoPiedPiper.png";
import cerrarsesion from "../images/opcion-de-cerrar-sesion.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__contenedor-derecha">
        <div className="header__contenedor-logo">
          <img src={logo} alt="logo" className="header__logo" />
        </div>
        <div className="header__contenedor-nav">
          <nav className="header__nav">
            <ul className=" header__ul">
              <Link to="/store-pied-piper">
                <li className="header__li">Tienda</li>
              </Link>
              <Link to="carrito">
                <li className="header__li">Carrito</li>
              </Link>
              <Link to="productos-admin">
                <li className="header__li">Productos-Admin</li>
              </Link>
              <Link to="ventas-admin">
                <li className="header__li">Ventas</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__contenedor-salir">
        <img src={cerrarsesion} alt="salir" className="header__salir" />
      </div>
    </header>
  );
};

export { Header };
