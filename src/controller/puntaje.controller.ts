import { Request, Response } from "express";
import Puntaje from "../models/puntaje.model";

export const buscarPuntaje = async (req: Request, res: Response) => {
  const { id_programa, id_semestre } = req.body;

  try {
    const resultado = await Puntaje.findOne({
      attributes: ["puntaje"],
      where: {
        id_programa,
        id_semestre,
      },
    });

    if (!resultado) {
      return res.status(404).json({
        ok: false,
        msg: "No aplica",
      });
    }

    res.json({
      ok: true,
      msg: `Se encóntró el puntaje`,
      puntaje: resultado.getDataValue("puntaje"),
    });
  } catch (error) {
    console.error("Error al realizar la búsqueda:", error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
      error,
    });
  }
};
