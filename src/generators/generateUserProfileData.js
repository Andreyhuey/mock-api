// This component is written differently because it is used for testing



const jsf = require("json-schema-faker");
const faker = require("@faker-js/faker/locale/en_NG");
const  fs = require("fs");

function generateUserProfile() {
  // Import the schema from your schema file
  const schema = require("../schema/userProfileSchema.js");

  // Register faker as a custom format provider
  jsf.extend("faker", () => faker);

  // Generate JSON data based on the schema
  const json = JSON.stringify(jsf.generate(schema));

  // Write the JSON data to the output file
  fs.writeFile("./dist/user-profile.json", json, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("user profiles generated");
    }
  });
}

// Export the function to be used elsewhere
module.exports =  generateUserProfile;
