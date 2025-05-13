import {router} from "express";
import { getMedicamentos, createMedicamento, updateMedicamento, deleteMedicamento } from "../controllers/medicamentos.controller.js";

router.get("/medicamentos", getMedicamentos);
router.post("/medicamentos", createMedicamento);
router.put("/medicamentos/:id", updateMedicamento);
router.delete("/medicamentos/:id", deleteMedicamento);

export default router;