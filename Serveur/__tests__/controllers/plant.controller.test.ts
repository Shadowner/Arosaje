import request from "supertest";

const baseURL = "http://localhost:8080"

describe("PlantController", () => {
  let userTokenJWT: string;

  beforeAll(async () => {
    const credentials = { email: "user@localhost", password: "123456789" };
    const response = await request(baseURL).post("/user/login").send(credentials);
    userTokenJWT = response.body.jwt;
  });

  // Create route
  // TODO: Ajouter la longitude et la latitude dans les DTO de plante.
  describe("POST /plant/create", () => {
    test("should return a 200 status code and a JWT when given valid plant data", async () => {
      const plantData = { 
        name: "Succulent", 
        description: "A small plant that can store water in its leaves", 
        type: 1,
        size: 1.10,
        longitude: 3.876526,
        latitude: 43.607369
      };
      const response = await request(baseURL)
      .post("/plant/create")
      .set("x-access-token", userTokenJWT)
      .send(plantData);

      expect(response.statusCode).toBe(200);
      expect(response.body.name).toEqual("Succulent");
      expect(response.body.description).toEqual("A small plant that can store water in its leaves");
      expect(response.body.type).toEqual(1);
      expect(response.body.longitude).toEqual(3.876526);
      expect(response.body.latitude).toEqual(43.607369);
    });

    test("should return a 401 status code and an error message when not given a JWT", async () => {
        const plantData = { 
            name: "Succulent", 
            description: "A small plant that can store water in its leaves", 
            type: 1,
            size: 1.10,
            longitude: 3.876526,
            latitude: 43.607369
        };
        const response = await request(baseURL).post("/plant/create").send(plantData);
  
        expect(response.statusCode).toBe(401);
        expect(response.body.error).toBeTruthy();
    });
  }); 

  describe("GET /plant/:id", () => {
    
  }); 

  describe("GET /plant/all", () => {
    
  });

  describe("GET /plant/public/all", () => {
    
  });

  describe("GET /plant/query", () => {
    
  });

  describe("PATCH /plant/update/:id", () => {
    
  });
  
  describe("DELETE /plant/:id", () => {
    
  });
});