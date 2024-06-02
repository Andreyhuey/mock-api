import jsf from "json-schema-faker";
import { faker } from "@faker-js/faker/locale/en_NG";
import schema from "../schema/advancedLabTestsSchema.js";
import fs from "fs";

// Register faker as a custom format provider
jsf.extend("faker", () => faker);

const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./dist/lab-tests.json", json, function (err) {
  if (err) {
    return console.error(err);
  } else {
    console.log("lab tests generated");
  }
});
