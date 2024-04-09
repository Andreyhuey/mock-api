// inorder to run this test please ensure that you run in your terminal `npm run start-users`;


const supertest = require("supertest"); // Library for making HTTP requests for testing

describe("GET /users endpoint", () => {
  it("should return a list of users", async () => {
    const response = await supertest("http://localhost:9999").get("/users");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Check if response is an array
  });
});

describe("POST /users endpoint", () => {
  it("should create a user", async () => {
    const newUser = {
      name: "Ola-Obaado Oluwadara",
      email: "andreyhuey777@gmail.com",
      age: 22,
    };

    const response = await supertest("http://localhost:9999")
      .post(`/users`)
      .send(newUser)
      .expect(201); // Expect HTTP status code 201 for successful creation

    
    // Verify the response body contains the correct user information
    expect(response.body).toEqual(expect.objectContaining(newUser));
    // This assertion checks if the response body contains all the properties of newUser
  });
})

// Note takes the user id into consideration so please ensure to replace it with an id present in the localhost:9999/user endpoint
describe("PUT /users/:id endpoint", () => {
  it("should update a user", async () => {
    const userId = "c5807c5b-86d0-4d92-947c-ca067e9218bd"; // Replace with an actual user ID
    const updatedUserData = {
      name: "Justina abigail",
      email: "john.doe@gmail.com",
      age: 34
    };

    const response = await supertest("http://localhost:9999")
      .put(`/users/${userId}`)
      .send(updatedUserData)
      .expect(200); // Expect success status code

    // Convert userId to a string or parse received value as a number for comparison
    const userIdString = userId.toString();

    expect(response.body).toHaveProperty("id", userIdString); // Check for updated user ID
    expect(response.body.name).toEqual(updatedUserData.name); // Verify name update
    expect(response.body.email).toEqual(updatedUserData.email); // Verify email update
  });
});

describe("DELETE /users/:id endpoint", () => {
  it("should delete a user", async () => {
    const userId = "bc4d5b6d-4f90-4969-9157-c1c19b4f264b";

    const response = await supertest("http://localhost:9999")
      .delete(`/users/${userId}`)
      .expect(200); // Expect success status code

    // Verify that the response body is empty (optional)
    expect(response.body).toEqual({
      id: "bc4d5b6d-4f90-4969-9157-c1c19b4f264b",
      name: "Buchi",
      email: "Akanni.Aremu54@hotmail.com",
      age: 44,
    });
     // Assuming the response body is empty for successful deletion

    // You can also check if the user was deleted successfully by sending another request to fetch the user
    // For example, you can expect a 404 status code if the user is not found after deletion
    await supertest("http://localhost:9999")
      .get(`/users/${userId}`)
      .expect(404); // Expect user not found
  });
});


