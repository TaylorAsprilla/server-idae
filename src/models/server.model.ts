import cors from "cors";
import express, { Application } from "express";
import db from "../database/connection";
import programaRoutes from "../routes/programa.routes";
import semestreRoutes from "../routes/semestre.routes";
import emailRoutes from "../routes/email.routes";
import puntajeRoutes from "../routes/puntaje.routes";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    home: "/",
    programas: "/idae/api/programas",
    semestres: "/idae/api/semestres",
    email: "/idae/api/email",
    puntaje: "/idae/api/puntaje",
  };

  constructor() {
    this.app = express();

    // Habilitar trust proxy para manejar direcciones IP detrás de un proxy
    this.app.set("trust proxy", true);
    this.port = process.env.PORT || "3000";

    // Métodos Iniciales
    this.dbConnection();
    this.midedlewares();
    console.log("Entra");
    // Definir mis rutas
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Database Online");
    } catch (error) {
      console.log(error);
    }
  }

  midedlewares() {
    // CORS
    this.app.use(cors());

    // Lectura del body
    this.app.use(express.json());

    // Carpeta pública
    // this.app.use(express.static("public")); //TODO Carpeta pública

    this.app.get("/", (req, res, next) =>
      res.status(200).json({ msg: "IDAE Pruebas Estandarizadas" })
    );
  }

  routes() {
    // this.app.use(this.apiPaths.home, homeRoutes);
    this.app.use(this.apiPaths.programas, programaRoutes);
    this.app.use(this.apiPaths.semestres, semestreRoutes);
    this.app.use(this.apiPaths.email, emailRoutes);
    this.app.use(this.apiPaths.puntaje, puntajeRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

export default Server;
