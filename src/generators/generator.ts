import jsf from "json-schema-faker";
import { faker } from "@faker-js/faker/locale/en_NG";
import schema from "../schema/schema";
import fs from "fs";

// Register faker as a custom format provider
jsf.extend("faker", () => faker);

const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./dist/data.json", json, function (err) {
  if (err) {
    return console.error(err);
  } else {
    console.log("data generated");
  }
});
