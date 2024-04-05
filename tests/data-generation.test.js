const generateUserProfile = require("../src/generators/generateUserProfileData.js");
const jsf = require("json-schema-faker");
const fs = require("fs").promises; // Using promises for async/await syntax
const path = require("path");
const schema = require("../src/schema/userProfileSchema.js")

// Mock dependencies to ensure test isolation
jest.mock("json-schema-faker");
jest.mock("@faker-js/faker");

// Test for successful data generation and writing
test("generates and writes user profile data to a file", async () => {
  // Define a mock for json-schema-faker.generate to control the output
  jsf.extend("faker", () => faker)
  // ]);

  const json = JSON.stringify(jsf.generate(schema));


  await generateUserProfile();

  // Assert that the file was created and contains the expected JSON data
  const filePath = path.join(__dirname, "./dist/user-profile.json");
  const fileExists = await fs.promises.stat(filePath);
  expect(fileExists).toBeTruthy();

  const fileData = await fs.promises.readFile(filePath, "utf-8");
  expect(JSON.parse(fileData)).toEqual([
    { name: "John Doe", email: "johndoe@example.com" },
    // Add expected values for other mock user profiles
  ]);
});

// Test for error handling during file writing
test("handles errors during file writing", async () => {
  // Mock fs.writeFile to simulate an error
  jest.spyOn(fs, "writeFile").mockRejectedValue(new Error("File write error"));

  try {
    await generateUserProfile();
    fail("Expected an error to be thrown");
  } catch (error) {
    expect(error.message).toBe("File write error");
  }
});
