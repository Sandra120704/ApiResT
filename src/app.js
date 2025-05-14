import express from "express";
import medicamentosRouter from "./router/router.js";

const app = express();

app.use(express.json());
app.use(medicamentosRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "No existe el endpoint",
  });
});

export default app;