import { DataTypes } from "sequelize";
import db from "../database/connection";

const Ciclo = db.define(
  "Ciclo",
  {
    ciclo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "ciclos",
  }
);

export default Ciclo;
