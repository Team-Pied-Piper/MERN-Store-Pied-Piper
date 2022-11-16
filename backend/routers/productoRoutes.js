import express from "express";
import {
  nuevoProducto,
  obtenerProductos,
  obtenerProducto,
  editarProducto,
  eliminarProducto,
} from "../controllers/productoController.js";
import checkAuth from "../middleware/checkAuth.js";

const productoRouter = express.Router();

productoRouter.route("/").get(obtenerProductos).post(nuevoProducto);

productoRouter
  .route("/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(eliminarProducto);

export default productoRouter;
