import request from "supertest";

const baseURL = "http://localhost:8080"

describe("RoleController", () => {
  let userTokenJWT: string;

  beforeAll(async () => {
    const credentials = { email: "user@localhost", password: "123456789" };
    const response = await request(baseURL).post("/user/login").send(credentials);
    userTokenJWT = response.body.jwt;
  });

  describe("GET /role/:id", () => {
    
  }); 

  describe("GET /role/all", () => {
    
  });

  describe("GET /role/public/all", () => {
    
  });

  describe("DELETE /role/:id", () => {
    
  });

  describe("UPDATE /role/update/:id", () => {
    
  });
});