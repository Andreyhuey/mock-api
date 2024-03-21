import { faker } from "@faker-js/faker";

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
            type: "number",
            unique: true,
            minimum: 1,
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

export default schema;
