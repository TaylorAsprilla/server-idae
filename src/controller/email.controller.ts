import { Request, Response } from "express";
import db from "../database/connection";
import Email from "../models/email.model";

export const getEmails = async (req: Request, res: Response) => {
  try {
    const email = await Email.findAll({
      order: db.col("email"),
    });

    res.json({
      ok: true,
      email,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
      error,
    });
  }
};

export const crearEmail = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const crearEmail = await Email.build(req.body);

    const emailCreado = await crearEmail.save();

    res.json({
      ok: true,
      msg: `El Email ${email} se creó satisfactoriamente`,
      email,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
      error,
    });
  }
};
