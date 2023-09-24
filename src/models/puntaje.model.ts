import { DataTypes } from "sequelize";
import db from "../database/connection";

const Puntaje = db.define(
  "Puntaje",
  {
    numeroAdmitidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_programa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_ciclo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_semestre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    puntaje: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "puntajes",
  }
);

export default Puntaje;
