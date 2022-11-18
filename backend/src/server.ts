import Express, { Application, Router } from "express";
import Cors from "cors";
import AppRouter from "./routes";
import connectDb from './config/database';
import Config from "./config";

export default function createServer() {
  const app: Application = Express();
  const expressRoute: Router = Express.Router();

  const options: Cors.CorsOptions = {
    origin: Config.API.allowed_origins,
  };

  //DB connection
  connectDb()

  app.use(Cors(options));
  app.use(Express.json());
  app.use(Config.API.api_prefix, AppRouter(expressRoute));

  return app;
}
