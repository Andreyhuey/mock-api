import jsf from "json-schema-faker";
import schema from "../schema/userProfileSchema.js";
import { faker } from "@faker-js/faker";
import fs from "fs";

// Register faker as a custom format provider
jsf.extend("faker", () => faker);

const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./dist/user-profile.json", json, function (err) {
  if (err) {
    return console.error(err);
  } else {
    console.log("user profiles generated");
  }
});
