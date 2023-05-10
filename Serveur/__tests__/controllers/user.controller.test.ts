import request from "supertest";
import { User } from '../../src/models/user.model';

const baseURL = "http://localhost:8080"

describe("UserController", () => {
  let userTokenJWT: string;
  let userToDelete: User;

  beforeAll(async () => {
    const credentials = { email: "user@localhost", password: "123456789" };
    const response = await request(baseURL).post("/user/login").send(credentials);
    userTokenJWT = response.body.jwt;
  });

  // Register route
  describe("POST /user/register", () => {
    test("should return a 200 status code and a JWT when given valid user data", async () => {
      const userData = { 
        lastname: "John", 
        firstname: "Doe", 
        birthdate: new Date(), 
        address: "1 Rue Des Lorem Ipsum",
        city: "Paris",
        country: "France",
        phoneNumber: "0606060606",  
        email: "johndoe@example.com", 
        password: "password" 
      };
      const response = await request(baseURL).post("/user/register").send(userData);
      userToDelete = response.body.user;

      expect(response.statusCode).toBe(200);
      expect(response.body.jwt).toBeTruthy();
    });

    // TODO: Veillez à renvoyer un code d'erreur 400 et non 422.
    test("should return a 400 status code and an error message when given invalid user data", async () => {
      const userData = { lastname: "John", fistname: "Doe", notValidKey: "unknown" };
      const response = await request(baseURL).post("/user/register").send(userData);

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBeTruthy();
    });
  });

  // Login route
  describe("POST /user/login", () => {
    test("should return a 200 status code and a JWT when given valid credentials", async () => {
      const credentials = { "email": "user@localhost", "password": "123456789" } 
      const response = await request(baseURL).post("/user/login").send(credentials);

      expect(response.statusCode).toBe(200);
      expect(response.body.jwt).toBeTruthy();
    });

    test("should return a 401 status code and an error message when given invalid credentials", async () => {
      const credentials = { email: "user@example.com", password: "wrongpassword" };
      const response = await request(baseURL).post("/user/login").send(credentials);

      expect(response.statusCode).toBe(401);
      expect(response.body.error).toBeTruthy();
    });
  });

  // Logout route
  describe("POST /user/logout", () => {
    test("should return a 200 status code when given a valid JWT", async () => {
      const response = await request(baseURL)
        .post("/user/logout")
        .set("x-access-token", userTokenJWT);

      expect(response.statusCode).toBe(204);
    });

    test("should return a 401 status code and an error message when not given a JWT", async () => {
      const response = await request(baseURL).post("/user/logout");

      expect(response.statusCode).toBe(401);
      expect(response.body.error).toBeTruthy();
    });
  });

  // Update route
  describe("PATCH /user/update", () => {
    test("should return a 204 status code when given valid update data and a valid JWT", async () => {
      const updateData = { firstname: "Jane" };
      const response = await request(baseURL)
        .patch("/user/update")
        .set("x-access-token", userTokenJWT)
        .send(updateData);

      expect(response.statusCode).toBe(204);
    });

    test("should return a 401 status code when not given a JWT", async () => {
      const updateData = { firstname: "Jane" };
      const response = await request(baseURL).patch("/user/update").send(updateData);

      expect(response.statusCode).toBe(401);
    });
  });

  // Delete route
  describe("DELETE /user/:id", () => {
    test("should return a 204 status code when given a valid JWT and user ID", async () => {
      const response = await request(baseURL)
        .delete(`/user/${userToDelete.id}`)
        .set("x-access-token", userTokenJWT);

      expect(response.statusCode).toBe(204);
    });

    test("should return a 401 status code and an error message when not given a JWT", async () => {
      const response = await request(baseURL).delete(`/user/${userToDelete.id}`);

      expect(response.statusCode).toBe(401);
      expect(response.body.error).toBeTruthy();
    });

    test("should return a 404 status code and an error message when given an invalid user ID", async () => {
      const response = await request(baseURL)
        .delete(`/user/invalidUserId`)
        .set("x-access-token", userTokenJWT);

      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBeTruthy();
    });
  });
});