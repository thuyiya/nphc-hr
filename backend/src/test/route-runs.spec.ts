import request from "supertest";
import { assert } from "chai";

import createServer from "../server";

const app = createServer();

describe("API Router Tests", () => {
  describe("Test validation", () => {
    it("it shoud give the 400 for route /v1/convertor", (done) => {
      request(app).get("/v1/convertor").expect(400, done);
    });

    it("it shoud give the error code for /v1/convertor", (done) => {
      request(app)
        .get("/v1/convertor")
        .expect("Content-Type", /json/)
        .expect(400)
        .then((response) => {
          assert(response.body.code == 4011, "status code");
          assert(response.body.message == "VALIDATION_ERROR", "message");
          assert(response.body.success == false, "success");
          done();
        })
        .catch((err) => done(err));
    });

    it("it shoud give the error code for /v1/convertor?value=0", (done) => {
        request(app)
          .get("/v1/convertor?value=0")
          .expect("Content-Type", /json/)
          .expect(400)
          .then((response) => {
            assert(response.body.code == 4011, "status code");
            assert(response.body.message == "VALIDATION_ERROR", "message");
            assert(response.body.success == false, "success");
            assert(response.body.data == "Number combinations can not contain 0 or 1", "data");
            done();
          })
          .catch((err) => done(err));
      });


      it("it shoud give the error code for /v1/convertor?value=1", (done) => {
        request(app)
          .get("/v1/convertor?value=1")
          .expect("Content-Type", /json/)
          .expect(400)
          .then((response) => {
            assert(response.body.code == 4011, "status code");
            assert(response.body.message == "VALIDATION_ERROR", "message");
            assert(response.body.success == false, "success");
            assert(response.body.data == "Number combinations can not contain 0 or 1", "data");
            done();
          })
          .catch((err) => done(err));
      });

      it("it shoud give the success code for /v1/convertor?value=23", (done) => {
        request(app)
          .get("/v1/convertor?value=23")
          .expect("Content-Type", /json/)
          .expect(200)
          .then((response) => {
            assert(response.body.code == 2001, "status code");
            assert(response.body.message == "SUCCESSFULL", "message");
            assert(response.body.success == true, "success");
            assert(response.body.data == "ad, ae, af, bd, be, bf, cd, ce, cf", "data");
            done();
          })
          .catch((err) => done(err));
      });

      it("it shoud give the error code for /v1/convertor?value=2343531", (done) => {
        request(app)
          .get("/v1/convertor?value=2343531")
          .expect("Content-Type", /json/)
          .expect(400)
          .then((response) => {
            assert(response.body.code == 4011, "status code");
            assert(response.body.message == "VALIDATION_ERROR", "message");
            assert(response.body.success == false, "success");
            assert(response.body.data == "Number combinations can not contain 0 or 1", "data");
            done();
          })
          .catch((err) => done(err));
      });

      it("it shoud give the success code for /v1/convertor?value=223", (done) => {
        request(app)
          .get("/v1/convertor?value=223")
          .expect("Content-Type", /json/)
          .expect(200)
          .then((response) => {
            assert(response.body.code == 2001, "status code");
            assert(response.body.message == "SUCCESSFULL", "message");
            assert(response.body.success == true, "success");
            assert.notEqual(response.body.data , "ad, ae, af, bd, be, bf, cd, ce, cf", "these should not equal");
            done();
          })
          .catch((err) => done(err));
      });
  });
});
