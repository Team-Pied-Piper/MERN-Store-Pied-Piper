import express from "express";
import dotenv from "dotenv"; //dependencia que nos ayuda a generar variables de entorno en .env
import conectarDB from "./config/db.js";
import usuarioRouter from "./routers/usuarioRoutes.js";
import productoRouter from "./routers/productoRoutes.js";
import ventaRouter from "./routers/ventaRoutes.js";

const app = express();

app.use(express.json()); //para procesar informacion tipo json
dotenv.config(); //para que env busque variables en .env
conectarDB(); //realiza coneccion a Mongo DB

//----------ROUTING----------
app.use("/api/usuarios", usuarioRouter);
app.use("/api/productos", productoRouter);
app.use("/api/ventas", ventaRouter);
//----------ROUTING----------

const PORT = process.env.PORT || 4000; //establece pueto de coneccion dado por servidor de produccion o default 400
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
