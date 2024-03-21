/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

import jsf from "json-schema-faker";
import schema from "../schema/mockDataSchema.js";
import fs from "fs";

const json = JSON.stringify(jsf(schema));

fs.writeFile("./dist/db.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});
