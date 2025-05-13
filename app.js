import express from "express";
import medicamentos from "./router/router.js";

const app = express();

app.use(express.json());
app.use(medicamentos);

app.use((req, res, next) => {
  res.status(404).json({
    message: "No se encontró la ruta"
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});