import { Request, Response } from "express";
import Programa from "../models/programa.model";
import db from "../database/connection";

export const getprogramas = async (req: Request, res: Response) => {
  try {
    const programa = await Programa.findAll({
      order: db.col("programa"),
    });

    res.json({
      ok: true,
      programas: programa,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
      error,
    });
  }
};
