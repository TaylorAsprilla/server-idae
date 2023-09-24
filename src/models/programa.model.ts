import { DataTypes } from "sequelize";
import db from "../database/connection";

const Programa = db.define(
  "Programa",
  {
    programa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "programa",
  }
);

export default Programa;
