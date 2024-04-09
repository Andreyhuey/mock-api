import { faker } from "@faker-js/faker/locale/en_US";

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

export default schema;
