import jsf from "json-schema-faker";
import schema from "../schema/testDataSchema.js";
import { faker } from "@faker-js/faker/locale/en_NG";
import fs from "fs";

// Register faker as a custom format provider
jsf.extend("faker", () => faker);

const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./dist/test-data.json", json, function (err) {
  if (err) {
    return console.error(err);
  } else {
    console.log("test data generated");
  }
});
