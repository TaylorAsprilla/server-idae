import { Request, Response } from "express";
import db from "../database/connection";
import Semestre from "../models/semestre.model";

export const getSemestres = async (req: Request, res: Response) => {
  try {
    const semestre = await Semestre.findAll({
      order: db.col("semestre"),
    });

    res.json({
      ok: true,
      semestres: semestre,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
      error,
    });
  }
};
