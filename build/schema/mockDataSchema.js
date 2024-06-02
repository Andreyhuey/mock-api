"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
    type: "object",
    properties: {
        users: {
            type: "array",
            minItems: 10,
            maxItems: 15,
            items: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        faker: "string.uuid",
                    },
                    firstName: {
                        type: "string",
                        faker: "name.firstName",
                    },
                    lastName: {
                        type: "string",
                        faker: "name.lastName",
                    },
                    userName: {
                        type: "string",
                        faker: "name.userName",
                    },
                    email: {
                        type: "string",
                        faker: "internet.email",
                    },
                },
                required: ["id", "type", "lastname", "email"],
            },
        },
    },
    required: ["users"],
};
exports.default = schema;
