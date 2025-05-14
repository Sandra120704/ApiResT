import { Router } from "express";
import { createMedicamento, deleteMedicamento, getMedicamentosById, getMedicamentos, updateMedicamento } from "../controllers/medicamentos.controller.js";


const router = Router();

router.get("/Medicamentos", getMedicamentos);
router.get("/Medicamentos/:id", getMedicamentosById);
router.post("/Medicamentos", createMedicamento);
router.put("/Medicamentos/:id", updateMedicamento);
router.delete("/Medicamentos/:id", deleteMedicamento);


export default router;