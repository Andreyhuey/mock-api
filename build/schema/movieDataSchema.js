"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
    type: "object",
    properties: {
        movies: {
            type: "array",
            minItems: 10,
            maxItems: 20,
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
                    rating: {
                        type: "number",
                        minimum: 5,
                    },
                    year: {
                        type: "number",
                        maximum: 4,
                    },
                },
                required: ["id", "rating", "name", "year"],
            },
        },
    },
    required: ["movies"],
};
exports.default = schema;
