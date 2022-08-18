import { ENV_CONFIG } from "../types";

const findEnvironmentVariable = (): ENV_CONFIG => {
  switch (process.env.REACT_APP_ENV) {
    case "development":
      return {
        base_url: "http://localhost:8000/v1",
        v: "1.0.0",
      };

    case "staging":
      return {
        base_url: "http://localhost:8000/v1",
        v: "1.0.0",
      };

    case "production":
      return {
        base_url: "http://localhost:8000/v1",
        v: "1.0.0",
      };

    default:
      return {
        base_url: "http://localhost:8000/v1",
        v: "1.0.0",
      };
  }
};

export default findEnvironmentVariable();
