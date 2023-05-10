import request from "supertest";

const baseURL = "http://localhost:8080"

describe("MessageController", () => {
  let userTokenJWT: string;

  beforeAll(async () => {
    const credentials = { email: "user@localhost", password: "123456789" };
    const response = await request(baseURL).post("/user/login").send(credentials);
    userTokenJWT = response.body.jwt;
  });

  describe("POST /role/:id", () => {
    
  });

  describe("GET /message/:id", () => {
    
  }); 

  describe("UPDATE /message/update/:id", () => {
    
  });

  describe("DELETE /message /:id", () => {
    
  });
});