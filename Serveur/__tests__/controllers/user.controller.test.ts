import request from "supertest";
import app from "../../src/main"

describe("UserController", () => {
  let userTokenJWT: string;

  beforeAll(async () => {
    const credentials = { email: "user@localhost", password: "123456789" };
    const response = await request(app).post("/user/login").send(credentials);
    userTokenJWT = response.body.jwt;
  });


  describe("POST /user/login", () => {
    test("should return a 200 status code and a JWT when given valid credentials", async () => {
      const credentials = { email: "user@localhost", password: "123456789" };
      const response = await request(app).post("/user/login").send(credentials);
      expect(response.statusCode).toBe(200);
      expect(response.body.jwt).toBeTruthy();
    });
  });
});