import jsf from "json-schema-faker";
import schema from "../schema/userSchema.js";
import { faker } from "@faker-js/faker/locale/en_NG";
import fs from "fs";

// Register faker as a custom format provider
jsf.extend("faker", () => faker);

const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./dist/user.json", json, function (err) {
  if (err) {
    return console.error(err);
  } else {
    console.log("user data generated");
  }
});

