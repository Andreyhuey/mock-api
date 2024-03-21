import jsf from "json-schema-faker";
import schema from "../schema/movieDataSchema.js";
import fs from "fs";

const json =
  jsf.extend("faker", () => faker) || JSON.stringify(jsf.generate(schema));

fs.writeFile(".dist/movie.json", json, function (err) {
  if (err) {
    return console.error(err);
  } else {
    console.log("Movie data generated");
  }
});
