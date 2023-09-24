import { DataTypes } from "sequelize";
import db from "../database/connection";

const Semestre = db.define(
  "Semestre",
  {
    semestre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "semestres",
  }
);

export default Semestre;
