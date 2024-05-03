import express from "express";
import connect from "./dataBase";
import morgan from "morgan";
import router from "./routes/index";
import { fillDb } from "./data/fillDb";
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // recibir formularios - ex- sin archivos
app.use(cors());
app.use(router);
app.listen(3000, async () => {
  await connect();
  await fillDb(); //cargando usuarios en la base de datos para pruebas
  console.log("Server is running");
});
