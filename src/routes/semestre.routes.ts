import { Router } from "express";
import { getSemestres } from "../controller/semestre.controller";

const router = Router();

router.get("/", getSemestres);
// router.get("/todos", validarJWT, getTodosLosUsuarios);

export default router;
