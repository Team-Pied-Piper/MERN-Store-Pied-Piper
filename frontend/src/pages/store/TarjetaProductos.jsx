import "../../styles/tarjetaProductos.css";

const TarjetaProductos = () => {
  return (
    <div className="section__container-productos">
      <div className="product">
        <img
          className="product__img"
          src="https://m.media-amazon.com/images/I/51dqj3nsvPL._AC_UY327_FMwebp_QL65_.jpg"
          alt="producto"
        />
        <h2 className="product__name">Mens Golf Polo</h2>
        <div className="product__details">
          <p className="product__price">
            $<span className="product__price-cost">55000</span>
          </p>
          <p className="product__stock">
            Stock:
            <span className="product__stock-count">23</span>
          </p>
          <button
            className="AddCartBtn"
            // className={item.stock > 0 ? "AddCartBtn" : "NoDisponibleBtn"}
          >
            Agragar 🛒
            {/* {item.stock > 0 ? "Agragar" : "No Disponible 😢"} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export { TarjetaProductos };
