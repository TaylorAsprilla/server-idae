import { DataTypes } from "sequelize";
import db from "../database/connection";

const Email = db.define(
  "Email",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "email",
  }
);

export default Email;
