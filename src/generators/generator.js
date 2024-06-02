"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_schema_faker_1 = __importDefault(require("json-schema-faker"));
const en_NG_1 = require("@faker-js/faker/locale/en_NG");
const schema_1 = __importDefault(require("../schema/schema"));
const fs_1 = __importDefault(require("fs"));
// Register faker as a custom format provider
json_schema_faker_1.default.extend("faker", () => en_NG_1.faker);
const json = JSON.stringify(json_schema_faker_1.default.generate(schema_1.default));
fs_1.default.writeFile("./dist/data.json", json, function (err) {
    if (err) {
        return console.error(err);
    }
    else {
        console.log("data generated");
    }
});
