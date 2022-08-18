import createServer from "./server";
import Config from "./config";

const startServer = () => {
  const app = createServer();
  const port: number = parseInt(<string>process.env.PORT, 10) || Config.PORT;
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

startServer();