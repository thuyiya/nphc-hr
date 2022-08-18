import request from "supertest";
import createServer from "../server";

const app = createServer();

describe("API Server Tests", () => {
  describe("Test sever running", () => {
    it("it shoud give the 200 for route /v1", (done) => {
      request(app).get("/v1").expect(200, done);
    });

    it("it shoud give the 404  for root", (done) => {
      request(app).get("/").expect(404, done);
    });
  });
});
