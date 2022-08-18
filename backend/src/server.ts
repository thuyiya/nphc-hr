import Express, { Application } from "express";
import Config from "./config";

export default function createServer() {
  const app: Application = Express();

  app.use(Express.json());
  app.use(Config.API.api_prefix, (req, res) => res.status(200).json("Hello Buddy"));

  return app;
}