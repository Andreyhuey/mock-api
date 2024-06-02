"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
    users: {
        type: "array",
        minItems: 100,
        maxItems: 100,
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    faker: "string.uuid",
                },
                name: {
                    type: "string",
                    faker: "person.firstName",
                },
                email: {
                    type: "string",
                    format: "email",
                    faker: "internet.email",
                },
                age: {
                    type: "integer",
                    minimum: 18,
                    maximum: 60,
                },
            },
            required: ["id", "name", "email", "age"],
        },
    },
};
exports.default = schema;
