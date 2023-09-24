import { Router } from "express";
import { getprogramas } from "../controller/programa.controller";

const router = Router();

router.get("/", getprogramas);
// router.get("/todos", validarJWT, getTodosLosUsuarios);

export default router;
