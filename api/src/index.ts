import express, { json } from "express";
import connect from "./dataBase";
import morgan from "morgan";
import router from "./routes/index";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // recibir formularios - ex- sin archivos
connect();
app.use(router);
app.listen(3000, () => {
  console.log("Server is running");
});
