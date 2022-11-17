import iconMinus from "../../images/icon-minus.svg";
import iconPlus from "../../images/icon-plus.svg";
import iconDelete from "../../images/icon-delete.svg";
import "../../styles/carrito.css";

const Carrito = () => {
  return (
    <section className="section, section__carrito">
      <div className="section__titulo-container">
        <h1 className="section__titulo">Tus productos</h1>
      </div>
      <div className="carrito__contenedor">
        <div className="carrito__contenedor-izquierda">
          <div className="carrito__compras-titulo-contenedor">
            <h3 className="carrito__compras-titulo-imagen">Imagen</h3>
            <h3 className="carrito__compras-titulo-cantidad">Cantidad</h3>
            <h3 className="carrito__compras-titulo-producto">Producto</h3>
            <h3 className="carrito__compras-titulo-valor">Valor</h3>
            <h3 className="carrito__compras-titulo-total">Total</h3>
          </div>

          {/* productos carrito */}

          <div className="producto-carrito__contenedor">
            <div className="producto-carrito__contenedor-item">
              <img
                src="https://m.media-amazon.com/images/I/51dqj3nsvPL._AC_UY327_FMwebp_QL65_.jpg"
                alt="imagen producto"
                className="producto-carrito__imagen"
              />
            </div>
            <div className="producto-carrito__contenedor-item">
              <div className="producto-carrito__cantidad-input-contenedor">
                <img src={iconMinus} alt="icono menos" />
                <p>0</p>
                <img src={iconPlus} alt="icono mas" />
              </div>
              <div className="productCard__table-delete">
                <img src={iconDelete} />
              </div>
            </div>
            <div className="producto-carrito__contenedor-item">
              <p className="productCard__table-producto">Mens Golf Polo</p>
            </div>
            <div className="producto-carrito__contenedor-item">
              <p className="productCard__table-vu">55000</p>
            </div>
            <div className="producto-carrito__contenedor-item">
              <p className="productCard__table-vt">
                {/* ${formatearMoneda(product.precio * product.cantidad)} */}0
              </p>
            </div>
          </div>

          {/* productos carrito */}
        </div>
        <div className="carrito__contenedor-derecha">
          <h2 className="carrito__subtitulos">Detalle de compra</h2>
          <p className="carrito__total">
            Total a pagar: $ <span className="carrito__costo">total</span>
          </p>
          <p className="carrito__total-productos">
            Cantidad de productos: cantidad productos
          </p>
          <div className="carrito__conenedor-btn">
            <button className="carrito__btn-finalizar-compra">
              Finalizar Compra
            </button>
            <button className="carrito__btn-cancelar">Cancelar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Carrito };
