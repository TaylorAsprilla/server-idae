require("dotenv").config();

const config: any = {
  development: {
    database: {
      username: process.env.DB_USERNAME || "u434635530_idae",
      password: process.env.DB_PASSWORD || "s1/X1{5hU£5j",
      database: process.env.DB_DATABASE || "u434635530_idaePruebas",
      host: process.env.DB_HOST || "212.1.211.203",
      dialect: process.env.DB_DIALECT || "mysql",
    },
    email: {
      email: process.env.EMAIL,
      password: process.env.EMAIL_PASSWORD,
    },
  },
  production: {
    database: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
    },
    email: {
      email: process.env.EMAIL,
      password: process.env.EMAIL_PASSWORD,
    },
  },
};

export default config;
