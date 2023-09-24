import { Router } from "express";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar-campos";
import { buscarPuntaje } from "../controller/puntaje.controller";

const router = Router();

router.post(
  "/",
  [
    check("id_programa", "Seleccione el programa").not().isEmpty(),
    check("id_semestre", "Seleccionae el Semestre").not().isEmpty(),
    validarCampos,
  ],
  buscarPuntaje
);

export default router;
