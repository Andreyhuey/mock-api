"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
  codes: {
    type: "array",
    minItems: 100,
    maxItems: 120,
    items: {
      required: ["id", "testType", "code", "dateCreated", "usedBy", "status"],
      type: "object",
      properties: {
        id: {
          type: "string",
          faker: "string.uuid",
        },
        testType: {
          type: "string",
          enum: ["hepatitis b", "malaria", "hepatitis c", "Hiv/Aids"],
        },
        code: {
          type: "string",
          faker: "string.uuid",
          maxLength: 5,
          minLength: 5,
        },
        dateCreated: {
          type: "string",
          faker: "date.past",
        },
        usedBy: {
          type: "string",
          faker: "person.firstName",
        },
        status: {
          type: "string",
          enum: ["used", "active"],
        },
      },
    },
  },
};
exports.default = schema;
