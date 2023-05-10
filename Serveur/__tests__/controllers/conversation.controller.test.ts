import request from "supertest";

const baseURL = "http://localhost:8080"

describe("ConversationController", () => {
  let userTokenJWT: string;

  beforeAll(async () => {
    const credentials = { email: "user@localhost", password: "123456789" };
    const response = await request(baseURL).post("/user/login").send(credentials);
    userTokenJWT = response.body.jwt;
  });

  describe("GET /conversation/:id", () => {
    
  }); 

  describe("POST /conversation/:id/message/send", () => {
    
  }); 

  describe("DELETE /conversation/:id/delete", () => {
    
  }); 
  
});