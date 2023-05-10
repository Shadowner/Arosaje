import request from "supertest";

const baseURL = "http://localhost:8080"

describe("FileController", () => {
  let userTokenJWT: string;

  beforeAll(async () => {
    const credentials = { email: "user@localhost", password: "123456789" };
    const response = await request(baseURL).post("/user/login").send(credentials);
    userTokenJWT = response.body.jwt;
  });

  describe("GET /file/:id", () => {
    
  }); 

  describe("GET /file/public/all", () => {
    
  }); 

  describe("GET /file/all", () => {
    
  }); 

  describe("POST /file/upload", () => {
    
  }); 

  describe("PATCH /file/update", () => {
    
  }); 

  describe("DELETE /file/:id/delete", () => {
    
  }); 
});