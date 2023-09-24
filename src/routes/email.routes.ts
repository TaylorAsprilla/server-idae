import { check } from "express-validator";
import { Router } from "express";
import { crearEmail, getEmails } from "../controller/email.controller";
import validarCampos from "../middlewares/validar-campos";

const router = Router();

router.get("/", getEmails);
router.post(
  "/",
  [
    check("email", "El correo electrónico es obligatorio").isEmail(),

    validarCampos,
  ],
  crearEmail
);

export default router;
