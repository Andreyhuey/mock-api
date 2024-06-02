"use strict";
// inorder to run this test please ensure that you run in your terminal `npm run start-users`;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const supertest = require("supertest"); // Library for making HTTP requests for testing
describe("GET /users endpoint", () => {
    it("should return a list of users", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest("http://localhost:9999").get("/users");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true); // Check if response is an array
    }));
});
describe("POST /users endpoint", () => {
    it("should create a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = {
            name: "Ola-Obaado Oluwadara",
            email: "andreyhuey777@gmail.com",
            age: 22,
        };
        const response = yield supertest("http://localhost:9999")
            .post(`/users`)
            .send(newUser)
            .expect(201); // Expect HTTP status code 201 for successful creation
        // Verify the response body contains the correct user information
        expect(response.body).toEqual(expect.objectContaining(newUser));
        // This assertion checks if the response body contains all the properties of newUser
    }));
});
// Note takes the user id into consideration so please ensure to replace it with an id present in the localhost:9999/user endpoint
describe("PUT /users/:id endpoint", () => {
    it("should update a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const userId = "c5807c5b-86d0-4d92-947c-ca067e9218bd"; // Replace with an actual user ID
        const updatedUserData = {
            name: "Justina abigail",
            email: "john.doe@gmail.com",
            age: 34
        };
        const response = yield supertest("http://localhost:9999")
            .put(`/users/${userId}`)
            .send(updatedUserData)
            .expect(200); // Expect success status code
        // Convert userId to a string or parse received value as a number for comparison
        const userIdString = userId.toString();
        expect(response.body).toHaveProperty("id", userIdString); // Check for updated user ID
        expect(response.body.name).toEqual(updatedUserData.name); // Verify name update
        expect(response.body.email).toEqual(updatedUserData.email); // Verify email update
    }));
});
describe("DELETE /users/:id endpoint", () => {
    it("should delete a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const userId = "bc4d5b6d-4f90-4969-9157-c1c19b4f264b";
        const response = yield supertest("http://localhost:9999")
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
        yield supertest("http://localhost:9999")
            .get(`/users/${userId}`)
            .expect(404); // Expect user not found
    }));
});
